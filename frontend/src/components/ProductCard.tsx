import { Box, Plus } from "lucide-react";
import type { Product } from "@/lib/products";

const badgeStyles: Record<string, string> = {
  New:        "bg-gold text-gold-foreground",
  Bestseller: "bg-espresso text-cream",
  Limited:    "bg-destructive text-destructive-foreground",
  Exclusive:  "bg-cream text-espresso border border-espresso/30",
};

interface Props {
  product: Product;
  onView: (p: Product) => void;
}

export function ProductCard({ product, onView }: Props) {
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] tracking-luxury uppercase px-2.5 py-1 ${badgeStyles[product.badge]}`}>
            {product.badge}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3 p-4">
          <button
            onClick={() => onView(product)}
            className="w-full max-w-[200px] flex items-center justify-center gap-2 bg-background text-foreground py-3 text-xs tracking-luxury uppercase hover:bg-gold hover:text-gold-foreground transition-colors"
          >
            <Box className="size-3.5" /> View in 3D
          </button>
          <button
            onClick={() => onView(product)}
            className="w-full max-w-[200px] flex items-center justify-center gap-2 border border-cream text-cream py-3 text-xs tracking-luxury uppercase hover:bg-cream hover:text-espresso transition-colors"
          >
            <Plus className="size-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg text-espresso leading-tight">{product.name}</h3>
          <p className="text-xs text-foreground/55 mt-0.5">{product.type}</p>
        </div>
        <p className="font-display text-lg text-gold whitespace-nowrap">
          ₹{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
