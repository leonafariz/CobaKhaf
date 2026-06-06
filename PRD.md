

# PRD — Website Company/Product Profile Skincare KAHF
**Product Requirements Document**
**Versi:** 1.0
**Tanggal:** 6 Juni 2026
**Status:** Draft

---

## 1. OVERVIEW

### 1.1 Latar Belakang

KAHF adalah brand skincare pria lokal Indonesia yang berfokus pada produk halal, clean, dan efektif. Website ini dirancang sebagai platform digital utama KAHF yang berfungsi ganda: sebagai company/product profile yang membangun kepercayaan brand, sekaligus sebagai alat pemasaran berbasis teknologi AI yang membantu pengguna menemukan produk yang tepat sesuai kondisi kulit mereka secara personal.

### 1.2 Tujuan Produk

- Memperkenalkan brand KAHF secara menyeluruh kepada calon konsumen baru maupun konsumen yang sudah ada.
- Menyajikan katalog produk KAHF secara lengkap, informatif, dan menarik secara visual.
- Menghadirkan fitur analisis wajah berbasis AI (Google Gemini) sebagai differentiator utama website yang mampu mendeteksi kondisi kulit, mendeteksi jerawat, dan memberikan rekomendasi produk yang relevan secara personal.
- Mendorong konversi pembelian langsung ke platform e-commerce (Shopee) melalui deep link produk.
- Membangun ekosistem digital KAHF yang kuat sebagai fondasi loyalitas brand jangka panjang.

### 1.3 Target Pengguna

- Pria Indonesia berusia 18–35 tahun yang peduli terhadap perawatan kulit.
- Pengguna yang baru mengenal skincare dan membutuhkan panduan produk yang tepat.
- Konsumen KAHF eksisting yang ingin mengeksplorasi produk baru.
- Calon mitra bisnis, investor, dan media yang ingin mengetahui profil perusahaan.

### 1.4 Nilai Proposisi

Website KAHF bukan sekadar katalog produk biasa. Dengan teknologi AI Gemini, pengguna dapat mengarahkan kamera ponsel atau mengunggah foto wajah mereka, dan sistem akan secara otomatis menganalisis kondisi kulit (jenis kulit, tingkat kelembapan, deteksi jerawat, dll) dengan animasi visual yang menarik, lalu merekomendasikan produk KAHF yang paling sesuai, dilengkapi tautan langsung ke toko resmi KAHF di Shopee.

### 1.5 Metrik Keberhasilan

- Waktu rata-rata di halaman (avg. session duration) minimal 3 menit.
- Tingkat penggunaan fitur AI Face Analysis minimal 30% dari total pengunjung unik.
- Click-through rate (CTR) ke Shopee dari rekomendasi produk minimal 15%.
- Bounce rate di bawah 45%.
- Core Web Vitals: LCP < 2.5 detik, FID < 100ms, CLS < 0.1.

---

## 2. REQUIREMENTS

### 2.1 Functional Requirements

FR-01 — Website harus menampilkan seluruh halaman utama (Home, About, Products, AI Face Analysis, Blog/Tips, Ingredients, Sustainability, Store Locator, Contact, FAQ) dengan konten lengkap.

FR-02 — Fitur AI Face Analysis harus mampu menerima input gambar dari dua sumber: kamera real-time (via browser MediaAPI) dan unggahan foto dari perangkat pengguna.

FR-03 — Sistem harus memanggil Google Gemini API untuk memproses gambar wajah dan menghasilkan analisis yang mencakup: jenis kulit (normal, berminyak, kering, kombinasi), tingkat keparahan jerawat (tidak ada, ringan, sedang, berat), kondisi kulit lainnya (kusam, pori-pori besar, dll), dan rekomendasi skincare routine.

FR-04 — Selama proses analisis berlangsung, sistem harus menampilkan animasi visual berupa overlay pada wajah pengguna yang mensimulasikan proses "pemindaian" kulit (scanning animation, titik-titik deteksi, highlight area jerawat, dll).

FR-05 — Hasil analisis harus menampilkan rekomendasi produk KAHF yang relevan, dilengkapi foto produk, nama produk, deskripsi singkat, dan tombol "Beli di Shopee" yang mengarahkan ke halaman produk resmi di Shopee melalui deep link affiliate/tracking.

FR-06 — Halaman produk harus menampilkan katalog lengkap dengan fitur filter berdasarkan kategori (face wash, moisturizer, serum, dll), jenis kulit, dan masalah kulit.

FR-07 — Website harus mendukung berbagi hasil analisis AI ke media sosial (Instagram Story format, WhatsApp, dll) sebagai fitur viral marketing.

FR-08 — Website harus memiliki sistem tracking untuk mencatat data analitik penggunaan fitur AI dan konversi ke Shopee.

### 2.2 Non-Functional Requirements

NFR-01 — Performa: Halaman harus memuat dalam waktu kurang dari 3 detik pada koneksi 4G standar Indonesia.

NFR-02 — Responsivitas: Website harus responsif sempurna di semua ukuran layar (mobile 375px, tablet 768px, desktop 1440px), dengan prioritas desain mobile-first mengingat mayoritas pengguna target mengakses via smartphone.

NFR-03 — Aksesibilitas: Website harus memenuhi standar WCAG 2.1 level AA.

NFR-04 — Keamanan: Gambar wajah pengguna yang diproses melalui fitur AI tidak boleh disimpan di server tanpa izin eksplisit pengguna. Pemrosesan gambar dilakukan secara client-side atau melalui server dengan enkripsi dan dihapus segera setelah analisis selesai.

NFR-05 — Privasi: Website harus memiliki halaman Privacy Policy yang jelas mengenai penggunaan data kamera dan gambar wajah, serta meminta consent pengguna sebelum mengaktifkan kamera.

NFR-06 — SEO: Setiap halaman harus memiliki meta tag, structured data (JSON-LD), dan sitemap.xml yang dioptimasi untuk mesin pencari.

NFR-07 — Browser Compatibility: Mendukung Chrome 90+, Safari 14+, Firefox 88+, dan Samsung Internet 14+.

NFR-08 — Uptime: Target uptime minimal 99.5% per bulan.

### 2.3 Batasan (Constraints)

- Fitur kamera real-time hanya tersedia pada browser yang mendukung WebRTC/MediaDevices API.
- Analisis AI menggunakan Google Gemini Vision API dengan biaya per request; perlu mekanisme rate limiting agar tidak terjadi abuse.
- Deep link ke Shopee bergantung pada format URL Shopee yang dapat berubah; perlu mekanisme pembaruan link yang mudah.
- Konten website dikelola melalui CMS; tim non-teknis KAHF harus bisa memperbarui produk, blog, dan konten tanpa bantuan developer.

---

## 3. CORE FEATURES

### 3.1 AI Face Analysis (Fitur Utama)

Ini adalah fitur paling differensiasi website KAHF. Pengguna dapat menggunakan kamera perangkat atau mengunggah foto untuk mendapatkan analisis kulit berbasis AI.

Komponen fitur ini meliputi:

Input Module — Layar pemilihan antara "Gunakan Kamera" (real-time) atau "Unggah Foto". Terdapat panduan singkat cara mengambil foto yang baik (pencahayaan, jarak, ekspresi netral). Terdapat tombol consent kamera dengan penjelasan bahwa gambar tidak akan disimpan.

Scanning Animation Module — Saat proses analisis berjalan, pengguna melihat animasi overlay pada wajah mereka berupa: garis grid pemindaian yang bergerak dari atas ke bawah wajah, titik-titik kecil yang "menemukan" area jerawat dan dilingkari dengan warna tertentu (merah untuk jerawat aktif, kuning untuk bekas jerawat), gradasi warna overlay yang menunjukkan jenis kulit (biru untuk kombinasi, hijau untuk normal, oranye untuk berminyak), progress bar dengan teks deskriptif tahap analisis ("Mendeteksi tekstur kulit...", "Mengidentifikasi area sensitif...", "Menyusun rekomendasi produk..."), dan total durasi animasi sekitar 4–6 detik untuk memberikan kesan proses yang mendalam.

Result Module — Setelah analisis selesai, hasil ditampilkan dalam format kartu yang elegan berisi: skor kondisi kulit secara keseluruhan (0–100), badge jenis kulit dengan ikon, breakdown kondisi per area (dahi, hidung, pipi, dagu), penjelasan tekstual dari AI mengenai kondisi kulit pengguna, rekomendasi skincare routine pagi dan malam, dan daftar produk KAHF yang direkomendasikan.

Recommendation Module — Setiap produk yang direkomendasikan ditampilkan dengan: foto produk, nama dan tagline, alasan produk ini cocok untuk kondisi kulit pengguna (generated by AI), rating produk, dan tombol "Beli di Shopee" dengan ikon Shopee berwarna oranye.

Share Module — Pengguna dapat membagikan hasil analisis sebagai gambar (format Instagram Story/Square) yang sudah di-branded dengan logo KAHF.

### 3.2 Katalog Produk

Halaman produk berfungsi sebagai etalase digital lengkap dengan: grid produk dengan lazy loading, sistem filter multi-dimensi (kategori, jenis kulit, masalah kulit, bahan aktif utama), halaman detail produk dengan foto 360 derajat / multi-angle, komposisi bahan lengkap dengan penjelasan fungsi tiap bahan, cara pemakaian step-by-step, produk yang cocok digunakan bersamaan (cross-sell), ulasan pengguna (integrasi dari Shopee review atau sistem review mandiri), dan tombol beli yang langsung mengarah ke Shopee.

### 3.3 Company Profile

Menceritakan kisah brand KAHF secara komprehensif melalui timeline brand, nilai-nilai perusahaan, sertifikasi halal dan clean beauty, tim founding, milestone pencapaian, dan media mentions.

### 3.4 Blog / Tips & Tricks

Platform konten edukasi seputar perawatan kulit pria, meliputi: artikel tips skincare, panduan ingredient, FAQ skincare, video tutorial, dan konten yang SEO-friendly untuk mendatangkan organic traffic.

### 3.5 Store Locator & E-Commerce Integration

Peta interaktif yang menampilkan lokasi toko fisik dan mitra retail KAHF, serta link langsung ke semua platform e-commerce (Shopee sebagai utama, Tokopedia, Lazada, website resmi).

---

## 4. USER FLOW

### 4.1 User Flow: Pengunjung Baru (New Visitor)

Langkah 1 — Pengunjung tiba di halaman Home melalui iklan sosial media / pencarian organik / referral.

Langkah 2 — Pengguna disambut oleh Hero Section dengan animasi tagline KAHF dan CTA utama "Cek Kondisi Kulitmu Sekarang" yang mengarah ke fitur AI Face Analysis.

Langkah 3 — Pengguna menjelajah halaman Home: melihat highlight produk bestseller, membaca nilai-nilai brand, melihat testimonial pengguna.

Langkah 4 — Pengguna memutuskan untuk mencoba fitur AI Face Analysis.

Langkah 5 — Di halaman AI Face Analysis, pengguna membaca penjelasan singkat fitur dan memberi consent penggunaan kamera.

Langkah 6 — Pengguna memilih input kamera atau upload foto, dan mengambil/mengunggah gambar wajah.

Langkah 7 — Animasi scanning berjalan (4–6 detik) sambil sistem memanggil Gemini API.

Langkah 8 — Hasil analisis ditampilkan dengan breakdown kondisi kulit dan rekomendasi produk personal.

Langkah 9 — Pengguna tertarik dengan produk yang direkomendasikan dan mengklik tombol "Beli di Shopee".

Langkah 10 — Pengguna diarahkan ke halaman produk di Shopee dan melakukan pembelian.

Langkah 11 — Pengguna membagikan hasil analisis ke Instagram Story sebagai viral loop.

### 4.2 User Flow: Browsing Produk

Langkah 1 — Pengguna masuk ke halaman Produk dari navigasi utama.

Langkah 2 — Pengguna menggunakan filter untuk menyaring produk berdasarkan jenis kulit "berminyak" dan masalah "jerawat".

Langkah 3 — Sistem menampilkan produk yang relevan dalam grid.

Langkah 4 — Pengguna mengklik kartu produk untuk melihat halaman detail.

Langkah 5 — Di halaman detail, pengguna membaca komposisi bahan, cara pakai, dan ulasan.

Langkah 6 — Pengguna mengklik "Beli di Shopee" dan diarahkan ke Shopee.

Langkah 7 — Atau pengguna mengklik "Coba AI Analysis" untuk mendapatkan konfirmasi apakah produk ini cocok untuk kulitnya.

### 4.3 User Flow: Membaca Blog

Langkah 1 — Pengguna menemukan artikel KAHF melalui pencarian Google.

Langkah 2 — Pengguna membaca artikel dan melihat rekomendasi produk KAHF yang relevan yang disisipkan secara kontekstual di dalam artikel.

Langkah 3 — Di akhir artikel, pengguna melihat CTA untuk mencoba AI Face Analysis.

Langkah 4 — Pengguna terdorong untuk mencoba fitur AI dan akhirnya masuk ke funnel pembelian.

### 4.4 User Flow: Admin/Content Manager

Langkah 1 — Admin login ke CMS dashboard.

Langkah 2 — Admin dapat menambah/mengedit/menghapus produk (nama, deskripsi, foto, harga, link Shopee, kategori, label kulit).

Langkah 3 — Admin dapat membuat/mengedit artikel blog.

Langkah 4 — Admin dapat melihat dashboard analitik penggunaan fitur AI dan konversi Shopee.

Langkah 5 — Admin dapat memperbarui link Shopee per produk tanpa perlu menyentuh kode.

---

## 5. ARCHITECTURE

### 5.1 Arsitektur Sistem Secara Keseluruhan

Website KAHF menggunakan arsitektur modern berbasis Jamstack dengan komponen berikut:

Frontend Layer — Dibangun dengan Next.js (React) yang di-deploy di Vercel. Bertanggung jawab atas semua tampilan UI, interaksi pengguna, animasi, dan logika client-side termasuk pemrosesan kamera via WebRTC.

API Layer — Next.js API Routes berfungsi sebagai Backend for Frontend (BFF). Layer ini bertanggung jawab atas: pemanggilan Google Gemini Vision API (agar API key tidak terekspos di client), manajemen rate limiting untuk fitur AI, integrasi dengan CMS, dan pencatatan analitik konversi.

CMS Layer — Menggunakan Sanity.io sebagai headless CMS. Menyimpan semua konten terstruktur: data produk, artikel blog, konten halaman, data tim, media/foto.

Database Layer — PostgreSQL (via Supabase) untuk menyimpan data analitik agregat (bukan data personal), log konversi Shopee, data subscriber newsletter, dan data session AI analysis (hanya metadata, bukan gambar).

Storage Layer — Vercel Blob atau Cloudinary untuk aset media seperti foto produk, video, dan aset brand.

External Services — Google Gemini Vision API untuk analisis AI wajah, Shopee Affiliate API atau deep link untuk konversi produk, Google Analytics 4 untuk analitik, dan SendGrid atau Resend untuk email newsletter.

### 5.2 Arsitektur Fitur AI Face Analysis

Alur teknis fitur ini adalah sebagai berikut:

Client — Browser mengakses kamera via navigator.mediaDevices.getUserMedia() atau menerima file upload. Canvas API digunakan untuk mengambil frame gambar dan mengkompresi menjadi base64 JPEG dengan kualitas yang cukup untuk analisis namun tidak terlalu besar untuk dikirim via API. Gambar yang dikompres kemudian dikirim via POST request ke API Route Next.js.

Server (API Route) — Menerima gambar base64, memvalidasi format dan ukuran, memanggil Google Gemini Pro Vision API dengan prompt yang sudah dikurasi khusus untuk analisis kondisi kulit dan deteksi jerawat, mem-parsing respons JSON dari Gemini, melakukan mapping hasil analisis ke rekomendasi produk KAHF berdasarkan logika yang sudah ditentukan, mencatat metadata analisis (tanpa gambar) ke database untuk keperluan analitik, dan mengembalikan response terstruktur ke client.

Client (Result) — Menerima hasil analisis, menampilkan animasi hasil secara bertahap, merender kartu produk yang direkomendasikan dengan data dari CMS.

### 5.3 Struktur Halaman (Page Architecture)

Halaman yang ada di website adalah sebagai berikut: Home (/), About (/about), Products (/products), Product Detail (/products/[slug]), AI Face Analysis (/ai-analysis), Blog (/blog), Blog Detail (/blog/[slug]), Ingredients Dictionary (/ingredients), Sustainability (/sustainability), Store Locator (/store-locator), Contact (/contact), FAQ (/faq), Privacy Policy (/privacy-policy), Terms of Service (/terms), dan CMS Admin (Sanity Studio — subdomain atau /studio).

---

## 6. DATABASE SCHEMA

### 6.1 Tabel: products

Kolom id bertipe UUID sebagai primary key. Kolom name bertipe VARCHAR(255) menyimpan nama produk. Kolom slug bertipe VARCHAR(255) bersifat unique untuk URL SEO-friendly. Kolom description bertipe TEXT menyimpan deskripsi lengkap. Kolom short_description bertipe VARCHAR(500) untuk ringkasan. Kolom category bertipe ENUM berisi nilai ('face_wash', 'moisturizer', 'serum', 'sunscreen', 'toner', 'eye_cream', 'lip_care', 'body_care', 'hair_care'). Kolom skin_types bertipe TEXT ARRAY menyimpan array jenis kulit yang cocok (normal, oily, dry, combination, sensitive). Kolom skin_concerns bertipe TEXT ARRAY menyimpan masalah kulit yang diatasi (acne, dullness, oily, dry, sensitive). Kolom shopee_link bertipe TEXT menyimpan URL deep link ke Shopee. Kolom price_range bertipe VARCHAR(100) untuk rentang harga (karena harga di Shopee bisa variatif). Kolom is_bestseller bertipe BOOLEAN. Kolom is_active bertipe BOOLEAN. Kolom sort_order bertipe INTEGER untuk pengurutan. Kolom created_at dan updated_at bertipe TIMESTAMPTZ.

### 6.2 Tabel: product_images

Kolom id bertipe UUID sebagai primary key. Kolom product_id bertipe UUID sebagai foreign key ke tabel products. Kolom image_url bertipe TEXT. Kolom alt_text bertipe VARCHAR(255). Kolom sort_order bertipe INTEGER. Kolom is_primary bertipe BOOLEAN.

### 6.3 Tabel: product_ingredients

Kolom id bertipe UUID sebagai primary key. Kolom product_id bertipe UUID sebagai foreign key ke tabel products. Kolom ingredient_name bertipe VARCHAR(255). Kolom ingredient_function bertipe TEXT menjelaskan fungsi bahan tersebut. Kolom is_key_ingredient bertipe BOOLEAN menandai apakah ini bahan aktif utama. Kolom sort_order bertipe INTEGER.

### 6.4 Tabel: ai_analysis_sessions

Tabel ini menyimpan metadata analisis (bukan gambar). Kolom id bertipe UUID sebagai primary key. Kolom session_id bertipe VARCHAR(255) bersifat unique sebagai identifier sesi anonymous. Kolom skin_type bertipe VARCHAR(100) hasil deteksi jenis kulit. Kolom acne_severity bertipe ENUM berisi nilai ('none', 'mild', 'moderate', 'severe'). Kolom skin_concerns_detected bertipe TEXT ARRAY. Kolom overall_score bertipe INTEGER (0–100). Kolom recommended_product_ids bertipe UUID ARRAY. Kolom shopee_click_product_id bertipe UUID mengacu produk yang diklik ke Shopee (nullable). Kolom shopee_clicked_at bertipe TIMESTAMPTZ (nullable). Kolom input_method bertipe ENUM berisi nilai ('camera', 'upload'). Kolom device_type bertipe VARCHAR(50). Kolom created_at bertipe TIMESTAMPTZ.

### 6.5 Tabel: blog_posts

Kolom id bertipe UUID sebagai primary key. Kolom title bertipe VARCHAR(500). Kolom slug bertipe VARCHAR(500) bersifat unique. Kolom content bertipe TEXT (format rich text/markdown). Kolom excerpt bertipe VARCHAR(500). Kolom cover_image_url bertipe TEXT. Kolom author_name bertipe VARCHAR(255). Kolom category bertipe VARCHAR(100) (tips, ingredient, routine, news). Kolom tags bertipe TEXT ARRAY. Kolom is_published bertipe BOOLEAN. Kolom published_at bertipe TIMESTAMPTZ. Kolom seo_title bertipe VARCHAR(255). Kolom seo_description bertipe VARCHAR(500). Kolom created_at dan updated_at bertipe TIMESTAMPTZ.

### 6.6 Tabel: newsletter_subscribers

Kolom id bertipe UUID sebagai primary key. Kolom email bertipe VARCHAR(255) bersifat unique. Kolom name bertipe VARCHAR(255) bersifat nullable. Kolom is_verified bertipe BOOLEAN. Kolom source bertipe VARCHAR(100) mencatat dari mana subscriber berasal (ai_result_page, homepage, blog, dll). Kolom subscribed_at bertipe TIMESTAMPTZ. Kolom unsubscribed_at bertipe TIMESTAMPTZ bersifat nullable.

### 6.7 Tabel: contact_messages

Kolom id bertipe UUID sebagai primary key. Kolom name bertipe VARCHAR(255). Kolom email bertipe VARCHAR(255). Kolom subject bertipe VARCHAR(500). Kolom message bertipe TEXT. Kolom status bertipe ENUM berisi nilai ('unread', 'read', 'replied'). Kolom created_at bertipe TIMESTAMPTZ.

### 6.8 Tabel: store_locations

Kolom id bertipe UUID sebagai primary key. Kolom name bertipe VARCHAR(255). Kolom type bertipe ENUM berisi nilai ('official_store', 'retail_partner', 'online_only'). Kolom address bertipe TEXT. Kolom city bertipe VARCHAR(100). Kolom province bertipe VARCHAR(100). Kolom latitude bertipe DECIMAL(10,8). Kolom longitude bertipe DECIMAL(11,8). Kolom google_maps_url bertipe TEXT. Kolom shopee_url bertipe TEXT. Kolom is_active bertipe BOOLEAN.

---

## 7. TECH STACK

### 7.1 Frontend

Framework utama menggunakan Next.js 14+ dengan App Router karena mendukung SSR, SSG, dan ISR yang sangat dibutuhkan untuk SEO dan performa optimal. Bahasa pemrograman menggunakan TypeScript untuk type safety dan maintainability kode jangka panjang. Styling menggunakan Tailwind CSS dengan konfigurasi design token kustom menggunakan palet warna KAHF. Komponen UI menggunakan kombinasi Shadcn/UI sebagai base component library dan komponen kustom. Animasi menggunakan Framer Motion untuk animasi halaman dan micro-interaction, serta GSAP untuk animasi scanning AI yang lebih kompleks dan presisi. State management menggunakan Zustand untuk global state yang ringan (cart, analisis AI, filter produk). Image optimization menggunakan Next.js Image component dengan format WebP/AVIF otomatis dan Cloudinary untuk transfCloudinary untuk transformasi gambar dinamis. Form handling menggunakan React Hook Form dengan validasi Zod.
7.2 Backend
Runtime menggunakan Node.js via Next.js API Routes sebagai layer BFF. ORM menggunakan Prisma untuk interaksi database yang type-safe dan mudah dikelola. Validasi server-side menggunakan Zod. Rate limiting menggunakan Upstash Redis untuk membatasi request ke Gemini API per IP per hari agar menghindari abuse dan biaya berlebih. Email menggunakan Resend (atau SendGrid) untuk pengiriman email transaksional dan newsletter.
7.3 AI Integration
Model AI menggunakan Google Gemini 1.5 Pro Vision API. SDK yang digunakan adalah @google/generative-ai (official Node.js SDK). Strategi prompting menggunakan system prompt yang sudah dioptimalkan dan dikurasi secara khusus untuk analisis kondisi kulit, mengembalikan respons dalam format JSON terstruktur yang konsisten. Response schema meliputi skin_type, acne_severity, acne_locations, skin_concerns, overall_health_score, routine_recommendation (morning dan night), dan product_recommendations berisi array ID produk KAHF.
7.4 CMS
Headless CMS menggunakan Sanity.io v3 karena memiliki Sanity Studio yang bisa dikustomisasi, mendukung real-time collaboration, dan API yang fleksibel. Konten yang dikelola di CMS meliputi produk, artikel blog, halaman statis (About, Sustainability, dll), data tim, FAQ, dan ingredient dictionary. Aset media dikelola melalui Sanity Assets CDN dengan transformasi gambar.
7.5 Database & Infrastructure
Database menggunakan PostgreSQL yang di-host di Supabase (managed PostgreSQL dengan fitur auth, realtime, dan REST API bawaan). Hosting Frontend menggunakan Vercel (integrasi native dengan Next.js, edge network global). Object Storage menggunakan Vercel Blob atau Cloudinary untuk media dan aset. Cache menggunakan Upstash Redis untuk session cache, rate limiting, dan caching response AI sementara. CDN sudah terintegrasi melalui Vercel Edge Network.
7.6 Analytics & Monitoring
Web Analytics menggunakan Google Analytics 4 dengan custom events untuk tracking penggunaan fitur AI dan konversi Shopee. Error Monitoring menggunakan Sentry untuk penangkapan error real-time di frontend dan backend. Performance Monitoring menggunakan Vercel Analytics dan Speed Insights bawaan. Uptime monitoring menggunakan Better Uptime atau UptimeRobot.
7.7 Development Tools
Version Control menggunakan Git dengan GitHub. CI/CD menggunakan GitHub Actions untuk automated testing dan deployment ke Vercel. Testing menggunakan Vitest untuk unit test dan Playwright untuk end-to-end testing. Code Quality menggunakan ESLint, Prettier, dan Husky untuk pre-commit hooks.
8. DESIGN GUIDELINES
8.1 Brand Identity
KAHF adalah brand skincare pria yang modern, bersih, dan dapat dipercaya. Identitas visual website harus mencerminkan karakter ini: maskulin namun approachable, bersih dan minimalis namun tidak steril, premium namun tetap accessible untuk semua kalangan.
8.2 Color Palette
Warna utama brand adalah KAHF Green dengan kode hex #2D6A4F yang merepresentasikan kesegaran, alam, dan bahan-bahan clean. Warna sekunder adalah KAHF Teal dengan kode hex #40916C sebagai aksen dan hover state. Warna gelap untuk teks adalah Deep Forest dengan kode hex #1B4332. Warna latar utama adalah Off-White dengan kode hex #F8FAF8 agar tidak terlalu terang dan nyaman di mata. Warna latar sekunder adalah Light Sage dengan kode hex #E8F5E2 untuk section dengan latar berbeda. Teks utama menggunakan Dark Charcoal dengan kode hex #1A1A2E. Teks sekunder menggunakan Medium Gray dengan kode hex #6B7280. Warna aksen untuk CTA Shopee menggunakan Shopee Orange dengan kode hex #EE4D2D karena sudah dikenal luas oleh konsumen Indonesia. Warna AI Accent untuk elemen fitur analisis menggunakan Electric Blue dengan kode hex #3B82F6 yang memberikan kesan teknologi dan futuristik.
8.3 Typography
Font heading menggunakan Plus Jakarta Sans (Google Fonts) dengan weight 700 (Bold) dan 800 (ExtraBold) karena mencerminkan modernitas dan clean look sesuai brand KAHF. Font body menggunakan Inter (Google Fonts) dengan weight 400 (Regular) dan 500 (Medium) yang sangat mudah dibaca di semua ukuran layar. Font accent untuk label, badge, dan uppercase text menggunakan DM Sans dengan weight 500 dan letter-spacing sedikit lebih lebar untuk kejelasan. Ukuran heading menggunakan skala: H1 untuk 48px/3rem, H2 untuk 36px/2.25rem, H3 untuk 28px/1.75rem, H4 untuk 22px/1.375rem, H5 untuk 18px/1.125rem. Ukuran body menggunakan skala: Large untuk 18px, Default untuk 16px, Small untuk 14px, dan XSmall untuk 12px.
8.4 Spacing & Layout
Grid system menggunakan 12-kolom dengan gutter 24px pada desktop dan 16px pada mobile. Max width konten menggunakan 1280px. Spacing mengikuti skala 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Section padding minimal 80px vertikal pada desktop dan 48px pada mobile. Border radius menggunakan 8px untuk card, 12px untuk button, 16px untuk modal, dan 50% untuk avatar/badge bulat.
8.5 Component Design
Cards — Menggunakan background putih dengan shadow ringan (box-shadow: 0 2px 8px rgba(0,0,0,0.08)), border-radius 12px, dan hover effect yang sedikit mengangkat card (transform: translateY(-4px) dengan transition smooth 0.2s). Tombol Primary — Background KAHF Green, teks putih, border-radius 8px, padding 12px 24px, dengan hover state yang mempergelap background 10%. Tombol Secondary — Background transparan dengan border KAHF Green, teks KAHF Green, efek yang sama pada hover. Tombol Shopee — Background Shopee Orange, teks putih, dengan ikon Shopee di sebelah kiri teks, untuk konsistensi visual yang langsung dikenali pengguna. Badge/Tag — Pill shape (border-radius 50px) dengan background warna-warna pastel dari palet brand, ukuran teks 12px.
8.6 Animasi dan Motion Design
Filosofi animasi: meaningful, tidak berlebihan, dan tidak mengganggu pengalaman membaca. Halaman loading menggunakan fade-in halus (0.3s ease-out). Scroll animations menggunakan Framer Motion dengan stagger effect untuk list item. Hover interactions menggunakan transisi 0.2s ease. AI Scanning Animation adalah satu-satunya animasi yang boleh lebih dramatis dan memakan perhatian lebih karena ini adalah momen "wow" yang ingin ditampilkan, menggunakan GSAP timeline dengan efek: garis scan linear, particle dots, warna overlay gradasi, dan pulse effect pada area jerawat terdeteksi.
8.7 Iconography
Menggunakan Lucide Icons sebagai primary icon set karena konsisten, clean, dan tersedia dalam format SVG yang dapat dikustomisasi warnanya. Icon custom untuk fitur AI Analysis menggunakan desain khusus yang menggambarkan teknologi dan wajah.
8.8 Imagery
Foto produk menggunakan background putih atau hijau sage yang bersih untuk konsistensi katalog. Foto lifestyle menampilkan pria muda Indonesia beragam (18–35 tahun) yang aktif, percaya diri, dan bersih. Tidak menggunakan foto stok generik; semua foto harus terasa otentik dan relevan dengan target audiens Indonesia. Ilustrasi menggunakan gaya flat design minimalis dengan palet warna brand.
8.9 Desain Tiap Halaman
Halaman Home terdiri dari: Hero Section (fullscreen dengan video/animasi background, tagline utama, CTA ke AI Analysis dan ke Produk), AI Feature Teaser Section (pengenalan singkat fitur AI dengan mockup animasi), Bestseller Products Section (horizontal scroll di mobile, grid di desktop), About Brand Section (headline nilai-nilai KAHF dengan visual yang kuat), Ingredients Highlight Section (3–4 bahan aktif unggulan), Testimonials Section (slider dengan rating dan foto pengguna), Blog Highlight Section (3 artikel terbaru), Newsletter Section, dan Footer.
Halaman AI Face Analysis terdiri dari: Hero Explanation Section (judul, deskripsi singkat, cara kerja dalam 3 langkah), Consent & Input Section (toggle kamera/upload, tombol izin kamera), Live Camera / Upload Preview Section (tampilan kamera real-time atau preview foto yang diunggah), Scanning Animation Overlay (ditampilkan saat analisis berjalan), Results Section (tampil setelah analisis selesai: skor, breakdown kulit, kondisi area per wajah), Product Recommendations Section (berdasarkan hasil analisis, dengan CTA ke Shopee), Routine Suggestion Section (panduan pagi dan malam), dan Share Result Section (tombol share ke Instagram/WhatsApp dengan preview gambar hasil).
Halaman Products terdiri dari: Filter & Sort Bar (sticky di atas, dengan filter kategori, jenis kulit, masalah kulit), Product Grid Section (responsive grid dengan lazy loading), Featured Collection Banner (banner produk unggulan berputar), No Results State (jika filter tidak menghasilkan produk).
Halaman Product Detail terdiri dari: Product Gallery Section (foto utama besar + thumbnail, mendukung zoom), Product Info Section (nama, tagline, harga range, badge jenis kulit, CTA Shopee), Product Description Section (cerita produk dan manfaat utama), Key Ingredients Section (card per bahan aktif dengan ikon dan penjelasan), How to Use Section (langkah-langkah bergambar), Companion Products Section (produk yang direkomendasikan digunakan bersama), Customer Reviews Section, dan AI Recommendation Check Section (CTA untuk menggunakan AI Analysis agar tahu apakah produk ini cocok).
Halaman About terdiri dari: Brand Story Section (narasi asal-usul KAHF dengan timeline visual), Mission & Vision Section, Core Values Section (grid dengan ikon dan penjelasan), Certifications Section (halal, BPOM, clean beauty badges), Team Section (foto dan bio tim inti), Milestones Timeline Section, dan Media Coverage Section (logo media yang pernah meliput).
Halaman Blog terdiri dari: Featured Post Hero Section, Post Grid dengan pagination, Category Filter Bar, dan Search Bar.
Halaman Ingredients Dictionary terdiri dari: Search Ingredients Section, A-Z Index Navigation, Ingredient Cards Grid (nama, manfaat, ada di produk apa), dan Featured Ingredients Section.
Halaman Sustainability terdiri dari: Commitment Statement Hero, Pillars of Sustainability Section (packaging, bahan, komunitas), Progress & Metrics Section, Certifications Section, dan CTA Section.
Halaman Store Locator terdiri dari: Map Section (Google Maps embed interaktif), Store List Sidebar (dapat difilter per kota), Online Store Links Section (Shopee, Tokopedia, Lazada, Grab, GoTo).
Halaman Contact terdiri dari: Contact Information Cards, Contact Form, Social Media Links, dan FAQ Shortcut Section.
Halaman FAQ terdiri dari: Search FAQ Section, FAQ Categories Navigation, dan Accordion FAQ List.
9. INTEGRATION
9.1 Google Gemini Vision API
Tujuan integrasi adalah untuk memproses gambar wajah dan menghasilkan analisis kondisi kulit terstruktur.
Endpoint yang digunakan adalah POST https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent.
Autentikasi menggunakan API Key yang disimpan di environment variable server-side (GEMINI_API_KEY) dan tidak pernah terekspos ke client.
Prompt yang digunakan adalah system prompt terstruktur dalam Bahasa Indonesia yang menginstruksikan model untuk menganalisis gambar wajah dan mengembalikan JSON dengan struktur berikut: skin_type (string: normal/oily/dry/combination/sensitive), acne_severity (string: none/mild/moderate/severe), acne_locations (array of string berisi area wajah yang berjerawat), skin_concerns (array of string berisi masalah kulit yang terdeteksi), overall_score (integer 0–100), skin_health_summary (string berisi penjelasan singkat kondisi kulit dalam Bahasa Indonesia), morning_routine (array of string berisi langkah skincare pagi yang direkomendasikan), night_routine (array of string berisi langkah skincare malam yang direkomendasikan), dan recommended_product_categories (array of string berisi kategori produk yang direkomendasikan).
Rate limiting dibatasi 10 request per IP per 24 jam untuk mencegah abuse, menggunakan Upstash Redis untuk menyimpan counter per IP.
Penanganan error meliputi: timeout API ditangani dengan retry maksimal 2 kali, error parsing JSON response Gemini ditangani dengan fallback ke analisis manual (pengguna diminta menjawab kuesioner kulit sederhana), dan error kamera/akses perangkat ditangani dengan fallback ke mode upload foto.
9.2 Shopee Integration (Deep Link)
Tujuan integrasi adalah untuk mengarahkan pengguna langsung ke halaman produk spesifik di Shopee dari website KAHF.
Mekanisme yang digunakan adalah deep link statis per produk yang disimpan di CMS dan database, dengan format URL mengacu pada URL produk di toko resmi KAHF di Shopee (https://shopee.co.id/kahf.official/[product-id]).
Tracking konversi dilakukan melalui UTM parameter yang ditambahkan ke setiap link Shopee dari website KAHF, dengan parameter utm_source=website_kahf, utm_medium=product_recommendation, utm_campaign=ai_analysis (untuk link dari hasil AI) atau utm_campaign=product_catalog (untuk link dari katalog produk).
Event tracking dilakukan dengan mengirim custom event ke Google Analytics 4 setiap kali tombol "Beli di Shopee" diklik, menyimpan log klik ke database dengan product_id dan session_id untuk analitik internal.
Pembaruan link Shopee dapat dilakukan langsung melalui CMS Sanity oleh admin tanpa perlu deployment ulang.
9.3 Sanity.io CMS
Tujuan integrasi adalah sebagai sumber kebenaran (single source of truth) untuk semua konten website yang dikelola oleh tim KAHF.
Konten yang dikelola di Sanity meliputi schema produk (nama, deskripsi, foto, kategori, link Shopee, bahan, cara pakai), schema blog post, schema halaman statis, schema FAQ, schema team member, schema ingredient dictionary, dan schema store location.
Fetching data menggunakan GROQ (Graph-Relational Object Queries) queries dari Sanity API. Untuk halaman yang kontennya jarang berubah (halaman About, Sustainability) menggunakan Static Site Generation dengan revalidasi setiap 1 jam. Untuk halaman yang kontennya sering berubah (blog, produk baru) menggunakan Incremental Static Regeneration dengan revalidasi setiap 5 menit.
Webhook dari Sanity ke Vercel dikonfigurasi untuk men-trigger revalidasi halaman secara otomatis saat admin menyimpan perubahan konten di Sanity Studio.
9.4 Google Analytics 4
Tujuan integrasi adalah untuk memahami perilaku pengguna dan mengukur efektivitas fitur-fitur website, khususnya fitur AI dan konversi Shopee.
Custom events yang di-track antara lain: ai_analysis_started (saat pengguna memulai analisis), ai_analysis_completed (saat hasil analisis muncul, dengan property skin_type dan acne_severity), product_recommendation_viewed (saat pengguna melihat rekomendasi produk dari AI), shopee_click (saat tombol Beli di Shopee diklik, dengan property product_name dan source), analysis_shared (saat pengguna membagikan hasil analisis), filter_applied (saat pengguna menggunakan filter di halaman produk), dan newsletter_subscribed.
9.5 SendGrid / Resend (Email)
Tujuan integrasi adalah untuk mengirim email transaksional dan newsletter kepada subscriber.
Email yang dikirim meliputi: welcome email saat subscriber pertama kali mendaftar newsletter, email konfirmasi double opt-in sebelum subscriber resmi masuk ke mailing list, email konfirmasi saat pesan dari Contact Form berhasil dikirim, dan email auto-reply kepada pengirim Contact Form.
Template email menggunakan React Email untuk pembuatan template yang konsisten dengan brand KAHF, dengan desain yang responsif dan on-brand.
9.6 Google Maps API
Tujuan integrasi adalah untuk menampilkan peta interaktif di halaman Store Locator.
Implementasi menggunakan @react-google-maps/api library dengan custom styled map menggunakan palet warna KAHF agar tampilan peta selaras dengan desain website.
Fitur yang tersedia pada peta adalah: marker custom dengan ikon KAHF untuk setiap lokasi toko, info window saat marker diklik menampilkan nama toko, alamat, dan link Get Directions, clustering marker jika banyak toko berdekatan, dan geolocation untuk menemukan toko terdekat dari lokasi pengguna.
9.7 Social Share Integration
Tujuan integrasi adalah agar hasil analisis AI dapat dibagikan ke media sosial sebagai mekanisme viral marketing organik.
Implementasi menggunakan html-to-image library untuk mengkonversi komponen hasil analisis AI menjadi gambar PNG atau JPEG. Gambar yang di-generate sudah mencakup overlay branding KAHF (logo, warna, tipografi brand), nama dan skor kondisi kulit, daftar produk yang direkomendasikan, dan CTA singkat dengan URL website KAHF.
Saluran berbagi yang didukung meliputi: WhatsApp (via web.whatsapp.com/send dengan pesan teks + instruksi lampirkan gambar), Instagram (via intent://share/ untuk mobile, atau instruksi manual untuk desktop), dan download langsung gambar ke perangkat pengguna.
