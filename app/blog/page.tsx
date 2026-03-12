import type { Metadata } from 'next'
import { client, ALL_POSTS_QUERY, isSanityConfigured, type PostSummary } from '@/lib/sanity'
import { SAMPLE_POSTS } from '@/lib/sanity.sample'
import BlogListingClient from './BlogListingClient'

export const metadata: Metadata = {
  title: 'Blog | Brahmin Solutions',
  description: 'Tips and insights on inventory management, production planning, and scaling your manufacturing business.',
}

export const revalidate = 60

async function getPosts(): Promise<{ posts: PostSummary[]; isSample: boolean }> {
  if (!isSanityConfigured()) {
    return { posts: SAMPLE_POSTS, isSample: true }
  }
  try {
    const posts = await client.fetch<PostSummary[]>(ALL_POSTS_QUERY)
    if (!posts?.length) return { posts: SAMPLE_POSTS, isSample: true }
    return { posts, isSample: false }
  } catch {
    return { posts: SAMPLE_POSTS, isSample: true }
  }
}

export default async function BlogPage() {
  const { posts, isSample } = await getPosts()
  return <BlogListingClient posts={posts} isSample={isSample} />
}
