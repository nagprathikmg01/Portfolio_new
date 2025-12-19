import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'E-commerce Science and Engineering',
      institution: 'NITTE Meenakshi Institute of Technology (NMIT)',
      location: 'Bangalore',
      period: '2023 - 2027',
      grade: 'CGPA: 8.56/10 (4th semester)',
    },
    {
      degree: '12th (PUC)',
      institution: 'Amidala PU College',
      location: 'Puttur, Dakshina Kannada',
      period: '2021 - 2023',
      grade: '94%',
    },
    {
      degree: '10th',
      institution: 'St Joseph High School',
      location: 'Hennur, Mysore',
      period: '2010 - 2021',
      grade: '90.88%',
    },
  ];

  const colorVariants = [
    'from-cyan-500/20 to-blue-500/20',
    'from-rose-500/20 to-pink-500/20',
    'from-violet-500/20 to-purple-500/20',
  ];

  const iconColors = ['text-cyan-400', 'text-rose-400', 'text-violet-400'];

  return (
    <section id="education" className="py-24 px-4 relative">
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            My academic journey and achievements
          </motion.p>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree + edu.institution}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-primary mb-3 font-semibold text-lg">{edu.field}</p>
                    )}
                    <p className="text-gray-300 mb-3 font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-gray-300">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-gray-300">{edu.location}</span>
                      </div>
                    </div>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-xl text-sm font-semibold border border-primary/30">
                      {edu.grade}
                    </div>
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
