import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-100 dark:bg-dark-900 py-8 border-t border-light-300 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold font-display text-primary-600 dark:text-primary-400">
              Navendu<span className="text-accent-500">.</span>
            </span>
            <p className="mt-2 text-dark-600 dark:text-light-400">
              Building scalable DevOps solutions
            </p>
          </div>
          
          <div className="flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-dark-600 dark:text-light-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-light-300 dark:border-dark-700 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-dark-500 dark:text-light-500 text-sm">
            &copy; {currentYear} Navendu Kumar. All rights reserved.
          </p>
          <p className="text-dark-500 dark:text-light-500 text-sm flex items-center mt-4 md:mt-0">
            Made with 
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> 
            and modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;