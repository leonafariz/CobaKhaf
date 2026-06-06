import { create } from "zustand";
import type { AnalysisResult } from "@/lib/types";

interface AnalysisState {
  result: AnalysisResult | null;
  imageDataUrl: string | null;
  status: "idle" | "scanning" | "done" | "error";
  error: string | null;
  setImage: (dataUrl: string) => void;
  setStatus: (status: AnalysisState["status"]) => void;
  setResult: (result: AnalysisResult) => void;
  setError: (error: string) => void;
  reset: () => void;
}

export const useAnalysisStore = create<AnalysisState>((set) => ({
  result: null,
  imageDataUrl: null,
  status: "idle",
  error: null,
  setImage: (imageDataUrl) => set({ imageDataUrl }),
  setStatus: (status) => set({ status }),
  setResult: (result) => set({ result, status: "done" }),
  setError: (error) => set({ error, status: "error" }),
  reset: () => set({ result: null, imageDataUrl: null, status: "idle", error: null }),
}));
