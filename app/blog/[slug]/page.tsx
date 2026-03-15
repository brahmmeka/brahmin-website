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
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogCTA, { InlineCTA } from '@/components/blog/BlogCTA'

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
    normal: ({ children }) => (
      <p className="mb-6 text-slate-600 leading-[1.8] text-base md:text-[17px]">{children}</p>
    ),
    h2: ({ children, value }) => {
      const id = value?._key || ''
      return (
        <h2 id={id} className="mt-14 mb-5 text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight scroll-mt-24">
          {children}
        </h2>
      )
    },
    h3: ({ children, value }) => {
      const id = value?._key || ''
      return (
        <h3 id={id} className="mt-10 mb-4 text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-tight scroll-mt-24">
          {children}
        </h3>
      )
    },
    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 text-base sm:text-lg font-bold text-slate-900">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-4 border-primary-500 pl-6 py-1 italic text-base md:text-lg text-slate-600 leading-relaxed bg-slate-50 rounded-r-xl pr-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 underline-offset-2 transition-colors"
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
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
            <Image
              src={urlFor(value).width(1200).auto('format').url()}
              alt={value.alt ?? ''}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              loading="lazy"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-400 italic">{value.caption}</figcaption>
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
        <div className={`my-8 rounded-xl border p-6 ${style}`}>
          <p className="text-sm md:text-base leading-relaxed">{value?.text}</p>
        </div>
      )
    },
    table: ({ value }) => {
      const rows = value?.rows ?? []
      if (rows.length === 0) return null
      return (
        <div className="my-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm md:text-base text-left">
            {rows.map((row: { cells: string[]; _key: string }, i: number) => {
              const Tag = i === 0 ? 'th' : 'td'
              const Wrapper = i === 0 ? 'thead' : 'tbody'
              return (
                <Wrapper key={row._key}>
                  <tr className={i === 0 ? 'bg-slate-50' : i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    {row.cells.map((cell: string, j: number) => (
                      <Tag
                        key={j}
                        className={`px-4 py-3 ${i === 0 ? 'font-semibold text-slate-900 border-b border-slate-200' : 'text-slate-600 border-b border-slate-100'}`}
                      >
                        {cell}
                      </Tag>
                    ))}
                  </tr>
                </Wrapper>
              )
            })}
          </table>
        </div>
      )
    },
    code: ({ value }) => (
      <pre className="my-8 rounded-xl bg-slate-900 text-slate-100 p-6 overflow-x-auto text-sm leading-relaxed">
        {value?.filename && (
          <div className="mb-3 text-xs text-slate-400 font-mono">{value.filename}</div>
        )}
        <code className="font-mono">{value?.code}</code>
      </pre>
    ),
    youtube: ({ value }) => {
      if (!value?.url) return null
      const id = value.url.match(/(?:youtu\.be\/|v=)([^&\s]+)/)?.[1]
      if (!id) return null
      return (
        <div className="my-10 relative aspect-video rounded-xl overflow-hidden bg-slate-100">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }) => <ul className="my-6 space-y-3 list-none pl-0">{children}</ul>,
    number: ({ children }) => <ol className="my-6 space-y-3 list-decimal pl-6 marker:text-slate-400 marker:font-semibold">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px] leading-[1.7]">
        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-slate-600 text-base md:text-[17px] leading-[1.7]">{children}</li>
    ),
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

  // Find H2 positions to insert CTAs at natural section breaks
  const bodyLength = post.body?.length ?? 0
  const h2Indices = (post.body ?? [])
    .map((block: any, i: number) => (block._type === 'block' && block.style === 'h2' ? i : -1))
    .filter((i: number) => i > 0)

  // 1st CTA (inline): ~1/3 mark, 2nd CTA (banner): ~2/3 mark
  const oneThird = Math.floor(bodyLength / 3)
  const twoThirds = Math.floor((bodyLength * 2) / 3)

  const inlineCTAIndex = h2Indices.length > 0
    ? h2Indices.reduce((best: number, idx: number) =>
        Math.abs(idx - oneThird) < Math.abs(best - oneThird) ? idx : best, h2Indices[0])
    : oneThird

  const bannerCTAIndex = h2Indices.length > 1
    ? h2Indices
        .filter((i: number) => i > inlineCTAIndex)
        .reduce((best: number, idx: number) =>
          Math.abs(idx - twoThirds) < Math.abs(best - twoThirds) ? idx : best, h2Indices[h2Indices.length - 1])
    : Math.max(inlineCTAIndex + 2, twoThirds)

  const bodyPart1 = post.body?.slice(0, inlineCTAIndex)
  const bodyPart2 = post.body?.slice(inlineCTAIndex, bannerCTAIndex)
  const bodyPart3 = post.body?.slice(bannerCTAIndex)

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
        url: 'https://www.brahmin-solutions.com/images/logo.webp',
      },
    },
  }

  return (
    <main className="bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Full-width header area ── */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl pt-8 sm:pt-10 pb-10 sm:pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-slate-400 mb-6 sm:mb-8">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
          </nav>

          {/* Categories */}
          {post.categories?.length ? (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((c) => (
                <span key={c} className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold tracking-wide">
                  {categoryLabels[c] ?? c}
                </span>
              ))}
            </div>
          ) : null}

          {/* Title — full width, large */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.12] max-w-4xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          )}

          {/* Author + meta row */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            {post.author && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{post.author.name}</div>
                  {post.author.role && <div className="text-xs text-slate-400">{post.author.role}</div>}
                </div>
              </div>
            )}
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{estimatedReadTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured image — full bleed ── */}
      {post.featuredImage?.asset && (
        <div className="bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl py-6 sm:py-8">
            <div className="relative aspect-[2/1] sm:aspect-[21/9] md:aspect-[3/1] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={urlFor(post.featuredImage).width(1200).auto('format').url()}
                alt={post.featuredImage.alt ?? post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Article body with TOC sidebar ── */}
      <div className="container mx-auto px-6 max-w-7xl pt-10 md:pt-14 pb-6 md:pb-10">
        {/* Mobile TOC */}
        {headings.length > 0 && (
          <div className="lg:hidden mb-8">
            <TableOfContents headings={headings} />
          </div>
        )}

        <div className="lg:flex lg:gap-16 xl:gap-20">
          {/* TOC sidebar — desktop only */}
          {headings.length > 0 && (
            <aside className="hidden lg:block lg:w-56 xl:w-60 lg:shrink-0">
              <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          )}

          {/* Article content */}
          <article className="min-w-0 flex-1 max-w-[720px]">
            {bodyLength > 6 ? (
              <>
                <PortableText value={bodyPart1!} components={portableTextComponents} />
                <InlineCTA category={post.categories?.[0]} />
                <PortableText value={bodyPart2!} components={portableTextComponents} />
                <BlogCTA category={post.categories?.[0]} />
                <PortableText value={bodyPart3!} components={portableTextComponents} />
              </>
            ) : post.body && bodyLength > 0 ? (
              <>
                <PortableText value={post.body} components={portableTextComponents} />
                <BlogCTA category={post.categories?.[0]} />
              </>
            ) : null}

            {/* About the author */}
            {post.author && (
              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-2">About the author</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">{post.author.name}</span>
                  {post.author.role && <> is {post.author.role} at Brahmin Solutions.</>}
                </p>
              </div>
            )}
          </article>
        </div>
      </div>

      {/* ── Below article (no sidebar) ── */}
      <div>
        <div className="container mx-auto px-6 max-w-7xl pt-4 pb-10 sm:pb-14">
          {/* Related posts */}
          <RelatedPosts posts={relatedPosts} />

          {/* Final CTA */}
          <div className="mt-12 sm:mt-16 bg-slate-900 text-white rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-14 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Ready to streamline your operations?</h2>
            <p className="text-slate-400 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Book a 30-minute demo. We&apos;ll show you the software with your actual products and workflows.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all shadow-lg shadow-accent-500/25 text-base sm:text-lg"
            >
              Book a demo
            </Link>
          </div>

          {/* Back to blog */}
          <div className="mt-10 sm:mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors group">
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
