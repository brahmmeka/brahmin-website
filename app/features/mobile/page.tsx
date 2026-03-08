import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Mobile Inventory App | Brahmin Solutions',
  description:
    'Receive, pick, and adjust inventory from your phone or tablet. No app to install — just open a browser and go.',
}

const allFeatures = [
  'Barcode and QR code scanning',
  'Inventory receiving against POs',
  'Pick/pack/ship from any device',
  'Inventory adjustments on the go',
  'Cycle counts via mobile',
  'Works on any iOS or Android browser',
  'Works with Bluetooth barcode scanners',
  'Works with Zebra and Honeywell devices',
  'Auto lot code generation on receive',
  'Work order updates from shop floor',
  'Multi-user access with permissions',
  'No app download required (web-based)',
  'Real-time sync with desktop',
  'Scan to transfer between locations',
]

const related = [
  { href: '/features/warehouse', label: 'Warehouse Management', desc: 'Manage bins, picks, and cycle counts from any device' },
  { href: '/features/inventory', label: 'Inventory Management', desc: 'Mobile adjustments sync instantly to all locations' },
  { href: '/features/traceability', label: 'Traceability & Compliance', desc: 'Scan to receive — lot tracking starts at the dock' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function PhoneMockup() {
  const menuItems = [
    { icon: '📥', label: 'Receive inventory', sub: '2 POs pending' },
    { icon: '🏭', label: 'Work orders', sub: '4 in progress' },
    { icon: '📦', label: 'Pick & pack', sub: '7 orders to pick' },
    { icon: '🔄', label: 'Inventory adjustment', sub: '' },
    { icon: '📊', label: 'Cycle count', sub: '1 active' },
  ]
  return (
    <div className="flex justify-center">
      <div className="relative w-64 bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-full z-10" />
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-slate-800 px-4 pt-6 pb-3 flex items-center justify-between">
            <span className="text-white text-xs font-semibold">9:41 AM</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[3, 4, 4, 4].map((h, i) => <div key={i} className="w-0.5 bg-white rounded-sm" style={{ height: `${h * 2}px` }} />)}
              </div>
              <svg className="w-3 h-3 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
              <div className="w-5 h-2.5 border border-white rounded-sm ml-1 flex items-center px-0.5">
                <div className="w-3 h-1.5 bg-emerald-400 rounded-sm" />
              </div>
            </div>
          </div>
          {/* App header */}
          <div className="bg-primary-600 px-4 py-3 flex items-center justify-between">
            <span className="text-white font-bold text-sm">Brahmin</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-xs font-bold">JM</span>
            </div>
          </div>
          {/* Menu */}
          <div className="px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 px-2 py-2">Quick actions</p>
            {menuItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-slate-50 cursor-pointer">
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{item.label}</p>
                  {item.sub && <p className="text-xs text-slate-400">{item.sub}</p>}
                </div>
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
          {/* Home indicator */}
          <div className="h-6 flex items-center justify-center pb-1">
            <div className="w-24 h-1 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ScanMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-800 px-5 py-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-sm font-semibold text-white">Receive — PO-0089</span>
      </div>
      <div className="p-5">
        {/* Scan zone */}
        <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 text-center mb-4">
          <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-slate-600">Scan item barcode</p>
          <p className="text-xs text-slate-400 mt-1">or enter lot number manually</p>
        </div>
        {/* Last scanned */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <p className="text-xs font-semibold text-emerald-700">Last scanned</p>
          </div>
          <p className="text-sm font-semibold text-slate-900">Organic Rolled Oats</p>
          <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
            <div><span className="text-slate-400">Lot assigned</span><p className="font-semibold text-slate-700">LOT-2026-0342</p></div>
            <div><span className="text-slate-400">Quantity</span><p className="font-semibold text-slate-700">500 lbs</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MobilePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/features" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Features</Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-slate-600">Mobile App</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Manage inventory from anywhere
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Receive inventory, pick orders, and make adjustments from any phone or tablet. No app to install — open a browser, scan a barcode, and you&apos;re in.
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
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Shop floor & warehouse</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Your whole operation, in your pocket
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Brahmin&apos;s mobile app runs in any phone or tablet browser — no download required. Your team can receive inventory at the dock, pick orders in the warehouse, and update work orders on the shop floor — all from the same screen.
              </p>
              <ul className="mt-8 space-y-3">
                {['Works on any phone, tablet, or handheld device', 'No app to install — opens in any mobile browser', 'Compatible with Zebra, Honeywell, and Bluetooth scanners', 'All data syncs in real time to desktop'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            <PhoneMockup />
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScanMockup />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Scan to receive</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Scan in. Lot created. Inventory updated.
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                When a shipment arrives, open Brahmin on your phone, scan the barcode, confirm the quantity, and you are done. Brahmin assigns a lot number, updates inventory, and starts the traceability trail — in one step.
              </p>
              <ul className="mt-8 space-y-3">
                {['Scan barcodes or QR codes with phone camera', 'Receive against open POs with quantity confirmation', 'Lot codes auto-assigned on receipt', 'Inventory updated instantly — no manual entry needed'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Real-time sync */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Real-time sync</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Every scan updates instantly — everywhere.
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                When your warehouse team scans a receipt or pick, the change appears in real time on every screen — desktop, mobile, and in your integrations. No end-of-day reconciliation. No wondering if the counts are current.
              </p>
              <ul className="mt-8 space-y-3">
                {['Mobile scans sync instantly to desktop', 'Shopify, QuickBooks, and ShipStation update in real time', 'Multi-user — whole team sees the same live data', 'Works on any Wi-Fi or cellular network'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            {/* Sync mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
              <div className="flex items-center gap-2 mb-5 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-medium text-emerald-800">Live — all changes syncing in real time</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Recent activity</p>
              <div className="space-y-2 mb-4">
                {[
                  { action: 'Received LOT-2026-0345 · 200 lbs oats', time: 'Just now', user: 'JM' },
                  { action: 'Picked SO-7291 · Bin A-03 · 24 units', time: '2 min ago', user: 'RP' },
                  { action: 'Adj. -5 lbs Maple Syrup · breakage', time: '8 min ago', user: 'JM' },
                ].map((a) => (
                  <div key={a.action} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary-700">{a.user}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-slate-700">{a.action}</p>
                      <p className="text-xs text-slate-400">{a.time}</p>
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold">Synced ✓</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-500 text-center">
                Shopify inventory · QuickBooks · ShipStation — all updated automatically
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
            <h2 className="text-3xl font-bold text-slate-900">Everything included in the mobile app</h2>
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
            "Our warehouse team was up and running on Brahmin in under an hour. They scan, pick, and ship all from their phones — no training required."
          </p>
          <div>
            <p className="font-semibold text-slate-900">Operations team</p>
            <p className="text-sm text-slate-500">Wild Zora Foods</p>
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
