import { Instagram, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Marcus Steel",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format",
    instagram: "#",
    twitter: "#",
  },
  {
    name: "Sarah Chen",
    specialty: "HIIT & CrossFit",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&auto=format",
    instagram: "#",
    twitter: "#",
  },
  {
    name: "David Rodriguez",
    specialty: "Boxing & MMA",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format",
    instagram: "#",
    twitter: "#",
  },
  {
    name: "Emma Wilson",
    specialty: "Yoga & Pilates",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format",
    instagram: "#",
    twitter: "#",
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Expert Team
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            MEET YOUR <span className="text-gradient">TRAINERS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our certified professionals bring years of experience and passion to
            help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-bold mb-1">
                  {trainer.name}
                </h3>
                <p className="text-primary text-sm mb-4">{trainer.specialty}</p>

                {/* Social */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={trainer.instagram}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.twitter}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
