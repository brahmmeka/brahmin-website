import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client, ALL_POSTS_QUERY, isSanityConfigured, formatDate, categoryLabels, type PostSummary } from '@/lib/sanity'
import { SAMPLE_POSTS } from '@/lib/sanity.sample'

export const metadata: Metadata = {
  title: 'Blog | Brahmin Solutions',
  description: 'Manufacturing tips, inventory management guides, and customer stories from the Brahmin Solutions team.',
}

// Revalidate every 60 seconds (ISR)
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

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full text-xs font-semibold">
      {categoryLabels[category] ?? category}
    </span>
  )
}

export default async function BlogPage() {
  const { posts, isSample } = await getPosts()
  const [featured, ...rest] = posts

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-14">
        <div className="container mx-auto px-6 max-w-7xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Blog</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] max-w-3xl">
            Manufacturing insights from the front lines
          </h1>
          <p className="mt-5 text-xl text-slate-500 max-w-xl">
            Practical guides on inventory management, production tracking, and growing your manufacturing business.
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
              <Link href="#setup" className="underline font-semibold">See setup instructions ↓</Link>
            </p>
          </div>
        </div>
      )}

      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Featured post */}
          {featured && (
            <div className="mb-16">
              <Link href={`/blog/${featured.slug.current}`} className="group grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl overflow-hidden border border-slate-200">
                  {featured.featuredImage?.asset ? (
                    <Image
                      src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${featured.featuredImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`}
                      alt={featured.featuredImage.alt ?? featured.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.categories?.slice(0, 2).map((c) => <CategoryBadge key={c} category={c} />)}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-slate-500 leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="text-sm text-slate-400">{formatDate(featured.publishedAt)}</div>
                    {featured.author && (
                      <>
                        <span className="text-slate-200">·</span>
                        <div className="text-sm text-slate-500">{featured.author.name}</div>
                      </>
                    )}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Divider */}
          {rest.length > 0 && (
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">All Articles</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
          )}

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl overflow-hidden border border-slate-200 mb-5">
                  {post.featuredImage?.asset ? (
                    <Image
                      src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${post.featuredImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`}
                      alt={post.featuredImage.alt ?? post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-10 h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.categories?.slice(0, 1).map((c) => <CategoryBadge key={c} category={c} />)}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-primary-600 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                    <span>{formatDate(post.publishedAt)}</span>
                    {post.author && (
                      <>
                        <span>·</span>
                        <span>{post.author.name}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
