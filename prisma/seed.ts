import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is required to run the seed script.");
  process.exit(1);
}

const adapter = new PrismaPg({ connectionString });
const db = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await db.faqItem.deleteMany();
  await db.onlineStore.deleteMany();
  await db.storeLocation.deleteMany();
  await db.ingredient.deleteMany();
  await db.blogPost.deleteMany();
  await db.productIngredient.deleteMany();
  await db.productImage.deleteMany();
  await db.product.deleteMany();

  // ─── Products ────────────────────────────────────────────────────────────

  const IMG = {
    faceWash:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBU4IbB8E3WdfpLXooWGSP7CDgmgr8Wxbqdx2jnc1gi3HWshP-ybvgXR9Gw7KAuRcpByANsBgv3UPqAdLDbODFMHZuWggW5FyaS3VvVC7GE1iv0WcFllLRkycrUravITduKKPugo-jiZRTG1oL8iNnYCEuJ5yXh7QS6pe5fkjJu7_mNIUZjLfTNd5d_Cy0fP8eMjlN32_wg_aFhNV5YD3NjwkGZ-W0PuK6ur1Fu5w5thh5TriCgo0GgLL87J-tvyDCmKU4BLd1M7h8",
    faceWash2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSON_dNg4LvDnO2nYg50y9a8NlB3mUYtwHtdncORZ6uguuB23fViLmOqqAdT8gGZbsiL8rWcXUAFByFnmi4fyBAvIBZkOYU399JXFk4nIzJR65crV65G1f4TdX25vd_w1CAMfR2PARchxDuQ6LYMOTMQ34j5CLZAlIFy8B4GirKql9SkQtN6Q7kDKDayOwA4rA80oo_pjY3MgVudqPBEQd7NTho96ppXncYzzshV_G1xuI_36rVFhoc1QdrjVLVNNpZbLqtkT5X30",
    moisturizer:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbskz0yichq9vI60dzo2oCZiIUfkSu7hdAdMd5v5noxObSiTSRSjo2TjqDQxbmGTDFzKc4-wkeks2_GmXpmdQQQzvFbYyUcg6H-rBZyLxvieAL3Dt8IOA7Pg4sYFhRVoolRmU7zhar2o00S5laHuD2FB4p5yN9gWblcbVRLmW4pRZ-DBPSXsNwzPH5qBXWqqK3TmYbnt02EO9MjVmQKAmT2ftKp2xI5Ursq6k1xWVvtmr5cCfxctPCEdvQQGf_GPOxhVwJKBbX9J8",
    fragrance:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhMEcLrAtaKJYaI_Nu1MtBfT0KZBy8EYwwGQzsvaSY9DCQOgg3q73evcGd5j2MbPn3PBdo5Io3VYIzF8pm3zsBIkCK3FLk7n_0IfJ7N7GEHQ_VEZ7DI0YiVhlKyHxcw3t2NukT9G2uEp23IIrQIAd73u8U_E-DhHDeEYjfoHoYKbVZOX2WSKhWKhAY3dAmsr-jInCc5MBHe91Mo0fEonajZ2pV8Mm6MLzFg0TB9w2TjXH1zccoCoQwEQ0CkmkH2cPdMnvskoA4-EI",
    deodorant:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbPRasjZZl3I1uK6Xydp1XkLWG685g8_MAbZEtJqX4x2kIvP4tyH5ad54GkXzSJrJRpDw0GA2sxUCmD0qJNxv9uXS9S6SGJ8fkQbteSL4JtcywgxsgAHFy0iE7Ks05mpq5hBPbuBiLk4ShI_XIXK-zhF7wARyszL_xCMzQkz1aD0DbsLnSSG6XLTtGHQtXwzB5Vy4JPbNWbvSqobsvpeqgrBQc0UqQfPFn09x7PtJPRGlXL7xhnhV7fN9QYitgirieEtps-tf5Pf8",
    texture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbADjhs_nJq7JK5tfxSFpjtzTi2GaUWL3iPHy6bwL8yBUcu4lynaw5ebiF5zdoBlqOux54mdDiDbbpchHXkFVdM_B3N7DiPamrizTAeoVJMtapRwxDnB1vwRQDsSddzEnpI1NkUmOef5TzYm77EPI_7TJZ23zu6XywC6_bq53xvwwjDwqEdv2hsi1DGZuc5nBld0kC4NlV_FCpI1IRrwwb0SpMda7v7EV07shuL-Shpn3g8LZCno9xzBgCAtjffZUlGPIdqhoDtzg",
    blog1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_y8advNDJfn0Fckr6wW7lWUoreBsnfcgGXgXGFunSete7sGDXCK86_mBGzyukzCJjF_mG6vjCNkAw96nSO9kA_lHaiYxf9iBIlXNuYyHSyrJvll1AYgefDibpDuGIHEQdq3XXEtGqkiH4zTIg2Sj1_mRIaBiJCG5wgWrjyBoQWk8BXgDO4nAtKSkL4rIvgdum1heL6Uyy1b0G7fpBomG7eolOsKkhr8X911wkjoBUQLnbXHjTslzFdS9LCrPof5a9aqIlzw-lbTA",
    blog2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkLXyeMRGAEzE8w1A35_t1hOogS6aBKn2C1rSAJx_hFMkDRBz4AJJr9Br7641K4vttm5vTs5zHvlvkSGaP-WNpli1KK3M6S6eYS1cuYBHOg9imZlgJdRlhTPfGadtXfKOqSptDEHu-whabIQwDQV8eetoVOGkRTtoUdAeHsqYfeaFTZsk5G0_l2gUenRTb4k9vhgq4NUh6MY5JNGhiDYqczBzjC9Zzdc03C9egaH7j_iAM6Fpx8b7RZucd_5NaEQy31_NGq2NtbKs",
    blog3:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ttg9YhXxNx-mN7Uz2PZGLQ3gzhKB9rpDcK0GF6vSTXCDxeMQs0q0pgiT0mYRma8kWgE9WT65gvkdmi59ru9g0Zto2Zaxi7i4kiS1AIq2R6_OCAJocUHZH89gZJyL4etuBPNiAGQbWqPm5IevQnl5ANOse-f4kflCGr3DoLEQDH1aHcCaEgA9Ze9usqAU6FeOpFddXf9Bw-LInqUmwyQgU0qOtj-pqw5LOQl5CUl7nojhiQ5y9pL4gL6vYc6JST7vTPSGWO_fJ2I",
  };

  const products = [
    {
      name: "Oil Control & Acne Care Face Wash",
      slug: "oil-control-acne-care-face-wash",
      tagline: "Fresh, clean start to your day",
      shortDescription: "Formulated with Mediterranean Sage and French Cypress to combat excess oil and acne.",
      description: "Formulated with Mediterranean Sage and French Cypress to reduce excess oil for 12 hours and care for acne-prone skin. A fresh, clean start to your day that deeply cleanses without stripping your skin's natural moisture barrier.",
      category: "face_wash",
      categoryLabel: "Face Wash",
      skinTypes: ["oily", "combination"],
      skinConcerns: ["acne", "oily"],
      shopeeLink: "https://shopee.co.id/kahf.official/oil-control-acne-care",
      priceRange: "Rp 39.500",
      rating: 4.5,
      reviewCount: 1280,
      isBestseller: true,
      badges: ["HALAL", "ACNE CARE"],
      benefits: ["12-Hour Oil Control", "Deep Cleansing Formula", "Non-drying feel"],
      howToUse: ["Wet face with water.", "Apply a small amount onto hands.", "Lather and gently massage onto face.", "Rinse thoroughly and pat dry."],
      companionProductSlugs: ["triple-protection-sunscreen", "energizing-moisturizer"],
      images: [
        { url: IMG.faceWash2, alt: "Oil Control Face Wash", isPrimary: true },
        { url: IMG.texture, alt: "Face Wash texture", isPrimary: false },
        { url: IMG.faceWash, alt: "Face Wash lifestyle", isPrimary: false },
      ],
      ingredients: [
        { name: "Mediterranean Sage", function: "Reduces and prevents acne while soothing redness.", isKey: true, icon: "Sparkles" },
        { name: "French Cypress", function: "Reduces excess oil for up to 12 hours.", isKey: true, icon: "TreePine" },
      ],
    },
    {
      name: "Skin Energizing & Brightening Face Wash",
      slug: "skin-energizing-brightening-face-wash",
      tagline: "Revitalize dull skin",
      shortDescription: "Moroccan Mint and Mediterranean Grapefruit extract to revitalize dull skin.",
      description: "Moroccan Mint and Mediterranean Grapefruit extract work together to revitalize dull, tired skin. This energizing formula brightens your complexion while delivering a refreshing burst of cleanliness.",
      category: "face_wash",
      categoryLabel: "Face Wash",
      skinTypes: ["normal", "dry", "combination"],
      skinConcerns: ["dullness"],
      shopeeLink: "https://shopee.co.id/kahf.official/energizing-brightening",
      priceRange: "Rp 39.500",
      rating: 5,
      reviewCount: 980,
      isBestseller: true,
      badges: ["HALAL", "HYDRATION"],
      benefits: ["Brightening Formula", "Energizing Mint", "Daily Refresh"],
      howToUse: ["Wet face with lukewarm water.", "Apply a small amount onto palms.", "Massage gently in circular motions.", "Rinse and pat dry."],
      companionProductSlugs: ["oil-control-acne-care-face-wash"],
      images: [{ url: IMG.faceWash, alt: "Energizing Face Wash", isPrimary: true }],
      ingredients: [
        { name: "Moroccan Mint", function: "Energizes and refreshes tired-looking skin.", isKey: true, icon: "Leaf" },
        { name: "Mediterranean Grapefruit", function: "Brightens dull skin and evens out skin tone.", isKey: true, icon: "Citrus" },
      ],
    },
    {
      name: "Revered Oud Eau de Toilette",
      slug: "revered-oud-eau-de-toilette",
      tagline: "A dignified blend",
      shortDescription: "A dignified blend of Rose, Lemon, and masculine Agarwood notes.",
      description: "A dignified blend of Rose, Lemon, and masculine Agarwood (Oud) notes that command quiet confidence. This long-lasting Eau de Toilette is crafted for the modern man who values heritage and refinement.",
      category: "fragrance",
      categoryLabel: "Fragrance",
      skinTypes: ["normal", "oily", "dry", "combination", "sensitive"],
      skinConcerns: [],
      shopeeLink: "https://shopee.co.id/kahf.official/revered-oud-edt",
      priceRange: "Rp 180.000",
      rating: 4,
      reviewCount: 540,
      isBestseller: false,
      badges: ["HALAL", "EDT"],
      benefits: ["Long-lasting Scent", "Premium Agarwood", "Halal Certified"],
      howToUse: ["Spray onto pulse points (wrists, neck).", "Hold bottle 15cm from skin.", "Do not rub after applying."],
      companionProductSlugs: [],
      images: [{ url: IMG.fragrance, alt: "Revered Oud EDT", isPrimary: true }],
      ingredients: [
        { name: "Agarwood (Oud)", function: "Provides a deep, warm, and masculine base note.", isKey: true, icon: "TreePine" },
        { name: "Damask Rose", function: "Adds a refined floral heart to the fragrance.", isKey: false, icon: "Flower" },
      ],
    },
    {
      name: "Soothing Antiperspirant Deodorant",
      slug: "soothing-antiperspirant-deodorant",
      tagline: "48H natural protection",
      shortDescription: "Natural antibacterial protection with Comfrey Allantoin to soothe the skin.",
      description: "Natural antibacterial protection with Comfrey Allantoin to soothe the skin while providing 48 hours of reliable freshness. Gentle enough for sensitive underarm skin, tough on odor.",
      category: "deodorant",
      categoryLabel: "Deodorant",
      skinTypes: ["normal", "sensitive"],
      skinConcerns: ["sensitive"],
      shopeeLink: "https://shopee.co.id/kahf.official/soothing-deodorant",
      priceRange: "Rp 25.000",
      rating: 4.5,
      reviewCount: 2100,
      isBestseller: true,
      badges: ["HALAL", "48H PROTECTION"],
      benefits: ["48-Hour Protection", "Antibacterial", "Soothes Skin"],
      howToUse: ["Ensure underarm area is clean and dry.", "Apply an even layer.", "Allow to dry before dressing."],
      companionProductSlugs: [],
      images: [{ url: IMG.deodorant, alt: "Soothing Deodorant", isPrimary: true }],
      ingredients: [
        { name: "Comfrey Allantoin", function: "Soothes and calms sensitive underarm skin.", isKey: true, icon: "Leaf" },
      ],
    },
    {
      name: "Triple Protection Sunscreen SPF 35",
      slug: "triple-protection-sunscreen",
      tagline: "Daily UV defense",
      shortDescription: "Lightweight SPF 35 PA+++ with triple protection against UV, pollution, and blue light.",
      description: "A lightweight, non-greasy sunscreen offering SPF 35 PA+++ triple protection against UV rays, pollution, and blue light. Absorbs quickly with no white cast, perfect for daily use under the harsh Indonesian sun.",
      category: "sunscreen",
      categoryLabel: "Sunscreen",
      skinTypes: ["normal", "oily", "dry", "combination", "sensitive"],
      skinConcerns: ["aging", "dullness"],
      shopeeLink: "https://shopee.co.id/kahf.official/triple-protection-sunscreen",
      priceRange: "Rp 45.000",
      rating: 5,
      reviewCount: 1650,
      isBestseller: true,
      badges: ["HALAL", "SPF 35 PA+++"],
      benefits: ["No White Cast", "Anti-Pollution", "Lightweight"],
      howToUse: ["Apply as the last step of your morning routine.", "Use two finger-lengths of product.", "Reapply every 2-3 hours when outdoors."],
      companionProductSlugs: ["oil-control-acne-care-face-wash", "energizing-moisturizer"],
      images: [{ url: IMG.moisturizer, alt: "Triple Protection Sunscreen", isPrimary: true }],
      ingredients: [
        { name: "Zinc Oxide", function: "Provides broad-spectrum UV protection.", isKey: true, icon: "Shield" },
        { name: "Niacinamide", function: "Helps brighten and strengthen the skin barrier.", isKey: true, icon: "Sparkles" },
      ],
    },
    {
      name: "Skin Energizing Moisturizer",
      slug: "energizing-moisturizer",
      tagline: "All-day hydration",
      shortDescription: "Oil-free gel moisturizer with Cactus Extract for 24-hour lightweight hydration.",
      description: "An oil-free gel moisturizer infused with Cactus Extract that delivers 24-hour lightweight hydration without clogging pores. Keeps your skin balanced, energized, and matte throughout the day.",
      category: "moisturizer",
      categoryLabel: "Moisturizer",
      skinTypes: ["oily", "combination", "normal"],
      skinConcerns: ["oily", "dry"],
      shopeeLink: "https://shopee.co.id/kahf.official/energizing-moisturizer",
      priceRange: "Rp 42.000",
      rating: 4.5,
      reviewCount: 870,
      isBestseller: false,
      badges: ["HALAL", "OIL-FREE"],
      benefits: ["24H Hydration", "Non-comedogenic", "Matte Finish"],
      howToUse: ["Apply after cleansing and toning.", "Take a pea-sized amount.", "Spread evenly across the face."],
      companionProductSlugs: ["triple-protection-sunscreen"],
      images: [{ url: IMG.moisturizer, alt: "Energizing Moisturizer", isPrimary: true }],
      ingredients: [
        { name: "Cactus Extract", function: "Provides long-lasting, lightweight hydration.", isKey: true, icon: "Sprout" },
      ],
    },
  ];

  for (const p of products) {
    const { images, ingredients, ...data } = p;
    await db.product.create({
      data: {
        ...data,
        images: { create: images },
        ingredients: { create: ingredients },
      },
    });
  }
  console.log(`  ✓ ${products.length} products`);

  // ─── Blog Posts ─────────────────────────────────────────────────────────

  const blogPosts = [
    {
      title: "Panduan Skincare Pria untuk Pemula: Mulai dari Mana?",
      slug: "panduan-skincare-pria-pemula",
      excerpt: "Baru mengenal skincare? Pelajari 3 langkah dasar perawatan kulit pria yang efektif dan mudah diikuti setiap hari.",
      content: `Memulai rutinitas skincare tidak harus rumit. Untuk pria yang baru memulai, cukup tiga langkah dasar: membersihkan (cleansing), melembapkan (moisturizing), dan melindungi (sun protection).

Langkah pertama adalah memilih face wash yang sesuai dengan jenis kulit Anda. Jika kulit Anda cenderung berminyak, pilih pembersih dengan kandungan oil control seperti Mediterranean Sage.

Langkah kedua, gunakan pelembap ringan setiap pagi dan malam. Jangan lewatkan langkah ini meski kulit Anda berminyak — hidrasi tetap penting.

Langkah ketiga, dan yang paling sering dilupakan: sunscreen. Gunakan SPF minimal 30 setiap pagi untuk melindungi kulit dari sinar UV yang menjadi penyebab utama penuaan dini.`,
      coverImage: IMG.blog1,
      coverAlt: "Modern man applying skincare in a bright minimalist bathroom",
      authorName: "Tim KAHF",
      category: "tips",
      tags: ["pemula", "rutinitas", "dasar"],
      publishedAt: "2026-05-20",
      readingTime: "5 menit",
    },
    {
      title: "Mengenal Niacinamide: Bahan Ajaib untuk Kulit Pria",
      slug: "mengenal-niacinamide",
      excerpt: "Niacinamide jadi bahan andalan skincare modern. Apa manfaatnya untuk kulit pria dan bagaimana cara pakainya?",
      content: `Niacinamide, atau Vitamin B3, adalah salah satu bahan aktif paling serbaguna dalam dunia skincare. Bahan ini cocok untuk hampir semua jenis kulit dan jarang menimbulkan iritasi.

Manfaat utama niacinamide meliputi: mengontrol produksi minyak berlebih, memperkecil tampilan pori-pori, mencerahkan kulit kusam, dan memperkuat skin barrier.

Untuk pria dengan kulit berminyak dan rentan jerawat, niacinamide adalah pilihan yang sangat baik karena membantu menyeimbangkan sebum tanpa membuat kulit kering.`,
      coverImage: IMG.blog2,
      coverAlt: "Close-up of healthy male skin in clinical studio lighting",
      authorName: "dr. Aria Pratama",
      category: "ingredient",
      tags: ["niacinamide", "bahan aktif", "vitamin b3"],
      publishedAt: "2026-05-10",
      readingTime: "4 menit",
    },
    {
      title: "Rutinitas Pagi vs Malam: Apa Bedanya?",
      slug: "rutinitas-pagi-vs-malam",
      excerpt: "Kulit punya kebutuhan berbeda di pagi dan malam hari. Pahami perbedaannya agar perawatanmu lebih maksimal.",
      content: `Rutinitas pagi berfokus pada perlindungan. Setelah membersihkan wajah, gunakan pelembap dan akhiri dengan sunscreen untuk melindungi kulit sepanjang hari dari paparan sinar matahari dan polusi.

Rutinitas malam berfokus pada perbaikan. Saat tidur, kulit melakukan regenerasi sel. Inilah waktu terbaik untuk menggunakan produk dengan bahan aktif seperti serum dan pelembap yang lebih kaya.

Konsistensi adalah kunci. Lakukan kedua rutinitas ini setiap hari untuk hasil yang optimal.`,
      coverImage: IMG.blog3,
      coverAlt: "Misty cedar forest at dawn, masculine and revitalizing",
      authorName: "Tim KAHF",
      category: "routine",
      tags: ["rutinitas", "pagi", "malam"],
      publishedAt: "2026-04-28",
      readingTime: "3 menit",
    },
    {
      title: "Kulit Berminyak Bukan Berarti Tidak Perlu Pelembap",
      slug: "kulit-berminyak-tetap-butuh-pelembap",
      excerpt: "Banyak pria dengan kulit berminyak skip pelembap. Ternyata itu kebiasaan yang justru memperparah kondisi kulit.",
      content: `Salah satu mitos terbesar dalam skincare pria adalah: "Kulit saya sudah berminyak, ngapain pakai pelembap?" Justru sebaliknya — melewatkan pelembap adalah salah satu alasan mengapa kulit bisa semakin berminyak.

Ketika kulit kekurangan kelembapan, ia akan memproduksi lebih banyak sebum sebagai mekanisme kompensasi. Hasilnya: kulit semakin berminyak dan rentan berjerawat.

Solusinya adalah memilih pelembap yang tepat. Untuk kulit berminyak, pilih formula gel atau water-based yang ringan dan non-comedogenic, seperti Skin Energizing Moisturizer dari KAHF yang menggunakan Cactus Extract.`,
      coverImage: IMG.blog1,
      coverAlt: "Man checking skin in mirror after skincare routine",
      authorName: "Tim KAHF",
      category: "tips",
      tags: ["kulit berminyak", "pelembap", "mitos skincare"],
      publishedAt: "2026-04-15",
      readingTime: "4 menit",
    },
    {
      title: "Sunscreen untuk Pria: Panduan Lengkap SPF dan PA",
      slug: "panduan-sunscreen-pria",
      excerpt: "SPF 30? PA+++? Apa artinya? Panduan lengkap memilih sunscreen yang tepat untuk kebutuhan kulit pria Indonesia.",
      content: `Sunscreen adalah produk skincare yang paling sering diremehkan pria, padahal merupakan yang paling penting. Paparan sinar UV adalah penyebab utama penuaan kulit dini, hiperpigmentasi, dan bahkan kanker kulit.

SPF (Sun Protection Factor) mengukur perlindungan terhadap sinar UVB yang menyebabkan kulit terbakar. SPF 30 memblokir sekitar 97% sinar UVB, sementara SPF 50 memblokir 98%.

PA (Protection Grade of UVA) mengukur perlindungan terhadap sinar UVA yang menyebabkan penuaan kulit. Semakin banyak tanda (+), semakin kuat perlindungannya. PA+++ seperti yang ada di KAHF Triple Protection Sunscreen sudah sangat memadai untuk penggunaan sehari-hari.

Untuk iklim Indonesia yang panas dan lembap, pilih sunscreen dengan tekstur ringan yang tidak meninggalkan white cast dan tahan keringat.`,
      coverImage: IMG.blog2,
      coverAlt: "Man applying sunscreen outdoors in bright sunlight",
      authorName: "dr. Aria Pratama",
      category: "tips",
      tags: ["sunscreen", "spf", "pa", "uv protection"],
      publishedAt: "2026-04-01",
      readingTime: "6 menit",
    },
  ];

  await db.blogPost.createMany({ data: blogPosts });
  console.log(`  ✓ ${blogPosts.length} blog posts`);

  // ─── Ingredients ─────────────────────────────────────────────────────────

  const ingredients = [
    {
      name: "Agarwood (Oud)",
      letter: "A",
      benefit: "Aroma maskulin & menenangkan",
      description: "Resin kayu gaharu yang memberikan aroma hangat, dalam, dan maskulin. Digunakan dalam parfum premium dan dikenal sebagai 'emas cair' dunia wewangian.",
      foundIn: ["Revered Oud Eau de Toilette"],
      icon: "TreePine",
    },
    {
      name: "Cactus Extract",
      letter: "C",
      benefit: "Hidrasi ringan tahan lama",
      description: "Ekstrak kaktus kaya air yang memberikan kelembapan ringan tanpa menyumbat pori. Ideal untuk kulit berminyak yang tetap butuh hidrasi seimbang.",
      foundIn: ["Skin Energizing Moisturizer"],
      icon: "Sprout",
    },
    {
      name: "Comfrey Allantoin",
      letter: "C",
      benefit: "Menenangkan kulit sensitif",
      description: "Senyawa alami turunan tanaman comfrey yang menenangkan, mempercepat pemulihan, dan mengurangi iritasi pada kulit sensitif.",
      foundIn: ["Soothing Antiperspirant Deodorant"],
      icon: "Leaf",
    },
    {
      name: "French Cypress",
      letter: "F",
      benefit: "Kontrol minyak 12 jam",
      description: "Ekstrak pohon cypress Prancis yang efektif mengurangi minyak berlebih pada wajah hingga 12 jam tanpa membuat kulit terasa kering.",
      foundIn: ["Oil Control & Acne Care Face Wash"],
      icon: "TreePine",
    },
    {
      name: "Mediterranean Sage",
      letter: "M",
      benefit: "Perawatan jerawat",
      description: "Daun sage Mediterania yang membantu mengurangi dan mencegah munculnya jerawat baru sekaligus meredakan kemerahan dan inflamasi.",
      foundIn: ["Oil Control & Acne Care Face Wash"],
      icon: "Sparkles",
    },
    {
      name: "Moroccan Mint",
      letter: "M",
      benefit: "Menyegarkan kulit kusam",
      description: "Ekstrak mint Maroko yang memberikan sensasi segar, menghidupkan kembali kulit yang terlihat lelah, dan membantu mencerahkan kompleksi.",
      foundIn: ["Skin Energizing & Brightening Face Wash"],
      icon: "Leaf",
    },
    {
      name: "Niacinamide",
      letter: "N",
      benefit: "Mencerahkan & memperkuat barrier",
      description: "Vitamin B3 serbaguna yang mengontrol produksi minyak, memperkecil tampilan pori-pori, mencerahkan kulit kusam, dan memperkuat skin barrier.",
      foundIn: ["Triple Protection Sunscreen SPF 35"],
      icon: "Sparkles",
    },
    {
      name: "Zinc Oxide",
      letter: "Z",
      benefit: "Perlindungan UV broad-spectrum",
      description: "Mineral alami yang memberikan perlindungan menyeluruh terhadap sinar UVA dan UVB. Formula modern membuatnya nyaman dipakai tanpa white cast berlebih.",
      foundIn: ["Triple Protection Sunscreen SPF 35"],
      icon: "Shield",
    },
  ];

  await db.ingredient.createMany({ data: ingredients });
  console.log(`  ✓ ${ingredients.length} ingredients`);

  // ─── Store Locations ─────────────────────────────────────────────────────

  const storeLocations = [
    {
      name: "KAHF Official Store - Jakarta",
      type: "official_store",
      address: "Jl. Jenderal Sudirman Kav. 52-53, SCBD",
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
      mapsUrl: "https://maps.google.com/?q=SCBD+Jakarta",
      hours: "10.00–22.00 WIB",
    },
    {
      name: "Watsons - Grand Indonesia",
      type: "retail_partner",
      address: "Grand Indonesia Shopping Town, Lt. 3A",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
      mapsUrl: "https://maps.google.com/?q=Grand+Indonesia+Jakarta",
      hours: "10.00–22.00 WIB",
    },
    {
      name: "Guardian - Paris Van Java",
      type: "retail_partner",
      address: "Paris Van Java Mall, Lt. 1 Blok A",
      city: "Bandung",
      province: "Jawa Barat",
      mapsUrl: "https://maps.google.com/?q=Paris+Van+Java+Bandung",
      hours: "10.00–22.00 WIB",
    },
    {
      name: "KAHF Store - Surabaya",
      type: "official_store",
      address: "Tunjungan Plaza 6, Lt. 2",
      city: "Surabaya",
      province: "Jawa Timur",
      mapsUrl: "https://maps.google.com/?q=Tunjungan+Plaza+Surabaya",
      hours: "10.00–22.00 WIB",
    },
    {
      name: "Watsons - Mall Panakkukang",
      type: "retail_partner",
      address: "Mall Panakkukang, Lt. 1 No. 28",
      city: "Makassar",
      province: "Sulawesi Selatan",
      mapsUrl: "https://maps.google.com/?q=Mall+Panakkukang+Makassar",
      hours: "10.00–21.30 WIB",
    },
    {
      name: "Guardian - Summarecon Mall Serpong",
      type: "retail_partner",
      address: "Summarecon Mall Serpong, Lt. G",
      city: "Tangerang",
      province: "Banten",
      mapsUrl: "https://maps.google.com/?q=Summarecon+Mall+Serpong",
      hours: "10.00–22.00 WIB",
    },
    {
      name: "Watsons - Mal Bali Galeria",
      type: "retail_partner",
      address: "Mal Bali Galeria, Lt. 1",
      city: "Denpasar",
      province: "Bali",
      mapsUrl: "https://maps.google.com/?q=Mal+Bali+Galeria",
      hours: "10.00–22.00 WITA",
    },
  ];

  await db.storeLocation.createMany({ data: storeLocations });
  console.log(`  ✓ ${storeLocations.length} store locations`);

  // ─── Online Stores ────────────────────────────────────────────────────────

  const onlineStores = [
    { name: "Shopee", url: "https://shopee.co.id/kahf.official", color: "#EE4D2D" },
    { name: "Tokopedia", url: "https://www.tokopedia.com/kahf", color: "#03AC0E" },
    { name: "Lazada", url: "https://www.lazada.co.id/shop/kahf", color: "#0F146D" },
    { name: "Website Resmi", url: "https://kahfeveryday.com", color: "#0f5238" },
  ];

  await db.onlineStore.createMany({ data: onlineStores });
  console.log(`  ✓ ${onlineStores.length} online stores`);

  // ─── FAQ Items ────────────────────────────────────────────────────────────

  const faqItems = [
    {
      question: "Apakah produk KAHF benar-benar halal?",
      answer: "Ya. Seluruh produk KAHF telah tersertifikasi halal oleh MUI dan diformulasikan tanpa bahan yang meragukan. Kami berkomitmen pada nilai-nilai clean dan halal beauty.",
      category: "Produk",
      order: 1,
    },
    {
      question: "Apakah produk KAHF cocok untuk kulit sensitif?",
      answer: "Sebagian besar produk KAHF telah teruji secara dermatologis dan dirancang lembut untuk kulit. Untuk kulit sangat sensitif, kami sarankan melakukan patch test terlebih dahulu atau gunakan fitur AI Face Analysis untuk rekomendasi yang dipersonalisasi.",
      category: "Produk",
      order: 2,
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk melihat hasil?",
      answer: "Untuk produk perawatan dasar seperti face wash dan moisturizer, perbedaan dapat terasa dalam 1-2 minggu penggunaan rutin. Untuk produk dengan bahan aktif seperti serum, hasil optimal biasanya terlihat setelah 4-6 minggu.",
      category: "Produk",
      order: 3,
    },
    {
      question: "Bagaimana cara kerja AI Face Analysis?",
      answer: "Anda cukup mengambil foto wajah melalui kamera atau mengunggah foto. Teknologi AI kami akan menganalisis kondisi kulit Anda — jenis kulit, tingkat jerawat, dan masalah kulit lainnya — lalu memberikan rekomendasi produk dan rutinitas yang sesuai.",
      category: "AI Analysis",
      order: 1,
    },
    {
      question: "Apakah foto wajah saya disimpan?",
      answer: "Tidak. Privasi Anda adalah prioritas kami. Gambar wajah diproses untuk analisis dan langsung dihapus setelahnya. Kami tidak menyimpan foto Anda di server tanpa izin eksplisit.",
      category: "AI Analysis",
      order: 2,
    },
    {
      question: "Seberapa akurat AI Face Analysis?",
      answer: "AI kami menggunakan model vision canggih yang telah dilatih dengan ribuan data kulit. Hasilnya cukup akurat sebagai panduan awal, namun untuk diagnosis medis kulit, kami tetap menyarankan konsultasi dengan dokter kulit.",
      category: "AI Analysis",
      order: 3,
    },
    {
      question: "Di mana saya bisa membeli produk KAHF?",
      answer: "Produk KAHF tersedia di toko resmi kami di Shopee, Tokopedia, dan Lazada, serta di gerai retail seperti Watsons dan Guardian di berbagai kota. Lihat halaman Store Locator untuk lokasi terdekat.",
      category: "Pembelian",
      order: 1,
    },
    {
      question: "Berapa lama pengiriman pesanan?",
      answer: "Waktu pengiriman tergantung lokasi dan platform e-commerce yang Anda gunakan. Umumnya pesanan tiba dalam 2-5 hari kerja untuk wilayah Jabodetabek, dan 3-7 hari untuk luar Jawa.",
      category: "Pembelian",
      order: 2,
    },
    {
      question: "Apakah ada program loyalitas atau diskon?",
      answer: "Ya! Ikuti akun resmi KAHF di Shopee dan Tokopedia untuk mendapatkan voucher, flash sale, dan promo eksklusif. Anda juga bisa berlangganan newsletter kami untuk info promo terbaru.",
      category: "Pembelian",
      order: 3,
    },
  ];

  await db.faqItem.createMany({ data: faqItems });
  console.log(`  ✓ ${faqItems.length} FAQ items`);

  console.log("\nDatabase seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
