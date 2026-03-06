import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Warehouse Management Software | Brahmin Solutions',
  description:
    'Bin locations, pick/pack workflows, and multi-warehouse support. Organize your warehouse operations.',
}

const allFeatures = [
  'Bin and zone locations',
  'Pick/pack/ship workflows',
  'Multi-warehouse management',
  'Inventory transfers between locations',
  'Cycle count management',
  'Barcode and QR scanning',
  'Packing slip generation',
  'Shipping label printing',
  'Mobile receiving and putaway',
  'Works with Zebra and Honeywell scanners',
  'Pick list optimization',
  'Partial shipment support',
  'Multi-warehouse inventory view',
  'Location-level stock reports',
  'Putaway rules by product type',
]

const related = [
  { href: '/features/inventory', label: 'Inventory Management', desc: 'Real-time stock visibility across all warehouse locations' },
  { href: '/features/mobile', label: 'Mobile App', desc: 'Run warehouse operations from any phone or tablet' },
  { href: '/features/purchasing', label: 'Purchasing', desc: 'Receive against POs and auto-assign bin locations' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function PickListMockup() {
  const items = [
    { sku: 'GRN-001', name: 'Organic Maple Granola 12oz', bin: 'A-03-02', qty: 24, picked: true },
    { sku: 'GRN-002', name: 'Wild Berry Granola 12oz', bin: 'A-03-04', qty: 12, picked: true },
    { sku: 'GRN-003', name: 'Dark Chocolate Granola 12oz', bin: 'B-01-01', qty: 6, picked: false },
    { sku: 'PKG-014', name: 'Shipping Box — Medium', bin: 'C-10-01', qty: 3, picked: false },
  ]
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
        <div>
          <span className="text-sm font-semibold text-slate-900">Pick list — SO-7291</span>
          <span className="ml-3 text-xs bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full font-semibold">2 of 4 picked</span>
        </div>
      </div>
      <div className="divide-y divide-slate-50">
        {items.map((item) => (
          <div key={item.sku} className={`flex items-center gap-4 px-5 py-3 ${item.picked ? 'opacity-60' : ''}`}>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${item.picked ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}>
              {item.picked && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">{item.name}</p>
              <p className="text-xs text-slate-400">SKU: {item.sku} · Bin: <span className="font-semibold text-primary-600">{item.bin}</span></p>
            </div>
            <span className="text-sm font-semibold text-slate-700 shrink-0">×{item.qty}</span>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
        <div className="w-full bg-slate-200 rounded-full h-1.5 mb-1.5">
          <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '50%' }} />
        </div>
        <p className="text-xs text-slate-400">50% complete</p>
      </div>
    </div>
  )
}

function BinMockup() {
  const bins = [
    { id: 'A-01', product: 'Rolled Oats', qty: '847 lbs', color: 'bg-blue-100 border-blue-200' },
    { id: 'A-02', product: 'Wheat Germ', qty: '342 lbs', color: 'bg-blue-100 border-blue-200' },
    { id: 'A-03', product: 'Granola (FG)', qty: '1,204 units', color: 'bg-emerald-100 border-emerald-200' },
    { id: 'A-04', product: '— Empty —', qty: '', color: 'bg-slate-50 border-dashed border-slate-300' },
    { id: 'B-01', product: 'Dark Choc Granola', qty: '600 units', color: 'bg-emerald-100 border-emerald-200' },
    { id: 'B-02', product: 'Maple Syrup', qty: '89 L', color: 'bg-amber-100 border-amber-200' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Warehouse 1 — bin view</p>
      <div className="grid grid-cols-2 gap-2">
        {bins.map((bin) => (
          <div key={bin.id} className={`rounded-xl border p-3 ${bin.color}`}>
            <p className="text-xs font-bold text-slate-500 mb-1">{bin.id}</p>
            <p className="text-xs font-semibold text-slate-900 leading-tight">{bin.product}</p>
            {bin.qty && <p className="text-xs text-slate-500 mt-0.5">{bin.qty}</p>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-blue-100 border border-blue-200 shrink-0" />Raw materials</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-100 border border-emerald-200 shrink-0" />Finished goods</span>
      </div>
    </div>
  )
}

export default function WarehousePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/features" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Features</Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-teal-600">Warehouse Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Multi-location warehouse management
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Bin locations, organized pick lists, and multi-warehouse visibility — so your team always knows where things are and orders ship without chaos.
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
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Pick/pack/ship</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Organized pick lists for every order
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Brahmin generates a pick list for each order showing the bin location for every item — so your team walks the shortest path, picks accurately, and ships faster. No more hunting or guessing.
              </p>
              <ul className="mt-8 space-y-3">
                {['Pick lists sorted by bin location for efficiency', 'Scan to confirm picks — catch errors before they ship', 'Partial shipment support for backorders', 'Packing slips and shipping labels generated on pack'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            <PickListMockup />
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <BinMockup />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Bin locations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Every item has a home
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Set up bin locations — rows, shelves, zones, whatever matches your warehouse layout — and assign products to them. Brahmin shows you where to find everything and where to put it away when it arrives.
              </p>
              <ul className="mt-8 space-y-3">
                {['Custom bin naming (zone-row-bin or your format)', 'Products assigned to primary bin locations', 'Receiving auto-suggests bin based on product', 'Bin-level inventory reports'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Cycle counts</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Cycle counts that actually get done
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Stop doing one massive annual inventory count. Brahmin lets you count sections of your warehouse on a rolling schedule — smaller, faster counts that keep your inventory accurate year-round.
              </p>
              <ul className="mt-8 space-y-3">
                {['Count by zone, bin range, or product category', 'Mobile scanning for hands-free counting', 'Brahmin flags discrepancies before you confirm', 'Inventory updated immediately on count approval'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            {/* Cycle count mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Cycle count — Zone A</p>
              <div className="space-y-2 mb-4">
                {[
                  { bin: 'A-01', expected: '847 lbs', counted: '847 lbs', match: true },
                  { bin: 'A-02', expected: '342 lbs', counted: '335 lbs', match: false },
                  { bin: 'A-03', expected: '1,204 units', counted: '1,204 units', match: true },
                ].map((r) => (
                  <div key={r.bin} className={`flex items-center justify-between p-3 rounded-xl ${r.match ? 'bg-emerald-50 border border-emerald-100' : 'bg-red-50 border border-red-200'}`}>
                    <div>
                      <p className="text-xs font-bold text-slate-500">Bin {r.bin}</p>
                      <div className="flex gap-4 mt-1 text-xs">
                        <span className="text-slate-500">Expected: {r.expected}</span>
                        <span className={`font-semibold ${r.match ? 'text-emerald-700' : 'text-red-700'}`}>Counted: {r.counted}</span>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${r.match ? 'bg-emerald-500' : 'bg-red-500'}`}>
                      {r.match
                        ? <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        : <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700">
                <span className="font-semibold">1 discrepancy found</span> — Bin A-02 is short 7 lbs. Review before confirming.
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
            <h2 className="text-3xl font-bold text-slate-900">Everything included in warehouse management</h2>
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
