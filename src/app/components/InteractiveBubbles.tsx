'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const PASTEL_COLORS = [
  'bg-pastel-purple/85 dark:bg-purple-400/25 border-purple-200/80 dark:border-purple-300/30 shadow-sm',
  'bg-pastel-blue/85 dark:bg-sky-400/25 border-sky-200/80 dark:border-sky-300/30 shadow-sm',
  'bg-pastel-pink/85 dark:bg-pink-400/25 border-pink-200/80 dark:border-pink-300/30 shadow-sm',
  'bg-pastel-yellow/85 dark:bg-amber-300/25 border-amber-200/80 dark:border-amber-300/30 shadow-sm',
  'bg-pastel-green/85 dark:bg-emerald-400/25 border-emerald-200/80 dark:border-emerald-300/30 shadow-sm',
  'bg-lavender-deep/75 dark:bg-indigo-400/25 border-indigo-200/80 dark:border-indigo-300/30 shadow-sm',
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
}

function BubbleItem({
  bubble,
  mousePos,
  repelRadius = 90,
}: {
  bubble: BubbleConfig
  mousePos: { x: number; y: number } | null
  repelRadius?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const lastKickTimeRef = useRef(0)

  useEffect(() => {
    if (!mousePos || !ref.current) return

    const bubbleEl = ref.current
    const parentEl = bubbleEl.parentElement
    if (!parentEl) return

    const parentRect = parentEl.getBoundingClientRect()
    const bubbleRect = bubbleEl.getBoundingClientRect()

    const bubbleCenterX = bubbleRect.left + bubbleRect.width / 2
    const bubbleCenterY = bubbleRect.top + bubbleRect.height / 2

    const dx = bubbleCenterX - mousePos.x
    const dy = bubbleCenterY - mousePos.y
    const distance = Math.hypot(dx, dy)

    const now = Date.now()
    if (distance < repelRadius && now - lastKickTimeRef.current > 140) {
      lastKickTimeRef.current = now

      // Kick trajectory away from mouse with randomized deflection angle (-35° to +35°)
      const baseAngle = Math.atan2(dy, dx)
      const randomAngle = baseAngle + (Math.random() - 0.5) * 0.8

      // Kick impulse distance (between 60px and 120px)
      const kickDistance = 60 + Math.random() * 60

      const kickVx = Math.cos(randomAngle) * kickDistance
      const kickVy = Math.sin(randomAngle) * kickDistance

      // Resting coordinate inside parent container in pixels
      const baseX = (bubble.leftPercent / 100) * parentRect.width
      const baseY = (bubble.topPercent / 100) * parentRect.height

      // Safe container boundaries with padding to ensure zero clipping
      const padding = 10
      const minX = bubble.size / 2 + padding
      const maxX = parentRect.width - bubble.size / 2 - padding
      const minY = bubble.size / 2 + padding
      const maxY = parentRect.height - bubble.size / 2 - padding

      setOffset((prev) => {
        let targetX = baseX + prev.x + kickVx
        let targetY = baseY + prev.y + kickVy

        // Elastic wall bounce: bounces inward when hitting any edge
        if (targetX > maxX) {
          const overshoot = targetX - maxX
          targetX = maxX - Math.min(overshoot * 0.85, (maxX - minX) * 0.4)
        } else if (targetX < minX) {
          const overshoot = minX - targetX
          targetX = minX + Math.min(overshoot * 0.85, (maxX - minX) * 0.4)
        }

        if (targetY > maxY) {
          const overshoot = targetY - maxY
          targetY = maxY - Math.min(overshoot * 0.85, (maxY - minY) * 0.4)
        } else if (targetY < minY) {
          const overshoot = minY - targetY
          targetY = minY + Math.min(overshoot * 0.85, (maxY - minY) * 0.4)
        }

        // Hard clamp safely within boundaries
        targetX = Math.max(minX, Math.min(maxX, targetX))
        targetY = Math.max(minY, Math.min(maxY, targetY))

        return {
          x: targetX - baseX,
          y: targetY - baseY,
        }
      })
    }
  }, [mousePos, repelRadius, bubble.leftPercent, bubble.topPercent, bubble.size])

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
      className={`rounded-full border backdrop-blur-xs z-20 pointer-events-none relative overflow-hidden transition-colors duration-300 ${bubble.colorClass}`}
      initial={false}
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 18,
        mass: 0.8,
      }}
    >
      {/* Clean, simple specular highlight dot matching light mode style */}
      <div className="absolute top-1 left-1.5 w-1/3 h-1/3 rounded-full bg-white/45 dark:bg-white/20 pointer-events-none" />
    </motion.div>
  )
}

export default function InteractiveBubbles({
  count = 22,
  className = '',
  safeCenter = true,
  repelRadius = 90,
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
        />
      ))}
    </div>
  )
}
