import type { Metadata } from "next";
import ShareResults from "./ShareResults";

export const metadata: Metadata = {
  title: "Bagikan Hasil Analisis",
  description:
    "Bagikan hasil AI Skin Analysis KAHF kamu dalam format kartu Instagram Story yang estetis — simpan ke galeri atau kirim lewat WhatsApp.",
};

export default function ShareResultsPage() {
  return <ShareResults />;
}
