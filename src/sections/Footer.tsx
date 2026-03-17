import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Built with ❤️ by <span className="text-foreground font-medium">Mohit Parmar</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ParmarMohitDeveloper" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mohit-parmar-0b7514271" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
