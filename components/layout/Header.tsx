import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary-600">
            Brahmin Solutions
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/product" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Product
            </Link>
            <Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Pricing
            </Link>
            <Link href="/integrations" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Integrations
            </Link>
            <Link href="/customers" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Customers
            </Link>
            <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://app.brahmin-solutions.com/login"
              className="text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              Log in
            </a>
            <Link
              href="/demo"
              className="bg-accent-500 hover:bg-accent-600 text-white text-sm px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
