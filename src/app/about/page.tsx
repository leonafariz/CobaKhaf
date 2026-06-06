import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Leaf,
  FlaskConical,
  Heart,
  Target,
  Eye,
  BadgeCheck,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali KAHF — brand skincare halal, clean, dan teruji ilmiah untuk pria modern Indonesia. Pelajari misi, nilai, sertifikasi, dan perjalanan kami.",
};

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ttg9YhXxNx-mN7Uz2PZGLQ3gzhKB9rpDcK0GF6vSTXCDxeMQs0q0pgiT0mYRma8kWgE9WT65gvkdmi59ru9g0Zto2Zaxi7i4kiS1AIq2R6_OCAJocUHZH89gZJyL4etuBPNiAGQbWqPm5IevQnl5ANOse-f4kflCGr3DoLEQDH1aHcCaEgA9Ze9usqAU6FeOpFddXf9Bw-LInqUmwyQgU0qOtj-pqw5LOQl5CUl7nojhiQ5y9pL4gL6vYc6JST7vTPSGWO_fJ2I";

const PORTRAIT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_y8advNDJfn0Fckr6wW7lWUoreBsnfcgGXgXGFunSete7sGDXCK86_mBGzyukzCJjF_mG6vjCNkAw96nSO9kA_lHaiYxf9iBIlXNuYyHSyrJvll1AYgefDibpDuGIHEQdq3XXEtGqkiH4zTIg2Sj1_mRIaBiJCG5wgWrjyBoQWk8BXgDO4nAtKSkL4rIvgdum1heL6Uyy1b0G7fpBomG7eolOsKkhr8X911wkjoBUQLnbXHjTslzFdS9LCrPof5a9aqIlzw-lbTA";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Halal",
    desc: "Setiap produk tersertifikasi halal MUI, diformulasikan tanpa bahan yang meragukan.",
  },
  {
    icon: Leaf,
    title: "Clean Beauty",
    desc: "Bahan botani pilihan, bebas dari bahan berbahaya dan kemasan yang bertanggung jawab.",
  },
  {
    icon: FlaskConical,
    title: "Teruji Ilmiah",
    desc: "Formulasi yang dikembangkan dengan sains dan teruji secara dermatologis untuk efikasi nyata.",
  },
  {
    icon: Heart,
    title: "Komunitas",
    desc: "Membangun gerakan pria Indonesia yang peduli pada perawatan diri tanpa kompromi pada nilai.",
  },
];

const certifications = [
  {
    icon: BadgeCheck,
    title: "Halal MUI",
    desc: "Tersertifikasi oleh Majelis Ulama Indonesia.",
  },
  {
    icon: ShieldCheck,
    title: "BPOM",
    desc: "Terdaftar resmi di Badan POM Republik Indonesia.",
  },
  {
    icon: Award,
    title: "Clean Beauty",
    desc: "Bebas dari bahan berbahaya sesuai standar clean beauty.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "KAHF Lahir",
    desc: "KAHF didirikan dengan misi menghadirkan skincare halal dan clean untuk pria Indonesia.",
  },
  {
    year: "2021",
    title: "100.000 Pelanggan Pertama",
    desc: "Menembus angka 100 ribu pelanggan dalam waktu kurang dari setahun.",
  },
  {
    year: "2023",
    title: "Peluncuran AI Face Analysis",
    desc: "Menghadirkan teknologi analisis kulit berbasis AI untuk rekomendasi yang dipersonalisasi.",
  },
  {
    year: "2026",
    title: "Pemimpin Pasar",
    desc: "Menjadi brand skincare pria pilihan utama di Indonesia.",
  },
];

const mediaCoverage = [
  "Kompas",
  "Detik",
  "Tempo",
  "CNN Indonesia",
  "Forbes Indonesia",
  "The Jakarta Post",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt="Hutan cedar berkabut saat fajar, melambangkan kemurnian dan kesegaran maskulin"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-surface-container-high text-primary mb-md">
              <Leaf size={16} />
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider">
                Brand Story
              </span>
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface mb-md">
              Merawat Pria Modern dengan Nilai yang Murni
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant max-w-lg">
              KAHF lahir dari keyakinan bahwa pria Indonesia berhak atas perawatan
              kulit yang efektif sekaligus selaras dengan nilai-nilai Islami. Kami
              memadukan kemurnian halal, prinsip clean beauty, dan kemanjuran ilmiah
              dalam setiap produk.
            </p>
          </div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="grid md:grid-cols-2 gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl card-shadow p-lg">
            <div className="w-14 h-14 rounded-full bg-light-sage text-primary flex items-center justify-center mb-sm">
              <Target size={28} />
            </div>
            <h2 className="font-display text-headline-md font-bold text-on-surface mb-xs">
              Misi Kami
            </h2>
            <p className="font-sans text-body-md text-on-surface-variant">
              Menghadirkan rangkaian perawatan kulit halal dan clean yang teruji
              secara ilmiah, agar setiap pria Indonesia dapat tampil percaya diri
              tanpa kompromi pada keyakinan dan kesehatan kulitnya.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl card-shadow p-lg">
            <div className="w-14 h-14 rounded-full bg-light-sage text-primary flex items-center justify-center mb-sm">
              <Eye size={28} />
            </div>
            <h2 className="font-display text-headline-md font-bold text-on-surface mb-xs">
              Visi Kami
            </h2>
            <p className="font-sans text-body-md text-on-surface-variant">
              Menjadi brand grooming pria nomor satu di Indonesia yang menjadi
              standar baru perawatan diri — modern, maskulin, halal, dan
              bertanggung jawab terhadap lingkungan.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            center
            eyebrow="Core Values"
            title="Nilai yang Kami Pegang"
            subtitle="Empat prinsip yang menjadi fondasi setiap keputusan dan formulasi KAHF."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mt-lg">
            {coreValues.map((v) => {
              const Icon = v.icon;
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
                  <p className="font-sans text-body-sm text-on-surface-variant">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story with portrait */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="grid md:grid-cols-2 gap-gutter items-center">
          <div className="rounded-2xl overflow-hidden h-72 md:h-[420px] card-shadow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PORTRAIT_IMG}
              alt="Pria modern menerapkan skincare di kamar mandi minimalis yang terang"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Perjalanan Kami"
              title="Dari Keyakinan Menjadi Gerakan"
            />
            <p className="font-sans text-body-md text-on-surface-variant mt-sm mb-sm">
              Berawal dari kegelisahan bahwa pasar skincare pria di Indonesia
              didominasi produk yang tidak transparan soal bahan dan kehalalannya,
              KAHF hadir untuk mengubah keadaan.
            </p>
            <p className="font-sans text-body-md text-on-surface-variant">
              Kami bekerja sama dengan dermatolog dan ahli formulasi untuk
              menciptakan produk yang benar-benar bekerja, sekaligus menjunjung
              tinggi prinsip halal dan clean beauty. Hari ini, KAHF dipercaya oleh
              ratusan ribu pria di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            center
            eyebrow="Sertifikasi"
            title="Terjamin dan Tepercaya"
            subtitle="Komitmen kami dibuktikan dengan sertifikasi resmi yang dapat dipertanggungjawabkan."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-lg">
            {certifications.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="bg-surface-container-lowest rounded-xl card-shadow p-lg flex items-start gap-sm"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-light-sage text-primary flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs">
                      {c.title}
                    </h3>
                    <p className="font-sans text-body-sm text-on-surface-variant">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <SectionHeading
          center
          eyebrow="Milestones"
          title="Tonggak Perjalanan KAHF"
        />
        <div className="max-w-3xl mx-auto mt-lg">
          <ol className="relative border-l-2 border-primary-fixed-dim ml-3">
            {milestones.map((m) => (
              <li key={m.year} className="mb-lg ml-lg last:mb-0">
                <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 rounded-full bg-primary ring-4 ring-surface" />
                <span className="inline-block font-accent text-label-caps font-bold uppercase tracking-wider text-primary mb-xs">
                  {m.year}
                </span>
                <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs">
                  {m.title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {m.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            center
            eyebrow="Media Coverage"
            title="Diliput oleh Media Terkemuka"
          />
          <div className="flex flex-wrap justify-center gap-sm mt-lg">
            {mediaCoverage.map((name) => (
              <span
                key={name}
                className="px-md py-sm rounded-full bg-surface-container-lowest card-shadow font-display text-body-md font-bold text-on-surface-variant"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="bg-primary rounded-2xl p-lg md:p-xl text-center">
          <h2 className="font-display text-display-lg-mobile font-extrabold text-on-primary mb-sm">
            Jadi Bagian dari Gerakan KAHF
          </h2>
          <p className="font-sans text-body-lg text-on-primary-container max-w-xl mx-auto mb-lg">
            Temukan produk yang tepat untuk kulitmu, atau biarkan AI kami membantu
            menemukan rutinitas yang sempurna.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center">
            <Link
              href="/products"
              className="px-md py-sm rounded-md bg-surface-container-lowest text-primary font-bold hover:bg-surface transition-colors inline-flex items-center justify-center gap-xs"
            >
              Jelajahi Produk
            </Link>
            <Link
              href="/ai-analysis"
              className="px-md py-sm rounded-md border border-on-primary/40 text-on-primary font-semibold hover:bg-on-primary/10 transition-colors inline-flex items-center justify-center gap-xs"
            >
              <Sparkles size={18} /> Coba AI Face Analysis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
