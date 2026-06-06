import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShoppingBag,
  ScanFace,
  CheckCircle2,
  Sparkles,
  TreePine,
  Leaf,
  Citrus,
  Flower,
  Shield,
  Sprout,
  Star,
} from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { shopeeLink } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  TreePine,
  Leaf,
  Citrus,
  Flower,
  Shield,
  Sprout,
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produk tidak ditemukan" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const primary = product.images.find((i) => i.isPrimary) ?? product.images[0];
  const companions = (product.companionProductSlugs ?? [])
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
        {/* Gallery */}
        <div className="md:col-span-7 flex flex-col-reverse md:flex-row gap-sm">
          {product.images.length > 1 && (
            <div className="flex md:flex-col gap-sm overflow-x-auto">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className={`w-20 h-20 rounded-lg bg-surface-container-highest overflow-hidden shrink-0 ${
                    i === 0 ? "border-2 border-primary" : "opacity-70"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
          <div className="flex-grow rounded-xl bg-surface-container-lowest card-shadow overflow-hidden relative aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={primary.url} alt={primary.alt} className="w-full h-full object-cover" />
            <div className="absolute top-sm left-sm flex gap-xs flex-wrap">
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-accent text-label-caps font-bold uppercase tracking-wider"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="md:col-span-5 flex flex-col justify-center py-md md:pl-lg">
          <div className="flex items-center gap-xs mb-xs">
            <div className="flex text-[#F59E0B]">
              {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="font-sans text-body-sm text-on-surface-variant">
              {product.rating} ({product.reviewCount} ulasan)
            </span>
          </div>
          <h1 className="font-display text-display-lg-mobile md:text-[40px] md:leading-[48px] font-extrabold text-primary mb-xs">
            {product.name}
          </h1>
          <p className="font-sans text-body-lg text-on-surface-variant mb-md">
            {product.description}
          </p>
          <div className="font-display text-headline-md font-bold text-on-background mb-lg">
            {product.priceRange}
          </div>
          <div className="flex flex-col gap-sm mb-lg">
            <a
              href={shopeeLink(product.shopeeLink, "product_catalog")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-shopee-orange text-white py-4 rounded-md font-semibold flex items-center justify-center gap-xs hover:opacity-90 transition-opacity"
            >
              <ShoppingBag size={20} /> Beli di Shopee
            </a>
            <Link
              href="/ai-analysis"
              className="w-full border border-electric-blue text-electric-blue py-4 rounded-md font-semibold flex items-center justify-center gap-xs hover:bg-electric-blue/5 transition-colors"
            >
              <ScanFace size={20} /> Cek dengan AI Skin Analyzer
            </Link>
          </div>
          <div className="border-t border-outline-variant/30 pt-md">
            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 font-sans text-body-sm text-on-surface-variant">
                  <CheckCircle2 size={20} className="text-primary" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ingredients + How to use */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
        <div className="md:col-span-2 bg-surface-container-lowest rounded-xl card-shadow p-md md:p-lg">
          <h3 className="font-display text-headline-sm font-bold text-primary mb-md">
            Key Ingredients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            {product.ingredients.map((ing) => {
              const Icon = ICONS[ing.icon ?? "Sparkles"] ?? Sparkles;
              return (
                <div key={ing.name} className="flex gap-sm items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-accent text-accent-text font-semibold text-on-surface mb-1">
                      {ing.name}
                    </h4>
                    <p className="font-sans text-body-sm text-on-surface-variant">
                      {ing.function}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-primary text-on-primary rounded-xl p-md md:p-lg relative overflow-hidden">
          <h3 className="font-display text-headline-sm font-bold mb-md relative z-10">
            How to Use
          </h3>
          <ol className="space-y-4 font-sans text-body-sm relative z-10 list-decimal list-inside marker:font-bold marker:text-primary-fixed">
            {product.howToUse.map((step, i) => (
              <li key={i} className="pl-2 text-on-primary-container">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Companion products */}
      {companions.length > 0 && (
        <section>
          <h3 className="font-display text-headline-md font-bold text-on-surface mb-md">
            Gunakan Bersama
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {companions.map((c) => (
              <ProductCard key={c.id} product={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
