export function Skills() {
  const skills = [
    { category: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL'] },
    { category: 'Web / Frontend', items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
    { category: 'Cloud & DevOps', items: ['Google Cloud Platform', 'AWS', 'Docker', 'Git/GitHub'] },
    { category: 'AI / ML', items: ['TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'] },
    { category: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['VS Code', 'Postman', 'Figma', 'Linux'] },
  ];

  return (
    <section id="skills" className="py-16 px-6 max-w-[1100px] mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-8">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors"
          >
            <h3 className="text-base font-semibold text-primary mb-3">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {skillGroup.items.map((item, i) => (
                <span key={item} className="text-secondary text-sm">
                  {item}
                  {i < skillGroup.items.length - 1 && <span className="text-gray-800 ml-3">|</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
