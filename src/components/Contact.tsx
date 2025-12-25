import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              START YOUR <span className="text-gradient">JOURNEY</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform your body and mind? Visit us today or send us a
              message. Our team is here to help you every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    123 Fitness Avenue, Downtown
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    info@ironforge.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Mon - Fri: 5:00 AM - 11:00 PM
                    <br />
                    Sat - Sun: 6:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-display font-bold mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
