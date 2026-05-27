import { useEffect } from "react";

import { AboutSection } from "@/components/AboutSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductGrid } from "@/components/ProductGrid";
import { SiteLayout } from "@/layouts/SiteLayout";

export function HomePage() {
  useEffect(() => {
    document.title = "AUREL - Fine Jewelry E-Commerce Website";
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <ProductGrid />
      <CategoryGrid />
      <AboutSection />
    </SiteLayout>
  );
}
