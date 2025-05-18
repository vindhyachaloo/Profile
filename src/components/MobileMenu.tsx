import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-light-100 dark:bg-dark-800 z-50 shadow-xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="font-display text-xl font-bold text-primary-600 dark:text-primary-400">
                  Navendu<span className="text-accent-500">.</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-dark-500 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1">
                <ul className="space-y-6 text-lg">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="block py-2 text-dark-800 dark:text-light-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full text-center mt-8"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;