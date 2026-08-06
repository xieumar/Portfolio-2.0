'use client'

import { ArrowRight, X, Mail, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FormEvent, useState } from 'react'
import { motion, Variants, Transition, AnimatePresence } from 'framer-motion'

const transition: Transition = { type: 'spring', bounce: 0.3, duration: 0.6 }

const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition },
}

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

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  })

  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  /* -----------------------------
     Field Validation
  ----------------------------- */
  const validateField = (field: 'name' | 'email' | 'message', value: string) => {
    let error = ''
    if (field === 'name') {
      if (!value.trim()) {
        error = 'Name is required'
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters'
      }
    } else if (field === 'email') {
      if (!value.trim()) {
        error = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        error = 'Enter a valid email address'
      }
    } else if (field === 'message') {
      if (!value.trim()) {
        error = 'Message is required'
      } else if (value.trim().length < 10) {
        error = 'Message must be at least 10 characters'
      }
    }
    return error
  }

  const handleChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field])
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const validateAll = () => {
    const nameErr = validateField('name', formData.name)
    const emailErr = validateField('email', formData.email)
    const messageErr = validateField('message', formData.message)

    setTouched({ name: true, email: true, message: true })
    setErrors({ name: nameErr, email: emailErr, message: messageErr })

    return !nameErr && !emailErr && !messageErr
  }

  const isFormValid =
    formData.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
    formData.message.trim().length >= 10 &&
    !errors.name &&
    !errors.email &&
    !errors.message

  /* -----------------------------
     Submit Handler
  ----------------------------- */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateAll()) return

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Network error')

      setFormData({ name: '', email: '', message: '' })
      setTouched({ name: false, email: false, message: false })
      setErrors({})
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section
      className="py-20 px-6 lg:px-12 bg-white dark:bg-gray-900 relative overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 mb-3 text-sm font-bold tracking-wider text-purple-600 dark:text-purple-300 uppercase bg-purple-100 dark:bg-purple-900/40 rounded-full">
            Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Let's Chat!
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        {/* Bento Contact Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            onscreen: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Left Column: Form Card */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-7 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl p-7 sm:p-9 border border-gray-100 dark:border-gray-700/50 relative overflow-hidden h-full"
          >
            {/* Ambient decorative blobs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl pointer-events-none" />

            <form
              noValidate
              className="space-y-5 flex flex-col justify-between flex-1 relative z-10"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-bold mb-2 ml-1 text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      className={`w-full px-5 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-700/60 border-2 transition-all dark:text-white focus:outline-none focus:bg-white dark:focus:bg-gray-700
                        ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-100 dark:border-gray-600 focus:border-primary'}
                      `}
                      placeholder="John Doe"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                    />
                    {errors.name && (
                      <p className="text-sm font-medium text-red-500 mt-1.5 ml-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-bold mb-2 ml-1 text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      className={`w-full px-5 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-700/60 border-2 transition-all dark:text-white focus:outline-none focus:bg-white dark:focus:bg-gray-700
                        ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-100 dark:border-gray-600 focus:border-primary'}
                      `}
                      placeholder="hello@example.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                    />
                    {errors.email && (
                      <p className="text-sm font-medium text-red-500 mt-1.5 ml-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    className={`w-full px-5 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-700/60 border-2 transition-all resize-none dark:text-white focus:outline-none focus:bg-white dark:focus:bg-gray-700
                      ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-100 dark:border-gray-600 focus:border-primary'}
                    `}
                    rows={4}
                    placeholder="Tell me about your cool project..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                  />
                  {errors.message && (
                    <p className="text-sm font-medium text-red-500 mt-1.5 ml-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <motion.button
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-violet-600 text-white font-display font-bold text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:shadow-none"
                  type="submit"
                  disabled={!isFormValid || status === 'sending'}
                  whileHover={isFormValid && status === 'idle' ? { scale: 1.02, y: -2 } : {}}
                  whileTap={isFormValid && status === 'idle' ? { scale: 0.98 } : {}}
                >
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Single Combined Bento Card */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-5 bg-pastel-blue dark:bg-lavender-dark rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden h-full"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-gray-800 dark:text-white mb-5">
                Connect With Me
              </h3>

              <div className="space-y-3.5">
                {/* Email */}
                <a
                  href="mailto:xieumar@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/70 dark:bg-black/20 backdrop-blur-sm transition-all duration-200 hover:bg-white dark:hover:bg-black/30 group/item"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 block">
                      Email
                    </span>
                    <span className="font-body font-bold text-gray-800 dark:text-white text-sm sm:text-base truncate block">
                      xieumar@gmail.com
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-300 ml-auto opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/zainab-umar-ibrahim-48929b1ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/70 dark:bg-black/20 backdrop-blur-sm transition-all duration-200 hover:bg-white dark:hover:bg-black/30 group/item"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-[#0A66C2] dark:text-[#38BDF8] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 block">
                      LinkedIn
                    </span>
                    <span className="font-body font-bold text-gray-800 dark:text-white text-sm sm:text-base truncate block">
                      Zainab Umar Ibrahim
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-300 ml-auto opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/xieumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/70 dark:bg-black/20 backdrop-blur-sm transition-all duration-200 hover:bg-white dark:hover:bg-black/30 group/item"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-700/60 text-gray-900 dark:text-white flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 block">
                      GitHub
                    </span>
                    <span className="font-body font-bold text-gray-800 dark:text-white text-sm sm:text-base truncate block">
                      @xieumar
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-300 ml-auto opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/Xiaoma0_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/70 dark:bg-black/20 backdrop-blur-sm transition-all duration-200 hover:bg-white dark:hover:bg-black/30 group/item"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-700/60 text-gray-900 dark:text-white flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110">
                    <FaXTwitter className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 block">
                      Twitter / X
                    </span>
                    <span className="font-body font-bold text-gray-800 dark:text-white text-sm sm:text-base truncate block">
                      @Xiaoma0_
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-300 ml-auto opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                onClick={() => setStatus('idle')}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Message Sent!
              </h3>

              <p className="font-body text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Thank you for reaching out. I've received your message and will get back to you shortly!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
