import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medical Device Manufacturing Software | Brahmin Solutions',
  description:
    'FDA-compliant inventory and production management for medical device manufacturers. Serial and lot traceability, device history records, and audit-ready documentation from $199/month.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/medical-devices' },
  openGraph: {
    title: 'Medical Device Manufacturing Software | Brahmin Solutions',
    description: 'FDA-compliant inventory and production management for medical device manufacturers. Serial and lot traceability, device history records, and audit-ready documentation from $199/month.',
    url: 'https://www.brahmin-solutions.com/industries/medical-devices',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Device Manufacturing Software | Brahmin Solutions',
    description: 'FDA-compliant inventory and production management for medical device manufacturers. Serial and lot traceability, device history records, and audit-ready documentation from $199/month.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brahmin-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.brahmin-solutions.com/industries' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Medical Devices',
      item: 'https://www.brahmin-solutions.com/industries/medical-devices',
    },
  ],
}

const faqs = [
  {
    q: 'Does Brahmin Solutions support FDA 21 CFR Part 820 requirements?',
    a: 'Brahmin supports the operational requirements of FDA 21 CFR Part 820 (Quality System Regulation) — including device history records, lot and serial traceability, production records, and component tracking. Brahmin is a manufacturing and inventory platform that provides the documentation infrastructure your quality system needs. Full QMS compliance requires additional procedures and controls beyond what any inventory software provides.',
  },
  {
    q: 'Can Brahmin help with ISO 13485 documentation?',
    a: 'Yes. Brahmin creates digital production records for every device manufactured, capturing component lot numbers, serial numbers, operator information, and inspection results. These records support the documentation requirements of ISO 13485 for quality management in medical device manufacturing. Records are searchable, exportable, and audit-ready.',
  },
  {
    q: 'How does Brahmin handle device history records (DHRs)?',
    a: 'Every production run in Brahmin generates a complete device history record — components used (with lot and serial numbers), production steps completed, operator records, and quality inspection results. DHRs are linked to specific device serial numbers, so you can trace any individual device back to its full production history in seconds.',
  },
  {
    q: 'Does Brahmin support serial number tracking for medical devices?',
    a: 'Yes. Brahmin supports both serial number and lot number tracking at every stage — from component receipt through production to finished device shipment. Each serial number carries its full genealogy: which components were used, when it was produced, who handled it, and where it shipped. This is essential for field safety corrective actions and recalls.',
  },
  {
    q: 'Can Brahmin generate audit trail reports for FDA inspections?',
    a: 'Brahmin maintains a complete audit trail of inventory movements, production activities, and document changes. When an FDA inspector requests production records for a specific device or lot, you can pull the full history — component traceability, production records, quality checks, and shipment details — in minutes rather than days.',
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

export default function MedicalDevicesPage() {
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
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-slate-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-slate-600 transition-colors">
                Industries
              </Link>
              <span>/</span>
              <span className="text-slate-600">Medical Devices</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
                Medical Devices
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Medical device manufacturing software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Serial and lot traceability, device history records, and audit-ready
                documentation for medical device manufacturers. Stay FDA and ISO compliant
                without the complexity of enterprise ERP.
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
              <p className="mt-5 text-sm text-slate-400">
                No credit card required &middot; 14-day free trial &middot; Go live in as little as
                3 weeks
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Pain Points */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                Pain points
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                The challenges medical device manufacturers face
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  FDA and ISO compliance demands complete documentation
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  FDA 21 CFR Part 820 and ISO 13485 require device history records, production
                  documentation, and full traceability for every device you manufacture. Most small
                  device makers still manage this on paper or in disconnected spreadsheets.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Digital device history records generated automatically for every production run.
                    Component lots, serial numbers, operator records, and inspection data captured at
                    the time of production — not reconstructed before an audit.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  A field safety action without traceability is a nightmare
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  When a component fails or a quality issue surfaces post-market, you need to know
                  within minutes which devices are affected, which customers received them, and which
                  component lots were used. Without traceability, that investigation can take weeks.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Full forward and backward traceability from component lot to finished device
                    serial number to customer shipment. Generate recall-scope reports in minutes —
                    know exactly which devices and customers are affected.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Audit readiness shouldn&apos;t require a scramble
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Whether it&apos;s an FDA inspection, a notified body audit for CE marking, or a
                  customer quality audit, you need production records, component traceability, and
                  CAPA documentation at your fingertips — not buried in filing cabinets.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    All production records, component traceability, and quality data are searchable
                    and exportable. Pull device history records, lot genealogy, and supplier
                    documentation in seconds — so audits become routine, not emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Feature Grid */}
        <section className="py-section bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Everything you need to run your medical device business
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Link
                href="/features/traceability"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-violet-600 bg-violet-50 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Serial &amp; lot traceability
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Full forward and backward traceability from component lot to finished device serial number. Recall-scope reports in minutes.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/production"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary-600 bg-primary-50 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Device history records
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Automated DHRs for every production run — component lots, serial numbers, operator data, and inspection results captured at time of production.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/inventory"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sky-600 bg-sky-50 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Component inventory tracking
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Real-time visibility into component stock levels across all locations. Track by lot number, serial number, and expiration date.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/production"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600 bg-teal-50 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Multi-level BOMs
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Manage complex device assemblies with multi-level bills of materials. Track sub-assemblies, components, and raw materials with full cost rollup.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/traceability"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-amber-600 bg-amber-50 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Quality control &amp; inspection
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Record inspection results and quality checks at receiving and production. Flag non-conformances before they reach customers.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/purchasing"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-accent-600 bg-accent-50 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Supplier traceability
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Track which supplier lots went into which finished devices. Maintain approved supplier lists and attach certificates of conformance to receiving records.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/warehouse"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 bg-indigo-50 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Warehouse &amp; bin management
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Organize components and finished devices by bin location. Controlled storage areas, quarantine zones, and clean room inventory tracking.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/mrp"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-rose-600 bg-rose-50 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    MRP &amp; demand planning
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Know what components to order and when. Automatic shortage alerts and reorder points keep production running without overstocking.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/mobile"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-slate-600 bg-slate-100 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Mobile barcode scanning
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Scan components at receiving, during production, and at shipment. Eliminate manual data entry errors with real-time mobile scanning.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Customer Quote Placeholder */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* PLACEHOLDER: Customer Testimonial - Medical Devices */}
            <div className="bg-slate-50 rounded-xl p-8">
              <blockquote className="text-xl text-slate-700 italic">
                &ldquo;Customer quote goes here.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold">[Name]</p>
                <p className="text-slate-500">[Title], [Company]</p>
              </div>
              {/* Customer logo here */}
            </div>
            {/* END PLACEHOLDER */}
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="py-section bg-slate-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Common questions about Brahmin for medical device manufacturers
              </h2>
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
        </section>

        {/* Section 6: Final CTA */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Ready to simplify your medical device operations?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-8">
              Join 300+ manufacturers who switched from spreadsheets to a single source of truth.
              Go live in 3–6 weeks with a dedicated implementation manager.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              From $199/month &middot; No per-user fees &middot; &lt;15 min support response
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
