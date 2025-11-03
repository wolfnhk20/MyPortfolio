import { Github, Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="text-primary text-sm md:text-base font-mono tracking-wider uppercase">
            Full-Stack Developer & Musician
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Ayush Kulal</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          A passionate Computer Science student, crafting powerful backend systems with Java & Spring Boot, 
          while exploring the full spectrum of web development and creative technologies.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up">
          <Button size="lg" className="glow-primary hover:scale-105 transition-transform">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" className="glass-effect hover:scale-105 transition-transform">
            View Projects
          </Button>
        </div>

        <div className="flex gap-6 justify-center items-center animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
          <a 
            href="https://github.com/wolfnhk20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/ayushkulal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://instagram.com/ayush.strums" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
