'use client'

import { SunMedium, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Navigation = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setOpen(false)
    if (id === '#' || !id) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4">
      <div className="bg-[var(--surface-light)]/80 dark:bg-[var(--surface-dark)]/80 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-full shadow-lg dark:shadow-black/20 px-6 py-3 flex items-center justify-between transition-all duration-300 relative">
        <a
          className="font-display font-bold text-2xl text-[var(--primary)] tracking-wide cursor-pointer"
          href="#"
          onClick={(e) => scrollToSection(e, '#')}
        >
          zainab
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-600 dark:text-gray-300">
          <a
            className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
          >
            About
          </a>
          <a
            className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            href="#work"
            onClick={(e) => scrollToSection(e, '#work')}
          >
            Work
          </a>
          <a
            className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-[var(--primary)]"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <SunMedium /> : <Moon />}
          </button>

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-[var(--primary)]"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 bg-[var(--surface-light)]/90 dark:bg-[var(--surface-dark)]/90 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center gap-4 text-sm font-bold text-gray-600 dark:text-gray-300">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="hover:text-[var(--primary)] transition-colors cursor-pointer"
          >
            About
          </a>

          <a
            href="#work"
            onClick={(e) => scrollToSection(e, '#work')}
            className="hover:text-[var(--primary)] transition-colors cursor-pointer"
          >
            Work
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hover:text-[var(--primary)] transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navigation
