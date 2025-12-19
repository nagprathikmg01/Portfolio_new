import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import profileImage from '../assets/fd2b9c6608f7c62cf798ae0a5663f22317471fe8.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4 backdrop-blur-sm"
            >
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">Welcome to My Portfolio</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Nag Prathik M G
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6"
            >
              <span className="text-secondary">Cloud</span>, <span className="text-accent">AI</span> & Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              Innovative Full-Stack Developer with expertise in cloud infrastructure,
              generative AI, and technical leadership. Seeking internship opportunities
              to apply my development skills, build scalable solutions, and grow in
              real-world engineering environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start"
            >
              <a
                href="mailto:nagprathikmg@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white transition-all duration-300 hover:scale-105 hover:border-primary/50 group"
              >
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span>nagprathikmg@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:border-secondary/50 transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
                <span>89935 05765</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {[
                { Icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-[#0077b5]" },
                { Icon: Github, href: "https://github.com", color: "hover:bg-[#333]" },
                { Icon: MapPin, text: "Bangalore, India", static: true }
              ].map((item, index) => (
                item.static ? (
                  <div key={index} className="flex items-center gap-2 text-gray-400 px-4 py-2">
                    <item.Icon className="w-5 h-5 text-accent" />
                    <span>{item.text}</span>
                  </div>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 rounded-full hover:scale-110 transition-all duration-300 hover:text-white ${item.color} border border-white/10`}
                  >
                    <item.Icon className="w-6 h-6" />
                  </a>
                )
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative perspective-1000"
          >
            <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem]">
              {/* Animated gradient rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <motion.div
                className="absolute inset-4 bg-gradient-to-tr from-primary to-secondary rounded-full blur-xl opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile image container */}
              <motion.div
                className="absolute inset-0 rounded-full p-2 bg-gradient-to-tr from-white/20 to-white/0 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-20"></div>
                  <img
                    src={profileImage}
                    alt="Nag Prathik M G"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 bg-surface border border-white/10 rounded-2xl shadow-xl z-30 flex items-center gap-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-white">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
