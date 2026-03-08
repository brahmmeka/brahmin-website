import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Fishbowl | Comparison',
  description:
    'See how Brahmin Solutions compares to Fishbowl. Cloud-native vs legacy on-premise, from $199/month vs $6,495+ upfront, and <15 min support vs voicemail.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Deployment', brahmin: 'Cloud-native (browser + app)', fishbowl: 'On-premise server (cloud = legacy hosted)', brahminBetter: true },
  { label: 'Starting cost', brahmin: 'From $199/month', fishbowl: '$6,495+ one-time (Manufacturing)', brahminBetter: true },
  { label: 'Implementation', brahmin: 'Dedicated manager, 3–6 weeks', fishbowl: '60–120 days + $2K–$10K setup fee', brahminBetter: true },
  { label: 'Support response', brahmin: '<15 minutes', fishbowl: 'Voicemail, days to weeks', brahminBetter: true },
  { label: 'QuickBooks required', brahmin: false, fishbowl: true, brahminBetter: true },
]

const fishbowlShortfalls = [
  {
    icon: '📞',
    headline: 'Support that goes straight to voicemail — and stays there',
    body: 'This is the single most common complaint in Fishbowl reviews, documented consistently across G2, Capterra, and Software Advice. Customers describe calling support, reaching voicemail, and waiting days or weeks for a callback. For a manufacturer running live production, a week-long support wait is a business risk.',
    quote: '"Every support call went to voicemail and I would wait days if not weeks before I heard back from anyone. Every time — counting at least 10 phone calls — not once has a real live person picked up." — Fishbowl customer, Capterra',
  },
  {
    icon: '🖥️',
    headline: 'Not actually cloud software',
    body: 'Fishbowl was built as a desktop server application. Their cloud offering is the same legacy software hosted remotely — not rebuilt for the cloud. Users report daily restarts, sync issues, and a requirement to keep the host computer logged in at all times. Modern manufacturers need software that works from any browser, not a server in the back office.',
    quote: '"Almost daily there is some issue, requiring a restart of the computer or killing off Fishbowl and opening QuickBooks to dismiss some modal dialog box." — Fishbowl customer, G2',
  },
  {
    icon: '🔗',
    headline: 'QuickBooks dependency — you\'re paying for two systems',
    body: 'Fishbowl\'s own homepage describes it as "#1 Inventory Management Software for QuickBooks." It was designed as a QuickBooks add-on. Customers pay two separate monthly fees. Worse, the integration is one-way in key areas — inventory adjustments in Fishbowl may not reflect in QuickBooks, causing financial discrepancies that are difficult to reconcile.',
    quote: '"The QuickBooks integration was misrepresented. Software needs two-way communication to be effective — Fishbowl pushes info to QB but does not accept information back." — Fishbowl customer, Capterra',
  },
  {
    icon: '💸',
    headline: 'The total cost is 3–4x what they quote you',
    body: 'The license fee is just the beginning. Implementation, training, customization, hardware, and annual renewal fees stack up fast. One reviewer put it bluntly: "Prepare to spend 3 to 4x the cost of the software in customization, support, and initial set-up." A 3-user Fishbowl Manufacturing customer could spend $15,000–$25,000 in year one.',
    quote: '"Prepare to spend 3 to 4x the cost of the software in customization, support, and initial set-up." — Fishbowl customer, Software Advice',
  },
  {
    icon: '📊',
    headline: 'Reporting locked behind custom development',
    body: 'Fishbowl\'s standard reports are described as "locked" — they cannot be customized without back-end coding. Users who need custom reports must go through Fishbowl support and pay for custom development. For manufacturers who need real-time cost visibility and production performance data, this is a significant and expensive limitation.',
    quote: '"The reporting is locked and cannot be customized without back-end coding. There is a need for A LOT of custom reports for simple things." — Fishbowl customer, G2',
  },
]

const brahminStrengths = [
  {
    icon: '☁️',
    headline: 'Born in the cloud. No servers required.',
    body: 'Brahmin is a cloud-native application — it runs in any browser, on any device, with nothing to install or maintain. No servers to restart. No sync issues. Automatic updates that don\'t require a scheduled maintenance window. Your team can access live inventory from the office, the warehouse floor, or on the road.',
  },
  {
    icon: '💰',
    headline: 'Transparent, predictable pricing.',
    body: 'Brahmin starts at $199/month with all plans published on our pricing page. No large upfront license. No mandatory implementation package. No annual renewal shock. You know exactly what you\'re paying before you talk to anyone.',
  },
  {
    icon: '💬',
    headline: '<15 minute support. A real person picks up.',
    body: 'Every Brahmin customer gets a dedicated support contact who knows their account. Average response time is under 15 minutes — not a voicemail queue. When something goes wrong during production, you need an answer in minutes, not days.',
  },
  {
    icon: '🔌',
    headline: 'QuickBooks integration — not QuickBooks dependency.',
    body: 'Brahmin integrates natively with QuickBooks Online and Desktop, but you don\'t need QuickBooks to run Brahmin. Your general ledger, inventory, and production all live in one system. No double-entry, no sync mismatches, no paying for two platforms to do the job of one.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; fishbowl: RowValue; note?: string }[] = [
  // Pricing & deployment
  { feature: 'Deployment model', brahmin: 'Cloud-native', fishbowl: 'On-premise server (cloud = legacy hosted)' },
  { feature: 'Starting cost', brahmin: 'From $199/month', fishbowl: '$6,495+ one-time (Manufacturing)', note: 'Fishbowl Warehouse starts at $4,395; Manufacturing at $6,495+' },
  { feature: 'Annual renewal / subscription', brahmin: 'Included in monthly plan', fishbowl: '$1,995–$9,795/year renewal after year 1' },
  { feature: 'Mandatory implementation fee', brahmin: false, fishbowl: true, note: 'Fishbowl requires paid implementation package at purchase' },
  { feature: 'Pricing published on website', brahmin: true, fishbowl: false },
  // Support
  { feature: 'Average support response time', brahmin: '<15 minutes', fishbowl: 'Days to weeks (per reviews)' },
  { feature: 'Live human support available', brahmin: true, fishbowl: false, note: 'Verified reviews describe voicemail-only experience on standard plans' },
  { feature: 'Dedicated implementation manager', brahmin: true, fishbowl: false },
  { feature: 'Average time to go-live', brahmin: '3–6 weeks', fishbowl: '60–120 days' },
  { feature: 'Unlimited training calls', brahmin: true, fishbowl: false, note: 'Fishbowl charges per-user training fees' },
  // Platform
  { feature: 'Cloud-native (no local server)', brahmin: true, fishbowl: false },
  { feature: 'Automatic updates (no manual install)', brahmin: true, fishbowl: false },
  { feature: 'Browser-based access', brahmin: true, fishbowl: false },
  { feature: 'QuickBooks required to operate', brahmin: false, fishbowl: true },
  { feature: 'Two-way QuickBooks sync', brahmin: true, fishbowl: false, note: 'Fishbowl sync documented as one-way in key areas' },
  // Inventory & production
  { feature: 'Real-time multi-location inventory', brahmin: true, fishbowl: true },
  { feature: 'Bills of materials', brahmin: true, fishbowl: true },
  { feature: 'Work orders', brahmin: true, fishbowl: true },
  { feature: 'Batch & lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', fishbowl: true },
  { feature: 'Expiration date management', brahmin: 'Pro · Add-on on Starter/Growth', fishbowl: 'Limited' },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', fishbowl: false },
  { feature: 'MRP / production planning', brahmin: 'Pro · Add-on on lower plans', fishbowl: 'Limited' },
  { feature: 'Real-time COGS visibility', brahmin: true, fishbowl: 'Limited' },
  // Integrations
  { feature: 'Shopify integration', brahmin: true, fishbowl: 'Third-party connector required' },
  { feature: 'ShipStation integration', brahmin: true, fishbowl: 'Limited' },
  { feature: 'Mobile warehouse app', brahmin: 'Browser-based (no install)', fishbowl: 'Paid add-on' },
  { feature: 'B2B wholesale portal', brahmin: true, fishbowl: false },
  { feature: 'REST API', brahmin: 'Beta', fishbowl: false },
  { feature: 'Custom reports without paid dev', brahmin: true, fishbowl: false, note: 'Fishbowl reports require back-end coding to customize' },
]

const tableGroups = [
  { label: 'Pricing & deployment', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Platform', rows: comparisonRows.slice(10, 15) },
  { label: 'Inventory & production', rows: comparisonRows.slice(15, 23) },
  { label: 'Integrations & platform features', rows: comparisonRows.slice(23) },
]

const idealFor = [
  'You are evaluating Fishbowl and want a cloud-native alternative before committing',
  'You want predictable monthly pricing — no large upfront license, no annual renewal shock',
  'Your team needs to access inventory from browsers and mobile devices, not a server',
  'You need support that responds in minutes, not voicemail',
  'You don\'t want to depend on QuickBooks to run your inventory system',
  'You need a dedicated implementation manager who gets you live in 3–6 weeks',
  'You want reporting you can customize without paying for back-end development',
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

export default function FishbowlCompare() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs Fishbowl</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Fishbowl is a 20-year-old on-premise application that starts at $6,495 before implementation, requires QuickBooks to function, and routes support through voicemail. Here&apos;s what the modern alternative looks like.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['✓ Cloud-native — no servers', '✓ From $199/month, no upfront fee', '✓ QuickBooks optional', '✓ <15 min support response'].map((pill) => (
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
              <div className="px-6 py-4 text-center">Fishbowl</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>{row.brahmin}</div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{typeof row.fishbowl === 'boolean' ? (row.fishbowl ? '✓' : '✗') : row.fishbowl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE FISHBOWL FALLS SHORT ───────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Fishbowl falls short</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Based on documented reviews from Capterra, G2, and Software Advice.</p>
          </div>
          <div className="space-y-6">
            {fishbowlShortfalls.map((item) => (
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
            <p className="text-slate-500 max-w-2xl mx-auto">Built from day one for the cloud. No servers, no legacy debt, no surprises.</p>
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
              <div className="px-6 py-4 text-center">Fishbowl</div>
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
                    <div className="px-6 py-3.5 flex items-center justify-center"><Cell value={row.fishbowl} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">Fishbowl data sourced from G2, Capterra, Software Advice, and fishbowlinventory.com. Last updated March 2026.</p>
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
                <h3 className="font-semibold text-slate-700">Fishbowl may be fine if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You run QuickBooks Desktop and want the tightest possible QuickBooks integration',
                  'You already own a Fishbowl perpetual license and the renewal cost is manageable',
                  'Your team has in-house IT to manage the server environment',
                  'You primarily need warehouse management without complex manufacturing workflows',
                  'You are already deeply embedded and switching cost is prohibitive',
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
              &ldquo;Brahmin allows us to focus on growing our business instead of worrying about inventory. It&apos;s easy to use, quick, and always improving.&rdquo;
            </blockquote>
            <cite className="text-sm text-slate-500 not-italic">— Tameer, Bakkar Sweets</cite>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">See the difference yourself</h2>
          <p className="text-slate-300 text-lg mb-8">Book a 30-minute demo. No server required, no upfront commitment, no surprise fees.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See pricing</Link>
          </div>
          <div className="text-sm text-slate-400 mb-10">No credit card required · Published pricing · Free 14-day trial available</div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs Cin7', href: '/compare/cin7' },
                { label: 'vs Wherefour', href: '/compare/wherefour' },
                { label: 'vs MRPeasy', href: '/compare/mrpeasy' },
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
