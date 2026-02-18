import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center grid-bg">
      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="fade-up shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-border/60 shadow-2xl shadow-primary/10">
              <img
                src={profilePhoto}
                alt="Omkar Kumar Chougule"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="fade-up text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Portfolio
            </p>
            <h1 className="fade-up text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
              Omkar Kumar<br />
              <span className="text-gradient">Chougule</span>
            </h1>
            <p className="fade-up text-lg md:text-xl text-muted-foreground font-light mb-6 max-w-xl">
              Backend Engineer · Aspiring Product Manager · Data-Driven Problem Solver
            </p>
            <p className="fade-up text-secondary-foreground leading-relaxed max-w-xl mb-8">
              Experienced Backend Developer with 4 years of building scalable REST APIs and
              microservices-based systems. Strong foundation in Java, Kafka, and cloud-native
              architecture. Currently expanding into Product Management and Consulting with a
              focus on data-driven decision-making and enterprise strategy.
            </p>
            <div className="fade-up flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#experience"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Connect With Me
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-border rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
