import { Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const { items, open, setOpen, remove } = useCart();

  const total = items.reduce((s, i) => s + i.product.price, 0);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-espresso/60 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background shadow-2xl transition-transform duration-500 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h3 className="font-display text-2xl text-espresso">Your Bag</h3>
          <button onClick={() => setOpen(false)} aria-label="Close">
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <p className="text-sm text-foreground/60 text-center py-20">
              Your bag is empty.
            </p>
          ) : (
            <ul className="space-y-5">
              {items.map((i) => (
                <li
                  key={i.uid}
                  className="flex gap-4 border-b border-border pb-5"
                >
                  <img
                    src={i.product.image}
                    alt=""
                    className="size-20 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <h4 className="font-display text-lg text-espresso leading-tight">
                        {i.product.name}
                      </h4>
                      <p className="font-display text-base text-gold">
                        Rs. {i.product.price.toLocaleString()}
                      </p>
                    </div>
                    <p className="text-[11px] text-foreground/55 mt-1">
                      {i.karat} / {i.diamondSize} / {i.metalColor}
                    </p>
                    <button
                      onClick={() => remove(i.uid)}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] tracking-luxury uppercase text-foreground/55 hover:text-destructive transition"
                    >
                      <Trash2 className="size-3" /> Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex justify-between">
              <span className="text-xs tracking-luxury uppercase">
                Subtotal
              </span>
              <span className="font-display text-xl text-espresso">
                Rs. {total.toLocaleString()}
              </span>
            </div>
            <button className="w-full py-4 text-xs tracking-luxury uppercase bg-espresso text-cream hover:bg-gold hover:text-gold-foreground transition">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
