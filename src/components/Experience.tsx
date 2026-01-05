export function Experience() {
  const experiences = [
    {
      title: 'Google Student Ambassador',
      organization: 'Google',
      period: 'Jul 2025 – Present',
      points: [
        'Represented Google on campus, organizing workshops on Cloud and AI technologies.',
        'Facilitated hands-on coding sessions for 200+ students, bridging the gap between theory and industry implementation.',
        'Coordinated with cross-functional teams to execute region-wide technical events.'
      ]
    },
    {
      title: 'Head of Events',
      organization: 'Team Adwaitha',
      period: '2024 – Present',
      points: [
        'Led a team of 15+ members to organize college-level technical fests and hackathons.',
        'Managed event logistics, budget allocation, and stakeholder communication for seamless execution.',
        'Implemented new outreach strategies that increased student participation by 40%.'
      ]
    },
    {
      title: 'Event Team / PR',
      organization: 'DataWiz & CloudZilla',
      period: '2023 – Present',
      points: [
        'Orchestrated marketing campaigns for data science and cloud computing events.',
        'Managed public relations and corporate communications, establishing partnerships with industry speakers.',
        'Delivered technical community engagement initiatives enhancing peer-to-peer learning.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 px-4 border-b border-gray-900 bg-background">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-8 border-l-4 border-accent pl-4">Experience & Leadership</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{exp.title}</h3>
                  <div className="text-lg text-secondary font-medium">{exp.organization}</div>
                </div>
                <div className="text-sm text-secondary/80 font-mono mt-1 md:mt-0 bg-gray-900 px-2 py-1 rounded inline-block">
                  {exp.period}
                </div>
              </div>

              <ul className="list-disc list-outside ml-5 space-y-1.5 text-secondary">
                {exp.points.map((point, i) => (
                  <li key={i} className="pl-1 leading-relaxed text-sm md:text-base">
                    {point}
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
