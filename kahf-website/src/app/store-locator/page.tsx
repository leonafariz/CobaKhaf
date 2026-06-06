import type { Metadata } from "next";
import { MapPin, ExternalLink, Store, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { storeLocations, onlineStores } from "@/data/content";

export const metadata: Metadata = {
  title: "Store Locator",
  description:
    "Temukan toko resmi dan mitra retail KAHF terdekat, atau belanja produk KAHF secara online melalui Shopee, Tokopedia, dan Lazada.",
};

const TYPE_LABEL: Record<string, string> = {
  official_store: "Toko Resmi",
  retail_partner: "Mitra Retail",
  online_only: "Online",
};

export default function StoreLocatorPage() {
  return (
    <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      {/* Hero */}
      <SectionHeading
        eyebrow="Store Locator"
        title="Temukan KAHF Terdekat"
        subtitle="Kunjungi toko resmi dan mitra retail kami, atau belanja praktis lewat e-commerce favoritmu."
      />

      {/* Two-column: map + store list */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mt-lg">
        {/* LEFT: map placeholder */}
        <div className="bg-surface-container rounded-xl min-h-[400px] lg:min-h-full flex flex-col items-center justify-center text-center p-lg">
          <div className="w-16 h-16 rounded-full bg-light-sage text-primary flex items-center justify-center mb-sm">
            <MapPin size={32} />
          </div>
          <h3 className="font-display text-headline-sm font-bold text-on-surface mb-xs">
            Peta Interaktif
          </h3>
          <p className="font-sans text-body-md text-on-surface-variant max-w-xs">
            Pilih lokasi toko dari daftar di samping untuk membukanya langsung di
            Google Maps.
          </p>
        </div>

        {/* RIGHT: scrollable store list */}
        <div className="lg:max-h-[600px] lg:overflow-y-auto pr-0 lg:pr-2 space-y-sm">
          {storeLocations.map((store) => {
            const isOfficial = store.type === "official_store";
            return (
              <div
                key={store.id}
                className="bg-surface-container-lowest rounded-xl card-shadow p-md"
              >
                <div className="flex items-start justify-between gap-sm mb-xs">
                  <h3 className="font-display text-headline-sm font-bold text-on-surface">
                    {store.name}
                  </h3>
                  <span
                    className={`shrink-0 inline-flex items-center gap-1 px-sm py-1 rounded-full font-accent text-label-caps font-bold uppercase tracking-wider ${
                      isOfficial
                        ? "bg-light-sage text-primary"
                        : "bg-surface-variant text-on-surface-variant"
                    }`}
                  >
                    {isOfficial ? <Store size={12} /> : <Building2 size={12} />}
                    {TYPE_LABEL[store.type]}
                  </span>
                </div>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {store.address}
                </p>
                <p className="font-sans text-body-sm text-outline mb-sm">
                  {store.city}, {store.province}
                </p>
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-xs text-primary font-semibold text-body-sm hover:opacity-80 transition-opacity"
                >
                  <MapPin size={16} /> Lihat di Peta
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Online stores */}
      <section className="mt-xl">
        <SectionHeading
          eyebrow="Belanja Online"
          title="Tersedia di Marketplace Favoritmu"
          subtitle="Belanja produk KAHF resmi dengan jaminan keaslian dan promo menarik."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mt-lg">
          {onlineStores.map((store) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-lowest rounded-xl card-shadow p-lg flex flex-col items-center justify-center text-center gap-sm border-2 hover:opacity-90 transition-opacity"
              style={{ borderColor: store.color }}
            >
              <span
                className="font-display text-headline-sm font-bold"
                style={{ color: store.color }}
              >
                {store.name}
              </span>
              <span
                className="inline-flex items-center gap-xs font-sans text-body-sm font-semibold"
                style={{ color: store.color }}
              >
                Kunjungi Toko <ExternalLink size={16} />
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
