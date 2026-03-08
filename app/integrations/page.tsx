import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Integrations | Brahmin Solutions',
  description:
    'Connect Brahmin to QuickBooks, Xero, Shopify, WooCommerce, BigCommerce, Faire, ShipStation, SPS Commerce, and thousands more via Zapier.',
}

const nativeIntegrations = [
  {
    label: 'Accounting',
    color: 'text-primary-600 bg-primary-50 border-primary-200',
    integrations: [
      {
        name: 'QuickBooks Online',
        abbr: 'QB',
        logo: '/images/integrations/quickbooks.png',
        desc: 'Sync invoices, purchase orders, bills, and COGS automatically — no double entry.',
      },
      {
        name: 'Xero',
        abbr: 'XE',
        logo: '/images/integrations/xero.png',
        desc: 'Real-time financial sync for Xero users. Invoices, POs, and inventory values stay in step.',
      },
    ],
  },
  {
    label: 'Ecommerce',
    color: 'text-accent-600 bg-accent-50 border-accent-200',
    integrations: [
      {
        name: 'Shopify',
        abbr: 'SH',
        logo: '/images/integrations/shopify.png',
        desc: 'Sync orders, inventory levels, and product data in real-time as sales come in.',
      },
      {
        name: 'WooCommerce',
        abbr: 'WC',
        logo: null,
        desc: 'Pull WordPress store orders and push live stock counts back automatically.',
      },
      {
        name: 'BigCommerce',
        abbr: 'BC',
        logo: null,
        desc: 'Keep inventory and orders in sync across your BigCommerce storefront.',
      },
    ],
  },
  {
    label: 'Wholesale & EDI',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    integrations: [
      {
        name: 'Faire',
        abbr: 'FA',
        logo: '/images/integrations/faire.png',
        desc: 'Sync Faire wholesale orders directly into Brahmin. No copy-paste, no delays.',
      },
      {
        name: 'SPS Commerce',
        abbr: 'SP',
        logo: '/images/integrations/sps.png',
        desc: 'EDI integration for selling to big-box retailers — Target, Walmart, Costco, and more.',
      },
    ],
  },
  {
    label: 'Shipping',
    color: 'text-violet-600 bg-violet-50 border-violet-200',
    integrations: [
      {
        name: 'ShipStation',
        abbr: 'SS',
        logo: '/images/integrations/shipstation.png',
        desc: 'Push orders to ShipStation for fulfillment and pull tracking numbers back automatically.',
      },
    ],
  },
]

const zapierExamples = [
  'Slack — get notified when stock falls below reorder point',
  'Gmail / Outlook — auto-email customers when orders ship',
  'Google Sheets — export reports on any schedule',
  'HubSpot / Salesforce — sync order history to your CRM',
  'Airtable — mirror production data to your ops team',
  'Typeform / Jotform — turn form submissions into sales orders',
  'SMS via Twilio — text alerts for low inventory or late POs',
  'Monday.com / Asana — sync production tasks to your PM tool',
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
            Native integrations with the tools manufacturers use most — plus 5,000+ more via Zapier. No ripping and replacing your stack.
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
              className="flex items-center gap-2 border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container mx-auto px-6 max-w-7xl py-8">
          <div className="grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
            {[
              { n: '8', l: 'Native integrations' },
              { n: '5,000+', l: 'Apps via Zapier' },
              { n: 'API', l: 'Beta — contact us' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-slate-900">{s.n}</div>
                <div className="text-sm text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Native integration grid */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Native integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Built-in connections, zero setup headaches
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              These integrations are native — meaning they&apos;re maintained by our team, two-way where it matters, and work out of the box.
            </p>
          </div>

          <div className="space-y-12">
            {nativeIntegrations.map((cat) => (
              <div key={cat.label}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border ${cat.color}`}>
                    {cat.label}
                  </span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.integrations.map((integration) => (
                    <div
                      key={integration.name}
                      className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-transparent hover:border-slate-200 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="w-20 h-20 bg-white rounded-xl border border-slate-200 mb-4 flex items-center justify-center group-hover:border-slate-300 transition-colors shadow-sm p-3">
                        {integration.logo ? (
                          <Image
                            src={integration.logo}
                            alt={integration.name}
                            width={72}
                            height={72}
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <span className="text-sm font-bold text-slate-400">{integration.abbr}</span>
                        )}
                      </div>
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">{integration.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{integration.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zapier section */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4">
                Zapier
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Connect anything else with Zapier
              </h2>
              <p className="text-lg text-slate-500 mb-6">
                Brahmin connects to Zapier, which means you can build automated workflows between Brahmin and 5,000+ other apps — no code required.
              </p>
              <p className="text-slate-500 mb-8">
                Set up triggers and actions in minutes: when something happens in Brahmin, do something in another app — and vice versa.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Ask us about your stack
              </Link>
            </div>

            {/* Right — example automations */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                <p className="text-sm font-semibold text-slate-700">Example Zapier automations</p>
                <p className="text-xs text-slate-400 mt-0.5">What manufacturers actually use Zapier for</p>
              </div>
              <ul className="divide-y divide-slate-100">
                {zapierExamples.map((example) => {
                  const [app, ...rest] = example.split(' — ')
                  return (
                    <li key={example} className="flex items-start gap-3 px-6 py-3.5">
                      <svg className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm text-slate-600">
                        <span className="font-semibold text-slate-800">{app}</span>
                        {' — '}
                        {rest.join(' — ')}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API callout */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-primary-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500 rounded-full opacity-50" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-700 rounded-full opacity-50" />
            </div>
            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-200 mb-4">
                API — in beta
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Need something custom?
              </h2>
              <p className="mt-4 text-primary-200 text-lg max-w-xl mx-auto">
                Our REST API is currently in beta. If you have a custom integration need — an in-house system, a niche tool, or a proprietary workflow — reach out. We work directly with customers to get their stack connected.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
