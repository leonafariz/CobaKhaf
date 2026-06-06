import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "./FaqAccordion";
import { getFaqItems } from "@/lib/dal";

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan yang Sering Diajukan",
  description:
    "Temukan jawaban atas pertanyaan umum seputar produk KAHF, AI Face Analysis, pembelian, dan pengiriman.",
};

export default async function FaqPage() {
  const items = await getFaqItems();
  return (
    <div className="max-w-3xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      <SectionHeading
        center
        eyebrow="FAQ"
        title="Ada yang bisa kami bantu?"
        subtitle="Temukan jawaban atas pertanyaan yang paling sering diajukan seputar produk dan layanan KAHF."
      />
      <div className="mt-xl">
        <FaqAccordion items={items} />
      </div>
    </div>
  );
}
