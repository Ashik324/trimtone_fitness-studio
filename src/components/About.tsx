import { Dumbbell, Heart, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description:
      "Top-tier machines and free weights from leading brands, maintained daily for your safety.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Certified professionals dedicated to helping you achieve your fitness goals.",
  },
  {
    icon: Heart,
    title: "Personalized Plans",
    description:
      "Custom workout and nutrition plans tailored to your body and objectives.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "Join thousands who have transformed their bodies and lives with us.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            MORE THAN JUST A{" "}
            <span className="text-gradient">GYM</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At IRONFORGE, we believe fitness is a lifestyle. Our state-of-the-art
            facility combined with our passionate team creates an environment
            where champions are made.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-500">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
