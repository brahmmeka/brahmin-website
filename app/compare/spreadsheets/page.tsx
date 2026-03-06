import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Spreadsheets | Stop Managing Inventory in Excel',
  description:
    "Still managing inventory in spreadsheets? Brahmin Solutions migrates your data and gets you live in 21 days. See what you're missing.",
}

type RowValue = string | boolean

const comparisonRows: { feature: string; brahmin: RowValue; spreadsheets: RowValue; note?: string }[] = [
  { feature: 'Real-time inventory accuracy', brahmin: true, spreadsheets: false, note: 'Spreadsheets are always behind by the last save' },
  { feature: 'Multi-user collaboration', brahmin: true, spreadsheets: 'Version chaos', note: 'Who has the latest file?' },
  { feature: 'Multi-location tracking', brahmin: true, spreadsheets: false },
  { feature: 'Automatic reorder alerts', brahmin: true, spreadsheets: false },
  { feature: 'Production & work orders', brahmin: true, spreadsheets: false },
  { feature: 'Bills of materials', brahmin: true, spreadsheets: 'Manual', note: 'Formulas break; no audit trail' },
  { feature: 'Batch & lot traceability', brahmin: true, spreadsheets: false },
  { feature: 'B2B customer portal', brahmin: true, spreadsheets: false },
  { feature: 'QuickBooks sync', brahmin: true, spreadsheets: false, note: 'Manual double-entry with spreadsheets' },
  { feature: 'Shopify inventory sync', brahmin: true, spreadsheets: false },
  { feature: 'Mobile barcode scanning', brahmin: true, spreadsheets: false },
  { feature: 'Purchase order management', brahmin: true, spreadsheets: 'Manual' },
  { feature: 'Audit trail & history', brahmin: true, spreadsheets: false },
  { feature: 'Data backup & security', brahmin: 'Automatic', spreadsheets: 'Your responsibility' },
  { feature: 'Scales with your business', brahmin: true, spreadsheets: false, note: 'Spreadsheets break at scale' },
]

const painPoints = [
  {
    problem: '"Who has the latest version?"',
    solution: 'One system of record. Everyone sees the same data, updated in real time.',
    icon: '📋',
  },
  {
    problem: '"My formulas keep breaking."',
    solution: 'No formulas to maintain. Workflows are built-in and don\'t break when someone edits a cell.',
    icon: '🔧',
  },
  {
    problem: '"I can\'t track inventory across locations."',
    solution: 'See real-time stock across every warehouse, 3PL, and co-manufacturer from one dashboard.',
    icon: '🗺️',
  },
  {
    problem: '"A recall would take us days."',
    solution: 'Full lot traceability. Generate a recall report in minutes, not days of manual research.',
    icon: '⚡',
  },
  {
    problem: '"QuickBooks sync is a nightmare."',
    solution: 'Two-way QuickBooks sync. Invoices, POs, and COGS flow automatically—no double entry.',
    icon: '🔄',
  },
  {
    problem: '"Customers have to call to place orders."',
    solution: 'B2B portal lets wholesale customers check stock and order 24/7 without calling your team.',
    icon: '🏪',
  },
]

function Cell({ value }: { value: RowValue }) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-accent-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
  return <span className="text-sm text-slate-700 font-medium">{value}</span>
}

export default function VsSpreadsheetsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-20 -left-20 w-72 h-72 bg-amber-100 rounded-full opacity-20 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Comparison
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Still managing inventory in spreadsheets?
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              We&apos;ll migrate your data and get you live in 21 days. No lost data, no months-long project. Just an inventory system that actually works.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5">
                Book a Demo
              </Link>
              <Link href="/pricing" className="flex items-center gap-2 border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                See Pricing from $129/mo
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-400">No credit card required &middot; 14-day free trial &middot; We handle data migration</p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Sound familiar?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              The spreadsheet problems we hear every day
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((p) => (
              <div key={p.problem} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="text-sm font-semibold text-slate-900 mb-2 italic">{p.problem}</div>
                <div className="text-sm text-slate-500 leading-relaxed">{p.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration callout */}
      <section className="bg-primary-600 py-14">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white leading-tight">
                Worried about migrating your spreadsheet data?
              </h2>
              <p className="mt-4 text-primary-200 leading-relaxed">
                We handle it. Send us your spreadsheets. We map your SKUs, inventory, BOMs, customers, and historical data—and import everything into Brahmin before you go live. Average migration: 5–7 business days.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  'Product catalog and SKUs',
                  'Current inventory counts',
                  'Bills of materials',
                  'Supplier and customer records',
                  'Open purchase orders',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-primary-100 text-sm">
                    <svg className="w-4 h-4 text-accent-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '21 days', l: 'Average go-live' },
                { n: '5–7 days', l: 'Data migration' },
                { n: '0', l: 'Lost records' },
                { n: '1:1', l: 'Implementation manager' },
              ].map((s) => (
                <div key={s.l} className="bg-primary-500/40 rounded-xl p-4 text-center border border-primary-400/30">
                  <div className="text-2xl font-bold text-white">{s.n}</div>
                  <div className="text-xs text-primary-200 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Spreadsheets vs. Brahmin Solutions</h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-6 py-5 text-sm font-semibold text-slate-500 w-1/2">Capability</th>
                  <th className="px-6 py-5 text-center w-1/4">
                    <div className="text-sm font-bold text-primary-600">Brahmin Solutions</div>
                    <div className="text-xs text-slate-400 mt-0.5">from $129/mo</div>
                  </th>
                  <th className="px-6 py-5 text-center w-1/4">
                    <div className="text-sm font-bold text-slate-500">Spreadsheets</div>
                    <div className="text-xs text-slate-400 mt-0.5">Excel / Google Sheets</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-slate-700">{row.feature}</div>
                      {row.note && <div className="text-xs text-slate-400 mt-0.5">{row.note}</div>}
                    </td>
                    <td className="px-6 py-4 text-center bg-primary-50/20">
                      <Cell value={row.brahmin} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Cell value={row.spreadsheets} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="flex gap-0.5 justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-2xl font-medium text-slate-900 leading-relaxed">
            &ldquo;Moving from spreadsheets was less painful than I expected. They handled everything—and we were live in 19 days. I don&apos;t know why I waited so long.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">PS</div>
            <div className="text-left">
              <div className="font-semibold text-slate-900">Priya S.</div>
              <div className="text-sm text-slate-500">Founder, Apex Apparel</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
