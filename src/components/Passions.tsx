import { Guitar, Music, Drama } from "lucide-react";

const passions = [
  {
    icon: Guitar,
    title: "Guitar",
    description: "Mastering melodies and rhythms across various genres, performing and sharing music with the community.",
    size: "large"
  },
  {
    icon: Music,
    title: "Harmonica/Mouth Organ",
    description: "Exploring soulful tunes and bluesy riffs, adding a unique layer to musical compositions and live performances.",
    size: "medium"
  },
  {
    icon: Drama,
    title: "Drama Background Music",
    description: "Creating immersive soundscapes and emotional backdrops for theatrical performances.",
    size: "medium"
  }
];

const Passions = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
          Beyond the Code
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          A multifaceted creative exploring the intersection of technology, art, and human connection
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large featured card */}
          <div className="lg:row-span-2 glass-effect rounded-3xl p-10 group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden animate-fade-in-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="mb-6 inline-flex p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 glow-primary group-hover:scale-110 transition-transform duration-500">
                <Guitar className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                Guitar Playing
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mastering melodies and rhythms across various genres, performing and sharing music with the community. 
                From acoustic fingerstyle to electric riffs, music is where technical precision meets pure expression.
              </p>
              <div className="mt-6 flex gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50" />
                <div className="h-1 w-6 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30" />
              </div>
            </div>
          </div>
          
          {/* Smaller cards */}
          <div className="glass-effect rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 group-hover:glow-secondary transition-all duration-300">
                <Music className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Harmonica / Mouth Organ
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Exploring soulful tunes and bluesy riffs, adding a unique layer to musical compositions and live performances.
              </p>
            </div>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:glow-primary transition-all duration-300">
                <Drama className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Drama Background Music
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating immersive soundscapes and emotional backdrops for theatrical performances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passions;
