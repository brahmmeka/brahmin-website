'use client'

import { categoryLabels } from '@/lib/sanity'

interface CategoryFilterProps {
  categories: string[]
  selected: string | null
  onChange: (category: string | null) => void
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto py-2 -mx-1 px-1 scrollbar-hide">
      <button
        onClick={() => onChange(null)}
        className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selected === null
            ? 'bg-primary-600 text-white shadow-sm'
            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat === selected ? null : cat)}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === cat
              ? 'bg-primary-600 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
          }`}
        >
          {categoryLabels[cat] ?? cat}
        </button>
      ))}
    </div>
  )
}
