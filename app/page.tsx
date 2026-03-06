import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import BeforeAfter from '@/components/sections/BeforeAfter'
import FeaturesTabbed from '@/components/sections/FeaturesTabbed'
import WhoItsFor from '@/components/sections/WhoItsFor'
import WhyBrahmin from '@/components/sections/WhyBrahmin'
import SocialProof from '@/components/sections/SocialProof'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions | MRP Software for Small Manufacturers',
  description:
    'Cloud-based MRP and inventory software for small manufacturers. Production tracking, multi-location inventory, and support that responds in 15 minutes. Free trial.',
}

export default function HomePage() {
  return (
    <main>
      {/* 1 */ }<Hero />
      {/* 2 */ }<TrustBar />
      {/* 3 */ }<BeforeAfter />
      {/* 4 */ }<FeaturesTabbed />
      {/* 5 */ }<WhoItsFor />
      {/* 6 */ }<WhyBrahmin />
      {/* 7 */ }<SocialProof />
      {/* 8 */ }<FinalCTA />
    </main>
  )
}
