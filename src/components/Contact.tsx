import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            CONTACT <span className="text-gradient">US</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to start your fitness journey? Visit us or get in touch today.
            Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    Rajaram Rd, Tiruchirappalli,
                    <br />
                    Tamil Nadu 620021
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:08610037810" className="hover:text-primary transition-colors">086100 37810</a>
                    <br />
                    <a href="tel:9790266868" className="hover:text-primary transition-colors">97902 66868</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Hours</h4>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p className="flex justify-between gap-8">
                      <span>Monday - Saturday</span>
                      <span>5:00 AM - 10:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span className="text-primary">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/919790266868?text=Hi! I'm interested in joining Trim & Tone Fitness Studio." 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="hero" size="xl" className="w-full">
                <MessageCircle className="mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Map */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9927!2d78.6883!3d10.7908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRajaram%20Rd%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620021!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trim & Tone Fitness Studio Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
