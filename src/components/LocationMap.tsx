import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const LocationMap = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm interested in membership.

Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim()}
Message: ${formData.message.trim() || "N/A"}`;

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/919790266868?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast.success("Redirecting to WhatsApp...");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl border-t-4 border-t-primary border border-border p-8 shadow-card">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
              Get your Membership Now!
            </h2>

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
  );
};

export default LocationMap;
