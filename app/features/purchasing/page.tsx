import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Purchasing & Reorder Management | Brahmin Solutions',
  description:
    'Automate purchase orders, set reorder points, and manage vendor relationships. Never run out of materials again.',
}

const allFeatures = [
  'Purchase order creation and tracking',
  'Vendor management and pricing',
  'Automatic reorder point alerts',
  'Auto-generate POs from reorder triggers',
  'Full and partial receiving against POs',
  'Auto lot code generation on receive',
  'Volume discount pricing',
  'Vendor lead time tracking',
  'PO approval workflows',
  'Certificate of analysis (CoA) uploads',
  'PO history per vendor',
  'Overdue PO alerts',
  'Multi-vendor price comparison',
  'PO email directly to supplier',
  'Export POs to PDF',
]

const related = [
  { href: '/features/inventory', label: 'Inventory Management', desc: 'Reorder points trigger purchasing automatically' },
  { href: '/features/mrp', label: 'MRP & Forecasting', desc: 'MRP tells you what to buy and when' },
  { href: '/features/traceability', label: 'Traceability & Compliance', desc: 'Lot tracking begins at raw material receipt' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function POMockup() {
  const pos = [
    { id: 'PO-0089', vendor: 'Grain Mill Co.', items: 3, total: '$2,840', status: 'Pending', due: 'Mar 15' },
    { id: 'PO-0088', vendor: 'Maple Farm Supply', items: 1, total: '$1,200', status: 'Received', due: 'Mar 8' },
    { id: 'PO-0087', vendor: 'Pure Packaging Co.', items: 5, total: '$640', status: 'Overdue', due: 'Mar 3' },
    { id: 'PO-0086', vendor: 'Grain Mill Co.', items: 2, total: '$3,150', status: 'Received', due: 'Feb 28' },
  ]
  const badge: Record<string, string> = {
    Pending: 'bg-blue-100 text-blue-700',
    Received: 'bg-emerald-100 text-emerald-700',
    Overdue: 'bg-red-100 text-red-700',
  }
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900">Purchase orders</span>
        <button className="text-xs bg-primary-600 text-white px-3 py-1.5 rounded-lg font-semibold">+ New PO</button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">PO #</th>
            <th className="text-left px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide hidden sm:table-cell">Vendor</th>
            <th className="text-right px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Total</th>
            <th className="text-center px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Status</th>
          </tr>
        </thead>
        <tbody>
          {pos.map((po) => (
            <tr key={po.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
              <td className="px-5 py-3 font-semibold text-primary-600 text-xs">{po.id}</td>
              <td className="px-3 py-3 text-slate-700 text-xs hidden sm:table-cell">{po.vendor}</td>
              <td className="px-3 py-3 text-slate-900 font-semibold text-xs text-right">{po.total}</td>
              <td className="px-3 py-3 text-center">
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${badge[po.status]}`}>{po.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ReceivingMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Receive against PO-0089</p>
      <div className="mb-4 p-3 bg-slate-50 rounded-xl">
        <p className="text-xs text-slate-500">Vendor</p>
        <p className="text-sm font-semibold text-slate-900">Grain Mill Co.</p>
      </div>
      <div className="space-y-3 mb-5">
        {[
          { item: 'Organic Rolled Oats', ordered: '500 lbs', received: '500 lbs', lot: 'LOT-2026-0342' },
          { item: 'Wheat Germ', ordered: '100 lbs', received: '100 lbs', lot: 'LOT-2026-0343' },
          { item: 'Spelt Flour', ordered: '200 lbs', received: '180 lbs', lot: 'LOT-2026-0344' },
        ].map((r) => (
          <div key={r.item} className="border border-slate-200 rounded-xl p-3">
            <p className="text-sm font-medium text-slate-900 mb-2">{r.item}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><span className="text-slate-400">Ordered</span><p className="font-semibold text-slate-700">{r.ordered}</p></div>
              <div><span className="text-slate-400">Received</span><p className="font-semibold text-slate-700">{r.received}</p></div>
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-500">Auto lot: {r.lot}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full bg-emerald-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-emerald-700 transition-colors">
        Confirm receipt — update inventory
      </button>
    </div>
  )
}

export default function PurchasingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/features" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Features</Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-amber-600">Purchasing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Smarter purchasing and reordering
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Stop running out of materials. Brahmin tracks stock levels, alerts you when it is time to reorder, and can create purchase orders automatically — so you never scramble for supplies again.
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">Purchase orders</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                POs in seconds, not spreadsheets
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Create purchase orders directly in Brahmin, email them to your supplier, and track delivery status — all without leaving the platform. When stock hits a reorder point, Brahmin can generate the PO automatically.
              </p>
              <ul className="mt-8 space-y-3">
                {['Create POs with pre-filled vendor pricing', 'Email PO directly to supplier from Brahmin', 'Track open, pending, and overdue POs', 'Auto-generate POs when reorder points are triggered'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            <POMockup />
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ReceivingMockup />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">Receiving</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Receive against a PO — lot codes auto-assigned
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                When a shipment arrives, receive it against the open PO. Brahmin automatically assigns lot numbers, updates inventory, and kicks off traceability — all in one step, from any device.
              </p>
              <ul className="mt-8 space-y-3">
                {['Full or partial receiving per line item', 'Auto lot code generation on receipt', 'CoA upload and attachment per lot', 'Inventory updated immediately on confirm'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Vendor management */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">Vendor management</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                One place for all your vendor relationships
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Store vendor pricing, lead times, and contact information in one place. Compare quotes across suppliers, track on-time delivery performance, and know who to call when you need materials fast.
              </p>
              <ul className="mt-8 space-y-3">
                {['Vendor profiles with contact info and lead times', 'Item-level pricing per vendor', 'Volume discount tiers', 'Purchase history and on-time delivery tracking'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            {/* Vendor mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Vendor — Grain Mill Co.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {[
                  { label: 'Lead time', value: '7 days' },
                  { label: 'Open POs', value: '2' },
                  { label: 'On-time rate', value: '94%' },
                  { label: 'YTD spend', value: '$18,240' },
                ].map((s) => (
                  <div key={s.label} className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-400">{s.label}</p>
                    <p className="font-bold text-slate-900">{s.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Items from this vendor</p>
              <div className="space-y-2">
                {[
                  { item: 'Organic Rolled Oats', price: '$2.10/lb' },
                  { item: 'Wheat Germ', price: '$3.40/lb' },
                  { item: 'Spelt Flour', price: '$2.80/lb' },
                ].map((i) => (
                  <div key={i.item} className="flex justify-between text-sm py-1.5 border-b border-slate-50">
                    <span className="text-slate-700">{i.item}</span>
                    <span className="font-semibold text-slate-900">{i.price}</span>
                  </div>
                ))}
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
            <h2 className="text-3xl font-bold text-slate-900">Everything included in purchasing</h2>
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
            "Brahmin allows us to focus on growing our business instead of worrying about inventory. It is easy to use, quick, and always improving."
          </p>
          <div>
            <p className="font-semibold text-slate-900">Tameer</p>
            <p className="text-sm text-slate-500">Bakkar Sweets</p>
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
