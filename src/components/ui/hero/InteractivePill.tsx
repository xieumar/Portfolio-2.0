'use client'

import { useState, useEffect } from 'react'

export default function InteractivePill() {
  const [hearts, setHearts] = useState<{ id: number; left: number; opacity: number; size: number; rotate: number }[]>([])
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (!hover) return

    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100 - 50,       // horizontal offset
          opacity: Math.random() * 0.2 + 0.2,   // 0.2–0.4 opacity
          size: Math.random() * 50 + 30,        // 30–80px size
          rotate: Math.random() * 20 - 10,      // -10 to 10 deg rotation
        },
      ])
    }, 200)

    return () => clearInterval(interval)
  }, [hover])

  // remove hearts after animation duration
  useEffect(() => {
    const timeout = setInterval(() => {
      setHearts((prev) => prev.filter((h) => Date.now() - h.id < 1400))
    }, 500)
    return () => clearInterval(timeout)
  }, [])

  return (
    <div
      className="relative inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 
        px-6 pt-2 pb-3 rounded-[2rem] transform -rotate-2 
        hover:rotate-0 transition-transform duration-300 mx-2 shadow-sm border border-purple-200 dark:border-purple-800 
        overflow-visible"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      interactive

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
