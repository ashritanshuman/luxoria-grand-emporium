import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation cartItemsCount={0} />
      <Hero />
      <FeaturedProducts />
      
      {/* Brand Story Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Crafted for the <span className="text-gold">Exceptional</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For over three decades, Luxoria has been synonymous with timeless elegance 
              and uncompromising quality. Each piece in our collection tells a story of 
              masterful craftsmanship, sourced from the world's finest artisans.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that true luxury is not just about what you own, but how it makes 
              you feel. Every item is carefully curated to bring sophistication and confidence 
              to those who appreciate the extraordinary.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
