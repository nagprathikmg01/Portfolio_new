import { motion } from 'motion/react';
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
        'Built a responsive agricultural web app with dashboards, crop management, analytics, and real-time insights. Integrated AI features including crop prediction, soil insights, weather recommendations, and an AI assistant.',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Node.js', 'Recharts', 'AI Integration'],
      highlights: [
        'Responsive agricultural web app with dashboards',
        'Crop management and analytics',
        'AI-powered crop prediction and soil insights',
        'Deployed on Vercel',
      ],
    },
    {
      title: 'Ecothrift — Sustainable Second-Hand Marketplace',
      description:
        'Developed a complete marketplace web application with authentication, product CRUD, seller dashboard, and purchase history. Added search & category filtering, responsive UI, smooth animations, and accessibility support.',
      tech: ['React', 'Node.js', 'CSS', 'Context API', 'LocalStorage', 'React Router'],
      highlights: [
        'Complete marketplace with authentication',
        'Product CRUD and seller dashboard',
        'Search and category filtering',
        'Persistent data with LocalStorage',
      ],
    },
    {
      title: 'Adaptive Drone Navigation & Drift Detection System',
      description:
        'Designing a transformer-based model for drone motion prediction and real-time drift detection. Implementing adaptive rerouting and alert mechanisms for stability in dynamic environments.',
      tech: ['Python', 'PyTorch', 'Streamlit', 'TensorFlow', 'Drone Learning', 'AI/ML'],
      highlights: [
        'Transformer-based motion prediction',
        'Real-time drift detection',
        'Adaptive rerouting mechanisms',
        'Interactive Streamlit dashboard',
      ],
      badge: 'Final Year Project',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
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
            className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
          >
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            Showcasing my best work and innovations
          </motion.p>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between mb-6 flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-primary/50">
                      <Github className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                    </button>
                    <button className="p-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-primary/50">
                      <ExternalLink className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <ul className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-300 flex items-start gap-3">
                        <span className="text-primary mt-1.5 text-xl">▸</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 text-gray-200 rounded-lg text-sm font-medium border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
