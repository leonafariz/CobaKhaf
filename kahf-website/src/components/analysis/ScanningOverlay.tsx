"use client";

import { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

const STAGES = [
  "Mendeteksi tekstur kulit...",
  "Mengidentifikasi area sensitif...",
  "Menganalisis tingkat minyak...",
  "Mendeteksi area jerawat...",
  "Menyusun rekomendasi produk...",
];

export default function ScanningOverlay({
  imageUrl,
  onComplete,
}: {
  imageUrl: string;
  onComplete: () => void;
}) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const stageTimer = setInterval(() => {
      setStage((s) => Math.min(s + 1, STAGES.length - 1));
    }, 1000);
    const done = setTimeout(onComplete, 5200);
    return () => {
      clearInterval(stageTimer);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <div className="max-w-2xl mx-auto bg-surface-container-lowest rounded-xl card-shadow overflow-hidden border border-light-sage relative">
      <div className="h-[420px] w-full bg-surface-variant relative overflow-hidden flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="Wajah sedang dianalisis"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        {/* Scan frame */}
        <div className="absolute inset-0 border-2 border-electric-blue/30 rounded-lg m-md pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="scan-line" />
        </div>
        {/* Corner brackets */}
        <div className="absolute top-md left-md w-8 h-8 border-t-2 border-l-2 border-electric-blue" />
        <div className="absolute top-md right-md w-8 h-8 border-t-2 border-r-2 border-electric-blue" />
        <div className="absolute bottom-md left-md w-8 h-8 border-b-2 border-l-2 border-electric-blue" />
        <div className="absolute bottom-md right-md w-8 h-8 border-b-2 border-r-2 border-electric-blue" />
        {/* Detection dots */}
        <span className="absolute top-[30%] left-[40%] w-3 h-3 rounded-full bg-error/70 animate-ping" />
        <span className="absolute top-[35%] left-[55%] w-2 h-2 rounded-full bg-error/60 animate-ping [animation-delay:300ms]" />
        <span className="absolute top-[50%] left-[48%] w-2 h-2 rounded-full bg-[#F59E0B]/70 animate-ping [animation-delay:600ms]" />
        {/* Status pill */}
        <div className="absolute bottom-md left-1/2 -translate-x-1/2 bg-surface-container-lowest/90 backdrop-blur-sm py-2 px-4 rounded-full border border-electric-blue/20 shadow-sm flex items-center gap-2">
          <Cpu size={16} className="text-electric-blue animate-pulse" />
          <span className="font-sans text-body-sm text-primary font-medium">
            {STAGES[stage]}
          </span>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1.5 w-full bg-surface-container">
        <div
          className="h-full bg-electric-blue transition-all duration-1000 ease-linear"
          style={{ width: `${((stage + 1) / STAGES.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
