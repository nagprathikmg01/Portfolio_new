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
    <section id="certifications" className="py-12 px-4 border-b border-gray-900 bg-background">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-8 border-l-4 border-accent pl-4">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((group) => (
            <div key={group.category} className="bg-surface p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-secondary text-sm">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{item}</span>
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
