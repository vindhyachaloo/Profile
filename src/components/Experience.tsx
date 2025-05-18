import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      role: "DevOps Engineer",
      company: "Monotype",
      location: "Noida — Hybrid",
      period: "April 2024 – Present",
      description: [
        "Streamlined AWS provisioning using Terraform and Ansible, reducing setup time by 50%; built CI/CD pipelines with Jenkins, Docker, ECR, and EKS, improving deployment stability by 25%.",
        "Integrated tools with self-hosted runners for faster, automated CI/CD workflows.",
        "Automated deployment of a .NET Windows app on EC2 using IIS, Terraform, and ASG; leveraged Jenkins, S3, and custom AMIs to handle 10M+ hits.",
        "Built scalable, containerized architecture on AWS EKS using Helm.",
        "Established code analysis framework using SonarQube, Checkmarx, and SCA.",
        "Deployed AI model on SageMaker using Docker and real-time endpoints.",
        "Production-grade Kubernetes deployment with Helm, autoscaling, and service discovery."
      ]
    },
    {
      role: "DevOps Intern",
      company: "Techtweek Infotech",
      location: "Mohali, Punjab",
      period: "Jan 2024 – April 2024",
      description: [
        "Learned and practiced DevOps, cloud services, and IaC under senior mentorship.",
        "Supported AWS provisioning tasks with Terraform; set up monitoring using CloudWatch.",
        "Gained exposure to DevOps workflows, Agile methodologies, and cross-functional teams."
      ]
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="experience" className="py-20 bg-light-100 dark:bg-dark-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <motion.div 
          ref={ref}
          className="relative mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`mb-16 relative ${index % 2 === 0 ? 'md:pr-16 md:ml-auto md:mr-0' : 'md:pl-16 md:mr-auto md:ml-0'} md:w-1/2 px-6`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 md:top-6 left-0 md:left-auto md:right-0 w-4 h-4 rounded-full bg-primary-500 shadow-lg md:-ml-2 md:mr-0">
                <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75"></div>
              </div>
              
              {/* Content */}
              <div className={`relative card p-6 ${
                index % 2 === 0 
                  ? 'md:text-right ml-6 md:ml-0' 
                  : 'ml-6 md:ml-0 md:-mr-1'
              }`}>
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30">
                  {exp.company}
                </span>
                <h3 className="text-xl font-bold font-display mb-1 text-dark-800 dark:text-light-100">
                  {exp.role}
                </h3>
                <div className="flex items-center text-dark-500 dark:text-light-400 mb-4 text-sm">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className={`space-y-2 text-dark-700 dark:text-light-300 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;