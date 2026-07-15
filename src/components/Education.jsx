import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 relative bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-primary">Education</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 relative pl-8 md:pl-0"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] md:left-1/2 md:-ml-2 top-1 shadow-[0_0_10px_#38BDF8]"></div>
            
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="glass p-6 rounded-2xl glass-hover relative">
                <span className="text-primary font-bold text-sm mb-2 block">Present</span>
                <h3 className="text-xl font-bold text-white mb-1">Python Full Stack Development Training</h3>
                <p className="text-text-secondary">Intensive training program focusing on React, Django, Python, and SQL.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 relative pl-8 md:pl-0 flex justify-end"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] md:left-1/2 md:-ml-2 top-1 shadow-[0_0_10px_#2563EB]"></div>
            
            <div className="md:w-1/2 md:pl-12 w-full">
              <div className="glass p-6 rounded-2xl glass-hover relative">
                <span className="text-accent font-bold text-sm mb-2 block">Graduated</span>
                <h3 className="text-xl font-bold text-white mb-1">Bachelor's Degree</h3>
                <p className="text-text-secondary">Strong foundation in computer science principles and software engineering.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
