import { Mail, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect rounded-3xl p-8 md:p-12 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Let's Build Something Amazing
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and conversations about technology, music, and everything in between.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Pune, India</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>ayushkulal20@gmail.com</span>
            </div>
          </div>
          
          <Button size="lg" className="glow-primary animate-glow-pulse">
            <Mail className="mr-2 h-5 w-5" />
            Send a Message
          </Button>
        </div>
        
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Developed by Ayush Kulal
          </p>
          <p className="text-sm mt-2">© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
