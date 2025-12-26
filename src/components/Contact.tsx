import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

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
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:karafath92@gmail.com" className="hover:text-primary transition-colors">karafath92@gmail.com</a>
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
                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Map */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5!2d78.68!3d10.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8b49db3f3aa1%3A0xac7f9f8e34a02407!2sTrim%20and%20Tone%20Gym!5e0!3m2!1sen!2sin!4v1703500000000"
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
