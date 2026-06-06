import type { Metadata } from "next";
import Link from "next/link";
import {
  Recycle,
  Sprout,
  Users,
  Leaf,
  Droplets,
  TreePine,
  BadgeCheck,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Keberlanjutan",
  description:
    "Komitmen KAHF terhadap keberlanjutan — kemasan ramah lingkungan, bahan yang bertanggung jawab, dan pemberdayaan komunitas untuk masa depan yang lebih hijau.",
};

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ttg9YhXxNx-mN7Uz2PZGLQ3gzhKB9rpDcK0GF6vSTXCDxeMQs0q0pgiT0mYRma8kWgE9WT65gvkdmi59ru9g0Zto2Zaxi7i4kiS1AIq2R6_OCAJocUHZH89gZJyL4etuBPNiAGQbWqPm5IevQnl5ANOse-f4kflCGr3DoLEQDH1aHcCaEgA9Ze9usqAU6FeOpFddXf9Bw-LInqUmwyQgU0qOtj-pqw5LOQl5CUl7nojhiQ5y9pL4gL6vYc6JST7vTPSGWO_fJ2I";

const pillars = [
  {
    icon: Recycle,
    title: "Kemasan Berkelanjutan",
    desc: "Kami beralih ke kemasan yang dapat didaur ulang dan mengurangi penggunaan plastik sekali pakai di seluruh lini produk.",
  },
  {
    icon: Sprout,
    title: "Bahan yang Bertanggung Jawab",
    desc: "Setiap bahan bersumber secara etis, halal, dan mengutamakan ekstrak botani yang dipanen secara berkelanjutan.",
  },
  {
    icon: Users,
    title: "Pemberdayaan Komunitas",
    desc: "Kami berinvestasi pada petani lokal dan program edukasi untuk menciptakan dampak sosial yang nyata dan berkelanjutan.",
  },
];

const metrics = [
  {
    icon: Recycle,
    stat: "80%",
    label: "Kemasan dapat didaur ulang",
  },
  {
    icon: Leaf,
    stat: "100%",
    label: "Bahan tersertifikasi halal",
  },
  {
    icon: TreePine,
    stat: "10.000+",
    label: "Pohon yang telah ditanam",
  },
  {
    icon: Droplets,
    stat: "30%",
    label: "Pengurangan jejak air produksi",
  },
];

const certifications = [
  {
    icon: BadgeCheck,
    title: "Halal MUI",
    desc: "Bahan bersumber etis dan tersertifikasi halal oleh Majelis Ulama Indonesia.",
  },
  {
    icon: ShieldCheck,
    title: "Cruelty-Free",
    desc: "Tidak diuji pada hewan di setiap tahap pengembangan produk.",
  },
  {
    icon: Award,
    title: "Clean Beauty",
    desc: "Bebas dari bahan berbahaya sesuai standar clean beauty global.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Commitment Statement Hero */}
      <header className="relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt="Hutan cedar berkabut saat fajar, melambangkan komitmen terhadap alam"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-surface-container-high text-primary mb-md">
              <Leaf size={16} />
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider">
                Sustainability
              </span>
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface mb-md">
              Merawat Kulit, Merawat Bumi
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant max-w-lg">
              Bagi KAHF, keberlanjutan bukan sekadar slogan. Kami berkomitmen
              menghadirkan perawatan kulit yang baik untuk kulitmu, baik untuk
              komunitas, dan baik untuk planet yang kita tinggali bersama.
            </p>
          </div>
        </div>
      </header>

      {/* Pillars of Sustainability */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <SectionHeading
          center
          eyebrow="Our Pillars"
          title="Tiga Pilar Keberlanjutan"
          subtitle="Setiap langkah kami berlandaskan pada tiga prinsip yang saling menguatkan."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-lg">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-surface-container-lowest rounded-xl card-shadow p-lg text-center"
              >
                <div className="w-14 h-14 rounded-full bg-light-sage text-primary flex items-center justify-center mx-auto mb-sm">
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs">
                  {p.title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Progress & Metrics */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            center
            eyebrow="Progress & Metrics"
            title="Dampak yang Terukur"
            subtitle="Kami percaya pada transparansi. Berikut capaian keberlanjutan kami hingga saat ini."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mt-lg">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="bg-surface-container-lowest rounded-xl card-shadow p-lg text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-light-sage text-primary flex items-center justify-center mx-auto mb-sm">
                    <Icon size={24} />
                  </div>
                  <p className="font-display text-display-lg-mobile font-extrabold text-primary mb-xs">
                    {m.stat}
                  </p>
                  <p className="font-sans text-body-sm text-on-surface-variant">
                    {m.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <SectionHeading
          center
          eyebrow="Sertifikasi"
          title="Standar yang Kami Pegang"
          subtitle="Komitmen keberlanjutan kami dibuktikan dengan sertifikasi dan standar yang diakui."
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
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="bg-primary rounded-2xl p-lg md:p-xl text-center">
          <h2 className="font-display text-display-lg-mobile font-extrabold text-on-primary mb-sm">
            Pilih Perawatan yang Bertanggung Jawab
          </h2>
          <p className="font-sans text-body-lg text-on-primary-container max-w-xl mx-auto mb-lg">
            Setiap produk KAHF yang kamu pilih adalah langkah kecil menuju masa
            depan yang lebih hijau. Mulai perjalananmu bersama kami.
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
