import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Fishbowl | Comparison',
  description:
    'Switching from Fishbowl? Brahmin Solutions is cloud-based with modern UI, better support, and no server maintenance. Compare features.',
}

type RowValue = string | boolean

const comparisonRows: { feature: string; brahmin: RowValue; fishbowl: RowValue; note?: string }[] = [
  { feature: 'Deployment', brahmin: 'Cloud (browser)', fishbowl: 'On-premise server', note: 'Fishbowl requires server hardware and IT maintenance' },
  { feature: 'Starting price', brahmin: '$199/month', fishbowl: '$4,395+ one-time', note: 'Fishbowl has large upfront license costs; Brahmin no per-user fees' },
  { feature: 'Implementation time', brahmin: '21 days avg.', fishbowl: '60–120 days', note: 'Server setup, data migration, training' },
  { feature: 'Dedicated implementation manager', brahmin: true, fishbowl: false },
  { feature: 'Support response time', brahmin: '15 minutes', fishbowl: '24–48 hours' },
  { feature: '24/7 human support', brahmin: true, fishbowl: false },
  { feature: 'Automatic updates', brahmin: true, fishbowl: false, note: 'Fishbowl updates require manual installation' },
  { feature: 'Mobile warehouse app', brahmin: true, fishbowl: 'Paid add-on' },
  { feature: 'B2B customer portal', brahmin: true, fishbowl: false },
  { feature: 'Multi-location inventory', brahmin: true, fishbowl: true },
  { feature: 'Bills of materials', brahmin: true, fishbowl: true },
  { feature: 'Work orders', brahmin: true, fishbowl: true },
  { feature: 'Batch & lot traceability', brahmin: true, fishbowl: true },
  { feature: 'Shopify integration', brahmin: true, fishbowl: 'Third-party' },
  { feature: 'QuickBooks integration', brahmin: true, fishbowl: true },
  { feature: 'Open REST API', brahmin: true, fishbowl: false },
]

const switchReasons = [
  {
    title: 'Cloud vs. on-premise',
    description: "Fishbowl runs on a server in your building. That means hardware costs, IT maintenance, manual updates, and VPN access for remote work. Brahmin is cloud-based—nothing to install, nothing to maintain, accessible from anywhere.",
    icon: '☁️',
  },
  {
    title: 'No upfront license fee',
    description: "Fishbowl requires a large upfront license purchase—often $4,000–$10,000—before you even start. Brahmin starts at $199/month with a 14-day free trial and no commitment.",
    icon: '💳',
  },
  {
    title: '21-day implementation',
    description: "Fishbowl implementations commonly take 2–4 months due to server setup and the complexity of on-premise deployment. Brahmin averages 21 days—with a dedicated manager handling everything.",
    icon: '⚡',
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

export default function VsFishbowlPage() {
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
              Brahmin Solutions vs Fishbowl
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Outgrowing Fishbowl? Move to cloud without losing your production tracking. Brahmin gives you everything Fishbowl does—plus better support, no server maintenance, and a 21-day go-live.
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
              3 reasons manufacturers leave Fishbowl
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

      {/* Migration callout */}
      <section className="bg-primary-50 border-y border-primary-100 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Worried about migrating from Fishbowl?</h3>
              <p className="text-slate-500 mt-1">We have a Fishbowl migration playbook. We export your data, map it to Brahmin, and go live—typically faster than you&apos;d expect.</p>
            </div>
            <Link href="/demo" className="shrink-0 bg-primary-600 hover:bg-primary-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-all">
              Talk to Our Team
            </Link>
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
                    <div className="text-sm font-bold text-slate-500">Fishbowl</div>
                    <div className="text-xs text-slate-400 mt-0.5">$4,395+ one-time</div>
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
                      <Cell value={row.fishbowl} />
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
