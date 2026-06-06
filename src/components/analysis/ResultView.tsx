"use client";

import Link from "next/link";
import { Sun, Moon, CheckCircle2, RefreshCw, Share2, ShoppingCart } from "lucide-react";
import type { AnalysisResult, ProductCategory } from "@/lib/types";
import { products } from "@/data/products";
import { shopeeLink } from "@/lib/utils";

function recommendProducts(categories: ProductCategory[]) {
  const picks = products.filter((p) => categories.includes(p.category));
  // Ensure at least 3 recommendations.
  if (picks.length < 3) {
    for (const p of products) {
      if (picks.length >= 3) break;
      if (!picks.includes(p)) picks.push(p);
    }
  }
  return picks.slice(0, 3);
}

const SKIN_TYPE_LABEL: Record<string, string> = {
  normal: "Normal",
  oily: "Berminyak",
  dry: "Kering",
  combination: "Kombinasi",
  sensitive: "Sensitif",
};

export default function ResultView({
  result,
  imageUrl,
  onReset,
}: {
  result: AnalysisResult;
  imageUrl: string | null;
  onReset: () => void;
}) {
  const recommended = recommendProducts(result.recommended_product_categories);
  const scoreColor =
    result.overall_score >= 80
      ? "text-primary"
      : result.overall_score >= 60
        ? "text-[#F59E0B]"
        : "text-error";

  return (
    <div className="space-y-xl animate-fadeInUp">
      {/* Score & summary */}
      <section className="grid md:grid-cols-3 gap-gutter">
        <div className="bg-surface-container-lowest rounded-xl card-shadow p-lg flex flex-col items-center justify-center text-center">
          {imageUrl && (
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface-container-lowest electric-glow mb-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt="Anda" className="w-full h-full object-cover" />
            </div>
          )}
          <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-outline">
            Skin Health Score
          </span>
          <span className={`font-display text-display-lg font-extrabold ${scoreColor}`}>
            {result.overall_score}
            <span className="text-body-md text-on-surface-variant">/100</span>
          </span>
          <span className="mt-xs px-sm py-1 rounded-full bg-light-sage text-primary font-accent text-label-caps font-bold uppercase tracking-wider">
            Tipe: {SKIN_TYPE_LABEL[result.skin_type] ?? result.skin_type}
          </span>
        </div>

        <div className="md:col-span-2 bg-surface-container-lowest rounded-xl card-shadow p-lg">
          <h3 className="font-display text-headline-sm font-bold text-primary mb-sm">
            Ringkasan Kondisi Kulit
          </h3>
          <p className="font-sans text-body-md text-on-surface-variant mb-md">
            {result.skin_health_summary}
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-sm py-1 rounded-full bg-surface-variant text-on-surface-variant font-accent text-label-caps font-bold uppercase">
              Jerawat: {result.acne_severity}
            </span>
            {result.skin_concerns.map((c) => (
              <span
                key={c}
                className="px-sm py-1 rounded-full bg-surface-variant text-on-surface-variant font-accent text-label-caps"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Area breakdown */}
      {result.area_breakdown && (
        <section className="bg-surface-container-low rounded-xl p-lg">
          <h3 className="font-display text-headline-sm font-bold text-primary mb-md">
            Kondisi per Area Wajah
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {[
              { label: "Dahi", value: result.area_breakdown.forehead },
              { label: "Hidung", value: result.area_breakdown.nose },
              { label: "Pipi", value: result.area_breakdown.cheeks },
              { label: "Dagu", value: result.area_breakdown.chin },
            ].map((a) => (
              <div
                key={a.label}
                className="bg-surface-container-lowest rounded-lg p-md card-shadow"
              >
                <p className="font-accent text-label-caps font-bold uppercase tracking-wider text-secondary mb-xs">
                  {a.label}
                </p>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  {a.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Routines */}
      <section className="grid md:grid-cols-2 gap-gutter">
        <div className="bg-surface-container-lowest rounded-xl card-shadow p-lg">
          <h3 className="font-display text-headline-sm font-bold text-primary mb-md flex items-center gap-xs">
            <Sun size={22} className="text-[#F59E0B]" /> Rutinitas Pagi
          </h3>
          <ol className="space-y-sm">
            {result.morning_routine.map((step, i) => (
              <li key={i} className="flex gap-sm items-start">
                <span className="w-6 h-6 rounded-full bg-light-sage text-primary font-bold text-body-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="font-sans text-body-md text-on-surface-variant">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-primary text-on-primary rounded-xl card-shadow p-lg">
          <h3 className="font-display text-headline-sm font-bold mb-md flex items-center gap-xs">
            <Moon size={22} className="text-primary-fixed-dim" /> Rutinitas Malam
          </h3>
          <ol className="space-y-sm">
            {result.night_routine.map((step, i) => (
              <li key={i} className="flex gap-sm items-start">
                <span className="w-6 h-6 rounded-full bg-on-primary/20 text-on-primary font-bold text-body-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="font-sans text-body-md text-on-primary-container">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Recommended products */}
      <section>
        <h3 className="font-display text-headline-md font-bold text-on-surface mb-md">
          Rekomendasi Produk untuk Kulitmu
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {recommended.map((p) => {
            const primary = p.images.find((i) => i.isPrimary) ?? p.images[0];
            return (
              <div
                key={p.id}
                className="bg-surface-container-lowest rounded-xl card-shadow overflow-hidden flex flex-col"
              >
                <div className="h-48 bg-surface-container-low overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={primary.url}
                    alt={primary.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-md flex flex-col flex-grow">
                  <Link href={`/products/${p.slug}`}>
                    <h4 className="font-display text-headline-sm font-bold text-on-surface mb-xs hover:text-primary transition-colors">
                      {p.name}
                    </h4>
                  </Link>
                  <p className="font-sans text-body-sm text-on-surface-variant mb-sm flex-grow">
                    <CheckCircle2 size={14} className="inline text-primary mr-1" />
                    Cocok untuk kulit {SKIN_TYPE_LABEL[result.skin_type]?.toLowerCase()} Anda.
                  </p>
                  <span className="font-sans text-body-lg font-semibold text-primary mb-sm">
                    {p.priceRange}
                  </span>
                  <a
                    href={shopeeLink(p.shopeeLink, "ai_analysis")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-shopee-orange text-white font-semibold py-2.5 rounded-md flex justify-center items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <ShoppingCart size={18} /> Beli di Shopee
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Actions */}
      <section className="flex flex-col sm:flex-row gap-sm justify-center">
        <Link
          href="/share-results"
          className="px-md py-sm rounded-md bg-primary text-on-primary font-semibold flex items-center justify-center gap-xs hover:opacity-90 transition-opacity"
        >
          <Share2 size={18} /> Bagikan Hasil
        </Link>
        <button
          onClick={onReset}
          className="px-md py-sm rounded-md border border-primary text-primary font-semibold flex items-center justify-center gap-xs hover:bg-primary/5 transition-colors"
        >
          <RefreshCw size={18} /> Analisis Ulang
        </button>
      </section>
    </div>
  );
}
