import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import TheGap from '@/components/about/TheGap'
import OriginStory from '@/components/about/OriginStory'
import ByTheNumbers from '@/components/about/ByTheNumbers'
import HowWereDifferent from '@/components/about/HowWereDifferent'
import TheTeam from '@/components/about/TheTeam'
import Values from '@/components/about/Values'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About Us | Brahmin Solutions',
  description:
    'Founded in 2015 by Brahm Meka. Brahmin Solutions helps 300+ small manufacturers move from spreadsheets to a single source of truth. Independently owned, customer-funded.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <TheGap />
      <OriginStory />
      <ByTheNumbers />
      <HowWereDifferent />
      <TheTeam />
      <Values />
      <AboutCTA />
    </main>
  )
}
