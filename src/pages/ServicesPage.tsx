import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            OUR <span className="text-gradient">SERVICES</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized fitness programs designed to help you achieve your unique goals.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Why Our Programs Work */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Our Approach
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
                WHY OUR <span className="text-gradient">PROGRAMS WORK</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our success lies in our personalized approach. We don't believe in one-size-fits-all 
                solutions. Every program is tailored to your body type, fitness level, and goals.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Initial fitness assessment and goal setting",
                  "Customized workout plans based on your needs",
                  "Regular progress tracking and adjustments",
                  "Nutrition guidance and meal planning support",
                  "One-on-one coaching and motivation",
                  "Flexible scheduling to fit your lifestyle",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-display font-bold mb-6">Ready to Transform?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free consultation today and let us design the perfect program for you.
              </p>
              <a 
                href="https://wa.me/919790266868?text=Hi! I'd like to book a free consultation at Trim & Tone Fitness Studio." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl" className="w-full">
                  Book Free Consultation <ArrowRight className="ml-2" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                No commitment required. Let's discuss your goals!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default ServicesPage;
