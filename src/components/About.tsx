import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
          >
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            Passionate developer building the future with code
          </motion.p>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl hover:border-primary/30 transition-all duration-300">
            <div className="space-y-6 mb-10">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> currently pursuing B.E. in E-commerce
                Science and Engineering at <span className="text-secondary font-semibold">NITTE Meenakshi Institute of Technology (NMIT)</span>,
                Bangalore, with a CGPA of <span className="text-primary font-semibold">8.56</span>. My expertise spans across cloud platforms
                (GCP, AWS), modern web technologies, and AI integration.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I have hands-on experience building scalable web applications, implementing
                generative AI features, and working with modern frameworks like React,
                TypeScript, and Node.js. I'm also actively involved in various technical
                communities including <span className="text-primary font-semibold">Google Student Ambassador</span>, and hold leadership positions
                in multiple campus organizations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: '8.56', label: 'CGPA', icon: '🎓' },
                { value: '10+', label: 'Projects', icon: '💻' },
                { value: '7+', label: 'Certifications', icon: '🏆' },
                { value: '4', label: 'Languages', icon: '🌐' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
