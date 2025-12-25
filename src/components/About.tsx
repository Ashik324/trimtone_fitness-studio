import { Award, Clock, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Trainers",
    description:
      "Certified fitness professionals dedicated to helping you achieve your goals with personalized attention.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Open from 5 AM to 10 PM, Monday through Saturday, fitting your busy schedule perfectly.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Join a family of fitness enthusiasts who motivate and support each other every day.",
  },
  {
    icon: Heart,
    title: "Personalized Programs",
    description:
      "Custom workout and nutrition plans designed specifically for your body type and goals.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              WHY CHOOSE <span className="text-gradient">TRIM & TONE?</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              At Trim & Tone Fitness Studio, we believe fitness is not just about looking good – 
              it's about feeling strong, confident, and healthy. Located in the heart of Tiruchirappalli, 
              we've been transforming lives through dedicated fitness coaching and personalized programs.
            </p>
            <p className="text-muted-foreground mb-8">
              Our state-of-the-art facility combined with our team of certified trainers ensures 
              you get the best fitness experience possible. Whether you're looking to lose weight, 
              build muscle, or improve overall health, we have the expertise and equipment to help 
              you succeed.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <div className="text-3xl font-display font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <div className="text-3xl font-display font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
