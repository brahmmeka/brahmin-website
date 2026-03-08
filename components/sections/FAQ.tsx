'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'What is Brahmin Solutions?',
    a: 'Brahmin Solutions is cloud-based MRP and inventory management software built for small to mid-sized manufacturers. We help 300+ manufacturing businesses track inventory, manage production, and sell across multiple channels—with support that actually picks up the phone.',
  },
  {
    q: 'How much does Brahmin Solutions cost?',
    a: 'Brahmin Solutions starts at $199/month. Pricing scales based on features and users. Unlike some competitors, we don\'t charge per-user fees or per-transaction fees. Advanced features are available as add-ons. See our pricing page for details.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Average implementation is 3–6 weeks with a dedicated implementation manager. We handle data migration from spreadsheets or other systems and train your team — no 6-month enterprise rollouts.',
  },
  {
    q: 'What integrations does Brahmin Solutions support?',
    a: 'Brahmin Solutions integrates with 50+ tools including QuickBooks, Xero, Shopify, WooCommerce, ShipStation, and more. We also offer API access for custom integrations.',
  },
  {
    q: 'Is Brahmin Solutions good for food manufacturers?',
    a: 'Yes. Brahmin Solutions includes full lot traceability, batch tracking, expiration date management, and recall-readiness features. We serve food, beverage, cosmetics, and supplement manufacturers who need FDA-compliant tracking.',
  },
  {
    q: 'How is Brahmin Solutions different from Katana or Cin7?',
    a: 'Three main differences: (1) Support that responds in 15 minutes vs. days, (2) Simpler interface without the bloat, and (3) Transparent pricing without per-order fees. We\'re built specifically for small manufacturers who need powerful features without enterprise complexity.',
  },
  {
    q: 'Can I track inventory across multiple warehouses?',
    a: 'Yes. Brahmin Solutions supports multi-location inventory tracking, including 3PLs and co-manufacturers. You see real-time stock levels across every location from one dashboard.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'We offer a 14-day free trial. You can also book a demo to see the software with your actual use case before committing.',
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-section bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our team responds in 15 minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                Book a demo
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white px-6 py-3 rounded-xl font-medium text-sm transition-colors"
              >
                See all FAQs
              </Link>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
