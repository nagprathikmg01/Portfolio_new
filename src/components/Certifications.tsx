import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './ui/hover-card';

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      name: 'Google Cloud Engineering Certificate',
      provider: 'Google Cloud',
      badge: 'Professional Certificate',
      image: 'https://placehold.co/600x400?text=Google+Cloud+Certificate',
      link: '#'
    },
    {
      name: 'AWS Academy Cloud Foundations',
      provider: 'AWS Academy',
      badge: 'Training Badge',
      image: 'https://placehold.co/600x400?text=AWS+Foundations',
      link: '#'
    },
    {
      name: 'AWS Cloud Architect Fundamentals',
      provider: 'AWS Academy',
      badge: 'Training Badge',
      image: 'https://placehold.co/600x400?text=AWS+Architect',
      link: '#'
    },
    {
      name: 'Inspect Rich Documents with Gemini',
      provider: 'Google Cloud',
      badge: 'Skill Badge',
      image: 'https://placehold.co/600x400?text=Gemini+Documents',
      link: '#'
    },
    {
      name: 'Multimodality and Multimodal RAG',
      provider: 'Google Cloud',
      badge: 'Skill Badge',
      image: 'https://placehold.co/600x400?text=Multimodal+RAG',
      link: '#'
    },
    {
      name: 'Develop Gemini Apps with Gemini & Streamlit',
      provider: 'Google Cloud',
      badge: 'Skill Badge',
      image: 'https://placehold.co/600x400?text=Gemini+Apps',
      link: '#'
    },
    {
      name: 'Networking Basics',
      provider: 'Cisco',
      badge: 'Skill Badge',
      image: 'https://placehold.co/600x400?text=Networking+Basics',
      link: '#'
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 relative bg-background">
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            Professional achievements and continuous learning
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group h-full"
                    >
                      <div className="h-full bg-surface/50 backdrop-blur-xl rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
                        <div className="flex items-start gap-4 z-10 relative">
                          <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Award className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors pr-6">
                              {cert.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-3 font-medium">{cert.provider}</p>
                            {cert.badge && (
                              <span className="inline-block px-3 py-1 bg-white/5 text-gray-300 rounded-md text-xs font-medium border border-white/10 group-hover:border-primary/20">
                                {cert.badge}
                              </span>
                            )}
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white absolute top-0 right-0 transition-colors opacity-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-0 border-white/10 bg-surface">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-auto rounded-md"
                    />
                    <div className="p-3">
                      <p className="text-sm font-semibold text-white">{cert.name}</p>
                      <p className="text-xs text-gray-400">Click to view certificate</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
