'use client'

import { useState } from 'react'
import Link from 'next/link'

const benefits = [
  'See the software with your actual products and workflows',
  'Get answers to your specific integration questions',
  'Learn about implementation timeline and what to expect',
  'Talk to someone who knows manufacturing—not just sales',
]

const stats = [
  { n: '30 min', l: 'Demo length' },
  { n: '15 min', l: 'Support response' },
  { n: '21 days', l: 'Avg. go-live' },
]

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    currentSoftware: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl" />
          <div className="absolute top-20 -left-20 w-72 h-72 bg-accent-100 rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div className="lg:pt-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                Book a Demo
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                See Brahmin with your actual products
              </h1>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Book a 30-minute personalized demo. We&apos;ll show you the software with your actual workflows—not a canned slide deck.
              </p>

              <ul className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.l} className="bg-white rounded-2xl border border-slate-200 p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-slate-900">{s.n}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="mt-10 bg-primary-50 border border-primary-200 rounded-2xl p-6">
                <blockquote className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;Within the first 30 minutes of the demo, I knew this was the right fit. They knew exactly what questions to ask and didn&apos;t waste our time.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-xs font-bold">SF</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Sarah F.</div>
                    <div className="text-xs text-slate-500">Operations Manager, Sfoglini Pasta</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">You&apos;re on the calendar!</h2>
                  <p className="text-slate-500 mb-6">
                    We&apos;ll reach out within 1 business day to confirm a time. Check your email for a confirmation.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                  >
                    ← Back to home
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Request your demo</h2>
                  <p className="text-sm text-slate-500 mb-8">No credit card required. We&apos;ll reach out within 1 business day.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
                          First name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Jane"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Last name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Work email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Manufacturing"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="employees" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Team size
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={form.employees}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white"
                        >
                          <option value="">Select...</option>
                          <option value="1-5">1–5</option>
                          <option value="6-25">6–25</option>
                          <option value="26-50">26–50</option>
                          <option value="51+">51+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="currentSoftware" className="block text-sm font-medium text-slate-700 mb-1.5">
                        What are you currently using?
                      </label>
                      <select
                        id="currentSoftware"
                        name="currentSoftware"
                        value={form.currentSoftware}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="spreadsheets">Spreadsheets / Excel</option>
                        <option value="katana">Katana</option>
                        <option value="fishbowl">Fishbowl</option>
                        <option value="cin7">Cin7</option>
                        <option value="other">Other MRP/ERP</option>
                        <option value="nothing">Nothing yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Anything specific you want to see?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g. batch tracking for food manufacturing, Shopify integration..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
                    >
                      Request My Demo →
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      No credit card required &middot; We respond within 1 business day
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
