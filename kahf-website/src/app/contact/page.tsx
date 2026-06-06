import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Punya pertanyaan tentang produk KAHF atau AI Face Analysis? Hubungi tim kami melalui email, WhatsApp, atau formulir kontak.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kahfeveryday.com",
    href: "mailto:hello@kahfeveryday.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 811-1000-KAHF",
    href: "https://wa.me/6281110005243",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jakarta, Indonesia",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      {/* Hero */}
      <SectionHeading
        eyebrow="Hubungi Kami"
        title="Kami Senang Mendengar Darimu"
        subtitle="Ada pertanyaan, masukan, atau butuh bantuan? Tim KAHF siap membantu."
      />

      {/* Contact information cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-lg">
        {contactInfo.map((info) => {
          const Icon = info.icon;
          const inner = (
            <>
              <div className="w-12 h-12 rounded-full bg-light-sage text-primary flex items-center justify-center mb-sm">
                <Icon size={22} />
              </div>
              <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-outline mb-1">
                {info.label}
              </span>
              <span className="font-sans text-body-lg font-semibold text-on-surface">
                {info.value}
              </span>
            </>
          );
          return info.href ? (
            <a
              key={info.label}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-lowest rounded-xl card-shadow p-lg flex flex-col hover:opacity-90 transition-opacity"
            >
              {inner}
            </a>
          ) : (
            <div
              key={info.label}
              className="bg-surface-container-lowest rounded-xl card-shadow p-lg flex flex-col"
            >
              {inner}
            </div>
          );
        })}
      </section>

      {/* Contact form */}
      <section className="mt-xl">
        <ContactForm />
      </section>
    </div>
  );
}
