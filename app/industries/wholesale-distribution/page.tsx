import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Wholesale Distribution Inventory & Production Software | Brahmin Solutions',
  description:
    'Multi-warehouse inventory, B2B customer portal, and Shopify sync for wholesalers and distributors. Let customers order 24/7.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/wholesale-distribution' },
  openGraph: {
    title: 'Wholesale Distribution Inventory & Production Software | Brahmin Solutions',
    description: 'Multi-warehouse inventory, B2B customer portal, and Shopify sync for wholesalers and distributors. Let customers order 24/7.',
    url: 'https://www.brahmin-solutions.com/industries/wholesale-distribution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Distribution Inventory & Production Software | Brahmin Solutions',
    description: 'Multi-warehouse inventory, B2B customer portal, and Shopify sync for wholesalers and distributors. Let customers order 24/7.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brahmin-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.brahmin-solutions.com/industries' },
    { '@type': 'ListItem', position: 3, name: 'Wholesale & Distribution', item: 'https://www.brahmin-solutions.com/industries/wholesale-distribution' },
  ],
}

const faqs = [
  {
    q: 'Does Brahmin support EDI for big-box retailers?',
    a: 'Yes. Brahmin integrates with SPS Commerce, which provides EDI connectivity to major big-box retailers, grocery chains, and trading partners. Through SPS Commerce, you can receive purchase orders and send advance ship notices electronically without manual data entry.',
  },
  {
    q: 'Can Brahmin sync inventory across 3PL warehouses?',
    a: 'Yes. Brahmin supports multi-location inventory management including 3PL and co-manufacturer locations. Stock levels at each location are visible in a single dashboard and updated in real time as goods are received or shipped. Some 3PLs also offer direct integration with Brahmin.',
  },
  {
    q: 'How does Brahmin handle multi-channel order management?',
    a: 'Brahmin centralizes orders from Shopify, WooCommerce, BigCommerce, Faire, and your B2B wholesale portal into a single order management view. Inventory is deducted from one central pool across all channels simultaneously, preventing overselling regardless of where the order originates.',
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

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Customer reviews of Brahmin Solutions',
  itemListElement: [
    {
      '@type': 'Review',
      position: 1,
      itemReviewed: {
        '@type': 'SoftwareApplication',
        name: 'Brahmin Solutions',
        applicationCategory: 'BusinessApplication',
      },
      author: { '@type': 'Person', name: 'Mike Chang', jobTitle: 'Founder & Owner' },
      reviewBody:
        'With Brahmin Solutions, we replaced spreadsheets and streamlined production planning, allowing us to scale operations effortlessly. Now, we can handle 6 times more orders without additional staff.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      publisher: { '@type': 'Organization', name: 'Nefaire' },
    },
    {
      '@type': 'Review',
      position: 2,
      itemReviewed: {
        '@type': 'SoftwareApplication',
        name: 'Brahmin Solutions',
        applicationCategory: 'BusinessApplication',
      },
      author: { '@type': 'Person', name: 'Taylor Valarik', jobTitle: 'Product Manager' },
      reviewBody:
        'Our team of four saves 15 hours every week now that we\'ve replaced spreadsheets with Brahmin Solutions to track inventory, orders, and accounting.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      publisher: { '@type': 'Organization', name: 'BOLD' },
    },
  ],
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Multi-warehouse inventory',
    description: 'See stock across every warehouse, 3PL, and distribution center from one dashboard—updated in real time.',
    color: 'text-primary-600 bg-primary-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'B2B customer portal',
    description: 'Give wholesale customers a branded portal to check inventory, place orders, and pay invoices—24/7, no phone call required.',
    color: 'text-accent-600 bg-accent-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
    title: 'Shopify & eCommerce sync',
    description: 'Keep Shopify, WooCommerce, BigCommerce, and Faire inventory in sync automatically. Overselling eliminated.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
      </svg>
    ),
    title: 'Custom price lists',
    description: 'Set unique pricing per customer, tier, or volume—automatically applied at checkout in the B2B portal.',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'ShipStation integration',
    description: 'Push orders directly to ShipStation for fulfillment. Pull tracking numbers back automatically.',
    color: 'text-teal-600 bg-teal-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Mobile warehouse app',
    description: 'Receive, put away, pick, pack, and ship with barcode scanning on any device—iOS or Android.',
    color: 'text-rose-600 bg-rose-50',
  },
]

const painPoints = [
  {
    title: 'Inventory errors create oversells and customer disputes',
    problem:
      "When Shopify, your B2B portal, and your internal inventory system don't agree on stock counts, overselling is inevitable. The resulting rush orders, customer chargebacks, and relationship damage compound quickly.",
    solution:
      'Brahmin maintains a single inventory number that syncs to every channel in real time. Shopify, WooCommerce, BigCommerce, Faire, and your B2B portal always show the same accurate stock count.',
  },
  {
    title: 'Your sales team is an order-taking bottleneck',
    problem:
      'When wholesale customers have to call or email to place orders, check availability, and get invoices, your sales team spends its day on admin instead of growing accounts. Order capacity is capped by headcount.',
    solution:
      "Brahmin's B2B portal lets wholesale customers log in to check real-time availability, place orders, and pay invoices — any time, without calling. Order capacity scales without adding headcount.",
  },
  {
    title: "Multi-warehouse visibility doesn't exist",
    problem:
      'When inventory is split across multiple warehouses, 3PLs, and co-manufacturers, getting a real-time view of total available stock requires pulling reports from multiple systems and reconciling them manually.',
    solution:
      'All locations in one dashboard, updated in real time as orders ship and stock is received. Allocate inventory across locations intelligently and see true available-to-promise at every location.',
  },
]

export default function WholesaleDistributionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/industries" className="hover:text-slate-600 transition-colors">Industries</Link>
                <span>/</span>
                <span className="text-slate-600">Wholesale &amp; Distribution</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 text-accent-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Wholesale &amp; Distribution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Wholesale distribution inventory software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Multi-warehouse inventory, a B2B self-service portal, and automatic eCommerce sync—so your team stops taking orders by phone and starts focusing on growth.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5">
                  Book a demo
                </Link>
                <Link href="/pricing" className="flex items-center gap-2 border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">The challenges wholesalers and distributors face</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((point) => (
                <div key={point.title} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-slate-900 mb-3 leading-snug">{point.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{point.problem}</p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-accent-700 leading-relaxed font-medium">{point.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B portal highlight */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent-600 mb-4">B2B Portal</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Your customers order themselves.<br />Your team focuses on growth.
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  Nefaire went from 6 orders a day handled by phone to 36—without adding headcount. The B2B portal paid for itself in the first month.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    'Branded portal with your logo and colors',
                    'Custom price lists per customer or tier',
                    'Real-time inventory availability',
                    'Order tracking and history',
                    'Online invoice payments',
                    'Volume discount rules',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent-50 border border-accent-100 rounded-3xl p-10">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent-600 mb-2">6×</div>
                  <div className="text-slate-600 font-medium mb-6">more orders handled</div>
                  <blockquote className="text-slate-700 text-sm leading-relaxed italic border-l-4 border-accent-200 pl-4 text-left">
                    &ldquo;With Brahmin Solutions, we replaced spreadsheets and streamlined production planning, allowing us to scale operations effortlessly. Now, we can handle 6 times more orders without additional staff.&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-200 flex items-center justify-center text-accent-700 text-xs font-bold">MC</div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-slate-900">Mike Chang</div>
                      <div className="text-xs text-slate-500">Founder & Owner, Nefaire</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-section bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Built for multi-channel distribution
              </h2>
              <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
                Wholesale, DTC, marketplace—manage every channel from one system without the spreadsheet chaos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="group flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${f.color} transition-transform group-hover:scale-110`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1.5">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
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
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common questions about Brahmin for wholesale and distribution</h2>
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

        {/* Social proof */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="bg-primary-600 rounded-3xl p-10 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl text-white font-medium leading-relaxed">
                    &ldquo;Our team of four saves 15 hours every week now that we&apos;ve replaced spreadsheets with Brahmin Solutions to track inventory, orders, and accounting.&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm">TV</div>
                    <div>
                      <div className="text-white font-semibold text-sm">Taylor Valarik</div>
                      <div className="text-primary-200 text-xs">Product Manager, BOLD</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: '240 hrs', l: 'Saved per month' },
                    { n: '$1,200', l: 'Monthly savings' },
                    { n: '2 months', l: 'ROI achieved' },
                    { n: '3–6 weeks', l: 'Implementation' },
                  ].map((s) => (
                    <div key={s.l} className="bg-primary-500/30 rounded-xl p-4 text-center border border-primary-400/30">
                      <div className="text-2xl font-bold text-white">{s.n}</div>
                      <div className="text-xs text-primary-200 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}
