import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'MRP Software Features | Brahmin Solutions',
  description:
    'Inventory management, production tracking, batch traceability, B2B portal, and 50+ integrations. Built for small manufacturers.',
}

const features = [
  {
    href: '/features/inventory',
    eyebrow: 'Inventory',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    headline: 'Real-time inventory management',
    description: 'Track every unit across all locations — warehouses, 3PLs, co-manufacturers — updated live as orders ship and production runs complete.',
    bullets: ['Multi-location tracking', 'Barcode scanning', 'Automatic reorder alerts', 'FIFO/AVCO valuation'],
  },
  {
    href: '/features/production',
    eyebrow: 'Production',
    color: 'text-violet-600 bg-violet-50 border-violet-100',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    headline: 'Production planning and shop floor control',
    description: 'Build recipes, schedule work orders, and track production costs — including labor, overhead, and yield loss — in real time.',
    bullets: ['Multi-level BOMs', 'Work order management', 'Real-time cost visibility', 'Yield & scrap tracking'],
  },
  {
    href: '/features/traceability',
    eyebrow: 'Traceability',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    headline: 'Full lot and batch traceability',
    description: 'Track every ingredient from receiving to customer. Generate a complete recall report in minutes — not days.',
    bullets: ['Lot & batch tracking', 'One-click recall reports', 'FDA & FSMA ready', 'Expiration management'],
  },
  {
    href: '/features/purchasing',
    eyebrow: 'Purchasing',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    headline: 'Smarter purchasing and reordering',
    description: 'Automate purchase orders, set reorder points, and manage vendor relationships — so you never run out of materials again.',
    bullets: ['PO creation & tracking', 'Vendor management', 'Auto-reorder points', 'Receiving workflows'],
  },
  {
    href: '/features/mrp',
    eyebrow: 'MRP',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    headline: 'Know what to make before you run out',
    description: "Material requirements planning that tells you exactly what to produce and purchase — based on orders, stock, and lead times — before you run short.",
    bullets: ['MRP calculation', 'Demand forecasting', 'Lead time awareness', 'Scenario planning'],
  },
  {
    href: '/features/warehouse',
    eyebrow: 'Warehouse',
    color: 'text-teal-600 bg-teal-50 border-teal-100',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    headline: 'Multi-location warehouse management',
    description: 'Bin locations, pick/pack workflows, cycle counts, and multi-warehouse transfers — organized so your team always knows where everything is.',
    bullets: ['Bin locations', 'Pick/pack/ship', 'Cycle counts', 'Multi-warehouse transfers'],
  },
  {
    href: '/features/b2b-portal',
    eyebrow: 'B2B Portal',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    headline: '24/7 wholesale ordering portal',
    description: 'Give wholesale customers a branded self-service portal to place orders, view pricing, and track shipments — any time, without calling you.',
    bullets: ['Customer-specific pricing', 'Self-service ordering', 'Order history & reorder', 'Online payments'],
  },
  {
    href: '/features/mobile',
    eyebrow: 'Mobile',
    color: 'text-slate-600 bg-slate-100 border-slate-200',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    headline: 'Manage inventory from anywhere',
    description: 'Receive inventory, pick orders, and make adjustments from any phone or tablet — with or without a Wi-Fi connection.',
    bullets: ['Barcode scanning', 'Inventory receiving', 'Pick, pack & ship', 'Works offline'],
  },
]

const extras = [
  'Demand forecasting', 'Purchase order management', 'Vendor management',
  'Cost accounting', 'Custom reporting', 'User permissions & roles',
  'Multi-currency support', 'Document management', 'Email notifications',
  'Audit logs', 'API access', 'Data import/export',
  'Certificate of analysis storage', 'Subcontract manufacturing', '50+ integrations',
]

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Features
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Everything you need to run your operation
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Purpose-built for small manufacturers — not watered-down enterprise software with a SMB price tag.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              See pricing
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-400">300+ manufacturers · Go live in as little as 3 weeks · From $199/month</p>
        </div>
      </section>

      {/* Feature cards grid */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:border-slate-300 transition-all"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold mb-4 border ${f.color}`}>
                  {f.icon}
                  {f.eyebrow}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {f.headline}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{f.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700 flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plus everything else */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">And more</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Plus everything else you need
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {extras.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200">
                <svg className="w-4 h-4 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm font-medium text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">All features. Transparent pricing.</h2>
          <p className="text-slate-500 mb-8">
            Every feature above is included from $199/month. No per-user fees. No module add-ons. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              See pricing
            </Link>
            <Link href="/demo" className="border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3 rounded-xl font-semibold transition-colors hover:bg-slate-50">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
