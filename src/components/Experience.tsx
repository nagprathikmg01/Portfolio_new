import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Google Student Ambassador',
      organization: 'Google',
      period: 'Jul 2025 – Present',
      description: 'Representing Google on campus and promoting Google technologies to students.',
    },
    {
      title: 'Head of Events – Team Alkafulla',
      organization: 'NMIT',
      period: 'Dec 2024 – Present',
      description: 'Leading event planning and execution for the campus technical team.',
    },
    {
      title: 'Event Team – DataWiki NMIT',
      organization: 'NMIT',
      period: 'Oct 2025 – Present',
      description: 'Organizing data science and analytics events for the campus community.',
    },
    {
      title: 'PR & Marketing – CloudHub NMIT',
      organization: 'NMIT',
      period: 'Sep 2025 – Present',
      description: 'Managing public relations and marketing initiatives for CloudHub.',
    },
  ];

  const colorVariants = [
    'from-blue-500/20 to-cyan-500/20',
    'from-purple-500/20 to-pink-500/20',
    'from-emerald-500/20 to-teal-500/20',
    'from-amber-500/20 to-orange-500/20',
  ];

  const iconColors = ['text-blue-400', 'text-purple-400', 'text-emerald-400', 'text-amber-400'];

  return (
    <section id="experience" className="py-24 px-4 relative">
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
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
          >
            Experience & <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Leadership</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            My journey in tech and leadership roles
          </motion.p>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-secondary/10"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    <Briefcase className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 mb-3 font-medium">{exp.organization}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
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
