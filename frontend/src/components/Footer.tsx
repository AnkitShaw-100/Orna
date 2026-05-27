import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      "About Orna",
      "Store Locator",
      "Careers",
      "Offers",
      "Journal",
      "Scheme Payments",
    ],
  },
  {
    title: "Customer Service",
    links: [
      "FAQ",
      "Track Order",
      "Easy Exchange",
      "Shipping Terms",
      "Lifetime Maintenance",
      "15-Day Return Policy",
    ],
  },
  {
    title: "My Account",
    links: [
      "Register",
      "Accounts",
      "Privacy Policy",
      "Terms & Conditions",
      "Shipping Policy",
      "Refund Policy",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-lg text-gold mb-4">{c.title}</h4>
            <ul className="space-y-2.5 text-xs tracking-wide text-cream/70">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#about"
                    className="hover:text-gold transition uppercase tracking-luxury text-[11px]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:col-span-1">
          <h4 className="font-display text-lg text-gold mb-4">
            Sign Up For Our Emails
          </h4>
          <form
            className="flex border-b border-cream/30 pb-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-xs placeholder:text-cream/40 outline-none py-2"
            />
            <button className="text-xs tracking-luxury uppercase text-gold hover:text-cream transition">
              Join
            </button>
          </form>
          <div className="mt-6">
            <p className="text-xs tracking-luxury uppercase text-cream/70 mb-3">
              Follow Us
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#about"
                  className="size-9 border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-gold-foreground transition"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-center text-[11px] tracking-luxury uppercase text-cream/50">
          Copyright 2026 Orna. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
