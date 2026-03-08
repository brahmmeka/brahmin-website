import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Katana MRP | Comparison',
  description:
    'See how Brahmin Solutions compares to Katana MRP. Predictable pricing from $199/month, <15 min support, and lot traceability at a fraction of what Katana charges.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo', katana: '$299/mo + add-ons', brahminBetter: true },
  { label: 'Pricing model', brahmin: 'Per tier — no revenue-based fees', katana: 'GMV + order-count tiers', brahminBetter: true },
  { label: 'Support response', brahmin: '<15 minutes', katana: '1–3 business days', brahminBetter: true },
  { label: 'Lot traceability', brahmin: 'Add-on from $75/mo · Included on Pro', katana: 'Add-on ($199/mo extra)', brahminBetter: true },
  { label: 'Implementation', brahmin: 'Dedicated manager, 3–6 weeks', katana: 'Self-serve, 30–60 days', brahminBetter: true },
]

const katanaShortfalls = [
  {
    icon: '📈',
    headline: 'Pricing that grows faster than your business',
    body: "Katana started at $99/month. Today it starts at $299/month — and that's before add-ons. Multiple customers report price increases of 300–523% over their time as customers. Katana's pricing is tied to your order volume and gross revenue: the more you sell, the more you pay, on top of the base rate. Small manufacturers selling high volumes of low-priced goods get hit hardest.",
    quote: '"We ended up paying almost the same as companies doing $50M+ in annual sales." — Katana customer, Trustpilot',
  },
  {
    icon: '🔒',
    headline: 'Features you expected are now add-ons',
    body: 'In 2024, Katana moved features that existing customers already had — including serial number tracking — into separate $199/month add-on packages. Lot and batch traceability that manufacturers rely on for FDA compliance sits behind a paywall. The result: your base plan gets you less than you thought, and "full" functionality costs significantly more.',
    quote: '"They recently notified us they were about to DOUBLE our monthly subscription cost." — Katana customer, G2',
  },
  {
    icon: '🐢',
    headline: 'Support that responds in days, not minutes',
    body: "Katana's support team is Europe-based and works European business hours. If you're in the US and something breaks in the afternoon, you might wait until the next business day — or longer. Multiple reviews note that complex issues go unresolved for days. When your production line is stopped, a 1–3 day response window is not a support strategy.",
    quote: '"Customer service will only meet you at 2am." — Katana customer, Capterra (Australia)',
  },
  {
    icon: '🏭',
    headline: 'No real shop floor control',
    body: "Katana tracks inventory and BOMs well, but it has no machine occupancy tracking, no work center panels, and no shop floor scheduling. You can't see which machines are running, assign tasks to worker groups, or get a live view of what's happening on the floor. For manufacturers who do more than simple batch production, this ceiling shows up fast.",
    quote: '"There is no function to see who is doing what. We have been promised this, but it has not been implemented." — Katana customer, G2',
  },
  {
    icon: '📊',
    headline: 'Reporting that leaves you guessing',
    body: "Users consistently flag Katana's reporting as inflexible and incomplete. There is no transaction history, making audits difficult. Custom reports require exporting to spreadsheets and rebuilding manually. For a manufacturer who needs real insight into costs, margins, and production performance, Katana's reporting is a significant limitation.",
    quote: '"Sub-optimal reporting flexibility. No transaction history. Hard to audit issues." — Katana customer, Capterra',
  },
]

const brahminStrengths = [
  {
    icon: '💰',
    headline: 'Predictable pricing. No revenue-based fees.',
    body: "Brahmin plans start at $199/month and scale with your operation — by order volume and locations, not by how much revenue you earn. As your sales grow within your tier, your bill stays exactly the same.",
  },
  {
    icon: '💬',
    headline: '<15 minute support. Measured, not promised.',
    body: "Every Brahmin customer gets a real person who knows their account. Our average support response time is under 15 minutes — we track it because we stand behind it. You will never get a ticket number as a response to a production emergency.",
  },
  {
    icon: '🏷️',
    headline: 'Lot traceability at a fraction of the cost.',
    body: "Katana charges $199/month extra for lot and serial number tracking. Brahmin's Compliance add-on is $75/month on Growth — and on Brahmin Pro, full lot traceability, expiration management, and one-click recall reports are fully included.",
  },
  {
    icon: '🚀',
    headline: 'Dedicated implementation. Live in 3–6 weeks.',
    body: 'Every new customer gets a dedicated implementation manager who stays with you through go-live and beyond. Average implementation is 3–6 weeks. You will never be left to figure it out from a help center article.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; katana: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price', brahmin: 'From $199/month (Starter)', katana: '$299/month', note: 'Katana Core plan, single location' },
  { feature: 'Pricing model', brahmin: 'Per tier (orders + locations)', katana: 'GMV + order count tiers', note: 'Katana pricing increases with gross revenue' },
  { feature: 'Per-order / per-transaction fees', brahmin: false, katana: true },
  { feature: 'Lot/serial tracking add-on cost', brahmin: '$75/mo on Growth · Included on Pro', katana: '$199/mo extra', note: 'Brahmin compliance add-on costs 62% less than Katana' },
  { feature: 'Price stability over time', brahmin: true, katana: false, note: 'Katana has raised prices 300–523% for long-term customers' },
  // Support
  { feature: 'Average support response time', brahmin: '<15 minutes', katana: '1–3 business days' },
  { feature: 'Dedicated implementation manager', brahmin: true, katana: false },
  { feature: 'Average time to go-live', brahmin: '3–6 weeks', katana: '30–60 days' },
  { feature: 'US business hours support', brahmin: true, katana: false, note: 'Katana support is Europe-based' },
  { feature: 'Unlimited training calls', brahmin: true, katana: false },
  // Inventory & Production
  { feature: 'Real-time multi-location inventory', brahmin: true, katana: true },
  { feature: 'Bills of materials (multi-level)', brahmin: true, katana: true },
  { feature: 'Work orders', brahmin: true, katana: true },
  { feature: 'Real-time production cost tracking', brahmin: true, katana: true },
  { feature: 'Shop floor scheduling / work centers', brahmin: true, katana: false },
  { feature: 'Yield and scrap tracking', brahmin: true, katana: 'Limited' },
  { feature: 'Subcontract manufacturing', brahmin: true, katana: false },
  // Traceability
  { feature: 'Batch & lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', katana: 'Add-on ($199/mo)', note: 'Brahmin add-on ($75/mo) costs 62% less than Katana' },
  { feature: 'Expiration date management', brahmin: 'Pro · Add-on on Starter/Growth', katana: 'Limited' },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', katana: false },
  { feature: 'FDA/FSMA audit trails', brahmin: 'Pro · Add-on on Starter/Growth', katana: false },
  { feature: 'Certificate of analysis (CoA) storage', brahmin: true, katana: false },
  // Integrations
  { feature: 'QuickBooks integration', brahmin: true, katana: true },
  { feature: 'Xero integration', brahmin: true, katana: true },
  { feature: 'Shopify integration', brahmin: true, katana: true },
  { feature: 'ShipStation integration', brahmin: true, katana: false },
  { feature: 'WooCommerce integration', brahmin: true, katana: false },
  // Platform
  { feature: 'B2B wholesale customer portal', brahmin: true, katana: false },
  { feature: 'Mobile warehouse app', brahmin: true, katana: false },
  { feature: 'MRP / demand planning', brahmin: true, katana: 'Basic' },
  { feature: 'Reporting and custom reports', brahmin: true, katana: 'Limited' },
  { feature: 'REST API', brahmin: 'Beta', katana: true },
  { feature: 'VC-backed / investor pressure', brahmin: false, katana: true, note: 'Katana raised $11M Series A' },
]

const tableGroups = [
  { label: 'Pricing', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Inventory & production', rows: comparisonRows.slice(10, 17) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(17, 22) },
  { label: 'Integrations', rows: comparisonRows.slice(22, 27) },
  { label: 'Platform', rows: comparisonRows.slice(27) },
]

const idealFor = [
  'You are outgrowing Katana — more locations, more orders, more complexity',
  'Your Katana bill keeps climbing as your order volume or revenue grows',
  'You need FDA-ready lot traceability — included on Pro, or add-on at 62% less than Katana charges',
  'You want support that responds in minutes, not days',
  'You sell wholesale and need a B2B ordering portal for your buyers',
  'You want a dedicated implementation manager, not a help center article',
  'You manufacture food, cosmetics, supplements, or other regulated products',
  'You want pricing that does not change as your revenue grows',
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }
  return <span className="text-sm text-slate-600 font-medium">{value}</span>
}

export default function VsKatanaPage() {
  return (
    <main>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs Katana MRP</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Katana has raised prices 300–523% for long-term customers and moved traceability features behind a $199/month add-on. Brahmin starts at $199/month — no revenue-based tiers, no traceability paywall.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              '✓ From $199/mo — no revenue-based fees',
              '✓ Lot traceability at 62% less than Katana',
              '✓ <15 min support response',
              '✓ Dedicated implementation manager',
            ].map((pill) => (
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
              <div className="px-6 py-4 text-center">Katana MRP</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>{row.brahmin}</div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{row.katana}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE KATANA FALLS SHORT ─────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Katana falls short</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Based on verified reviews from G2, Capterra, and Trustpilot.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {katanaShortfalls.map((item) => (
              <div key={item.headline} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.headline}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.body}</p>
                <blockquote className="border-l-2 border-slate-200 pl-4 text-xs text-slate-400 italic leading-relaxed">
                  {item.quote}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHERE BRAHMIN EXCELS ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Brahmin excels</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Predictable pricing, faster implementation, and real humans on support.</p>
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

      {/* ── 5. FEATURE-BY-FEATURE BREAKDOWN ─────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Feature-by-feature breakdown</h2>
          </div>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
            <div className="grid grid-cols-[1fr_160px_160px] bg-slate-800 text-white text-sm font-semibold">
              <div className="px-6 py-4">Feature</div>
              <div className="px-6 py-4 text-center bg-emerald-700">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">Katana MRP</div>
            </div>
            {tableGroups.map((group) => (
              <div key={group.label}>
                <div className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-50/80 border-b border-slate-100">
                  {group.label}
                </div>
                {group.rows.map((row, i) => (
                  <div key={row.feature} className={`grid grid-cols-[1fr_160px_160px] border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                    <div className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700">{row.feature}</p>
                      {row.note && <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>}
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center border-l border-slate-100 bg-emerald-900/5">
                      <Cell value={row.brahmin} />
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center border-l border-slate-100">
                      <Cell value={row.katana} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400 text-center">
            Katana pricing and features based on publicly available information as of March 2026. Features and pricing subject to change.
          </p>
        </div>
      </section>

      {/* ── 6. WHO SHOULD CHOOSE BRAHMIN ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Who should choose Brahmin over Katana</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-emerald-900">Choose Brahmin if...</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-emerald-800">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-700">Katana may be fine if...</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You sell exclusively through Shopify with low order volume',
                  'You have a single warehouse location with simple operations',
                  'You do not need lot traceability or recall reporting',
                  'You have no wholesale customers who need a B2B portal',
                  'You are comfortable with self-serve onboarding',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-4 h-4 shrink-0 mt-0.5 text-slate-300 flex items-center justify-center font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Testimonial */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
            <div className="flex gap-0.5 justify-center mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl font-medium text-slate-900 leading-relaxed max-w-2xl mx-auto mb-6">
              &ldquo;I&apos;m really happy with how fast we were able to set up Brahmin Solutions. It took us three months to get started with Katana, but Brahmin Solutions was ready in a week.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-sm">AM</div>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Adam McFarlin</p>
                <p className="text-sm text-slate-500">Kalamazoo Candle Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see the difference?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Book a 30-minute demo. We&apos;ll show you Brahmin with your actual products and workflows — no slides, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-xl font-semibold transition-colors">
              Book a demo
            </Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-xl font-semibold transition-colors">
              See pricing
            </Link>
          </div>
          <p className="text-sm text-slate-400">No credit card required · From $199/month · Live in 3–6 weeks</p>
          {/* Other comparisons */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Fishbowl', href: '/compare/fishbowl' },
                { label: 'vs Cin7', href: '/compare/cin7' },
                { label: 'vs NetSuite', href: '/compare/netsuite' },
                { label: 'vs MRPeasy', href: '/compare/mrpeasy' },
                { label: 'vs Wherefour', href: '/compare/wherefour' },
                { label: 'vs Spreadsheets', href: '/compare/spreadsheets' },
              ].map((c) => (
                <Link key={c.href} href={c.href} className="text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-colors">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
