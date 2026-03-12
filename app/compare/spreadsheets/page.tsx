import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Spreadsheets | Stop Managing Inventory in Excel',
  description:
    'Still managing inventory in spreadsheets? 94% of spreadsheets have errors. See what staying on Excel is actually costing your manufacturing business — and how fast you can switch.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Inventory accuracy', brahmin: 'Real-time, updated on every scan', spreadsheets: 'Accurate as of last save', brahminBetter: true },
  { label: 'Multi-user collaboration', brahmin: 'Unlimited users, live data', spreadsheets: 'One editor at a time', brahminBetter: true },
  { label: 'Lot traceability', brahmin: 'Full forward/backward trace', spreadsheets: 'Manual text fields (no genealogy)', brahminBetter: true },
  { label: 'QuickBooks sync', brahmin: 'Automatic sync from Brahmin', spreadsheets: 'Manual double-entry', brahminBetter: true },
  { label: 'Implementation', brahmin: 'Dedicated manager, 3–6 weeks', spreadsheets: 'You already have it — and it\'s already costing you', brahminBetter: true },
]

const spreadsheetShortfalls = [
  {
    icon: '📋',
    headline: '"Who has the latest version?"',
    body: '94% of operational spreadsheets contain errors (Panko research, University of Hawaii — the most comprehensive audit study on record). The most common source: multiple versions saved under different names, with no audit trail of who changed what. In a manufacturing environment where purchasing, warehouse, and production all touch the same data, version chaos is not a minor inconvenience — it is a structural reliability failure.',
    quote: '"inventory_FINAL_v2_ACTUAL.xlsx" — every manufacturer\'s nightmare, and it\'s happening right now.',
  },
  {
    icon: '⏱️',
    headline: '9+ hours per week lost to manual data entry',
    body: 'A 2025 Parseur survey of 500 U.S. professionals found that manual data entry between spreadsheets, emails, and systems costs the average employee 9+ hours per week — and $28,500 per employee per year when accounting for labor, errors, and lost productivity. For a manufacturer running inventory in Excel, QuickBooks in parallel, and orders in a separate sheet, that cost compounds at every transaction.',
    quote: '"62% of businesses using spreadsheets for inventory cite efficiency as their #1 pain point." — Capterra Buyer Insights Report (650+ buyer interactions, 2024–2025)',
  },
  {
    icon: '📉',
    headline: 'Stockouts and overstock you can\'t see coming',
    body: 'Spreadsheets are always accurate as of the last save. The moment a shipment is received, a pick is pulled, or a work order consumes material — your spreadsheet is out of date. Without real-time visibility, reorder signals come late. Overstock accumulates undetected. Research shows stockouts reduce annual revenue by 2–5% for the average manufacturer, and small businesses lose an average of $394,000 per year to inventory inaccuracy.',
    quote: '"60% of manufacturers struggle with inaccurate inventory data, leading to excess inventory or stockouts." — Industry aggregate data',
  },
  {
    icon: '🔥',
    headline: 'A recall would take you days — not hours',
    body: 'GFSI audit schemes (SQF, BRCGS) require full lot traceability to be demonstrated within 4 hours. FSMA Rule 204 (enforcement by July 2028) requires manufacturers of FDA-listed foods to provide lot-level records to FDA within 24 hours on demand. A spreadsheet records a lot number as a text field — it cannot execute a forward trace (ingredient → customer) or backward trace (customer → supplier) without days of manual research. Auditors consistently find that spreadsheet-based traceability "fails to trace and quantify correctly with suitable evidence."',
    quote: '"The average direct cost of a food recall is $10 million — 80% of that comes after the acute event, from canceled contracts, lost shelf space, and brand damage." — Multiple food safety insurers',
  },
  {
    icon: '📊',
    headline: 'You can\'t see what it\'s costing you to make anything',
    body: 'Without a system that tracks actual material consumption, labor, and overhead against work orders in real time, true cost of goods is a quarterly estimate at best. Manufacturers on spreadsheets typically discover their real margins months after the fact — after they\'ve already priced products, taken orders, and committed to production. By the time the analysis is done, the damage is priced into the business.',
    quote: '"Companies that switch to ERP/MRP see a 23% reduction in operational costs and 22% lower administration costs." — G2 research, 2021',
  },
]

const brahminStrengths = [
  {
    icon: '📍',
    headline: 'One source of truth, updated in real time.',
    body: 'Every scan, receive, pick, and adjustment updates inventory instantly — visible to every user on every screen. No reconciliation meeting. No "which version is right." Just one number, always current.',
  },
  {
    icon: '🔄',
    headline: 'QuickBooks, Shopify, ShipStation — all automatic.',
    body: 'Two-way sync with your accounting, e-commerce, and shipping platforms. When an order ships in Brahmin, QuickBooks gets the invoice, Shopify gets the inventory update, and ShipStation gets the fulfillment — no double-entry.',
  },
  {
    icon: '🏷️',
    headline: 'Lot traceability that actually works under audit.',
    body: 'Full forward and backward lot genealogy from a single scan. Generate a recall report in minutes, not days. Brahmin\'s traceability holds up under GFSI audits, FDA inspections, and FSMA 204 requirements — a spreadsheet does not.',
  },
  {
    icon: '🚀',
    headline: 'Live in 3–6 weeks. We handle the migration.',
    body: 'Send us your spreadsheets. We map your SKUs, inventory counts, BOMs, customers, and suppliers — and import everything before you go live. No lost data, no 6-month project. Average migration: 5–7 business days.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; spreadsheets: RowValue; note?: string }[] = [
  // Core inventory
  { feature: 'Real-time inventory accuracy', brahmin: true, spreadsheets: false, note: 'Spreadsheets are accurate as of last save — not last transaction' },
  { feature: 'Multi-user collaboration (live)', brahmin: true, spreadsheets: false, note: 'Excel: one editor at a time; Google Sheets: conflicts and version drift' },
  { feature: 'Multi-location tracking', brahmin: true, spreadsheets: false },
  { feature: 'Automatic reorder alerts', brahmin: true, spreadsheets: false },
  { feature: 'Version control & audit trail', brahmin: true, spreadsheets: false, note: 'No record of who changed what in a spreadsheet' },
  // Production
  { feature: 'Work orders & production scheduling', brahmin: true, spreadsheets: false },
  { feature: 'Bills of materials (multi-level)', brahmin: true, spreadsheets: 'Manual', note: 'Formulas break; no audit trail; no BOM versioning' },
  { feature: 'Real-time cost of goods (COGS)', brahmin: true, spreadsheets: false },
  { feature: 'Labor & overhead tracking', brahmin: true, spreadsheets: false },
  // Traceability
  { feature: 'Batch & lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', spreadsheets: false },
  { feature: 'Forward/backward lot trace', brahmin: 'Pro · Add-on on Starter/Growth', spreadsheets: false, note: 'Spreadsheets record text; cannot query genealogy' },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', spreadsheets: false },
  { feature: 'FSMA 204 / GFSI compliance', brahmin: 'Pro · Add-on on Starter/Growth', spreadsheets: false },
  // Integrations
  { feature: 'QuickBooks sync (automatic)', brahmin: true, spreadsheets: false, note: 'Manual double-entry with spreadsheets — error guaranteed' },
  { feature: 'Shopify inventory sync', brahmin: true, spreadsheets: false },
  { feature: 'ShipStation integration', brahmin: true, spreadsheets: false },
  { feature: 'B2B customer self-serve portal', brahmin: true, spreadsheets: false },
  // Warehouse & mobile
  { feature: 'Mobile barcode scanning', brahmin: true, spreadsheets: false },
  { feature: 'Purchase order management', brahmin: true, spreadsheets: 'Manual' },
  // Platform
  { feature: 'Data backup & security', brahmin: 'Automatic (SOC 2)', spreadsheets: 'Your responsibility' },
  { feature: 'Access control & permissions', brahmin: true, spreadsheets: false },
  { feature: 'Scales past $2M revenue', brahmin: true, spreadsheets: false, note: 'Manufacturers hit the spreadsheet wall at 50–200 orders/month' },
]

const tableGroups = [
  { label: 'Core inventory', rows: comparisonRows.slice(0, 5) },
  { label: 'Production & manufacturing', rows: comparisonRows.slice(5, 9) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(9, 13) },
  { label: 'Integrations', rows: comparisonRows.slice(13, 17) },
  { label: 'Warehouse & mobile', rows: comparisonRows.slice(17, 19) },
  { label: 'Platform', rows: comparisonRows.slice(19) },
]

const idealFor = [
  'You\'re tracking inventory in Excel or Google Sheets and your counts keep drifting',
  'Your team can\'t agree on which file has the right number',
  'You\'re manually re-entering data between QuickBooks, Shopify, and your inventory sheet',
  'A recall or FDA audit would require days of manual research to complete',
  'You don\'t know your true cost of goods until the accountant runs the quarterly numbers',
  'You\'re growing past 50 orders/month or 20+ active SKUs and the spreadsheet is slowing you down',
  'You want to be live in 3–6 weeks without losing any of your existing data',
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

export default function VsSpreadsheetsPage() {
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
            Brahmin Solutions vs Spreadsheets
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            94% of operational spreadsheets contain errors. Every hour your team spends reconciling versions, re-entering data, and guessing at inventory counts is revenue you&apos;re leaving on the table. Here&apos;s what staying on Excel is actually costing you — and how fast you can switch.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              '✓ From $199/month — published pricing',
              '✓ We handle your data migration',
              '✓ Live in 3–6 weeks',
              '✓ <15 min support response',
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
              <div className="px-6 py-4 text-center">Spreadsheets</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>
                  {row.brahmin}
                </div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{row.spreadsheets}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE COST OF DOING NOTHING ─────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">The cost of staying on spreadsheets</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              These aren&apos;t warnings about what might happen. They&apos;re what&apos;s already happening — backed by research.
            </p>
          </div>

          <div className="space-y-6">
            {spreadsheetShortfalls.map((item) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-3">What you get when you switch</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We migrate your data, configure your workflows, and get you live in 3–6 weeks — no consultants, no guesswork.
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
              Everything Brahmin does that a spreadsheet cannot.
            </p>
          </div>

          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_160px_160px] bg-slate-800 text-white text-sm font-semibold">
              <div className="px-3 md:px-6 py-4">Feature</div>
              <div className="px-3 md:px-6 py-4 text-center bg-emerald-700">Brahmin Solutions</div>
              <div className="px-3 md:px-6 py-4 text-center">Spreadsheets</div>
            </div>

            {tableGroups.map((group) => (
              <div key={group.label}>
                <div className="px-3 md:px-6 py-3 bg-slate-100 border-y border-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{group.label}</span>
                </div>
                {group.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_160px_160px] border-b border-slate-100 last:border-0 items-center hover:bg-slate-50 transition-colors"
                  >
                    <div className="px-3 md:px-6 py-3.5">
                      <span className="text-sm text-slate-700">{row.feature}</span>
                      {row.note && (
                        <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>
                      )}
                    </div>
                    <div className="px-3 md:px-6 py-3.5 bg-emerald-50/50 flex items-center justify-center">
                      <Cell value={row.brahmin} />
                    </div>
                    <div className="px-3 md:px-6 py-3.5 flex items-center justify-center">
                      <Cell value={row.spreadsheets} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHO SHOULD SWITCH ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Is it time to switch?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Switch to Brahmin */}
            <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-emerald-900">Switch to Brahmin if…</h3>
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

            {/* Spreadsheets may be fine */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-700">Spreadsheets may still work if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You have fewer than 10 SKUs and under 20 orders per month',
                  'You are a solo operator with no team touching the same data',
                  'You have no traceability, compliance, or audit requirements',
                  'Your products have no BOMs and you don\'t track production costs',
                  'You\'re pre-revenue or in very early stages before product-market fit',
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
              &ldquo;This was my first time using inventory software, and I didn&apos;t know anything. They walked me through each workflow. By the time we went live, I felt like an expert.&rdquo;
            </blockquote>
            <cite className="text-sm text-slate-500 not-italic">— Jeremy Wixson, Purchasing and Logistics Manager, PSE</cite>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">See what you&apos;re missing in 30 minutes</h2>
          <p className="text-slate-300 text-lg mb-8">
            Book a demo and we&apos;ll show you Brahmin with your actual products and workflows. If you&apos;re ready to migrate, we&apos;ll tell you exactly how long it takes — usually 5–7 business days for the data, 3–6 weeks to go live.
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
            No credit card required · We handle data migration · Free 14-day trial available
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
                { label: 'vs Wherefour', href: '/compare/wherefour' },
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
    </>
  )
}
