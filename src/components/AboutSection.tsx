const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="fade-up text-sm tracking-[0.2em] uppercase text-primary mb-3">About</p>
            <h2 className="fade-up text-3xl md:text-4xl font-bold text-foreground mb-6">
              From Building Systems to<br />
              <span className="text-gradient">Designing Solutions</span>
            </h2>
            <div className="fade-up space-y-4 text-secondary-foreground leading-relaxed">
              <p>
                With 4 years of backend development experience spanning microservices, distributed
                systems, and the banking domain, I've cultivated a strong technical problem-solving
                mindset that extends beyond code.
              </p>
              <p>
                Currently pursuing my <span className="text-foreground font-medium">MS in Information Management</span> at
                the University of Illinois Urbana-Champaign (Aug 2025 – May 2027), I'm channeling my
                engineering foundation toward product strategy, stakeholder management, consulting,
                and business intelligence.
              </p>
              <p>
                My transition narrative is clear: from building systems → designing solutions that
                align technology with business strategy.
              </p>
            </div>
          </div>

          {/* Visual side */}
          <div className="fade-up flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Abstract geometric pattern */}
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(200,70%,55%)" />
                    <stop offset="100%" stopColor="hsl(180,60%,50%)" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4].map((i) => (
                  <circle
                    key={i}
                    cx="200"
                    cy="200"
                    r={60 + i * 35}
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="0.5"
                  />
                ))}
                {[0, 45, 90, 135].map((angle) => (
                  <line
                    key={angle}
                    x1="200"
                    y1="200"
                    x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
                    y2={200 + 180 * Math.sin((angle * Math.PI) / 180)}
                    stroke="url(#grad)"
                    strokeWidth="0.5"
                  />
                ))}
                {[60, 120, 200, 280, 340].map((x, i) => (
                  <circle key={`dot-${i}`} cx={x} cy={400 - x * 0.6 + 40} r="3" fill="hsl(200,70%,55%)" opacity="0.4" />
                ))}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Current Role</p>
                  <p className="text-foreground font-semibold text-sm">Project Manager</p>
                  <p className="text-xs text-primary">BIG, UIUC</p>
                  <p className="text-xs text-muted-foreground">Jan 2026 – Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
