import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Inventory Management Software | Brahmin Solutions',
  description:
    'Real-time stock tracking across all locations. Avoid stockouts, reduce overstock, and stay compliant with batch and lot traceability.',
}

const allFeatures = [
  'Real-time stock levels across all locations',
  'Multi-warehouse and 3PL sync',
  'Barcode and QR code scanning',
  'Automatic reorder point alerts',
  'FIFO, FEFO, and AVCO valuation',
  'Inventory transfers between locations',
  'Dead stock and slow-mover reports',
  'Expiration date tracking',
  'Lot and batch visibility',
  'Custom units of measure',
  'Stock adjustment with audit trail',
  'Low stock dashboards',
  'Inventory history per SKU',
  'Co-manufacturer inventory sync',
  'Export to Excel/CSV',
]

const related = [
  { href: '/features/traceability', label: 'Traceability & Compliance', desc: 'Full lot genealogy from raw material to customer' },
  { href: '/features/warehouse', label: 'Warehouse Management', desc: 'Bin locations, pick/pack, and cycle counts' },
  { href: '/features/purchasing', label: 'Purchasing', desc: 'Auto-reorder and vendor management' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function InventoryMockup() {
  const rows = [
    { name: 'Organic Maple Granola', loc: 'WH-1', qty: '2,847', unit: 'lbs', status: 'ok' },
    { name: 'Raw Almonds (bulk)', loc: 'WH-2', qty: '342', unit: 'lbs', status: 'low' },
    { name: 'Vanilla Extract', loc: 'WH-1', qty: '89', unit: 'L', status: 'critical' },
    { name: 'Brown Sugar', loc: 'WH-1', qty: '1,204', unit: 'lbs', status: 'ok' },
    { name: 'Sunflower Oil', loc: '3PL-East', qty: '506', unit: 'gal', status: 'ok' },
  ]
  const badge: Record<string, string> = {
    ok: 'bg-emerald-100 text-emerald-700',
    low: 'bg-amber-100 text-amber-700',
    critical: 'bg-red-100 text-red-700',
  }
  const label: Record<string, string> = { ok: 'OK', low: 'Low', critical: 'Reorder' }
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-sm font-semibold text-slate-900">Inventory</span>
        </div>
        <span className="text-xs text-slate-400">247 SKUs · 3 locations · Live</span>
      </div>
      <div className="px-5 py-3 border-b border-slate-100 flex gap-3">
        {['All locations', 'WH-1', 'WH-2', '3PL-East'].map((loc, i) => (
          <span key={loc} className={`text-xs px-2.5 py-1 rounded-full font-medium ${i === 0 ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{loc}</span>
        ))}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Product</th>
            <th className="text-left px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide hidden sm:table-cell">Loc</th>
            <th className="text-right px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">On Hand</th>
            <th className="text-center px-3 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
              <td className="px-5 py-2.5 font-medium text-slate-800 text-xs">{r.name}</td>
              <td className="px-3 py-2.5 text-slate-500 text-xs hidden sm:table-cell">{r.loc}</td>
              <td className="px-3 py-2.5 text-slate-700 font-semibold text-xs text-right">{r.qty} {r.unit}</td>
              <td className="px-3 py-2.5 text-center">
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${badge[r.status]}`}>{label[r.status]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">Last updated 2 seconds ago</span>
        <span className="text-xs font-semibold text-primary-600">Export →</span>
      </div>
    </div>
  )
}

function LocationMockup() {
  const locations = [
    { name: 'Warehouse 1 (Main)', skus: 189, value: '$284,291' },
    { name: 'Warehouse 2 (Cold)', skus: 43, value: '$67,110' },
    { name: '3PL East', skus: 15, value: '$22,450' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Inventory by location</p>
      <div className="space-y-3">
        {locations.map((loc) => (
          <div key={loc.name} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <p className="text-sm font-semibold text-slate-900">{loc.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{loc.skus} SKUs</p>
            </div>
            <p className="text-sm font-bold text-slate-900">{loc.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700">Total inventory value</span>
          <span className="text-sm font-bold text-primary-600">$373,851</span>
        </div>
      </div>
    </div>
  )
}

export default function InventoryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/features" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Features</Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-blue-600">Inventory Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Real-time inventory management
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Know exactly what you have, where it is, and when to reorder — across every warehouse, 3PL, and co-manufacturer. Updated live, not on a schedule.
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

          {/* Section 1: Real-time visibility */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">Real-time visibility</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                See stock everywhere, updated live
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Every sale, shipment, and production run updates your inventory count automatically — no manual entry, no spreadsheets, no end-of-day reconciliation. If something moves, Brahmin knows.
              </p>
              <ul className="mt-8 space-y-3">
                {['Syncs with Shopify, WooCommerce, BigCommerce, and Faire orders', 'Updates on production completion and shipping', 'Tracks inventory across warehouses, 3PLs, and co-manufacturers', 'Color-coded stock alerts (OK / Low / Reorder)'].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <InventoryMockup />
          </div>

          {/* Section 2: Multi-location */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <LocationMockup />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">Multi-location</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                One dashboard for every location
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Whether you run one warehouse or five locations across 3PLs and co-manufacturers, Brahmin shows you a unified view of all your inventory. Filter by location, drill into a single SKU, or see your total inventory value at a glance.
              </p>
              <ul className="mt-8 space-y-3">
                {['Unlimited warehouse and storage locations', '3PL and co-manufacturer inventory sync', 'Inventory transfers between locations with full audit trail', 'Location-specific reorder points'].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Barcode + alerts */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">Scanning & alerts</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Scan in, scan out — no typos
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Use any iOS or Android device to scan barcodes when receiving, picking, or counting. Brahmin auto-generates lot codes, updates quantities, and flags anything that looks wrong before it becomes a problem.
              </p>
              <ul className="mt-8 space-y-3">
                {['Works with any Bluetooth barcode scanner or phone camera', 'Auto-generates GS1 barcodes for finished goods', 'Low stock alerts via email or dashboard', 'Reorder point triggers can auto-generate purchase orders'].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Alert mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Stock alerts</p>
              {[
                { name: 'Raw Almonds (bulk)', msg: 'Below reorder point — 342 lbs remaining', color: 'bg-amber-50 border-amber-200', dot: 'bg-amber-400', badge: 'text-amber-700 bg-amber-100' },
                { name: 'Vanilla Extract', msg: 'Critical — only 89 L in stock, PO pending', color: 'bg-red-50 border-red-200', dot: 'bg-red-500', badge: 'text-red-700 bg-red-100' },
                { name: 'Brown Sugar', msg: 'Auto PO created — PO-2026-0089 sent to vendor', color: 'bg-blue-50 border-blue-200', dot: 'bg-blue-400', badge: 'text-blue-700 bg-blue-100' },
              ].map((a) => (
                <div key={a.name} className={`flex items-start gap-3 p-4 rounded-xl border ${a.color}`}>
                  <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${a.dot}`} />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{a.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{a.msg}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                All other items in stock
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full feature checklist */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">All features</span>
            <h2 className="text-3xl font-bold text-slate-900">Everything included in inventory management</h2>
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
            "We cut inventory counting time by 75% in the first month. Brahmin knows where everything is — I don't have to chase my team for updates anymore."
          </p>
          <div>
            <p className="font-semibold text-slate-900">Sarah Chen</p>
            <p className="text-sm text-slate-500">Operations Manager, Elevated Oats</p>
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
                <span className="text-sm font-semibold text-primary-600 flex items-center gap-1">
                  Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
