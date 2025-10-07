import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation cartItemsCount={0} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-heading font-bold mb-6">
              Our <span className="text-gold">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A legacy of luxury, craftsmanship, and timeless elegance spanning three decades
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Excellence in Every Detail
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 1990, Luxoria was born from a simple yet powerful vision: to create 
                luxury pieces that transcend fleeting trends and become cherished heirlooms. 
                Our founders believed that true luxury is measured not by extravagance, but by 
                the perfect harmony of timeless design, exceptional craftsmanship, and enduring quality.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Masterful Craftsmanship
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every Luxoria piece is a testament to the skill of master artisans who have 
                dedicated their lives to perfecting their craft. We source only the finest 
                materials from around the world—Italian leather, Swiss mechanisms, conflict-free 
                diamonds—and transform them into works of art that stand the test of time.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Sustainable Luxury
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe luxury and responsibility go hand in hand. Our commitment to 
                sustainability means partnering with ethical suppliers, minimizing our environmental 
                footprint, and creating products designed to last generations—not seasons. 
                Because true luxury should never come at the expense of our planet.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-luxury)]">
              <blockquote className="text-2xl font-heading italic text-center">
                "Luxury is not about what you own, but how it makes you feel. 
                Each Luxoria piece is crafted to bring confidence, elegance, and joy 
                to those who appreciate the extraordinary."
              </blockquote>
              <p className="text-center text-gold font-semibold mt-4">
                — Isabella Moretti, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
