import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      name: 'Google Cloud Engineering Certificate',
      provider: 'Google Cloud',
    },
    {
      name: 'AWS Academy Cloud Foundations',
      provider: 'AWS Academy',
      badge: 'Training Badge',
    },
    {
      name: 'AWS Cloud Architect Fundamentals',
      provider: 'AWS Academy',
      badge: 'Training Badge',
    },
    {
      name: 'Inspect Rich Documents with Gemini',
      provider: 'Google Cloud',
      badge: 'Skill Badge',
    },
    {
      name: 'Multimodality and Multimodal RAG',
      provider: 'Google Cloud',
      badge: 'Skill Badge',
    },
    {
      name: 'Develop Gemini Apps with Gemini & Streamlit',
      provider: 'Google Cloud',
      badge: 'Skill Badge',
    },
    {
      name: 'Networking Basics',
      provider: 'Cisco',
      badge: 'Skill Badge',
    },
  ];

  const colorVariants = [
    'from-amber-500/20 to-yellow-500/20',
    'from-emerald-500/20 to-green-500/20',
    'from-rose-500/20 to-pink-500/20',
    'from-indigo-500/20 to-purple-500/20',
    'from-teal-500/20 to-cyan-500/20',
    'from-orange-500/20 to-red-500/20',
    'from-violet-500/20 to-purple-500/20',
  ];

  const iconColors = ['text-amber-400', 'text-emerald-400', 'text-rose-400', 'text-indigo-400', 'text-teal-400', 'text-orange-400', 'text-violet-400'];

  return (
    <section id="certifications" className="py-24 px-4 relative">
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
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-slate-400 mb-12 text-lg"
          >
            Professional certifications and skill badges
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group bg-gradient-to-br ${colorVariants[index % colorVariants.length]} backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-amber-500/10`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${colorVariants[index % colorVariants.length]} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Award className={`w-6 h-6 ${iconColors[index % iconColors.length]}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-3 font-medium">{cert.provider}</p>
                    {cert.badge && (
                      <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-lg text-xs font-semibold border border-emerald-500/30">
                        {cert.badge}
                      </span>
                    )}
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
