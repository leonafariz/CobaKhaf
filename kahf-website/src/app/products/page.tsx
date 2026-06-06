import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Jelajahi katalog lengkap produk skincare halal KAHF — face wash, moisturizer, sunscreen, dan banyak lagi. Diformulasikan untuk pria modern.",
};

export default function ProductsPage() {
  return (
    <div className="pb-xl min-h-screen flex flex-col">
      <header className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl text-center">
        <h1 className="font-display text-display-lg-mobile md:text-display-lg font-extrabold text-primary mb-sm">
          Master Your Regimen
        </h1>
        <p className="font-sans text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Grooming essentials yang diformulasikan secara ilmiah untuk menghormati
          maskulinitas modern dan kemurnian.
        </p>
      </header>
      <ProductsClient />
    </div>
  );
}
