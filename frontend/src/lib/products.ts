export type Badge = "New" | "Bestseller" | "Limited" | "Exclusive";
export type Category = "Rings" | "Necklaces" | "Earrings" | "Bracelets";

export interface Product {
  id: string;
  name: string;
  type: Category;
  price: number;
  image: string;
  badge?: Badge;
}

export const products: Product[] = [
  { id: "p1", name: "Aurora Solitaire", type: "Rings",      price: 1290, badge: "Bestseller", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" },
  { id: "p2", name: "Celeste Pendant",  type: "Necklaces",  price: 990,  badge: "New",        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80" },
  { id: "p3", name: "Mira Hoops",       type: "Earrings",   price: 740,  badge: "Limited",    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
  { id: "p4", name: "Linea Bangle",     type: "Bracelets",  price: 1180, badge: "Exclusive",  image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" },
  { id: "p5", name: "Halo Eternity",    type: "Rings",      price: 1650, badge: "New",        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80" },
  { id: "p6", name: "Pearl Cascade",    type: "Necklaces",  price: 1420, badge: "Bestseller", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80" },
  { id: "p7", name: "Drop Studs",       type: "Earrings",   price: 690,  badge: "New",        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80" },
  { id: "p8", name: "Tennis Bracelet",  type: "Bracelets",  price: 1980, badge: "Exclusive",  image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80" },
];

export const categories: { name: Category; image: string }[] = [
  { name: "Rings",      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" },
  { name: "Necklaces",  image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80" },
  { name: "Earrings",   image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
  { name: "Bracelets",  image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" },
];

export const KARATS = ["14K", "18K", "22K"] as const;
export const DIAMOND_SIZES = ["0.25 ct", "0.50 ct", "0.75 ct", "1.00 ct"] as const;
export const METAL_COLORS = [
  { name: "Yellow Gold", hex: "#d4a857" },
  { name: "Rose Gold",   hex: "#c9817a" },
  { name: "Silver",      hex: "#c9c9cf" },
] as const;

export type Karat = typeof KARATS[number];
export type DiamondSize = typeof DIAMOND_SIZES[number];
export type MetalColor = typeof METAL_COLORS[number]["name"];
