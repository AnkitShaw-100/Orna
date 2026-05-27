import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product, Karat, DiamondSize, MetalColor } from "./products";

export interface CartItem {
  uid: string;
  product: Product;
  karat: Karat;
  diamondSize: DiamondSize;
  metalColor: MetalColor;
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  add: (item: Omit<CartItem, "uid" | "qty">) => void;
  remove: (uid: string) => void;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add: CartCtx["add"] = (item) => {
    setItems((prev) => [
      ...prev,
      { ...item, uid: crypto.randomUUID(), qty: 1 },
    ]);
    setOpen(true);
  };

  const remove = (uid: string) =>
    setItems((prev) => prev.filter((i) => i.uid !== uid));

  return (
    <Ctx.Provider value={{ items, add, remove, count: items.length, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
