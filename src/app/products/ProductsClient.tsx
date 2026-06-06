"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import type { Product, ProductCategory, SkinType, SkinConcern } from "@/lib/types";
import { cn } from "@/lib/utils";

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All Formulations" },
  { value: "face_wash", label: "Face Wash" },
  { value: "moisturizer", label: "Moisturizer" },
  { value: "sunscreen", label: "Sunscreen" },
  { value: "deodorant", label: "Deodorant" },
  { value: "fragrance", label: "Fragrance" },
];

export default function ProductsClient({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [skinType, setSkinType] = useState<SkinType | "">("");
  const [concern, setConcern] = useState<SkinConcern | "">("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (skinType && !p.skinTypes.includes(skinType)) return false;
      if (concern && !p.skinConcerns.includes(concern)) return false;
      return true;
    });
  }, [products, category, skinType, concern]);

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-20 z-40 bg-surface/95 backdrop-blur-sm border-b border-surface-container-high py-4 mb-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-wrap gap-sm items-center justify-between">
          <div className="flex gap-sm overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={cn(
                  "px-4 py-2 rounded-full font-sans text-body-sm whitespace-nowrap transition-all",
                  category === c.value
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-lowest border border-surface-container-high text-on-surface-variant hover:border-primary",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex gap-sm w-full md:w-auto mt-2 md:mt-0">
            <select
              value={skinType}
              onChange={(e) => setSkinType(e.target.value as SkinType | "")}
              className="w-full md:w-40 bg-surface-container-lowest border border-surface-container-high text-on-surface-variant rounded-md font-sans text-body-sm px-3 py-2 focus:border-primary focus:outline-none"
            >
              <option value="">Skin Type</option>
              <option value="oily">Berminyak</option>
              <option value="dry">Kering</option>
              <option value="combination">Kombinasi</option>
              <option value="sensitive">Sensitif</option>
              <option value="normal">Normal</option>
            </select>
            <select
              value={concern}
              onChange={(e) => setConcern(e.target.value as SkinConcern | "")}
              className="w-full md:w-40 bg-surface-container-lowest border border-surface-container-high text-on-surface-variant rounded-md font-sans text-body-sm px-3 py-2 focus:border-primary focus:outline-none"
            >
              <option value="">Concern</option>
              <option value="acne">Jerawat</option>
              <option value="oily">Minyak Berlebih</option>
              <option value="dullness">Kusam</option>
              <option value="aging">Penuaan</option>
              <option value="sensitive">Sensitif</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-xl">
            <SearchX size={48} className="text-outline mx-auto mb-sm" />
            <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs">
              Tidak ada produk ditemukan
            </h3>
            <p className="font-sans text-body-md text-on-surface-variant">
              Coba ubah filter pencarian Anda.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
