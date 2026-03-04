import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative overflow-hidden bg-primary-600 rounded-3xl px-8 py-16 md:px-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500 rounded-full opacity-50" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-700 rounded-full opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full" />
          </div>

          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-200 mb-6">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to stop fighting your software?
            </h2>
            <p className="mt-5 text-lg text-primary-100 max-w-xl mx-auto leading-relaxed">
              Book a 30-minute demo. We&apos;ll show you the software with your actual products and workflows.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-accent-500 hover:bg-accent-600 text-white px-9 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-accent-500/30 hover:shadow-accent-500/50 hover:-translate-y-0.5"
              >
                Book Your Demo
              </Link>
              <Link
                href="/pricing"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-9 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
              >
                See Pricing
              </Link>
            </div>

            <p className="mt-6 text-sm text-primary-200">
              No credit card required &middot; 14-day free trial available
            </p>

            {/* Trust signals */}
            <div className="mt-12 pt-10 border-t border-primary-500/50 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { n: '300+', l: 'Manufacturers' },
                { n: '21 days', l: 'Avg. go-live' },
                { n: '15 min', l: 'Support response' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-white">{s.n}</div>
                  <div className="text-xs text-primary-200 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
