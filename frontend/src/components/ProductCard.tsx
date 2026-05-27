import { Box, Plus } from "lucide-react";
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
  { title: string; embedUrl: string }
> = {
  Rings: {
    title: "Golden Ring 3D preview",
    embedUrl:
      "https://sketchfab.com/3d-models/518-jewelry-golden-ring-7e58184f99f14a8db95aa38f6b8f733a/embed?autostart=1&autospin=0.15&transparent=1&ui_infos=0&ui_controls=0&ui_start=0&ui_watermark=0",
  },
  Necklaces: {
    title: "Gold Necklace 3D preview",
    embedUrl:
      "https://sketchfab.com/3d-models/gold-necklace-chain-8bb2ebea4fbd4a3a9b21cba9f5d5fdc8/embed?autostart=1&autospin=0.15&transparent=1&ui_infos=0&ui_controls=0&ui_start=0&ui_watermark=0",
  },
  Earrings: {
    title: "Gold Earrings 3D preview",
    embedUrl:
      "https://sketchfab.com/3d-models/gold-earrings-fa51411b736a4306889e197226f1b806/embed?autostart=1&autospin=0.15&transparent=1&ui_infos=0&ui_controls=0&ui_start=0&ui_watermark=0",
  },
  Bracelets: {
    title: "Gold Bangle 3D preview",
    embedUrl:
      "https://sketchfab.com/3d-models/3cd669be85fb45d18fb722731d00eb94/embed?autostart=1&autospin=0.15&transparent=1&ui_infos=0&ui_controls=0&ui_start=0&ui_watermark=0",
  },
};

export function ProductCard({ product, onView }: Props) {
  const preview = PREVIEW_MODELS[product.type];

  return (
    <div className="group">
      <div className="relative aspect-4/5 overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,249,242,0.95),rgba(235,223,211,0.9)_55%,rgba(215,198,179,0.92)_100%)]" />
        <iframe
          key={preview.embedUrl}
          src={preview.embedUrl}
          title={preview.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0 pointer-events-none"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-espresso/35 to-transparent" />

        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] tracking-luxury uppercase px-2.5 py-1 ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3 p-4">
          <button
            onClick={() => onView(product)}
            className="w-full max-w-50 flex items-center justify-center gap-2 bg-background text-foreground py-3 text-xs tracking-luxury uppercase hover:bg-gold hover:text-gold-foreground transition-colors"
          >
            <Box className="size-3.5" /> View in 3D
          </button>
          <button
            onClick={() => onView(product)}
            className="w-full max-w-50 flex items-center justify-center gap-2 border border-cream text-cream py-3 text-xs tracking-luxury uppercase hover:bg-cream hover:text-espresso transition-colors"
          >
            <Plus className="size-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg text-espresso leading-tight">
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
