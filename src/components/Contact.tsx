import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-[1100px] mx-auto text-center border-t border-gray-900">
      <h2 className="text-2xl font-bold text-primary mb-6">Let's Connect</h2>
      <p className="text-secondary mb-10 max-w-lg mx-auto leading-relaxed">
        I'm currently looking for internship opportunities. Feel free to reach out via email or LinkedIn.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
          href="mailto:nagprathikmg@gmail.com"
          className="flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white rounded-md hover:bg-blue-600 transition-colors font-medium text-sm"
        >
          <Mail size={18} /> nagprathikmg@gmail.com
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-700 text-primary rounded-md hover:border-accent hover:text-accent transition-colors font-medium text-sm"
        >
          <Linkedin size={18} /> LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-700 text-primary rounded-md hover:border-accent hover:text-accent transition-colors font-medium text-sm"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </section>
  );
}
