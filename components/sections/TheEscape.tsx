'use client'

import { m } from 'framer-motion'

const EyeIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const RocketIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const PersonIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
)

const pillars = [
  {
    step: '01',
    icon: <EyeIcon />,
    iconBg: 'bg-primary-600 text-white',
    headline: 'See everything in one place',
    body: 'Inventory, production, orders, and costs — unified in a single dashboard. No more tab-switching between five systems.',
  },
  {
    step: '02',
    icon: <RocketIcon />,
    iconBg: 'bg-accent-500 text-white',
    headline: 'Live in weeks, not quarters',
    body: 'Average implementation is 3–6 weeks with a dedicated manager. We migrate your data, train your team, and get you live fast.',
  },
  {
    step: '03',
    icon: <PersonIcon />,
    iconBg: 'bg-violet-600 text-white',
    headline: "A team that doesn't disappear",
    body: 'Real support from real people — under 15 minutes response time, unlimited training, and a dedicated manager who knows your operation.',
  },
]

export default function TheEscape() {
  return (
    <section className="py-section relative overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50/30 to-accent-50/20">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 opacity-60" />

      <div className="container mx-auto px-6 max-w-7xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">The Brahmin difference</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            This is what &ldquo;just right&rdquo; looks like
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Powerful enough for complex manufacturing operations. Simple enough that your whole team will actually use it.
          </p>
        </m.div>

        {/* Pillars with connector */}
        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-primary-200 via-accent-200 to-violet-200 z-0" />

          {pillars.map((pillar, i) => (
            <m.div
              key={pillar.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.12 }}
              className="relative z-10 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:shadow-primary-50 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {/* Step number */}
              <div className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">{pillar.step}</div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${pillar.iconBg} mb-6 shadow-lg`}>
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.headline}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{pillar.body}</p>

              {/* Checkmark accent */}
              <div className="mt-5 flex justify-center">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
