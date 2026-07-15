import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';

const achievements = [
  'Built multiple full-stack projects showcasing end-to-end development skills.',
  'Demonstrated strong problem-solving skills through complex backend logic implementation.',
  'Gained hands-on experience designing, building, and consuming REST APIs.',
  'Passionate learner continuously exploring new web technologies and frameworks.',
  'Quick adaptability to new environments, tools, and best practices.'
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 relative bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key <span className="text-primary">Achievements</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 text-[200px] text-white/5 -z-10 rotate-12">
            <FiAward />
          </div>
          
          <ul className="space-y-6">
            {achievements.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <FiCheckCircle className="text-accent text-xl" />
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
