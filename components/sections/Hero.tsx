import Link from 'next/link'

const trustLogos = [
  'Sfoglini Pasta',
  'Bold Distribution',
  'Nefaire',
  'Pacific Foods',
  'Summit Manufacturing',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-accent-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Trust badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            Trusted by 300+ manufacturers since 2015
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight max-w-5xl mx-auto">
          MRP Software With Support{' '}
          <span className="relative">
            <span className="relative z-10 text-primary-600">That Actually</span>
          </span>{' '}
          Picks Up
        </h1>

        {/* Subheadline */}
        <p className="mt-7 text-center text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
          Cloud-based inventory and production management for small manufacturers—backed by a team that knows your business by name.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/demo"
            className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5"
          >
            Book a Demo
          </Link>
          <Link
            href="/product"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg px-8 py-4 rounded-xl border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all"
          >
            See how it works
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Reassurance */}
        <p className="mt-5 text-center text-sm text-slate-400">
          No credit card required &middot; 14-day free trial &middot; Live in 21 days
        </p>

        {/* Trust bar */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Join manufacturers like these
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {trustLogos.map((name) => (
              <span
                key={name}
                className="text-slate-300 font-semibold text-sm tracking-wide select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
