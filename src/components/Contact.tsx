import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      alert('Thanks for your message! I will get back to you soon.');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-9501746012",
      link: "tel:+919501746012"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "navendu782@gmail.com",
      link: "mailto:navendu782@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Noida, India",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="contact" className="py-20 bg-light-200 dark:bg-dark-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8 mt-8">
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-light-100">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-center group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-800/40 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-dark-500 dark:text-light-400">
                        {info.label}
                      </span>
                      <span className="font-medium text-dark-800 dark:text-light-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-light-400 dark:border-dark-600">
                <h4 className="font-bold mb-4 text-dark-800 dark:text-light-100">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Navendu-creator" 
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-light-300 dark:bg-dark-600 flex items-center justify-center text-dark-600 dark:text-light-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/navendu-kumar-233762201//" 
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-light-300 dark:bg-dark-600 flex items-center justify-center text-dark-600 dark:text-light-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-light-300 dark:bg-dark-600 flex items-center justify-center text-dark-600 dark:text-light-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6">
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-bold mb-6 text-dark-800 dark:text-light-100"
              >
                Send Me a Message
              </motion.h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-light-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-light-400 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-light-100 dark:bg-dark-600 text-dark-800 dark:text-light-100 outline-none transition-all"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-light-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-light-400 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-light-100 dark:bg-dark-600 text-dark-800 dark:text-light-100 outline-none transition-all"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-light-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-light-400 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-light-100 dark:bg-dark-600 text-dark-800 dark:text-light-100 outline-none transition-all"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-light-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg border border-light-400 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-light-100 dark:bg-dark-600 text-dark-800 dark:text-light-100 outline-none resize-none transition-all"
                  ></textarea>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;