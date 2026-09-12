import { useState } from 'react'
import type { Technology } from '../../type'

interface Props {
  teachPromise: Technology
}

const TeachCards = ({ teachPromise }: Props) => {
  const [addTo, setAddTo] = useState(false)

  return (
    <article className="h-full flex flex-col group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-slate-900 via-pink-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-100 bg-linear-to-br from-slate-50 to-slate-100 transition-transform duration-300 group-hover:scale-105">
          <img
            src={teachPromise.icon}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 object-contain"
            loading="lazy"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600 ring-1 ring-pink-100">
          {teachPromise.badge}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-slate-700">
        {teachPromise.name}
      </h3>

      <p className="clamp-3 mt-2 text-sm leading-relaxed text-slate-500">
        {teachPromise.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-semibold text-slate-600">
          {teachPromise.category}
        </span>

        <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-slate-400">
          {teachPromise.difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1 font-semibold text-slate-700">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#f59e0b"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>

          {teachPromise.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        disabled={addTo}
        onClick={() => setAddTo(true)}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors cursor-alias ${
          addTo
            ? 'cursor-not-allowed bg-emerald-50 text-emerald-600'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {addTo ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

export default TeachCards
