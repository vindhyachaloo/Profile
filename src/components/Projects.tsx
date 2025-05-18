import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 1,
      title: "AWS EC2 Web Application",
      description: "Deployed a scalable web application with Nginx as reverse proxy and load balancer on AWS EC2 instances for high availability.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AWS", "Nginx", "DevOps", "Load Balancing"],
      category: "devops",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Zomato Clone Landing Page",
      description: "Built a responsive landing page clone of Zomato using HTML5 and CSS3 with modern design patterns and mobile-first approach.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["HTML", "CSS", "Frontend", "Responsive"],
      category: "frontend",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "SLIETO Food App",
      description: "Intra-campus food ordering application with Firebase authentication, Razorpay integration, and real-time database for order tracking.",
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Firebase", "Razorpay", "React", "Real-time"],
      category: "fullstack",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Dockerized Node.js Application",
      description: "Containerized a Node.js/React application with automated CI/CD pipeline for seamless deployment and scaling.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Docker", "CI/CD", "Node.js", "DevOps"],
      category: "devops",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Content Management Tool",
      description: "Basic JavaScript-powered content management system with HTML/CSS frontend for creating, editing, and publishing content.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "HTML", "CSS", "CMS"],
      category: "frontend",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Kubernetes on EKS Deployment",
      description: "Production-grade Kubernetes deployment on AWS EKS with Helm charts and rolling updates for zero-downtime deployments.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Kubernetes", "EKS", "Helm", "AWS"],
      category: "devops",
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { label: "All", value: "all" },
    { label: "DevOps", value: "devops" },
    { label: "Frontend", value: "frontend" },
    { label: "Full Stack", value: "fullstack" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-light-200 dark:bg-dark-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.value}
              onClick={() => setFilter(filterItem.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === filterItem.value
                  ? 'bg-primary-600 text-white dark:bg-primary-700'
                  : 'bg-light-300 text-dark-600 hover:bg-light-400 dark:bg-dark-700 dark:text-light-300 dark:hover:bg-dark-600'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              className="card group overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-light-100">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-light-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.links.live} 
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium flex items-center text-dark-700 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.links.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium flex items-center text-dark-700 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-dark-500 dark:text-light-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;