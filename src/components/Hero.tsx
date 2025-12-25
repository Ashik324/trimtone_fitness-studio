import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6 uppercase tracking-widest">
              Transform Your Body
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            FORGE YOUR
            <br />
            <span className="text-gradient">STRENGTH</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Unleash your potential at IRONFORGE. State-of-the-art equipment,
            expert trainers, and a community that pushes you beyond your limits.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                500+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Active Members
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                15+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Expert Trainers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                24/7
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Gym Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
