import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6 uppercase tracking-widest border border-primary/20">
              Transform Your Life
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            TRIM & TONE
            <br />
            <span className="text-gradient">FITNESS STUDIO</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Your journey to a healthier, stronger you starts here. Expert trainers, 
            personalized programs, and a supportive community in Tiruchirappalli.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a 
              href="https://wa.me/919790266868?text=Hi! I'm interested in joining Trim & Tone Fitness Studio." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl">
                Start Your Journey
                <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="tel:08610037810">
              <Button variant="heroOutline" size="xl">
                <Phone className="mr-2" />
                Call Us Now
              </Button>
            </a>
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
                Happy Members
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                10+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Expert Trainers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                5+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
