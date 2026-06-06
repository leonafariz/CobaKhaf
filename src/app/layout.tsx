import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "KAHF — Skincare Halal, Clean & Efektif untuk Pria",
    template: "%s | KAHF",
  },
  description:
    "Rangkaian perawatan kulit halal yang diformulasikan khusus untuk pria modern. Coba AI Face Analysis untuk rekomendasi produk yang dipersonalisasi.",
  keywords: [
    "skincare pria",
    "skincare halal",
    "KAHF",
    "AI face analysis",
    "perawatan kulit pria",
  ],
  openGraph: {
    title: "KAHF — Modern Masculine Halal Skincare",
    description:
      "Perawatan kulit halal untuk pria modern dengan teknologi AI Face Analysis.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col bg-surface text-on-surface antialiased">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
