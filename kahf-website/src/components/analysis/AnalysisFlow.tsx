"use client";

import { useCallback, useRef, useState } from "react";
import { Camera, Upload, ShieldCheck, X, AlertCircle } from "lucide-react";
import { useAnalysisStore } from "@/store/analysis";
import ScanningOverlay from "./ScanningOverlay";
import ResultView from "./ResultView";

type Mode = "select" | "camera" | "preview";

export default function AnalysisFlow() {
  const {
    status,
    result,
    imageDataUrl,
    setImage,
    setStatus,
    setResult,
    setError,
    error,
    reset,
  } = useAnalysisStore();

  const [mode, setMode] = useState<Mode>("select");
  const [consent, setConsent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingResult = useRef<AnalysisResultRef>(null);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      streamRef.current = stream;
      setMode("camera");
      // Wait for the video element to mount.
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {});
        }
      });
    } catch {
      setError(
        "Tidak dapat mengakses kamera. Silakan gunakan opsi unggah foto.",
      );
    }
  }, [setError]);

  const captureFrame = useCallback(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    setImage(dataUrl);
    stopCamera();
    setMode("preview");
  }, [setImage, stopCamera]);

  const onFileSelected = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setMode("preview");
      };
      reader.readAsDataURL(file);
    },
    [setImage],
  );

  const runAnalysis = useCallback(async () => {
    if (!imageDataUrl) return;
    setStatus("scanning");
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageDataUrl }),
      });
      if (!res.ok) throw new Error("Analysis failed");
      const data = await res.json();
      // Hold the result; the overlay's onComplete will flip status to "done".
      pendingResult.current = data.result;
    } catch {
      setError("Analisis gagal. Silakan coba lagi.");
    }
  }, [imageDataUrl, setStatus, setError]);

  const onScanComplete = useCallback(() => {
    if (pendingResult.current) {
      setResult(pendingResult.current);
      pendingResult.current = null;
    } else {
      // Network slower than the animation — poll briefly.
      const check = setInterval(() => {
        if (pendingResult.current) {
          clearInterval(check);
          setResult(pendingResult.current);
          pendingResult.current = null;
        }
      }, 200);
      setTimeout(() => clearInterval(check), 5000);
    }
  }, [setResult]);

  const fullReset = useCallback(() => {
    stopCamera();
    pendingResult.current = null;
    setMode("select");
    setConsent(false);
    reset();
  }, [reset, stopCamera]);

  // ---- Render states ----

  if (status === "done" && result) {
    return (
      <ResultView result={result} imageUrl={imageDataUrl} onReset={fullReset} />
    );
  }

  if (status === "scanning" && imageDataUrl) {
    return <ScanningOverlay imageUrl={imageDataUrl} onComplete={onScanComplete} />;
  }

  return (
    <div className="space-y-lg">
      {error && (
        <div className="max-w-2xl mx-auto flex items-center gap-sm bg-error-container text-on-error-container rounded-md p-md">
          <AlertCircle size={20} />
          <span className="font-sans text-body-sm">{error}</span>
        </div>
      )}

      {/* Consent */}
      <div className="max-w-2xl mx-auto bg-surface-container-lowest rounded-xl card-shadow border border-light-sage p-md flex items-start gap-sm">
        <input
          id="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 w-5 h-5 accent-[#0f5238]"
        />
        <label htmlFor="consent" className="font-sans text-body-sm text-on-surface-variant">
          <span className="inline-flex items-center gap-1 font-semibold text-primary">
            <ShieldCheck size={16} /> Persetujuan Privasi
          </span>
          <br />
          Saya setuju gambar wajah saya diproses untuk analisis kulit. Foto{" "}
          <strong>tidak disimpan</strong> dan langsung dihapus setelah analisis
          selesai.
        </label>
      </div>

      {mode === "select" && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-4xl mx-auto">
          <button
            disabled={!consent}
            onClick={startCamera}
            className="bg-surface-container-lowest border border-light-sage rounded-xl p-xl flex flex-col items-center justify-center hover:border-primary hover:shadow-card transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Camera size={40} className="text-electric-blue mb-sm group-hover:scale-110 transition-transform" />
            <span className="font-display text-headline-sm font-bold text-primary mb-2">
              Gunakan Kamera
            </span>
            <span className="font-sans text-body-sm text-on-surface-variant">
              Pindai wajah secara langsung
            </span>
          </button>
          <button
            disabled={!consent}
            onClick={() => fileInputRef.current?.click()}
            className="bg-surface-container-lowest border border-light-sage rounded-xl p-xl flex flex-col items-center justify-center hover:border-primary hover:shadow-card transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Upload size={40} className="text-primary mb-sm group-hover:scale-110 transition-transform" />
            <span className="font-display text-headline-sm font-bold text-primary mb-2">
              Unggah Foto
            </span>
            <span className="font-sans text-body-sm text-on-surface-variant">
              Pilih foto dari galeri Anda
            </span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onFileSelected}
            className="hidden"
          />
        </section>
      )}

      {mode === "camera" && (
        <section className="max-w-2xl mx-auto bg-surface-container-lowest rounded-xl card-shadow overflow-hidden border border-light-sage">
          <div className="relative h-[420px] bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
            />
            <button
              onClick={() => {
                stopCamera();
                setMode("select");
              }}
              className="absolute top-sm right-sm bg-surface/90 text-on-surface rounded-full p-2 hover:bg-surface transition-colors"
              aria-label="Tutup kamera"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-md flex justify-center">
            <button
              onClick={captureFrame}
              className="px-lg py-sm rounded-md bg-primary text-on-primary font-semibold hover:opacity-90 transition-opacity flex items-center gap-xs"
            >
              <Camera size={20} /> Ambil Foto
            </button>
          </div>
        </section>
      )}

      {mode === "preview" && imageDataUrl && (
        <section className="max-w-2xl mx-auto bg-surface-container-lowest rounded-xl card-shadow overflow-hidden border border-light-sage">
          <div className="h-[420px] bg-surface-variant">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageDataUrl}
              alt="Preview foto wajah"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-md flex flex-col sm:flex-row gap-sm justify-center">
            <button
              onClick={runAnalysis}
              className="px-lg py-sm rounded-md bg-primary text-on-primary font-semibold hover:opacity-90 transition-opacity"
            >
              Mulai Analisis AI
            </button>
            <button
              onClick={() => {
                setMode("select");
              }}
              className="px-lg py-sm rounded-md border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
            >
              Ganti Foto
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

// Local alias to avoid importing the type purely for a ref.
type AnalysisResultRef = import("@/lib/types").AnalysisResult;
