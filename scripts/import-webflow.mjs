#!/usr/bin/env node

/**
 * Webflow → Sanity Blog Import Script
 *
 * Reads Webflow CMS export CSVs and creates Sanity blog post documents.
 *
 * Usage:
 *   node scripts/import-webflow.mjs
 *
 * Requires SANITY_WRITE_TOKEN in .env.local
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@sanity/client'
import { randomUUID } from 'crypto'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ── Load env vars from .env.local ──────────────────────────────────────────
const envPath = path.join(ROOT, '.env.local')
const envContent = fs.readFileSync(envPath, 'utf-8')
const env = {}
for (const line of envContent.split('\n')) {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) env[match[1].trim()] = match[2].trim().replace(/^"|"$/g, '')
}

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = env.SANITY_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ── CSV Parser (handles quoted fields with commas and newlines) ────────────
function parseCSV(text) {
  const rows = []
  let current = ''
  let inQuotes = false
  const lines = text.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (!inQuotes) {
      current = line
    } else {
      current += '\n' + line
    }

    // Count unescaped quotes
    let quoteCount = 0
    for (let j = 0; j < current.length; j++) {
      if (current[j] === '"') quoteCount++
    }
    inQuotes = quoteCount % 2 !== 0

    if (!inQuotes) {
      rows.push(parseCSVRow(current))
      current = ''
    }
  }

  return rows.filter((r) => r.length > 1)
}

function parseCSVRow(line) {
  const fields = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        field += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      fields.push(field)
      field = ''
    } else {
      field += ch
    }
  }
  fields.push(field)
  return fields
}

function csvToObjects(text) {
  const rows = parseCSV(text)
  if (rows.length < 2) return []
  const headers = rows[0]
  return rows.slice(1).map((row) => {
    const obj = {}
    headers.forEach((h, i) => {
      obj[h.trim()] = (row[i] || '').trim()
    })
    return obj
  })
}

// ── HTML → Sanity PortableText Converter ───────────────────────────────────

function htmlToPortableText(html) {
  if (!html) return []

  const blocks = []

  // Clean up HTML
  html = html
    .replace(/\r\n/g, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&middot;/g, '·')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))

  // Split into block-level elements
  const blockPattern =
    /<(h[2-4]|p|blockquote|ul|ol|figure)[^>]*>([\s\S]*?)<\/\1>/gi
  let match

  while ((match = blockPattern.exec(html)) !== null) {
    const tag = match[1].toLowerCase()
    const content = match[2]

    if (tag === 'ul' || tag === 'ol') {
      // Parse list items
      const liPattern = /<li[^>]*>([\s\S]*?)<\/li>/gi
      let liMatch
      while ((liMatch = liPattern.exec(content)) !== null) {
        const { children } = parseInlineContent(liMatch[1])
        blocks.push({
          _type: 'block',
          _key: randomUUID().slice(0, 12),
          style: 'normal',
          listItem: tag === 'ul' ? 'bullet' : 'number',
          level: 1,
          markDefs: extractMarkDefs(liMatch[1]),
          children,
        })
      }
    } else if (tag === 'figure') {
      // Extract image from figure
      const imgMatch = content.match(/<img[^>]+src="([^"]+)"[^>]*/i)
      const altMatch = content.match(/alt="([^"]*)"/i)
      if (imgMatch) {
        blocks.push({
          _type: 'image',
          _key: randomUUID().slice(0, 12),
          _sanityAsset: `image@${imgMatch[1]}`,
          alt: altMatch ? altMatch[1] : '',
        })
      }
    } else {
      const style =
        tag === 'h2'
          ? 'h2'
          : tag === 'h3'
            ? 'h3'
            : tag === 'h4'
              ? 'h4'
              : tag === 'blockquote'
                ? 'blockquote'
                : 'normal'

      const { children } = parseInlineContent(content)
      const markDefs = extractMarkDefs(content)

      // Skip empty blocks (just whitespace or empty ‍)
      const textContent = children.map((c) => c.text || '').join('').trim()
      if (!textContent && textContent !== '‍') continue

      blocks.push({
        _type: 'block',
        _key: randomUUID().slice(0, 12),
        style,
        markDefs,
        children,
      })
    }
  }

  // If no blocks were parsed (plain text), create a single block
  if (blocks.length === 0 && html.trim()) {
    blocks.push({
      _type: 'block',
      _key: randomUUID().slice(0, 12),
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: randomUUID().slice(0, 12),
          text: html.replace(/<[^>]+>/g, '').trim(),
          marks: [],
        },
      ],
    })
  }

  return blocks
}

function extractMarkDefs(html) {
  const defs = []
  const linkPattern = /<a[^>]+href="([^"]*)"[^>]*>/gi
  let match
  while ((match = linkPattern.exec(html)) !== null) {
    const key = randomUUID().slice(0, 12)
    defs.push({
      _type: 'link',
      _key: key,
      href: match[1],
    })
  }
  return defs
}

function parseInlineContent(html) {
  const children = []
  let linkIndex = 0

  // Remove nested block tags that might be inside
  html = html.replace(/<\/?(?:p|div)[^>]*>/gi, '')

  // Tokenize: split by inline tags
  const parts = html.split(/(<\/?(?:strong|b|em|i|code|a)[^>]*>)/gi)

  let activeMarks = []
  const markStack = []
  let currentLinkKey = null

  // Pre-extract link keys
  const linkKeys = []
  const linkPattern = /<a[^>]+href="([^"]*)"[^>]*>/gi
  let lm
  while ((lm = linkPattern.exec(html)) !== null) {
    linkKeys.push(randomUUID().slice(0, 12))
  }

  for (const part of parts) {
    if (!part) continue

    const tagMatch = part.match(/^<(\/?)(strong|b|em|i|code|a)([^>]*)>$/i)
    if (tagMatch) {
      const isClosing = tagMatch[1] === '/'
      const tagName = tagMatch[2].toLowerCase()

      if (isClosing) {
        if (tagName === 'a') {
          activeMarks = activeMarks.filter((m) => m !== currentLinkKey)
          currentLinkKey = null
        } else {
          const markName =
            tagName === 'strong' || tagName === 'b'
              ? 'strong'
              : tagName === 'em' || tagName === 'i'
                ? 'em'
                : 'code'
          activeMarks = activeMarks.filter((m) => m !== markName)
        }
      } else {
        if (tagName === 'a') {
          currentLinkKey = linkKeys[linkIndex++]
          if (currentLinkKey) activeMarks.push(currentLinkKey)
        } else {
          const markName =
            tagName === 'strong' || tagName === 'b'
              ? 'strong'
              : tagName === 'em' || tagName === 'i'
                ? 'em'
                : 'code'
          activeMarks.push(markName)
        }
      }
    } else {
      // Text content
      const text = part
        .replace(/<[^>]+>/g, '')
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
      if (text) {
        children.push({
          _type: 'span',
          _key: randomUUID().slice(0, 12),
          text,
          marks: [...activeMarks],
        })
      }
    }
  }

  if (children.length === 0) {
    children.push({
      _type: 'span',
      _key: randomUUID().slice(0, 12),
      text: '',
      marks: [],
    })
  }

  return { children }
}

// ── Category Mapper ────────────────────────────────────────────────────────

function mapCategory(tag) {
  if (!tag) return ['industry-tips']
  const t = tag.toLowerCase().trim()
  const map = {
    manufacturing: 'manufacturing',
    'inventory-management': 'inventory-management',
    inventory: 'inventory-management',
    'food-beverage': 'food-beverage',
    'food-and-beverage': 'food-beverage',
    integrations: 'integrations',
    'customer-stories': 'customer-stories',
    'industry-tips': 'industry-tips',
    'learning-center': 'industry-tips',
  }
  return [map[t] || 'industry-tips']
}

// ── Author Mapper ──────────────────────────────────────────────────────────

function mapAuthor(authorSlug) {
  const authors = {
    'brahm-meka': { name: 'Brahm Meka', role: 'Founder & CEO' },
    'brahmin-solutions': { name: 'Brahmin Solutions', role: '' },
  }
  if (!authorSlug) return { name: 'Brahmin Solutions', role: '' }
  return authors[authorSlug.toLowerCase().trim()] || { name: authorSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), role: '' }
}

// ── Upload image from URL ──────────────────────────────────────────────────

async function uploadImageFromUrl(imageUrl) {
  if (!imageUrl) return null

  try {
    const response = await fetch(imageUrl)
    if (!response.ok) {
      console.warn(`  ⚠ Failed to fetch image: ${imageUrl} (${response.status})`)
      return null
    }
    const buffer = Buffer.from(await response.arrayBuffer())
    const contentType = response.headers.get('content-type') || 'image/jpeg'

    const asset = await client.assets.upload('image', buffer, {
      contentType,
      filename: path.basename(new URL(imageUrl).pathname),
    })

    return {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    }
  } catch (err) {
    console.warn(`  ⚠ Image upload failed: ${err.message}`)
    return null
  }
}

// ── Main Import ────────────────────────────────────────────────────────────

async function importPosts() {
  const blogsCsvPath = path.join(ROOT, 'Brahmin Solutions - Live Website - Blogs.csv')
  const learningCsvPath = path.join(ROOT, 'Brahmin Solutions - Live Website - Learning Centers.csv')

  const allRows = []

  if (fs.existsSync(blogsCsvPath)) {
    const rows = csvToObjects(fs.readFileSync(blogsCsvPath, 'utf-8'))
    console.log(`📄 Found ${rows.length} blog posts in CSV`)
    allRows.push(...rows.map((r) => ({ ...r, _source: 'blog' })))
  }

  if (fs.existsSync(learningCsvPath)) {
    const rows = csvToObjects(fs.readFileSync(learningCsvPath, 'utf-8'))
    console.log(`📄 Found ${rows.length} learning center articles in CSV`)
    allRows.push(...rows.map((r) => ({ ...r, _source: 'learning-center' })))
  }

  if (allRows.length === 0) {
    console.error('No CSV files found or empty CSVs.')
    process.exit(1)
  }

  // Filter out archived and draft-only posts with no content
  const validRows = allRows.filter((row) => {
    if (row.Archived === 'true') return false
    if (!row['Rich Text'] && !row.Name) return false
    return true
  })

  console.log(`\n🚀 Importing ${validRows.length} posts to Sanity...\n`)

  let success = 0
  let skipped = 0
  let failed = 0

  for (const row of validRows) {
    const slug = row.Slug
    if (!slug) {
      console.log(`⏭ Skipping row with no slug: "${row.Name}"`)
      skipped++
      continue
    }

    // Check if post already exists
    const existing = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug }
    )
    if (existing) {
      console.log(`⏭ Already exists: "${row.Name}" (${slug})`)
      skipped++
      continue
    }

    console.log(`📝 Importing: "${row.Name}"`)

    try {
      // Parse publish date — use "Created On" as the original publish date
      // ("Published On" is unreliable — Webflow bulk-republished all posts on Nov 8 2024)
      let publishedAt = null
      if (row['Created On']) {
        const d = new Date(row['Created On'])
        if (!isNaN(d.getTime())) publishedAt = d.toISOString()
      }
      if (!publishedAt && row['Published On']) {
        const d = new Date(row['Published On'])
        if (!isNaN(d.getTime())) publishedAt = d.toISOString()
      }
      if (!publishedAt) publishedAt = new Date().toISOString()

      // Upload featured image
      let featuredImage = null
      if (row.Image) {
        featuredImage = await uploadImageFromUrl(row.Image)
        if (featuredImage) {
          featuredImage.alt = row['Alt Image Text'] || row['Atl Image Text'] || row.Name
        }
      }

      // Convert HTML body to PortableText
      const body = htmlToPortableText(row['Rich Text'] || '')

      // Build categories
      const tag = row.Tag || (row._source === 'learning-center' ? 'industry-tips' : '')
      const categories = mapCategory(tag)

      // Build author
      const author = mapAuthor(row.Author)

      // Build excerpt from Card Text or first paragraph
      let excerpt = row['Card Text'] || ''
      if (!excerpt && body.length > 0) {
        const firstBlock = body.find((b) => b._type === 'block' && b.style === 'normal')
        if (firstBlock) {
          excerpt = firstBlock.children.map((c) => c.text || '').join('')
        }
      }
      excerpt = excerpt.slice(0, 200)

      // Build SEO
      const seo = {
        metaTitle: (row['SEO Title'] || row.Name || '').slice(0, 60),
        metaDescription: excerpt.slice(0, 160),
        noIndex: false,
      }

      // Create document
      const doc = {
        _type: 'post',
        title: row.Name,
        slug: { _type: 'slug', current: slug },
        excerpt,
        publishedAt,
        categories,
        author,
        body,
        seo,
      }

      if (featuredImage) {
        doc.featuredImage = featuredImage
      }

      await client.create(doc)
      console.log(`  ✅ Created: ${slug}`)
      success++
    } catch (err) {
      console.error(`  ❌ Failed: ${slug} — ${err.message}`)
      failed++
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  console.log(`✅ Imported: ${success}`)
  console.log(`⏭ Skipped:  ${skipped}`)
  console.log(`❌ Failed:   ${failed}`)
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`)
}

importPosts().catch((err) => {
  console.error('Import failed:', err)
  process.exit(1)
})
