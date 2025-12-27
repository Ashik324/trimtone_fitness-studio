import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-gym.jpg')" }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            OUR <span className="text-gradient">STORY</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the passion and dedication behind Trim & Tone Fitness Studio.
          </p>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower individuals to achieve their fitness goals through personalized 
                training, expert guidance, and a supportive community environment that 
                inspires lasting lifestyle changes.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be Tiruchirappalli's most trusted fitness destination, known for 
                transforming lives and building a healthier, more confident community 
                one member at a time.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Dedication, integrity, and excellence drive everything we do. We believe 
                in treating every member like family and celebrating every milestone on 
                their fitness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join the Trim & Tone family today and take the first step towards a healthier you.
          </p>
          <a 
            href="https://wa.me/919790266868?text=Hi! I'm interested in joining Trim & Tone Fitness Studio." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="heroOutline" size="xl" className="bg-white text-primary hover:bg-white/90">
              Get Started Today <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default AboutPage;
