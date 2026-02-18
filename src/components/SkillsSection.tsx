const skillCategories = [
  {
    title: "Programming & Cloud",
    skills: [
      "Java 8", "Spring Boot", "Microservices", "Kafka", "Redis", "REST APIs",
      "Python", "SQL", "MySQL", "Oracle SQL", "Firebase",
      "AWS", "Docker", "OpenShift", "Kubernetes", "Git",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Python", "LLM-based Recommendation Systems", "Power BI",
      "Statistics", "Data Analysis",
    ],
  },
  {
    title: "Strategic & Leadership",
    skills: [
      "Project Scoping", "Information Consulting", "Competitive Analysis",
      "KPI Dashboarding", "Agile/Scrum Leadership", "Stakeholder Management",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <p className="fade-up text-sm tracking-[0.2em] uppercase text-primary mb-3">Skills</p>
        <h2 className="fade-up text-3xl md:text-4xl font-bold text-foreground mb-4">
          Technical & Strategic
        </h2>
        <p className="fade-up text-muted-foreground mb-16 max-w-lg">
          A hybrid skill set spanning engineering depth and business strategy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i} className="fade-up">
              <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-muted hover:text-foreground transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
