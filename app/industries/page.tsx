import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries We Serve | Brahmin Solutions',
  description:
    'Brahmin Solutions helps manufacturers in food & beverage, cosmetics, supplements, apparel, and more manage inventory and production. Starting from $199/month.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries' },
  openGraph: {
    title: 'Industries We Serve | Brahmin Solutions',
    description: 'Brahmin Solutions helps manufacturers in food & beverage, cosmetics, supplements, apparel, and more manage inventory and production. Starting from $199/month.',
    url: 'https://www.brahmin-solutions.com/industries',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Brahmin Solutions',
    description: 'Brahmin Solutions helps manufacturers in food & beverage, cosmetics, supplements, apparel, and more manage inventory and production. Starting from $199/month.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brahmin-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.brahmin-solutions.com/industries' },
  ],
}

const industries = [
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    tagline: 'Lot tracking, expiration dates, and recipe management.',
    accent: 'text-rose-600 bg-rose-50 border-rose-100',
    iconColor: 'text-rose-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75m0 0l-1.5.75m0 0v3m15-3v3m-15-6.75h18m-18 0v3.75" />
      </svg>
    ),
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'BOMs, work orders, and production scheduling.',
    accent: 'text-primary-600 bg-primary-50 border-primary-100',
    iconColor: 'text-primary-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    slug: 'wholesale-distribution',
    name: 'Wholesale & Distribution',
    tagline: 'Multi-warehouse, B2B portal, and order management.',
    accent: 'text-accent-700 bg-accent-50 border-accent-100',
    iconColor: 'text-accent-700',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    slug: 'cosmetics',
    name: 'Cosmetics & Beauty',
    tagline: 'Formula management, batch tracking, and FDA compliance.',
    accent: 'text-pink-600 bg-pink-50 border-pink-100',
    iconColor: 'text-pink-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    slug: 'supplements',
    name: 'Supplements',
    tagline: 'cGMP compliance, lot tracking, and formula management.',
    accent: 'text-violet-600 bg-violet-50 border-violet-100',
    iconColor: 'text-violet-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    slug: 'apparel',
    name: 'Apparel & Textiles',
    tagline: 'Size/color variants, cut-and-sew, order management.',
    accent: 'text-amber-600 bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    slug: 'electronics',
    name: 'Electronics',
    tagline: 'Serial tracking, component management, and RMA.',
    accent: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    iconColor: 'text-indigo-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    slug: 'cannabis',
    name: 'Cannabis & CBD',
    tagline: 'Seed-to-sale tracking, compliance, and batch tracking.',
    accent: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-700',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    slug: 'health-wellness',
    name: 'Health & Wellness',
    tagline: 'Quality control, lot tracking, and compliance.',
    accent: 'text-teal-600 bg-teal-50 border-teal-100',
    iconColor: 'text-teal-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

const whyBrahmin = [
  { stat: '$199/mo', label: 'Starting price', sub: 'No per-user fees, no surprises' },
  { stat: '3–6 weeks', label: 'Go-live time', sub: 'Not 6 months like enterprise ERP' },
  { stat: '<15 min', label: 'Support response', sub: 'Real humans, not a ticket queue' },
  { stat: '300+', label: 'Manufacturers served', sub: 'Independently owned since 2019' },
]

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-16">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-emerald-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Industries
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              Built for manufacturers like you
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              From regulated food production to electronics assembly — Brahmin is purpose-built
              for the way small and mid-sized manufacturers actually work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="/pricing"
                className="flex items-center justify-center gap-2 border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                See pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Industry grid */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                9 industries
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Find your industry
              </h2>
              <p className="mt-3 text-slate-500 max-w-xl mx-auto">
                Every industry has different compliance needs, workflows, and pain points.
                Brahmin is configured to match yours.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-slate-100 hover:border-slate-300 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${ind.accent} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    {ind.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{ind.tagline}</p>
                  <span className="text-xs font-semibold text-primary-600 group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Brahmin */}
        <section className="py-section bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                Why Brahmin
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                The software built by a manufacturer, for manufacturers
              </h2>
              <p className="mt-4 text-slate-500 max-w-xl mx-auto">
                Our founder ran a food manufacturing operation on spreadsheets. He built Brahmin
                because he couldn&apos;t find software that fit. Now 300+ manufacturers use it daily.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyBrahmin.map((w) => (
                <div key={w.label} className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">{w.stat}</div>
                  <div className="font-semibold text-slate-800 text-sm mb-1">{w.label}</div>
                  <div className="text-xs text-slate-400">{w.sub}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'You get a dedicated implementation manager',
                    desc: 'Assigned before you sign. They know your industry and stay with you through go-live and beyond.',
                  },
                  {
                    title: 'We respond in under 15 minutes',
                    desc: 'Real humans, not a ticket queue or chatbot. After-hours coverage included on every plan.',
                  },
                  {
                    title: 'No VC pressure, no forced upsells',
                    desc: 'Independently owned, no VC pressure. We grow when our customers grow — that\'s the only incentive we have.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="shrink-0 w-5 h-5 mt-0.5">
                      <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm mb-1">{item.title}</div>
                      <div className="text-sm text-slate-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Ready to see Brahmin for your industry?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-8">
              Book a 30-minute demo. We&apos;ll show you the product with your actual workflows
              and answer every compliance question you have.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <p className="mt-4 text-sm text-slate-400">No credit card required &middot; 14-day free trial &middot; Go live in as little as 3 weeks</p>
          </div>
        </section>
      </main>
    </>
  )
}
