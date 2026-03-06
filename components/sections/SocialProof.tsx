'use client'

import Image from 'next/image'
import { m, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = {
  chugach: {
    quote: "Brahmin syncs to all our systems and handles batch tracking, order capture, and fulfillment — everything we need in one place.",
    name: "Ryan",
    company: "Chugach Chocolates",
    image: "/images/customers/ryan-chugach.jpg",
  },
  bakkar: {
    quote: "Brahmin allows us to focus on growing our business instead of worrying about inventory. It's easy to use, quick, and always improving.",
    name: "Tameer",
    company: "Bakkar Sweets",
    logo: "/images/logos/bakkar-sweets.jpg",
  },
  flff: {
    quote: "Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.",
    name: "Sheldon",
    company: "FLFF",
    logo: "/images/logos/FLFF.png",
  },
  sfoglini: {
    quote: "We have yearly inspections which include mock recalls and mass balance exercises, and both went the smoothest they ever have after using Brahmin Solutions. The time savings and reduced errors alone have been invaluable.",
    company: "Sfoglini Pasta",
    logo: "/images/logos/sfoglini.png",
  },
}

const logos = [
  { name: 'Sfoglini Pasta',     src: '/images/logos/sfoglini.png' },
  { name: 'Wild Zora',          src: '/images/logos/wild-zora.png' },
  { name: 'Elevated Oats',      src: '/images/logos/elevated-oats.png' },
  { name: 'Code X-ing',         src: '/images/logos/codexing_logo.png' },
  { name: 'Oyin Handmade',      src: '/images/logos/oyin-handmade.png' },
  { name: 'Nanu Studio',        src: '/images/logos/nanustudio.png' },
  { name: 'CaterStyle',         src: '/images/logos/caterstyle.png' },
  { name: 'Daily Concepts',     src: '/images/logos/daily-concepts.png' },
  { name: 'Cusatea',            src: '/images/logos/cusatea.png' },
  { name: 'Kalamazoo Candle',   src: '/images/logos/kalamazoo-candle.png' },
  { name: 'PSE',                src: '/images/logos/pse.png' },
  { name: 'Bakkar Sweets',      src: '/images/logos/bakkar-sweets.jpg' },
]

// ─── Main component ────────────────────────────────────────────────────────────

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-section bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Real results from real manufacturers
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what manufacturers say after switching.
          </p>
        </m.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

          {/* Card 1 — Featured photo, Ryan (spans 2 rows) */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:row-span-2 relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-[400px]"
          >
            <Image
              src={testimonials.chugach.image}
              alt={`${testimonials.chugach.name} at ${testimonials.chugach.company}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg font-medium leading-snug mb-4">
                &ldquo;{testimonials.chugach.quote}&rdquo;
              </p>
              <p className="text-sm text-white/70">
                — {testimonials.chugach.name}, {testimonials.chugach.company}
              </p>
            </div>
          </m.div>

          {/* Card 2 — Bakkar Sweets quote */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">
                &ldquo;{testimonials.bakkar.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-slate-100">
                <Image
                  src={testimonials.bakkar.logo}
                  alt={testimonials.bakkar.company}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{testimonials.bakkar.name}</p>
                <p className="text-xs text-slate-500">{testimonials.bakkar.company}</p>
              </div>
            </div>
          </m.div>

          {/* Card 3 — Sfoglini star rating */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                &ldquo;{testimonials.sfoglini.quote}&rdquo;
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-amber-100">
              <div className="relative h-8 w-24">
                <Image
                  src={testimonials.sfoglini.logo}
                  alt={testimonials.sfoglini.company}
                  fill
                  className="object-contain object-left"
                  sizes="96px"
                />
              </div>
            </div>
          </m.div>

          {/* Card 4 — FLFF quote */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">
                &ldquo;{testimonials.flff.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
              <div className="relative w-16 h-8 shrink-0">
                <Image
                  src={testimonials.flff.logo}
                  alt={testimonials.flff.company}
                  fill
                  className="object-contain object-left"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{testimonials.flff.name}</p>
                <p className="text-xs text-slate-500">{testimonials.flff.company}</p>
              </div>
            </div>
          </m.div>

          {/* Card 5 — Logo wall (12 logos, grayscale → color on hover) */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center mb-5">
              Trusted by 300+ manufacturers
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 items-center">
              {logos.map((logo, i) => (
                <m.div
                  key={logo.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.04 }}
                  className="relative h-7 hover:scale-105 transition-transform duration-200"
                  title={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="60px"
                  />
                </m.div>
              ))}
            </div>
          </m.div>

        </div>
      </div>
    </section>
  )
}
