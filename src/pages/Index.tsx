import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import LocationMap from "@/components/LocationMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "Trim & Tone Fitness Studio",
  "image": "https://trimandtone.com/hero-gym.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rajaram Rd",
    "addressLocality": "Tiruchirappalli",
    "addressRegion": "Tamil Nadu",
    "postalCode": "620021",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.79,
    "longitude": 78.68
  },
  "telephone": "+91-86100-37810",
  "email": "karafath92@gmail.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "05:00",
      "closes": "22:00"
    }
  ],
  "priceRange": "$$",
  "url": "https://trimandtone.com",
  "description": "Expert trainers, personalized weight loss, weight gain, functional fitness & body transformation programs in Tiruchirappalli.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500"
  },
  "sameAs": [
    "https://www.instagram.com/trim_tone_fitness_studio"
  ]
};

const Index = () => {
  return (
    <>
      <SEO 
        canonical="/"
        structuredData={structuredData}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <section aria-label="About Us">
          <About />
        </section>
        <section aria-label="Our Services">
          <Services />
        </section>
        <section aria-label="Membership Enquiry">
          <LocationMap />
        </section>
        <section aria-label="Contact Information">
          <Contact />
        </section>
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
