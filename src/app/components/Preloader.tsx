'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InteractiveBubbles from './InteractiveBubbles'

const CHARACTERS = ['z', "'", 's', ' ', 'p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o', '.']
const TOTAL_CHARS = CHARACTERS.length

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden'

    // 4.2 seconds total: 100 steps of 42ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            document.body.style.overflow = ''
          }, 350)
          return 100
        }
        return prev + 1
      })
    }, 42)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = ''
    }
  }, [])

  const getCharState = (index: number): 'letter' | 'dot' => {
    if (progress < 10 || progress >= 95) return 'letter'

    if (progress >= 10 && progress < 60) {
      // Decomposes from last (13) down to 0 over 50% of the timeline
      const reverseIndex = TOTAL_CHARS - 1 - index
      const decomposeThreshold = 10 + reverseIndex * (50 / TOTAL_CHARS)
      return progress >= decomposeThreshold ? 'dot' : 'letter'
    }

    if (progress >= 60 && progress < 75) {
      return 'dot'
    }

    if (progress >= 75 && progress < 95) {
      // Recomposes from first (0) up to 13 over 20% of the timeline
      const recomposeThreshold = 75 + index * (20 / TOTAL_CHARS)
      return progress >= recomposeThreshold ? 'letter' : 'dot'
    }

    return 'letter'
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300 select-none p-6 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -15,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* Subtle ambient light */}
          <div className="absolute w-80 h-80 bg-gray-300/20 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Reusable Interactive Pastel Bubbles */}
          <InteractiveBubbles count={22} safeCenter={true} />

          {/* Centered Morphing Text with Fixed Spatial Alignment */}
          <div className="relative z-10 flex items-center justify-center tracking-wide">
            {CHARACTERS.map((char, index) => {
              const state = getCharState(index)
              const isDot = state === 'dot'

              return (
                <span
                  key={index}
                  className="relative inline-flex items-center justify-center h-12 px-[1px] sm:px-[2px]"
                >
                  {/* The Letter */}
                  <motion.span
                    initial={false}
                    animate={
                      !isDot
                        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                        : { opacity: 0, scale: 0.25, filter: 'blur(2px)' }
                    }
                    transition={{
                      duration: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`font-display font-black text-3xl sm:text-4xl select-none ${
                      char === '.' ? 'text-primary' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>

                  {/* The Dot (centered absolutely inside the fixed slot to prevent layout shifting) */}
                  <motion.span
                    initial={false}
                    animate={
                      isDot
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      duration: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-900 dark:bg-white pointer-events-none"
                  />
                </span>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
