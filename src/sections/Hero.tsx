import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "API Architect",
  "Real-Time Systems Builder",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.substring(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(role.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative min-h-svh flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px] animate-pulse-glow" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-4xl"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-primary text-sm tracking-widest uppercase mb-6 block"
        >
          Available for new opportunities
        </motion.span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 leading-[0.95]">
          Hi, I'm{" "}
          <span className="text-gradient">Mohit</span>
          <br />
          <span className="text-muted-foreground">Parmar.</span>
        </h1>

        <div className="h-10 md:h-12 mb-6 flex items-center">
          <span className="font-mono text-lg md:text-xl text-primary">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="max-w-[55ch] text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          I build scalable full-stack applications, real-time systems, and modern web experiences with the MERN stack.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border rounded-full hover:bg-secondary transition-colors text-foreground"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/ParmarMohitDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border rounded-full hover:bg-secondary transition-colors flex items-center gap-2 text-foreground"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </motion.div>

      {/* Social Links - Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-50"
      >
        <a href="https://github.com/ParmarMohitDeveloper" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/mohit-parmar-0b7514271" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:mohitparmar.dev@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
        <div className="w-px h-24 bg-border" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={20} className="animate-float" />
      </motion.a>
    </section>
  );
};

export default Hero;
