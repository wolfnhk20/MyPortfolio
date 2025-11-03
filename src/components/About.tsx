const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect rounded-3xl p-8 md:p-12 lg:p-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science student at AISSMS College of Engineering with a deep passion 
              for building robust, scalable backend systems. My journey in tech is driven by continuous 
              learning and a determination to master the craft of software development.
            </p>
            
            <p>
              Specializing in <span className="text-primary font-semibold">Java, Spring Boot, and Docker</span>, 
              I've developed enterprise-grade applications and explored the MERN stack to broaden my full-stack capabilities. 
              From backend systems to AI-powered wildlife recognition tools, I love tackling diverse challenges.
            </p>
            
            <p>
              Beyond code, I'm a <span className="text-secondary font-semibold">guitarist and content creator</span>. 
              I play guitar and part of cultural team that bring people together. My interests also 
              extend to cybersecurity, where I'm constantly learning about protecting digital systems.
            </p>
            
            <p className="text-foreground font-medium">
              I believe in the power of technology to create meaningful impact, and I'm always excited to 
              collaborate on projects that push boundaries and inspire innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
