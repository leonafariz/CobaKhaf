// Core domain types for KAHF website

export type ProductCategory =
  | "face_wash"
  | "moisturizer"
  | "serum"
  | "sunscreen"
  | "toner"
  | "deodorant"
  | "body_wash"
  | "fragrance"
  | "hair_care";

export type SkinType = "normal" | "oily" | "dry" | "combination" | "sensitive";

export type SkinConcern =
  | "acne"
  | "dullness"
  | "oily"
  | "dry"
  | "sensitive"
  | "aging"
  | "pores";

export type AcneSeverity = "none" | "mild" | "moderate" | "severe";

export interface ProductIngredient {
  name: string;
  function: string;
  isKey: boolean;
  icon?: string;
}

export interface ProductImage {
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  shortDescription: string;
  category: ProductCategory;
  categoryLabel: string;
  skinTypes: SkinType[];
  skinConcerns: SkinConcern[];
  shopeeLink: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  isBestseller: boolean;
  badges: string[];
  benefits: string[];
  howToUse: string[];
  images: ProductImage[];
  ingredients: ProductIngredient[];
  companionProductSlugs?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverAlt: string;
  authorName: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
}

export interface Ingredient {
  id: string;
  name: string;
  letter: string;
  benefit: string;
  description: string;
  foundIn: string[];
  icon: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  type: "official_store" | "retail_partner" | "online_only";
  address: string;
  city: string;
  province: string;
  mapsUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface AnalysisResult {
  skin_type: string;
  acne_severity: AcneSeverity;
  acne_locations: string[];
  skin_concerns: string[];
  overall_score: number;
  skin_health_summary: string;
  morning_routine: string[];
  night_routine: string[];
  recommended_product_categories: ProductCategory[];
  area_breakdown?: {
    forehead: string;
    nose: string;
    cheeks: string;
    chin: string;
  };
}
