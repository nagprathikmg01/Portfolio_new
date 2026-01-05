export function Education() {
  const education = [
    {
      institution: 'NMIT Bangalore',
      degree: 'B.E. Information Science and Engineering',
      period: '2023 - 2027',
      score: 'CGPA: 8.45',
    },
    {
      institution: 'Amidala PU College',
      degree: '12th Grade (Pre-University)',
      period: '2021 - 2023',
      score: '94%',
    },
    {
      institution: 'St Joseph High School',
      degree: '10th Grade',
      period: '2010 - 2021',
      score: '90.88%',
    },
  ];

  return (
    <section id="education" className="py-12 px-4 border-b border-gray-900 bg-background">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-8 border-l-4 border-accent pl-4">Education</h2>

        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.institution} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors bg-surface">
              <div>
                <h3 className="text-lg font-bold text-primary">{edu.institution}</h3>
                <div className="text-secondary">{edu.degree}</div>
              </div>
              <div className="mt-2 md:mt-0 text-right md:text-left">
                <div className="text-sm text-secondary font-mono bg-gray-900 px-2 py-1 rounded inline-block mb-1 md:mb-0 md:mr-4">
                  {edu.period}
                </div>
                <div className="text-accent font-semibold text-sm inline-block">
                  {edu.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
