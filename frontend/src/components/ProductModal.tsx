import { useEffect, useState } from "react";
import { X, RotateCw, Check } from "lucide-react";
import {
  KARATS, DIAMOND_SIZES, METAL_COLORS,
  type Product, type Karat, type DiamondSize, type MetalColor,
} from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { JewelryViewer } from "./JewelryViewer";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  const { add } = useCart();
  const [karat, setKarat] = useState<Karat>("18K");
  const [size, setSize] = useState<DiamondSize>("0.50 ct");
  const [metal, setMetal] = useState<MetalColor>("Yellow Gold");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setKarat("18K"); setSize("0.50 ct"); setMetal("Yellow Gold"); setAdded(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!product) return null;

  const metalHex = METAL_COLORS.find((m) => m.name === metal)?.hex ?? "#d4a857";

  const handleAdd = () => {
    add({ product, karat, diamondSize: size, metalColor: metal });
    setAdded(true);
    setTimeout(onClose, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative bg-background w-full max-w-5xl max-h-[92vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 size-9 flex items-center justify-center bg-background/80 hover:bg-gold hover:text-gold-foreground transition rounded-full"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        {/* 3D Viewer */}
        <div className="relative aspect-square lg:aspect-auto lg:min-h-[560px] overflow-hidden">
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[10px] tracking-luxury uppercase bg-background/80 px-3 py-1.5 rounded-full">
            <RotateCw className="size-3 animate-shimmer text-gold" />
            Drag to rotate · Scroll to zoom
          </div>

          <JewelryViewer
            category={product.type}
            metalColor={metal}
            diamondSize={size}
            karat={karat}
          />

          <div className="absolute bottom-4 right-4 text-[10px] tracking-luxury uppercase text-foreground/50 bg-background/70 px-2 py-1 rounded-full">
            Live 3D
          </div>
        </div>

        {/* Configuration */}
        <div className="p-6 md:p-10 flex flex-col">
          <p className="text-[11px] tracking-luxury uppercase text-gold mb-2">{product.type}</p>
          <h2 className="font-display text-3xl md:text-4xl text-espresso">{product.name}</h2>
          <p className="font-display text-2xl text-foreground mt-3">₹{product.price.toLocaleString()}</p>

          <p className="text-sm text-foreground/65 mt-4 leading-relaxed">
            A meticulously hand-finished piece, set with conflict-free stones and an heirloom-grade finish that endures generations.
          </p>

          <div className="mt-8 space-y-7">
            {/* Karat */}
            <Group label="Karat">
              {KARATS.map((k) => (
                <Toggle key={k} active={karat === k} onClick={() => setKarat(k)}>{k}</Toggle>
              ))}
            </Group>

            {/* Diamond size */}
            <Group label="Diamond Size">
              {DIAMOND_SIZES.map((s) => (
                <Toggle key={s} active={size === s} onClick={() => setSize(s)}>{s}</Toggle>
              ))}
            </Group>

            {/* Metal color */}
            <Group label="Metal Color">
              {METAL_COLORS.map((m) => (
                <button
                  key={m.name}
                  onClick={() => setMetal(m.name)}
                  className={`group/swatch flex items-center gap-2 px-3 py-2 border text-xs transition ${
                    metal === m.name
                      ? "border-espresso bg-espresso/5"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  <span
                    className="size-5 rounded-full ring-1 ring-foreground/10"
                    style={{ background: m.hex }}
                  />
                  {m.name}
                </button>
              ))}
            </Group>
          </div>

          <button
            onClick={handleAdd}
            disabled={added}
            className="mt-auto pt-8 sm:pt-10 w-full"
          >
            <span
              className="block w-full py-4 text-xs tracking-luxury uppercase bg-espresso text-cream hover:bg-gold hover:text-gold-foreground transition-colors disabled:bg-gold disabled:text-gold-foreground"
              style={{ borderColor: metalHex }}
            >
              {added ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="size-4" /> Added to Cart
                </span>
              ) : (
                "Add to Cart"
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] tracking-luxury uppercase text-foreground/55 mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Toggle({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs tracking-luxury uppercase border transition ${
        active
          ? "border-espresso bg-espresso text-cream"
          : "border-border hover:border-foreground/40"
      }`}
    >
      {children}
    </button>
  );
}
