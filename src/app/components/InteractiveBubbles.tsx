'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const PASTEL_COLORS = [
  'bg-pastel-purple/85 dark:bg-purple-900/60 border-purple-200/80 dark:border-purple-600/40 shadow-purple-400/20',
  'bg-pastel-blue/85 dark:bg-sky-900/60 border-sky-200/80 dark:border-sky-600/40 shadow-sky-400/20',
  'bg-pastel-pink/85 dark:bg-pink-900/60 border-pink-200/80 dark:border-pink-600/40 shadow-pink-400/20',
  'bg-pastel-yellow/85 dark:bg-amber-900/60 border-amber-200/80 dark:border-amber-600/40 shadow-amber-400/20',
  'bg-pastel-green/85 dark:bg-emerald-900/60 border-emerald-200/80 dark:border-emerald-600/40 shadow-emerald-400/20',
  'bg-lavender-deep/75 dark:bg-indigo-900/60 border-indigo-200/80 dark:border-indigo-600/40 shadow-indigo-400/20',
]

export interface BubbleConfig {
  id: number
  colorClass: string
  size: number
  topPercent: number
  leftPercent: number
}

export interface InteractiveBubblesProps {
  count?: number
  className?: string
  safeCenter?: boolean
  repelRadius?: number
  repelStrength?: number
}

function BubbleItem({
  bubble,
  mousePos,
  repelRadius,
  repelStrength,
}: {
  bubble: BubbleConfig
  mousePos: { x: number; y: number } | null
  repelRadius: number
  repelStrength: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [repel, setRepel] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!mousePos || !ref.current) {
      setRepel({ x: 0, y: 0 })
      return
    }

    const rect = ref.current.getBoundingClientRect()
    const bubbleCenterX = rect.left + rect.width / 2
    const bubbleCenterY = rect.top + rect.height / 2

    const dx = bubbleCenterX - mousePos.x
    const dy = bubbleCenterY - mousePos.y
    const distance = Math.hypot(dx, dy)

    if (distance < repelRadius && distance > 0) {
      const power = (1 - distance / repelRadius) * repelStrength
      const angle = Math.atan2(dy, dx)
      setRepel({
        x: Math.cos(angle) * power,
        y: Math.sin(angle) * power,
      })
    } else {
      setRepel({ x: 0, y: 0 })
    }
  }, [mousePos, repelRadius, repelStrength])

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'absolute',
        top: `${bubble.topPercent}%`,
        left: `${bubble.leftPercent}%`,
        width: bubble.size,
        height: bubble.size,
      }}
      className={`rounded-full border shadow-sm backdrop-blur-xs z-20 pointer-events-none relative overflow-hidden ${bubble.colorClass}`}
      initial={false}
      animate={{
        x: repel.x,
        y: repel.y,
      }}
      transition={{
        x: { type: 'spring', stiffness: 260, damping: 18 },
        y: { type: 'spring', stiffness: 260, damping: 18 },
      }}
    >
      {/* Soft glossy specular highlight */}
      <div className="absolute top-1 left-1.5 w-1/3 h-1/3 rounded-full bg-white/45 pointer-events-none" />
    </motion.div>
  )
}

export default function InteractiveBubbles({
  count = 22,
  className = '',
  safeCenter = true,
  repelRadius = 140,
  repelStrength = 55,
}: InteractiveBubblesProps) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    const handleMouseLeave = () => {
      setMousePos(null)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const bubbles: BubbleConfig[] = Array.from({ length: count }, (_, i) => {
    let topPercent = 0
    let leftPercent = 0

    if (safeCenter) {
      const zone = i % 4
      if (zone === 0) {
        // Top perimeter
        topPercent = 6 + ((i * 13) % 20)
        leftPercent = 6 + ((i * 19) % 88)
      } else if (zone === 1) {
        // Bottom perimeter
        topPercent = 75 + ((i * 11) % 18)
        leftPercent = 6 + ((i * 23) % 88)
      } else if (zone === 2) {
        // Left perimeter
        topPercent = 25 + ((i * 17) % 50)
        leftPercent = 5 + ((i * 7) % 16)
      } else {
        // Right perimeter
        topPercent = 25 + ((i * 19) % 50)
        leftPercent = 80 + ((i * 7) % 15)
      }
    } else {
      topPercent = 5 + ((i * 17) % 90)
      leftPercent = 5 + ((i * 23) % 90)
    }

    return {
      id: i,
      colorClass: PASTEL_COLORS[i % PASTEL_COLORS.length],
      size: 24 + ((i * 11) % 36),
      topPercent,
      leftPercent,
    }
  })

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {bubbles.map((bubble) => (
        <BubbleItem
          key={bubble.id}
          bubble={bubble}
          mousePos={mousePos}
          repelRadius={repelRadius}
          repelStrength={repelStrength}
        />
      ))}
    </div>
  )
}
