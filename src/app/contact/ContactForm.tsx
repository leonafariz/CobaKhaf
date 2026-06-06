"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Send,
  Camera,
  Globe,
  Play,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const socials = [
  { icon: Camera, label: "Instagram", url: "https://instagram.com/kahfeveryday" },
  { icon: Globe, label: "Facebook", url: "https://facebook.com/kahfeveryday" },
  { icon: Play, label: "YouTube", url: "https://youtube.com/@kahfeveryday" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass =
    "bg-surface-container-lowest border border-surface-variant rounded-md px-3 py-3 focus:border-primary focus:outline-none w-full";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Form */}
      <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl card-shadow p-lg">
        <h2 className="font-display text-headline-md font-bold text-on-surface mb-md">
          Kirim Pesan
        </h2>

        {sent ? (
          <div className="bg-primary-container rounded-xl p-lg flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center mb-sm">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="font-display text-headline-sm font-bold text-on-primary-container mb-xs">
              Pesan Terkirim!
            </h3>
            <p className="font-sans text-body-md text-on-primary-container">
              Terima kasih, {name || "Sahabat KAHF"}. Tim kami akan segera
              menghubungi kamu melalui email yang kamu berikan.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
              }}
              className="mt-md px-md py-sm rounded-md border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
            >
              Kirim Pesan Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
              <div>
                <label
                  htmlFor="name"
                  className="block font-accent text-label-caps font-bold uppercase tracking-wider text-on-surface-variant mb-xs"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama lengkap"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-accent text-label-caps font-bold uppercase tracking-wider text-on-surface-variant mb-xs"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-accent text-label-caps font-bold uppercase tracking-wider text-on-surface-variant mb-xs"
              >
                Subjek
              </label>
              <input
                id="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Topik pesanmu"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-accent text-label-caps font-bold uppercase tracking-wider text-on-surface-variant mb-xs"
              >
                Pesan
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis pesanmu di sini..."
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="px-md py-sm rounded-md bg-primary text-on-primary font-semibold flex items-center justify-center gap-xs hover:opacity-90 transition-opacity"
            >
              <Send size={18} /> Kirim Pesan
            </button>
          </form>
        )}

        {/* Social media row */}
        <div className="mt-lg pt-md border-t border-outline-variant">
          <span className="font-accent text-label-caps font-bold uppercase tracking-wider text-outline mb-sm block">
            Ikuti Kami
          </span>
          <div className="flex gap-sm">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-surface-container text-primary flex items-center justify-center hover:bg-light-sage transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ shortcut */}
      <aside className="bg-primary-container rounded-xl p-lg flex flex-col">
        <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center mb-sm">
          <HelpCircle size={22} />
        </div>
        <h3 className="font-display text-headline-sm font-bold text-on-primary-container mb-xs">
          Sudah Cek FAQ?
        </h3>
        <p className="font-sans text-body-md text-on-primary-container mb-md flex-grow">
          Banyak pertanyaan umum seputar produk, AI Face Analysis, dan pembelian
          sudah kami jawab di halaman FAQ.
        </p>
        <Link
          href="/faq"
          className="inline-flex items-center gap-xs px-md py-sm rounded-md bg-surface-container-lowest text-primary font-bold hover:bg-surface transition-colors w-fit"
        >
          Lihat FAQ <ArrowRight size={18} />
        </Link>
      </aside>
    </div>
  );
}
