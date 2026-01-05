import { Download, Github } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="py-24 px-6 flex flex-col justify-center">
      <div className="max-w-[1100px] mx-auto w-full text-left">

        {/* Name */}
        <h1 className="text-5xl md:text-[3.5rem] font-bold text-primary tracking-tight mb-4">
          Nag Prathik M G
        </h1>

        {/* Creative Accent Bar - Subtle brand element */}
        <div className="w-12 h-[3px] bg-accent mb-8 rounded-full"></div>

        {/* Role */}
        <div className="text-xl md:text-2xl text-primary font-medium mb-3">
          Cloud, AI & Full-Stack Developer | Engineering Student
        </div>

        {/* Meta Info */}
        <div className="text-base md:text-lg text-secondary space-y-1 mb-8">
          <p>React · Node · Cloud · AI</p>
          <p>B.E. ISE @ NMIT | CGPA 8.45</p>
        </div>

        {/* CTAs */}
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-md text-sm font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-700 text-primary rounded-md text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <Github size={18} /> View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
