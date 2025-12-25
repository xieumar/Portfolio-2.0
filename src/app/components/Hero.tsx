import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-slate-100 rounded-full">
          <span className="text-sm font-medium text-slate-700">Frontend Engineer</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Building Modern Web
          <br />
          <span className="text-slate-600">Experiences</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          I craft performant, accessible, and beautiful interfaces using React, Next.js, and TypeScript. 
          Passionate about clean code and user-centered design.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-slate-300 text-slate-900 rounded-lg hover:border-slate-400 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;