import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor Of Engineering",
      institution: "Sant Longowal Institute of Engineering & Technology",
      location: "Punjab, Sangrur",
      period: "2021 – 2024",
      grade: "8.15 CGPA"
    },
    {
      degree: "Diploma",
      institution: "Sant Longowal Institute of Engineering & Technology",
      location: "Punjab, Sangrur",
      period: "2018 – 2021",
      grade: "7.62 CGPA"
    }
  ];

  const achievements = [
    "Solved 150+ problems on GeeksforGeeks and LeetCode.",
    "Organized Madhuram 2023, handling planning, coordination, and execution of a cultural event."
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
    <section id="education" className="py-20 bg-light-100 dark:bg-dark-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-2"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-10 last:mb-0"
              >
                <div className="card p-6 border-l-4 border-primary-500">
                  <h3 className="text-xl font-bold font-display mb-1 text-dark-800 dark:text-light-100">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {edu.institution}
                  </p>
                  
                  <div className="flex flex-wrap items-center text-dark-500 dark:text-light-400 mb-4 gap-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className="bg-light-300 dark:bg-dark-700 rounded-lg p-3 inline-block">
                    <p className="font-medium">
                      <span className="text-dark-500 dark:text-light-400">Grade: </span>
                      <span className="text-dark-800 dark:text-light-200">{edu.grade}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-accent-50 dark:bg-accent-900/30 mr-3">
                  <GraduationCap className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-light-100">Achievements</h3>
              </div>
              
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-500 mt-2 mr-2 shrink-0"></span>
                    <span className="text-dark-700 dark:text-light-300">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-light-400 dark:border-dark-600">
                <h4 className="text-lg font-semibold mb-4 text-dark-800 dark:text-light-100">Certifications</h4>
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 p-4 rounded-lg">
                  <p className="text-dark-700 dark:text-light-300 italic">
                    Certifications will be added here as they are earned.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;