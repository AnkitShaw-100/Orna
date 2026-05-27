const values = [
  { label: "Hand-finished", value: "48 hrs" },
  { label: "Gold purity", value: "22K" },
  { label: "Care promise", value: "Lifetime" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-luxury uppercase text-gold mb-3">
              About AUREL
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-espresso leading-tight">
              Crafted for quiet brilliance.
            </h2>
            <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
              AUREL is built around heirloom pieces that feel personal from the
              first wear. Every setting, polish, clasp, and curve is considered
              with the restraint of fine design and the warmth of human craft.
            </p>
            <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              Our collections pair certified stones with refined gold tones,
              creating jewelry made for everyday rituals, milestone evenings,
              and the stories that live between them.
            </p>

            <div className="mt-9 grid grid-cols-3 border-y border-espresso/15">
              {values.map((item) => (
                <div
                  key={item.label}
                  className="py-5 pr-4 border-r border-espresso/15 last:border-r-0 last:pr-0"
                >
                  <p className="font-display text-2xl md:text-3xl text-espresso">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] tracking-luxury uppercase text-foreground/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-5 gap-4 md:gap-5">
            <div className="col-span-3 aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1000&q=80"
                alt="Jewelry craftsmanship"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4 md:gap-5">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
                  alt="Gold jewelry detail"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-h-40 bg-espresso text-cream p-5 md:p-6 flex flex-col justify-end">
                <p className="font-display text-2xl md:text-3xl text-gold">
                  Fine jewelry with a softer kind of presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
