import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'MRP Software Features | Brahmin Solutions',
  description:
    'Production tracking, multi-location inventory, batch traceability, B2B portal, and 50+ integrations. See all features of Brahmin Solutions MRP software.',
}

const featureCategories = [
  {
    label: 'Inventory',
    color: 'text-primary-600 bg-primary-50',
    headline: 'Multi-Location Inventory',
    description:
      'Track every unit across all your locations—warehouses, 3PLs, co-manufacturers, and retail—from a single real-time dashboard.',
    features: [
      'Real-time stock levels across all locations',
      'Automatic reorder points and alerts',
      'Inventory transfers between locations',
      '3PL and co-manufacturer sync',
      'Stock valuation (FIFO, AVCO)',
      'Dead stock and slow-mover reports',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Production',
    color: 'text-violet-600 bg-violet-50',
    headline: 'Production Tracking',
    description:
      'Manage bills of materials, work orders, and shop floor operations from a single screen. Know your real cost per unit before the batch ships.',
    features: [
      'Bills of materials (multi-level)',
      'Work order creation and scheduling',
      'Real-time production costs',
      'Scrap and yield tracking',
      'Shop floor mobile app',
      'Subcontract manufacturing support',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    label: 'Traceability',
    color: 'text-rose-600 bg-rose-50',
    headline: 'Batch & Lot Tracking',
    description:
      'Full chain-of-custody from raw material receipt to customer delivery. Generate a recall report in minutes, not days.',
    features: [
      'Lot and serial number tracking',
      'Expiration date management',
      'Supplier-to-customer traceability',
      'One-click recall reporting',
      'Certificate of analysis (CoA) storage',
      'FDA-ready audit trails',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    label: 'Sales',
    color: 'text-accent-600 bg-accent-50',
    headline: 'B2B Customer Portal',
    description:
      'Give wholesale customers a branded portal to view inventory, submit orders, track shipments, and pay invoices—24/7, without calling you.',
    features: [
      'Branded self-service order portal',
      'Custom price lists per customer',
      'Real-time inventory visibility',
      'Order tracking and history',
      'Online invoice payments',
      'Volume discount support',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    label: 'Warehouse',
    color: 'text-teal-600 bg-teal-50',
    headline: 'Mobile Warehouse Management',
    description:
      'Run your warehouse from any device. Scan barcodes, receive POs, pick orders, and ship—all without touching a desktop.',
    features: [
      'Barcode and QR code scanning',
      'Mobile receiving and putaway',
      'Pick, pack, and ship workflows',
      'Cycle count management',
      'Packing slip and label printing',
      'Works on iOS and Android',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    label: 'Integrations',
    color: 'text-amber-600 bg-amber-50',
    headline: '50+ Integrations',
    description:
      'Connect the tools your team already uses. No ripping and replacing—Brahmin sits at the center and syncs everything.',
    features: [
      'QuickBooks and Xero (accounting)',
      'Shopify and WooCommerce (ecommerce)',
      'ShipStation and EasyPost (shipping)',
      'Amazon and eBay (marketplaces)',
      'EDI and 3PL connections',
      'Open REST API for custom builds',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
]

const quickFeatures = [
  'Demand forecasting', 'Purchase order management', 'Vendor management',
  'Cost accounting', 'Custom reporting', 'User permissions & roles',
  'Multi-currency support', 'Document management', 'Email notifications',
  'Audit logs', 'API access', 'Data import/export',
]

export default function ProductPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Features
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Everything you need.{' '}
            <span className="text-slate-400">Nothing you don&apos;t.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Purpose-built for small manufacturers—not watered-down enterprise software with a SMB price tag.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Feature categories */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl space-y-24">
          {featureCategories.map((cat, i) => (
            <div
              key={cat.label}
              className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold mb-4 ${cat.color}`}>
                  {cat.icon}
                  {cat.label}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  {cat.headline}
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {cat.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} bg-slate-50 rounded-3xl border border-slate-200 aspect-[4/3] flex items-center justify-center`}>
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${cat.color}`}>
                  {cat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional features */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              And More
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Plus everything else you&apos;d expect
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {quickFeatures.map((f) => (
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

      <CTA />
    </main>
  )
}
