import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Adaptive Drone Navigation & Drift Detection System',
      problem: 'Drones struggle with stability and navigation in GPS-denied environments.',
      tech: ['Python', 'OpenCV', 'DroneKit', 'Raspberry Pi'],
      implementation: 'Built a real-time drift detection algorithm using optical flow sensor data to correct flight paths autonomously.',
      impact: 'Achieved 40% reduction in positional drift during indoor flight tests.',
      github: '#',
      live: '#',
    },
    {
      title: 'Karnataka Agricultural App UI',
      problem: 'Farmers lack accessible, localized digital tools for crop management.',
      tech: ['Figma', 'Prototyping', 'UX Research', 'Material Design'],
      implementation: 'Designed a high-fidelity mobile interface focusing on accessibility for non-tech-savvy users in rural Karnataka.',
      impact: 'Validation testing showed 90% task completion rate for core features.',
      github: '#',
      live: '#',
    },
    {
      title: 'EcoFinds – Sustainable Marketplace',
      problem: 'Consumers find it difficult to verify the sustainability claims of e-commerce products.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      implementation: 'Developed a full-stack marketplace with a custom sustainability scoring algorithm for listed products.',
      impact: 'Onboarded 15+ local sustainable brands during the beta phase.',
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-[1100px] mx-auto bg-surface/30">
      <h2 className="text-2xl font-bold text-primary mb-10">Projects</h2>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-4 mt-2 md:mt-0 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.github !== '#' && (
                  <a href={project.github} className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.live !== '#' && (
                  <a href={project.live} className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="text-secondary italic mb-4">{project.problem}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs border border-accent text-accent rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-secondary text-sm md:text-base">
              <li className="pl-1">
                <span className="font-semibold text-gray-300">Implementation:</span> {project.implementation}
              </li>
              <li className="pl-1">
                <span className="font-semibold text-gray-300">Impact:</span> {project.impact}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
