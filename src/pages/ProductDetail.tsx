import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: 1,
    name: "Classic Leather Handbag",
    price: 1299.99,
    image: product1,
    category: "Handbags",
    description: "Crafted from the finest Italian leather, this timeless handbag combines elegance with functionality. Features gold-plated hardware and a spacious interior with multiple compartments.",
    details: [
      "Premium Italian leather",
      "Gold-plated hardware",
      "Multiple interior compartments",
      "Dust bag included",
      "30-day return policy"
    ]
  };

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${quantity} × ${product.name}`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation cartItemsCount={0} />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="animate-fade-in">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted shadow-[var(--shadow-luxury)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-slide-up space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl font-heading font-bold mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                  <span className="text-muted-foreground ml-2">(48 reviews)</span>
                </div>
                <p className="text-4xl font-bold text-gold mb-6">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                <h3 className="font-heading font-semibold text-lg">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4"
                  >
                    -
                  </Button>
                  <span className="px-6 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 bg-gold hover:bg-gold-dark text-black font-semibold transition-all hover:shadow-[var(--shadow-gold)] hover:scale-105"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:border-gold hover:text-gold transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
