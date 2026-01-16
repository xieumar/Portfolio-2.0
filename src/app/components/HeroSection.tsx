'use client';
import FloatingIcons from "@/components/ui/hero/FloatingIcons";
import Illustration from "@/components/ui/hero/Illustration";
import { Mail, MoveRight, Github, Twitter } from 'lucide-react'

export default function HeroSection() {
  return (
    <header className="relative pt-32 pb-20 px-6 lg:px-12 flex items-center justify-center min-h-[90vh] bg-(--background-light) dark:bg-background-dark">
      <FloatingIcons />
      <div className="container mx-auto max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        <Illustration />
        {/* Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left z-20">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900 dark:text-white relative">
            I build{' '}
            <span className="text-gray-900 dark:text-white inline-block hover:rotate-3 transition-transform">
              fun
            </span>
            ,
            <span className="relative inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 px-6 pt-2 pb-3 rounded-[2rem] transform -rotate-2 hover:rotate-0 transition-transform duration-300 mx-2 shadow-sm border border-purple-200 dark:border-purple-800">
              interactive
            </span>
            <br className="hidden sm:block" />
            things for the{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">web.</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/40 z-0 rounded-full transform -rotate-1" />
            </span>
          </h1>
          <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            I'm a frontend developer and designer who loves turning complex problems into simple, beautiful, and intuitive interface designs.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              href="#contact"
            >
              Get in touch <Mail size={20} />
            </a>
            <a
              className="px-8 py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl border-2 border-gray-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              href="#work"
            >
              View Projects <MoveRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
