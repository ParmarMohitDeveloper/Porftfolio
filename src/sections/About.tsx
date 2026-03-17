import { motion } from "framer-motion";
import { Code2, Shield, Zap, Layout, Server } from "lucide-react";

const strengths = [
  { icon: Code2, title: "Full Stack Development", description: "End-to-end application development with MongoDB, Express.js, React, and Node.js." },
  { icon: Zap, title: "Real-Time Systems", description: "Live communication systems using WebSockets and Socket.io for instant data flow." },
  { icon: Server, title: "REST API Development", description: "Scalable, well-documented RESTful APIs with proper error handling and validation." },
  { icon: Shield, title: "Authentication & Security", description: "JWT-based auth systems, OAuth 2.0 integration, and secure route protection." },
  { icon: Layout, title: "Modern UI Development", description: "Responsive, accessible interfaces with React, TailwindCSS, and Framer Motion." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

const About = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">About</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Building the web,{" "}
          <span className="text-muted-foreground">one stack at a time.</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[65ch] mb-16">
          I'm a passionate MERN Stack Developer based in Vadodara, India. I specialize in building scalable full-stack web applications — from crafting robust REST APIs and real-time communication systems to designing modern, responsive user interfaces. I care deeply about clean architecture, developer experience, and shipping products that make an impact.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {strengths.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className="glass-card p-6 hover-lift group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
