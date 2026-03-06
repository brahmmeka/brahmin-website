import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Production Planning Software | Brahmin Solutions',
  description:
    'Plan, schedule, and track work orders from start to finish. Shop floor control made simple for small manufacturers.',
}

const allFeatures = [
  'Multi-level bills of materials (BOMs)',
  'Work order creation and scheduling',
  'Real-time production cost tracking',
  'Labor and overhead cost allocation',
  'Scrap and yield tracking',
  'Subcontract (outsourced) manufacturing',
  'Production run history',
  'BOM version control',
  'Component auto-allocation on WO creation',
  'Material consumption tracking',
  'In-progress work order updates',
  'Shop floor mobile access',
  'Production cost vs. target reporting',
  'Batch size scaling',
  'Integration with purchasing for auto-POs',
]

const related = [
  { href: '/features/inventory', label: 'Inventory Management', desc: 'Real-time stock levels tied to production' },
  { href: '/features/mrp', label: 'MRP & Forecasting', desc: 'Plan production before you run out of materials' },
  { href: '/features/traceability', label: 'Traceability & Compliance', desc: 'Lot tracking from ingredient to finished good' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function WorkOrderMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900">Work Order #WO-1042</span>
        <span className="bg-amber-100 text-amber-700 text-xs px-2.5 py-1 rounded-full font-semibold">In Progress</span>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <p className="text-xs text-slate-400 mb-0.5">Product</p>
          <p className="font-semibold text-slate-900">Organic Maple Granola</p>
          <p className="text-sm text-slate-500">Batch: 500 lbs · Due: Mar 10, 2026</p>
        </div>
        {/* Progress */}
        <div className="mb-5">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>Production progress</span>
            <span>320 / 500 lbs</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '64%' }} />
          </div>
        </div>
        {/* BOM */}
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Bill of materials</p>
        <div className="space-y-1.5">
          {[
            { item: 'Rolled oats', qty: '300 lbs', status: 'picked' },
            { item: 'Maple syrup', qty: '75 L', status: 'picked' },
            { item: 'Sunflower oil', qty: '15 gal', status: 'pending' },
            { item: 'Sea salt', qty: '2 lbs', status: 'picked' },
          ].map((r) => (
            <div key={r.item} className="flex items-center justify-between py-1.5 border-b border-slate-50">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${r.status === 'picked' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                <span className="text-sm text-slate-700">{r.item}</span>
              </div>
              <span className="text-xs text-slate-500">{r.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CostMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Cost breakdown — WO-1042</p>
      <div className="space-y-3 mb-5">
        {[
          { label: 'Ingredients', amount: '$842.00', pct: 58, color: 'bg-blue-500' },
          { label: 'Labor', amount: '$320.00', pct: 22, color: 'bg-violet-500' },
          { label: 'Overhead', amount: '$180.00', pct: 12, color: 'bg-amber-400' },
          { label: 'Packaging', amount: '$103.00', pct: 8, color: 'bg-slate-300' },
        ].map((c) => (
          <div key={c.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-700">{c.label}</span>
              <span className="font-semibold text-slate-900">{c.amount}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className={`h-1.5 rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 pt-4 flex justify-between">
        <span className="font-semibold text-slate-900">Total cost</span>
        <span className="font-bold text-slate-900">$1,445.00</span>
      </div>
      <div className="mt-2 flex justify-between text-sm">
        <span className="text-slate-500">Cost per lb</span>
        <span className="font-semibold text-emerald-600">$2.89/lb</span>
      </div>
    </div>
  )
}

export default function ProductionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/features" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Features</Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-violet-600">Production & Manufacturing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Production planning and shop floor control
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Build recipes, schedule work orders, and know your true cost per unit — including ingredients, labor, and overhead — before the batch ships.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5 text-center">
                Book a demo
              </Link>
              <Link href="/pricing" className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                See pricing →
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-400">300+ manufacturers · $199/month flat · No credit card required</p>
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl space-y-28">

          {/* Section 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">Work orders</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                From recipe to finished goods — in one place
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Create a work order and Brahmin automatically pulls your BOM, allocates materials, and tracks progress in real time. Your team sees exactly what needs to be made, what ingredients to pull, and how the batch is tracking against plan.
              </p>
              <ul className="mt-8 space-y-3">
                {['Multi-level BOMs with nested sub-assemblies', 'Auto-allocate materials when work order is created', 'Track in-progress batches with live status updates', 'Mobile pick list for shop floor team'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            <WorkOrderMockup />
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <CostMockup />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">Cost visibility</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Know your true cost before you ship
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Most manufacturers guess at their cost of goods. Brahmin tracks every ingredient, labor minute, and overhead dollar — and shows you cost per unit the moment production completes. No more end-of-month accounting surprises.
              </p>
              <ul className="mt-8 space-y-3">
                {['Ingredient costs pulled from latest PO price', 'Labor hours tracked per work order', 'Overhead allocation (per unit or per batch)', 'Actual vs. standard cost variance reports'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">Yield & scrap</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Track what you actually produced
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Not every batch comes out perfect. Brahmin lets you record actual yield, log scrap, and adjust inventory accordingly — so your books match what actually happened on the floor.
              </p>
              <ul className="mt-8 space-y-3">
                {['Record actual vs. expected yield per batch', 'Scrap and rework logging', 'Inventory auto-adjusted on work order completion', 'Subcontract manufacturing (send out, receive back)'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            {/* Yield mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Production completion — WO-1042</p>
              <div className="space-y-4">
                {[
                  { label: 'Planned output', value: '500 lbs', note: '' },
                  { label: 'Actual output', value: '487 lbs', note: '97.4% yield' },
                  { label: 'Scrap recorded', value: '13 lbs', note: 'Packaging breakage' },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between py-3 border-b border-slate-50">
                    <span className="text-sm text-slate-600">{r.label}</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-slate-900">{r.value}</span>
                      {r.note && <p className="text-xs text-slate-400">{r.note}</p>}
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-600">Yield rate</span>
                    <span className="font-bold text-emerald-600">97.4%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '97.4%' }} />
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-3 text-xs text-emerald-700 font-medium">
                  ✓ Inventory updated · Lot LOT-2026-0342 created · 487 lbs added to WH-1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature checklist */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">All features</span>
            <h2 className="text-3xl font-bold text-slate-900">Everything included in production management</h2>
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
            "Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. We finally know what our products actually cost to make."
          </p>
          <div>
            <p className="font-semibold text-slate-900">Sheldon</p>
            <p className="text-sm text-slate-500">FLFF</p>
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
