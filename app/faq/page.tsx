'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'

const faqCategories = [
  {
    label: 'General',
    faqs: [
      {
        q: 'What is Brahmin Solutions?',
        a: 'Brahmin Solutions is cloud-based MRP and inventory management software built for small to mid-sized manufacturers. Founded in 2015, we help 300+ manufacturing businesses track inventory, manage production, and sell across multiple channels—with support that actually picks up the phone.',
      },
      {
        q: 'Who is Brahmin Solutions built for?',
        a: 'We\'re built for small to mid-sized manufacturers—typically companies with up to $50M in revenue who need powerful features without the complexity and cost of enterprise ERP systems like SAP or NetSuite.',
      },
      {
        q: 'Is Brahmin Solutions cloud-based?',
        a: 'Yes. Brahmin Solutions is fully cloud-based. There\'s nothing to install, no servers to maintain, and your data is accessible from any device with a browser.',
      },
      {
        q: 'What industries does Brahmin Solutions serve?',
        a: 'We primarily serve manufacturers in food & beverage, cosmetics, supplements, apparel, electronics, and general manufacturing. We also work with wholesale distributors and brands that manufacture and sell direct-to-consumer.',
      },
    ],
  },
  {
    label: 'Pricing',
    faqs: [
      {
        q: 'How much does Brahmin Solutions cost?',
        a: 'Brahmin Solutions starts at $129/month. Pricing scales based on features and users. Unlike some competitors, we don\'t charge per-transaction fees or nickel-and-dime you with expensive add-ons. See our pricing page for details.',
      },
      {
        q: 'Do you charge per order or per transaction?',
        a: 'No. We charge a flat monthly fee regardless of how many orders you process. This is different from some competitors who charge per order or per shipment.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes. We offer a 14-day free trial with full feature access. No credit card required to start.',
      },
      {
        q: 'Do you offer annual pricing?',
        a: 'Yes. Annual plans include a discount equivalent to 2 months free. Ask your implementation manager for annual pricing.',
      },
    ],
  },
  {
    label: 'Implementation',
    faqs: [
      {
        q: 'How long does implementation take?',
        a: 'Average implementation is 2–6 weeks with a dedicated implementation manager. We handle data migration from spreadsheets or other systems and train your team — no 6-month enterprise rollouts.',
      },
      {
        q: 'Do I get a dedicated implementation manager?',
        a: 'Growth and Scale plan customers get a dedicated 1:1 implementation manager from day one—before you even sign the contract. Starter plan customers get structured onboarding resources and access to our 15-minute support team.',
      },
      {
        q: 'Can you migrate my data from spreadsheets?',
        a: 'Yes. We handle data migration as part of implementation. We\'ll work with your existing spreadsheets, CSVs, or exports from other systems to get your data into Brahmin accurately.',
      },
      {
        q: 'Can you migrate from Katana, Fishbowl, or Cin7?',
        a: 'Yes. We have migration playbooks for the most common platforms. We\'ll map your existing data structure and import your inventory, BOMs, customers, and historical orders.',
      },
    ],
  },
  {
    label: 'Features',
    faqs: [
      {
        q: 'Can I track inventory across multiple warehouses?',
        a: 'Yes. Brahmin Solutions supports multi-location inventory tracking, including 3PLs and co-manufacturers. You see real-time stock levels across every location from one dashboard.',
      },
      {
        q: 'Is Brahmin Solutions good for food manufacturers?',
        a: 'Yes. Brahmin Solutions includes full lot traceability, batch tracking, expiration date management, and recall-readiness features. We serve food, beverage, cosmetics, and supplement manufacturers who need FDA-compliant tracking.',
      },
      {
        q: 'Does it have a B2B customer portal?',
        a: 'Yes. The B2B portal lets wholesale customers view inventory, place orders, track shipments, and pay invoices—24/7, without calling your team.',
      },
      {
        q: 'Does it work on mobile?',
        a: 'Yes. Our mobile warehouse app works on iOS and Android. Warehouse staff can receive POs, pick orders, run cycle counts, and ship—all from a phone or tablet with barcode scanning.',
      },
    ],
  },
  {
    label: 'Integrations',
    faqs: [
      {
        q: 'What integrations does Brahmin Solutions support?',
        a: 'Brahmin Solutions integrates with 50+ tools including QuickBooks, Xero, Shopify, WooCommerce, ShipStation, Amazon, eBay, and more. We also offer API access for custom integrations.',
      },
      {
        q: 'Does it integrate with QuickBooks?',
        a: 'Yes. We support both QuickBooks Online and QuickBooks Desktop with two-way sync for invoices, purchase orders, payments, and COGS.',
      },
      {
        q: 'Does it integrate with Shopify?',
        a: 'Yes. Our Shopify integration syncs orders, inventory levels, and product data in real-time. You can manage fulfillment from Brahmin and push tracking back to Shopify automatically.',
      },
      {
        q: 'Do you have an API?',
        a: 'Yes. We offer a full REST API with documentation and sandbox access. You can build custom integrations or connect to tools not on our pre-built list.',
      },
    ],
  },
  {
    label: 'Support',
    faqs: [
      {
        q: 'How is Brahmin Solutions different from Katana or Cin7?',
        a: 'Three main differences: (1) Support that responds in 15 minutes vs. days, (2) Simpler interface without the bloat, and (3) Transparent pricing without per-order fees. We\'re built specifically for small manufacturers who need powerful features without enterprise complexity.',
      },
      {
        q: 'What does "15-minute support response" mean?',
        a: 'Our average response time for support tickets is 15 minutes during business hours. This is measured and tracked. You\'re not submitting to a ticketing black hole—you\'re reaching a team member who knows your account.',
      },
      {
        q: 'Is support available 24/7?',
        a: 'Yes. We offer 24/7 human support—not a chatbot. After-hours support is handled by on-call team members for urgent issues.',
      },
    ],
  },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-primary-200 shadow-sm shadow-primary-100' : 'border-slate-200 hover:border-slate-300'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors ${isOpen ? 'text-primary-700' : 'text-slate-900'}`}>
          {q}
        </span>
        <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  function toggle(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            FAQ
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
            Frequently asked<br />
            <span className="text-slate-400">questions</span>
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team responds in 15 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demo"
              className="bg-accent-500 hover:bg-accent-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-accent-500/25"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50 px-7 py-3.5 rounded-xl font-semibold transition-all"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.label}>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-primary-600" />
                {cat.label}
              </h2>
              <div className="space-y-3">
                {cat.faqs.map((faq) => {
                  const key = `${cat.label}-${faq.q}`
                  return (
                    <FAQItem
                      key={key}
                      q={faq.q}
                      a={faq.a}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggle(key)}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-primary-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500 rounded-full opacity-50" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-700 rounded-full opacity-50" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white">Still have questions?</h2>
              <p className="mt-3 text-primary-200 text-lg max-w-md mx-auto">
                Our team responds in 15 minutes. Book a demo or reach out directly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
                >
                  Book a Demo
                </Link>
                <Link
                  href="mailto:support@brahmin-solutions.com"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold transition-all"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
