export function Certifications() {
  const certifications = [
    {
      category: 'Google Cloud',
      items: [
        'Google Cloud Engineering Certificate',
        'Inspect Rich Documents with Gemini (Skill Badge)',
        'Multimodality and Multimodal RAG (Skill Badge)',
        'Develop Gemini Apps with Gemini & Streamlit (Skill Badge)',
      ],
    },
    {
      category: 'AWS',
      items: [
        'AWS Academy Cloud Foundations',
        'AWS Cloud Architect Fundamentals',
      ],
    },
    {
      category: 'Networking',
      items: [
        'Cisco Networking Basics',
      ],
    },
  ];

  return (
    <section id="certifications" className="py-16 px-6 max-w-[1100px] mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-10">Certifications</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certifications.map((group) => (
          <div key={group.category}>
            <h3 className="text-lg font-bold text-white mb-4">{group.category}</h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-secondary text-sm leading-relaxed">
                  <span className="text-accent mt-1.5 text-[10px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
