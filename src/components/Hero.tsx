import { Download, Github } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 px-4 border-b border-gray-900 bg-background">
      <div className="max-w-[850px] mx-auto text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
          Nag Prathik M G
        </h1>

        <div className="text-xl md:text-2xl text-secondary font-medium">
          Cloud, AI & Full-Stack Developer | Engineering Student
        </div>

        <div className="text-base md:text-lg text-secondary/80 flex flex-wrap gap-2 items-center">
          <span>React · Node · Cloud · AI</span>
          <span className="hidden md:inline text-gray-700">•</span>
          <span>B.E. ISE @ NMIT | CGPA 8.45</span>
        </div>

        <div className="pt-4 flex gap-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-700 text-primary rounded-md text-sm font-medium hover:border-gray-500 transition-colors"
          >
            <Github size={16} /> View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
