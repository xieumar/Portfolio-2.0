'use client'

import { SunMedium, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Navigation = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4">
      <div className="bg-[var(--surface-light)]/80 dark:bg-[var(--surface-dark)]/80 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-full shadow-lg dark:shadow-black/20 px-6 py-3 flex items-center justify-between transition-all duration-300 relative">

        <a
          className="font-display font-bold text-2xl text-[var(--primary)] tracking-wide"
          href="#"
        >
          zainab
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-600 dark:text-gray-300">
          <a className="hover:text-[var(--primary)]" href="#about">
            About
          </a>
          <a className="hover:text-[var(--primary)]" href="#work">
            Work
          </a>
          <a className="hover:text-[var(--primary)]" href="#contact">
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
        <div className="md:hidden mt-3 bg-[var(--surface-light)]/90 dark:bg-[var(--surface-dark)]/90 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center hover:bg-[var(--primary)] gap-4 text-sm font-bold text-gray-600 dark:text-gray-300">

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-[var(--primary)]"
          >
            About
          </a>

          <a
            href="#work"
            onClick={() => setOpen(false)}
            className="hover:text-[var(--primary)]"
          >
            Work
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-[var(--primary)]"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  )
}

export default Navigation
