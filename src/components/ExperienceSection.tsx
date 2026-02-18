const experiences = [
  {
    title: "Project Manager",
    company: "Business Intelligence Group (BIG), UIUC",
    period: "Jan 2026 – Present",
    bullets: [
      "Leading cross-functional enterprise project",
      "Designing scalable centralized database architecture",
      "Translating stakeholder requirements into technical design",
      "Overseeing data modeling and normalization",
      "Ensuring BI-readiness and long-term scalability",
    ],
    metrics: [],
  },
  {
    title: "Software Developer",
    company: "Infosys",
    period: "Aug 2022 – Jul 2025",
    bullets: [
      "Built scalable Spring Boot microservices for US-based banking clients",
      "Implemented Kafka-based asynchronous messaging",
      "Deployed 10+ microservices on OpenShift",
      "Optimized SQL queries for performance",
      "Contributed to 2 major project deliveries",
      "Mentored junior developers",
    ],
    metrics: ["30% improved responsiveness", "40% reduced downtime", "20% query optimization"],
  },
  {
    title: "Junior Software Developer",
    company: "Infosys",
    period: "Aug 2021 – Aug 2022",
    bullets: [
      "Developed RESTful APIs with Spring Boot",
      "Implemented Circuit Breaker, Service Registry, Config Server",
      "Worked with JPA, MySQL, Kafka",
    ],
    metrics: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <p className="fade-up text-sm tracking-[0.2em] uppercase text-primary mb-3">Experience</p>
        <h2 className="fade-up text-3xl md:text-4xl font-bold text-foreground mb-16">
          Professional Journey
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="fade-up glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-primary">{exp.company}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 md:mt-0 shrink-0">{exp.period}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">·</span>
                    {b}
                  </li>
                ))}
              </ul>

              {exp.metrics.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                  {exp.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
