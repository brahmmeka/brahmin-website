'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const industries = [
  { label: 'Manufacturing', href: '/manufacturing', desc: 'In-house production tracking' },
  { label: 'Food & Beverage', href: '/food-beverage', desc: 'Lot traceability & compliance' },
  { label: 'Wholesale Distribution', href: '/wholesale-distribution', desc: 'Multi-warehouse & B2B portal' },
]

const resources = [
  { label: 'Blog', href: '/blog', desc: 'Tips and industry insights' },
  { label: 'Customers', href: '/customers', desc: 'Real manufacturer stories' },
  { label: 'FAQ', href: '/faq', desc: 'Common questions answered' },
  { label: 'Integrations', href: '/integrations', desc: '50+ tools we connect to' },
]

function Dropdown({ label, items }: { label: string; items: { label: string; href: string; desc: string }[] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45" />
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex flex-col px-4 py-2.5 hover:bg-slate-50 transition-colors"
            >
              <span className="text-sm font-medium text-slate-900">{item.label}</span>
              <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 bg-primary-600 rounded-md flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-900">Brahmin Solutions</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/product" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Product
            </Link>
            <Dropdown label="Industries" items={industries} />
            <Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Pricing
            </Link>
            <Dropdown label="Resources" items={resources} />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.brahmin-solutions.com/login"
              className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Log in
            </a>
            <Link
              href="/demo"
              className="bg-accent-500 hover:bg-accent-600 text-white text-sm px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-sm"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-1">
            <Link href="/product" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Product</Link>
            <div className="py-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Industries</p>
              {industries.map(i => (
                <Link key={i.href} href={i.href} onClick={() => setMobileOpen(false)} className="block py-1.5 pl-3 text-sm text-slate-600 hover:text-slate-900">{i.label}</Link>
              ))}
            </div>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Pricing</Link>
            <div className="py-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Resources</p>
              {resources.map(i => (
                <Link key={i.href} href={i.href} onClick={() => setMobileOpen(false)} className="block py-1.5 pl-3 text-sm text-slate-600 hover:text-slate-900">{i.label}</Link>
              ))}
            </div>
            <div className="pt-3 pb-1 border-t border-slate-100 flex flex-col gap-2">
              <a href="https://app.brahmin-solutions.com/login" className="text-sm text-center py-2.5 text-slate-700 font-medium border border-slate-200 rounded-lg hover:bg-slate-50">Log in</a>
              <Link href="/demo" onClick={() => setMobileOpen(false)} className="text-sm text-center py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">Book a Demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
