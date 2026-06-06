import type { Metadata } from "next";
import { Camera, Cpu, Sparkles } from "lucide-react";
import AnalysisFlow from "@/components/analysis/AnalysisFlow";

export const metadata: Metadata = {
  title: "AI Face Analysis",
  description:
    "Analisis kulit wajah berteknologi AI untuk rutinitas perawatan pria yang tepat. Dapatkan rekomendasi produk KAHF yang dipersonalisasi.",
};

const steps = [
  {
    icon: Camera,
    title: "Ambil Foto",
    desc: "Gunakan kamera atau unggah foto wajah tanpa makeup.",
  },
  {
    icon: Cpu,
    title: "AI Menganalisis",
    desc: "Sistem membaca tekstur, minyak, dan kondisi kulit.",
  },
  {
    icon: Sparkles,
    title: "Dapatkan Solusi",
    desc: "Rekomendasi produk KAHF yang diformulasikan khusus.",
  },
];

export default function AiAnalysisPage() {
  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl space-y-xl">
      <section className="text-center max-w-3xl mx-auto space-y-md">
        <h1 className="font-display text-display-lg-mobile md:text-display-lg font-extrabold text-primary tracking-tight">
          Pahami Kulitmu dalam 5 Detik
        </h1>
        <p className="font-sans text-body-lg text-on-surface-variant">
          Analisis kulit wajah berteknologi AI untuk rutinitas perawatan pria
          yang tepat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sm mt-lg">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-surface-container-lowest p-md rounded-xl card-shadow text-center"
              >
                <div className="w-12 h-12 rounded-full bg-light-sage text-primary flex items-center justify-center mx-auto mb-xs">
                  <Icon size={22} />
                </div>
                <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-outline">
                  Langkah {i + 1}
                </span>
                <h3 className="font-display text-headline-sm font-bold text-primary mb-1">
                  {step.title}
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <AnalysisFlow />
    </div>
  );
}
