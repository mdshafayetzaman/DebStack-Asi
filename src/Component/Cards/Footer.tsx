const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-10  max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-white">
                DS
              </span>
              <span className="font-display text-lg font-bold">
                Dev <span className="text-gradient-brand">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm font-medium text-slate-600">
              <a href="https://github.com" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="https://twitter.com" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="https://linkedin.com" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-slate-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
