import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs CraftyBase | Comparison',
  description:
    'CraftyBase is great for hobby makers. Brahmin is built for manufacturers who\'ve outgrown basic tools. Compare MRP, lot traceability, integrations, and pricing side by side.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo', competitor: 'From $49/mo (Artisan)', brahminBetter: false },
  { label: 'MRP & production planning', brahmin: 'Built-in', competitor: 'Not available', brahminBetter: true },
  { label: 'Lot traceability', brahmin: 'Full', competitor: 'Not available', brahminBetter: true },
  { label: 'Native integrations', brahmin: '8 native', competitor: '2–3 (Etsy, Shopify)', brahminBetter: true },
  { label: 'B2B portal', brahmin: 'Included', competitor: 'Not available', brahminBetter: true },
]

const competitorShortfalls = [
  {
    icon: '🏭',
    headline: 'No real production planning or work orders',
    body: 'CraftyBase tracks materials and calculates costs for handmade products, but it has no work orders, no production scheduling, and no MRP. There\'s no way to plan production runs, track work-in-progress, or manage a shop floor. It\'s material tracking for makers — not manufacturing software.',
    quote: '"It\'s great for tracking materials and costs for my Etsy shop, but once I started hiring people and running production batches, I needed something more." — CraftyBase user review',
  },
  {
    icon: '🏷️',
    headline: 'No lot traceability or compliance tools',
    body: 'CraftyBase has no lot numbers, no batch tracking, no expiry date management, and no recall reporting. For manufacturers in regulated industries — food, supplements, cosmetics — this is a non-starter. If an inspector asks for a forward trace, you\'re back to spreadsheets.',
    quote: '"I outgrew CraftyBase when I needed lot tracking for my food products. There\'s just no way to do it." — G2 review',
  },
  {
    icon: '🔌',
    headline: 'Limited integrations — no accounting sync',
    body: 'CraftyBase connects to Etsy and Shopify for order imports, but there\'s no native integration with QuickBooks, Xero, or any accounting software. No ShipStation, no Faire, no SPS Commerce. You\'re manually entering data in two systems — or exporting CSVs and hoping nothing breaks.',
    quote: '"I wish CraftyBase connected to QuickBooks. I spend hours every week re-entering data." — Capterra review',
  },
  {
    icon: '📈',
    headline: 'Designed for craft/hobby, not scaling manufacturers',
    body: 'CraftyBase was purpose-built for Etsy sellers and craft makers. It\'s excellent at what it does — material cost tracking and COGS calculation for handmade goods. But it doesn\'t scale to multi-location inventory, multi-level BOMs, warehouse management, or teams larger than a few people. When your business outgrows the craft stage, CraftyBase can\'t grow with you.',
    quote: '"CraftyBase was perfect when I was making candles in my kitchen. But now that I have a warehouse and 8 employees, I need real manufacturing software." — Reddit user',
  },
]

const brahminStrengths = [
  {
    icon: '🏭',
    headline: 'Full MRP that scales with your business.',
    body: 'Brahmin includes multi-level BOMs, work orders, production scheduling, and MRP demand planning. Whether you\'re making 50 units or 50,000, the system grows with you — from startup to $50M+ in revenue.',
  },
  {
    icon: '🏷️',
    headline: 'Lot traceability with one-click recall reports.',
    body: 'Full forward and backward lot genealogy from raw material supplier to finished product customer. One-click recall reports tell you exactly which lots, units, and customers are affected — in minutes, not days. FDA and FSMA compliant.',
  },
  {
    icon: '🔌',
    headline: '8 native integrations including accounting.',
    body: 'QuickBooks, Xero, Shopify, WooCommerce, BigCommerce, Faire, SPS Commerce, and ShipStation — all native, all included on every plan. Plus 5,000+ apps via Zapier. No more double-entry or CSV exports.',
  },
  {
    icon: '🤝',
    headline: 'Dedicated implementation manager and unlimited training.',
    body: 'Every Brahmin customer gets a dedicated implementation manager, unlimited training calls, and support that responds in under 15 minutes. Go live in 2–4 weeks with someone who knows your business by name. CraftyBase offers email-only support.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; competitor: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price', brahmin: 'From $199/month', competitor: 'From $49/month (Artisan)' },
  { feature: 'Free tier', brahmin: false, competitor: true, note: 'CraftyBase offers a limited free plan' },
  { feature: 'Users included', brahmin: 'Unlimited', competitor: '1 (Artisan)', note: 'Multi-user on Studio plan only' },
  { feature: 'Implementation included', brahmin: true, competitor: false },
  { feature: 'Unlimited training', brahmin: true, competitor: false },
  // Support & implementation
  { feature: 'Dedicated implementation manager', brahmin: true, competitor: false },
  { feature: 'Support response time', brahmin: '<15 minutes', competitor: 'Email only' },
  { feature: 'Average time to go-live', brahmin: '2–4 weeks', competitor: 'Self-service setup' },
  // Manufacturing
  { feature: 'Bills of materials (multi-level)', brahmin: true, competitor: false, note: 'CraftyBase has simple recipe/formula tracking only' },
  { feature: 'Work orders', brahmin: true, competitor: false },
  { feature: 'Production scheduling', brahmin: true, competitor: false },
  { feature: 'MRP / demand planning', brahmin: true, competitor: false },
  { feature: 'Real-time production costing', brahmin: true, competitor: 'Basic COGS', note: 'CraftyBase tracks material costs, not full production costs' },
  { feature: 'Labor & overhead tracking', brahmin: true, competitor: false },
  // Traceability
  { feature: 'Lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  { feature: 'Full lot genealogy (supplier to customer)', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  { feature: 'FDA / FSMA compliance tools', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  // Integrations
  { feature: 'Native integrations included', brahmin: '8 on all plans', competitor: '2–3 (Etsy, Shopify)' },
  { feature: 'QuickBooks integration', brahmin: true, competitor: false },
  { feature: 'Shopify integration', brahmin: true, competitor: true },
  { feature: 'B2B wholesale portal', brahmin: true, competitor: false },
  // Platform
  { feature: 'Multi-location inventory', brahmin: true, competitor: false },
  { feature: 'Barcode scanning', brahmin: true, competitor: false },
  { feature: 'Mobile app', brahmin: true, competitor: false },
  { feature: 'Warehouse management', brahmin: true, competitor: false },
  { feature: 'Purpose-built for manufacturers', brahmin: true, competitor: false, note: 'CraftyBase is built for handmade/craft businesses' },
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
  'You manufacture products at scale and need BOMs, work orders, and production scheduling',
  'You need lot traceability and recall readiness for regulated industries',
  'You want native accounting integration with QuickBooks or Xero',
  'You need multi-location inventory across warehouses, 3PLs, and co-manufacturers',
  'You want a B2B portal so wholesale customers can order 24/7',
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

export default function CraftyBaseCompare() {
  return (
    <>
      {/* -- 1. HERO --------------------------------------------------------- */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs CraftyBase</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            CraftyBase is a great tool for craft makers and Etsy sellers. But when your business grows past the hobby stage, you need real manufacturing software — production planning, lot traceability, accounting integration, and support that scales with you.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['✓ Full MRP & production planning', '✓ Lot traceability & recall reports', '✓ 8 native integrations incl. QuickBooks', '✓ Scales from startup to $50M+'].map((pill) => (
              <span key={pill} className="bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-sm px-4 py-1.5 rounded-full">{pill}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See our pricing</Link>
          </div>
        </div>
      </section>

      {/* -- 2. QUICK COMPARISON --------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Quick comparison</h2>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-500 uppercase tracking-wide">
              <div className="px-6 py-4"></div>
              <div className="px-6 py-4 text-center text-emerald-700 bg-emerald-50">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">CraftyBase</div>
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

      {/* -- 3. WHERE CRAFTYBASE FALLS SHORT --------------------------------- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where CraftyBase falls short for manufacturers</h2>
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

      {/* -- 4. WHERE BRAHMIN EXCELS ----------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Brahmin excels</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Manufacturing software that scales with your business — from first production run to $50M+ in revenue.</p>
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

      {/* -- 5. FEATURE TABLE ------------------------------------------------ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Feature-by-feature breakdown</h2>
          </div>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_160px_160px] bg-slate-800 text-white text-sm font-semibold">
              <div className="px-3 md:px-6 py-4">Feature</div>
              <div className="px-3 md:px-6 py-4 text-center bg-emerald-700">Brahmin Solutions</div>
              <div className="px-3 md:px-6 py-4 text-center">CraftyBase</div>
            </div>
            {tableGroups.map((group) => (
              <div key={group.label}>
                <div className="px-3 md:px-6 py-3 bg-slate-100 border-y border-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{group.label}</span>
                </div>
                {group.rows.map((row) => (
                  <div key={row.feature} className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_160px_160px] border-b border-slate-100 last:border-0 items-center hover:bg-slate-50 transition-colors">
                    <div className="px-3 md:px-6 py-3.5">
                      <span className="text-sm text-slate-700">{row.feature}</span>
                      {row.note && <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>}
                    </div>
                    <div className="px-3 md:px-6 py-3.5 bg-emerald-50/50 flex items-center justify-center"><Cell value={row.brahmin} /></div>
                    <div className="px-3 md:px-6 py-3.5 flex items-center justify-center"><Cell value={row.competitor} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">CraftyBase data sourced from craftybase.com, G2, and Capterra. Last updated March 2026.</p>
        </div>
      </section>

      {/* -- 6. WHO SHOULD CHOOSE BRAHMIN ------------------------------------ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Who should choose Brahmin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="font-semibold text-emerald-900">Choose Brahmin if...</h3>
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
                <h3 className="font-semibold text-slate-700">CraftyBase may be a better fit if...</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You\'re a hobbyist or crafter selling on Etsy and just need material cost tracking',
                  'Your revenue is under $100K and you don\'t need production planning',
                  'You only need to track materials and calculate COGS for handmade products',
                  'You\'re a one-person operation with no plans to scale into manufacturing',
                  'You don\'t need lot traceability, accounting integration, or warehouse management',
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

      {/* -- 7. CTA ---------------------------------------------------------- */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for manufacturing software that scales with you?</h2>
          <p className="text-slate-300 text-lg mb-8">Book a 30-minute demo. We&apos;ll show you Brahmin with your actual products and workflows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See pricing</Link>
          </div>
          <div className="text-sm text-slate-400 mb-10">No credit card required · 14-day free trial · Live in 2–4 weeks</div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs inFlow', href: '/compare/inflow' },
                { label: 'vs Spreadsheets', href: '/compare/spreadsheets' },
                { label: 'vs Fishbowl', href: '/compare/fishbowl' },
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
