import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apparel & Textiles Inventory & Production Software | Brahmin Solutions',
  description:
    'Size and color matrix inventory, cut-and-sew BOMs, and real-time Shopify sync for apparel and textile manufacturers. Never oversell a colorway again.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/apparel' },
  openGraph: {
    title: 'Apparel & Textiles Inventory & Production Software | Brahmin Solutions',
    description: 'Size and color matrix inventory, cut-and-sew BOMs, and real-time Shopify sync for apparel and textile manufacturers. Never oversell a colorway again.',
    url: 'https://www.brahmin-solutions.com/industries/apparel',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apparel & Textiles Inventory & Production Software | Brahmin Solutions',
    description: 'Size and color matrix inventory, cut-and-sew BOMs, and real-time Shopify sync for apparel and textile manufacturers. Never oversell a colorway again.',
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
      name: 'Apparel & Textiles',
      item: 'https://www.brahmin-solutions.com/industries/apparel',
    },
  ],
}

const faqs = [
  {
    q: 'Can Brahmin track apparel inventory by size and color?',
    a: 'Yes. Brahmin supports matrix inventory management for size and color variants, letting you see stock rolled up by style or broken down by individual size/color combination. This eliminates the spreadsheet chaos of managing dozens of variants per style.',
  },
  {
    q: 'Does Brahmin sync inventory with Shopify for apparel brands?',
    a: 'Yes. Brahmin has a native Shopify integration that syncs inventory in real time. When a unit sells on Shopify, your stock count in Brahmin updates immediately — and if you also sell on Faire or through your B2B portal, all channels stay accurate.',
  },
  {
    q: 'Can Brahmin manage cut-and-sew production for apparel?',
    a: "Yes. Brahmin's production module supports cut-and-sew workflows with BOMs that include fabric quantities, trim components, and expected yields. You can track work orders through cutting, sewing, and finishing stages with real-time cost visibility.",
  },
  {
    q: 'How does Brahmin handle seasonal inventory planning for apparel?',
    a: "Brahmin's MRP (material requirements planning) engine uses historical sales data by variant to help you plan seasonal buys. You can see which sizes and colors actually sold and use that data to drive your next season's production orders — instead of relying on intuition.",
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

export default function ApparelPage() {
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
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-yellow-100 rounded-full opacity-20 blur-3xl" />
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
              <span className="text-slate-600">Apparel &amp; Textiles</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
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
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                Apparel &amp; Textiles
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Apparel and textile manufacturing software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Matrix inventory for size and color variants, cut-and-sew BOMs, and real-time
                channel sync — so you never oversell a colorway or run dry mid-season. Built for
                apparel brands from $500K to $50M.
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
                The challenges apparel manufacturers face
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
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 9.375v1.5m1.5-3.75C19.496 8.25 20 8.754 20 9.375v6.75c0 .621-.504 1.125-1.125 1.125h-1.5m-6.75 0h6.75"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Managing size and color variants is a spreadsheet nightmare
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  A single style can have 30+ size/color combinations. Most inventory systems treat
                  each variant as a separate product, making it impossible to see total stock for a
                  style at a glance.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Matrix inventory that shows every size and color variant in a single view. Roll
                    up totals by style or drill into individual combinations — all in real time.
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
                  Overselling across channels happens constantly
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  When you sell on Shopify, Faire, and your B2B wholesale portal simultaneously with
                  no central inventory, you inevitably commit stock that isn&apos;t there. Returns
                  and relationship damage follow.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Real-time inventory sync across all channels. When a unit sells anywhere, every
                    other channel updates immediately. One accurate number, everywhere.
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
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Seasonal planning is still a guessing game
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Without demand history broken down by style, size, and color, placing seasonal
                  production orders means guessing. You end up overstocked on some variants and out
                  of stock on your best sellers.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-primary-600 mb-1">
                    How Brahmin solves it
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Historical demand data by SKU variant feeds Brahmin&apos;s MRP engine. Plan your
                    seasonal buys based on what actually sold, not what you think sold.
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
                Everything you need to run your apparel business
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 9.375v1.5m1.5-3.75C19.496 8.25 20 8.754 20 9.375v6.75c0 .621-.504 1.125-1.125 1.125h-1.5m-6.75 0h6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Matrix inventory by size and color
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Track every size/color combination in a single view. Roll up stock by style or
                    drill into individual variants.
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
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Shopify &amp; multi-channel sync
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Real-time inventory sync across Shopify, WooCommerce, BigCommerce, Faire, and
                    your B2B portal.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/production"
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
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Cut-and-sew BOMs
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Build production BOMs for cut-and-sew operations with fabric yields, trims, and
                    labor costs per style.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/b2b-portal"
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
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    B2B wholesale portal
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Let wholesale buyers place their own orders 24/7 with custom price lists and
                    real-time stock visibility.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/mrp"
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
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    Seasonal demand planning
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    MRP engine uses historical demand by variant to drive purchase orders and
                    production runs each season.
                  </p>
                </div>
              </Link>

              <Link
                href="/features/warehouse"
                className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600 bg-teal-50 transition-transform group-hover:scale-110">
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
                    Track finished goods, raw materials, and WIP across warehouses, 3PLs, and
                    production facilities.
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
                Common questions about Brahmin for apparel brands
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
              Ready to simplify your apparel operations?
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
