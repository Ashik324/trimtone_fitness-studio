import { MapPin } from "lucide-react";

const LocationMap = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            OUR <span className="text-gradient">LOCATION</span>
          </h2>
          <p className="text-muted-foreground">
            Visit us at our convenient location in the heart of Tiruchirappalli.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 bg-card rounded-2xl border border-border overflow-hidden h-[400px]">
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

          <div className="bg-card rounded-2xl p-8 border border-border h-fit">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl mb-2">Trim & Tone Fitness Studio</h4>
                <p className="text-muted-foreground">
                  Rajaram Rd, Tiruchirappalli,
                  <br />
                  Tamil Nadu 620021
                </p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-muted-foreground border-t border-border pt-6">
              <p className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="font-medium text-foreground">5 AM - 10 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-primary">Closed</span>
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Rajaram+Rd,+Tiruchirappalli,+Tamil+Nadu+620021"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Get Directions
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
