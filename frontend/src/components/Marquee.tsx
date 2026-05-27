const items = [
  "Free Shipping Worldwide",
  "18K Solid Gold",
  "Certified Diamonds",
  "Lifetime Maintenance",
  "Handcrafted in India",
  "30-Day Returns",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-espresso text-cream py-3 overflow-hidden border-y border-gold/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="mx-8 text-xs tracking-luxury uppercase flex items-center gap-8">
            {t} <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
