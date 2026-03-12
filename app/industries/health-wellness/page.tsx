import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Health & Wellness Inventory & Production Software | Brahmin Solutions',
  description:
    'Lot tracking, quality control records, and expiration management for health and wellness product manufacturers. Stay compliant and consistent at every production run.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/health-wellness' },
  openGraph: {
    title: 'Health & Wellness Inventory & Production Software | Brahmin Solutions',
    description: 'Lot tracking, quality control records, and expiration management for health and wellness product manufacturers. Stay compliant and consistent at every production run.',
    url: 'https://www.brahmin-solutions.com/industries/health-wellness',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health & Wellness Inventory & Production Software | Brahmin Solutions',
    description: 'Lot tracking, quality control records, and expiration management for health and wellness product manufacturers. Stay compliant and consistent at every production run.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brahmin-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.brahmin-solutions.com/industries' },
    { '@type': 'ListItem', position: 3, name: 'Health & Wellness', item: 'https://www.brahmin-solutions.com/industries/health-wellness' },
  ],
}

const faqs = [
  {
    q: 'Can Brahmin Solutions manage compliance for health and wellness manufacturers?',
    a: 'Yes. Brahmin provides lot-level traceability, digital batch production records, CoA document storage, and expiration date tracking — the operational recordkeeping that regulators and retailers increasingly require from health and wellness manufacturers. Brahmin is a manufacturing and inventory platform, not a compliance certification, but it gives you the documentation foundation that compliance requires.',
  },
  {
    q: 'Does Brahmin track lot numbers and expiration dates for wellness products?',
    a: 'Yes. Every ingredient received in Brahmin gets a lot number and expiration date. Finished products inherit traceability from the ingredient lots used in their production. FEFO picking rules ensure you ship oldest-dated stock first, and automatic alerts notify you before product approaches its expiration date.',
  },
  {
    q: 'How does Brahmin handle quality control for health and wellness manufacturers?',
    a: 'Brahmin creates digital batch production records that capture ingredient lot numbers, quantities, actual yield, and operator information for every production run. You can attach quality check results, CoAs, and other quality documentation directly to batch records — creating a searchable quality history for every product.',
  },
  {
    q: 'Does Brahmin work for both supplement and personal care health and wellness brands?',
    a: 'Yes. Brahmin serves both ingestible health products (vitamins, supplements, functional foods) and topical wellness products (skincare, personal care). The lot tracking, batch records, and expiration management features apply across both categories. Industry-specific compliance features like cGMP batch records are particularly relevant for ingestible products.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const painPoints = [
  {
    title: 'Quality inconsistency damages your brand',
    problem:
      "Without batch records and ingredient traceability, one off-spec production run can reach customers before you catch it. The brand damage from a quality issue often outlasts the incident itself.",
    solution:
      'Digital batch records for every production run, tied to supplier ingredient lot numbers. Know exactly what went into every batch — and catch deviations before product ships.',
    color: 'text-teal-600 bg-teal-100',
  },
  {
    title: 'Compliance requirements keep expanding',
    problem:
      'FTC, FDA, and retailer compliance requirements for health and wellness products continue to grow. Keeping up manually — scattered spreadsheets, email records, shared drives — creates gaps that become liabilities.',
    solution:
      'Audit-ready lot records, batch documentation, and CoA storage always current and searchable. When an inspector or retailer asks for records, you pull them in seconds — not hours.',
    color: 'text-primary-600 bg-primary-100',
  },
  {
    title: 'Expiration management across SKUs is a full-time job',
    problem:
      'Managing shelf life across dozens of SKUs, multiple warehouse locations, and multiple production batches manually is time-consuming and error-prone. Products slip through and expire before shipping.',
    solution:
      'Automatic expiration alerts and FEFO (first expired, first out) picking rules. Brahmin flags product approaching its shelf-life date and ensures you ship oldest stock first — automatically.',
    color: 'text-amber-600 bg-amber-100',
  },
]

const features = [
  {
    title: 'Lot & batch traceability',
    description: 'Full forward and backward traceability from raw ingredient to customer delivery. Recall reports in minutes.',
    href: '/features/traceability',
    color: 'text-teal-600 bg-teal-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: 'Expiration date management',
    description: 'FEFO picking rules and automatic expiry alerts keep you shipping the freshest product — and stop expired stock from leaving the warehouse.',
    href: '/features/inventory',
    color: 'text-amber-600 bg-amber-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
  {
    title: 'Quality control records',
    description: 'Digital batch records capturing ingredients, quantities, yield, and quality check results for every production run.',
    href: '/features/traceability',
    color: 'text-primary-600 bg-primary-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Formula BOM management',
    description: 'Version-controlled product formulas with ingredient quantities, expected yields, and full cost rollup.',
    href: '/features/production',
    color: 'text-violet-600 bg-violet-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: 'Multi-location inventory',
    description: 'Track raw materials, WIP, and finished goods across every warehouse and production facility.',
    href: '/features/warehouse',
    color: 'text-rose-600 bg-rose-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Purchasing & vendor management',
    description: 'Track supplier lots, manage vendor documentation, and link ingredient receipts to finished product batches.',
    href: '/features/purchasing',
    color: 'text-accent-600 bg-accent-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
]

export default function HealthWellnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-slate-600 transition-colors">Industries</Link>
              <span>/</span>
              <span className="text-slate-600">Health &amp; Wellness</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Health &amp; Wellness
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Health and wellness manufacturing software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Lot tracking, expiration management, and quality control records for health and wellness product manufacturers — without the complexity of enterprise software. Built for brands from $500K to $50M.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center gap-2 border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  See pricing
                </Link>
              </div>
              <p className="mt-5 text-sm text-slate-400">No credit card required &middot; 14-day free trial &middot; Go live in as little as 3 weeks</p>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Pain points</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">The challenges health and wellness manufacturers face</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((point) => (
                <div key={point.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${point.color}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{point.problem}</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs font-semibold text-primary-600 mb-1">How Brahmin solves it</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{point.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-section bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Everything you need to run your health and wellness business</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
                >
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} transition-transform group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-section bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">FAQ</span>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common questions about Brahmin for health and wellness</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-white rounded-xl border border-slate-200 p-6">
                    <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Ready to simplify your health and wellness operations?</h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-8">
              Join 300+ manufacturers who switched from spreadsheets to a single source of truth. Go live in 3–6 weeks with a dedicated implementation manager.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <p className="mt-4 text-sm text-slate-400">From $199/month &middot; No per-user fees &middot; &lt;15 min support response</p>
          </div>
        </section>
      </main>
    </>
  )
}
