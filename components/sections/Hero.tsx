'use client'

import Link from 'next/link'
import { m } from 'framer-motion'

// ─── Stat card ────────────────────────────────────────────────────────────────

type StatColor = 'blue' | 'green' | 'orange' | 'emerald'

const barColors: Record<StatColor, string> = {
  blue:    'from-blue-500 to-blue-600',
  green:   'from-green-500 to-green-600',
  orange:  'from-orange-400 to-orange-500',
  emerald: 'from-emerald-500 to-emerald-600',
}

function StatCard({ label, value, color }: { label: string; value: string; color: StatColor }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="text-xl font-bold text-slate-800">{value}</p>
      <div className="mt-2 flex items-end gap-1 h-8">
        {[40, 65, 45, 80, 60, 75, 55].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm bg-gradient-to-t ${barColors[color]}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
})

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-32 max-w-7xl">

        {/* Hero copy */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <m.p {...fadeUp(0)} className="text-green-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Trusted by 300+ manufacturers since 2019
          </m.p>

          <m.h1 {...fadeUp(0.08)} className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.07] tracking-tight">
            Inventory and production software
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              that just works
            </span>
          </m.h1>

          <m.p {...fadeUp(0.16)} className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Cloud-based inventory and production management for small manufacturers—backed by a team that knows your business by name.
          </m.p>

          <m.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/demo"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a demo
            </Link>
            <Link
              href="/features"
              className="border-2 border-slate-500 hover:border-slate-300 text-white hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/5"
              aria-label="See how Brahmin Solutions features work"
            >
              See how it works
            </Link>
          </m.div>

          <m.p {...fadeUp(0.32)} className="mt-5 text-sm text-slate-500">
            No credit card required &middot; 14-day free trial &middot; Go live in as little as 3 weeks
          </m.p>
        </div>

        {/* Browser frame with dashboard mockup */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="max-w-5xl mx-auto"
        >
          {/* Glow behind frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-60 pointer-events-none" />

          <div className="relative bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">

            {/* Browser bar */}
            <div className="bg-slate-900 px-4 py-3 flex items-center gap-3 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 max-w-md mx-auto">
                <div className="bg-slate-800 rounded-lg px-4 py-1.5 flex items-center gap-2 border border-slate-700">
                  <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-slate-400 text-xs font-mono">app.brahmin-solutions.com</span>
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-slate-50 p-4 md:p-6">

              {/* Top nav skeleton */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg" />
                  <div className="h-2 w-20 bg-slate-200 rounded-full" />
                </div>
                <div className="flex gap-4">
                  <div className="h-2 w-16 bg-slate-200 rounded-full" />
                  <div className="h-2 w-16 bg-slate-200 rounded-full" />
                  <div className="h-2 w-16 bg-slate-200 rounded-full" />
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatCard label="Orders"     value="147"   color="blue"    />
                <StatCard label="Inventory"  value="2,847" color="green"   />
                <StatCard label="Production" value="89%"   color="orange"  />
                <StatCard label="Revenue"    value="$124K" color="emerald" />
              </div>

              {/* Area chart */}
              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-2 w-24 bg-slate-200 rounded-full" />
                  <div className="flex gap-2">
                    <div className="h-2 w-12 bg-slate-100 rounded-full" />
                    <div className="h-2 w-12 bg-slate-100 rounded-full" />
                  </div>
                </div>
                <svg className="w-full h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#22c55e" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0"   />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 80 Q50 70 100 60 T200 50 T300 40 T400 30 L400 100 L0 100 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0 80 Q50 70 100 60 T200 50 T300 40 T400 30"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  {/* Data point dots */}
                  {[
                    [0, 80], [100, 60], [200, 50], [300, 40], [400, 30],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="#22c55e" />
                  ))}
                </svg>
              </div>

              {/* Table rows */}
              <div className="mt-4 space-y-2">
                {[
                  { label: 'Work Order #1042 — Running', dot: 'bg-green-400' },
                  { label: 'Inventory: Cocoa Butter — 48 units', dot: 'bg-blue-400' },
                  { label: 'Shipment #892 — In transit', dot: 'bg-amber-400' },
                ].map((row) => (
                  <div key={row.label} className="bg-white rounded-lg border border-slate-200 px-4 py-2.5 flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${row.dot}`} />
                    <span className="text-xs text-slate-500">{row.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </m.div>

        {/* Trust indicators */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-8 mt-10 flex-wrap"
        >
          {['No credit card required', '14-day free trial', 'Setup in minutes'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-slate-400 text-sm">
              <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </span>
          ))}
        </m.div>

      </div>
    </div>
  )
}
