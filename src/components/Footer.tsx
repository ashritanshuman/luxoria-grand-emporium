import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Join Our Exclusive Circle
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Be the first to know about new collections and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold"
              />
              <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold whitespace-nowrap px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-4">LUXORIA</h2>
            <p className="text-primary-foreground/70 mb-4">
              Curating luxury experiences through timeless elegance and unparalleled quality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Handbags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Watches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Jewelry
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-heading font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Luxoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
