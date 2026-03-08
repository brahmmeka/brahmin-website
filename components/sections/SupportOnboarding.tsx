'use client'

import { m } from 'framer-motion'

const metrics = [
  { value: '<15 min', label: 'Average support response', sub: 'Measured, not estimated', accent: 'text-accent-400', border: 'border-accent-500/30' },
  { value: '3–6 weeks', label: 'Average implementation', sub: 'Not 6 months', accent: 'text-primary-400', border: 'border-primary-500/30' },
  { value: 'Dedicated', label: 'Implementation manager', sub: 'Assigned to you personally', accent: 'text-violet-400', border: 'border-violet-500/30' },
  { value: 'Unlimited', label: 'Training calls included', sub: 'For every plan, forever', accent: 'text-accent-400', border: 'border-accent-500/30' },
  { value: 'Most of the day', label: 'Support coverage', sub: 'Real humans in chat, Mon–Fri', accent: 'text-primary-400', border: 'border-primary-500/30' },
  { value: '2+ features', label: 'New releases per month', sub: 'Based on customer feedback', accent: 'text-violet-400', border: 'border-violet-500/30' },
]

export default function SupportOnboarding() {
  return (
    <section className="py-section bg-slate-900 relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          {/* "Real humans" badge */}
          <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/30 text-accent-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            Real humans. No chatbot.
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            We don&apos;t disappear after the sale
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            Real support from real people — not a ticket queue, not a chatbot, not a help center article. A human who knows your account and replies in the chat.
          </p>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <m.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.08 }}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-2xl border ${metric.border} border-slate-700/50 p-7 hover:bg-slate-800 transition-colors`}
            >
              <div className={`text-4xl font-bold ${metric.accent} mb-1`}>{metric.value}</div>
              <div className="text-sm font-semibold text-slate-300 mb-1">{metric.label}</div>
              <div className="text-xs text-slate-500">{metric.sub}</div>
            </m.div>
          ))}
        </div>

        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Every Brahmin customer gets a dedicated implementation manager, unlimited training, and direct access to our support team — not a tiered support package you have to pay extra for.
        </m.p>
      </div>
    </section>
  )
}
