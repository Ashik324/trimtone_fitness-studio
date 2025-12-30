import { ArrowRight, Flame, TrendingUp, Dumbbell, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Flame,
    title: "Weight Loss",
    description: "Comprehensive weight loss programs combining cardio, strength training, and nutrition guidance to help you shed excess weight and keep it off permanently.",
    features: ["Personalized diet plans", "Fat burning workouts", "Progress tracking", "Lifestyle coaching"],
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: TrendingUp,
    title: "Weight Gain",
    description: "Structured muscle-building programs designed to help you gain healthy weight through progressive overload training and optimal nutrition strategies.",
    features: ["Mass gaining programs", "Strength training", "Nutrition planning", "Supplement guidance"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Dumbbell,
    title: "Functional Fitness",
    description: "Improve your everyday movement patterns with functional training that enhances strength, flexibility, balance, and coordination for real-life activities.",
    features: ["Mobility training", "Core strengthening", "Balance exercises", "Injury prevention"],
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: RefreshCw,
    title: "Body Transformation",
    description: "Complete body makeover programs that combine strength training, cardio, and nutrition to dramatically transform your physique and boost confidence.",
    features: ["12-week programs", "Before/after tracking", "Personal coaching", "Complete makeover"],
    color: "bg-purple-500/10 text-purple-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            OUR <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-muted-foreground">
            We offer specialized fitness programs tailored to your unique goals. 
            Whether you want to lose weight, gain muscle, or transform your entire body, 
            we have the expertise to guide you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/919790266868?text=${encodeURIComponent(`Hi! I'm interested in your ${service.title} program.`)}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
