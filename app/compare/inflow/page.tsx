import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs inFlow | Comparison',
  description:
    'inFlow is great for inventory. Brahmin is built for manufacturing. Compare MRP, lot traceability, production costing, and pricing side by side.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo', competitor: 'From $179/mo (mfg)', brahminBetter: false },
  { label: 'Users included', brahmin: 'Unlimited', competitor: '2 (Start Up)', brahminBetter: true },
  { label: 'Integrations included', brahmin: '8 native', competitor: '1 (Start Up)', brahminBetter: true },
  { label: 'Implementation', brahmin: 'Included (dedicated manager)', competitor: '$499 + $199/hr', brahminBetter: true },
  { label: 'MRP / demand planning', brahmin: 'Built-in', competitor: 'Not available', brahminBetter: true },
]

const competitorShortfalls = [
  {
    icon: '🏭',
    headline: 'Manufacturing is a separate, more expensive product',
    body: 'inFlow sells two separate products: inFlow Inventory and inFlow Manufacturing. To get BOMs and work orders, you need inFlow Manufacturing — which starts at $179/month for just 2 users. For a 5-user manufacturing team, you\'re looking at $449/month. Brahmin includes full manufacturing capabilities in every plan.',
    quote: '"Not quite MRP — there is not a time-phased \'Make/Buy Report\' that materials professionals look for." — Capterra review',
  },
  {
    icon: '🏷️',
    headline: 'Lot traceability is still in beta',
    body: 'Lot numbers and expiry dates were launched as a beta feature in inFlow. There are no one-click recall reports, no full lot genealogy from supplier to customer, and no FDA or FSMA compliance tooling. For manufacturers in regulated industries — food, supplements, cosmetics, medical devices — this is a gap that can\'t be worked around.',
    quote: '"Wished they could use production work orders for circular references instead of having to work around it with stock adjustments." — Capterra review',
  },
  {
    icon: '💰',
    headline: 'BOM costing doesn\'t auto-update',
    body: 'When raw material costs change in inFlow, your BOMs don\'t recalculate automatically. You have to manually update every affected product — a tedious, error-prone process that grows worse as your product catalog grows. Real-time cost visibility is critical for manufacturers who need to know their true margins.',
    quote: '"inFlow does not automatically update costing on BOMs when you alter the cost of a raw part, so there is more touch time than really should be required." — Capterra review',
  },
  {
    icon: '🔌',
    headline: 'Integrations are metered by plan',
    body: 'inFlow meters integrations: 1 on the Start Up plan, 3 on Growth, 5 on Scale. Brahmin includes 8 native integrations — QuickBooks, Xero, Shopify, WooCommerce, BigCommerce, Faire, SPS Commerce, and ShipStation — on every plan. Plus 5,000+ apps via Zapier.',
    quote: '"Integration between inFlow and QuickBooks is hopeless... don\'t bother trying." — G2 review',
  },
]

const brahminStrengths = [
  {
    icon: '🏭',
    headline: 'Manufacturing is core, not an add-on.',
    body: 'Brahmin was built for manufacturers from day one. BOMs, work orders, production scheduling, and real-time costing are core features — not a separate product at a higher price point. One product, one price, everything you need.',
  },
  {
    icon: '🏷️',
    headline: 'Full lot traceability with one-click recall reports.',
    body: 'Production-ready lot traceability, not a beta feature. Full forward and backward genealogy from ingredient supplier to finished product customer. One-click recall reports that tell you exactly which customers are affected — in minutes, not days.',
  },
  {
    icon: '📊',
    headline: 'Real MRP with demand planning.',
    body: 'Brahmin includes a real MRP engine — time-phased material planning, shortage alerts, and demand forecasting. Know what to make and what to buy before you run out. inFlow has no MRP capability at all.',
  },
  {
    icon: '🤝',
    headline: 'Dedicated implementation manager. Unlimited training.',
    body: 'Every Brahmin customer gets a dedicated implementation manager and unlimited training calls — included on every plan. inFlow charges $499 for onboarding plus $199/hour for additional training.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; competitor: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price (manufacturing)', brahmin: 'From $199/month', competitor: 'From $179/month (2 users)' },
  { feature: '5-user manufacturing plan', brahmin: 'From $199/month', competitor: '$449/month', note: 'inFlow Manufacturing Growth plan' },
  { feature: 'Per-user fees', brahmin: false, competitor: 'Priced by user tier' },
  { feature: 'Implementation included', brahmin: true, competitor: false, note: 'inFlow charges $499 + $199/hr' },
  { feature: 'Unlimited training', brahmin: true, competitor: false, note: 'inFlow charges $199/hr for training' },
  // Support & implementation
  { feature: 'Dedicated implementation manager', brahmin: true, competitor: false },
  { feature: 'Support response time', brahmin: '<15 minutes', competitor: 'Email/chat (business hours)' },
  { feature: 'Average time to go-live', brahmin: '3–6 weeks', competitor: 'Self-service setup' },
  // Manufacturing
  { feature: 'Bills of materials (multi-level)', brahmin: true, competitor: 'Basic single-level' },
  { feature: 'Work orders', brahmin: true, competitor: true, note: 'Requires inFlow Manufacturing product' },
  { feature: 'MRP / demand planning', brahmin: true, competitor: false },
  { feature: 'Real-time production costing', brahmin: true, competitor: false, note: 'inFlow updates costs only after completion' },
  { feature: 'Auto-updating BOM costs', brahmin: true, competitor: false, note: 'Manual recalculation required in inFlow' },
  { feature: 'Labor & overhead tracking', brahmin: true, competitor: false },
  // Traceability
  { feature: 'Lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', competitor: 'Beta feature' },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  { feature: 'Full lot genealogy (supplier to customer)', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  { feature: 'FDA / FSMA compliance tools', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  // Integrations
  { feature: 'Native integrations included', brahmin: '8 on all plans', competitor: '1–5 (metered by plan)' },
  { feature: 'QuickBooks integration', brahmin: true, competitor: true, note: 'inFlow integration quality questioned in reviews' },
  { feature: 'Shopify integration', brahmin: true, competitor: true },
  { feature: 'B2B wholesale portal', brahmin: true, competitor: 'Showroom (limited)' },
  // Platform
  { feature: 'Mobile app', brahmin: true, competitor: true },
  { feature: 'Barcode scanning', brahmin: true, competitor: true },
  { feature: 'Purpose-built for manufacturers', brahmin: true, competitor: false, note: 'inFlow is inventory-first with manufacturing added on' },
]

const tableGroups = [
  { label: 'Pricing', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 8) },
  { label: 'Manufacturing', rows: comparisonRows.slice(8, 14) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(14, 18) },
  { label: 'Integrations', rows: comparisonRows.slice(18, 22) },
  { label: 'Platform', rows: comparisonRows.slice(22) },
]

const idealFor = [
  'You manufacture products and need BOMs, work orders, and production planning in one system',
  'You need lot traceability and recall readiness for regulated industries',
  'You want real-time production costing with auto-updating BOM costs',
  'You need MRP and demand planning to know what to make and buy',
  'You want 8 native integrations included — not metered by plan',
  'You want a dedicated implementation manager and unlimited training included',
]

function Cell({ value }: { value: RowValue }) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    )
  }
  if (value === false) {
    return (
      <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    )
  }
  return <span className="text-sm text-slate-600 text-center block">{value}</span>
}

export default function InFlowCompare() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs inFlow</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            inFlow is a well-designed inventory tool. But manufacturers need more than inventory — they need production planning, real-time costing, lot traceability, and MRP. Brahmin was built for manufacturing from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['✓ Full manufacturing built in', '✓ Real MRP & demand planning', '✓ Production-ready lot traceability', '✓ 8 native integrations on all plans'].map((pill) => (
              <span key={pill} className="bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-sm px-4 py-1.5 rounded-full">{pill}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See our pricing</Link>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK COMPARISON ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Quick comparison</h2>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-500 uppercase tracking-wide">
              <div className="px-6 py-4"></div>
              <div className="px-6 py-4 text-center text-emerald-700 bg-emerald-50">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">inFlow</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>{row.brahmin}</div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{row.competitor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE INFLOW FALLS SHORT ────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where inFlow falls short for manufacturers</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Based on reviews from G2, Capterra, and product documentation.</p>
          </div>
          <div className="space-y-6">
            {competitorShortfalls.map((item) => (
              <div key={item.headline} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.headline}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.body}</p>
                    <blockquote className="border-l-4 border-slate-200 pl-4 text-sm text-slate-500 italic">{item.quote}</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHERE BRAHMIN EXCELS ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Brahmin excels</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Purpose-built manufacturing software — not inventory with manufacturing bolted on.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brahminStrengths.map((card) => (
              <div key={card.headline} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.headline}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FEATURE TABLE ────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Feature-by-feature breakdown</h2>
          </div>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1fr_160px_160px] bg-slate-800 text-white text-sm font-semibold">
              <div className="px-6 py-4">Feature</div>
              <div className="px-6 py-4 text-center bg-emerald-700">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">inFlow</div>
            </div>
            {tableGroups.map((group) => (
              <div key={group.label}>
                <div className="px-6 py-3 bg-slate-100 border-y border-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{group.label}</span>
                </div>
                {group.rows.map((row) => (
                  <div key={row.feature} className="grid grid-cols-[1fr_160px_160px] border-b border-slate-100 last:border-0 items-center hover:bg-slate-50 transition-colors">
                    <div className="px-6 py-3.5">
                      <span className="text-sm text-slate-700">{row.feature}</span>
                      {row.note && <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>}
                    </div>
                    <div className="px-6 py-3.5 bg-emerald-50/50 flex items-center justify-center"><Cell value={row.brahmin} /></div>
                    <div className="px-6 py-3.5 flex items-center justify-center"><Cell value={row.competitor} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">inFlow data sourced from inflowinventory.com, G2, and Capterra. Last updated March 2026.</p>
        </div>
      </section>

      {/* ── 6. WHO SHOULD CHOOSE BRAHMIN ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Who should choose Brahmin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="font-semibold text-emerald-900">Choose Brahmin if…</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-emerald-800">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="font-semibold text-slate-700">inFlow may be a better fit if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You only need inventory tracking — no manufacturing, no production, no BOMs',
                  'You\'re a buy-and-sell business with no production floor',
                  'You want a Windows desktop app alongside the cloud version',
                  'You\'re a very small team (1–2 people) with simple inventory needs',
                  'You don\'t need lot traceability or compliance reporting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-primary-50 rounded-2xl border border-primary-100 p-8 text-center">
            <blockquote className="text-lg font-medium text-slate-800 mb-4 max-w-3xl mx-auto leading-relaxed">
              &ldquo;Brahmin syncs to all our systems and handles batch tracking, order capture, and fulfillment — everything we need in one place.&rdquo;
            </blockquote>
            <cite className="text-sm text-slate-500 not-italic">— Ryan, Chugach Chocolates</cite>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see what manufacturing-first software looks like?</h2>
          <p className="text-slate-300 text-lg mb-8">Book a 30-minute demo. We&apos;ll show you Brahmin with your actual products and workflows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See pricing</Link>
          </div>
          <div className="text-sm text-slate-400 mb-10">No credit card required · 14-day free trial · Live in 3–6 weeks</div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs Cin7', href: '/compare/cin7' },
                { label: 'vs Fishbowl', href: '/compare/fishbowl' },
                { label: 'vs NetSuite', href: '/compare/netsuite' },
                { label: 'vs Spreadsheets', href: '/compare/spreadsheets' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-1.5 rounded-full transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
