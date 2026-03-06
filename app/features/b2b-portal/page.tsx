import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'B2B Wholesale Portal | Brahmin Solutions',
  description:
    'Let wholesale customers place orders 24/7. Custom pricing, order history, and one-click reordering.',
}

const allFeatures = [
  'Branded customer ordering portal',
  'Customer-specific price lists',
  'Volume discount pricing',
  'Self-service order placement',
  'Real-time inventory visibility',
  'Order history and reordering',
  'Standing / recurring orders',
  'Order cutoff times',
  'Invoice generation and PDF download',
  'Online payment processing',
  'Shipment tracking per order',
  'Custom product catalog per customer',
  'Minimum order quantity enforcement',
  'Order approval workflows',
  'Customer portal login management',
]

const related = [
  { href: '/features/inventory', label: 'Inventory Management', desc: 'Customers see live stock levels in the portal' },
  { href: '/features/warehouse', label: 'Warehouse Management', desc: 'Orders from the portal flow into pick/pack workflows' },
  { href: '/features/mobile', label: 'Mobile App', desc: 'Pick and ship B2B orders from your phone' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function PortalMockup() {
  const items = [
    { name: 'Organic Maple Granola 12oz', sku: 'GRN-001', price: '$4.80', qty: 24, inStock: true },
    { name: 'Wild Berry Granola 12oz', sku: 'GRN-002', price: '$4.80', qty: 12, inStock: true },
    { name: 'Dark Chocolate Granola 12oz', sku: 'GRN-003', price: '$5.20', qty: 6, inStock: false },
  ]
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-900 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-semibold text-white">Brahmin — Wholesale Portal</span>
        </div>
        <span className="text-xs text-slate-400">Whole Foods Market</span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Your product catalog</p>
        <div className="space-y-2 mb-4">
          {items.map((item) => (
            <div key={item.sku} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{item.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-400">{item.sku}</span>
                  <span className={`text-xs font-medium ${item.inStock ? 'text-emerald-600' : 'text-red-500'}`}>
                    {item.inStock ? '● In stock' : '○ Out of stock'}
                  </span>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-700 shrink-0">{item.price}/unit</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button className="w-6 h-6 rounded bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center hover:bg-slate-200">−</button>
                <span className="text-sm font-semibold text-slate-900 w-6 text-center">{item.qty}</span>
                <button className="w-6 h-6 rounded bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center hover:bg-slate-200">+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Order total</p>
            <p className="font-bold text-slate-900">$207.20 · 42 units</p>
          </div>
          <button className="bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Place order
          </button>
        </div>
      </div>
    </div>
  )
}

function PricingMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Customer price lists</p>
      <div className="space-y-3">
        {[
          { customer: 'Whole Foods Market', tier: 'Platinum', discount: '20% off retail', products: 'Full catalog' },
          { customer: 'Sprouts Farmers Market', tier: 'Gold', discount: '15% off retail', products: 'Full catalog' },
          { customer: 'Local Co-op', tier: 'Standard', discount: '10% off retail', products: 'Selected SKUs' },
          { customer: 'Online Direct', tier: 'Retail', discount: 'Full retail price', products: 'All SKUs' },
        ].map((c) => (
          <div key={c.customer} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div>
              <p className="text-sm font-semibold text-slate-900">{c.customer}</p>
              <p className="text-xs text-slate-400 mt-0.5">{c.products}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-primary-600">{c.discount}</p>
              <span className="text-xs text-slate-400">{c.tier}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function B2BPortalPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/features" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Features</Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-indigo-600">B2B Portal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              24/7 wholesale ordering portal
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Give wholesale customers a branded portal to browse your catalog, place orders, and track shipments — any time, without calling you or filling out a form.
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
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-4">Self-service ordering</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Let customers order without the back-and-forth
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Your wholesale customers get a private portal with their products, their pricing, and live stock levels. They can place orders at 2am — you wake up to a confirmed order, not an email thread.
              </p>
              <ul className="mt-8 space-y-3">
                {['Customers see only their assigned product catalog', 'Real-time stock availability shown in portal', 'One-click reorder from previous order history', 'Standing orders for repeat weekly or monthly orders'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            <PortalMockup />
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <PricingMockup />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-4">Custom pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Every customer sees their price
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Set custom price lists per customer or tier — and Brahmin shows each buyer exactly what they pay. No confusion, no awkward conversations about pricing, no manual invoicing errors.
              </p>
              <ul className="mt-8 space-y-3">
                {['Customer-specific price lists (by percent off or fixed price)', 'Volume discount tiers per customer', 'Custom product catalog visibility per account', 'Minimum order quantities enforceable per customer'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-4">Order management</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Orders flow straight into your workflow
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                When a customer places an order in the portal, it lands in Brahmin automatically — ready for picking, packing, and shipping. No copying, no double-entry, no missed orders.
              </p>
              <ul className="mt-8 space-y-3">
                {['Portal orders appear in Brahmin instantly', 'Automatic invoice generation on order confirmation', 'Customer gets email confirmation with order summary', 'Track shipment status visible to customers in portal'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            {/* Order tracking mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Order history — Whole Foods Market</p>
              <div className="space-y-2">
                {[
                  { id: 'SO-7291', date: 'Feb 18', total: '$207.20', status: 'Delivered', statusColor: 'bg-emerald-100 text-emerald-700' },
                  { id: 'SO-7204', date: 'Feb 4', total: '$344.80', status: 'Delivered', statusColor: 'bg-emerald-100 text-emerald-700' },
                  { id: 'SO-7140', date: 'Jan 21', total: '$186.60', status: 'Delivered', statusColor: 'bg-emerald-100 text-emerald-700' },
                ].map((o) => (
                  <div key={o.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{o.id}</p>
                      <p className="text-xs text-slate-400">{o.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">{o.total}</p>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${o.statusColor}`}>{o.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full text-sm font-semibold text-primary-600 border border-primary-200 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
                Reorder from SO-7291
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
            <h2 className="text-3xl font-bold text-slate-900">Everything included in the B2B portal</h2>
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
            "Brahmin syncs to all our systems and handles batch tracking, order capture, and fulfillment — everything we need in one place. Our wholesale buyers love the self-service portal."
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
