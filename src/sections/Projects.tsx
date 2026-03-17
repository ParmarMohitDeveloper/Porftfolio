import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Volt Messaging",
    subtitle: "Real-Time Messaging App",
    description: "A real-time messaging application with live chat using WebSockets. Includes authentication, profile customization, and message management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/ParmarMohitDeveloper/Volt-Messaging-Webapp",
    demo: "https://voltmessage.netlify.app/",
  },
  {
    title: "Google OAuth Auth",
    subtitle: "MERN Authentication System",
    description: "Secure login system using Google OAuth 2.0 integrated with JWT and protected routes for seamless user authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OAuth 2.0", "JWT"],
    github: "https://github.com/ParmarMohitDeveloper/Goggle-Login-MERN-WebApp",
    demo: "",
  },
  {
    title: "Live Tracker",
    subtitle: "Real-Time Location Tracking",
    description: "Real-time location tracking system using geolocation APIs and socket communication for live position updates.",
    tech: ["Node.js", "Express", "Socket.io", "Leaflet", "Geolocation API"],
    github: "https://github.com/ParmarMohitDeveloper/Live-Tracking-App",
    demo: "https://live-tracking-app-backend.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">Work</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          Featured{" "}
          <span className="text-muted-foreground">projects.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group glass-card p-6 relative overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[11px] text-primary uppercase tracking-wider">{project.subtitle}</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-secondary border border-border rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} /> Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
