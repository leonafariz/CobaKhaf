import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketentuan Layanan",
  description:
    "Ketentuan Layanan KAHF: aturan penggunaan website, akun, fitur AI Face Analysis, kekayaan intelektual, tautan pihak ketiga, dan batasan tanggung jawab.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
      <header className="mb-lg">
        <span className="inline-block font-accent text-label-caps font-bold uppercase tracking-wider text-primary mb-xs">
          Legal
        </span>
        <h1 className="font-display text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface mb-sm">
          Ketentuan Layanan
        </h1>
        <p className="font-sans text-body-md text-outline">
          Terakhir diperbarui: Juni 2026
        </p>
      </header>

      <div className="space-y-lg">
        <section>
          <p className="font-sans text-body-md text-on-surface-variant">
            Selamat datang di KAHF. Ketentuan Layanan ini mengatur penggunaan
            situs web, fitur AI Face Analysis, dan layanan lain yang kami sediakan.
            Dengan mengakses atau menggunakan layanan kami, Anda menyetujui untuk
            terikat oleh ketentuan di bawah ini. Mohon baca dengan saksama.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            1. Penggunaan Website
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Anda setuju untuk menggunakan situs web KAHF hanya untuk tujuan yang
            sah dan tidak melanggar hukum yang berlaku. Anda dilarang
            menyalahgunakan layanan, mengganggu keamanan situs, atau melakukan
            tindakan yang dapat merugikan KAHF maupun pengguna lain. Kami berhak
            membatasi atau menghentikan akses Anda apabila terjadi pelanggaran.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            2. Akun Pengguna
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Apabila Anda membuat akun, Anda bertanggung jawab menjaga kerahasiaan
            kredensial Anda dan atas seluruh aktivitas yang terjadi pada akun
            tersebut. Anda wajib memberikan informasi yang akurat dan
            memperbaruinya bila diperlukan. Segera beri tahu kami jika ada
            penggunaan akun yang tidak sah.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            3. Fitur AI Face Analysis
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant mb-sm">
            Fitur AI Face Analysis kami memberikan analisis kondisi kulit dan
            rekomendasi produk berbasis kecerdasan buatan. Harap perhatikan hal
            berikut:
          </p>
          <ul className="list-disc pl-6 space-y-xs font-sans text-body-md text-on-surface-variant">
            <li>
              Hasil analisis AI bersifat <strong>rekomendasi umum</strong> dan{" "}
              <strong>BUKAN diagnosis medis</strong>.
            </li>
            <li>
              Hasil tidak menggantikan konsultasi dengan dokter atau dermatolog
              profesional.
            </li>
            <li>
              Untuk masalah kulit yang serius atau berkelanjutan, kami sarankan
              Anda berkonsultasi dengan tenaga medis.
            </li>
            <li>
              KAHF tidak bertanggung jawab atas keputusan yang Anda ambil
              semata-mata berdasarkan hasil analisis AI.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            4. Kekayaan Intelektual
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Seluruh konten pada situs ini — termasuk teks, logo, merek, desain,
            gambar, dan kode — merupakan milik KAHF atau pemberi lisensinya dan
            dilindungi oleh hukum kekayaan intelektual. Anda tidak diperkenankan
            menyalin, mereproduksi, atau mendistribusikan konten tanpa izin
            tertulis dari kami.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            5. Tautan ke Pihak Ketiga
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Situs kami memuat tautan ke platform pihak ketiga seperti Shopee,
            Tokopedia, dan Lazada untuk memudahkan pembelian produk. KAHF tidak
            mengontrol dan tidak bertanggung jawab atas konten, kebijakan privasi,
            maupun praktik dari situs pihak ketiga tersebut. Penggunaan platform
            tersebut tunduk pada ketentuan masing-masing penyedia.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            6. Batasan Tanggung Jawab
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Layanan disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan
            dalam bentuk apa pun. Sejauh diizinkan oleh hukum, KAHF tidak
            bertanggung jawab atas kerugian langsung, tidak langsung, insidental,
            maupun konsekuensial yang timbul dari penggunaan atau ketidakmampuan
            menggunakan layanan kami.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            7. Perubahan Ketentuan
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Kami dapat memperbarui Ketentuan Layanan ini dari waktu ke waktu.
            Perubahan akan berlaku sejak dipublikasikan di halaman ini. Dengan
            terus menggunakan layanan setelah perubahan, Anda dianggap menyetujui
            ketentuan yang telah diperbarui.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            8. Hukum yang Berlaku
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Ketentuan Layanan ini diatur dan ditafsirkan berdasarkan hukum
            Republik Indonesia. Segala sengketa yang timbul akan diselesaikan
            sesuai dengan yurisdiksi pengadilan yang berlaku di Indonesia.
          </p>
        </section>

        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-sm">
            9. Kontak
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Jika Anda memiliki pertanyaan mengenai Ketentuan Layanan ini, silakan
            hubungi kami di{" "}
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
