import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs NetSuite | Comparison',
  description:
    'NetSuite starts at $999/month base plus $129/user plus modules plus $25K–$150K implementation. Brahmin Solutions starts at $199/month with implementation included. Built for $1M–$50M manufacturers.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo', netsuite: '$999/mo base only', brahminBetter: true },
  { label: 'Per-user fees', brahmin: 'None', netsuite: '$129/user/mo additional', brahminBetter: true },
  { label: 'Implementation cost', brahmin: 'Included (dedicated manager)', netsuite: '$25,000–$150,000+ consultant fees', brahminBetter: true },
  { label: 'Time to go-live', brahmin: '21 days average', netsuite: '4–6 months typical', brahminBetter: true },
  { label: 'Year-one cost (10 users)', brahmin: '~$2,400–$4,800', netsuite: '$52,000–$91,000+', brahminBetter: true },
]

const netsuiteShortfalls = [
  {
    icon: '💸',
    headline: 'The real cost is 10x what the headline price suggests',
    body: 'NetSuite\'s $999/month base license is just the starting point. Add $129/month per user, then modules for Advanced Inventory, WMS, Advanced Manufacturing, and SuiteAnalytics — each priced separately. Then add $25,000–$150,000 in mandatory consultant fees for implementation. Year-one costs for a small manufacturer with 10 users typically run $52,000–$91,000. That\'s the same as 22–38 years of Brahmin Starter.',
    quote: '"If you\'re a 10-person company doing $1M in revenue with straightforward operations, NetSuite will cost you more than it\'s worth — you\'ll spend $50,000+ in your first year for a platform designed for a level of complexity you don\'t have yet." — ERP analyst, Protelo',
  },
  {
    icon: '⏳',
    headline: 'Implementations that take months, not weeks',
    body: 'NetSuite implementations require specialized consultants and typically take 4–6 months minimum. Nearly every implementation requires a paid external consultant — an entire industry exists to support this. During that time, you\'re paying the full subscription fee while your team is still learning the system. Multiple reviewers describe months of unpaid overtime just to get live.',
    quote: '"I spent three months of unpaid overtime trying to resolve issues, only for developers to undo the work using a backdoor they had built in." — NetSuite customer, Trustpilot',
  },
  {
    icon: '🏭',
    headline: 'Enterprise software that wasn\'t built for manufacturers',
    body: 'NetSuite is a general-purpose ERP designed for enterprises. Manufacturing features are bolted on as add-on modules — not purpose-built. Recipe versioning, lot traceability, and production scheduling require additional modules you budget for mid-implementation. Reviewers describe features that "get clunky fast" and a UI designed, in one reviewer\'s words, "from the 1980s."',
    quote: '"The UI is designed from the 1980s, powered by two mice on a wheel." — NetSuite customer, Trustpilot',
  },
  {
    icon: '📈',
    headline: 'Renewal shock — 15–30% annual price increases',
    body: 'NetSuite contracts include automatic renewal clauses triggered 60–90 days before term end, with built-in 7–10% annual price uplift clauses. Real-world renewals for small business customers often come in 15–30% higher, sometimes approaching 100% when initial contracts were heavily discounted. Customers discover these increases buried in contract language they signed years earlier.',
    quote: '"Costs tripling within a year — we eventually switched back to QuickBooks because NetSuite was too expensive and complex." — NetSuite customer, Capterra',
  },
  {
    icon: '🎧',
    headline: 'Support that treats small accounts as low priority',
    body: 'NetSuite\'s post-sale support is tiered and transactional — smaller accounts get less attention. Reviewers describe being "tossed between departments," waiting over a week for responses, and representatives who were rude when customers tried to leave. For a small manufacturer who needs fast answers when production is running, this is a serious risk.',
    quote: '"When we decided to discontinue the service, the rep was very rude and offered no help. Nothing but issue after issue." — NetSuite customer, Capterra (Food & Beverage, 11–50 employees)',
  },
]

const brahminStrengths = [
  {
    icon: '💰',
    headline: 'Right-sized pricing. No consultant required.',
    body: 'Brahmin starts at $199/month with published tiers. Implementation is included — no external consultant, no six-figure discovery phase. Every customer gets a dedicated implementation manager who stays with them through go-live and beyond. Year-one total cost for most small manufacturers: under $5,000.',
  },
  {
    icon: '🚀',
    headline: 'Live in 21 days. Not 6 months.',
    body: 'Brahmin\'s average go-live is 21 days. You don\'t need a certified NetSuite administrator or months of consultant hours. Your dedicated implementation manager handles data migration, configuration, and training — and you are live and running before a typical NetSuite discovery phase is complete.',
  },
  {
    icon: '🏭',
    headline: 'Purpose-built for manufacturers, not adapted for them.',
    body: 'Brahmin was designed from day one for small manufacturers — BOMs, work orders, lot traceability, recipe management, and shop floor control are core features, not add-on modules. We serve food & beverage, cosmetics, supplements, and electronics manufacturers who need manufacturing-first software, not a general ERP with manufacturing bolted on.',
  },
  {
    icon: '📊',
    headline: 'Stable pricing. No renewal surprises.',
    body: 'Brahmin is independently owned with no investor pressure to maximize revenue at renewal. Pricing is published on our website and has been stable since 2015. No auto-renewal clauses with hidden uplift percentages. No module creep. What you see on the pricing page is what you pay.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; netsuite: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price', brahmin: 'From $199/month', netsuite: '$999/month base only', note: 'NetSuite base license, before per-user fees and modules' },
  { feature: 'Per-user fees', brahmin: false, netsuite: '$129/user/month additional' },
  { feature: 'Implementation cost', brahmin: 'Included', netsuite: '$25,000–$150,000+ consultant', note: 'NetSuite requires external certified consultants' },
  { feature: 'Annual price increase', brahmin: 'Stable', netsuite: '7–30%+ uplift clauses', note: 'NetSuite contracts include auto-renewal uplift provisions' },
  { feature: 'Pricing published on website', brahmin: true, netsuite: false, note: 'NetSuite pricing requires a sales call' },
  // Support & implementation
  { feature: 'Average time to go-live', brahmin: '21 days', netsuite: '4–6 months' },
  { feature: 'Dedicated implementation manager', brahmin: true, netsuite: false, note: 'NetSuite implementations require paid external consultants' },
  { feature: 'Support response time', brahmin: '<15 minutes', netsuite: 'Days (tiered, small accounts deprioritized)' },
  { feature: 'Unlimited training calls', brahmin: true, netsuite: false, note: 'NetSuite training is a paid add-on or formal program' },
  { feature: 'In-house IT / admin required', brahmin: false, netsuite: true, note: 'NetSuite requires ongoing certified admin to maintain' },
  // Manufacturing
  { feature: 'Purpose-built for manufacturers', brahmin: true, netsuite: false, note: 'NetSuite is a general ERP; manufacturing is an add-on module' },
  { feature: 'Real-time multi-location inventory', brahmin: true, netsuite: true },
  { feature: 'Bills of materials (multi-level)', brahmin: true, netsuite: true, note: 'NetSuite requires Advanced Manufacturing module (extra cost)' },
  { feature: 'Work orders', brahmin: true, netsuite: true },
  { feature: 'MRP / production planning', brahmin: true, netsuite: true, note: 'NetSuite MRP via Manufacturing module (extra cost)' },
  { feature: 'Recipe / formula management', brahmin: true, netsuite: 'Add-on module', note: 'Gets "clunky fast" per F&B reviewers' },
  { feature: 'Real-time COGS visibility', brahmin: true, netsuite: true },
  { feature: 'Shop floor management', brahmin: true, netsuite: 'Add-on module' },
  // Traceability
  { feature: 'Batch & lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', netsuite: 'Advanced Inventory module (extra cost)' },
  { feature: 'Expiration date management', brahmin: 'Pro · Add-on on Starter/Growth', netsuite: 'Add-on module' },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', netsuite: 'Custom development required' },
  // Integrations
  { feature: 'Shopify integration', brahmin: true, netsuite: true, note: 'NetSuite requires SuiteCommerce or third-party connector' },
  { feature: 'QuickBooks integration', brahmin: true, netsuite: false, note: 'NetSuite replaces QuickBooks — migration required' },
  { feature: 'Native mobile app', brahmin: true, netsuite: 'Limited mobile experience' },
  { feature: 'B2B wholesale portal', brahmin: true, netsuite: 'SuiteCommerce add-on (extra cost)' },
  // Platform
  { feature: 'Built for <$50M manufacturers', brahmin: true, netsuite: false, note: 'NetSuite analysts recommend $3M+ revenue minimum' },
  { feature: 'No consultant required to operate', brahmin: true, netsuite: false },
  { feature: 'VC / investor backed', brahmin: false, netsuite: true, note: 'NetSuite is owned by Oracle (acquired 2016)' },
]

const tableGroups = [
  { label: 'Pricing', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Manufacturing', rows: comparisonRows.slice(10, 18) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(18, 21) },
  { label: 'Integrations', rows: comparisonRows.slice(21, 25) },
  { label: 'Platform', rows: comparisonRows.slice(25) },
]

const idealFor = [
  'You\'re a $1M–$50M manufacturer evaluating NetSuite and want a right-sized alternative',
  'You don\'t have $50,000–$150,000 to spend on year-one implementation costs',
  'You need to be live in weeks, not months',
  'You don\'t have in-house IT or a certified NetSuite admin on staff',
  'You want manufacturing-first software — not a general ERP with add-ons bolted on',
  'You need support that responds in minutes, not a tiered support queue',
  'You want stable pricing without auto-renewal uplift clauses',
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

export default function NetSuiteCompare() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs NetSuite</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            NetSuite starts at $999/month — before per-user fees, modules, and $25,000–$150,000 in mandatory implementation costs. Year one for a small manufacturer often exceeds $50,000. Brahmin was built for the $1M–$50M manufacturer who needs enterprise-grade tools without the enterprise price or complexity.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['✓ From $199/month — all-in', '✓ Live in 21 days, not 6 months', '✓ No consultant required', '✓ Built for manufacturers, not adapted'].map((pill) => (
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
              <div className="px-6 py-4 text-center">NetSuite</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>{row.brahmin}</div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{row.netsuite}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE NETSUITE FALLS SHORT ───────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where NetSuite falls short for small manufacturers</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Based on documented reviews from Capterra, Trustpilot, and independent ERP analysts.</p>
          </div>
          <div className="space-y-6">
            {netsuiteShortfalls.map((item) => (
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
            <p className="text-slate-500 max-w-2xl mx-auto">Enterprise-grade tools at a price small manufacturers can actually afford.</p>
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
              <div className="px-6 py-4 text-center">NetSuite</div>
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
                    <div className="px-6 py-3.5 flex items-center justify-center"><Cell value={row.netsuite} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">NetSuite data sourced from netsuite.com, Capterra, Trustpilot, and independent ERP analyst publications. Last updated March 2026.</p>
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
                <h3 className="font-semibold text-slate-700">NetSuite may be appropriate if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Your revenue exceeds $50M and you need enterprise-grade multi-subsidiary reporting',
                  'You have in-house IT and a certified NetSuite administrator on staff',
                  'You need deep financial consolidation across multiple legal entities',
                  'You are already live on NetSuite and your team is trained on it',
                  'You have budget for $50,000+ year-one implementation and ongoing consultant fees',
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
          <h2 className="text-3xl font-bold mb-4">Get enterprise-grade tools without the enterprise price</h2>
          <p className="text-slate-300 text-lg mb-8">Book a 30-minute demo. We&apos;ll show you Brahmin with your actual products and workflows — and the pricing before we get off the call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See pricing</Link>
          </div>
          <div className="text-sm text-slate-400 mb-10">No credit card required · No consultant needed · Free 14-day trial available</div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs Cin7', href: '/compare/cin7' },
                { label: 'vs Fishbowl', href: '/compare/fishbowl' },
                { label: 'vs MRPeasy', href: '/compare/mrpeasy' },
                { label: 'vs Wherefour', href: '/compare/wherefour' },
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
