export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Web / Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'Vite', 'Framer Motion'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Google Cloud Platform (GCP)', 'AWS', 'Docker', 'CI/CD', 'Firebase'],
    },
    {
      title: 'AI / ML',
      skills: ['Generative AI', 'Gemini API', 'Prompt Engineering', 'LangChain', 'TensorFlow', 'PyTorch'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="py-12 px-4 border-b border-gray-900 bg-background">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-8 border-l-4 border-accent pl-4">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider border-b border-gray-800 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-1.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-primary text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
