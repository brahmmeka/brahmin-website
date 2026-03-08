import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Food & Beverage Inventory & Production Software | Brahmin Solutions',
  description:
    'Lot traceability, expiration tracking, and FDA compliance for food and beverage manufacturers. Full traceability from ingredients to finished goods. Go live in 3–6 weeks.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/food-beverage' },
  openGraph: {
    title: 'Food & Beverage Inventory & Production Software | Brahmin Solutions',
    description: 'Lot traceability, expiration tracking, and FDA compliance for food and beverage manufacturers. Full traceability from ingredients to finished goods. Go live in 3–6 weeks.',
    url: 'https://www.brahmin-solutions.com/industries/food-beverage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food & Beverage Inventory & Production Software | Brahmin Solutions',
    description: 'Lot traceability, expiration tracking, and FDA compliance for food and beverage manufacturers. Full traceability from ingredients to finished goods. Go live in 3–6 weeks.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brahmin-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.brahmin-solutions.com/industries' },
    { '@type': 'ListItem', position: 3, name: 'Food & Beverage', item: 'https://www.brahmin-solutions.com/industries/food-beverage' },
  ],
}

const faqs = [
  {
    q: 'Is Brahmin Solutions FDA compliant for food manufacturers?',
    a: 'Brahmin provides the operational tools that FDA compliance requires: complete lot and batch traceability, expiration date tracking, CoA document storage, and recall reporting. While Brahmin is a manufacturing and inventory platform (not a compliance certification body), it provides the audit-ready documentation that FDA inspectors look for under FSMA and 21 CFR regulations.',
  },
  {
    q: 'Does Brahmin support FSMA recordkeeping requirements?',
    a: 'Yes. Brahmin supports the key traceability recordkeeping requirements of FSMA Rule 204, which requires food manufacturers to maintain records linking ingredients to finished products throughout the supply chain. Brahmin tracks lot numbers from supplier receipt through production and customer delivery, with records exportable for regulatory review.',
  },
  {
    q: 'Can Brahmin track allergens by batch?',
    a: 'Yes. Brahmin tracks ingredient lot numbers through every production batch, which means you can identify which batches used a specific ingredient — including allergen-containing ingredients. This is critical for both consumer safety and recall readiness if a supplier allergen issue surfaces.',
  },
  {
    q: 'How does Brahmin help with mock recalls?',
    a: 'Brahmin generates complete recall reports from a lot number search. You can identify the affected ingredient lot, trace it forward to every finished product batch it touched, and see every customer who received that product — with quantities and ship dates. What used to take days can be completed in minutes, making mock recalls and actual recalls dramatically faster.',
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
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'Brahmin Solutions',
    applicationCategory: 'BusinessApplication',
  },
  author: { '@type': 'Person', name: 'Andrea R.', jobTitle: 'Office Manager' },
  reviewBody:
    'We have yearly inspections which include mock recalls and mass balance exercises, and both went the smoothest they ever have after using Brahmin Solutions. The time savings and reduced errors alone have been invaluable.',
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  publisher: { '@type': 'Organization', name: 'Sfoglini Pasta' },
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    title: 'Lot & batch traceability',
    description: 'Track every lot from supplier receipt to customer shipment. One-click recall reports in minutes, not days.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Expiration date management',
    description: 'FEFO (first expired, first out) picking rules. Automatic alerts before product ages out.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Certificate of analysis storage',
    description: 'Attach CoAs, spec sheets, and supplier documents directly to lot records. Always audit-ready.',
    color: 'text-primary-600 bg-primary-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Production batch records',
    description: 'Digital batch records for every production run—ingredients, quantities, operators, and times.',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Multi-location inventory',
    description: 'Track finished goods, raw materials, and packaging across every warehouse and co-packer.',
    color: 'text-teal-600 bg-teal-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'FDA audit readiness',
    description: 'Complete chain-of-custody records, supplier documentation, and traceability reports for regulatory audits.',
    color: 'text-accent-600 bg-accent-50',
  },
]

const recallSteps = [
  { step: 'Identify affected lot', time: '< 1 min', desc: 'Search by lot number, supplier, or date range.' },
  { step: 'Trace forward & backward', time: '< 2 min', desc: 'See every customer who received affected product.' },
  { step: 'Generate recall report', time: '< 1 min', desc: 'Export with customer contacts, quantities, and ship dates.' },
  { step: 'Issue holds', time: '< 1 min', desc: 'Place inventory holds on any remaining stock.' },
]

const painPoints = [
  {
    title: 'A recall without traceability takes days, not minutes',
    problem:
      'When a supplier calls about a contaminated ingredient or the FDA issues a warning, you need to know exactly which customers received affected product — now. Without lot traceability, that search can take days.',
    solution:
      'Full forward and backward lot traceability in Brahmin. From a single lot number search, see every production batch that used it and every customer who received the finished product — with a report ready in minutes.',
  },
  {
    title: 'Expiration management across SKUs costs you product',
    problem:
      'Managing shelf life manually across dozens of SKUs and multiple locations leads to expired product slipping through to customers, costly write-offs, and retailer chargebacks.',
    solution:
      'FEFO (first expired, first out) picking rules and automatic expiry alerts. Brahmin ensures you ship oldest stock first and flags product approaching its use-by date before it becomes a problem.',
  },
  {
    title: 'FDA audits turn into all-hands fire drills',
    problem:
      'When an inspector arrives, pulling together batch records, supplier documentation, and traceability records from spreadsheets and email takes hours and creates compliance risk from missing documents.',
    solution:
      'All batch records, CoAs, and supplier documents attached directly to lot records and always searchable. What used to take hours takes minutes.',
  },
]

export default function FoodBeveragePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-amber-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/industries" className="hover:text-slate-600 transition-colors">Industries</Link>
                <span>/</span>
                <span className="text-slate-600">Food &amp; Beverage</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                Food &amp; Beverage
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Food and beverage inventory software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Full batch tracking, expiration management, and one-click recall reports. Built for food, beverage, supplement, and cosmetics manufacturers.
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">The challenges food manufacturers face</h2>
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

        {/* Recall speed section */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-600 mb-4">Recall readiness</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  A recall in minutes,<br />not days
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  A small-scale recall costs an average of 1.75% of annual revenue in direct expenses — $87,500 for a $5M business. Here&apos;s what Sfoglini Pasta had to say after their first mock recall with Brahmin.
                </p>
                <div className="mt-8 space-y-4">
                  {recallSteps.map((s) => (
                    <div key={s.step} className="flex items-start gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="shrink-0 bg-rose-100 text-rose-600 text-xs font-bold px-2 py-1 rounded-lg">{s.time}</div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{s.step}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-rose-50 border border-rose-100 rounded-3xl p-10">
                <div className="text-center">
                  <div className="text-6xl font-bold text-rose-600 mb-2">$87,500</div>
                  <div className="text-slate-600 font-medium mb-6">in recall costs avoided</div>
                  <blockquote className="text-slate-700 text-sm leading-relaxed italic border-l-4 border-rose-200 pl-4 text-left">
                    &ldquo;We have yearly inspections which include mock recalls and mass balance exercises, and both went the smoothest they ever have after using Brahmin Solutions. The time savings and reduced errors alone have been invaluable.&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-rose-700 text-xs font-bold">AR</div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-slate-900">Andrea R.</div>
                      <div className="text-xs text-slate-500">Office Manager, Sfoglini Pasta</div>
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
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Features</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Built for regulated manufacturing
              </h2>
              <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
                Food, beverage, supplements, and cosmetics manufacturers need more than basic inventory tracking.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="group flex gap-4 bg-white hover:bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
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
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common questions about Brahmin for food manufacturers</h2>
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

        {/* Industries served */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Industries</span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-10">Who we work with</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Food Manufacturing', 'Beverage Production', 'Dietary Supplements', 'Cosmetics & Beauty', 'Pet Food', 'Nutraceuticals', 'Specialty Foods', 'Craft Beverages'].map((ind) => (
                <span key={ind} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}
