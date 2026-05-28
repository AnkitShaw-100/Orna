import { Box, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

const badgeStyles: Record<string, string> = {
  New: "bg-gold text-gold-foreground",
  Bestseller: "bg-espresso text-cream",
  Limited: "bg-destructive text-destructive-foreground",
  Exclusive: "bg-cream text-espresso border border-espresso/30",
};

interface Props {
  product: Product;
  onView: (p: Product) => void;
}

const PREVIEW_MODELS: Record<
  Product["type"],
  { title: string; thumbnailUrl: string }
> = {
  Rings: {
    title: "Golden Ring 3D preview",
    thumbnailUrl:
      "https://media.sketchfab.com/models/7e58184f99f14a8db95aa38f6b8f733a/thumbnails/194d5e8ce1954297ba7f3ad22d484dc5/720x405.jpeg",
  },
  Necklaces: {
    title: "Gold Necklace 3D preview",
    thumbnailUrl:
      "https://media.sketchfab.com/models/8bb2ebea4fbd4a3a9b21cba9f5d5fdc8/thumbnails/90855a8cf2d04502bd0e8e0783a5d431/abbe597d11444393a151d4d11be40f35.jpeg",
  },
  Earrings: {
    title: "Gold Earrings 3D preview",
    thumbnailUrl:
      "https://media.sketchfab.com/models/fa51411b736a4306889e197226f1b806/thumbnails/c64b48c7d2a64fb5adb95feea6a614d5/94ad126a19a24feda64ec2a084a26c6b.jpeg",
  },
  Bracelets: {
    title: "Gold Bangle 3D preview",
    thumbnailUrl:
      "https://media.sketchfab.com/models/3cd669be85fb45d18fb722731d00eb94/thumbnails/cdc12ef3b1f843f3a3f84837192b2d6d/d4804b179c46419c934672a66837c988.jpeg",
  },
};

export function ProductCard({ product, onView }: Props) {
  const preview = PREVIEW_MODELS[product.type];
  const { add } = useCart();

  const handleQuickAdd = () => {
    add({
      product,
      karat: "18K",
      diamondSize: "0.50 ct",
      metalColor: "Yellow Gold",
    });
  };

  return (
    <div className="group">
      <div className="relative aspect-4/5 overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,249,242,0.95),rgba(235,223,211,0.9)_55%,rgba(215,198,179,0.92)_100%)]" />
        <img
          src={preview.thumbnailUrl}
          alt={preview.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-espresso/35 to-transparent" />

        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] tracking-luxury uppercase px-2.5 py-1 ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        <div className="product-card-actions absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 bg-linear-to-t from-espresso/80 via-espresso/45 to-transparent p-3 pt-12 transition-opacity duration-500 sm:inset-0 sm:items-center sm:justify-center sm:gap-3 sm:bg-espresso/35 sm:p-4">
          <button
            type="button"
            onClick={() => onView(product)}
            className="w-full sm:max-w-54 flex items-center justify-center gap-2 bg-background text-foreground px-3 py-3 text-[11px] sm:text-xs tracking-luxury uppercase hover:bg-gold hover:text-gold-foreground transition-colors"
          >
            <Box className="size-3.5" /> View in 3D
          </button>
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full sm:max-w-54 flex items-center justify-center gap-2 border border-cream text-cream px-3 py-3 text-[11px] sm:text-xs tracking-luxury uppercase hover:bg-cream hover:text-espresso transition-colors"
          >
            <Plus className="size-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <div className="pt-3 sm:pt-4 flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-xl sm:text-lg text-espresso leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-foreground/55 mt-0.5">{product.type}</p>
        </div>
        <p className="font-display text-lg text-gold whitespace-nowrap">
          Rs. {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
