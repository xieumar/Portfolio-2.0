'use client';

import {ArrowRight} from 'lucide-react';

import { FormEvent, useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-purple-50 dark:bg-[#1f1b2e]" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Chat!
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 dark:bg-purple-900/50 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900/50 rounded-full blur-3xl opacity-50" />
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 focus:border-primary focus:ring-primary dark:focus:ring-primary dark:text-white transition-colors"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 focus:border-primary focus:ring-primary dark:focus:ring-primary dark:text-white transition-colors"
                  id="email"
                  placeholder="hello@example.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 focus:border-primary focus:ring-primary dark:focus:ring-primary dark:text-white transition-colors resize-none"
                id="message"
                placeholder="Tell me about your cool project..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button
              className="w-full py-5 bg-primary hover:bg-violet-600 text-white font-display font-bold text-xl rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2"
              type="submit"
            >
              Send Message
              <ArrowRight/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
