#!/usr/bin/env node

/**
 * Publish all draft blog posts in Sanity
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@sanity/client'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// Load env
const envContent = fs.readFileSync(path.join(ROOT, '.env.local'), 'utf-8')
const env = {}
for (const line of envContent.split('\n')) {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) env[match[1].trim()] = match[2].trim().replace(/^"|"$/g, '')
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function publishAll() {
  // Find all draft posts
  const drafts = await client.fetch(
    `*[_type == "post" && _id in path("drafts.**")]{ _id, title }`
  )
  console.log(`Found ${drafts.length} draft posts\n`)

  if (drafts.length === 0) {
    // Check if they exist as non-drafts already
    const all = await client.fetch(`count(*[_type == "post"])`)
    console.log(`Total posts in dataset: ${all}`)

    // Try creating published versions from all posts
    const allPosts = await client.fetch(`*[_type == "post"]{ _id, title }`)
    const unpublished = allPosts.filter(p => !p._id.startsWith('drafts.'))
    console.log(`Non-draft posts: ${unpublished.length}`)

    // Sanity creates documents without drafts. prefix by default via client.create()
    // These are already published!
    if (unpublished.length > 0) {
      console.log('\nPosts are already published! They should be visible.')
      console.log('If blog page still shows sample data, the issue is in the fetch logic.')
    }
    return
  }

  let published = 0
  for (const draft of drafts) {
    const publishedId = draft._id.replace('drafts.', '')
    try {
      const doc = await client.fetch(`*[_id == $id][0]`, { id: draft._id })
      const { _id, _rev, _createdAt, _updatedAt, ...fields } = doc

      // Create/replace published version
      await client.createOrReplace({ ...fields, _id: publishedId })
      // Delete draft
      await client.delete(draft._id)

      console.log(`✅ Published: ${draft.title}`)
      published++
    } catch (err) {
      console.error(`❌ Failed: ${draft.title} — ${err.message}`)
    }
  }

  console.log(`\nPublished ${published} posts`)
}

publishAll().catch(console.error)
