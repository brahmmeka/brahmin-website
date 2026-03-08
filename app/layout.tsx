import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MotionProvider from '@/components/MotionProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',      // prevents invisible text while font loads
  preload: true,
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Brahmin Solutions | MRP Software for Small Manufacturers',
  description:
    'Cloud-based MRP and inventory software for small manufacturers. Production tracking, multi-location inventory, and support that responds in 15 minutes. Free trial.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brahmin Solutions',
  url: 'https://www.brahmin-solutions.com',
  logo: 'https://www.brahmin-solutions.com/images/logo.webp',
  foundingDate: '2015',
  description: 'Cloud-based MRP and inventory management software for small to mid-sized manufacturers.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: 'English',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
