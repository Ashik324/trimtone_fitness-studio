import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
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

      {/* Contact Component */}
      <Contact />

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default ContactPage;
