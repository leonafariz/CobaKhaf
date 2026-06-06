import type { Metadata } from "next";
import Link from "next/link";
import {
  Leaf,
  TreePine,
  Sparkles,
  Shield,
  Sprout,
  Citrus,
  Flower,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { ingredients } from "@/data/content";

export const metadata: Metadata = {
  title: "Kamus Bahan",
  description:
    "Jelajahi kamus bahan KAHF — kenali manfaat setiap bahan aktif unggulan, mulai dari Niacinamide hingga Zinc Oxide, dan produk tempat bahan tersebut digunakan.",
};

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  TreePine,
  Sparkles,
  Shield,
  Sprout,
  Citrus,
  Flower,
};

function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}

export default function IngredientsPage() {
  const featured = ingredients.slice(0, 3);
  const letters = Array.from(new Set(ingredients.map((i) => i.letter))).sort();

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <SectionHeading
          center
          eyebrow="Ingredients"
          title="Kamus Bahan"
          subtitle="Transparansi adalah inti dari clean beauty. Pelajari setiap bahan aktif yang kami gunakan, manfaatnya, dan produk tempat bahan tersebut bekerja untukmu."
        />
      </section>

      {/* Featured Ingredients */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-xl">
        <SectionHeading eyebrow="Featured" title="Bahan Aktif Unggulan" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-lg">
          {featured.map((ing) => {
            const Icon = getIcon(ing.icon);
            return (
              <div
                key={ing.id}
                className="bg-primary-container rounded-2xl card-shadow p-lg flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-light-sage text-primary flex items-center justify-center mb-md">
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-headline-md font-bold text-on-primary mb-xs">
                  {ing.name}
                </h3>
                <p className="font-accent text-body-md font-bold text-on-primary-container mb-sm">
                  {ing.benefit}
                </p>
                <p className="font-sans text-body-md text-on-primary-container">
                  {ing.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* A-Z Index */}
      <section className="bg-surface-container-low py-lg">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <span className="inline-block font-accent text-label-caps font-bold uppercase tracking-wider text-primary mb-sm">
            Indeks A-Z
          </span>
          <div className="flex flex-wrap gap-xs">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 rounded-full bg-surface-container-lowest card-shadow flex items-center justify-center font-display font-bold text-primary hover:bg-primary hover:text-on-primary transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Ingredients Grid */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <SectionHeading
          eyebrow="Semua Bahan"
          title="Daftar Lengkap Bahan"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter mt-lg">
          {ingredients.map((ing, idx) => {
            const Icon = getIcon(ing.icon);
            const isFirstOfLetter =
              ingredients.findIndex((i) => i.letter === ing.letter) === idx;
            return (
              <div
                key={ing.id}
                id={isFirstOfLetter ? `letter-${ing.letter}` : undefined}
                className="scroll-mt-24 bg-surface-container-lowest rounded-xl card-shadow p-lg flex flex-col"
              >
                <div className="flex items-center gap-sm mb-sm">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-light-sage text-primary flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-headline-sm font-bold text-on-surface">
                    {ing.name}
                  </h3>
                </div>
                <p className="font-accent text-body-md font-bold text-secondary mb-xs">
                  {ing.benefit}
                </p>
                <p className="font-sans text-body-sm text-on-surface-variant mb-md flex-grow">
                  {ing.description}
                </p>
                <div>
                  <p className="font-accent text-label-caps font-bold uppercase tracking-wider text-on-surface-variant mb-xs">
                    Terdapat di:
                  </p>
                  <ul className="flex flex-wrap gap-xs">
                    {ing.foundIn.map((product) => (
                      <li
                        key={product}
                        className="px-sm py-xs rounded-full bg-surface-container-high font-sans text-body-sm text-on-surface"
                      >
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="bg-primary rounded-2xl p-lg md:p-xl text-center">
          <h2 className="font-display text-display-lg-mobile font-extrabold text-on-primary mb-sm">
            Temukan Bahan yang Cocok untuk Kulitmu
          </h2>
          <p className="font-sans text-body-lg text-on-primary-container max-w-xl mx-auto mb-lg">
            Jelajahi produk yang mengandung bahan favoritmu, atau biarkan AI kami
            merekomendasikan formulasi yang tepat untuk kondisi kulitmu.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center">
            <Link
              href="/products"
              className="px-md py-sm rounded-md bg-surface-container-lowest text-primary font-bold hover:bg-surface transition-colors inline-flex items-center justify-center gap-xs"
            >
              Jelajahi Produk
            </Link>
            <Link
              href="/ai-analysis"
              className="px-md py-sm rounded-md border border-on-primary/40 text-on-primary font-semibold hover:bg-on-primary/10 transition-colors inline-flex items-center justify-center gap-xs"
            >
              <Sparkles size={18} /> Coba AI Face Analysis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
