import { useState } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="fade-up text-sm tracking-[0.2em] uppercase text-primary mb-3">Contact</p>
            <h2 className="fade-up text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="fade-up text-secondary-foreground mb-8 leading-relaxed">
              Interested in discussing product strategy, engineering, or collaboration opportunities?
              I'd love to hear from you.
            </p>

            <div className="fade-up flex gap-4">
              <a href="mailto:omkar@example.com" aria-label="Email" className="p-3 rounded-md bg-secondary text-secondary-foreground hover:text-foreground hover:bg-muted transition-colors">
                <Mail size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-md bg-secondary text-secondary-foreground hover:text-foreground hover:bg-muted transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-md bg-secondary text-secondary-foreground hover:text-foreground hover:bg-muted transition-colors">
                <Github size={18} />
              </a>
              <a href="tel:+1234567890" aria-label="Phone" className="p-3 rounded-md bg-secondary text-secondary-foreground hover:text-foreground hover:bg-muted transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="fade-up space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              placeholder="Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="section-divider mt-24 mb-8" />
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Omkar Kumar Chougule
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
