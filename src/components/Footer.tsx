import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-display font-bold text-gradient">
              IRONFORGE
            </span>
            <p className="text-muted-foreground text-sm mt-4 mb-6">
              Transform your body, transform your life. Join the strongest
              community in fitness.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Classes", "Trainers", "Pricing", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-display font-bold mb-4">Classes</h4>
            <ul className="space-y-2">
              {[
                "HIIT Training",
                "Strength & Power",
                "Yoga Flow",
                "Boxing Cardio",
                "CrossFit",
              ].map((classItem) => (
                <li key={classItem}>
                  <a
                    href="#classes"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {classItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>5AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>6AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>6AM - 10PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 IRONFORGE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
