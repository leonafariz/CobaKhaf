"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/ai-analysis", label: "AI Face Analysis" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-200 ease-in-out",
        scrolled ? "bg-surface/95 shadow-sm" : "bg-surface/90",
      )}
    >
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <Link
          href="/"
          className="font-display text-headline-md font-bold text-primary tracking-tight"
        >
          KAHF
        </Link>

        <div className="hidden md:flex items-center gap-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-body-md transition-colors hover:opacity-80",
                isActive(link.href)
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-sm">
          <button
            className="hidden md:block text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link
            href="/ai-analysis"
            className="hidden md:block px-md py-xs rounded-md bg-primary text-on-primary font-sans text-body-md font-semibold hover:opacity-90 transition-opacity"
          >
            Cek Kulitmu
          </Link>
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-surface-container shadow-card">
          <div className="px-margin-mobile py-sm flex flex-col gap-xs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-2 font-sans text-body-md",
                  isActive(link.href)
                    ? "text-primary font-bold"
                    : "text-on-surface-variant",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/ai-analysis"
              className="mt-xs px-md py-sm rounded-md bg-primary text-on-primary text-center font-semibold"
            >
              Cek Kulitmu Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
