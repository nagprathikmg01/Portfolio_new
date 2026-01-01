import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Karnataka Agricultural App UI',
      description:
        'A comprehensive responsive web application designed for agricultural management. Features include real-time crop analytics, soil health monitoring, and AI-driven recommendations for optimal farming practices.',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'AI Integration'],
      highlights: [
        'Interactive dashboards for real-time monitoring',
        'AI-model integration for crop prediction',
        'Responsive design optimized for rural connectivity',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Ecothrift — Sustainable Marketplace',
      description:
        'A full-featured e-commerce platform focusing on sustainable second-hand trading. Includes secure user authentication, dynamic product management, and a seamless buyer-seller interaction flow.',
      tech: ['React', 'Node.js', 'Context API', 'LocalStorage', 'CSS Modules'],
      highlights: [
        'Secure authentication & user management',
        'Comprehensive product CRUD operations',
        'Advanced search and filtering capabilities',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Drone Navigation & Drift Detection',
      description:
        'Research-led project developing a transformer-based AI model for autonomous drone stability. Focuses on real-time drift detection and adaptive path correction in dynamic environments.',
      tech: ['Python', 'PyTorch', 'TensorFlow', 'Streamlit', 'Deep Learning'],
      highlights: [
        'Transformer architecture for motion prediction',
        'Real-time environmental drift analysis',
        'Interactive visualization dashboard',
      ],
      badge: 'Final Year Project',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          >
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            Selected works demonstrating technical expertise and innovation
          </motion.p>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Github className="w-32 h-32 text-primary transform rotate-12 translate-x-10 -translate-y-10" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold tracking-wide border border-primary/20">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-lg hover:bg-primary hover:text-white text-gray-400 transition-all duration-300 border border-white/10 hover:border-primary"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-lg hover:bg-primary hover:text-white text-gray-400 transition-all duration-300 border border-white/10 hover:border-primary"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-md text-sm font-medium border border-white/10 group-hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
