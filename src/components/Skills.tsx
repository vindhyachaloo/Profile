import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Cloud, Terminal, Code, Database, GitBranch } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillsData = [
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6 text-primary-500" />,
      skills: ["AWS (EC2, S3, Lambda, VPC, CloudFront)", "Azure", "GCP", "Terraform", "CloudFormation", "Infrastructure as Code"]
    },
    {
      category: "Containerization & Orchestration",
      icon: <Server className="w-6 h-6 text-primary-500" />,
      skills: ["Docker", "Kubernetes", "EKS", "Helm", "Container Registries", "Service Discovery"]
    },
    {
      category: "CI/CD & Automation",
      icon: <GitBranch className="w-6 h-6 text-primary-500" />,
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Puppet", "Ansible", "Pipeline Automation"]
    },
    {
      category: "Development & Tools",
      icon: <Code className="w-6 h-6 text-primary-500" />,
      skills: ["HTML/CSS", "Java", "Python", "Bash", "PowerShell", "Git", "VS Code"]
    },
    {
      category: "Monitoring & Operations",
      icon: <Terminal className="w-6 h-6 text-primary-500" />,
      skills: ["CloudWatch", "Prometheus", "Logging", "Alerting", "Performance Optimization", "Security"]
    },
    {
      category: "Databases & Backend",
      icon: <Database className="w-6 h-6 text-primary-500" />,
      skills: ["SQL", "NoSQL", "Database Management", "API Integration", "Microservices"]
    }
  ];

  const skillCardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-light-200 dark:bg-dark-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={skillCardVariants}
              className="card p-6 h-full"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary-50 dark:bg-primary-900/30 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 dark:text-light-100">
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center text-dark-700 dark:text-light-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-lg p-6 md:p-8 shadow-md"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark-800 dark:text-light-100">Additional Expertise</h3>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {[
              "Agile/Scrum", "Linux", "SonarQube", "Debugging", "Testing", 
              "Jmeter", "JIRA", "UI/UX (Figma)", "Data Structures", "Algorithms"
            ].map((skill, index) => (
              <span 
                key={index}
                className="bg-white dark:bg-dark-700 px-3 py-1.5 rounded-full text-sm font-medium text-dark-700 dark:text-light-300 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;