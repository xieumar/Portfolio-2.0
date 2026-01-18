'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function TechStack() {
  const cardsRef = useRef<HTMLDivElement[]>([])

  const technologies = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js',
    'Zustand', 'Tailwind CSS', 'Shadcn/UI', 'GSAP', 'Node.js',
    'REST APIs', 'Vite', 'Git & GitHub',

  ]

  const pastelColors = [
    'var(--pastel-blue)',
    'var(--pastel-pink)',
    'var(--pastel-yellow)',
    'var(--pastel-green)',

  ]

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.07 }
    )
  }, [])

  return (
    <section
      id="toolbox"
      className="py-16 px-3 lg:px-6 bg-[var(--pastel-purple)] dark:bg-[var(--background-dark)] overflow-hidden relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Tech Toolbox
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The modern technologies and tools I use to build premium, high-performance web experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {technologies.map((tech, index) => {
            const bgColor = pastelColors[index % pastelColors.length]

            return (
              <div
                key={tech}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                onMouseEnter={(e) =>
                  gsap.to(e.currentTarget, {
                    y: -4,
                    scale: 1.03,
                    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                    duration: 0.25,
                    ease: 'power2.out',
                  })
                }
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, {
                    y: 0,
                    scale: 1,
                    boxShadow: '0 6px 15px rgba(0,0,0,0.06)',
                    duration: 0.25,
                    ease: 'power2.out',
                  })
                }
                className="flex items-center justify-center p-4 sm:p-5 rounded-2xl border transition-colors cursor-pointer"
                style={{
                  backgroundColor: bgColor,
                  borderColor: bgColor,
                }}
              >
                <span className="font-display font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-500 text-center">
                  {tech}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
