import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs MRPeasy | Comparison',
  description:
    'See how Brahmin Solutions compares to MRPeasy. From $199/month with unlimited users vs $49/user — 5 users on MRPeasy Professional costs $345/month. Plus modern UI, native integrations with two-way sync, and real humans on support.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo (unlimited users)', mrpeasy: '$49/user/mo (Professional $69/user)', brahminBetter: true },
  { label: 'Cost at 5 users', brahmin: '$199/mo', mrpeasy: '$345/mo (Professional plan)', brahminBetter: true },
  { label: 'Cost at 10 users', brahmin: '$199–$499/mo', mrpeasy: '$690/mo (Professional plan)', brahminBetter: true },
  { label: 'Support channel', brahmin: 'Live phone + dedicated manager', mrpeasy: 'Ticket / email only', brahminBetter: true },
  { label: 'Native integrations', brahmin: '8 native + Zapier', mrpeasy: '~14 (limited)', brahminBetter: true },
]

const mrpeasyShortfalls = [
  {
    icon: '💸',
    headline: 'Per-user pricing that adds up faster than you expect',
    body: 'MRPeasy charges per user per month at every plan tier. On the Professional plan ($69/user), 5 users cost $345/month and 10 users cost $690/month. API access — needed for custom integrations and automations — is gated behind the Unlimited plan at $149/user/month. For a growing manufacturer adding team members, every new hire increases the software bill.',
    quote: '"Integration with other software could be improved, and API integration should be available from the professional or enterprise version." — MRPeasy customer, G2',
  },
  {
    icon: '🖥️',
    headline: 'An interface that feels 15 years old',
    body: 'Across G2, Capterra, and Software Advice, the most common complaint about MRPeasy is its interface. Users describe it as unintuitive and dated, with workflows that require three clicks for actions that should take one. For a team using the software every day on the shop floor or in purchasing, a clunky UI translates into real time lost and user adoption problems.',
    quote: '"The interface is unintuitive (really bad UX, like an app developed 15 years ago), making the app frustrating to use." — MRPeasy customer, Capterra',
  },
  {
    icon: '📊',
    headline: 'Reporting with no real dashboard',
    body: 'MRPeasy reviewers consistently flag reporting as a weak point. There is no live daily dashboard showing what\'s due and what\'s behind. Partial orders and unfulfilled order tracking require manual workarounds. Custom reporting requires exports to spreadsheets. For manufacturers who need real-time production visibility and cost data, this is a significant gap.',
    quote: '"Reporting can get better — they don\'t introduce more tools such as tracking unfulfilled orders & partial orders, daily dashboard to see what is due and what is behind." — MRPeasy customer, Capterra',
  },
  {
    icon: '📧',
    headline: 'Support that can\'t walk you through it',
    body: 'MRPeasy support operates via ticket and email only — there\'s no phone support and no dedicated account manager. When reviewers asked non-standard questions, they received templated responses from documentation, not tailored help. For a manufacturer new to MRP software who needs hands-on implementation guidance, email-only support is a real limitation.',
    quote: '"I\'m not impressed by their support. It would be nice to sit and talk to someone about it and have them walk us through it, but emailing back and forth — you don\'t quite get enough information." — MRPeasy customer, Software Advice',
  },
  {
    icon: '🔌',
    headline: 'Limited integrations with one-way syncs',
    body: 'MRPeasy offers roughly 14 native integrations, all with varying levels of sync quality. Brahmin has 8 deep, two-way native integrations — QuickBooks Online, Xero, Shopify, WooCommerce, BigCommerce, Faire, ShipStation, and SPS Commerce — plus 5,000+ apps via Zapier. The MRPeasy ShipStation integration is documented as one-way only, which creates data gaps manufacturers have to reconcile manually.',
    quote: '"This works only okay as the information is one-way and if the condition is ever undone, that information cannot be pulled back from ShipStation." — MRPeasy customer, verified review',
  },
]

const brahminStrengths = [
  {
    icon: '💰',
    headline: 'Unlimited users. No per-user fees.',
    body: 'Brahmin charges per tier, not per user. Starter at $199/month includes unlimited users with up to 500 orders/month. Growth at $499 scales to 2,500 orders. No per-seat fees. As your team grows — adding warehouse staff, purchasing managers, production leads — your Brahmin bill stays the same.',
  },
  {
    icon: '💬',
    headline: '<15 minute support. Live phone. Dedicated manager.',
    body: 'Every Brahmin customer gets a dedicated implementation manager who stays with them through go-live and beyond. Support average response is under 15 minutes — by phone, not ticket. When you have a non-standard question about your specific production workflow, you get a human who knows your account.',
  },
  {
    icon: '🔌',
    headline: 'Native integrations with two-way sync.',
    body: 'Brahmin connects natively to QuickBooks Online, Xero, Shopify, WooCommerce, BigCommerce, Faire, ShipStation, and SPS Commerce. All major integrations are two-way — changes flow in both directions without manual intervention. Plus 5,000+ apps via Zapier.',
  },
  {
    icon: '📊',
    headline: 'Modern UI and real-time dashboards.',
    body: 'Brahmin was designed for the day-to-day realities of a manufacturing team — not a software demo. The interface is clean and task-oriented, with live dashboards showing production status, inventory levels, and open orders without exporting to a spreadsheet.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; mrpeasy: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Pricing model', brahmin: 'Flat per tier, unlimited users', mrpeasy: 'Per user per month', note: 'MRPeasy Starter $49/user, Professional $69/user, Enterprise $99/user' },
  { feature: 'Starting price (1 user)', brahmin: '$199/month', mrpeasy: '$49/month' },
  { feature: 'Cost at 5 users (Professional)', brahmin: '$199/month', mrpeasy: '$345/month', note: 'Brahmin Starter includes unlimited users' },
  { feature: 'Cost at 10 users (Professional)', brahmin: '$199–$499/month', mrpeasy: '$690/month' },
  { feature: 'API access', brahmin: 'Beta', mrpeasy: 'Unlimited plan only ($149/user)', note: 'Brahmin API is currently in beta; MRPeasy API requires most expensive tier' },
  // Support
  { feature: 'Support channels', brahmin: 'Phone + chat + email', mrpeasy: 'Ticket / email only' },
  { feature: 'Dedicated implementation manager', brahmin: true, mrpeasy: false },
  { feature: 'Average time to go-live', brahmin: '3–6 weeks', mrpeasy: 'Self-guided, timeline varies' },
  { feature: 'Live walkthrough / onboarding calls', brahmin: true, mrpeasy: false, note: 'MRPeasy reviewers specifically request this feature' },
  { feature: 'Unlimited training calls', brahmin: true, mrpeasy: false },
  // Inventory & Production
  { feature: 'Real-time multi-location inventory', brahmin: true, mrpeasy: true },
  { feature: 'Bills of materials (multi-level)', brahmin: true, mrpeasy: true },
  { feature: 'Work orders', brahmin: true, mrpeasy: true },
  { feature: 'MRP / production planning', brahmin: true, mrpeasy: true },
  { feature: 'Real-time COGS visibility', brahmin: true, mrpeasy: 'Limited' },
  { feature: 'Shop floor management', brahmin: true, mrpeasy: 'Limited' },
  { feature: 'Automated PO email to vendor', brahmin: true, mrpeasy: false, note: 'MRPeasy requires manual download + email' },
  // Traceability
  { feature: 'Batch & lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', mrpeasy: true },
  { feature: 'Expiration date tracking', brahmin: 'Pro · Add-on on Starter/Growth', mrpeasy: true },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', mrpeasy: 'Limited' },
  // Integrations
  { feature: 'QuickBooks integration', brahmin: true, mrpeasy: true },
  { feature: 'Shopify integration', brahmin: true, mrpeasy: true },
  { feature: 'ShipStation integration (two-way)', brahmin: true, mrpeasy: false, note: 'MRPeasy ShipStation sync is one-way only' },
  { feature: 'Number of native integrations', brahmin: '8 (+ 5,000+ via Zapier)', mrpeasy: '~14 (limited sync quality)' },
  // Platform
  { feature: 'Daily production dashboard', brahmin: true, mrpeasy: false, note: 'MRPeasy reviewers flag missing daily dashboard' },
  { feature: 'Custom reports without export', brahmin: true, mrpeasy: 'Limited' },
  { feature: 'Mobile warehouse app', brahmin: 'Browser-based (no install)', mrpeasy: 'Mobile-responsive only' },
  { feature: 'B2B wholesale portal', brahmin: true, mrpeasy: false },
  { feature: 'Bootstrapped / no VC pressure', brahmin: true, mrpeasy: true, note: 'Both independently owned' },
]

const tableGroups = [
  { label: 'Pricing', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Inventory & production', rows: comparisonRows.slice(10, 17) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(17, 20) },
  { label: 'Integrations', rows: comparisonRows.slice(20, 24) },
  { label: 'Platform', rows: comparisonRows.slice(24) },
]

const idealFor = [
  'You have 5+ users — Brahmin\'s per-tier pricing saves money immediately',
  'You want live phone support and a dedicated implementation manager',
  'You need reliable two-way sync (not 14 limited, one-way connectors)',
  'You want a modern UI your team will actually use without training sessions',
  'You need a real-time production dashboard, not reports you export to spreadsheets',
  'You need a B2B wholesale portal for your buyers',
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

export default function MRPeasyCompare() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs MRPeasy</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            MRPeasy charges $49–$149 per user per month. At 5 users on the Professional plan, that&apos;s $345/month — 72% more than Brahmin Starter with unlimited users. Here&apos;s the full comparison.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['✓ Unlimited users from $199/mo', '✓ Native two-way integrations + Zapier', '✓ Live phone support', '✓ Dedicated implementation manager'].map((pill) => (
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
              <div className="px-6 py-4 text-center">MRPeasy</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>{row.brahmin}</div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{row.mrpeasy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE MRPEASY FALLS SHORT ────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where MRPeasy falls short</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Based on documented reviews from Capterra, G2, and Software Advice.</p>
          </div>
          <div className="space-y-6">
            {mrpeasyShortfalls.map((item) => (
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
            <p className="text-slate-500 max-w-2xl mx-auto">Flat pricing, real humans on support, two-way integrations, and a UI your team will actually use.</p>
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
              <div className="px-6 py-4 text-center">MRPeasy</div>
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
                    <div className="px-6 py-3.5 flex items-center justify-center"><Cell value={row.mrpeasy} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">MRPeasy data sourced from mrpeasy.com, Capterra, G2, and Software Advice. Last updated March 2026.</p>
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
                <h3 className="font-semibold text-slate-700">MRPeasy may be fine if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You have 1–3 users and the per-user cost is under $199/month total',
                  'Lot traceability is a core requirement and you want it included at the base tier',
                  'You need a straightforward MRP solution with basic manufacturing features',
                  'You are already live on MRPeasy and the switching cost outweighs the gains',
                  'Your integration needs are limited and the ~14 native connectors cover them',
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
              &ldquo;We cut inventory counting time by 75% in the first month.&rdquo;
            </blockquote>
            <cite className="text-sm text-slate-500 not-italic">— Sarah Chen, Operations Manager, Elevated Oats</cite>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">See the difference yourself</h2>
          <p className="text-slate-300 text-lg mb-8">Book a 30-minute demo. We&apos;ll show you the software with your actual products and team size — and the math on why per-tier pricing wins.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See pricing</Link>
          </div>
          <div className="text-sm text-slate-400 mb-10">No credit card required · Unlimited users · Free 14-day trial available</div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs Cin7', href: '/compare/cin7' },
                { label: 'vs Fishbowl', href: '/compare/fishbowl' },
                { label: 'vs Wherefour', href: '/compare/wherefour' },
                { label: 'vs NetSuite', href: '/compare/netsuite' },
                { label: 'See all comparisons', href: '/compare' },
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
