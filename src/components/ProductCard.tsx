import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-lg bg-card animate-fade-in hover-lift">
      {/* Image Container */}
      <Link to={`/product/${id}`} className="block relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-black transition-all hover:scale-110"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`transition-all hover:scale-110 ${
              isLiked
                ? "bg-gold hover:bg-gold-dark text-black"
                : "bg-white/90 hover:bg-white text-black"
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
          </Button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
          {category}
        </p>
        <Link to={`/product/${id}`}>
          <h3 className="font-heading text-lg font-semibold group-hover:text-gold transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-xl font-bold text-gold">${price.toFixed(2)}</p>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="glass-card px-3 py-1 text-xs font-semibold text-white uppercase tracking-wide">
          New
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
