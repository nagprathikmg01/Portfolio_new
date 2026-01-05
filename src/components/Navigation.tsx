import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-gray-900 h-16 flex items-center">
      <div className="max-w-[1100px] mx-auto w-full px-6 flex justify-between items-center">
        {/* Left: Name */}
        <div className="font-bold text-lg text-primary tracking-tight">
          Nag Prathik M G
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-secondary">
          <a href="/resume.pdf" className="hover:text-primary flex items-center gap-2 transition-colors">
            <Download size={16} /> Resume
          </a>
          <div className="h-4 w-[1px] bg-gray-800"></div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-2 transition-colors">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-2 transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="mailto:nagprathikmg@gmail.com" className="hover:text-primary flex items-center gap-2 transition-colors">
            <Mail size={16} /> Email
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-primary p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-gray-900 p-4 flex flex-col gap-4 md:hidden shadow-xl">
          <a href="/resume.pdf" className="text-left py-2 flex items-center gap-2 text-secondary hover:text-primary pl-2">
            <Download size={16} /> Download Resume
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-left py-2 flex items-center gap-2 text-secondary hover:text-primary pl-2">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-left py-2 flex items-center gap-2 text-secondary hover:text-primary pl-2">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="mailto:nagprathikmg@gmail.com" className="text-left py-2 flex items-center gap-2 text-secondary hover:text-primary pl-2">
            <Mail size={16} /> Email
          </a>
        </div>
      )}
    </nav>
  );
}
