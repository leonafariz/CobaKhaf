import type { BlogPost, Ingredient, StoreLocation, FaqItem } from "@/lib/types";

const BLOG_IMG = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_y8advNDJfn0Fckr6wW7lWUoreBsnfcgGXgXGFunSete7sGDXCK86_mBGzyukzCJjF_mG6vjCNkAw96nSO9kA_lHaiYxf9iBIlXNuYyHSyrJvll1AYgefDibpDuGIHEQdq3XXEtGqkiH4zTIg2Sj1_mRIaBiJCG5wgWrjyBoQWk8BXgDO4nAtKSkL4rIvgdum1heL6Uyy1b0G7fpBomG7eolOsKkhr8X911wkjoBUQLnbXHjTslzFdS9LCrPof5a9aqIlzw-lbTA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDkLXyeMRGAEzE8w1A35_t1hOogS6aBKn2C1rSAJx_hFMkDRBz4AJJr9Br7641K4vttm5vTs5zHvlvkSGaP-WNpli1KK3M6S6eYS1cuYBHOg9imZlgJdRlhTPfGadtXfKOqSptDEHu-whabIQwDQV8eetoVOGkRTtoUdAeHsqYfeaFTZsk5G0_l2gUenRTb4k9vhgq4NUh6MY5JNGhiDYqczBzjC9Zzdc03C9egaH7j_iAM6Fpx8b7RZucd_5NaEQy31_NGq2NtbKs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ttg9YhXxNx-mN7Uz2PZGLQ3gzhKB9rpDcK0GF6vSTXCDxeMQs0q0pgiT0mYRma8kWgE9WT65gvkdmi59ru9g0Zto2Zaxi7i4kiS1AIq2R6_OCAJocUHZH89gZJyL4etuBPNiAGQbWqPm5IevQnl5ANOse-f4kflCGr3DoLEQDH1aHcCaEgA9Ze9usqAU6FeOpFddXf9Bw-LInqUmwyQgU0qOtj-pqw5LOQl5CUl7nojhiQ5y9pL4gL6vYc6JST7vTPSGWO_fJ2I",
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Panduan Skincare Pria untuk Pemula: Mulai dari Mana?",
    slug: "panduan-skincare-pria-pemula",
    excerpt:
      "Baru mengenal skincare? Pelajari 3 langkah dasar perawatan kulit pria yang efektif dan mudah diikuti setiap hari.",
    content:
      "Memulai rutinitas skincare tidak harus rumit. Untuk pria yang baru memulai, cukup tiga langkah dasar: membersihkan (cleansing), melembapkan (moisturizing), dan melindungi (sun protection).\n\nLangkah pertama adalah memilih face wash yang sesuai dengan jenis kulit Anda. Jika kulit Anda cenderung berminyak, pilih pembersih dengan kandungan oil control seperti Mediterranean Sage.\n\nLangkah kedua, gunakan pelembap ringan setiap pagi dan malam. Jangan lewatkan langkah ini meski kulit Anda berminyak — hidrasi tetap penting.\n\nLangkah ketiga, dan yang paling sering dilupakan: sunscreen. Gunakan SPF minimal 30 setiap pagi untuk melindungi kulit dari sinar UV yang menjadi penyebab utama penuaan dini.",
    coverImage: BLOG_IMG[0],
    coverAlt: "Modern man applying skincare in a bright minimalist bathroom",
    authorName: "Tim KAHF",
    category: "tips",
    tags: ["pemula", "rutinitas", "dasar"],
    publishedAt: "2026-05-20",
    readingTime: "5 menit",
  },
  {
    id: "b2",
    title: "Mengenal Niacinamide: Bahan Ajaib untuk Kulit Pria",
    slug: "mengenal-niacinamide",
    excerpt:
      "Niacinamide jadi bahan andalan skincare modern. Apa manfaatnya untuk kulit pria dan bagaimana cara pakainya?",
    content:
      "Niacinamide, atau Vitamin B3, adalah salah satu bahan aktif paling serbaguna dalam dunia skincare. Bahan ini cocok untuk hampir semua jenis kulit dan jarang menimbulkan iritasi.\n\nManfaat utama niacinamide meliputi: mengontrol produksi minyak berlebih, memperkecil tampilan pori-pori, mencerahkan kulit kusam, dan memperkuat skin barrier.\n\nUntuk pria dengan kulit berminyak dan rentan jerawat, niacinamide adalah pilihan yang sangat baik karena membantu menyeimbangkan sebum tanpa membuat kulit kering.",
    coverImage: BLOG_IMG[1],
    coverAlt: "Close-up of healthy male skin in clinical studio lighting",
    authorName: "dr. Aria Pratama",
    category: "ingredient",
    tags: ["niacinamide", "bahan aktif", "vitamin b3"],
    publishedAt: "2026-05-10",
    readingTime: "4 menit",
  },
  {
    id: "b3",
    title: "Rutinitas Pagi vs Malam: Apa Bedanya?",
    slug: "rutinitas-pagi-vs-malam",
    excerpt:
      "Kulit punya kebutuhan berbeda di pagi dan malam hari. Pahami perbedaannya agar perawatanmu lebih maksimal.",
    content:
      "Rutinitas pagi berfokus pada perlindungan. Setelah membersihkan wajah, gunakan pelembap dan akhiri dengan sunscreen untuk melindungi kulit sepanjang hari dari paparan sinar matahari dan polusi.\n\nRutinitas malam berfokus pada perbaikan. Saat tidur, kulit melakukan regenerasi sel. Inilah waktu terbaik untuk menggunakan produk dengan bahan aktif seperti serum dan pelembap yang lebih kaya.\n\nKonsistensi adalah kunci. Lakukan kedua rutinitas ini setiap hari untuk hasil yang optimal.",
    coverImage: BLOG_IMG[2],
    coverAlt: "Misty cedar forest at dawn, masculine and revitalizing",
    authorName: "Tim KAHF",
    category: "routine",
    tags: ["rutinitas", "pagi", "malam"],
    publishedAt: "2026-04-28",
    readingTime: "3 menit",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const ingredients: Ingredient[] = [
  {
    id: "i1",
    name: "Agarwood (Oud)",
    letter: "A",
    benefit: "Aroma maskulin & menenangkan",
    description:
      "Resin kayu gaharu yang memberikan aroma hangat, dalam, dan maskulin. Digunakan dalam parfum premium.",
    foundIn: ["Revered Oud Eau de Toilette"],
    icon: "TreePine",
  },
  {
    id: "i2",
    name: "Cactus Extract",
    letter: "C",
    benefit: "Hidrasi ringan tahan lama",
    description:
      "Ekstrak kaktus kaya air yang memberikan kelembapan ringan tanpa menyumbat pori, ideal untuk kulit berminyak.",
    foundIn: ["Skin Energizing Moisturizer"],
    icon: "Sprout",
  },
  {
    id: "i3",
    name: "Comfrey Allantoin",
    letter: "C",
    benefit: "Menenangkan kulit sensitif",
    description:
      "Senyawa alami yang menenangkan dan mempercepat pemulihan kulit yang teriritasi atau sensitif.",
    foundIn: ["Soothing Antiperspirant Deodorant"],
    icon: "Leaf",
  },
  {
    id: "i4",
    name: "French Cypress",
    letter: "F",
    benefit: "Kontrol minyak 12 jam",
    description:
      "Ekstrak pohon cypress Prancis yang efektif mengurangi minyak berlebih pada wajah hingga 12 jam.",
    foundIn: ["Oil Control & Acne Care Face Wash"],
    icon: "TreePine",
  },
  {
    id: "i5",
    name: "Mediterranean Sage",
    letter: "M",
    benefit: "Perawatan jerawat",
    description:
      "Daun sage Mediterania yang membantu mengurangi dan mencegah munculnya jerawat baru sekaligus meredakan kemerahan.",
    foundIn: ["Oil Control & Acne Care Face Wash"],
    icon: "Sparkles",
  },
  {
    id: "i6",
    name: "Moroccan Mint",
    letter: "M",
    benefit: "Menyegarkan kulit kusam",
    description:
      "Ekstrak mint Maroko yang memberikan sensasi segar dan menghidupkan kembali kulit yang terlihat lelah.",
    foundIn: ["Skin Energizing & Brightening Face Wash"],
    icon: "Leaf",
  },
  {
    id: "i7",
    name: "Niacinamide",
    letter: "N",
    benefit: "Mencerahkan & memperkuat barrier",
    description:
      "Vitamin B3 yang mengontrol minyak, memperkecil pori, mencerahkan kulit kusam, dan memperkuat skin barrier.",
    foundIn: ["Triple Protection Sunscreen SPF 35"],
    icon: "Sparkles",
  },
  {
    id: "i8",
    name: "Zinc Oxide",
    letter: "Z",
    benefit: "Perlindungan UV broad-spectrum",
    description:
      "Mineral yang memberikan perlindungan menyeluruh terhadap sinar UVA dan UVB tanpa white cast berlebih.",
    foundIn: ["Triple Protection Sunscreen SPF 35"],
    icon: "Shield",
  },
];

export const storeLocations: StoreLocation[] = [
  {
    id: "s1",
    name: "KAHF Official Store - Jakarta",
    type: "official_store",
    address: "Jl. Jenderal Sudirman Kav. 52-53, SCBD",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    mapsUrl: "https://maps.google.com/?q=SCBD+Jakarta",
  },
  {
    id: "s2",
    name: "Watsons - Grand Indonesia",
    type: "retail_partner",
    address: "Grand Indonesia Mall, Lt. 3",
    city: "Jakarta Pusat",
    province: "DKI Jakarta",
    mapsUrl: "https://maps.google.com/?q=Grand+Indonesia",
  },
  {
    id: "s3",
    name: "Guardian - Paris Van Java",
    type: "retail_partner",
    address: "Paris Van Java Mall, Lt. 1",
    city: "Bandung",
    province: "Jawa Barat",
    mapsUrl: "https://maps.google.com/?q=Paris+Van+Java+Bandung",
  },
  {
    id: "s4",
    name: "KAHF Store - Surabaya",
    type: "official_store",
    address: "Tunjungan Plaza 6, Lt. 2",
    city: "Surabaya",
    province: "Jawa Timur",
    mapsUrl: "https://maps.google.com/?q=Tunjungan+Plaza+Surabaya",
  },
  {
    id: "s5",
    name: "Watsons - Mall Panakkukang",
    type: "retail_partner",
    address: "Mall Panakkukang, Lt. 1",
    city: "Makassar",
    province: "Sulawesi Selatan",
    mapsUrl: "https://maps.google.com/?q=Mall+Panakkukang+Makassar",
  },
];

export const onlineStores = [
  { name: "Shopee", url: "https://shopee.co.id/kahf.official", color: "#EE4D2D" },
  { name: "Tokopedia", url: "https://tokopedia.com/kahf", color: "#03AC0E" },
  { name: "Lazada", url: "https://lazada.co.id/shop/kahf", color: "#0F146D" },
  { name: "Website Resmi", url: "https://kahfeveryday.com", color: "#0f5238" },
];

export const faqItems: FaqItem[] = [
  {
    question: "Apakah produk KAHF benar-benar halal?",
    answer:
      "Ya. Seluruh produk KAHF telah tersertifikasi halal oleh MUI dan diformulasikan tanpa bahan yang meragukan. Kami berkomitmen pada nilai-nilai clean dan halal beauty.",
    category: "Produk",
  },
  {
    question: "Apakah produk KAHF cocok untuk kulit sensitif?",
    answer:
      "Sebagian besar produk KAHF telah teruji secara dermatologis dan dirancang lembut untuk kulit. Untuk kulit sangat sensitif, kami sarankan melakukan patch test terlebih dahulu atau gunakan fitur AI Face Analysis untuk rekomendasi yang dipersonalisasi.",
    category: "Produk",
  },
  {
    question: "Bagaimana cara kerja AI Face Analysis?",
    answer:
      "Anda cukup mengambil foto wajah melalui kamera atau mengunggah foto. Teknologi AI kami akan menganalisis kondisi kulit Anda — jenis kulit, tingkat jerawat, dan masalah kulit lainnya — lalu memberikan rekomendasi produk dan rutinitas yang sesuai.",
    category: "AI Analysis",
  },
  {
    question: "Apakah foto wajah saya disimpan?",
    answer:
      "Tidak. Privasi Anda adalah prioritas kami. Gambar wajah diproses untuk analisis dan langsung dihapus setelahnya. Kami tidak menyimpan foto Anda di server tanpa izin eksplisit.",
    category: "AI Analysis",
  },
  {
    question: "Di mana saya bisa membeli produk KAHF?",
    answer:
      "Produk KAHF tersedia di toko resmi kami di Shopee, Tokopedia, dan Lazada, serta di gerai retail seperti Watsons dan Guardian. Lihat halaman Store Locator untuk lokasi terdekat.",
    category: "Pembelian",
  },
  {
    question: "Berapa lama pengiriman pesanan?",
    answer:
      "Waktu pengiriman tergantung lokasi dan platform e-commerce yang Anda gunakan. Umumnya pesanan tiba dalam 2-5 hari kerja untuk wilayah Jabodetabek.",
    category: "Pembelian",
  },
];
