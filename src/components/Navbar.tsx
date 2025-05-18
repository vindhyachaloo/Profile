import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  isScrolled: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isScrolled, setMobileMenuOpen }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      const checkSection = () => {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
          const sectionElement = section as HTMLElement;
          const sectionHeight = sectionElement.offsetHeight;
          const sectionTop = sectionElement.offsetTop - 100;
          const sectionId = sectionElement.getAttribute('id') as string;
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      };
      
      checkSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `backdrop-blur-lg bg-white/80 dark:bg-dark-800/80 shadow-lg` 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <a 
            href="#home" 
            className="font-display text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400"
          >
            Navendu<span className="text-accent-500">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a 
              href="/resume.pdf" 
              className="btn-outline text-sm"
              target="_blank" 
              rel="noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-dark-500 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-700 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;