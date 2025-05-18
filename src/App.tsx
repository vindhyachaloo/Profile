import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <Navbar 
          isScrolled={isScrolled} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          setIsOpen={setMobileMenuOpen} 
        />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;