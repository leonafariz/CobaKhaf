import Link from "next/link";
import { ShoppingCart, Star, StarHalf } from "lucide-react";
import type { Product } from "@/lib/types";
import { shopeeLink } from "@/lib/utils";

function Rating({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex text-[#F59E0B]">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
      {half && <StarHalf size={16} fill="currentColor" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e-${i}`} size={16} className="text-outline-variant" />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const primary = product.images.find((i) => i.isPrimary) ?? product.images[0];
  return (
    <div className="bg-surface-container-lowest rounded-xl card-shadow flex flex-col group transition-transform duration-300 hover:-translate-y-1">
      <Link
        href={`/products/${product.slug}`}
        className="relative h-64 w-full bg-surface-container-low overflow-hidden rounded-t-xl block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={primary.url}
          alt={primary.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-sm left-sm flex gap-xs flex-wrap">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="bg-light-sage text-primary font-accent text-label-caps font-bold tracking-wider px-2 py-1 rounded"
            >
              {badge}
            </span>
          ))}
        </div>
      </Link>
      <div className="p-md flex flex-col flex-grow">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-body-sm text-on-surface-variant mb-md flex-grow">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mb-md">
          <span className="font-sans text-body-lg font-semibold text-primary">
            {product.priceRange}
          </span>
          <Rating value={product.rating} />
        </div>
        <a
          href={shopeeLink(product.shopeeLink, "product_catalog")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-shopee-orange text-white font-sans text-body-md font-semibold py-3 rounded-md flex justify-center items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <ShoppingCart size={20} />
          Beli di Shopee
        </a>
      </div>
    </div>
  );
}
