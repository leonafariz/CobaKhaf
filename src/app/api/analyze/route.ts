import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { AnalysisResult } from "@/lib/types";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Anda adalah konsultan kulit ahli untuk brand skincare pria KAHF. Analisis gambar wajah yang diberikan dan kembalikan HANYA objek JSON valid (tanpa markdown, tanpa teks tambahan) dengan struktur persis berikut:

{
  "skin_type": "normal" | "oily" | "dry" | "combination" | "sensitive",
  "acne_severity": "none" | "mild" | "moderate" | "severe",
  "acne_locations": ["dahi", "hidung", "pipi kiri", ...],
  "skin_concerns": ["kusam", "pori-pori besar", "minyak berlebih", ...],
  "overall_score": <integer 0-100>,
  "skin_health_summary": "<2-3 kalimat ringkasan kondisi kulit dalam Bahasa Indonesia>",
  "morning_routine": ["langkah 1", "langkah 2", ...],
  "night_routine": ["langkah 1", "langkah 2", ...],
  "recommended_product_categories": ["face_wash", "moisturizer", "sunscreen", "serum", "toner"],
  "area_breakdown": { "forehead": "<kondisi>", "nose": "<kondisi>", "cheeks": "<kondisi>", "chin": "<kondisi>" }
}

Gunakan Bahasa Indonesia untuk semua nilai teks deskriptif. Pastikan recommended_product_categories hanya berisi kategori yang valid: face_wash, moisturizer, serum, sunscreen, toner.`;

/** Deterministic fallback so the feature degrades gracefully without an API key. */
function fallbackResult(): AnalysisResult {
  return {
    skin_type: "combination",
    acne_severity: "mild",
    acne_locations: ["dahi", "hidung"],
    skin_concerns: ["minyak berlebih", "pori-pori besar"],
    overall_score: 78,
    skin_health_summary:
      "Kulit Anda cenderung kombinasi dengan area T-zone yang lebih berminyak. Terdapat tanda jerawat ringan di area dahi dan hidung. Secara keseluruhan kulit Anda dalam kondisi cukup sehat.",
    morning_routine: [
      "Bersihkan wajah dengan Oil Control Face Wash",
      "Aplikasikan pelembap ringan",
      "Lindungi dengan sunscreen SPF 35",
    ],
    night_routine: [
      "Bersihkan wajah dari kotoran & minyak",
      "Gunakan serum perawatan",
      "Aplikasikan pelembap malam",
    ],
    recommended_product_categories: ["face_wash", "moisturizer", "sunscreen"],
    area_breakdown: {
      forehead: "Berminyak dengan jerawat ringan",
      nose: "Pori-pori membesar, berminyak",
      cheeks: "Normal cenderung kering",
      chin: "Normal",
    },
  };
}

export async function POST(req: NextRequest) {
  let image: string | undefined;
  try {
    const body = await req.json();
    image = body.image;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!image || typeof image !== "string") {
    return NextResponse.json({ error: "Missing image data" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // No key configured → return a graceful demo result instead of failing.
  if (!apiKey) {
    return NextResponse.json({ result: fallbackResult(), demo: true });
  }

  try {
    const base64 = image.replace(/^data:image\/\w+;base64,/, "");
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const response = await model.generateContent([
      SYSTEM_PROMPT,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64,
        },
      },
    ]);

    const text = response.response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON in response");

    const result = JSON.parse(jsonMatch[0]) as AnalysisResult;
    return NextResponse.json({ result });
  } catch (err) {
    console.error("Gemini analysis failed:", err);
    // Graceful fallback keeps the UX intact even on API errors.
    return NextResponse.json({ result: fallbackResult(), demo: true });
  }
}
