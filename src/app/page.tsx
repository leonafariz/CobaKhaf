import Link from "next/link";
import { ScanFace, Sparkles, ShieldCheck, Leaf, ArrowRight, Quote } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { getBestsellers } from "@/data/products";
import { ingredients, blogPosts } from "@/data/content";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_y8advNDJfn0Fckr6wW7lWUoreBsnfcgGXgXGFunSete7sGDXCK86_mBGzyukzCJjF_mG6vjCNkAw96nSO9kA_lHaiYxf9iBIlXNuYyHSyrJvll1AYgefDibpDuGIHEQdq3XXEtGqkiH4zTIg2Sj1_mRIaBiJCG5wgWrjyBoQWk8BXgDO4nAtKSkL4rIvgdum1heL6Uyy1b0G7fpBomG7eolOsKkhr8X911wkjoBUQLnbXHjTslzFdS9LCrPof5a9aqIlzw-lbTA";

const SCAN_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDkLXyeMRGAEzE8w1A35_t1hOogS6aBKn2C1rSAJx_hFMkDRBz4AJJr9Br7641K4vttm5vTs5zHvlvkSGaP-WNpli1KK3M6S6eYS1cuYBHOg9imZlgJdRlhTPfGadtXfKOqSptDEHu-whabIQwDQV8eetoVOGkRTtoUdAeHsqYfeaFTZsk5G0_l2gUenRTb4k9vhgq4NUh6MY5JNGhiDYqczBzjC9Zzdc03C9egaH7j_iAM6Fpx8b7RZucd_5NaEQy31_NGq2NtbKs";

const testimonials = [
  {
    name: "Rizki A.",
    role: "Mahasiswa, Bandung",
    text: "Face wash-nya beneran ngontrol minyak seharian. Kulit jadi nggak gampang berjerawat lagi.",
  },
  {
    name: "Dimas P.",
    role: "Software Engineer, Jakarta",
    text: "Fitur AI-nya keren banget, langsung dikasih rekomendasi produk yang cocok buat kulit kombinasi gue.",
  },
  {
    name: "Bayu S.",
    role: "Content Creator, Surabaya",
    text: "Sunscreen-nya nggak bikin wajah putih kayak badut. Ringan dan halal pula. Recommended!",
  },
];

const iconMap = { Sparkles, ShieldCheck, Leaf } as const;

export default function Home() {
  const bestsellers = getBestsellers().slice(0, 4);
  const featuredIngredients = ingredients.slice(0, 4);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt="Pria modern menerapkan skincare di kamar mandi minimalis yang terang"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-surface-container-high text-primary mb-md">
              <ShieldCheck size={16} />
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider">
                Halal &amp; Clean Beauty
              </span>
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface mb-md">
              Skincare Halal, Clean, dan Efektif untuk Pria
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant mb-lg max-w-lg">
              Rangkaian perawatan kulit yang diformulasikan khusus untuk pria
              modern, menyeimbangkan nilai-nilai Islami dengan kemanjuran ilmiah.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm">
              <Link
                href="/ai-analysis"
                className="px-md py-sm rounded-md bg-primary text-on-primary font-sans text-body-md font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-card"
              >
                <ScanFace size={20} className="text-electric-blue" />
                Cek Kondisi Kulitmu
              </Link>
              <Link
                href="/products"
                className="px-md py-sm rounded-md border border-primary text-primary hover:bg-primary/5 transition-colors font-sans text-body-md font-semibold flex items-center justify-center gap-xs"
              >
                Lihat Produk
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* AI Feature Teaser */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="bg-primary-container rounded-2xl overflow-hidden grid md:grid-cols-2 items-center">
          <div className="relative h-64 md:h-full min-h-[320px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SCAN_IMG}
              alt="Analisis wajah AI pada pria dengan overlay pemindaian"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="scan-line" />
            </div>
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-electric-blue" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-electric-blue" />
          </div>
          <div className="p-lg md:p-xl">
            <span className="inline-flex items-center gap-xs font-accent text-label-caps font-bold uppercase tracking-wider text-electric-blue mb-sm">
              <Sparkles size={16} /> Powered by AI
            </span>
            <h2 className="font-display text-display-lg-mobile font-extrabold text-on-primary mb-sm">
              Pahami Kulitmu dalam 5 Detik
            </h2>
            <p className="font-sans text-body-lg text-on-primary-container mb-lg">
              Arahkan kamera atau unggah foto. AI kami menganalisis jenis kulit,
              deteksi jerawat, dan memberikan rekomendasi produk personal —
              lengkap dengan rutinitas pagi dan malam.
            </p>
            <Link
              href="/ai-analysis"
              className="inline-flex items-center gap-xs px-md py-sm rounded-md bg-surface-container-lowest text-primary font-sans font-bold hover:bg-surface transition-colors shadow-sm"
            >
              Coba AI Face Analysis <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg">
        <div className="flex items-end justify-between mb-lg">
          <SectionHeading
            eyebrow="Best Sellers"
            title="Produk Favorit Pelanggan"
          />
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-xs text-primary font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Lihat Semua <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Brand values */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <SectionHeading
          center
          eyebrow="Mengapa KAHF"
          title="Nilai yang Kami Pegang"
          subtitle="Setiap formulasi KAHF lahir dari pertemuan antara nilai-nilai Islami dan sains modern."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-lg">
          {[
            {
              icon: "ShieldCheck" as const,
              title: "100% Halal",
              desc: "Tersertifikasi halal MUI, tanpa bahan yang meragukan.",
            },
            {
              icon: "Leaf" as const,
              title: "Clean Beauty",
              desc: "Bahan-bahan botani pilihan, bebas dari bahan berbahaya.",
            },
            {
              icon: "Sparkles" as const,
              title: "Teruji Klinis",
              desc: "Diformulasikan dengan sains dan teruji secara dermatologis.",
            },
          ].map((v) => {
            const Icon = iconMap[v.icon];
            return (
              <div
                key={v.title}
                className="bg-surface-container-lowest rounded-xl card-shadow p-lg text-center"
              >
                <div className="w-14 h-14 rounded-full bg-light-sage text-primary flex items-center justify-center mx-auto mb-sm">
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs">
                  {v.title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ingredients highlight */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex items-end justify-between mb-lg">
            <SectionHeading
              eyebrow="Ingredients"
              title="Bahan Aktif Unggulan"
            />
            <Link
              href="/ingredients"
              className="hidden md:inline-flex items-center gap-xs text-primary font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Kamus Bahan <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
            {featuredIngredients.map((ing) => (
              <div
                key={ing.id}
                className="bg-surface-container-lowest rounded-xl p-md card-shadow"
              >
                <h3 className="font-display text-headline-sm font-bold text-primary mb-xs">
                  {ing.name}
                </h3>
                <p className="font-accent text-accent-text text-secondary mb-xs">
                  {ing.benefit}
                </p>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  {ing.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <SectionHeading
          center
          eyebrow="Testimoni"
          title="Apa Kata Mereka"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-lg">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-lowest rounded-xl card-shadow p-lg flex flex-col"
            >
              <Quote size={28} className="text-primary-fixed-dim mb-sm" />
              <p className="font-sans text-body-md text-on-surface mb-md flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-display font-bold text-on-surface">{t.name}</p>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog highlight */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg">
        <div className="flex items-end justify-between mb-lg">
          <SectionHeading eyebrow="Blog & Tips" title="Wawasan Terbaru" />
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-xs text-primary font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Semua Artikel <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-surface-container-lowest rounded-xl card-shadow overflow-hidden group flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.coverAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-md flex flex-col flex-grow">
                <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-secondary mb-xs">
                  {post.category}
                </span>
                <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant flex-grow">
                  {post.excerpt}
                </p>
                <span className="font-sans text-body-sm text-outline mt-sm">
                  {post.readingTime} · {post.authorName}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="bg-primary rounded-2xl p-lg md:p-xl text-center">
          <h2 className="font-display text-display-lg-mobile font-extrabold text-on-primary mb-sm">
            Mulai Rutinitas Kulitmu Hari Ini
          </h2>
          <p className="font-sans text-body-lg text-on-primary-container max-w-xl mx-auto mb-lg">
            Dapatkan rekomendasi produk personal dengan AI Face Analysis, atau
            jelajahi katalog lengkap kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center">
            <Link
              href="/ai-analysis"
              className="px-md py-sm rounded-md bg-surface-container-lowest text-primary font-bold hover:bg-surface transition-colors"
            >
              Coba AI Face Analysis
            </Link>
            <Link
              href="/products"
              className="px-md py-sm rounded-md border border-on-primary/40 text-on-primary font-semibold hover:bg-on-primary/10 transition-colors"
            >
              Jelajahi Produk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
