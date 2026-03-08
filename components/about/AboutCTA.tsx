import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="py-20 bg-accent-500">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Ready to see the difference?
        </h2>
        <p className="mt-4 text-lg text-accent-50 max-w-lg mx-auto leading-relaxed">
          Join 300+ manufacturers who've switched to Brahmin.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/demo"
            className="bg-white text-accent-600 hover:bg-accent-50 px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg"
          >
            Book a demo
          </Link>
          <Link
            href="/features"
            className="border-2 border-white/40 text-white hover:border-white/70 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-base transition-all"
          >
            See the product
          </Link>
        </div>
      </div>
    </section>
  )
}
