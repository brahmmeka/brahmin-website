import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Katana MRP | Comparison',
  description:
    'Compare Brahmin Solutions and Katana MRP. See why manufacturers switch: 15-min support response, simpler interface, no per-order fees.',
}

type RowValue = string | boolean

const comparisonRows: { feature: string; brahmin: RowValue; katana: RowValue; note?: string }[] = [
  { feature: 'Starting price', brahmin: '$199/month', katana: '$179/month', note: 'No per-user fees, no per-transaction fees' },
  { feature: 'Per-order fees', brahmin: false, katana: true, note: 'Katana charges per sales order on some plans' },
  { feature: 'Support response time', brahmin: '15 minutes', katana: '1–3 business days', note: 'Brahmin measured and published' },
  { feature: 'Dedicated implementation manager', brahmin: true, katana: false },
  { feature: 'Average implementation time', brahmin: '21 days', katana: '30–60 days' },
  { feature: 'Multi-location inventory', brahmin: true, katana: true },
  { feature: 'Bills of materials (multi-level)', brahmin: true, katana: true },
  { feature: 'Work orders', brahmin: true, katana: true },
  { feature: 'Batch & lot traceability', brahmin: true, katana: 'Add-on' },
  { feature: 'B2B customer portal', brahmin: true, katana: false },
  { feature: 'Mobile warehouse app', brahmin: true, katana: false },
  { feature: 'QuickBooks integration', brahmin: true, katana: true },
  { feature: 'Shopify integration', brahmin: true, katana: true },
  { feature: 'ShipStation integration', brahmin: true, katana: false },
  { feature: 'Open REST API', brahmin: true, katana: true },
  { feature: '24/7 human support', brahmin: true, katana: false },
]

const switchReasons = [
  {
    title: 'Support that actually responds',
    description: "Katana's support averages 1–3 business days. When your production line is stopped, that's not acceptable. Brahmin responds in 15 minutes—measured, tracked, and guaranteed.",
    icon: '💬',
  },
  {
    title: 'No per-order fees',
    description: "Katana charges per sales order on higher-volume plans. As you grow, your bill grows disproportionately. Brahmin is flat-rate—no surprises as you scale.",
    icon: '💰',
  },
  {
    title: 'B2B portal included',
    description: "Katana doesn't have a B2B customer portal. If your wholesale customers need to self-serve, you're stuck building something custom or handling it manually.",
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

export default function VsKatanaPage() {
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
              Brahmin Solutions vs Katana MRP
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Frustrated with Katana? Get support that actually responds—in 15 minutes, not 3 days. Plus no per-order fees, a B2B portal, and a dedicated implementation manager.
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
              3 reasons manufacturers leave Katana
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
                    <div className="text-sm font-bold text-slate-500">Katana</div>
                    <div className="text-xs text-slate-400 mt-0.5">from $179/mo</div>
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
                      <Cell value={row.katana} />
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
            &ldquo;I switched from Katana and wish I had done it sooner. The support alone made it worth it—I&apos;d been waiting 2 days for answers that Brahmin resolves in 15 minutes.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">RN</div>
            <div className="text-left">
              <div className="font-semibold text-slate-900">Rachel N.</div>
              <div className="text-sm text-slate-500">Founder, Bright Labs</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
