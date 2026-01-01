import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/fd2b9c6608f7c62cf798ae0a5663f22317471fe8.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Nag Prathik M G
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-gray-200 mb-6"
            >
              <span className="text-primary">Full-Stack Developer</span> & <span className="text-secondary">Cloud Enthusiast</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              Passionate about building scalable web applications and intelligent solutions.
              Dedicated to delivering clean, efficient code and solving complex engineering challenges.
              Seeking opportunities to contribute to innovative projects in a dynamic environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start"
            >
              <a
                href="mailto:nagprathikmg@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-surface hover:bg-white/5 border border-white/10 rounded-md text-white transition-all duration-300 hover:border-primary/50 group"
              >
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span>nagprathikmg@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 rounded-md text-gray-300">
                <Phone className="w-5 h-5 text-secondary" />
                <span>89935 05765</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {[
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com", label: "GitHub" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface rounded-md hover:bg-white/5 transition-all duration-300 text-gray-400 hover:text-primary border border-white/10"
                  aria-label={item.label}
                >
                  <item.Icon className="w-6 h-6" />
                </a>
              ))}
              <div className="flex items-center gap-2 text-gray-400 px-4 py-2 border border-transparent">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bangalore, India</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 rounded-full blur-3xl"></div>

              <div className="absolute inset-4 rounded-full border border-white/10 p-2">
                <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-surface">
                  <img
                    src={profileImage}
                    alt="Nag Prathik M G"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Status Badge - Minimal */}
              <motion.div
                className="absolute top-0 right-10 py-2 px-4 bg-surface/90 border border-primary/20 rounded-full shadow-lg z-30 flex items-center gap-2 backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500 box-shadow-green"></div>
                <span className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
