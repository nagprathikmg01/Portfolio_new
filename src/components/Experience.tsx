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
    <section id="experience" className="py-16 px-6 max-w-[1100px] mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-10">Experience & Leadership</h2>

      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.title} className="group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <div>
                <h3 className="text-lg font-bold text-primary">{exp.title}</h3>
                <div className="text-base text-accent font-medium">{exp.organization}</div>
              </div>
              <div className="text-sm text-secondary mt-1 md:mt-0 font-medium">
                {exp.period}
              </div>
            </div>

            <ul className="list-disc list-outside ml-5 space-y-1.5 text-secondary text-sm md:text-base leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i} className="pl-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
