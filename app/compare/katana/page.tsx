import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Katana MRP | Comparison',
  description:
    'See how Brahmin Solutions compares to Katana MRP. Flat $199/month pricing, <15 min support, full lot traceability included — no add-ons, no order-count fees.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: '$199/mo flat', katana: '$299/mo + add-ons', brahminBetter: true },
  { label: 'Pricing model', brahmin: 'Flat rate — no order fees', katana: 'GMV/order-count tiers', brahminBetter: true },
  { label: 'Support response', brahmin: '<15 minutes', katana: '1–3 business days', brahminBetter: true },
  { label: 'Lot traceability', brahmin: 'Included', katana: 'Add-on ($199/mo extra)', brahminBetter: true },
  { label: 'Implementation', brahmin: 'Dedicated manager, 21 days', katana: 'Self-serve, 30–60 days', brahminBetter: true },
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
    headline: 'One flat price. No surprises.',
    body: 'Brahmin is $199/month. Period. No per-order fees. No GMV tiers. No add-ons for features you actually need. As your order volume grows, your Brahmin bill stays the same. We grow when you grow — not before.',
  },
  {
    icon: '💬',
    headline: '<15 minute support. Measured, not promised.',
    body: "Every Brahmin customer gets a real person who knows their account. Our average support response time is under 15 minutes — we track it because we stand behind it. You will never get a ticket number as a response to a production emergency.",
  },
  {
    icon: '🏷️',
    headline: 'Full lot traceability. Included.',
    body: 'Full forward and backward lot traceability, expiration management, and one-click recall reports are included in every Brahmin plan. No add-ons, no paywalls. We built Brahmin for food, cosmetics, and supplement manufacturers who need FDA-ready traceability on day one.',
  },
  {
    icon: '🚀',
    headline: 'Dedicated implementation. Live in 21 days.',
    body: 'Every new customer gets a dedicated implementation manager who stays with you through go-live and beyond. We move fast: average implementation is 21 days. You will never be left to figure it out from a help center article.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; katana: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price', brahmin: '$199/month', katana: '$299/month', note: 'Katana Core plan, single location' },
  { feature: 'Pricing model', brahmin: 'Flat rate', katana: 'GMV + order count tiers', note: 'Katana pricing increases with order volume' },
  { feature: 'Per-order / per-transaction fees', brahmin: false, katana: true },
  { feature: 'Add-on costs for core features', brahmin: false, katana: true, note: 'Katana charges $199/mo for serial/lot tracking' },
  { feature: 'Price stability over time', brahmin: true, katana: false, note: 'Katana has raised prices 300–523% for long-term customers' },
  // Support
  { feature: 'Average support response time', brahmin: '<15 minutes', katana: '1–3 business days' },
  { feature: 'Dedicated implementation manager', brahmin: true, katana: false },
  { feature: 'Average time to go-live', brahmin: '21 days', katana: '30–60 days' },
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
  { feature: 'Batch & lot traceability', brahmin: true, katana: 'Add-on', note: 'Katana charges extra for this' },
  { feature: 'Expiration date management', brahmin: true, katana: 'Limited' },
  { feature: 'One-click recall reports', brahmin: true, katana: false },
  { feature: 'FDA/FSMA audit trails', brahmin: true, katana: false },
  { feature: 'Certificate of analysis (CoA) storage', brahmin: true, katana: false },
  // Integrations
  { feature: 'QuickBooks integration', brahmin: true, katana: true },
  { feature: 'Xero integration', brahmin: true, katana: true },
  { feature: 'Shopify integration', brahmin: true, katana: true },
  { feature: 'ShipStation integration', brahmin: true, katana: false },
  { feature: 'WooCommerce integration', brahmin: true, katana: false },
  // Other
  { feature: 'B2B wholesale customer portal', brahmin: true, katana: false },
  { feature: 'Mobile warehouse app', brahmin: true, katana: false },
  { feature: 'MRP / demand planning', brahmin: true, katana: 'Basic' },
  { feature: 'Reporting and custom reports', brahmin: true, katana: 'Limited' },
  { feature: 'Open REST API', brahmin: true, katana: true },
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
  'Your Katana bill keeps climbing as your order volume grows',
  'You need FDA-ready lot traceability without paying extra for it',
  'You want support that responds in minutes, not days',
  'You sell wholesale and need a B2B ordering portal for your buyers',
  'You want a dedicated implementation manager, not a help center article',
  'You manufacture food, cosmetics, supplements, or other regulated products',
  'You want a flat monthly price that does not change as you grow',
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

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary-100 rounded-full opacity-25 blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-500 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Comparison
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Brahmin Solutions vs Katana MRP
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Tired of Katana raising prices every year? Brahmin is $199/month flat — no order-count tiers, no traceability add-ons, no support queue. Just software that works, with a team that picks up.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5 text-center"
              >
                Book a demo
              </Link>
              <Link
                href="/pricing"
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                See pricing →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              {['$199/month flat', '<15 min support response', 'Lot traceability included', '300+ manufacturers'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK COMPARISON ── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">At a glance</h2>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 border-b border-slate-200">
              <div className="px-6 py-4 text-sm font-semibold text-slate-400 uppercase tracking-wide"></div>
              <div className="px-6 py-4 text-center border-l border-slate-200 bg-primary-50/40">
                <p className="text-sm font-bold text-primary-700">Brahmin Solutions</p>
              </div>
              <div className="px-6 py-4 text-center border-l border-slate-200">
                <p className="text-sm font-bold text-slate-500">Katana</p>
              </div>
            </div>
            {quickStats.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 border-b border-slate-100 ${i % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                <div className="px-6 py-4 text-sm text-slate-600 font-medium">{row.label}</div>
                <div className="px-6 py-4 text-center border-l border-slate-100 bg-primary-50/20">
                  <span className="text-sm font-semibold text-emerald-700">{row.brahmin}</span>
                </div>
                <div className="px-6 py-4 text-center border-l border-slate-100">
                  <span className="text-sm text-slate-500">{row.katana}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE KATANA FALLS SHORT ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-600 mb-4">
              Where Katana falls short
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What Katana customers complain about
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Based on hundreds of verified reviews on G2, Capterra, and Trustpilot.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {katanaShortfalls.map((item) => (
              <div key={item.headline} className="bg-white rounded-2xl border border-slate-200 p-7">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{item.headline}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.body}</p>
                <blockquote className="border-l-2 border-slate-200 pl-4 text-xs text-slate-400 italic leading-relaxed">
                  {item.quote}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHERE BRAHMIN EXCELS ── */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Where Brahmin excels
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What you get when you switch
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brahminStrengths.map((s) => (
              <div key={s.headline} className="bg-slate-50 rounded-2xl border border-slate-200 p-7">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-slate-900 text-base mb-3">{s.headline}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FEATURE-BY-FEATURE BREAKDOWN ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Full comparison
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Feature-by-feature breakdown
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_140px_140px] border-b border-slate-200 bg-slate-50">
              <div className="px-6 py-5 text-sm font-semibold text-slate-400">Feature</div>
              <div className="px-4 py-5 text-center border-l border-slate-200 bg-primary-50/60">
                <p className="text-sm font-bold text-primary-700">Brahmin</p>
                <p className="text-xs text-slate-400 mt-0.5">$199/mo</p>
              </div>
              <div className="px-4 py-5 text-center border-l border-slate-200">
                <p className="text-sm font-bold text-slate-500">Katana</p>
                <p className="text-xs text-slate-400 mt-0.5">$299/mo+</p>
              </div>
            </div>

            {tableGroups.map((group, gi) => (
              <div key={group.label}>
                {/* Group header */}
                <div className="grid grid-cols-[1fr_140px_140px] border-b border-slate-100 bg-slate-50/80">
                  <div className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-400 col-span-3">
                    {group.label}
                  </div>
                </div>
                {group.rows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-[1fr_140px_140px] border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                  >
                    <div className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700">{row.feature}</p>
                      {row.note && <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>}
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center border-l border-slate-100 bg-primary-50/20">
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

      {/* ── 6. WHO SHOULD CHOOSE BRAHMIN ── */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Is Brahmin right for you?
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Who should choose Brahmin over Katana
            </h2>
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
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8 text-center">
            <div className="flex gap-0.5 justify-center mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl font-medium text-slate-900 leading-relaxed max-w-2xl mx-auto mb-6">
              &ldquo;Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional. I switched and wish I had done it sooner.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-bold text-sm">SH</div>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Sheldon</p>
                <p className="text-sm text-slate-500">FLFF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to see the difference?</h2>
          <p className="text-slate-500 mb-8 text-lg">
            Book a 30-minute demo. We will show you Brahmin with your actual products and workflows — no slides, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/demo"
              className="bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="border border-slate-200 hover:border-slate-300 text-slate-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white"
            >
              See pricing
            </Link>
          </div>
          <p className="text-sm text-slate-400">No credit card required · $199/month flat · Live in 21 days</p>
        </div>
      </section>

      {/* Other comparisons */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 text-center">More comparisons</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'vs Fishbowl', href: '/compare/fishbowl' },
              { label: 'vs Cin7', href: '/compare/cin7' },
              { label: 'vs NetSuite', href: '/compare/netsuite' },
              { label: 'vs MRPeasy', href: '/compare/mrpeasy' },
              { label: 'vs Wherefour', href: '/compare/wherefour' },
              { label: 'vs Spreadsheets', href: '/compare/spreadsheets' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="text-sm text-slate-600 hover:text-primary-600 border border-slate-200 hover:border-primary-200 px-4 py-2 rounded-lg transition-colors hover:bg-primary-50">
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
