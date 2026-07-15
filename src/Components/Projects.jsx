import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Leave Approval Management System',
    description: 'A role-based leave management application where employees can submit leave requests and managers can approve or reject them.',
    features: ['JWT Authentication', 'Employee/Manager Dashboards', 'Approval Workflow', 'REST API'],
    tech: ['React', 'Django', 'Django REST Framework', 'SQLite', 'JWT'],
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Student Management System',
    description: 'A comprehensive CRUD application for managing student records with secure authentication and a responsive user interface.',
    features: ['CRUD Operations', 'Authentication', 'Responsive UI'],
    tech: ['Python', 'Django', 'Bootstrap', 'MySQL'],
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Expense Tracker',
    description: 'Personal finance application to track income, expenses, and current balance with interactive visual charts.',
    features: ['Income/Expense Tracking', 'Visual Charts', 'Balance Calculation'],
    tech: ['JavaScript', 'React', 'Tailwind CSS'],
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Real-time weather application integrating third-party Weather APIs to provide location-based accurate forecasts.',
    features: ['API Integration', 'Location-based', 'Real-time Data'],
    tech: ['React', 'API', 'Tailwind CSS'],
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    title: 'To-Do Application',
    description: 'A clean and intuitive task management application utilizing local storage for data persistence across sessions.',
    features: ['Task Management', 'Local Storage', 'Clean UI'],
    tech: ['React', 'Tailwind CSS'],
    featured: false,
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-2xl overflow-hidden flex flex-col h-full glass-hover relative group ${project.featured ? 'md:col-span-2 xl:col-span-2 border-primary/30' : ''}`}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  Featured
                </div>
              )}
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-secondary mb-6 flex-grow">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Features</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-md text-text-secondary">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs font-medium text-accent">#{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                  <a href={project.github} className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
                    <FiGithub /> <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors ml-4">
                    <FiExternalLink /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
