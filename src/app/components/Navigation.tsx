import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-slate-900" />
          <span className="font-semibold text-lg text-slate-900">Zainab</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">About</a>
          <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Skills</a>
          <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;