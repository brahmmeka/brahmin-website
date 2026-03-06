'use client'

/**
 * Sanity Studio embedded at /studio
 * Dynamic import ensures the ~4MB studio bundle is never included in
 * shared chunks — it only loads when someone actually visits /studio.
 */

import dynamic from 'next/dynamic'
import config from '@/sanity.config'

// ssr:false keeps the massive styled-components bundle client-only
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((m) => m.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudio config={config} />
}
