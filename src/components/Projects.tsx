import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Adaptive Drone Navigation & Drift Detection System',
      problem: 'Autonomous drones struggle with stability and drift in GPS-denied or dynamic environments.',
      tech: 'Python, PyTorch, TensorFlow, Streamlit, Deep Learning',
      contribution: 'Developed a transformer-based AI model to predict and correct motion drift in real-time.',
      impact: 'Achieved 92% accuracy in drift detection, enabling stable autonomous navigation in simulated environments.',
      github: '#',
      demo: '#',
    },
    {
      title: 'Karnataka Agricultural App UI',
      problem: 'Farmers lack accessible, real-time data for soil health and crop management tailored to local conditions.',
      tech: 'React, TypeScript, Vite, Tailwind CSS, Node.js',
      contribution: 'Designed and implemented a responsive UI with interactive dashboards for real-time crop analytics and soil monitoring.',
      impact: 'Created a user-friendly interface optimized for low-bandwidth rural connectivity, improving data accessibility.',
      github: '#',
      demo: '#',
    },
    {
      title: 'EcoFinds – Sustainable Marketplace',
      problem: 'Fragmentation in the second-hand market makes sustainable trading difficult and insecure.',
      tech: 'React, Node.js, Context API, LocalStorage',
      contribution: 'Built a full-featured e-commerce platform with secure authentication, dynamic product CRUD, and search filtering.',
      impact: 'Delivered a seamless buyer-seller flow, promoting sustainable consumption through a centralized marketplace.',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-12 px-4 border-b border-gray-900 bg-background">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-8 border-l-4 border-accent pl-4">Featured Projects</h2>

        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-secondary hover:text-accent text-sm flex items-center gap-1 font-medium">
                    <Github size={14} /> GitHub
                  </a>
                  <a href={project.demo} className="text-secondary hover:text-accent text-sm flex items-center gap-1 font-medium">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>

              <div className="mb-3 text-secondary italic text-sm border-l-2 border-gray-800 pl-3">
                {project.problem}
              </div>

              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold text-primary">Tech Stack:</span> <span className="text-secondary">{project.tech}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-primary">Contribution:</span> <span className="text-secondary">{project.contribution}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-primary">Impact:</span> <span className="text-secondary">{project.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
