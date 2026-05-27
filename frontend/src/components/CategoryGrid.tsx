import { categories } from "@/lib/products";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[11px] tracking-luxury uppercase text-gold mb-3">The Collection</p>
        <h2 className="font-display text-4xl md:text-5xl text-espresso">Our Gallery</h2>
        <p className="text-sm text-foreground/60 mt-3 max-w-md mx-auto">
          Each piece is meticulously crafted to capture the essence of timeless beauty and sophistication.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((c, i) => (
          <a
            key={c.name}
            href="#shop"
            className="group relative aspect-[4/5] overflow-hidden bg-muted animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between">
              <h3 className="font-display text-xl md:text-2xl text-cream">{c.name}</h3>
              <span className="text-cream text-xs tracking-luxury uppercase opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                Shop →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
