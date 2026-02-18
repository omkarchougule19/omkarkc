const education = [
  {
    degree: "Master of Science in Information Management",
    school: "University of Illinois Urbana-Champaign",
    period: "Aug 2025 – May 2027",
    coursework: [
      "Advanced Database Management Systems",
      "Data Warehousing",
      "Cloud Solution Architecture",
      "Data Visualization",
    ],
  },
  {
    degree: "Bachelor of Engineering (Computer Science)",
    school: "Savitribai Phule Pune University",
    period: "Aug 2017 – Jun 2021",
    coursework: [],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <p className="fade-up text-sm tracking-[0.2em] uppercase text-primary mb-3">Education</p>
        <h2 className="fade-up text-3xl md:text-4xl font-bold text-foreground mb-16">
          Academic Foundation
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="fade-up relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>
                <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-sm text-primary mb-3">{edu.school}</p>

                {edu.coursework.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-muted transition-colors cursor-default"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
