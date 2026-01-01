import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code2, Award, Globe } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 px-4 relative bg-background">
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
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <div className="bg-surface/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl hover:border-primary/30 transition-all duration-300">
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a focused <span className="text-primary font-medium">Full-Stack Developer</span> currently pursuing a B.E. in E-commerce
                Science and Engineering at <span className="text-white font-medium">NITTE Meenakshi Institute of Technology (NMIT)</span>,
                Bangalore. With a <span className="text-primary font-medium">CGPA of 8.56</span>, I combine strong academic foundations with practical expertise in cloud computing and modern web development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My technical experience encompasses building scalable applications using React, Node.js, and cloud platforms like GCP and AWS.
                Beyond coding, I actively contribute to the tech community as a <span className="text-primary font-medium">Google Student Ambassador</span> and hold leadership roles in campus organizations, demonstrating both technical proficiency and soft skills.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '8.56', label: 'CGPA', icon: GraduationCap },
                { value: '10+', label: 'Projects', icon: Code2 },
                { value: '7+', label: 'Certifications', icon: Award },
                { value: '4', label: 'Languages', icon: Globe },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-surface rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
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
