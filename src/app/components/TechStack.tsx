'use client'

import { motion, Variants } from 'framer-motion'

export default function TechStack() {
  const technologies = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js',
    'Zustand', 'Tailwind CSS', 'Shadcn/UI', 'GSAP', 'Node.js',
    'REST APIs', 'Vite', 'Git & GitHub',
  ]

  const pastelColors = [
    'bg-pastel-blue dark:bg-lavender-dark border-pastel-blue dark:border-lavender-dark',
    'bg-pastel-pink dark:bg-pink-700 border-pastel-pink dark:border-pink-700',
    'bg-pastel-yellow dark:bg-yellow-700 border-pastel-yellow dark:border-yellow-700',
    'bg-pastel-green dark:bg-sage-dark border-pastel-green dark:border-sage-dark',
  ]

  const cardVariants: Variants = {
    offscreen: { y: 20, opacity: 0, scale: 0.95 },
    onscreen: { y: 0, opacity: 1, scale: 1 },
  }

  return (
    <section
      id="toolbox"
      className="py-16 px-3 lg:px-6 bg-pastel-purple dark:bg-background-dark overflow-hidden relative"
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

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            onscreen: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {technologies.map((tech, index) => {
            const bgClass = pastelColors[index % pastelColors.length]

            return (
              <motion.div
                key={tech}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  transition: { duration: 0.25 },
                }}
                className={`flex items-center justify-center p-4 sm:p-5 rounded-2xl border transition-colors cursor-pointer ${bgClass}`}
              >
                <span className="font-display font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200 text-center">
                  {tech}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
