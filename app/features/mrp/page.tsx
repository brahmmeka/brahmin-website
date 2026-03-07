import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'MRP & Demand Forecasting | Brahmin Solutions',
  description:
    'Material requirements planning that tells you what to make and buy before you run out. Plan with confidence.',
}

const allFeatures = [
  'One-click MRP calculation',
  'Demand-driven material requirements',
  'Lead time-aware purchasing suggestions',
  'Sales order-based production planning',
  'What-if scenario modeling',
  'Inventory projection by date',
  'Auto-generate POs from MRP output',
  'Auto-generate work orders from MRP',
  'Buffer stock / safety stock settings',
  'Reorder point management',
  'Forecast based on sales history',
  'Multi-level BOM explosion',
  'Shortage alerts before they happen',
  'MRP run history',
  'Export MRP plan to CSV',
]

const related = [
  { href: '/features/purchasing', label: 'Purchasing', desc: 'MRP output auto-generates purchase orders' },
  { href: '/features/production', label: 'Production & Manufacturing', desc: 'MRP tells you what work orders to create and when' },
  { href: '/features/inventory', label: 'Inventory Management', desc: 'MRP reads from live stock levels across locations' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function MRPMockup() {
  const rows = [
    { item: 'Organic Maple Granola', type: 'Make', qty: '1,000 lbs', when: 'Mar 12', action: 'work-order' },
    { item: 'Organic Rolled Oats', type: 'Buy', qty: '800 lbs', when: 'Mar 8', action: 'po' },
    { item: 'Maple Syrup', type: 'Buy', qty: '200 L', when: 'Mar 8', action: 'po' },
    { item: 'Sunflower Oil', type: 'Buy', qty: '40 gal', when: 'Mar 10', action: 'po' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900">MRP — next 30 days</span>
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-semibold">Run complete</span>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Item</th>
            <th className="text-left px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Action</th>
            <th className="text-right px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Qty</th>
            <th className="text-right px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide hidden sm:table-cell">By</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.item} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
              <td className="px-5 py-3 font-medium text-slate-800 text-xs">{r.item}</td>
              <td className="px-3 py-3">
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.action === 'work-order' ? 'bg-violet-100 text-violet-700' : 'bg-amber-100 text-amber-700'}`}>{r.type}</span>
              </td>
              <td className="px-3 py-3 text-slate-700 font-semibold text-xs text-right">{r.qty}</td>
              <td className="px-3 py-3 text-slate-500 text-xs text-right hidden sm:table-cell">{r.when}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">Based on 12 open sales orders</span>
        <button className="text-xs font-semibold text-primary-600 hover:text-primary-700">Generate all →</button>
      </div>
    </div>
  )
}

function ShortagesMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Projected shortages</p>
      <div className="space-y-3">
        {[
          { item: 'Maple Syrup', needBy: 'Mar 12', have: '42 L', need: '200 L', gap: '−158 L', severity: 'critical' },
          { item: 'Sunflower Oil', needBy: 'Mar 15', have: '28 gal', need: '40 gal', gap: '−12 gal', severity: 'warning' },
          { item: 'Sea Salt', needBy: 'Mar 20', have: '8 lbs', need: '12 lbs', gap: '−4 lbs', severity: 'warning' },
        ].map((s) => (
          <div key={s.item} className={`p-4 rounded-xl border ${s.severity === 'critical' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-900">{s.item}</span>
              <span className={`text-xs font-bold ${s.severity === 'critical' ? 'text-red-600' : 'text-amber-600'}`}>{s.gap}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div><span className="text-slate-400">Have</span><p className="font-semibold text-slate-700">{s.have}</p></div>
              <div><span className="text-slate-400">Need</span><p className="font-semibold text-slate-700">{s.need}</p></div>
              <div><span className="text-slate-400">Need by</span><p className="font-semibold text-slate-700">{s.needBy}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MRPPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/features" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Features</Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-emerald-600">MRP & Forecasting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Know what to make before you run out
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Material requirements planning tells you exactly what to produce and what to buy — based on real orders, current stock, and supplier lead times. No more guessing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5 text-center">
                Book a demo
              </Link>
              <Link href="/pricing" className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                See pricing →
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-400">300+ manufacturers · From $199/month · No credit card required</p>
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl space-y-28">

          {/* Section 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">One-click MRP</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Run your MRP in one click
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Brahmin analyzes your open sales orders, current stock levels, production schedule, and vendor lead times — then tells you exactly what to make and buy, and when. Generate the work orders and POs directly from the MRP output.
              </p>
              <ul className="mt-8 space-y-3">
                {['Reads from live orders, stock, and open POs', 'Factors in lead times and safety stock', 'One click to generate all work orders and POs', 'Run anytime — takes seconds, not hours'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            <MRPMockup />
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ShortagesMockup />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Shortage alerts</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                See shortages before they stop production
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Brahmin flags materials that will run short before your next production run — with enough lead time to actually do something about it. You see what you are missing, how much you need, and when you need it by.
              </p>
              <ul className="mt-8 space-y-3">
                {['Projected shortage alerts by item and date', 'Shows gap between current stock and what is needed', 'Lead time-aware — alerts fire with enough time to order', 'Link directly from alert to create a PO'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Forecasting */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Forecasting</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Plan ahead with scenario modeling
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Ask "what if we get that big order?" before it arrives. Brahmin lets you model demand scenarios — increase volume by 30%, add a new SKU, or plan for a seasonal spike — and shows you exactly what you would need to buy and make.
              </p>
              <ul className="mt-8 space-y-3">
                {['Scenario planning with custom volume multipliers', 'Forecast based on historical sales patterns', 'Project inventory levels by day or week', 'Safety stock settings per item'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            {/* Scenario mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Scenario — +30% demand</p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <p className="text-sm font-semibold text-blue-900 mb-1">If you get 30% more orders next month...</p>
                <p className="text-xs text-blue-700">Here is what you would need to buy and make</p>
              </div>
              <div className="space-y-2">
                {[
                  { item: 'Additional production runs', value: '3 work orders', icon: '🏭' },
                  { item: 'Extra raw materials needed', value: '+$4,200 in POs', icon: '📦' },
                  { item: 'Earliest you could ship', value: 'Mar 22', icon: '📅' },
                  { item: 'Capacity utilization', value: '87% (was 67%)', icon: '📊' },
                ].map((r) => (
                  <div key={r.item} className="flex items-center gap-3 py-2.5 border-b border-slate-50">
                    <span className="text-lg">{r.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600">{r.item}</p>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{r.value}</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full text-sm font-semibold text-primary-600 border border-primary-200 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
                Generate plan for this scenario
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature checklist */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">All features</span>
            <h2 className="text-3xl font-bold text-slate-900">Everything included in MRP & forecasting</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {allFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200">
                <Check />
                <span className="text-sm text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <svg className="w-8 h-8 text-slate-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
            "Brahmin syncs to all our systems and handles batch tracking, order capture, and fulfillment — everything we need in one place. We stopped running out of materials."
          </p>
          <div>
            <p className="font-semibold text-slate-900">Ryan</p>
            <p className="text-sm text-slate-500">Chugach Chocolates</p>
          </div>
        </div>
      </section>

      {/* Related features */}
      <section className="py-section bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{r.label}</h3>
                <p className="text-sm text-slate-500 mb-4">{r.desc}</p>
                <span className="text-sm font-semibold text-primary-600 flex items-center gap-1">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
