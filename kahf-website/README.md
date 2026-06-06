# KAHF — Website Company/Product Profile + AI Skin Consultant

Website resmi KAHF: company/product profile skincare halal untuk pria,
dilengkapi fitur **AI Face Analysis** berbasis Google Gemini Vision yang
menganalisis kondisi kulit dan merekomendasikan produk dengan deep link ke
Shopee. Dibangun sesuai PRD v1.0.

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** dengan design token KAHF (deep green, Plus Jakarta Sans / Inter / DM Sans)
- **Google Gemini** (`@google/generative-ai`) untuk analisis wajah
- **Zustand** untuk state fitur AI
- **lucide-react** ikon, **html-to-image** untuk share card

## Getting Started

```bash
npm install
cp .env.example .env.local   # isi GEMINI_API_KEY (opsional)
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

> **Catatan:** Tanpa `GEMINI_API_KEY`, endpoint `/api/analyze` mengembalikan
> hasil demo yang konsisten sehingga seluruh alur AI Face Analysis tetap bisa
> dicoba end-to-end.

## Halaman

| Route | Deskripsi |
|-------|-----------|
| `/` | Home — hero, teaser AI, bestseller, nilai brand, testimoni, blog |
| `/products` · `/products/[slug]` | Katalog dengan filter + detail produk |
| `/ai-analysis` | AI Face Analysis (kamera/upload, scanning animation, hasil + rekomendasi) |
| `/share-results` | Kartu hasil AI siap dibagikan (Instagram Story / WhatsApp / unduh) |
| `/blog` · `/blog/[slug]` | Blog & tips |
| `/ingredients` | Kamus bahan |
| `/about` · `/sustainability` | Company profile & keberlanjutan |
| `/store-locator` · `/contact` | Lokasi toko & kontak |
| `/faq` · `/privacy-policy` · `/terms` | FAQ & halaman legal |

## Struktur

```
src/
  app/            # routes (App Router) + /api/analyze
  components/      # Navbar, Footer, ProductCard, analysis/*
  data/            # products.ts, content.ts (blog, ingredients, stores, FAQ)
  store/           # Zustand (analysis)
  lib/             # types & utils (Shopee UTM link, dll)
```

## Integrasi (sesuai PRD)

- **Gemini Vision** — `src/app/api/analyze/route.ts` (server-side, API key tidak terekspos, fallback graceful).
- **Shopee deep link** — UTM tagging via `shopeeLink()` di `src/lib/utils.ts`
  (`utm_campaign=ai_analysis` untuk hasil AI, `product_catalog` untuk katalog).
- **Privasi** — gambar wajah diproses lalu dihapus; consent diminta sebelum kamera aktif.
