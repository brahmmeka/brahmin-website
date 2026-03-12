import Link from 'next/link'

export default function BlogCTA() {
  return (
    <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 my-8 text-center">
      <p className="font-semibold text-slate-900">
        Ready to get your inventory under control?
      </p>
      <Link
        href="/demo"
        className="inline-block mt-3 bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
      >
        Book a demo
      </Link>
    </div>
  )
}
