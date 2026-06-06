/**
 * Data Access Layer — uses PostgreSQL via Prisma when DATABASE_URL is set,
 * falls back to static seed data so the site works on Vercel without a DB.
 */
import type {
  Product,
  BlogPost,
  Ingredient,
  StoreLocation,
  FaqItem,
  ProductCategory,
  SkinType,
  SkinConcern,
} from "./types";

const hasDb = Boolean(process.env.DATABASE_URL);

// ─── Mappers ────────────────────────────────────────────────────────────────

function mapProduct(row: {
  id: string; name: string; slug: string; tagline: string;
  shortDescription: string; description: string; category: string;
  categoryLabel: string; skinTypes: string[]; skinConcerns: string[];
  shopeeLink: string; priceRange: string; rating: number; reviewCount: number;
  isBestseller: boolean; badges: string[]; benefits: string[];
  howToUse: string[]; companionProductSlugs: string[];
  images: { url: string; alt: string; isPrimary: boolean }[];
  ingredients: { name: string; function: string; isKey: boolean; icon: string | null }[];
}): Product {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    tagline: row.tagline,
    shortDescription: row.shortDescription,
    description: row.description,
    category: row.category as ProductCategory,
    categoryLabel: row.categoryLabel,
    skinTypes: row.skinTypes as SkinType[],
    skinConcerns: row.skinConcerns as SkinConcern[],
    shopeeLink: row.shopeeLink,
    priceRange: row.priceRange,
    rating: row.rating,
    reviewCount: row.reviewCount,
    isBestseller: row.isBestseller,
    badges: row.badges,
    benefits: row.benefits,
    howToUse: row.howToUse,
    companionProductSlugs: row.companionProductSlugs,
    images: row.images.map((i) => ({ url: i.url, alt: i.alt, isPrimary: i.isPrimary })),
    ingredients: row.ingredients.map((i) => ({
      name: i.name,
      function: i.function,
      isKey: i.isKey,
      icon: i.icon ?? undefined,
    })),
  };
}

function mapBlogPost(row: {
  id: string; title: string; slug: string; excerpt: string; content: string;
  coverImage: string; coverAlt: string; authorName: string; category: string;
  tags: string[]; publishedAt: string; readingTime: string;
}): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    coverImage: row.coverImage,
    coverAlt: row.coverAlt,
    authorName: row.authorName,
    category: row.category as BlogPost["category"],
    tags: row.tags,
    publishedAt: row.publishedAt,
    readingTime: row.readingTime,
  };
}

// ─── Products ────────────────────────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  if (!hasDb) {
    const { products } = await import("@/data/products");
    return products;
  }
  const { db } = await import("./db");
  const rows = await db.product.findMany({
    include: { images: true, ingredients: true },
    orderBy: { createdAt: "asc" },
  });
  return rows.map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!hasDb) {
    const { getProductBySlug } = await import("@/data/products");
    return getProductBySlug(slug);
  }
  const { db } = await import("./db");
  const row = await db.product.findUnique({
    where: { slug },
    include: { images: true, ingredients: true },
  });
  return row ? mapProduct(row) : undefined;
}

export async function getBestsellers(): Promise<Product[]> {
  if (!hasDb) {
    const { getBestsellers } = await import("@/data/products");
    return getBestsellers();
  }
  const { db } = await import("./db");
  const rows = await db.product.findMany({
    where: { isBestseller: true },
    include: { images: true, ingredients: true },
    orderBy: { createdAt: "asc" },
  });
  return rows.map(mapProduct);
}

export async function getAllProductSlugs(): Promise<string[]> {
  if (!hasDb) {
    const { products } = await import("@/data/products");
    return products.map((p) => p.slug);
  }
  const { db } = await import("./db");
  const rows = await db.product.findMany({ select: { slug: true } });
  return rows.map((r) => r.slug);
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!hasDb) {
    const { blogPosts } = await import("@/data/content");
    return blogPosts;
  }
  const { db } = await import("./db");
  const rows = await db.blogPost.findMany({ orderBy: { publishedAt: "desc" } });
  return rows.map(mapBlogPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!hasDb) {
    const { getPostBySlug } = await import("@/data/content");
    return getPostBySlug(slug);
  }
  const { db } = await import("./db");
  const row = await db.blogPost.findUnique({ where: { slug } });
  return row ? mapBlogPost(row) : undefined;
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!hasDb) {
    const { blogPosts } = await import("@/data/content");
    return blogPosts.map((p) => p.slug);
  }
  const { db } = await import("./db");
  const rows = await db.blogPost.findMany({ select: { slug: true } });
  return rows.map((r) => r.slug);
}

// ─── Ingredients ──────────────────────────────────────────────────────────────

export async function getIngredients(): Promise<Ingredient[]> {
  if (!hasDb) {
    const { ingredients } = await import("@/data/content");
    return ingredients;
  }
  const { db } = await import("./db");
  const rows = await db.ingredient.findMany({ orderBy: { name: "asc" } });
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    letter: r.letter,
    benefit: r.benefit,
    description: r.description,
    foundIn: r.foundIn,
    icon: r.icon ?? "Sparkles",
  }));
}

// ─── Stores ───────────────────────────────────────────────────────────────────

export async function getStoreLocations(): Promise<StoreLocation[]> {
  if (!hasDb) {
    const { storeLocations } = await import("@/data/content");
    return storeLocations;
  }
  const { db } = await import("./db");
  const rows = await db.storeLocation.findMany({ orderBy: { city: "asc" } });
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    type: r.type as StoreLocation["type"],
    address: r.address,
    city: r.city,
    province: r.province,
    mapsUrl: r.mapsUrl ?? undefined,
    phone: r.phone ?? undefined,
    hours: r.hours ?? undefined,
  }));
}

export async function getOnlineStores(): Promise<{ name: string; url: string; color?: string }[]> {
  if (!hasDb) {
    const { onlineStores } = await import("@/data/content");
    return onlineStores;
  }
  const { db } = await import("./db");
  const rows = await db.onlineStore.findMany({ orderBy: { name: "asc" } });
  return rows.map((r) => ({ name: r.name, url: r.url, color: r.color ?? undefined }));
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export async function getFaqItems(): Promise<FaqItem[]> {
  if (!hasDb) {
    const { faqItems } = await import("@/data/content");
    return faqItems;
  }
  const { db } = await import("./db");
  const rows = await db.faqItem.findMany({ orderBy: [{ category: "asc" }, { order: "asc" }] });
  return rows.map((r) => ({
    question: r.question,
    answer: r.answer,
    category: r.category as FaqItem["category"],
  }));
}
