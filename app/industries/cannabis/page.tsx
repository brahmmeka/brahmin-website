import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cannabis & CBD Inventory & Production Software | Brahmin Solutions',
  description:
    'Seed-to-sale lot tracking, COA management, and batch records for cannabis and CBD manufacturers. Stay compliant and recall-ready at every stage.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/cannabis' },
  openGraph: {
    title: 'Cannabis & CBD Inventory & Production Software | Brahmin Solutions',
    description: 'Seed-to-sale lot tracking, COA management, and batch records for cannabis and CBD manufacturers. Stay compliant and recall-ready at every stage.',
    url: 'https://www.brahmin-solutions.com/industries/cannabis',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis & CBD Inventory & Production Software | Brahmin Solutions',
    description: 'Seed-to-sale lot tracking, COA management, and batch records for cannabis and CBD manufacturers. Stay compliant and recall-ready at every stage.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brahmin-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.brahmin-solutions.com/industries' },
    { '@type': 'ListItem', position: 3, name: 'Cannabis & CBD', item: 'https://www.brahmin-solutions.com/industries/cannabis' },
  ],
}

const faqs = [
  {
    q: 'Does Brahmin Solutions support seed-to-sale cannabis tracking?',
    a: 'Yes. Brahmin provides complete lot traceability from raw material or ingredient receipt through every production stage to finished product shipment. Every lot is numbered and linked to the supplier records, production batch records, and customer orders that touch it — giving you full seed-to-sale visibility.',
  },
  {
    q: 'Can Brahmin manage certificates of analysis for cannabis products?',
    a: "Yes. COAs and lab results can be attached directly to ingredient and finished product lot records in Brahmin. They're permanently linked to the lot, instantly searchable by lot number or date, and retrievable in seconds during an audit — not buried in email threads.",
  },
  {
    q: 'Does Brahmin integrate with state cannabis tracking systems like Metrc?',
    a: "Brahmin does not integrate directly with Metrc or other state-mandated cannabis tracking systems. Brahmin is your operational system of record — managing batch records, lot traceability, COA storage, and production workflows. Your team can then use that data to manually update your state compliance system. If direct Metrc integration is a requirement for your operation, we recommend confirming your workflow with our team before signing up.",
  },
  {
    q: 'How does Brahmin handle cannabis batch records?',
    a: 'Brahmin creates digital batch production records for every production run, capturing the ingredient lot numbers used, quantities, operator information, and actual output yield. These records are linked to the finished product lot and are searchable, exportable, and always available for regulatory review.',
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
    title: 'State compliance requires end-to-end traceability',
    problem:
      'Regulators require that every unit of cannabis product can be traced from cultivation or raw material receipt through final sale. Without the right system, one audit gap can threaten your license.',
    solution:
      'Complete seed-to-sale lot tracking. Every ingredient and finished product batch gets a lot number with full forward and backward traceability. Compliance reports ready when inspectors arrive.',
    color: 'text-emerald-700 bg-emerald-100',
  },
  {
    title: 'COA management is scattered across email and folders',
    problem:
      "Lab certificates of analysis come in by email and get filed in shared drives where they're nearly impossible to find during an audit. One missing COA can create major compliance issues.",
    solution:
      "Attach COAs and lab results directly to the relevant inventory lot record in Brahmin. They're permanently linked, always searchable, and instantly retrievable — not buried in email.",
    color: 'text-teal-600 bg-teal-100',
  },
  {
    title: 'Batch records are still done on paper',
    problem:
      "Paper batch records are time-consuming to create, easy to lose, and hard to search. When regulators or quality teams need records for a specific batch, it can take hours to find and compile them.",
    solution:
      'Digital batch production records created automatically for every run. Capture ingredient lot numbers, quantities, operators, and test results at the time of production — permanently searchable.',
    color: 'text-green-600 bg-green-100',
  },
]

const features = [
  {
    title: 'Seed-to-sale lot tracking',
    description: 'Complete forward and backward traceability from raw material receipt through finished product shipment.',
    href: '/features/traceability',
    color: 'text-emerald-700 bg-emerald-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: 'Certificate of analysis storage',
    description: 'Attach COAs and lab results directly to lot records. Always linked, always searchable, always audit-ready.',
    href: '/features/traceability',
    color: 'text-teal-600 bg-teal-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Digital batch records',
    description: 'Automated production records capturing ingredients, quantities, operators, and yields at time of production.',
    href: '/features/production',
    color: 'text-primary-600 bg-primary-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Inventory tracking',
    description: 'Real-time inventory across every location — raw materials, WIP, and finished goods.',
    href: '/features/inventory',
    color: 'text-violet-600 bg-violet-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Recall & hold management',
    description: 'Place immediate holds on affected lots. Generate recall reports identifying all customers who received product from a specific lot.',
    href: '/features/traceability',
    color: 'text-rose-600 bg-rose-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Purchasing & vendor management',
    description: 'Track supplier lots and vendor documentation. Know exactly which supplier material went into which batch.',
    href: '/features/purchasing',
    color: 'text-amber-600 bg-amber-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
]

export default function CannabisPage() {
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
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-slate-600 transition-colors">Industries</Link>
              <span>/</span>
              <span className="text-slate-600">Cannabis &amp; CBD</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                Cannabis &amp; CBD
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Cannabis and CBD manufacturing software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Full lot tracking, COA management, and digital batch records for cannabis and CBD manufacturers. Stay compliant at every production stage — without the spreadsheet chaos.
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">The challenges cannabis manufacturers face</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Everything you need to run your cannabis business</h2>
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
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common questions about Brahmin for cannabis</h2>
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
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Ready to simplify your cannabis operations?</h2>
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
