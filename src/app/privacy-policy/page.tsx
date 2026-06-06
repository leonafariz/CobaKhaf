import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi KAHF: bagaimana kami menangani data kamera, gambar wajah, data analitik, dan cookies. Privasi Anda adalah prioritas kami.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      <header className="mb-lg">
        <span className="inline-block font-accent text-label-caps font-bold uppercase tracking-wider text-primary mb-xs">
          Legal
        </span>
        <h1 className="font-display text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface mb-sm">
          Kebijakan Privasi
        </h1>
        <p className="font-sans text-body-md text-outline">
          Terakhir diperbarui: Juni 2026
        </p>
      </header>

      <div className="space-y-lg">
        <section>
          <p className="font-sans text-body-md text-on-surface-variant">
            KAHF berkomitmen melindungi privasi Anda. Kebijakan Privasi ini
            menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
            informasi Anda saat menggunakan situs web dan fitur AI Face Analysis
            kami. Dengan menggunakan layanan kami, Anda menyetujui praktik yang
            dijelaskan di bawah ini.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            1. Data Kamera &amp; Gambar Wajah
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant mb-sm">
            Fitur AI Face Analysis membutuhkan akses ke kamera atau foto yang
            Anda unggah. Privasi gambar wajah Anda adalah prioritas utama kami:
          </p>
          <ul className="list-disc pl-6 space-y-xs font-sans text-body-md text-on-surface-variant">
            <li>
              Kami <strong>meminta persetujuan (consent)</strong> Anda terlebih
              dahulu sebelum kamera diaktifkan.
            </li>
            <li>
              Gambar wajah Anda <strong>TIDAK kami simpan</strong>. Gambar hanya
              diproses sesaat untuk menghasilkan analisis kulit.
            </li>
            <li>
              Setelah analisis selesai, gambar <strong>langsung dihapus</strong>{" "}
              dan tidak disimpan di server kami.
            </li>
            <li>
              Kami tidak pernah membagikan, menjual, atau menggunakan gambar
              wajah Anda untuk tujuan lain.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            2. Data Analitik Agregat
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Kami mengumpulkan data analitik agregat dan anonim — seperti jumlah
            kunjungan halaman, jenis perangkat, dan interaksi umum — untuk
            memahami cara pengguna menggunakan situs kami dan meningkatkan
            layanan. Data ini tidak dapat digunakan untuk mengidentifikasi Anda
            secara pribadi.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            3. Cookies
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Situs kami menggunakan cookies untuk menjaga preferensi Anda,
            menganalisis lalu lintas, dan meningkatkan pengalaman pengguna. Anda
            dapat menonaktifkan cookies melalui pengaturan browser Anda, namun
            beberapa fitur mungkin tidak berfungsi optimal.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            4. Hak Pengguna
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant mb-sm">
            Anda memiliki hak atas data pribadi Anda, termasuk:
          </p>
          <ul className="list-disc pl-6 space-y-xs font-sans text-body-md text-on-surface-variant">
            <li>Hak untuk mengakses informasi yang kami simpan tentang Anda.</li>
            <li>Hak untuk meminta koreksi data yang tidak akurat.</li>
            <li>Hak untuk meminta penghapusan data Anda.</li>
            <li>Hak untuk menarik persetujuan kapan saja.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            5. Kontak
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau
            ingin menggunakan hak Anda, silakan hubungi kami di{" "}
            <a
              href="mailto:hello@kahfeveryday.com"
              className="text-primary font-semibold hover:opacity-80 transition-opacity"
            >
              hello@kahfeveryday.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
