import { Clock, Flame, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const classes = [
  {
    title: "HIIT Training",
    description: "High-intensity interval training to maximize fat burn and boost metabolism.",
    duration: "45 min",
    intensity: "High",
    capacity: "20",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&auto=format",
  },
  {
    title: "Strength & Power",
    description: "Build muscle mass and raw strength with compound movements and progressive overload.",
    duration: "60 min",
    intensity: "High",
    capacity: "15",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&auto=format",
  },
  {
    title: "Yoga Flow",
    description: "Improve flexibility, balance, and mental clarity through mindful movement.",
    duration: "60 min",
    intensity: "Low",
    capacity: "25",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format",
  },
  {
    title: "Boxing Cardio",
    description: "Learn boxing techniques while getting an incredible full-body workout.",
    duration: "50 min",
    intensity: "High",
    capacity: "18",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&auto=format",
  },
  {
    title: "CrossFit",
    description: "Functional fitness combining cardio, weightlifting, and gymnastics.",
    duration: "60 min",
    intensity: "Very High",
    capacity: "12",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format",
  },
  {
    title: "Spin Class",
    description: "Indoor cycling with music-driven sessions to torch calories.",
    duration: "45 min",
    intensity: "Medium",
    capacity: "30",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format",
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            CLASSES THAT <span className="text-gradient">CHALLENGE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From high-intensity workouts to mindful movement, find the perfect
            class to match your fitness journey and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <div
              key={classItem.title}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2">
                  {classItem.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {classItem.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    {classItem.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-primary" />
                    {classItem.intensity}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    {classItem.capacity}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  View Schedule
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
