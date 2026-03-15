import Link from 'next/link'

// ─── Inline CTA (subtle, single-line with link) ─────────────────────────────

interface InlineCTAVariant {
  text: string
  linkText: string
  href: string
}

const inlineVariants: Record<string, InlineCTAVariant> = {
  'inventory-management': {
    text: 'Want real-time visibility into every SKU?',
    linkText: 'See how Brahmin tracks inventory across all your channels →',
    href: '/features/inventory',
  },
  manufacturing: {
    text: 'Still juggling work orders manually?',
    linkText: 'See how Brahmin automates production scheduling →',
    href: '/features/production',
  },
  'food-beverage': {
    text: 'Need to trace ingredients from supplier to shelf?',
    linkText: 'Explore Brahmin\'s lot tracking and recall readiness →',
    href: '/features/traceability',
  },
  integrations: {
    text: 'Wondering how it all connects?',
    linkText: 'See Brahmin\'s 8 native integrations + Zapier →',
    href: '/integrations',
  },
  'customer-stories': {
    text: 'Curious what this looks like in practice?',
    linkText: 'See how 300+ manufacturers use Brahmin →',
    href: '/customers',
  },
  'industry-tips': {
    text: 'Want to put these ideas into action?',
    linkText: 'See how Brahmin helps small manufacturers grow →',
    href: '/features',
  },
  'learning-center': {
    text: 'Ready to move past spreadsheets?',
    linkText: 'See why 300+ manufacturers chose Brahmin →',
    href: '/demo',
  },
  default: {
    text: 'Looking for a better way to manage operations?',
    linkText: 'See what Brahmin can do for your business →',
    href: '/features',
  },
}

export function InlineCTA({ category }: { category?: string }) {
  const variant = (category && inlineVariants[category]) || inlineVariants.default

  return (
    <p className="my-10 py-4 border-y border-slate-200 text-base text-slate-600 leading-relaxed">
      {variant.text}{' '}
      <Link
        href={variant.href}
        className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-primary-300 underline-offset-2 transition-colors"
      >
        {variant.linkText}
      </Link>
    </p>
  )
}

// ─── Banner CTA (visual, with social proof) ──────────────────────────────────

interface BannerCTAVariant {
  headline: string
  description: string
  buttonText: string
  href: string
}

const bannerVariants: Record<string, BannerCTAVariant> = {
  'inventory-management': {
    headline: 'Ready to get your inventory under control?',
    description: 'Real-time stock levels, automatic reorder points, and multi-warehouse tracking — all in one place.',
    buttonText: 'Book a demo',
    href: '/demo',
  },
  manufacturing: {
    headline: 'Stop planning production in spreadsheets',
    description: 'Automated MRP, work orders, and production scheduling built for small manufacturers.',
    buttonText: 'See it in action',
    href: '/demo',
  },
  'food-beverage': {
    headline: 'Full traceability from supplier to shelf',
    description: 'Lot tracking, expiry management, and one-click recall reports — built for food & beverage makers.',
    buttonText: 'Book a demo',
    href: '/demo',
  },
  integrations: {
    headline: 'Stop double-entering data',
    description: 'Brahmin syncs with QuickBooks, Shopify, WooCommerce, Xero, and more — so your systems stay in sync.',
    buttonText: 'See integrations',
    href: '/integrations',
  },
  'customer-stories': {
    headline: 'Want results like these?',
    description: 'Manufacturers using Brahmin save 10+ hours per week and reduce inventory errors by up to 90%.',
    buttonText: 'Book a demo',
    href: '/demo',
  },
  'industry-tips': {
    headline: 'Put these tips into practice — automatically',
    description: 'Brahmin handles inventory, production, and orders so you can focus on growing your business.',
    buttonText: 'Try Brahmin free',
    href: '/demo',
  },
  'learning-center': {
    headline: 'Ready to go beyond spreadsheets?',
    description: 'Real MRP software built for small manufacturers — without the complexity or cost of legacy ERPs.',
    buttonText: 'Book a demo',
    href: '/demo',
  },
  default: {
    headline: 'See what Brahmin can do for your business',
    description: 'Book a 30-minute demo and we\'ll walk through the software with your actual products and workflows.',
    buttonText: 'Book a demo',
    href: '/demo',
  },
}

export default function BlogCTA({ category }: { category?: string }) {
  const variant = (category && bannerVariants[category]) || bannerVariants.default

  return (
    <div className="my-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <div className="flex-1 text-center md:text-left">
        <p className="font-bold text-white text-lg mb-1">
          {variant.headline}
        </p>
        <p className="text-slate-400 text-sm">
          {variant.description}
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Join 300+ manufacturers already using Brahmin
        </p>
      </div>
      <Link
        href={variant.href}
        className="shrink-0 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-accent-500/25"
      >
        {variant.buttonText}
      </Link>
    </div>
  )
}
