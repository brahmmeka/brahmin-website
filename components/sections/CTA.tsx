'use client'

import Link from 'next/link'
import { m } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative bg-primary-600 overflow-hidden">
      {/* Wave top edge */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" className="w-full h-10 fill-white" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-500 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-700 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-4xl py-24 text-center">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.07]">
            Ready to make the switch?
          </h2>
          <p className="mt-6 text-xl text-primary-100 max-w-xl mx-auto leading-relaxed">
            Book a 30-minute demo and see Brahmin with your actual products, workflows, and team. No slides. No sales pitch.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/demo"
              className="relative inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white px-6 py-3 md:px-10 md:py-5 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-accent-500/40 hover:shadow-accent-400/60 hover:-translate-y-1 active:translate-y-0"
            >
              {/* Pulsing ring */}
              <span className="absolute inset-0 rounded-xl animate-ping bg-accent-400 opacity-20" />
              Book your demo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <p className="mt-5 text-primary-200 text-sm">
            Talk to a real person. See real software. Decide for yourself.
          </p>

          {/* Trust signals */}
          <div className="mt-12 pt-8 border-t border-primary-500/40 flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { n: '300+', l: 'Manufacturers' },
              { n: '3–6 weeks', l: 'Avg. go-live' },
              { n: '<15 min', l: 'Support response' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-white">{s.n}</div>
                <div className="text-xs text-primary-300 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}
