import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brahmin Solutions | MRP Software for Small Manufacturers',
  description:
    'Cloud-based MRP and inventory software for small manufacturers. Production tracking, multi-location inventory, and support that responds in 15 minutes. Free trial.',
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-section">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
            Trusted by 300+ manufacturers since 2015
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            MRP Software With Support<br className="hidden md:block" /> That Actually Picks Up
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cloud-based inventory and production management for small manufacturers—backed by a team that knows your business by name.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/product"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Built for how you actually work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Making products in-house?',
                body: 'Track production, BOMs, and real-time costs across your shop floor. Know exactly what\'s being made, what it costs, and when it ships.',
              },
              {
                title: 'Working with co-manufacturers or 3PLs?',
                body: 'See inventory across every warehouse—even ones you don\'t own. Sync with partners without spreadsheet chaos.',
              },
              {
                title: 'Selling wholesale and direct-to-consumer?',
                body: 'Sync with Shopify, manage custom price lists, and let B2B customers order 24/7 through your portal.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Differentiator */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Support that doesn&apos;t make you want to throw your laptop
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Most MRP vendors sell you software and disappear. We stick around.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15 min', label: 'Average response time', sub: '(Yes, really. We measured.)' },
              { number: '21 days', label: 'Average implementation', sub: 'Not 6 months. Not "it depends."' },
              { number: '1:1', label: 'Dedicated manager', sub: 'Your own implementation human.' },
              { number: '24/7', label: 'Human support', sub: 'Not a chatbot. Actual people.' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-600">{stat.number}</div>
                <div className="mt-2 font-semibold text-slate-900">{stat.label}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switching From */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Switching from?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Katana', text: 'Frustrated with Katana? Get support that actually responds—in 15 minutes, not 3 days.', href: '/compare/katana' },
              { name: 'Fishbowl', text: 'Outgrowing Fishbowl? Move to cloud without losing your production tracking.', href: '/compare/fishbowl' },
              { name: 'Cin7', text: 'Cin7 too complex (and expensive)? Same features. Simpler interface. Better price.', href: '/compare/cin7' },
              { name: 'Spreadsheets', text: 'Still on spreadsheets? We\'ll migrate your data and get you live in 21 days.', href: '/compare/spreadsheets' },
            ].map((item) => (
              <div key={item.name} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-slate-600 text-sm mb-3">{item.text}</p>
                <Link href={item.href} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  See the comparison →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Multi-Location Inventory', desc: 'Track stock across warehouses, 3PLs, and co-manufacturers in real-time.' },
              { title: 'Production Tracking', desc: 'See what\'s being made, by whom, and at what cost—down to the work order.' },
              { title: '50+ Integrations', desc: 'Connect QuickBooks, Shopify, ShipStation, and the tools you already use.' },
              { title: 'Batch & Lot Tracking', desc: 'Full traceability from raw materials to finished goods. Recall-ready in minutes.' },
              { title: 'B2B Customer Portal', desc: 'Let wholesale customers see inventory, place orders, and pay—24/7.' },
              { title: 'Mobile Warehouse', desc: 'Receive, pick, pack, and ship from any device with barcode scanning.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/product" className="text-primary-600 hover:text-primary-700 font-semibold">
              See all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-primary-600">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to stop fighting your software?
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Book a 30-minute demo. We&apos;ll show you the software with your actual products and workflows.
          </p>
          <Link
            href="/demo"
            className="bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Book Your Demo
          </Link>
          <p className="mt-4 text-sm text-primary-200">
            No credit card required. 14-day free trial available.
          </p>
        </div>
      </section>
    </main>
  )
}
