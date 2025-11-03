import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Wildlife AI Recognition Tool",
    description: "AI-powered platform for wildlife monitoring and conservation efforts using machine learning for species identification and habitat analysis.",
    tech: ["Python", "YOLOv8", "Flask", "Vercel"],
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    title: "Enterprise Spring Boot API",
    description: "Scalable microservices architecture with Docker containerization, implementing secure REST APIs for e-commerce platform.",
    tech: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
    gradient: "from-secondary/20 to-primary/20"
  },
  {
    title: "Android Expense Manager",
    description: "Feature-rich Android application with offline-first architecture, real-time sync, and intuitive material design interface.",
    tech: ["Java", "Android SDK", "Firebase"],
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    title: "Personal Portfolio Webpage",
    description: "A modern, responsive portfolio website built with React, Typescript and Tailwind CSS to showcase projects and skills.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    gradient: "from-secondary/20 to-primary/20"
  },
  {
    title: "WordPress Freelance Sites",
    description: "Custom WordPress webapps for clients, featuring SEO optimization and modern responsive designs.",
    tech: ["WordPress", "Figma"],
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    title: "Regit",
    description: "A GUI based Vehicle Registration App for Parking System named RegIt with MySQL connectivity designed in Python.",
    tech: ["Python", "Tkinter", "MySQL"],
    gradient: "from-secondary/20 to-primary/20"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          A showcase of technical expertise and creative problem-solving across diverse domains
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-effect rounded-2xl p-6 group hover:-translate-y-2 transition-all duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.gradient} mb-6 group-hover:w-full transition-all duration-300`} />
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
