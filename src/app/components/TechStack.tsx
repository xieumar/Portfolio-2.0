'use client'

import { motion, Variants, Transition } from 'framer-motion'
import { Braces } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
} from 'react-icons/si'

const transition: Transition = { type: 'spring', bounce: 0.3, duration: 0.6 }

const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition },
}

interface TechTool {
  name: string
  category: string
  description: string
  proficiency: number
  spanClass: string
  bgClass: string
  tagClass: string
  barClass: string
  icon: React.ReactNode
}

const techTools: TechTool[] = [
  {
    name: 'React',
    category: 'Core',
    description: 'Building component-driven, highly interactive user interfaces.',
    proficiency: 90,
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgClass: 'bg-pastel-blue dark:bg-lavender-dark',
    tagClass: 'bg-white/70 dark:bg-black/20 text-indigo-700 dark:text-indigo-200',
    barClass: 'bg-indigo-600 dark:bg-indigo-400',
    icon: <SiReact className="w-6 h-6 text-[#087ea4] dark:text-[#58c4dc]" />,
  },
  {
    name: 'Next.js',
    category: 'Framework',
    description: 'Server-rendered, performant web applications with optimal SEO.',
    proficiency: 85,
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgClass: 'bg-pastel-green dark:bg-sage-dark',
    tagClass: 'bg-white/70 dark:bg-black/20 text-emerald-800 dark:text-emerald-200',
    barClass: 'bg-emerald-700 dark:bg-emerald-400',
    icon: <SiNextdotjs className="w-6 h-6 text-gray-900 dark:text-white" />,
  },
  {
    name: 'TypeScript',
    category: 'Language',
    description: 'Adding static typing for robust, maintainable, and error-free codebases.',
    proficiency: 80,
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2',
    bgClass: 'bg-pastel-purple dark:bg-purple-900/40',
    tagClass: 'bg-white/70 dark:bg-black/20 text-purple-800 dark:text-purple-200',
    barClass: 'bg-purple-800 dark:bg-purple-300',
    icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    description: 'Rapid UI development with utility-first, highly customizable styling.',
    proficiency: 95,
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2',
    bgClass: 'bg-pastel-blue dark:bg-lavender-dark',
    tagClass: 'bg-white/70 dark:bg-black/20 text-sky-800 dark:text-sky-200',
    barClass: 'bg-slate-800 dark:bg-sky-400',
    icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
  },
  {
    name: 'GSAP',
    category: 'Animation',
    description: 'Creating complex, high-performance web animations.',
    proficiency: 70,
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgClass: 'bg-[var(--terracotta-light)] dark:bg-[var(--terracotta-dark)]',
    tagClass: 'bg-white/70 dark:bg-black/20 text-amber-900 dark:text-amber-200',
    barClass: 'bg-red-700 dark:bg-red-400',
    icon: <SiGreensock className="w-6 h-6 text-[#88CE02]" />,
  },
  {
    name: 'Zustand',
    category: 'State',
    description: 'Lightweight and unopinionated state management for React.',
    proficiency: 95,
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgClass: 'bg-sage-light dark:bg-sage-dark',
    tagClass: 'bg-white/70 dark:bg-black/20 text-gray-800 dark:text-gray-200',
    barClass: 'bg-gray-800 dark:bg-gray-200',
    icon: <Braces className="w-6 h-6 text-gray-800 dark:text-gray-200" />,
  },
]

export default function TechStack() {
  return (
    <section
      id="toolbox"
      className="py-24 px-6 lg:px-16 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Tech Toolbox
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The modern technologies and tools I use to build premium, high-performance web experiences.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            onscreen: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {techTools.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl group hover:shadow-xl transition-shadow duration-300 ${tech.spanClass} ${tech.bgClass}`}
            >
              <div>
                {/* Header: Brand Icon & Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <span
                    className={`px-3.5 py-1 text-xs font-bold rounded-full backdrop-blur-sm shadow-sm ${tech.tagClass}`}
                  >
                    {tech.category}
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="font-display text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Progress Bar & Percentage */}
              <div className="mt-8 pt-2">
                <div className="flex items-center justify-end gap-3">
                  <div className="flex-1 bg-black/10 dark:bg-black/30 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${tech.barClass}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="font-body font-bold text-xs text-gray-800 dark:text-gray-200 min-w-[28px] text-right">
                    {tech.proficiency}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
