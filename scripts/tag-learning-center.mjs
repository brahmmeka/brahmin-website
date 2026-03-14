import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@sanity/client'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const envContent = fs.readFileSync(path.join(ROOT, '.env.local'), 'utf-8')
const env = {}
for (const line of envContent.split('\n')) {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) env[match[1].trim()] = match[2].trim().replace(/^"|"$/g, '')
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  token: env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const lcSlugs = [
  'smbs-guide-to-cloud-manufacturing', 'what-is-a-universal-product-code', 'what-is-a-bill-of-materials',
  'what-is-consignment', 'pick-pack-and-ship', 'how-to-calculate-manufacturing-lead-time',
  'how-to-calculate-safety-stock', 'what-is-mrp', 'manufacturing-cost',
  'what-is-product-kitting', 'inventory-management-types', 'what-is-an-sku',
  'what-is-backordering', 'creating-sku-numbers', 'what-is-inventory-turnover',
  'weighted-average-cost-method-inventory-valuation', 'what-is-inventory-management',
  'order-picking-methods', 'calculating-total-manufacturing-cost-of-your-business',
  'consignment-inventory-a-comprehensive-guide', '10-reasons-why-minimum-order-quantity-is-important',
  'receiving-inventory-how-to-and-best-practices',
]

let updated = 0
for (const slug of lcSlugs) {
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{_id, categories}`, { slug })
  if (!post) { console.log('Not found:', slug); continue }
  const cats = (post.categories || []).filter(c => c !== 'industry-tips')
  if (!cats.includes('learning-center')) cats.push('learning-center')
  await client.patch(post._id).set({ categories: cats }).commit()
  console.log('Updated:', slug)
  updated++
}
console.log(`\nDone. Updated ${updated} posts.`)
