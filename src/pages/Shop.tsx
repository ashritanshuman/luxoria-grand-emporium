import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const allProducts = [
  { id: 1, name: "Classic Leather Handbag", price: 1299.99, image: product1, category: "Handbags" },
  { id: 2, name: "Premium Gold Watch", price: 2499.99, image: product2, category: "Watches" },
  { id: 3, name: "Executive Leather Wallet", price: 349.99, image: product3, category: "Accessories" },
  { id: 4, name: "Diamond Necklace", price: 4999.99, image: product4, category: "Jewelry" },
  { id: 5, name: "Signature Tote Bag", price: 1599.99, image: product1, category: "Handbags" },
  { id: 6, name: "Platinum Timepiece", price: 3299.99, image: product2, category: "Watches" },
  { id: 7, name: "Premium Card Holder", price: 249.99, image: product3, category: "Accessories" },
  { id: 8, name: "Gold Bracelet", price: 2199.99, image: product4, category: "Jewelry" },
];

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navigation cartItemsCount={0} />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">
            Our <span className="text-gold">Collection</span>
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Discover luxury pieces crafted to perfection
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-muted-foreground">
              Showing {allProducts.length} products
            </p>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {allProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 50}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
