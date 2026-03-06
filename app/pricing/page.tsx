import type { Metadata } from 'next'
import PricingPageClient from './PricingPageClient'

export const metadata: Metadata = {
  title: 'Pricing | Brahmin Solutions',
  description:
    'Transparent pricing for manufacturers. Startups get 50% off. Everyone gets unlimited users and training. No per-seat fees.',
}

export default function PricingPage() {
  return <PricingPageClient />
}
