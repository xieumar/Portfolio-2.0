'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ['interactive', 'scalable','engaging', 'functional', 'dynamic', 'quirky', 'creative']

export default function InteractivePill() {
  const [hearts, setHearts] = useState<{ id: number; left: number; opacity: number; size: number; rotate: number }[]>([])
  const [hover, setHover] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)

  // Floating hearts logic
  useEffect(() => {
    if (!hover) return
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100 - 50,
          opacity: Math.random() * 0.2 + 0.2,
          size: Math.random() * 50 + 30,
          rotate: Math.random() * 20 - 10,
        },
      ])
    }, 200)
    return () => clearInterval(interval)
  }, [hover])

  useEffect(() => {
    const timeout = setInterval(() => {
      setHearts((prev) => prev.filter((h) => Date.now() - h.id < 1400))
    }, 500)
    return () => clearInterval(timeout)
  }, [])

  // Automatic text loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), '')

  return (
    <div
      className="relative inline-block ml-0 lg:-ml-10 mt-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 
        px-3 pt-2 pb-4 rounded-[2rem] transform -rotate-2 
        hover:rotate-0 transition-transform duration-300 mx-2 shadow-sm border border-purple-200 dark:border-purple-800 
        overflow-visible text-center"
      style={{ width: `${longestWord.length * 1}ch` }} 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWord]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="font-bold inline-block"
        >
          {words[currentWord]}
        </motion.span>
      </AnimatePresence>

      {/* floating hearts */}
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute animate-heart-float"
          style={{
            left: `50%`,
            transform: `translateX(${heart.left}px) rotate(${heart.rotate}deg)`,
            color: 'var(--primary)',
            opacity: heart.opacity,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
          viewBox="0 0 800 700"
          fill="currentColor"
        >
          <path d="M263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z"/>
        </svg>
      ))}
    </div>
  )
}
