import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: '50+ Integrations | Brahmin Solutions',
  description:
    'Connect Brahmin Solutions to QuickBooks, Shopify, Xero, ShipStation, Amazon, WooCommerce, and 50+ other tools. API access available.',
}

const integrationCategories = [
  {
    label: 'Accounting',
    color: 'text-primary-600 bg-primary-50 border-primary-200',
    integrations: [
      { name: 'QuickBooks Online', desc: 'Sync invoices, POs, and COGS automatically.' },
      { name: 'QuickBooks Desktop', desc: 'Two-way sync for legacy QuickBooks users.' },
      { name: 'Xero', desc: 'Real-time financial data sync for Xero users.' },
      { name: 'Sage Intacct', desc: 'Enterprise accounting integration.' },
    ],
  },
  {
    label: 'Ecommerce',
    color: 'text-accent-600 bg-accent-50 border-accent-200',
    integrations: [
      { name: 'Shopify', desc: 'Sync orders, inventory, and products in real-time.' },
      { name: 'WooCommerce', desc: 'Auto-sync WordPress store orders and stock.' },
      { name: 'BigCommerce', desc: 'Keep inventory and orders in sync across channels.' },
      { name: 'Magento', desc: 'Enterprise ecommerce integration.' },
    ],
  },
  {
    label: 'Shipping',
    color: 'text-violet-600 bg-violet-50 border-violet-200',
    integrations: [
      { name: 'ShipStation', desc: 'Push orders and pull tracking automatically.' },
      { name: 'EasyPost', desc: 'Multi-carrier shipping rate comparison.' },
      { name: 'UPS', desc: 'Direct UPS label printing and tracking.' },
      { name: 'FedEx', desc: 'FedEx rate shopping and label generation.' },
    ],
  },
  {
    label: 'Marketplaces',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    integrations: [
      { name: 'Amazon FBA', desc: 'Sync FBA inventory and inbound shipments.' },
      { name: 'Amazon FBM', desc: 'Manage merchant-fulfilled Amazon orders.' },
      { name: 'eBay', desc: 'Keep eBay listings and stock in sync.' },
      { name: 'Walmart Marketplace', desc: 'Fulfill Walmart orders from Brahmin.' },
    ],
  },
  {
    label: '3PL & Logistics',
    color: 'text-teal-600 bg-teal-50 border-teal-200',
    integrations: [
      { name: 'ShipBob', desc: 'Sync inventory and orders with ShipBob.' },
      { name: 'Flexport', desc: 'Track international freight and customs.' },
      { name: 'FreightQuote', desc: 'LTL freight rate comparison and booking.' },
      { name: 'Custom 3PLs', desc: 'EDI and API connections to your 3PL.' },
    ],
  },
  {
    label: 'CRM & Other',
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    integrations: [
      { name: 'HubSpot', desc: 'Sync customer data and order history to CRM.' },
      { name: 'Salesforce', desc: 'Push quote and order data to Salesforce.' },
      { name: 'Zapier', desc: 'Connect to 5,000+ apps with no-code automation.' },
      { name: 'REST API', desc: 'Build custom integrations with our full API.' },
    ],
  },
]

export default function IntegrationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-100 rounded-full opacity-30 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Integrations
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Connect the tools<br />
            <span className="text-slate-400">you already use</span>
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            50+ pre-built integrations. Open API for anything else. No ripping and replacing your existing stack.
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
              className="flex items-center gap-2 border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container mx-auto px-6 max-w-7xl py-8">
          <div className="grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
            {[
              { n: '50+', l: 'Pre-built integrations' },
              { n: 'REST', l: 'Open API' },
              { n: '1 click', l: 'Setup for top tools' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-slate-900">{s.n}</div>
                <div className="text-sm text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration grid */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl space-y-16">
          {integrationCategories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-3 mb-6">
                <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border ${cat.color}`}>
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-transparent hover:border-slate-200 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 mb-3 flex items-center justify-center group-hover:border-slate-300 transition-colors shadow-sm">
                      <span className="text-xs font-bold text-slate-400">{integration.name.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">{integration.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{integration.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API callout */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-primary-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500 rounded-full opacity-50" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-700 rounded-full opacity-50" />
            </div>
            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-200 mb-4">
                Developer API
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Don&apos;t see your tool? Build it yourself.
              </h2>
              <p className="mt-4 text-primary-200 text-lg max-w-xl mx-auto">
                Our REST API gives you full access to inventory, orders, production, and more. Detailed docs, sandbox environment, and dedicated developer support.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
