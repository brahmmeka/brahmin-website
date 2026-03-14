'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate, categoryLabels, type PostSummary } from '@/lib/sanity'
import CategoryFilter from '@/components/blog/CategoryFilter'
import Pagination from '@/components/blog/Pagination'

const POSTS_PER_PAGE = 12

function estimateReadingTime(excerpt: string): number {
  // Rough estimate based on excerpt length — sample posts get 3-5 min
  const words = excerpt.split(/\s+/).length
  if (words > 60) return 5
  if (words > 40) return 4
  return 3
}

function PostCard({ post }: { post: PostSummary }) {
  const readingTime = estimateReadingTime(post.excerpt ?? '')

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">
        {post.featuredImage?.asset ? (
          <Image
            src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${post.featuredImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}?w=600&h=338&fit=crop&auto=format`}
            alt={post.featuredImage.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          {post.categories?.slice(0, 1).map((c) => (
            <span
              key={c}
              className="inline-block px-2.5 py-0.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full text-xs font-semibold"
            >
              {categoryLabels[c] ?? c}
            </span>
          ))}
          <span className="text-xs text-slate-400">{formatDate(post.publishedAt)}</span>
        </div>

        <h3 className="font-semibold text-lg text-slate-900 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-slate-600 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>{post.author?.name ?? 'Brahmin Team'}</span>
          <span>{readingTime} min read</span>
        </div>
      </div>
    </Link>
  )
}

function NewsletterCTA() {
  return (
    <div className="col-span-full bg-slate-50 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        Get manufacturing insights in your inbox
      </h3>
      <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
        Practical tips on inventory, production, and growing your manufacturing business. No spam, unsubscribe anytime.
      </p>
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="you@company.com"
          className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          aria-label="Email address"
        />
        <button
          type="button"
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors shrink-0"
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default function BlogListingClient({
  posts,
  isSample,
}: {
  posts: PostSummary[]
  isSample: boolean
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Extract unique categories from all posts
  const categories = useMemo(() => {
    const catSet = new Set<string>()
    posts.forEach((p) => p.categories?.forEach((c) => catSet.add(c)))
    return Array.from(catSet).sort()
  }, [posts])

  // Filter posts by selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts
    return posts.filter((p) => p.categories?.includes(selectedCategory))
  }, [posts, selectedCategory])

  // Paginate
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  // Split posts: first 6, then newsletter CTA, then rest
  const firstBatch = paginatedPosts.slice(0, 6)
  const secondBatch = paginatedPosts.slice(6)

  // Reset to page 1 when category changes
  function handleCategoryChange(cat: string | null) {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
            Insights for growing manufacturers
          </h1>
          <p className="text-xl text-slate-500 mt-5 max-w-xl">
            Tips on inventory, production planning, and scaling your operations
          </p>
        </div>
      </section>

      {/* Sample data notice */}
      {isSample && (
        <div className="bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-6 max-w-7xl py-3 flex items-center gap-3">
            <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
            </svg>
            <p className="text-sm text-amber-800">
              <strong>Preview mode:</strong> Showing sample posts. Connect Sanity to manage real content.{' '}
              <Link href="#setup" className="underline font-semibold">See setup instructions &#8595;</Link>
            </p>
          </div>
        </div>
      )}

      {/* Category filter tabs */}
      <div className="py-2 sticky top-16 z-30 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      {/* Blog grid */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No posts found in this category.</p>
              <button
                onClick={() => handleCategoryChange(null)}
                className="mt-4 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
              >
                View all posts
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {firstBatch.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}

              {/* Newsletter CTA after first 6 posts */}
              {paginatedPosts.length > 0 && <NewsletterCTA />}

              {secondBatch.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </section>

      {/* Setup instructions (shown when sample data) */}
      {isSample && (
        <section id="setup" className="py-section bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Connect Sanity to manage real posts</h2>
            <p className="text-slate-500 mb-8">Follow these steps to connect your Sanity project and start publishing.</p>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Create a free Sanity project',
                  code: 'npx sanity@latest init --env',
                  note: 'Run this in your project directory. Choose "Create new project", select dataset "production".',
                },
                {
                  step: '2',
                  title: 'Add environment variables',
                  code: 'cp .env.local.example .env.local\n# Then fill in NEXT_PUBLIC_SANITY_PROJECT_ID with your project ID',
                  note: 'Your project ID is shown in the terminal after init, or at sanity.io/manage.',
                },
                {
                  step: '3',
                  title: 'Restart dev server',
                  code: 'npm run dev',
                  note: 'The Studio will be available at localhost:3000/studio',
                },
                {
                  step: '4',
                  title: 'Open the Studio and create your first post',
                  code: 'open http://localhost:3000/studio',
                  note: 'Click "Blog Posts" → "+" to create a new post. Fill in title, slug, body, and publish.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 mb-1">{item.title}</div>
                    <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg px-4 py-3 overflow-x-auto mb-2">{item.code}</pre>
                    <p className="text-xs text-slate-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
