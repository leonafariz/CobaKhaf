"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/types";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const categories = Array.from(new Set(items.map((f) => f.category)));

  return (
    <div className="space-y-xl">
      {categories.map((category) => {
        const categoryItems = items.filter((f) => f.category === category);
        return (
          <div key={category}>
            <h2 className="font-display text-headline-sm font-bold text-primary mb-md">
              {category}
            </h2>
            <div className="space-y-sm">
              {categoryItems.map((item) => {
                const key = `${category}-${item.question}`;
                const isOpen = openKey === key;
                return (
                  <div
                    key={key}
                    className="bg-surface-container-lowest rounded-xl card-shadow border border-outline-variant/30 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-md p-md text-left"
                    >
                      <span className="font-display text-body-lg font-bold text-on-surface">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={22}
                        className={`shrink-0 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-md pb-md font-sans text-body-md text-on-surface-variant">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
