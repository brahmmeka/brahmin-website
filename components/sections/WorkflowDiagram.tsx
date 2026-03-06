'use client'

import { m, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Package, Warehouse, Factory, ShoppingCart, Eye, Building2, Plug } from 'lucide-react'
import Link from 'next/link'

// ─── Data ─────────────────────────────────────────────────────────────────────

const stages = [
  {
    id: 'purchasing',
    label: 'Purchasing',
    icon: Package,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    activeBg: 'bg-violet-100',
    activeBorder: 'border-violet-500',
    details: 'POs, vendor management, receiving, landed costs',
    subItems: ['Purchase Orders', 'Vendors', 'Receiving'],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: Warehouse,
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    activeBg: 'bg-primary-100',
    activeBorder: 'border-primary-500',
    details: 'Real-time counts, lot tracking, multi-location, cycle counts',
    subItems: ['Warehouse 1', 'Warehouse 2', '3PL / Co-packer'],
  },
  {
    id: 'production',
    label: 'Production',
    icon: Factory,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    activeBg: 'bg-orange-100',
    activeBorder: 'border-orange-500',
    details: 'Work orders, BOMs, labor tracking, cost of goods',
    subItems: ['Line 1', 'Line 2', 'Co-Manufacturer'],
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: ShoppingCart,
    color: 'text-accent-600',
    bg: 'bg-accent-50',
    border: 'border-accent-200',
    activeBg: 'bg-accent-100',
    activeBorder: 'border-accent-500',
    details: 'Orders, invoicing, B2B portal, channel sync',
    subItems: ['Shopify', 'Amazon', 'B2B Portal'],
  },
]

const integrations = ['QuickBooks', 'Xero', 'ShipStation', 'Shopify', 'WooCommerce', 'Amazon']

const proofPoints = [
  {
    icon: Eye,
    title: 'Full visibility',
    body: 'See purchasing, inventory, production, and sales — all in one dashboard.',
  },
  {
    icon: Building2,
    title: 'Multi-location ready',
    body: 'Warehouses, 3PLs, co-manufacturers, multiple production lines — all connected.',
  },
  {
    icon: Plug,
    title: '50+ integrations',
    body: 'QuickBooks, Shopify, ShipStation, and more. Your data stays in sync.',
  },
]

// ─── Flow arrow ───────────────────────────────────────────────────────────────

function FlowArrow({ delay }: { delay: number }) {
  return (
    <div className="hidden md:flex items-center shrink-0 w-10">
      <svg viewBox="0 0 40 24" className="w-10 h-6" overflow="visible">
        <defs>
          <marker id={`head-${delay}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="#cbd5e1" />
          </marker>
        </defs>
        <line x1="0" y1="12" x2="34" y2="12" stroke="#cbd5e1" strokeWidth="1.5" markerEnd={`url(#head-${delay})`} />
        <m.circle
          r="3" fill="#3b82f6"
          initial={{ cx: 0, cy: 12 }}
          animate={{ cx: [0, 36, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay }}
        />
      </svg>
    </div>
  )
}

// ─── Stage box ────────────────────────────────────────────────────────────────

function StageBox({
  stage,
  index,
  isInView,
  isHovered,
  onHover,
  onLeave,
  isLast,
}: {
  stage: typeof stages[0]
  index: number
  isInView: boolean
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  isLast: boolean
}) {
  const Icon = stage.icon

  return (
    <>
      <div className="flex flex-col items-center md:items-stretch flex-1">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.12 }}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className={`relative border-2 rounded-xl p-4 cursor-default transition-all duration-300 text-center
            ${isHovered
              ? `${stage.activeBorder} ${stage.activeBg} shadow-lg -translate-y-1`
              : `${stage.border} bg-white shadow-sm`
            }`}
        >
          {/* Icon */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-colors ${isHovered ? stage.bg : 'bg-slate-100'}`}>
            <Icon className={`w-5 h-5 ${isHovered ? stage.color : 'text-slate-500'} transition-colors`} />
          </div>
          <span className={`text-sm font-bold block transition-colors ${isHovered ? stage.color : 'text-slate-700'}`}>
            {stage.label}
          </span>

          {/* Tooltip */}
          {isHovered && (
            <m.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-900 text-white text-xs p-2.5 rounded-lg z-20 w-44 text-center leading-snug shadow-xl pointer-events-none"
            >
              {stage.details}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45" />
            </m.div>
          )}
        </m.div>

        {/* Sub-items — always visible on mobile, hover only on desktop */}
        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 + index * 0.12 }}
          className={`mt-2 flex flex-col gap-1 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0 opacity-100'}`}
          style={{ minHeight: 72 }}
        >
          {stage.subItems.map((item) => (
            <div key={item} className={`text-xs font-medium px-2 py-1 rounded-md text-center border ${stage.border} ${stage.bg} ${stage.color}`}>
              {item}
            </div>
          ))}
        </m.div>
      </div>

      {!isLast && <FlowArrow delay={index * 0.5} />}
    </>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function WorkflowDiagram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredStage, setHoveredStage] = useState<string | null>(null)

  return (
    <section ref={ref} className="py-section bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Headline */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            See Your Entire Operation. In One Place.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From purchase order to customer delivery — Brahmin connects every step.
            No spreadsheets. No silos. No guessing.
          </p>
        </m.div>

        {/* ── Diagram ─────────────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto">

          {/* Suppliers top label */}
          <m.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Suppliers</span>
            <div className="w-px h-6 bg-slate-300 mt-2" />
          </m.div>

          {/* Brahmin container */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-white border-2 border-primary-200 rounded-2xl p-6 shadow-xl"
          >
            {/* Animated border overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-500/5 pointer-events-none" />

            {/* BRAHMIN label */}
            <div className="text-center mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-500 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full">
                Brahmin — Your Operations Hub
              </span>
            </div>

            {/* Stage flow */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
              {stages.map((stage, index) => (
                <StageBox
                  key={stage.id}
                  stage={stage}
                  index={index}
                  isInView={isInView}
                  isHovered={hoveredStage === stage.id}
                  onHover={() => setHoveredStage(stage.id)}
                  onLeave={() => setHoveredStage(null)}
                  isLast={index === stages.length - 1}
                />
              ))}
            </div>

            {/* Mobile sub-items hint */}
            <p className="mt-3 text-center text-xs text-slate-400 md:hidden">Hover each stage to see details</p>
          </m.div>

          {/* Connector to integrations */}
          <m.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center mt-4 mb-3"
          >
            <div className="w-px h-6 bg-slate-300" />
          </m.div>

          {/* Integrations row */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {integrations.map((name, i) => (
              <m.span
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + i * 0.07 }}
                className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm"
              >
                {name}
              </m.span>
            ))}
            <m.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.55 }}
              className="text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-200 px-3 py-1.5 rounded-full"
            >
              + 44 more
            </m.span>
          </m.div>

          {/* Customers bottom label */}
          <m.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center mt-4"
          >
            <div className="w-px h-6 bg-slate-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Customers</span>
          </m.div>
        </div>

        {/* ── Proof points ─────────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {proofPoints.map((p, i) => {
            const Icon = p.icon
            return (
              <m.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
              </m.div>
            )
          })}
        </div>

        {/* CTA link */}
        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
          >
            See All Features
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </m.div>

      </div>
    </section>
  )
}
