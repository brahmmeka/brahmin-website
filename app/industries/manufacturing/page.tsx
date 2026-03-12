import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Manufacturing Inventory & Production Software | Brahmin Solutions',
  description:
    'Production tracking, BOMs, work orders, and real-time cost visibility for small manufacturers. Go live in as little as 3 weeks with dedicated support.',
  alternates: { canonical: 'https://www.brahmin-solutions.com/industries/manufacturing' },
  openGraph: {
    title: 'Manufacturing Inventory & Production Software | Brahmin Solutions',
    description: 'Production tracking, BOMs, work orders, and real-time cost visibility for small manufacturers. Go live in as little as 3 weeks with dedicated support.',
    url: 'https://www.brahmin-solutions.com/industries/manufacturing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Inventory & Production Software | Brahmin Solutions',
    description: 'Production tracking, BOMs, work orders, and real-time cost visibility for small manufacturers. Go live in as little as 3 weeks with dedicated support.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brahmin-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.brahmin-solutions.com/industries' },
    { '@type': 'ListItem', position: 3, name: 'Manufacturing', item: 'https://www.brahmin-solutions.com/industries/manufacturing' },
  ],
}

const faqs = [
  {
    q: 'Is Brahmin Solutions an ERP or MRP system?',
    a: "Brahmin is best described as an MRP (material requirements planning) system built specifically for small to mid-sized manufacturers. It handles production planning, inventory control, purchasing, and shop floor tracking — the core operations functions. Unlike full ERP systems, Brahmin doesn't include accounting or HR modules, which is why it integrates natively with QuickBooks and Xero instead.",
  },
  {
    q: 'Can Brahmin handle both make-to-order and make-to-stock manufacturing?',
    a: 'Yes. Brahmin supports both make-to-order production (where you build in response to specific customer orders) and make-to-stock production (where you build to inventory). You can run both models simultaneously, with work orders linked to customer orders or to inventory replenishment targets.',
  },
  {
    q: 'Does Brahmin work for small manufacturers?',
    a: "Yes — that's exactly who Brahmin is built for. Our customers range from $500K to $50M in annual revenue. We start at $199/month with no per-user fees, and most manufacturers go live in 3–6 weeks. Enterprise software is designed for companies with full IT departments. Brahmin is designed for manufacturers who need it to work without one.",
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
  author: { '@type': 'Person', name: 'Sheldon Ratuski' },
  reviewBody:
    'Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.',
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  publisher: { '@type': 'Organization', name: 'FLFF' },
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Bills of Materials',
    description: 'Multi-level BOMs with real-time costing. Know exactly what a production run costs before you start it.',
    color: 'text-primary-600 bg-primary-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Work order management',
    description: 'Create, schedule, and track work orders from the shop floor. See status, progress, and costs in real time.',
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
    description: 'Track raw materials, WIP, and finished goods across every location—warehouses, shop floor, and co-manufacturers.',
    color: 'text-teal-600 bg-teal-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Shop floor mobile app',
    description: 'Operators clock in to work orders, report output, and flag issues from any device—no desktop required.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Real-time cost visibility',
    description: 'See labor, material, and overhead costs per work order as they happen. No month-end surprises.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Subcontract manufacturing',
    description: 'Send work to outside processors and track it end-to-end—costs, lead times, and quality.',
    color: 'text-accent-600 bg-accent-50',
  },
]

const steps = [
  { n: '01', title: 'Data migration', desc: 'We import your existing BOMs, inventory, and customer data. No manual re-entry.' },
  { n: '02', title: 'Configuration', desc: 'Your dedicated manager sets up locations, workflows, and integrations to match how you work.' },
  { n: '03', title: 'Team training', desc: 'We train every role—from purchasing to shop floor—with live sessions and recorded walkthroughs.' },
  { n: '04', title: 'Go live', desc: 'Average time from contract to production: 3–6 weeks. We stay on to make sure day one goes smoothly.' },
]

const painPoints = [
  {
    title: 'Production delays cost you customers',
    problem:
      'Without real-time visibility into material availability and work order status, production delays blindside you. By the time you know there\'s a problem, the customer deadline has already passed.',
    solution:
      'Brahmin\'s MRP engine alerts you to material shortages before they hit the shop floor. Work order status, material availability, and production costs are visible in real time — so delays become exceptions, not the norm.',
  },
  {
    title: 'True production cost is always a guess',
    problem:
      'Without connecting labor, material, and overhead costs to individual work orders, you don\'t know what a production run actually costs until weeks after it ships — if ever. Pricing decisions happen on gut feel.',
    solution:
      'Real-time cost visibility per work order. Material costs are pulled from purchase orders, labor is clocked in by operators, and overhead is allocated automatically. See true cost before, during, and after production.',
  },
  {
    title: 'BOMs in spreadsheets are always out of date',
    problem:
      'When product formulas or assembly processes change, updating spreadsheet BOMs is manual, slow, and inconsistent. Different people work from different versions. Errors reach the shop floor.',
    solution:
      'Version-controlled BOMs in Brahmin. Changes are instant, consistent, and reflected in every work order automatically. Everyone on the shop floor sees the same current version.',
  },
]

export default function ManufacturingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-violet-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/industries" className="hover:text-slate-600 transition-colors">Industries</Link>
                <span>/</span>
                <span className="text-slate-600">Manufacturing</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18" />
                </svg>
                Manufacturing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                Manufacturing inventory and production software
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
                Production tracking, BOMs, work orders, and real-time cost visibility—without a 6-month implementation or a dedicated IT team.
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">The challenges manufacturers face</h2>
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

        {/* Features */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Everything the shop floor needs
              </h2>
              <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
                Purpose-built for in-house manufacturers. Not a watered-down version of enterprise ERP.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="group flex gap-4 bg-slate-50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
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
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common questions about Brahmin for manufacturers</h2>
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

        {/* Implementation */}
        <section className="py-section bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Implementation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Live in as little as 3 weeks.<br />Not 6 months.
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  We assign your implementation manager before you sign the contract. They know manufacturing—not just software.
                </p>
                <div className="mt-10 space-y-6">
                  {steps.map((s) => (
                    <div key={s.n} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center text-sm font-bold">{s.n}</div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-0.5">{s.title}</div>
                        <div className="text-sm text-slate-500">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '3–6 weeks', l: 'Average go-live', sub: 'Not 6 months.' },
                  { n: '1:1', l: 'Implementation manager', sub: 'Your own human.' },
                  { n: '15 min', l: 'Support response', sub: "After you're live too." },
                  { n: '300+', l: 'Manufacturers', sub: 'Independently owned.' },
                ].map((s) => (
                  <div key={s.l} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm text-center">
                    <div className="text-3xl font-bold text-slate-900">{s.n}</div>
                    <div className="text-sm font-medium text-slate-700 mt-1">{s.l}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-section bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="bg-slate-900 rounded-3xl p-10 md:p-12">
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
                    &ldquo;Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold text-sm">SF</div>
                    <div>
                      <div className="text-white font-semibold text-sm">Sheldon Ratuski</div>
                      <div className="text-slate-400 text-xs">FLFF</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: '3–6 weeks', l: 'To go live' },
                    { n: '300+', l: 'Manufacturers' },
                    { n: '<15 min', l: 'Support response' },
                    { n: '$199/mo', l: 'Starting price' },
                  ].map((s) => (
                    <div key={s.l} className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700">
                      <div className="text-2xl font-bold text-white">{s.n}</div>
                      <div className="text-xs text-slate-400 mt-1">{s.l}</div>
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
