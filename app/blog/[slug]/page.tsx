import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import {
  client,
  POST_BY_SLUG_QUERY,
  ALL_SLUGS_QUERY,
  urlFor,
  isSanityConfigured,
  formatDate,
  categoryLabels,
  type Post,
  type PostSummary,
} from '@/lib/sanity'
import { SAMPLE_POSTS, SAMPLE_POST_FULL } from '@/lib/sanity.sample'
import TableOfContents from '@/components/blog/TableOfContents'
import AuthorBox from '@/components/blog/AuthorBox'
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogCTA from '@/components/blog/BlogCTA'

export const revalidate = 60

// ─── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  if (!isSanityConfigured()) {
    return SAMPLE_POSTS.map((p) => ({ slug: p.slug.current }))
  }
  try {
    const slugs = await client.fetch<{ slug: string }[]>(ALL_SLUGS_QUERY)
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Post Not Found | Brahmin Solutions' }

  const title = post.seo?.metaTitle ?? `${post.title} | Brahmin Solutions`
  const description = post.seo?.metaDescription ?? post.excerpt

  return {
    title,
    description,
    robots: post.seo?.noIndex ? { index: false } : undefined,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

// ─── Data fetching ─────────────────────────────────────────────────────────────

async function getPost(slug: string): Promise<Post | null> {
  // Sample data fallback
  if (!isSanityConfigured()) {
    if (slug === SAMPLE_POST_FULL.slug.current) return SAMPLE_POST_FULL
    const found = SAMPLE_POSTS.find((p) => p.slug.current === slug)
    if (!found) return null
    return {
      ...found,
      body: [
        {
          _type: 'block',
          _key: 'preview',
          style: 'normal',
          children: [{
            _type: 'span',
            text: `This is a sample preview for "${found.title}". Connect Sanity CMS to add real content — visit /blog for setup instructions.`,
          }],
        },
      ],
    }
  }

  try {
    return await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug })
  } catch {
    return null
  }
}

async function getRelatedPosts(slug: string): Promise<PostSummary[]> {
  if (!isSanityConfigured()) {
    return SAMPLE_POSTS.filter((p) => p.slug.current !== slug).slice(0, 3)
  }
  try {
    const query = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id, title, slug, excerpt, publishedAt, categories, featuredImage, author
    }`
    return await client.fetch<PostSummary[]>(query, { slug })
  } catch {
    return SAMPLE_POSTS.filter((p) => p.slug.current !== slug).slice(0, 3)
  }
}

// ─── Heading extraction for TOC ────────────────────────────────────────────────

function extractHeadings(body: any[]): { id: string; text: string; level: 2 | 3 }[] {
  if (!body) return []
  return body
    .filter((block: any) => block._type === 'block' && ['h2', 'h3'].includes(block.style))
    .map((block: any) => ({
      id:
        block._key ||
        block.children
          ?.map((c: any) => c.text)
          .join('')
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '') ||
        '',
      text: block.children?.map((c: any) => c.text).join('') || '',
      level: block.style === 'h2' ? (2 as const) : (3 as const),
    }))
}

// ─── PortableText components ───────────────────────────────────────────────────

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-5 text-slate-700 leading-relaxed text-lg">{children}</p>,
    h2: ({ children, value }) => {
      const id = value?._key || ''
      return (
        <h2 id={id} className="mt-12 mb-4 text-3xl font-bold text-slate-900 tracking-tight scroll-mt-24">
          {children}
        </h2>
      )
    },
    h3: ({ children, value }) => {
      const id = value?._key || ''
      return (
        <h3 id={id} className="mt-8 mb-3 text-2xl font-bold text-slate-900 scroll-mt-24">
          {children}
        </h3>
      )
    },
    h4: ({ children }) => <h4 className="mt-6 mb-2 text-xl font-bold text-slate-900">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-primary-400 pl-6 italic text-xl text-slate-600 leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-primary-600 hover:text-primary-700 underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt ?? ''}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-slate-400">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
    callout: ({ value }) => {
      const styles: Record<string, string> = {
        info: 'bg-primary-50 border-primary-200 text-primary-800',
        tip: 'bg-accent-50 border-accent-200 text-accent-800',
        warning: 'bg-amber-50 border-amber-200 text-amber-800',
      }
      const style = styles[value?.type ?? 'info'] ?? styles.info
      return (
        <div className={`my-8 rounded-2xl border p-6 ${style}`}>
          <p className="text-base leading-relaxed">{value?.text}</p>
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }) => <ul className="my-5 space-y-2 list-none pl-0">{children}</ul>,
    number: ({ children }) => <ol className="my-5 space-y-2 list-decimal pl-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-slate-700 text-lg">
        <svg className="w-5 h-5 text-accent-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="text-slate-700 text-lg leading-relaxed">{children}</li>,
  },
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [post, relatedPosts] = await Promise.all([getPost(slug), getRelatedPosts(slug)])

  if (!post) notFound()

  const headings = extractHeadings(post.body)

  const estimatedReadTime = post.body
    ? Math.max(1, Math.ceil(JSON.stringify(post.body).split(' ').length / 200))
    : 3

  // Split body roughly in half for mid-article CTA insertion
  const bodyLength = post.body?.length ?? 0
  const midPoint = Math.floor(bodyLength / 2)
  const bodyFirstHalf = post.body?.slice(0, midPoint)
  const bodySecondHalf = post.body?.slice(midPoint)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name ?? 'Brahmin Solutions',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brahmin Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://brahminsolutions.com/images/logo.webp',
      },
    },
  }

  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="max-w-3xl lg:ml-[calc(200px+3rem)]">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-slate-600 truncate max-w-xs">{post.title}</span>
            </nav>

            {/* Categories */}
            {post.categories?.length ? (
              <div className="flex flex-wrap gap-2 mb-5">
                {post.categories.map((c) => (
                  <span key={c} className="inline-block px-2.5 py-0.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full text-xs font-semibold">
                    {categoryLabels[c] ?? c}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              {post.author && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xs font-bold">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{post.author.name}</div>
                    {post.author.role && <div className="text-xs text-slate-400">{post.author.role}</div>}
                  </div>
                </div>
              )}
              <span className="text-slate-200">&middot;</span>
              <span className="text-sm text-slate-500">{formatDate(post.publishedAt)}</span>
              <span className="text-slate-200">&middot;</span>
              <span className="text-sm text-slate-400">{estimatedReadTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.featuredImage?.asset && (
        <div className="container mx-auto px-6 max-w-4xl mb-10">
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
            <Image
              src={urlFor(post.featuredImage).width(1600).url()}
              alt={post.featuredImage.alt ?? post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Two-column layout: TOC sidebar + content */}
      <div className="container mx-auto px-6 max-w-5xl pb-section">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">
          {/* TOC sidebar — desktop only */}
          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>

          {/* Main content */}
          <article className="max-w-3xl">
            {/* Mobile TOC */}
            {headings.length > 0 && (
              <div className="lg:hidden mb-8">
                <TableOfContents headings={headings} />
              </div>
            )}

            {/* Body content with optional mid-article CTA */}
            {bodyLength > 4 ? (
              <>
                <PortableText value={bodyFirstHalf!} components={portableTextComponents} />
                <BlogCTA />
                <PortableText value={bodySecondHalf!} components={portableTextComponents} />
              </>
            ) : post.body && bodyLength > 0 ? (
              <>
                <PortableText value={post.body} components={portableTextComponents} />
                <BlogCTA />
              </>
            ) : null}

            {/* Author box */}
            {post.author && <AuthorBox author={post.author} />}

            {/* Related posts */}
            <RelatedPosts posts={relatedPosts} />

            {/* Final CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 md:p-12 text-center mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">See Brahmin in action</h2>
              <p className="text-slate-400 mb-6">Book a personalized demo with our team</p>
              <Link
                href="/demo"
                className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-accent-500/30"
              >
                Book a demo
              </Link>
            </div>

            {/* Back to blog */}
            <div className="mt-12">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
