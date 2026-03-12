'use client'

// LazyMotion loads only the animation features actually used (~18KB gzipped)
// instead of the full framer-motion runtime (~34KB gzipped).
// domAnimation covers: animate, whileInView, whileHover, whileTap, transitions.
import { LazyMotion, domAnimation } from 'framer-motion'

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}
