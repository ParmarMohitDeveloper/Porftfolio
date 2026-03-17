import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">Contact</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Let's work{" "}
          <span className="text-muted-foreground">together.</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-[50ch]">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Name</label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            {submitted ? "Sent!" : "Send Message"}
            <Send size={16} />
          </button>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-primary"
            >
              Thanks for reaching out! I'll get back to you soon.
            </motion.p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 space-y-6"
        >
          <div>
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="https://github.com/ParmarMohitDeveloper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} /> github.com/ParmarMohitDeveloper
              </a>
              <a href="https://www.linkedin.com/in/mohit-parmar-0b7514271" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} /> linkedin.com/in/mohit-parmar
              </a>
              <a href="mailto:mohitparmar.dev@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} /> mohitparmar.dev@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Location</h3>
            <p className="text-sm text-muted-foreground">Vadodara, Gujarat, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
