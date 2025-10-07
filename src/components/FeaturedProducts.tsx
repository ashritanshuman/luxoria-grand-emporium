import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Classic Leather Handbag",
    price: 1299.99,
    image: product1,
    category: "Handbags",
  },
  {
    id: 2,
    name: "Premium Gold Watch",
    price: 2499.99,
    image: product2,
    category: "Watches",
  },
  {
    id: 3,
    name: "Executive Leather Wallet",
    price: 349.99,
    image: product3,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Diamond Necklace",
    price: 4999.99,
    image: product4,
    category: "Jewelry",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gold">Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked pieces that embody luxury, craftsmanship, and timeless style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
