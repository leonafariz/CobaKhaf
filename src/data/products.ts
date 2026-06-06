import type { Product } from "@/lib/types";

const IMG = {
  faceWash:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDSON_dNg4LvDnO2nYg50y9a8NlB3mUYtwHtdncORZ6uguuB23fViLmOqqAdT8gGZbsiL8rWcXUAFByFnmi4fyBAvIBZkOYU399JXFk4nIzJR65crV65G1f4TdX25vd_w1CAMfR2PARchxDuQ6LYMOTMQ34j5CLZAlIFy8B4GirKql9SkQtN6Q7kDKDayOwA4rA80oo_pjY3MgVudqPBEQd7NTho96ppXncYzzshV_G1xuI_36rVFhoc1QdrjVLVNNpZbLqtkT5X30",
  faceWash2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBU4IbB8E3WdfpLXooWGSP7CDgmgr8Wxbqdx2jnc1gi3HWshP-ybvgXR9Gw7KAuRcpByANsBgv3UPqAdLDbODFMHZuWggW5FyaS3VvVC7GE1iv0WcFllLRkycrUravITduKKPugo-jiZRTG1oL8iNnYCEuJ5yXh7QS6pe5fkjJu7_mNIUZjLfTNd5d_Cy0fP8eMjlN32_wg_aFhNV5YD3NjwkGZ-W0PuK6ur1Fu5w5thh5TriCgo0GgLL87J-tvyDCmKU4BLd1M7h8",
  moisturizer:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCbskz0yichq9vI60dzo2oCZiIUfkSu7hdAdMd5v5noxObSiTSRSjo2TjqDQxbmGTDFzKc4-wkeks2_GmXpmdQQQzvFbYyUcg6H-rBZyLxvieAL3Dt8IOA7Pg4sYFhRVoolRmU7zhar2o00S5laHuD2FB4p5yN9gWblcbVRLmW4pRZ-DBPSXsNwzPH5qBXWqqK3TmYbnt02EO9MjVmQKAmT2ftKp2xI5Ursq6k1xWVvtmr5cCfxctPCEdvQQGf_GPOxhVwJKBbX9J8",
  fragrance:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhMEcLrAtaKJYaI_Nu1MtBfT0KZBy8EYwwGQzsvaSY9DCQOgg3q73evcGd5j2MbPn3PBdo5Io3VYIzF8pm3zsBIkCK3FLk7n_0IfJ7N7GEHQ_VEZ7DI0YiVhlKyHxcw3t2NukT9G2uEp23IIrQIAd73u8U_E-DhHDeEYjfoHoYKbVZOX2WSKhWKhAY3dAmsr-jInCc5MBHe91Mo0fEonajZ2pV8Mm6MLzFg0TB9w2TjXH1zccoCoQwEQ0CkmkH2cPdMnvskoA4-EI",
  deodorant:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBbPRasjZZl3I1uK6Xydp1XkLWG685g8_MAbZEtJqX4x2kIvP4tyH5ad54GkXzSJrJRpDw0GA2sxUCmD0qJNxv9uXS9S6SGJ8fkQbteSL4JtcywgxsgAHFy0iE7Ks05mpq5hBPbuBiLk4ShI_XIXK-zhF7wARyszL_xCMzQkz1aD0DbsLnSSG6XLTtGHQtXwzB5Vy4JPbNWbvSqobsvpeqgrBQc0UqQfPFn09x7PtJPRGlXL7xhnhV7fN9QYitgirieEtps-tf5Pf8",
  texture:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDbADjhs_nJq7JK5tfxSFpjtzTi2GaUWL3iPHy6bwL8yBUcu4lynaw5ebiF5zdoBlqOux54mdDiDbbpchHXkFVdM_B3N7DiPamrizTAeoVJMtapRwxDnB1vwRQDsSddzEnpI1NkUmOef5TzYm77EPI_7TJZ23zu6XywC6_bq53xvwwjDwqEdv2hsi1DGZuc5nBld0kC4NlV_FCpI1IRrwwb0SpMda7v7EV07shuL-Shpn3g8LZCno9xzBgCAtjffZUlGPIdqhoDtzg",
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Oil Control & Acne Care Face Wash",
    slug: "oil-control-acne-care-face-wash",
    tagline: "Fresh, clean start to your day",
    shortDescription:
      "Formulated with Mediterranean Sage and French Cypress to combat excess oil and acne.",
    description:
      "Formulated with Mediterranean Sage and French Cypress to reduce excess oil for 12 hours and care for acne-prone skin. A fresh, clean start to your day that deeply cleanses without stripping your skin's natural moisture barrier.",
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
    howToUse: [
      "Wet face with water.",
      "Apply a small amount of face wash onto hands.",
      "Lather and gently massage onto face.",
      "Rinse thoroughly and pat dry.",
    ],
    images: [
      { url: IMG.faceWash2, alt: "Oil Control Face Wash", isPrimary: true },
      { url: IMG.texture, alt: "Face Wash texture" },
      { url: IMG.faceWash, alt: "Face Wash lifestyle" },
    ],
    ingredients: [
      {
        name: "Mediterranean Sage",
        function:
          "Reduces and prevents the appearance of new acne while soothing redness.",
        isKey: true,
        icon: "Sparkles",
      },
      {
        name: "French Cypress",
        function: "Effectively reduces excess oil on the face for up to 12 hours.",
        isKey: true,
        icon: "TreePine",
      },
    ],
    companionProductSlugs: ["triple-protection-sunscreen", "energizing-moisturizer"],
  },
  {
    id: "p2",
    name: "Skin Energizing & Brightening Face Wash",
    slug: "skin-energizing-brightening-face-wash",
    tagline: "Revitalize dull skin",
    shortDescription:
      "Moroccan Mint and Mediterranean Grapefruit extract to revitalize dull skin.",
    description:
      "Moroccan Mint and Mediterranean Grapefruit extract work together to revitalize dull, tired skin. This energizing formula brightens your complexion while delivering a refreshing burst of cleanliness.",
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
    howToUse: [
      "Wet face with lukewarm water.",
      "Apply a small amount onto palms.",
      "Massage gently in circular motions.",
      "Rinse and pat dry.",
    ],
    images: [{ url: IMG.faceWash, alt: "Energizing Face Wash", isPrimary: true }],
    ingredients: [
      {
        name: "Moroccan Mint",
        function: "Energizes and refreshes tired-looking skin.",
        isKey: true,
        icon: "Leaf",
      },
      {
        name: "Mediterranean Grapefruit",
        function: "Brightens dull skin and evens out skin tone.",
        isKey: true,
        icon: "Citrus",
      },
    ],
    companionProductSlugs: ["oil-control-acne-care-face-wash"],
  },
  {
    id: "p3",
    name: "Revered Oud Eau de Toilette",
    slug: "revered-oud-eau-de-toilette",
    tagline: "A dignified blend",
    shortDescription:
      "A dignified blend of Rose, Lemon, and masculine Agarwood notes.",
    description:
      "A dignified blend of Rose, Lemon, and masculine Agarwood (Oud) notes that command quiet confidence. This long-lasting Eau de Toilette is crafted for the modern man who values heritage and refinement.",
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
    howToUse: [
      "Spray onto pulse points (wrists, neck).",
      "Hold bottle 15cm from skin.",
      "Do not rub after applying.",
    ],
    images: [{ url: IMG.fragrance, alt: "Revered Oud EDT", isPrimary: true }],
    ingredients: [
      {
        name: "Agarwood (Oud)",
        function: "Provides a deep, warm, and masculine base note.",
        isKey: true,
        icon: "TreePine",
      },
      {
        name: "Damask Rose",
        function: "Adds a refined floral heart to the fragrance.",
        isKey: false,
        icon: "Flower",
      },
    ],
  },
  {
    id: "p4",
    name: "Soothing Antiperspirant Deodorant",
    slug: "soothing-antiperspirant-deodorant",
    tagline: "48H natural protection",
    shortDescription:
      "Natural antibacterial protection with Comfrey Allantoin to soothe the skin.",
    description:
      "Natural antibacterial protection with Comfrey Allantoin to soothe the skin while providing 48 hours of reliable freshness. Gentle enough for sensitive underarm skin, tough on odor.",
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
    howToUse: [
      "Ensure underarm area is clean and dry.",
      "Apply an even layer.",
      "Allow to dry before dressing.",
    ],
    images: [{ url: IMG.deodorant, alt: "Soothing Deodorant", isPrimary: true }],
    ingredients: [
      {
        name: "Comfrey Allantoin",
        function: "Soothes and calms sensitive underarm skin.",
        isKey: true,
        icon: "Leaf",
      },
    ],
  },
  {
    id: "p5",
    name: "Triple Protection Sunscreen SPF 35",
    slug: "triple-protection-sunscreen",
    tagline: "Daily UV defense",
    shortDescription:
      "Lightweight SPF 35 PA+++ with triple protection against UV, pollution, and blue light.",
    description:
      "A lightweight, non-greasy sunscreen offering SPF 35 PA+++ triple protection against UV rays, pollution, and blue light. Absorbs quickly with no white cast, perfect for daily use under the harsh Indonesian sun.",
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
    howToUse: [
      "Apply as the last step of your morning routine.",
      "Use two finger-lengths of product.",
      "Reapply every 2-3 hours when outdoors.",
    ],
    images: [{ url: IMG.moisturizer, alt: "Triple Protection Sunscreen", isPrimary: true }],
    ingredients: [
      {
        name: "Zinc Oxide",
        function: "Provides broad-spectrum UV protection.",
        isKey: true,
        icon: "Shield",
      },
      {
        name: "Niacinamide",
        function: "Helps brighten and strengthen the skin barrier.",
        isKey: true,
        icon: "Sparkles",
      },
    ],
    companionProductSlugs: ["oil-control-acne-care-face-wash", "energizing-moisturizer"],
  },
  {
    id: "p6",
    name: "Skin Energizing Moisturizer",
    slug: "energizing-moisturizer",
    tagline: "All-day hydration",
    shortDescription:
      "Oil-free gel moisturizer with Cactus Extract for 24-hour lightweight hydration.",
    description:
      "An oil-free gel moisturizer infused with Cactus Extract that delivers 24-hour lightweight hydration without clogging pores. Keeps your skin balanced, energized, and matte throughout the day.",
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
    howToUse: [
      "Apply after cleansing and toning.",
      "Take a pea-sized amount.",
      "Spread evenly across the face.",
    ],
    images: [{ url: IMG.moisturizer, alt: "Energizing Moisturizer", isPrimary: true }],
    ingredients: [
      {
        name: "Cactus Extract",
        function: "Provides long-lasting, lightweight hydration.",
        isKey: true,
        icon: "Sprout",
      },
    ],
    companionProductSlugs: ["triple-protection-sunscreen"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller);
}
