import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Wherefour | Comparison',
  description:
    'See how Brahmin Solutions compares to Wherefour. Transparent pricing from $199/month, native mobile app, <15 min support, and no hidden quote-based fees.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo (published)', katana: '$600+/mo (quote only)', brahminBetter: true },
  { label: 'Pricing transparency', brahmin: 'Tiers published on website', katana: 'Must contact sales for any number', brahminBetter: true },
  { label: 'Support response', brahmin: '<15 minutes', katana: '24 hrs via email', brahminBetter: true },
  { label: 'Native mobile app', brahmin: 'iOS & Android', katana: 'Web-only (no native app)', brahminBetter: true },
  { label: 'Implementation', brahmin: 'Dedicated manager, 21 days', katana: 'Self-guided, timeline unclear', brahminBetter: true },
]

const wherefourShortfalls = [
  {
    icon: '🔒',
    headline: 'Pricing you can\'t see until you talk to sales',
    body: 'Wherefour does not publish a single number on their pricing page. You have to request a demo and go through a sales process before learning what you\'ll pay. Third-party review sites report starting prices of $600/month or more — 3x higher than Brahmin\'s published Starter plan. When a vendor hides pricing, it\'s usually because the number won\'t help them win the deal.',
    quote: '"Price discovery requires a sales conversation — no tier information available on the website." — SoftwareConnect research, 2025',
  },
  {
    icon: '📧',
    headline: 'Support that takes a day to respond',
    body: 'Wherefour offers email-only support on at least some of their plans, with a documented 24-hour response window. When a production line is stopped or a recall is in progress, waiting a full business day for a response is not an option. Brahmin\'s average support response is under 15 minutes — we track it, and every customer gets a real person who knows their account.',
    quote: '"No phone or chat support — only email with 24 hours to receive an email back even on critical support." — Wherefour customer, Capterra',
  },
  {
    icon: '📱',
    headline: 'No native mobile app',
    body: 'Wherefour is a web application that works on mobile browsers, but there is no native iOS or Android app in the App Store. For warehouse teams receiving inventory, doing cycle counts, or picking orders on a phone or tablet, a browser-based experience is a real step down from a purpose-built mobile app. Brahmin\'s mobile app was built for the warehouse floor — barcode scanning, offline mode, and a UI designed for gloves and fast action.',
    quote: '"No mobile app in the App Store." — Wherefour customer review',
  },
  {
    icon: '📊',
    headline: 'Reporting that doesn\'t drill down',
    body: 'Multiple Wherefour reviewers cite limited reporting flexibility as a recurring frustration. Users cannot easily drill from sales orders to invoices, tie order numbers to shipped lot numbers in a single report, or create custom daily production reports. For a manufacturer who needs real cost visibility, margin analysis, and production performance data, Wherefour\'s reporting requires frequent exports to spreadsheets.',
    quote: '"Lack of control of self-customization when trying to visualize data. It would be nice to pull reports that tie order number to the lot number that was shipped." — Wherefour customer, Capterra',
  },
  {
    icon: '🧪',
    headline: 'Allergen management is a workaround, not a feature',
    body: 'Food and cosmetics manufacturers deal with allergen tracking as a compliance requirement, not an afterthought. Wherefour handles allergens through custom fields — a manual workaround that multiple customers have flagged as inadequate. Customers have explicitly requested a dedicated allergen module, noting that "it is such an important piece to food manufacturing that it deserves more permanent focus."',
    quote: '"There should be a more permanent solution for allergen handling — they currently have to manage this with custom fields." — Wherefour customer, Capterra',
  },
]

const brahminStrengths = [
  {
    icon: '💰',
    headline: 'Transparent pricing. No sales call required.',
    body: 'Brahmin publishes every plan, every price, and every feature on our pricing page. Starter at $199/month. Growth at $499. Pro at $999. Enterprise on request. You know what you\'re getting before you ever talk to us — and there are no surprise fees after you sign up.',
  },
  {
    icon: '💬',
    headline: '<15 minute support. Every plan.',
    body: 'Every Brahmin customer gets a real person who knows their account. Average response time is under 15 minutes — we track it, and it applies to every customer, not just enterprise tiers. You will never wait 24 hours for a response to a production emergency.',
  },
  {
    icon: '📱',
    headline: 'A native mobile app built for the floor.',
    body: 'Brahmin\'s mobile app runs natively on iOS and Android. Warehouse teams use it to receive inventory, run cycle counts, pick and pack orders, and scan barcodes — with offline mode for facilities with spotty connectivity. It\'s in the App Store, it works on gloves-on devices, and it was designed for manufacturing, not adapted from a web UI.',
  },
  {
    icon: '🚀',
    headline: 'Dedicated implementation. Live in 21 days.',
    body: 'Every new customer gets a dedicated implementation manager who stays with them through go-live and beyond. Average time to go-live is 21 days. Wherefour\'s self-guided setup has no comparable structured onboarding — you are largely on your own until you\'re up and running.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; wherefour: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price', brahmin: 'From $199/month', wherefour: '$600+/month', note: 'Wherefour pricing is quote-based; $600/mo reported by SoftwareConnect' },
  { feature: 'Pricing published on website', brahmin: true, wherefour: false, note: 'Wherefour requires a sales demo to get any pricing' },
  { feature: 'Pricing model', brahmin: 'Flat per tier', wherefour: 'Custom quote', note: 'Wherefour configures each account individually' },
  { feature: 'Self-serve trial or sign-up', brahmin: true, wherefour: false },
  { feature: 'Price stability over time', brahmin: true, wherefour: 'Unknown', note: 'No public pricing history available' },
  // Support
  { feature: 'Average support response time', brahmin: '<15 minutes', wherefour: '24 hours (email)', note: 'Email-only on documented plans' },
  { feature: 'Phone or chat support', brahmin: true, wherefour: false, note: 'Wherefour documented as email-only by customers' },
  { feature: 'Dedicated implementation manager', brahmin: true, wherefour: false },
  { feature: 'Average time to go-live', brahmin: '21 days', wherefour: 'Not published' },
  { feature: 'US business hours support', brahmin: true, wherefour: true },
  // Inventory & Production
  { feature: 'Real-time multi-location inventory', brahmin: true, wherefour: true },
  { feature: 'Bills of materials (multi-level)', brahmin: true, wherefour: true },
  { feature: 'Work orders', brahmin: true, wherefour: true },
  { feature: 'MRP / demand planning', brahmin: true, wherefour: true },
  { feature: 'Shop floor scheduling / work centers', brahmin: true, wherefour: 'Limited', note: 'No machine occupancy or work center panels' },
  { feature: 'Just-in-time (JIT) planning support', brahmin: true, wherefour: 'Limited', note: 'Wherefour customers flag JIT as a gap' },
  { feature: 'Yield and scrap tracking', brahmin: true, wherefour: true },
  // Traceability
  { feature: 'Batch & lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', wherefour: true, note: 'Traceability is Wherefour\'s strongest feature' },
  { feature: 'FIFO / FEFO lot selection', brahmin: true, wherefour: true },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', wherefour: true },
  { feature: 'FDA / FSMA audit trails', brahmin: 'Pro · Add-on on Starter/Growth', wherefour: true },
  { feature: 'Allergen management (native)', brahmin: true, wherefour: false, note: 'Wherefour handles allergens via custom fields workaround' },
  // Mobile & Warehouse
  { feature: 'Native iOS / Android app', brahmin: true, wherefour: false, note: 'Wherefour is web-only; no App Store listing' },
  { feature: 'Offline mode', brahmin: true, wherefour: false },
  { feature: 'Barcode / QR scanning', brahmin: true, wherefour: true },
  { feature: 'Cycle counting from mobile', brahmin: true, wherefour: 'Browser only' },
  // Integrations
  { feature: 'QuickBooks integration', brahmin: true, wherefour: true, note: 'Wherefour customers report sync issues with QBO' },
  { feature: 'Xero integration', brahmin: true, wherefour: true },
  { feature: 'Shopify integration', brahmin: true, wherefour: true },
  { feature: 'ShipStation integration', brahmin: true, wherefour: true },
  { feature: 'Number of native integrations', brahmin: '50+', wherefour: '~15 + Zapier bridge' },
  // Reporting
  { feature: 'Custom reports', brahmin: true, wherefour: 'Limited', note: 'Wherefour users report needing to export to spreadsheets' },
  { feature: 'Drill-down from order to lot', brahmin: true, wherefour: 'Limited' },
  { feature: 'Cost of goods (COGS) reporting', brahmin: true, wherefour: 'Limited' },
  // B2B & Other
  { feature: 'B2B wholesale customer portal', brahmin: true, wherefour: true },
  { feature: 'Open REST API', brahmin: true, wherefour: true },
  { feature: 'VC-backed / investor pressure', brahmin: false, wherefour: false, note: 'Both independently owned' },
]

const tableGroups = [
  { label: 'Pricing', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Inventory & production', rows: comparisonRows.slice(10, 17) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(17, 22) },
  { label: 'Mobile & warehouse', rows: comparisonRows.slice(22, 26) },
  { label: 'Integrations', rows: comparisonRows.slice(26, 31) },
  { label: 'Reporting', rows: comparisonRows.slice(31, 34) },
  { label: 'Platform', rows: comparisonRows.slice(34) },
]

const idealFor = [
  'You\'re getting a Wherefour quote and want to see what else is out there before committing',
  'You want to know the price before you have to talk to a sales rep',
  'You need warehouse teams picking and scanning on a native mobile app — not a mobile browser',
  'Support that responds in under 15 minutes matters to your operation',
  'You need allergen management built in, not cobbled together with custom fields',
  'Your team does just-in-time manufacturing and needs planning tools that keep up',
  'You want detailed reporting without exporting to spreadsheets',
  'You want a dedicated implementation manager who gets you live in 21 days',
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

export default function WherefourCompare() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span>
            <span className="text-slate-500">·</span>
            <span>Updated March 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Brahmin Solutions vs Wherefour
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Wherefour is a capable compliance tool — but it starts at $600+/month (quote required), has no native mobile app, and routes support through email with a 24-hour response window. Here&apos;s how the two compare.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              '✓ Pricing published — no sales call needed',
              '✓ From $199/month',
              '✓ <15 min support response',
              '✓ Native iOS & Android app',
            ].map((pill) => (
              <span key={pill} className="bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-sm px-4 py-1.5 rounded-full">
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              See our pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK COMPARISON TABLE ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Quick comparison</h2>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-500 uppercase tracking-wide">
              <div className="px-6 py-4"></div>
              <div className="px-6 py-4 text-center text-emerald-700 bg-emerald-50">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">Wherefour</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>
                  {row.brahmin}
                </div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{row.katana}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE WHEREFOUR FALLS SHORT ───────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Wherefour falls short</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Based on documented reviews from Capterra, G2, and SoftwareConnect — not our opinion.
            </p>
          </div>

          <div className="space-y-6">
            {wherefourShortfalls.map((item) => (
              <div key={item.headline} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.headline}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.body}</p>
                    <blockquote className="border-l-4 border-slate-200 pl-4 text-sm text-slate-500 italic">
                      {item.quote}
                    </blockquote>
                  </div>
                </div>
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
            <p className="text-slate-500 max-w-2xl mx-auto">
              These aren&apos;t marketing claims — they&apos;re measurable, tracked, and visible on our pricing page.
            </p>
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
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Feature-by-feature breakdown</h2>
            <p className="text-slate-500">
              A complete look at both platforms across pricing, support, features, and platform.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_160px_160px] bg-slate-800 text-white text-sm font-semibold">
              <div className="px-6 py-4">Feature</div>
              <div className="px-6 py-4 text-center bg-emerald-700">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">Wherefour</div>
            </div>

            {tableGroups.map((group) => (
              <div key={group.label}>
                <div className="px-6 py-3 bg-slate-100 border-y border-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{group.label}</span>
                </div>
                {group.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_160px_160px] border-b border-slate-100 last:border-0 items-center hover:bg-slate-50 transition-colors"
                  >
                    <div className="px-6 py-3.5">
                      <span className="text-sm text-slate-700">{row.feature}</span>
                      {row.note && (
                        <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>
                      )}
                    </div>
                    <div className="px-6 py-3.5 bg-emerald-50/50 flex items-center justify-center">
                      <Cell value={row.brahmin} />
                    </div>
                    <div className="px-6 py-3.5 flex items-center justify-center">
                      <Cell value={row.wherefour} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-4 text-center">
            Wherefour data sourced from published product pages, Capterra reviews, and SoftwareConnect. Brahmin data reflects current published plans. Last updated March 2026.
          </p>
        </div>
      </section>

      {/* ── 6. WHO SHOULD CHOOSE BRAHMIN ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Who should choose Brahmin</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Choose Brahmin */}
            <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-emerald-900">Choose Brahmin if…</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-emerald-800">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wherefour may be fine */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-700">Wherefour may be fine if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Lot traceability and FSMA compliance are your absolute top priority and you want it included at the base tier',
                  'Your team does all work from desktop browsers and has no need for a native mobile app',
                  'You can negotiate pricing and are comfortable with a quote-based sales process',
                  'You are in cannabis or need Metrc / LeafLink integration specifically',
                  'You are already live on Wherefour and the switching cost outweighs the gains',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-primary-50 rounded-2xl border border-primary-100 p-8 text-center">
            <blockquote className="text-lg font-medium text-slate-800 mb-4 max-w-3xl mx-auto leading-relaxed">
              &ldquo;Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.&rdquo;
            </blockquote>
            <cite className="text-sm text-slate-500 not-italic">— Sheldon, FLFF</cite>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">See Brahmin before you sign anything</h2>
          <p className="text-slate-300 text-lg mb-8">
            Book a 30-minute demo. We&apos;ll show you the software with your actual products and workflows — and you&apos;ll see the price before we get off the call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/demo"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              See pricing
            </Link>
          </div>

          <div className="text-sm text-slate-400 mb-10">
            No credit card required · Published pricing · Free 14-day trial available
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs Fishbowl', href: '/compare/fishbowl' },
                { label: 'vs Cin7', href: '/compare/cin7' },
                { label: 'vs MRPeasy', href: '/compare/mrpeasy' },
                { label: 'vs NetSuite', href: '/compare/netsuite' },
                { label: 'See all comparisons', href: '/compare' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-1.5 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
