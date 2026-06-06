"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  ScanFace,
  Sparkles,
  CheckCircle2,
  Download,
  MessageCircle,
  QrCode,
  Camera,
} from "lucide-react";

const REGIMEN = [
  "Oil Control & Acne Care Face Wash",
  "Triple Protection Sunscreen SPF 35",
];

export default function ShareResults() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const shareText =
    "Aku baru saja cek kondisi kulitku pakai AI Skin Analysis dari KAHF! Skin Health Score-ku 85/100. Coba juga di kahfeveryday.com/ai";

  async function handleSave() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "kahf-skin-analysis.png";
      link.click();
    } catch (err) {
      console.error("Gagal menyimpan kartu:", err);
    } finally {
      setDownloading(false);
    }
  }

  function handleWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleInstagram() {
    // Instagram tidak mendukung pembagian langsung dari web,
    // jadi kami simpan kartu agar bisa diunggah ke Story secara manual.
    handleSave();
  }

  return (
    <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
        {/* LEFT: shareable Instagram-story card */}
        <div className="flex justify-center">
          <div
            ref={cardRef}
            className="w-[360px] sm:w-[400px] rounded-2xl overflow-hidden bg-primary text-on-primary flex flex-col"
            style={{ aspectRatio: "9 / 16" }}
          >
            {/* Header */}
            <div className="px-6 pt-7 pb-4 flex items-center justify-between">
              <span className="font-display text-headline-md font-extrabold tracking-tight text-on-primary">
                KAHF
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-on-primary/15 font-accent text-label-caps font-bold uppercase tracking-wider text-electric-blue">
                <Sparkles size={12} /> AI Skin Analysis
              </span>
            </div>

            {/* Photo placeholder */}
            <div className="flex flex-col items-center px-6 mt-2">
              <div className="w-32 h-32 rounded-full bg-on-primary/10 border-4 border-on-primary/20 electric-glow flex items-center justify-center">
                <ScanFace size={56} className="text-electric-blue" />
              </div>
            </div>

            {/* Score + skin type */}
            <div className="px-6 mt-5 text-center">
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-on-primary/70">
                Skin Health Score
              </span>
              <div className="font-display text-display-lg font-extrabold leading-none mt-1 text-on-primary">
                85
                <span className="text-body-md text-on-primary/70">/100</span>
              </div>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-on-primary/15 font-accent text-label-caps font-bold uppercase tracking-wider text-electric-blue">
                Tipe Kulit: Berminyak / Oily
              </span>
            </div>

            {/* Regimen */}
            <div className="px-6 mt-6 flex-grow">
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-on-primary/70 block mb-2">
                Your Regimen
              </span>
              <ul className="space-y-2">
                {REGIMEN.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      size={18}
                      className="text-electric-blue shrink-0 mt-0.5"
                    />
                    <span className="font-sans text-body-sm text-on-primary-container">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="px-6 py-5 mt-4 border-t border-on-primary/15 flex items-center justify-between">
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-on-primary/80">
                kahfeveryday.com/ai
              </span>
              <div className="w-12 h-12 rounded-md bg-on-primary/15 flex items-center justify-center">
                <QrCode size={28} className="text-on-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: actions panel */}
        <div className="md:pt-4">
          <span className="inline-block font-accent text-label-caps font-bold uppercase tracking-wider text-primary mb-xs">
            Share
          </span>
          <h1 className="font-display text-display-lg-mobile md:text-[36px] md:leading-[44px] font-extrabold text-on-surface mb-sm">
            Share Your Results
          </h1>
          <p className="font-sans text-body-lg text-on-surface-variant mb-lg">
            Pamerkan hasil AI Skin Analysis kamu! Bagikan kartu ini ke Instagram
            Story, kirim ke teman lewat WhatsApp, atau simpan ke galeri
            perangkatmu.
          </p>

          <div className="space-y-sm">
            <button
              onClick={handleInstagram}
              className="w-full px-md py-sm rounded-md text-white font-semibold flex items-center justify-center gap-xs hover:opacity-90 transition-opacity"
              style={{
                background:
                  "linear-gradient(90deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)",
              }}
            >
              <Camera size={18} /> Share to Instagram Story
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full px-md py-sm rounded-md text-white font-semibold flex items-center justify-center gap-xs hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={18} /> Send via WhatsApp
            </button>

            <button
              onClick={handleSave}
              disabled={downloading}
              className="w-full px-md py-sm rounded-md border border-primary text-primary font-semibold flex items-center justify-center gap-xs hover:bg-primary/5 transition-colors disabled:opacity-60"
            >
              <Download size={18} />
              {downloading ? "Menyimpan..." : "Save to Camera Roll"}
            </button>
          </div>

          <p className="font-sans text-body-sm text-outline mt-md">
            Catatan: Instagram tidak mengizinkan unggahan langsung dari web,
            jadi kartu akan disimpan ke perangkatmu agar bisa diunggah ke Story.
          </p>
        </div>
      </div>
    </div>
  );
}
