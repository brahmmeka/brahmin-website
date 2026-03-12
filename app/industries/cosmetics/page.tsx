import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cosmetics & Beauty Inventory & Production Software | Brahmin Solutions',
  description:
    'Formula management, batch tracking, and FDA compliance for cosmetics and beauty manufacturers. Stay audit-ready with complete lot traceability.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/cosmetics' },
  openGraph: {
    title: 'Cosmetics & Beauty Inventory & Production Software | Brahmin Solutions',
    description: 'Formula management, batch tracking, and FDA compliance for cosmetics and beauty manufacturers. Stay audit-ready with complete lot traceability.',
    url: 'https://www.brahmin-solutions.com/industries/cosmetics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmetics & Beauty Inventory & Production Software | Brahmin Solutions',
    description: 'Formula management, batch tracking, and FDA compliance for cosmetics and beauty manufacturers. Stay audit-ready with complete lot traceability.',
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
      name: 'Cosmetics & Beauty',
      item: 'https://www.brahmin-solutions.com/industries/cosmetics',
    },
  ],
}

const faqs = [
  {
    q: 'Is Brahmin Solutions compliant for cosmetics manufacturers?',
    a: 'Yes. Brahmin provides complete lot and batch traceability, expiration date management, CoA document storage, and recall reporting — the core recordkeeping requirements for cosmetics manufacturers. While Brahmin is a manufacturing and inventory platform (not a compliance certification), it gives you the audit-ready documentation that FDA inspectors look for.',
  },
  {
    q: 'Can Brahmin track cosmetics batches and expiration dates?',
    a: 'Yes. Brahmin tracks every production batch with a lot number, links it to supplier ingredient lots, and records expiration dates. FEFO (first expired, first out) picking rules ensure you ship oldest stock first. You get automatic alerts before product ages out of its shelf life.',
  },
  {
    q: 'How does Brahmin handle formula management for cosmetics?',
    a: "Brahmin's BOM (bill of materials) system lets you build product recipes with exact ingredient quantities, expected yields, and version control. Every production run is tied to a specific formula version, so you always know which formulation was used for any given batch.",
  },
  {
    q: 'Can I attach certificates of analysis to lot records in Brahmin?',
    a: 'Yes. You can attach CoAs, safety data sheets, spec sheets, and any other supplier or lab documents directly to ingredient lot records in Brahmin. This makes them instantly retrievable during audits without digging through email or shared drives.',
  },
  {
    q: 'How long does it take to implement Brahmin for a cosmetics operation?',
    a: 'Most cosmetics manufacturers go live in 3–6 weeks. Your dedicated implementation manager handles data migration, sets up your formulas and workflows, and trains your team. No consultants, no 6-month projects.',
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

export default function CosmeticsPage() {
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
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-violet-100 rounded-full opacity-20 blur-3xl" />
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
              <span className="text-slate-600">Cosmetics &amp; Beauty</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
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
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
                Cosmetics &amp; Beauty
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Cosmetics and beauty manufacturing software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Track formula batches, manage expiration dates, and stay FDA audit-ready — without
                the spreadsheet chaos or enterprise software complexity. Built for cosmetics and
                beauty manufacturers from $500K to $50M.
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
                The challenges cosmetics manufacturers face
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
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  One bad batch can cost your brand
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Without lot-level traceability, a contaminated ingredient can affect hundreds of
                  units before you even know where it came from. Recalls become expensive, slow, and
                  brand-damaging.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Full forward and backward lot traceability. Brahmin traces every ingredient from
                    supplier receipt to customer shipment. Generate a recall report in minutes.
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Regulatory audits shouldn&apos;t be a scramble
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Scattered batch records, missing CoAs, and unorganized supplier documentation mean
                  hours of prep every time an auditor calls. It&apos;s reactive — and risky.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    All batch records, CoAs, and supplier documents attached directly to lot records.
                    Always current, always searchable, always audit-ready.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 mb-4">
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
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Formula changes break your inventory tracking
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  When you update a formula, most systems can&apos;t tell you which existing batches
                  used the old version. You&apos;re guessing which customers received which
                  formulation.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Version-controlled BOMs tied to every production run. Know exactly which formula
                    version was used for every batch, every time.
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
                Everything you need to run your cosmetics business
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Link
                href="/features/traceability"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-rose-600 bg-rose-50 transition-transform group-hover:scale-110">
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
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Lot &amp; batch traceability
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Track every ingredient lot from supplier to customer. One-click recall reports in
                    minutes.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/inventory"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-amber-600 bg-amber-50 transition-transform group-hover:scale-110">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Expiration date management
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    FEFO picking rules and automatic expiry alerts before product ages out.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/production"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-pink-600 bg-pink-50 transition-transform group-hover:scale-110">
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
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Formula BOM management
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Version-controlled recipes with ingredient substitutions, yield tracking, and
                    true cost rollup.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/traceability"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-violet-600 bg-violet-50 transition-transform group-hover:scale-110">
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Certificate of analysis storage
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Attach CoAs, spec sheets, and supplier documents directly to lot records.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/inventory"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary-600 bg-primary-50 transition-transform group-hover:scale-110">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Multi-location inventory
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Track ingredients, WIP, and finished goods across every location and
                    co-manufacturer.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/traceability"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-accent-600 bg-accent-50 transition-transform group-hover:scale-110">
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
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    FDA audit readiness
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Complete chain-of-custody records and traceability reports, always ready for
                    inspectors.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="py-section bg-slate-50">
          <div className="container mx-auto px-6 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Common questions about Brahmin for cosmetics manufacturers
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
              Ready to simplify your cosmetics operations?
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
