'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What happens after I submit the form?',
    a: 'A member of our team will read your message and reply directly — typically within one business day. You won\'t get a canned autoresponder or a ticket number; you\'ll hear from a real person who knows the product.',
  },
  {
    q: 'How fast will I hear back?',
    a: 'For general inquiries and demo requests, expect a reply within one business day (usually faster). If you\'re an existing customer reaching out for support, our dedicated team responds in under 15 minutes on average.',
  },
  {
    q: 'What does the demo cover?',
    a: 'A Brahmin demo is a live walkthrough of the software using your actual product types and workflows — not a generic slide deck. We\'ll show you the features most relevant to your operation and answer every question you have. Most demos run 30–45 minutes.',
  },
  {
    q: 'Do you work with companies in my industry?',
    a: 'Brahmin works best with small and mid-sized manufacturers — food & beverage, cosmetics, supplements, apparel, wholesale distribution, and general manufacturing. If you\'re unsure whether we\'re a fit, just ask. We\'ll tell you honestly.',
  },
]

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-xl overflow-hidden transition-all ${
            open === i ? 'border-primary-200 shadow-sm shadow-primary-100' : 'border-slate-200'
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="text-sm font-semibold text-slate-800">{faq.q}</span>
            <span
              className={`shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center transition-transform ${
                open === i ? 'rotate-180' : ''
              }`}
            >
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {open === i && (
            <p className="text-slate-600 text-sm leading-relaxed px-6 pb-5">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
