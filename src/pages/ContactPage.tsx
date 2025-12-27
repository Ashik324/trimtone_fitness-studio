import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    const whatsappMessage = `Hi! I'm interested in membership.

Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim()}
Message: ${formData.message.trim() || "N/A"}`;

    const whatsappUrl = `https://wa.me/919790266868?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast.success("Redirecting to WhatsApp...");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-gym.jpg')" }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            CONTACT <span className="text-gradient">US</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your fitness journey? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info + Enquiry Form */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Get in Touch!
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Rajaram Rd, Tiruchirappalli,<br />
                      Tamil Nadu 620021
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:08610037810" className="hover:text-primary transition-colors block">086100 37810</a>
                      <a href="tel:9790266868" className="hover:text-primary transition-colors block">97902 66868</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:karafath92@gmail.com" className="hover:text-primary transition-colors">karafath92@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary mb-1">Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Saturday: 5:00 AM - 10:00 PM</p>
                      <p>Sunday: <span className="text-primary">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Enquiry Form */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
                Enquire Now
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 border-border"
                  required
                />

                <Input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 border-border"
                  required
                />

                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 border border-border rounded-md bg-background shrink-0">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-sm text-muted-foreground">+91</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 border-border flex-1"
                    required
                  />
                </div>

                <Textarea
                  placeholder="Detail Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] border-border resize-none"
                />

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold"
                >
                  Enquire
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border overflow-hidden h-[400px]">
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
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default ContactPage;
