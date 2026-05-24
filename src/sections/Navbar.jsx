import { useState } from 'react'
import Container from '../components/Container'
import { navLinks } from '../utils/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="text-lg font-bold tracking-tight text-white">
            Portfolio
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 transition hover:bg-indigo-500/20 md:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="text-xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>

        {open ? (
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 md:hidden">
            <nav>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  )
}