'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { funFacts } from '@/app/lib/data'

export default function FunFactCard() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % funFacts.length)
    }, 6000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="col-span-1 md:col-span-1 row-span-1 bg-yellow-100 dark:bg-yellow-900/40 rounded-3xl p-6 flex flex-col gap-2 group hover:shadow-xl transition-shadow duration-300"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        offscreen: { opacity: 0, y: 50 },
        onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.6 } }
      }}
    >
      <h4 className="font-display text-lg font-bold text-gray-800 dark:text-white mb-2">
        Fun Fact
      </h4>

      <div className="min-h-[3rem]">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-gray-700 dark:text-gray-300 font-medium italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {funFacts[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
