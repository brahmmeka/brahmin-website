import Link from 'next/link'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
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
    <footer className="bg-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top section */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-10">
          {/* Brand col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary-600 rounded-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">Brahmin Solutions</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Cloud-based MRP and inventory management for small to mid-sized manufacturers.
            </p>
            <div className="mt-5 space-y-1.5">
              <p className="text-xs text-slate-500">Starting at <span className="text-slate-300 font-semibold">$199/month</span></p>
              <p className="text-xs text-slate-500">Founded <span className="text-slate-300">2015</span> &middot; 300+ customers</p>
            </div>

            {/* CTA */}
            <Link
              href="/demo"
              className="inline-block mt-6 bg-accent-500 hover:bg-accent-600 text-white text-sm px-5 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
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

        {/* Divider */}
        <div className="border-t border-slate-800" />

        {/* Bottom section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Brahmin Solutions, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
