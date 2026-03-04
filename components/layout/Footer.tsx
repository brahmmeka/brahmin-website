import Link from 'next/link'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Book a Demo', href: '/demo' },
  ],
  Industries: [
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Food & Beverage', href: '/food-beverage' },
    { label: 'Wholesale Distribution', href: '/wholesale-distribution' },
  ],
  Compare: [
    { label: 'vs Katana', href: '/compare/katana' },
    { label: 'vs Fishbowl', href: '/compare/fishbowl' },
    { label: 'vs Cin7', href: '/compare/cin7' },
    { label: 'vs Spreadsheets', href: '/compare/spreadsheets' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Customers', href: '/customers' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Brahmin Solutions
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Cloud-based MRP and inventory management for small manufacturers.
            </p>
            <p className="mt-4 text-sm text-slate-500">Starting at $129/month</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Brahmin Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
