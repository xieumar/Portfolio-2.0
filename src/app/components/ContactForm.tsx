'use client'

import { ArrowRight, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'

type Errors = {
  name?: string
  email?: string
  message?: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  /* -----------------------------
     Validation Logic
  ----------------------------- */
  const validate = () => {
    const newErrors: Errors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  /* -----------------------------
     Submit Handler
  ----------------------------- */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Network error')

      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  /* -----------------------------
     Animations
  ----------------------------- */
  const containerVariants: Variants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', bounce: 0.2, duration: 0.5 },
    },
  }

  return (
    <section
      className="py-24 px-6 lg:px-12 bg-purple-50 dark:bg-[#1f1b2e]"
      id="contact"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Chat!
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        {/* Card */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl p-8 sm:p-12 relative overflow-hidden"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 dark:bg-purple-900/50 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900/50 rounded-full blur-3xl opacity-50" />

          {/* Form */}
          <motion.form
            className="space-y-6 relative z-10"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-bold mb-2 ml-1 text-gray-700 dark:text-gray-300">
                  Name
                </label>

                <input
                  className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 transition-colors dark:text-white
                    ${errors.name ? 'border-red-400' : 'border-gray-100 dark:border-gray-600'}
                  `}
                  placeholder="John Doe"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-bold mb-2 ml-1 text-gray-700 dark:text-gray-300">
                  Email
                </label>

                <input
                  className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 transition-colors dark:text-white
                    ${errors.email ? 'border-red-400' : 'border-gray-100 dark:border-gray-600'}
                  `}
                  placeholder="hello@example.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-bold mb-2 ml-1 text-gray-700 dark:text-gray-300">
                Message
              </label>

              <textarea
                className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 transition-colors resize-none dark:text-white
                  ${errors.message ? 'border-red-400' : 'border-gray-100 dark:border-gray-600'}
                `}
                rows={4}
                placeholder="Tell me about your cool project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </motion.div>

            {/* Button */}
            <motion.button
              className="w-full py-5 bg-primary hover:bg-violet-600 text-white font-display font-bold text-xl rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
              type="submit"
              disabled={status === 'sending'}
              whileHover={status === 'idle' ? { scale: 1.03, y: -2 } : {}}
              whileTap={{ scale: 0.97 }}
            >
              {status === 'sending' ? 'Sending your message...' : 'Send Message'}
              <ArrowRight />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 w-80 text-center shadow-xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-500"
                onClick={() => setStatus('idle')}
              >
                <X />
              </button>

              <h3 className="font-display text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Message Sent!
              </h3>

              <p className="text-gray-700 dark:text-gray-300">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
