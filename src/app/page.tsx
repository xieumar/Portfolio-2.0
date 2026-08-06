'use client';

import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TechStack from './components/TechStack';
import ContactSection from './components/ContactForm';
import Footer from './components/FooterSection';

export default function Portfolio() {
  return (
    <>
      <Preloader />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStack />
      <ContactSection />
      <Footer />
    </>
  );
}