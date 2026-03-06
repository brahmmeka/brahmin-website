'use client'

import Link from 'next/link'
import { m } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 overflow-hidden">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-900/40 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="relative container mx-auto px-6 max-w-4xl py-24 text-center">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-200 mb-6">
            Get started
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.07]">
            Ready to stop fighting your software?
          </h2>

          <p className="mt-6 text-xl text-primary-100 max-w-xl mx-auto leading-relaxed">
            Book a 30-minute demo. We&apos;ll show you the software with your actual products and workflows.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book your demo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-primary-100 hover:text-white border border-primary-400/50 hover:border-primary-300 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:bg-white/5"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-5 text-primary-300 text-sm">
            No credit card required &middot; 14-day free trial available
          </p>

          {/* Trust signals */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-10">
            {[
              { n: '300+',    l: 'Manufacturers' },
              { n: '21 days', l: 'Avg. go-live'  },
              { n: '<15 min', l: 'Support response' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-white">{s.n}</div>
                <div className="text-xs text-primary-300 mt-0.5 uppercase tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}
