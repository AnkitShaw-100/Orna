export function Hero() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Headline tile */}
          <div className="lg:col-span-3 flex flex-col justify-between bg-secondary p-2">
            <div className="animate-fade-up">
              <p className="text-[11px] tracking-luxury uppercase text-foreground/60 mb-3">New Arrival</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-espresso">
                Timeless.<br/>Crafted.<br/><em className="text-gold not-italic">Yours.</em>
              </h1>
            </div>
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
              alt="Model wearing necklace"
              loading="lazy"
              className="mt-6 w-full aspect-square object-cover hidden lg:block"
            />
          </div>

          {/* Centerpiece */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1400&q=80"
              alt="Hero jewelry editorial"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right column */}
          <div className="lg:col-span-3 flex flex-col gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
                alt="Earring detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-background/70 backdrop-blur p-6">
              <h3 className="font-display text-2xl text-espresso mb-2">Orna</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                Discover a world where beauty meets craftsmanship — every piece of jewelry tells a story.
              </p>
              <button className="text-xs tracking-luxury uppercase border-b border-espresso pb-1 hover:border-gold hover:text-gold transition">
                Shop the edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
