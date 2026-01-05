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
    <section id="education" className="py-16 px-6 max-w-[1100px] mx-auto bg-surface/30">
      <h2 className="text-2xl font-bold text-primary mb-10">Education</h2>

      <div className="space-y-8">
        {education.map((edu) => (
          <div key={edu.institution} className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 className="text-lg font-bold text-primary">{edu.institution}</h3>
              <div className="text-base text-secondary">{edu.degree}</div>
            </div>
            <div className="mt-1 md:mt-0 text-left md:text-right">
              <div className="text-sm text-secondary font-medium block mb-1">
                {edu.period}
              </div>
              <div className="text-accent text-sm font-medium">
                {edu.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
