'use client'

import { MapPin, Briefcase } from 'lucide-react'
import { motion, Variants, Transition } from 'framer-motion'
import BackgroundMusicIcon from '@/components/ui/about/BGM'
import FunFactCard from '@/components/ui/about/FunFacts'

const transition: Transition = { type: 'spring', bounce: 0.3, duration: 0.6 }

const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition },
}

export default function AboutSection() {
  return (
    <section
      className="py-24 px-10 lg:px-16 bg-white dark:bg-gray-900 relative overflow-hidden"
      id="about"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider text-purple-600 dark:text-purple-300 uppercase bg-purple-100 dark:bg-purple-900/40 rounded-full">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Beyond the Keyboard
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400">
            A glimpse into my world, one grid item at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Main Bio Card */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-[var(--sage-light)] dark:bg-[var(--sage-dark)] rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/40 dark:bg-white/10 rounded-full blur-3xl -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 pointer-events-none" />
            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  Hello! I'm Zainab.
                </h3>
                <p className="mb-2 text-gray-700 dark:text-white text-base sm:text-lg lg:text-xl leading-relaxed font-medium text-justify">
                  I'm a creative developer based in Nigeria. I bridge the gap between{' '}
                  <strong className="text-green-700 dark:text-green-300">design and engineering</strong>, crafting user interfaces that feel alive. I believe the web should be fun, accessible, and a little bit magical. I’m powered by tea, curiosity, and random bursts of creativity.
                </p>

              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full text-sm sm:text-base font-bold text-gray-700 dark:text-gray-200">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" /> Nigeria
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full text-sm sm:text-base font-bold text-gray-700 dark:text-gray-200">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" /> Open to Work
                </span>
              </div>
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            className="col-span-1 md:col-span-1 row-span-1 bg-[var(--terracotta-light)] dark:bg-[var(--terracotta-dark)] rounded-3xl p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h4 className="font-display text-lg font-bold text-gray-800 dark:text-white">
              Currently Learning
            </h4>

            <div className="mt-2 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">
                  GSAP
                </span>

                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 overflow-hidden">

                  <motion.div
                    className="bg-orange-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '45%' }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">Micro-interactions</span>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-green-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </motion.div>


          {/* Fuel Source */}
          <motion.div
            className="col-span-1 md:col-span-1 row-span-1 bg-[var(--lavender-deep)] dark:bg-[var(--lavender-dark)] rounded-3xl p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300 h-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h4 className="font-display text-lg font-bold text-gray-800 dark:text-white mb-4">
              Fuel Source
            </h4>

            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-black/20 rounded-full backdrop-blur-sm shadow-sm">
                <span className="font-semibold text-gray-700 dark:text-gray-200">Tea</span>

              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-black/20 rounded-full backdrop-blur-sm shadow-sm">
                <span className="font-semibold text-gray-700 dark:text-gray-200">My Cats</span>

              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-black/20 rounded-full backdrop-blur-sm shadow-sm">
                <span className="font-semibold text-gray-700 dark:text-gray-200">Touching Grass</span>

              </div>
            </div>
          </motion.div>


          {/* Fun Fact */}
          <FunFactCard />

          {/* BGM */}
          <motion.div
            className="col-span-1 md:col-span-1 row-span-1 bg-pink-100 dark:bg-pink-700 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:shadow-xl transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-3 shadow-sm  transition-transform">
              <BackgroundMusicIcon />
            </div>
            <h4 className="font-display text-lg text-gray-800 dark:text-white">
              Like BGM? Click play 🙂
            </h4>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
