import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Cloud, Code, Database, Wrench, Users } from 'lucide-react';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['GCP', 'AWS', 'Java'],
    },
    {
      title: 'Languages',
      icon: Code,
      skills: ['Java', 'Python', 'C', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'AI & Frameworks',
      icon: Wrench,
      skills: ['Generative AI', 'Gemini API', 'Prompt Engineering'],
    },
    {
      title: 'Tools & Version Control',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Teamwork', 'Leadership'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
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
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            Technologies I work with to bring ideas to life
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 text-gray-200 rounded-lg text-sm font-medium border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                    >
                      {skill}
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
