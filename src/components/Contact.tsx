import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nagprathikmg@gmail.com',
      href: 'mailto:nagprathikmg@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 89935 05765',
      href: 'tel:+918993505765',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      href: '#',
    },
  ];

  const languages = ['English', 'Kannada', 'Hindi', 'Telugu'];

  const contactColors = ['text-rose-400', 'text-cyan-400', 'text-emerald-400'];
  const contactBgColors = ['bg-rose-500/10', 'bg-cyan-500/10', 'bg-emerald-500/10'];

  return (
    <section id="contact" className="py-24 px-4 relative">
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
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-slate-400 mb-12 text-lg"
          >
            Let's connect and build something amazing together
          </motion.p>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl mb-8 hover:border-primary/30 transition-all duration-300">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                >
                  <div className={`inline-flex p-4 ${contactBgColors[index]} rounded-xl mb-4`}>
                    <info.icon className={`w-7 h-7 ${contactColors[index]}`} />
                  </div>
                  <h3 className="text-white mb-3 font-semibold">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className={`text-gray-300 ${contactColors[index]} hover:opacity-80 transition-all text-sm font-medium block`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm font-medium">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8 mb-8">
              <h3 className="text-white mb-6 text-center text-xl font-semibold">Connect with me</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-4 bg-white/5 rounded-xl hover:from-primary hover:to-secondary hover:bg-gradient-to-br transition-all duration-300 shadow-lg border border-white/10 hover:border-primary/50"
                  >
                    <link.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-white mb-6 text-center text-xl font-semibold">Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-5 py-2.5 bg-primary/10 text-gray-200 rounded-xl text-sm font-medium border border-primary/30 hover:border-primary/50 transition-all duration-200 hover:bg-primary/20"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center text-gray-400 text-sm space-y-2"
          >
            <p>© 2024 Nag Prathik M G. All rights reserved.</p>
            <p>
              I hereby declare that the information provided is accurate to the best of my knowledge and belief.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
