import type { Technology } from '../../type'

interface StackSidebarProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
      <h3 className="font-display text-lg font-bold text-slate-900">
        Your Stack
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center">
          <p className="text-sm text-slate-400">
            Nothing here yet. Add a technology to start building your stack.
          </p>
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
              >
                <img
                  src={tech.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0"
                  loading="lazy"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {tech.name}
                  </p>

                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name} from your stack`}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}
