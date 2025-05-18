import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Terminal } from 'lucide-react';
import profileImage from '../assets/profile.jpg'; // <-- Adjust the path if needed

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-50/50 to-transparent dark:from-primary-900/10 -z-10"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
              <span className="block text-dark-900 dark:text-light-100">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-500">
                Navendu Kumar
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-dark-600 dark:text-light-300">
              DevOps Engineer
            </h2>
            <p className="text-lg mb-8 max-w-xl text-dark-700 dark:text-light-400 leading-relaxed">
              Specializing in AWS cloud infrastructure, CI/CD pipelines, and containerization with Docker & Kubernetes. Building scalable, automated solutions that drive efficiency and reliability.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#contact" 
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a 
                href="/resume.pdf" 
                className="btn-outline flex items-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <Terminal size={18} />
                View Resume
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-dark-500 dark:text-light-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/navendu-kumar-233762201//" 
                target="_blank" 
                rel="noreferrer"
                className="text-dark-500 dark:text-light-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:navendu782@gmail.com"
                className="text-dark-500 dark:text-light-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
              <div className="w-60 h-60 sm:w-72 sm:h-72 relative rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-xl">
                <img 
                  src={profileImage}
                  alt="Navendu Kumar" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          href="#about"
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
