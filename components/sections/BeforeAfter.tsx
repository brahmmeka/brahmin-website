'use client'

import { m, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Eye } from 'lucide-react'

// ─── Excel file icon ───────────────────────────────────────────────────────────

function ExcelIcon({ size = 16 }: { size?: number }) {
  const s = size
  return (
    <svg width={s} height={s * 1.25} viewBox="0 0 16 20" fill="none" aria-hidden>
      <rect x="0" y="0" width="14" height="20" rx="2" fill="white" stroke="#9ca3af" strokeWidth="0.75" />
      <path d="M10 0 L14 4 L10 4 Z" fill="#d1d5db" />
      <rect x="1" y="10" width="12" height="9" rx="1" fill="#107c41" />
      <text x="7" y="17" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">X</text>
    </svg>
  )
}

// ─── Before: desktop chaos ─────────────────────────────────────────────────────

const excelFiles = [
  { name: 'Sales_Orders_2024.xlsx',         modified: 'Today 9:14 AM' },
  { name: 'Inventory_Count_FINAL.xlsx',      modified: 'Yesterday'     },
  { name: 'Inventory_Count_v2_FINAL.xlsx',   modified: 'Yesterday'     },
  { name: 'Purchase_Orders_Q1.xlsx',         modified: 'Mar 1'         },
  { name: 'Production_Schedule.xlsx',        modified: 'Mar 3'         },
  { name: 'BOM_Recipes_Updated.xlsx',        modified: 'Feb 28'        },
  { name: 'Wholesale_Customers.xlsx',        modified: 'Feb 20'        },
  { name: 'Raw_Materials_Tracker.xlsx',      modified: 'Mar 4'         },
]

function DesktopChaos() {
  return (
    <div className="flex-1 bg-slate-700 rounded-xl overflow-hidden flex flex-col border border-slate-600">

      {/* macOS menu bar */}
      <div className="bg-slate-900/70 px-3 py-1.5 flex items-center gap-3 shrink-0">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-slate-400 ml-1">Desktop — Business Files</span>
      </div>

      {/* Desktop surface */}
      <div className="flex-1 p-2 flex gap-2 overflow-hidden">

        {/* ── Main folder window ─────────────────────────────── */}
        <div className="flex-1 bg-white rounded-lg overflow-hidden flex flex-col shadow-sm border border-slate-200 text-[10px] min-w-0">

          {/* Finder title bar */}
          <div className="bg-slate-200 border-b border-slate-200 px-2 py-1.5 flex items-center gap-1.5 shrink-0">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <span className="ml-1 font-medium text-slate-600 text-xs truncate">
              📁 Business Files — 8 items
            </span>
          </div>

          {/* Path bar */}
          <div className="bg-slate-100 border-b border-slate-200 px-2 py-0.5 text-[9px] text-slate-400 shrink-0">
            Documents &rsaquo; Business Files
          </div>

          {/* Column headers */}
          <div className="bg-slate-50 border-b border-slate-200 px-2 py-0.5 flex text-[9px] text-slate-400 font-semibold shrink-0">
            <span className="flex-1">Name</span>
            <span className="w-24 text-right">Date Modified</span>
          </div>

          {/* File list */}
          <div className="flex-1 overflow-hidden divide-y divide-slate-100">
            {excelFiles.map((f, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-2 py-1.5 ${
                  i === 2
                    ? 'bg-blue-50 border-l-2 border-blue-400'
                    : 'hover:bg-slate-50'
                }`}
              >
                <ExcelIcon size={14} />
                <span className={`flex-1 truncate ${i === 2 ? 'text-blue-700 font-medium' : 'text-slate-700'}`}>
                  {f.name}
                </span>
                <span className="text-slate-400 shrink-0 text-[9px]">{f.modified}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right panel: QBO + Shopify stacked ─────────────── */}
        <div className="hidden sm:flex flex-col gap-2 w-28 shrink-0">

          {/* QuickBooks mini window */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden text-[8px]">
            <div className="bg-[#2CA01C] px-1.5 py-1 flex items-center gap-1">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
              <span className="text-white font-bold ml-0.5">QuickBooks</span>
            </div>
            <div className="p-2">
              <div className="text-slate-400 mb-0.5">Balance</div>
              <div className="text-[#2CA01C] font-bold text-[13px]">$84,291</div>
              <div className="text-orange-500 text-[7px] mt-1">⚠ Manual sync needed</div>
              <div className="mt-1.5 bg-slate-50 border border-slate-200 rounded p-1 text-slate-400 text-[7px] leading-tight">
                Last export:<br />3 days ago
              </div>
            </div>
          </div>

          {/* Shopify mini window */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden text-[8px]">
            <div className="bg-[#5C6AC4] px-1.5 py-1 flex items-center gap-1">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
              <span className="text-white font-bold ml-0.5">Shopify</span>
            </div>
            <div className="p-2">
              <div className="text-slate-400 mb-0.5">Orders Today</div>
              <div className="font-bold text-slate-800 text-[13px]">47</div>
              <div className="text-red-500 text-[7px] mt-1">⚠ Inventory not synced</div>
              <div className="mt-1.5 bg-slate-50 border border-slate-200 rounded p-1 text-slate-400 text-[7px] leading-tight">
                Update spreadsheet<br />manually
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* YOUR BRAIN footer */}
      <div className="bg-red-50 border-t border-red-200 px-3 py-2 flex items-center gap-2 shrink-0">
        <span className="text-base">😫</span>
        <span className="font-bold text-red-700 text-[10px]">YOUR BRAIN</span>
        <span className="text-[9px] text-red-400 italic">
          &ldquo;which file has the right inventory count?&rdquo;
        </span>
      </div>

    </div>
  )
}

// ─── After: Brahmin login → dashboard ─────────────────────────────────────────

function BrahminAfter() {
  const [view, setView] = useState<'login' | 'dashboard'>('dashboard')

  return (
    <div className="flex-1 rounded-xl overflow-hidden flex flex-col border border-slate-200 shadow-sm">

      {/* Browser chrome */}
      <div className="bg-slate-100 px-3 py-1.5 flex items-center gap-1.5 shrink-0">
        <div className="flex items-center gap-1 shrink-0">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded border border-slate-200 px-2 py-0.5">
          <span className="text-xs text-slate-400">
            app.brahmin-solutions.com{view === 'dashboard' ? '/dashboard' : ''}
          </span>
        </div>
      </div>

      {/* Animated content — fixed height so login ↔ dashboard never shifts layout */}
      <div className="flex-1 flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">

        {view === 'login' ? (
          <m.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex-1 bg-white flex items-center justify-center px-6 py-4"
          >
            <div className="w-full max-w-[230px]">
              <div className="flex justify-center mb-3">
                <Image
                  src="/images/logo.webp"
                  alt="Brahmin Solutions"
                  width={120}
                  height={32}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-[13px] font-bold text-slate-800 mb-0.5 text-center">
                Good morning! 👋
              </h3>
              <p className="text-[10px] text-slate-400 mb-3 text-center">
                One platform for everything.
              </p>
              <div className="space-y-2 mb-3">
                <div className="border border-slate-200 rounded-lg px-3 py-1.5">
                  <span className="text-[10px] text-slate-400">Username</span>
                </div>
                <div className="border border-slate-200 rounded-lg px-3 py-1.5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Password</span>
                  <Eye className="w-2.5 h-2.5 text-slate-300" />
                </div>
              </div>
              <button
                onClick={() => setView('dashboard')}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 text-[11px] font-semibold transition-colors cursor-pointer"
              >
                Log in →
              </button>
              <p className="text-center text-[9px] text-slate-400 mt-2">
                Click to see your dashboard
              </p>
            </div>
          </m.div>
        ) : (
          <m.div
            key="dashboard"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-slate-50 flex flex-col overflow-hidden"
          >
            {/* Dashboard header */}
            <div className="bg-white border-b border-slate-200 px-3 py-2 flex items-center justify-between shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Brahmin Solutions"
                width={80}
                height={20}
                className="h-6 w-auto object-contain"
              />
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] text-green-600 font-semibold">Live</span>
              </div>
            </div>

            {/* Green welcome strip */}
            <div className="px-3 py-2 shrink-0">
              <span className="text-xs text-green-600 bg-green-50 border border-green-200 px-2 py-1 rounded-lg font-medium">
                ✓ Everything connected — no spreadsheets needed
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-2 px-3 pb-2 shrink-0">
              {[
                { label: 'Inventory',    value: '2,841 SKUs',  emoji: '📦', color: 'text-blue-700',   bg: 'bg-blue-50'   },
                { label: 'Orders Today', value: '47 orders',   emoji: '🛍️', color: 'text-green-700',  bg: 'bg-green-50'  },
                { label: 'In Production',value: '12 active',   emoji: '🏭', color: 'text-purple-700', bg: 'bg-purple-50' },
                { label: 'Revenue MTD',  value: '$84,291',     emoji: '📈', color: 'text-amber-700',  bg: 'bg-amber-50'  },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} rounded-lg p-3 border border-white`}>
                  <div className="text-[11px] mb-0.5">{s.emoji}</div>
                  <div className="text-[8px] text-slate-500 uppercase tracking-wide">{s.label}</div>
                  <div className={`text-[11px] font-bold ${s.color} mt-0.5`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Recent orders */}
            <div className="px-3 flex-1">
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-2 py-1.5 border-b border-slate-100 flex items-center justify-between shrink-0">
                  <span className="text-[9px] font-semibold text-slate-600 uppercase tracking-wide">
                    Recent Orders
                  </span>
                  <span className="text-[9px] text-green-600 font-medium">
                    Shopify synced ✓
                  </span>
                </div>
                {[
                  { id: '#4821', customer: 'Whole Foods',    status: 'Shipped',   badge: 'text-green-700 bg-green-50'  },
                  { id: '#4820', customer: 'Fairway Market', status: 'Picking',   badge: 'text-blue-700 bg-blue-50'    },
                  { id: '#4819', customer: 'Target',         status: 'Fulfilled', badge: 'text-green-700 bg-green-50'  },
                  { id: '#4818', customer: 'Whole Foods',    status: 'New',       badge: 'text-amber-700 bg-amber-50'  },
                ].map((o) => (
                  <div key={o.id} className="flex items-center gap-2 px-2 py-1.5 border-b border-slate-50 last:border-0">
                    <span className="text-[9px] text-slate-400 w-10 shrink-0">{o.id}</span>
                    <span className="text-[9px] text-slate-600 flex-1 truncate">{o.customer}</span>
                    <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${o.badge}`}>
                      {o.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setView('login')}
              className="mx-3 my-2 text-[9px] text-slate-400 hover:text-slate-600 text-center transition-colors cursor-pointer shrink-0"
            >
              ← Back to login
            </button>
          </m.div>
        )}

      </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Shared bullet lists ───────────────────────────────────────────────────────

const painPoints = [
  'Inventory counts nobody trusts',
  'Three versions of every spreadsheet',
  'Orders falling through the cracks',
  'No real-time visibility into costs',
]

const benefits = [
  'One source of truth for every team',
  'Real-time inventory across every location',
  'Orders, production, and costs all connected',
  'Live in 3–6 weeks with a dedicated manager',
]

// ─── Main section ──────────────────────────────────────────────────────────────

export default function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            The difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Stop juggling. Start running.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Most manufacturers run on duct tape and spreadsheets. Here&apos;s what life looks like on the other side.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* ── BEFORE ──────────────────────────────────────────── */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-4">
              ✕ Before Brahmin
            </p>

            <DesktopChaos />

            <ul className="mt-4 space-y-2">
              {painPoints.map((text) => (
                <li key={text} className="flex items-start gap-2 text-slate-600">
                  <span className="text-red-400 shrink-0 mt-0.5">✕</span>
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </m.div>

          {/* ── AFTER ───────────────────────────────────────────── */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col"
          >
            <p className="text-green-600 font-semibold uppercase tracking-widest text-sm mb-4">
              ✓ After Brahmin
            </p>

            <BrahminAfter />

            <ul className="mt-4 space-y-2">
              {benefits.map((text) => (
                <li key={text} className="flex items-start gap-2 text-slate-600">
                  <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </m.div>

        </div>
      </div>
    </section>
  )
}
