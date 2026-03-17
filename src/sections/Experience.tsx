import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2023 — Present",
    description: "Building full-stack web applications using MongoDB, Express.js, React, and Node.js. Developed real-time messaging apps, authentication systems, and e-commerce platforms.",
    highlights: ["Real-time WebSocket applications", "OAuth 2.0 & JWT authentication", "REST API architecture", "Responsive UI with TailwindCSS"],
  },
  {
    role: "Web Development Intern",
    company: "Self-Directed Learning & Internships",
    period: "2022 — 2023",
    description: "Gained hands-on experience with frontend and backend technologies, building projects and contributing to team-based development workflows.",
    highlights: ["React component architecture", "Node.js backend development", "MongoDB database design", "Git version control"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">Experience</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          Where I've{" "}
          <span className="text-muted-foreground">worked.</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                <Briefcase size={16} className="text-primary" />
              </div>

              <span className="font-mono text-xs text-muted-foreground tracking-wider">{exp.period}</span>
              <h3 className="text-lg font-bold text-foreground mt-1">{exp.role}</h3>
              <p className="text-sm text-primary mb-3">{exp.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span key={h} className="px-3 py-1 text-[11px] font-mono bg-secondary border border-border rounded-full text-muted-foreground">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
