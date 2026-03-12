import Link from 'next/link'
import Image from 'next/image'
import { formatDate, categoryLabels } from '@/lib/sanity'

interface RelatedPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  categories?: string[]
  featuredImage?: {
    asset?: { _ref: string }
    alt?: string
  }
  author?: { name: string }
}

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null

  return (
    <div className="mt-16 pt-16 border-t border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900 mb-8">Related articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl overflow-hidden border border-slate-200 mb-5">
              {post.featuredImage?.asset?._ref ? (
                <Image
                  src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${post.featuredImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`}
                  alt={post.featuredImage.alt ?? post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-slate-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              {post.categories?.slice(0, 1).map((c) => (
                <span
                  key={c}
                  className="inline-block self-start px-2.5 py-0.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full text-xs font-semibold mb-3"
                >
                  {categoryLabels[c] ?? c}
                </span>
              ))}
              <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-primary-600 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <span>{formatDate(post.publishedAt)}</span>
                {post.author && (
                  <>
                    <span>&middot;</span>
                    <span>{post.author.name}</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
