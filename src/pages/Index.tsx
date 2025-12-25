import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Pricing />
      <Trainers />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
