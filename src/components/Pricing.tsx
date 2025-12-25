import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Gym access (6am - 10pm)",
      "Basic equipment usage",
      "Locker room access",
      "1 fitness assessment/month",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "59",
    description: "Most popular choice for serious fitness enthusiasts",
    features: [
      "24/7 gym access",
      "All equipment & classes",
      "Personal locker",
      "2 PT sessions/month",
      "Nutrition consultation",
      "Sauna & steam room",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "99",
    description: "Ultimate experience for maximum results",
    features: [
      "Everything in Pro",
      "Unlimited PT sessions",
      "Custom meal plans",
      "Recovery zone access",
      "Priority class booking",
      "Exclusive member events",
      "Unlimited guest passes",
      "Premium app features",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Membership Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            INVEST IN YOUR <span className="text-gradient">HEALTH</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle. All memberships include a
            7-day free trial and no long-term commitment required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-card border-2 border-primary shadow-glow"
                  : "bg-gradient-card border border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-[hsl(15_100%_45%)] text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">$</span>
                  <span className="text-5xl font-display font-bold text-gradient">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
