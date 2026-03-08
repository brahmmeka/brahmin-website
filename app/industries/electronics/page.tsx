import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Electronics Inventory & Production Software | Brahmin Solutions',
  description:
    'Serial number tracking, multi-level BOMs, and component inventory management for electronics manufacturers. Prevent stockouts before they shut down production.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/electronics' },
  openGraph: {
    title: 'Electronics Inventory & Production Software | Brahmin Solutions',
    description: 'Serial number tracking, multi-level BOMs, and component inventory management for electronics manufacturers. Prevent stockouts before they shut down production.',
    url: 'https://www.brahmin-solutions.com/industries/electronics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electronics Inventory & Production Software | Brahmin Solutions',
    description: 'Serial number tracking, multi-level BOMs, and component inventory management for electronics manufacturers. Prevent stockouts before they shut down production.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brahmin-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.brahmin-solutions.com/industries' },
    { '@type': 'ListItem', position: 3, name: 'Electronics', item: 'https://www.brahmin-solutions.com/industries/electronics' },
  ],
}

const faqs = [
  {
    q: 'Can Brahmin Solutions track serial numbers for electronics manufacturers?',
    a: 'Yes. Brahmin assigns serial numbers at the work order level and maintains full traceability from component lots through finished product shipment. This lets you answer warranty claims, recalls, and customer inquiries with exact production history for any unit.',
  },
  {
    q: 'Does Brahmin support multi-level BOMs for complex electronic assemblies?',
    a: 'Yes. Brahmin supports multi-level bill of materials with sub-assemblies, component alternatives, and automatic cost rollup at every level. When a component changes price or a substitution is made, costs recalculate through the full BOM hierarchy.',
  },
  {
    q: 'How does Brahmin handle component shortage alerts?',
    a: "Brahmin's MRP engine compares your open production orders against current component inventory in real time. When a component falls below what's needed for upcoming production runs, Brahmin generates an alert and can automatically create a purchase order to replenish stock before production stalls.",
  },
  {
    q: 'How long does it take to implement Brahmin for an electronics operation?',
    a: 'Most electronics manufacturers go live in 3–6 weeks. Your dedicated implementation manager imports your BOMs, sets up component tracking, and configures serial number workflows. Training for your team is included.',
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
    title: 'Component shortages shut down production',
    problem:
      "Without real-time component visibility tied to your production schedule, you don't know you're short until a work order stalls. By then, the customer deadline is already in jeopardy.",
    solution:
      "Brahmin's MRP engine compares your production schedule against component inventory in real time. It surfaces shortages days in advance and generates purchase orders automatically.",
    color: 'text-indigo-600 bg-indigo-100',
  },
  {
    title: 'Multi-level BOMs are a spreadsheet nightmare',
    problem:
      'When a finished product has sub-assemblies with their own BOMs, tracking component requirements across multiple levels in spreadsheets is nearly impossible. A change at one level cascades through everything.',
    solution:
      'Multi-level BOM management with automatic cost rollup. Change a component at any level and Brahmin recalculates requirements and costs all the way up to the finished product.',
    color: 'text-primary-600 bg-primary-100',
  },
  {
    title: 'Serial number tracking breaks down post-sale',
    problem:
      "Most small electronics manufacturers track serial numbers in spreadsheets or nowhere at all. When a warranty claim comes in, there's no way to know which production batch that unit came from.",
    solution:
      'Serial numbers assigned at production and linked to every work order, component lot, and customer shipment. Full forward and backward traceability on every unit.',
    color: 'text-violet-600 bg-violet-100',
  },
]

const features = [
  {
    title: 'Serial number tracking',
    description: 'Assign, track, and trace serial numbers from production through delivery and warranty claims.',
    href: '/features/traceability',
    color: 'text-indigo-600 bg-indigo-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
      </svg>
    ),
  },
  {
    title: 'Multi-level BOMs',
    description: 'Build complex BOMs with sub-assemblies, component alternatives, and full cost rollup at every level.',
    href: '/features/production',
    color: 'text-primary-600 bg-primary-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: 'Component inventory management',
    description: 'Real-time component stock across all locations, with automatic shortage alerts tied to your production schedule.',
    href: '/features/inventory',
    color: 'text-violet-600 bg-violet-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'MRP & demand planning',
    description: 'Material requirements planning that calculates what to buy and when — based on your actual production schedule.',
    href: '/features/mrp',
    color: 'text-amber-600 bg-amber-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Purchase order management',
    description: 'Generate purchase orders from shortage alerts and manage all vendor relationships in one place.',
    href: '/features/purchasing',
    color: 'text-teal-600 bg-teal-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'Multi-location warehouse',
    description: 'Track components and finished goods across multiple storage locations and production areas.',
    href: '/features/warehouse',
    color: 'text-accent-600 bg-accent-50',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
]

export default function ElectronicsPage() {
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
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-slate-600 transition-colors">Industries</Link>
              <span>/</span>
              <span className="text-slate-600">Electronics</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
                Electronics
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Electronics manufacturing software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Multi-level BOMs, serial number tracking, and real-time component inventory — built for electronics manufacturers who need precision at every assembly stage, without the complexity of enterprise ERP.
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">The challenges electronics manufacturers face</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Everything you need to run your electronics business</h2>
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
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common questions about Brahmin for electronics</h2>
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
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Ready to simplify your electronics operations?</h2>
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
