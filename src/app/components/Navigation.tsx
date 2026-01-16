'use client'

import { SunMedium, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-4">
      <div className="bg-[var(--surface-light)]/80 dark:bg-[var(--surface-dark)]/80 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-full shadow-lg dark:shadow-black/20 px-6 py-3 flex items-center justify-between transition-all duration-300">
        <a className="font-display font-bold text-2xl text-[var(--primary)] tracking-wide" href="#">
          zainab
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-600 dark:text-gray-300">
          <a className="hover:text-[var(--primary)] transition-colors" href="#about">About</a>
          <a className="hover:text-[var(--primary)] transition-colors" href="#work">Work</a>
          <a className="hover:text-[var(--primary)] transition-colors" href="#contact">Contact</a>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-[var(--primary)]"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <SunMedium /> : <Moon />}
        </button>
      </div>

    </nav>
  )
}
