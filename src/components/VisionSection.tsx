const pillars = [
  { title: "Systems Thinking", desc: "Years of architecting distributed systems translate into holistic product strategy." },
  { title: "Data-Driven Decisions", desc: "Every product decision backed by metrics, analytics, and user insights." },
  { title: "Stakeholder Alignment", desc: "Experience bridging technical teams and business stakeholders across enterprises." },
  { title: "Scale Mindset", desc: "Solving business problems at scale with technology as the enabler, not the end goal." },
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <p className="fade-up text-sm tracking-[0.2em] uppercase text-primary mb-3">Vision</p>
        <h2 className="fade-up text-3xl md:text-4xl font-bold text-foreground mb-6">
          From Engineer to<br />
          <span className="text-gradient">Product Leader</span>
        </h2>
        <p className="fade-up text-secondary-foreground leading-relaxed max-w-2xl mb-16">
          My journey from backend engineering to product management isn't a pivot — it's an
          evolution. The same rigor I applied to building resilient systems now drives my approach
          to product strategy, user experience, and business impact.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="fade-up glass-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-foreground font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
