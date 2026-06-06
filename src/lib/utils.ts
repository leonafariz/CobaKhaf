import type { ProductCategory } from "./types";

/** Conditionally join class names. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** UTM-tagged Shopee deep link for conversion tracking. */
export function shopeeLink(
  baseUrl: string,
  campaign: "ai_analysis" | "product_catalog" = "product_catalog",
): string {
  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}utm_source=website_kahf&utm_medium=product_recommendation&utm_campaign=${campaign}`;
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  face_wash: "Face Wash",
  moisturizer: "Moisturizer",
  serum: "Serum",
  sunscreen: "Sunscreen",
  toner: "Toner",
  deodorant: "Deodorant",
  body_wash: "Body Wash",
  fragrance: "Fragrance",
  hair_care: "Hair Care",
};
