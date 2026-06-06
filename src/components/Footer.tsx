import Link from "next/link";
import { Globe, Mail, AtSign } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/products", label: "Products" },
      { href: "/products", label: "Best Sellers" },
      { href: "/ingredients", label: "Ingredients" },
    ],
  },
  {
    title: "Experience",
    links: [
      { href: "/ai-analysis", label: "AI Skin Analysis" },
      { href: "/blog", label: "Blog & Tips" },
      { href: "/sustainability", label: "Sustainability" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Hubungi Kami" },
      { href: "/store-locator", label: "Store Locator" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full mt-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-1">
          <span className="font-display text-headline-sm font-bold text-primary block mb-sm">
            KAHF
          </span>
          <p className="font-sans text-body-sm text-on-surface-variant max-w-xs mb-md">
            Modern Masculine Halal Skincare. Diformulasikan untuk pria yang
            menghargai kebersihan, kualitas, dan efektivitas.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-primary hover:opacity-80 transition-opacity" aria-label="Website">
              <Globe size={20} />
            </a>
            <a href="#" className="text-primary hover:opacity-80 transition-opacity" aria-label="Instagram">
              <AtSign size={20} />
            </a>
            <a href="#" className="text-primary hover:opacity-80 transition-opacity" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h4 className="font-accent text-accent-text text-primary font-bold mb-2">
              {col.title}
            </h4>
            {col.links.map((link, i) => (
              <Link
                key={`${link.href}-${i}`}
                href={link.href}
                className="font-sans text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-lg pt-md border-t border-surface-container-high">
        <p className="font-sans text-body-sm text-on-surface-variant">
          © {new Date().getFullYear()} KAHF. Modern Masculine Halal Skincare.
        </p>
      </div>
    </footer>
  );
}
