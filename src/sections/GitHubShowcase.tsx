import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

const repos = [
  { name: "Volt-Messaging", description: "Real-time messaging app with Socket.io", language: "JavaScript", stars: 0, forks: 0 },
  { name: "Google-OAuth-MERN", description: "Google OAuth 2.0 authentication system", language: "JavaScript", stars: 0, forks: 0 },
  { name: "Live-Tracker", description: "Real-time location tracking application", language: "JavaScript", stars: 0, forks: 0 },
  { name: "E-Commerce-MERN", description: "Full-stack e-commerce platform", language: "JavaScript", stars: 0, forks: 0 },
];

const GitHubShowcase = () => {
  return (
    <section id="github" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">Open Source</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          GitHub{" "}
          <span className="text-muted-foreground">showcase.</span>
        </h2>
        <p className="text-muted-foreground mb-16 max-w-[55ch]">
          Explore my repositories and contributions on GitHub.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {repos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={`https://github.com/ParmarMohitDeveloper/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="glass-card p-5 group block"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{repo.name}</h3>
              <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-muted-foreground mb-4">{repo.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                {repo.language}
              </span>
              <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
              <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks}</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* GitHub Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 text-center"
      >
        <Github size={32} className="mx-auto text-primary mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">View Full Profile</h3>
        <p className="text-sm text-muted-foreground mb-6">Check out all my repositories, contributions, and activity on GitHub.</p>
        <a
          href="https://github.com/ParmarMohitDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-sm"
        >
          <Github size={16} />
          Visit GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubShowcase;
