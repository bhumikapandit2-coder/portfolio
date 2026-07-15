import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <p className="text-accent font-medium text-lg tracking-wide uppercase">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Bhumika Sharma
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-text-secondary h-12">
            <TypeAnimation
              sequence={[
                'Python Full Stack Developer',
                2000,
                'React & Django Enthusiast',
                2000,
                'API & Database Expert',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </div>
          
          <p className="text-text-secondary text-lg leading-relaxed max-w-lg">
            Passionate about building scalable, responsive, and user-friendly web applications using Python, Django, React, JavaScript, and SQL.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="projects" smooth={true} duration={500} className="px-8 py-3 bg-primary hover:bg-blue-700 text-white rounded-full font-medium transition-colors cursor-pointer shadow-lg shadow-primary/30">
              View Projects
            </Link>
            <a
  href="/resume.pdf.docx"
  download="Bhumika_Sharma_Resume.pdf"
  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
>
  Download Resume
</a>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <a href="https://github.com/bhumikapandit2-coder" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent text-2xl transition-colors">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/bhumika-sharma-020472254/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent text-2xl transition-colors">
              <FiLinkedin />
            </a>
            <a href="mailto:bhumikapandit2@gmail.com" className="text-text-secondary hover:text-accent text-2xl transition-colors">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl absolute top-0 left-0 -z-10 animate-pulse" />
          <div className="glass rounded-2xl p-6 border-t border-l border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500 relative">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm font-mono text-accent mt-6 overflow-x-hidden">
              <code className="block">
                <span className="text-pink-400">class</span> <span className="text-yellow-300">Developer</span>:
              </code>
              <code className="block mt-1 ml-4">
                <span className="text-pink-400">def</span> <span className="text-blue-300">__init__</span>(<span className="text-orange-300">self</span>):
              </code>
              <code className="block mt-1 ml-8">
                <span className="text-orange-300">self</span>.name = <span className="text-green-300">"Bhumika"</span>
              </code>
              <code className="block mt-1 ml-8">
                <span className="text-orange-300">self</span>.role = <span className="text-green-300">"Full Stack"</span>
              </code>
              <code className="block mt-1 ml-8">
                <span className="text-orange-300">self</span>.passion = <span className="text-green-300">"Code"</span>
              </code>
              <code className="block mt-4 ml-4">
                <span className="text-pink-400">def</span> <span className="text-blue-300">build</span>(<span className="text-orange-300">self</span>):
              </code>
              <code className="block mt-1 ml-8 text-text-secondary">
                return "Innovation everyday"
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
