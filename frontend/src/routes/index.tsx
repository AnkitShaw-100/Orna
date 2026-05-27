import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orna — Timeless Jewelry, Crafted to Last" },
      { name: "description", content: "Discover Orna's collection of handcrafted fine jewelry. 18K gold, certified diamonds, and timeless design." },
      { property: "og:title", content: "Orna — Timeless Jewelry, Crafted to Last" },
      { property: "og:description", content: "Handcrafted fine jewelry. 18K gold and certified diamonds." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Marquee />
          <CategoryGrid />
          <ProductGrid />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
