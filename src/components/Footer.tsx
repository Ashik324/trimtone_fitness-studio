import { Facebook, Instagram, Phone, MapPin, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border" itemScope itemType="https://schema.org/WPFooter">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4" aria-label="Trim & Tone Fitness Studio Home">
              <img src={logo} alt="Trim & Tone Fitness Studio Logo" className="h-12 w-12 rounded-full object-cover" loading="lazy" />
              <span className="text-xl font-display font-bold">
                TRIM & TONE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Transform your body, transform your life. Your trusted fitness partner in Tiruchirappalli.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/trim_tone_fitness_studio?igsh=c2g4Nm5sb2Fpcnhj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:9790266868"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:karafath92@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our Services">
            <h4 className="font-display font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Weight Loss",
                "Weight Gain",
                "Functional Fitness",
                "Body Transformation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic" itemScope itemType="https://schema.org/LocalBusiness">
            <h4 className="font-display font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                <span itemProp="streetAddress">Rajaram Rd, Tiruchirappalli, Tamil Nadu 620021</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:9790266868" className="hover:text-primary transition-colors" itemProp="telephone">97902 66868</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:karafath92@gmail.com" className="hover:text-primary transition-colors" itemProp="email">karafath92@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                <div itemProp="openingHours" content="Mo-Sa 05:00-22:00">
                  <p>Mon - Sat: 5AM - 10PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Trim & Tone Fitness Studio. All rights reserved.
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
