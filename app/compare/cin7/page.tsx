import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Cin7 | Comparison',
  description:
    'Cin7 too complex and expensive? Brahmin Solutions offers the same features with simpler UI, lower price, and better support.',
}

type RowValue = string | boolean

const comparisonRows: { feature: string; brahmin: RowValue; cin7: RowValue; note?: string }[] = [
  { feature: 'Starting price', brahmin: '$199/month', cin7: '$349/month', note: 'Cin7 Core starts at $349; Cin7 Omni higher' },
  { feature: 'Per-transaction fees', brahmin: false, cin7: true, note: 'Cin7 charges per order on some plans' },
  { feature: 'Setup fee', brahmin: false, cin7: true, note: 'Cin7 often charges onboarding fees' },
  { feature: 'Support response time', brahmin: '15 minutes', cin7: '24–72 hours' },
  { feature: 'Dedicated implementation manager', brahmin: true, cin7: false },
  { feature: 'Implementation time', brahmin: '21 days avg.', cin7: '45–90 days' },
  { feature: 'Interface complexity', brahmin: 'Simple', cin7: 'Complex', note: 'Cin7 is feature-heavy with steep learning curve' },
  { feature: 'Multi-location inventory', brahmin: true, cin7: true },
  { feature: 'Bills of materials', brahmin: true, cin7: true },
  { feature: 'Work orders', brahmin: true, cin7: true },
  { feature: 'Batch & lot traceability', brahmin: true, cin7: true },
  { feature: 'B2B customer portal', brahmin: true, cin7: true },
  { feature: 'Mobile warehouse app', brahmin: true, cin7: true },
  { feature: 'Shopify integration', brahmin: true, cin7: true },
  { feature: 'Amazon integration', brahmin: true, cin7: true },
  { feature: '24/7 human support', brahmin: true, cin7: false },
]

const switchReasons = [
  {
    title: "Same features. Simpler interface.",
    description: "Cin7 is powerful but famously complex. New users spend weeks learning it. Brahmin has the same core capabilities with an interface your team can learn in a day—without a dedicated admin.",
    icon: '🎯',
  },
  {
    title: 'Lower price. No surprise fees.',
    description: "Cin7 starts at $349/month and adds per-order fees and setup costs on top. Brahmin starts at $199/month—flat-rate, no per-order fees, no surprise invoices.",
    icon: '💰',
  },
  {
    title: 'Support in 15 minutes',
    description: "Cin7 support tickets often take 1–3 days. Brahmin responds in 15 minutes. When something breaks during a production run, you can't wait three days for an answer.",
    icon: '🚀',
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

export default function VsCin7Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Comparison
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Brahmin Solutions vs Cin7
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Cin7 too complex and expensive? Brahmin Solutions has the same features with a simpler interface, lower price, and support that responds in 15 minutes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5">
                Book a Demo
              </Link>
              <Link href="/pricing" className="flex items-center gap-2 border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Why Manufacturers Switch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              3 reasons manufacturers leave Cin7
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {switchReasons.map((r) => (
              <div key={r.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price comparison callout */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cin7 Core</div>
              <div className="text-4xl font-bold text-white">$349<span className="text-xl text-slate-400">/mo</span></div>
              <div className="text-slate-400 text-sm mt-1">+ setup fee + per-order fees</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-slate-400 text-sm font-medium">vs</div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-6 border border-primary-500">
              <div className="text-xs font-bold text-primary-200 uppercase tracking-widest mb-3">Brahmin Solutions</div>
              <div className="text-4xl font-bold text-white">$199<span className="text-xl text-primary-200">/mo</span></div>
              <div className="text-primary-200 text-sm mt-1">Flat rate. No hidden fees.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Feature-by-feature comparison</h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-6 py-5 text-sm font-semibold text-slate-500 w-1/2">Feature</th>
                  <th className="px-6 py-5 text-center w-1/4">
                    <div className="text-sm font-bold text-primary-600">Brahmin Solutions</div>
                    <div className="text-xs text-slate-400 mt-0.5">from $199/mo</div>
                  </th>
                  <th className="px-6 py-5 text-center w-1/4">
                    <div className="text-sm font-bold text-slate-500">Cin7</div>
                    <div className="text-xs text-slate-400 mt-0.5">from $349/mo</div>
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
                      <Cell value={row.cin7} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
