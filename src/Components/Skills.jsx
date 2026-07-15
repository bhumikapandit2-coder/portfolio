import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaPython, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiDjango, SiMysql, SiSqlite, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3]" /> },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
      { name: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
      { name: 'Django REST', icon: <SiDjango className="text-[#092E20]" /> },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-[#003B57]" /> },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
      
    ]
  },
  {
    title: 'Other',
    skills: [
      { name: 'REST APIs', icon: <FaDatabase className="text-gray-400" /> },
      { name: 'Authentication', icon: <FaDatabase className="text-gray-400" /> },
      { name: 'Responsive Design', icon: <FaReact className="text-gray-400" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative bg-background/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-3">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm text-text-secondary text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
