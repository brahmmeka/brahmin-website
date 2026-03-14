import Link from 'next/link'

export default function BlogCTA() {
  return (
    <div className="my-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <div className="flex-1 text-center md:text-left">
        <p className="font-bold text-white text-lg mb-1">
          Ready to get your inventory under control?
        </p>
        <p className="text-slate-400 text-sm">
          See how Brahmin helps manufacturers like you save time and reduce errors.
        </p>
      </div>
      <Link
        href="/demo"
        className="shrink-0 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-accent-500/25"
      >
        Book a demo
      </Link>
    </div>
  )
}
