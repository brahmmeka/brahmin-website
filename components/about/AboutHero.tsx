import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl bg-slate-100 flex items-center justify-center">
                {/* Swap src with real headshot: /images/brahm-meka.jpg */}
                <div className="text-center px-8">
                  <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary-600">BM</span>
                  </div>
                  <p className="text-sm text-slate-400">Brahm Meka</p>
                  <p className="text-xs text-slate-300 mt-1">Photo coming soon</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-5 py-3">
                <p className="text-xs font-bold text-accent-600 uppercase tracking-widest">Independently owned</p>
                <p className="text-xs text-slate-400 mt-0.5">Serving customers since 2019 · 0 VC investors</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
              Est. 2019 &middot; 300+ manufacturers &middot; Independently owned
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              I built Brahmin because small manufacturers deserve enterprise-grade tools — without the enterprise price or complexity.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              I'm Brahm Meka, founder and CEO. After building warehouse systems for Fortune 1000 companies, I saw the gap firsthand: big companies had data as a competitive advantage, while small manufacturers were flying blind on spreadsheets.
            </p>
            <p className="mt-5 text-base font-semibold text-slate-700 border-l-2 border-primary-300 pl-4">
              — Brahm Meka, Founder &amp; CEO
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
