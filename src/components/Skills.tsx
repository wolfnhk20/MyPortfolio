import { Code2, Database, Container, Cloud, Shield } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Backend Development",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices"],
    color: "text-primary"
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    color: "text-secondary"
  },
  {
    icon: Container,
    title: "DevOps & Tools",
    items: ["Docker", "Git", "Linux"],
    color: "text-primary"
  },
  {
    icon: Cloud,
    title: "Web Technologies",
    items: ["React", "Node.js", "Express.js", "TypeScript"],
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Security & Others",
    items: ["Cybersecurity", "WordPress", "UI/UX Design"],
    color: "text-primary"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
          Technical Arsenal
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit built through academic excellence, hands-on projects, and continuous learning
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className={`h-12 w-12 mb-4 ${skill.color}`} />
              <h3 className="text-xl font-bold mb-3 text-foreground">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
