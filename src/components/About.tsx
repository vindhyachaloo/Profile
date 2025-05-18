import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Code, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const stats = [
    { 
      icon: <Briefcase className="w-6 h-6 text-primary-500" />, 
      value: 1, 
      label: "Years Experience" 
    },
    { 
      icon: <GraduationCap className="w-6 h-6 text-primary-500" />, 
      value: "BE", 
      label: "Degree" 
    },
    { 
      icon: <Code className="w-6 h-6 text-primary-500" />, 
      value: "150+", 
      label: "Problems Solved" 
    },
    { 
      icon: <Users className="w-6 h-6 text-primary-500" />, 
      value: "5+", 
      label: "Projects" 
    },
  ];

  return (
    <section id="about" className="py-20 bg-light-100 dark:bg-dark-900 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-light-200 to-light-100 dark:from-dark-800 dark:to-dark-900 -z-10"></div>
      
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6 text-dark-700 dark:text-light-300">
              I'm a DevOps Engineer with experience in AWS infrastructure, CI/CD pipelines, and containerization technologies. I'm passionate about designing scalable systems that enable teams to deliver software faster and with greater reliability.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6 text-dark-700 dark:text-light-300">
              With a background in computer science and engineering from Sant Longowal Institute of Engineering & Technology, I've developed a solid foundation in both software development and operational excellence.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6 text-dark-700 dark:text-light-300">
              Currently working at Monotype, I'm focused on streamlining development workflows, implementing robust infrastructure as code solutions, and automating deployment processes to enhance productivity and reduce errors.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10"
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="card p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 rounded-full bg-primary-50 dark:bg-primary-900/30">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold font-display mb-1 text-dark-800 dark:text-light-100">
                  {stat.value}
                </h3>
                <p className="text-dark-500 dark:text-light-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;