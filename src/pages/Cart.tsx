import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import product1 from "@/assets/product-1.jpg";

const Cart = () => {
  // Mock cart data
  const cartItems = [
    { id: 1, name: "Classic Leather Handbag", price: 1299.99, image: product1, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Navigation cartItemsCount={cartItems.length} />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-12 animate-fade-in">
            Shopping <span className="text-gold">Cart</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-6 bg-card rounded-lg shadow-[var(--shadow-soft)] animate-fade-in"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gold font-bold mb-4">
                      ${item.price.toFixed(2)}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <Button variant="ghost" size="sm" className="px-3">
                          -
                        </Button>
                        <span className="px-4 font-medium">{item.quantity}</span>
                        <Button variant="ghost" size="sm" className="px-3">
                          +
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 shadow-[var(--shadow-luxury)] sticky top-32 animate-slide-up">
                <h2 className="font-heading font-bold text-2xl mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-gold font-semibold">Free</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-gold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gold hover:bg-gold-dark text-black font-semibold transition-all hover:shadow-[var(--shadow-gold)] hover:scale-105"
                >
                  Proceed to Checkout
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

export default Cart;
