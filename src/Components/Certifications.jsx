import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  'Python Programming',
  'SQL',
  'Django',
  'React',
  'Git & GitHub'
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Licenses & <span className="text-primary">Certifications</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass px-6 py-4 rounded-full flex items-center gap-3 glass-hover hover:-translate-y-1 transition-transform"
            >
              <FaCertificate className="text-accent text-xl" />
              <span className="text-white font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
