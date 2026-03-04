import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import WhoItsFor from '@/components/sections/WhoItsFor'
import SwitchingFrom from '@/components/sections/SwitchingFrom'
import SupportStats from '@/components/sections/SupportStats'
import SocialProof from '@/components/sections/SocialProof'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions | MRP Software for Small Manufacturers',
  description:
    'Cloud-based MRP and inventory software for small manufacturers. Production tracking, multi-location inventory, and support that responds in 15 minutes. Free trial.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhoItsFor />
      <SwitchingFrom />
      <SupportStats />
      <SocialProof />
      <FeaturesGrid />
      <FAQ />
      <CTA />
    </main>
  )
}
