import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
export const apiVersion = '2024-01-01'

// Lazy client — only instantiated when projectId is available
function getClient() {
  if (!projectId) throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not set')
  return createClient({ projectId, dataset, apiVersion, useCdn: true })
}

export const client = new Proxy({} as ReturnType<typeof createClient>, {
  get(_target, prop) {
    return getClient()[prop as keyof ReturnType<typeof createClient>]
  },
})

export function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(getClient()).image(source)
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PostSummary {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  categories?: string[]
  featuredImage?: {
    asset: { _ref: string }
    alt?: string
  }
  author?: {
    name: string
    role?: string
  }
}

export interface Post extends PostSummary {
  body: PortableTextBlock[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    noIndex?: boolean
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any

// ─── Queries ──────────────────────────────────────────────────────────────────

export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    categories,
    featuredImage { asset, alt },
    author { name, role }
  }
`

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    categories,
    featuredImage { asset, alt },
    author { name, role, avatar },
    body,
    seo
  }
`

export const ALL_SLUGS_QUERY = `
  *[_type == "post"] { "slug": slug.current }
`

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function isSanityConfigured(): boolean {
  return Boolean(projectId)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const categoryLabels: Record<string, string> = {
  'inventory-management': 'Inventory Management',
  'manufacturing': 'Manufacturing',
  'food-beverage': 'Food & Beverage',
  'integrations': 'Integrations',
  'customer-stories': 'Customer Stories',
  'industry-tips': 'Industry Tips',
}
