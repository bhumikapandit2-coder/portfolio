import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
        >
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            Hello! I am a passionate <strong className="text-white">Python Full Stack Developer</strong> with a strong foundation in both backend and frontend technologies. I thrive on building robust APIs, designing efficient databases, and creating intuitive user interfaces.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            My journey in software development has equipped me with a deep understanding of <strong className="text-white">Python, Django, React, and SQL</strong>. I am driven by the challenge of solving real-world problems through code and continuously seeking out new technologies to expand my skill set.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            I am a quick learner and highly adaptable, always looking for opportunities to contribute to impactful projects. Whether it's architecting a scalable backend or polishing a frontend component, I bring dedication and a detail-oriented approach to everything I build.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
