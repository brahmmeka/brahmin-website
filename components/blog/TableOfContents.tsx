'use client'

import { useEffect, useState, useCallback } from 'react'

interface Heading {
  id: string
  text: string
  level: 2 | 3
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  const handleClick = useCallback(
    (id: string) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveId(id)
        setIsOpen(false)
      }
    },
    []
  )

  if (headings.length === 0) return null

  const linkList = (
    <ul className="space-y-2">
      {headings.map(({ id, text, level }) => (
        <li key={id} className={level === 3 ? 'ml-4' : ''}>
          <button
            onClick={() => handleClick(id)}
            className={`text-left text-sm transition-colors w-full ${
              activeId === id
                ? 'text-primary-600 font-medium'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav className="hidden lg:block sticky top-24">
        <p className="text-sm font-semibold text-slate-900 mb-4">On this page</p>
        {linkList}
      </nav>

      {/* Mobile: collapsible dropdown */}
      <nav className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-semibold text-slate-900"
        >
          On this page
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {isOpen && (
          <div className="mt-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
            {linkList}
          </div>
        )}
      </nav>
    </>
  )
}
