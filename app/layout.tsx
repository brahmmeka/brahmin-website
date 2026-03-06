import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MotionProvider from '@/components/MotionProvider'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
