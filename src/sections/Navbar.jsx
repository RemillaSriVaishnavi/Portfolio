import { useEffect, useState } from 'react'
import { navLinks } from '../utils/constants'
import { applyTheme, getInitialTheme } from '../utils/theme'
// import { motion } from 'framer-motion'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const initialTheme = getInitialTheme()

    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    applyTheme(newTheme)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl light:border-slate-200 light:bg-white/75">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-wide text-white light:text-slate-900"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300 light:text-slate-600 light:hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition duration-300 hover:scale-105 hover:bg-white/10 light:border-slate-200 light:bg-slate-100 light:hover:bg-slate-200"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xl text-white lg:hidden light:border-slate-200 light:bg-slate-100 light:text-slate-900"
            aria-label="Toggle menu"
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 lg:hidden light:border-slate-200 light:bg-white/95">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300 light:text-slate-700 light:hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}