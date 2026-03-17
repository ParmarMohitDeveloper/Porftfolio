import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import GitHubShowcase from "@/sections/GitHubShowcase";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <GitHubShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
