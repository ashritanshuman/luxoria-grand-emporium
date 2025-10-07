import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation cartItemsCount={0} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in">
            We're here to assist you with any questions or concerns
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our dedicated team is available to answer your questions and 
                  provide personalized assistance.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@luxoria.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Luxury Avenue<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)]">
                <h3 className="font-heading font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-luxury)]">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      required
                      placeholder="Your full name"
                      className="border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      required
                      placeholder="How can we help?"
                      className="border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="border-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-dark text-black font-semibold transition-all hover:shadow-[var(--shadow-gold)] hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
