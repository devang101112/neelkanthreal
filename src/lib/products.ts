export type ProductSpec = [string, string];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  unit: string;
  moq: string;
  images: string[];
  specs: ProductSpec[];
  description: string;
  composition?: { name: string; value: string }[];
  testResults?: { sno: string; characteristics: string; spec: string; result: string }[];
  applications: string[];
  packaging: string[];
};

export const products: Product[] = [
  {
    slug: "bentonite-powder",
    name: "Bentonite Powder",
    tagline: "High-purity bentonite for drilling, foundry & industrial use.",
    price: "2,400.00",
    unit: "Metric Ton",
    moq: "42 Metric Ton",
    images: [
      "https://2.wlimg.com/product_images/bc-500/2024/4/9253049/bentonite-powder-1713243672-7358462.jpeg",
      "https://2.wlimg.com/product_images/bc-small/2024/4/9253049/bag_1--171-1713528337_7358462_2085233.jpg",
      "https://2.wlimg.com/product_images/bc-small/2024/4/9253049/bentonite--1713602976_7358462_2085908.jpeg",
    ],
    specs: [
      ["Business Type", "Manufacturer, Exporter, Supplier, Trader"],
      ["Material", "Bentonite Clay"],
      ["Form", "Powder"],
      ["Packaging Size", "25kg, 40kg, 50kg"],
      ["Packaging Type", "HDPE Bag, Jumbo Bag"],
      ["Country of Origin", "India"],
    ],
    description:
      "Our Bentonite Powder is processed from premium-grade bentonite clay sourced directly from our own mines in Rajasthan. Engineered for consistent viscosity, low fluid loss and high swelling capacity — making it the trusted choice for HDD drilling, piling, foundry, oil-well and grouting applications across India and abroad.",
    composition: [
      { name: "SiO₂", value: "51.09" },
      { name: "Al₂O₃", value: "19.33" },
      { name: "Fe₂O₃", value: "9.99" },
      { name: "CaO", value: "0.3" },
      { name: "Na₂O", value: "2.31" },
      { name: "K₂O", value: "0.72" },
      { name: "MgO", value: "1.63" },
      { name: "LOI", value: "11.11" },
    ],
    testResults: [
      { sno: "1", characteristics: "Physical Appearance", spec: "Grayish-yellow creamy powder, free from dirt", result: "Complies" },
      { sno: "2", characteristics: "Viscosity (Marsh Cone)", spec: "32–50", result: "45 Sec" },
      { sno: "3", characteristics: "pH Value", spec: "8–10", result: "9.13" },
      { sno: "4", characteristics: "Fluid Loss", spec: "NMT 30 ml", result: "20 ml" },
      { sno: "5", characteristics: "Density", spec: "1.03–1.10 gm/cc", result: "1.07 gm/cc" },
      { sno: "6", characteristics: "Liquid Limit", spec: "300–450", result: "447" },
      { sno: "7", characteristics: "Swelling Power (2 gm)", spec: "—", result: "29" },
      { sno: "8", characteristics: "Filter Cake", spec: "NMT 3 mm", result: "2.10 mm" },
      { sno: "9", characteristics: "Sand Content", spec: "Below 7%", result: "0.93%" },
    ],
    applications: ["HDD Drilling", "Piling", "Refineries", "Steel Plant", "Grouting", "Foundry Grade", "Fertilizer", "Oil Well", "Coal Briquetting"],
    packaging: ["25 kg HDPE Bag", "40 kg HDPE Bag", "50 kg HDPE Bag", "Jumbo Bag"],
  },
  {
    slug: "bentonite-lumps",
    name: "Bentonite Lumps",
    tagline: "Dried industrial-grade bentonite lumps, moisture-proof.",
    price: "1,200.00",
    unit: "Metric Ton",
    moq: "42 Metric Ton",
    images: [
      "https://2.wlimg.com/product_images/bc-500/2024/4/9253049/bentonite-lumps-1713243806-7358699.jpeg",
    ],
    specs: [
      ["Business Type", "Manufacturer, Exporter, Supplier, Trader"],
      ["Material", "Bentonite"],
      ["Form", "Lumps"],
      ["Style", "Dried"],
      ["Grade", "Industrial"],
      ["Feature", "Effective, Moisture Proof"],
      ["Packaging Size", "25kg, 40kg, 50kg"],
      ["Packaging Type", "HDPE Bag, Jumbo Bag"],
      ["Country of Origin", "India"],
    ],
    description:
      "Industrial-grade Bentonite Lumps in their natural dried form — ideal for buyers who prefer to process the material themselves. Sourced from our captive mines and quality-checked for moisture content, swelling and purity before despatch.",
    applications: ["Industrial Processing", "Re-grinding into powder", "Foundry", "Drilling Mud", "Civil Construction"],
    packaging: ["25 kg HDPE Bag", "40 kg HDPE Bag", "50 kg HDPE Bag", "Jumbo Bag"],
  },
  {
    slug: "fullers-earth-powder",
    name: "Fullers Earth Powder",
    tagline: "100% natural, eco-friendly clay powder for skin & personal care.",
    price: "3,500.00",
    unit: "Metric Ton",
    moq: "42 Metric Ton",
    images: [
      "https://2.wlimg.com/product_images/bc-500/2024/4/9253049/fullers-earth-powder-1713243719-7358704.jpeg",
    ],
    specs: [
      ["Business Type", "Manufacturer, Exporter, Supplier, Trader"],
      ["Material", "Earth Clay"],
      ["Form", "Powder"],
      ["Purity", "100%"],
      ["Feature", "Eco Friendly, Good Quality"],
      ["Packaging Size", "25kg, 40kg, 50kg"],
      ["Packaging Type", "HDPE Bag, Jumbo Bag"],
      ["Country of Origin", "India"],
    ],
    description:
      "Being one of the most renowned manufacturers and suppliers of Fullers Earth from Rajasthan, we pride ourselves in offering the purest range of Fullers Earth Powder at competitive prices. Our team uses high-grade raw materials and modern processing to deliver reliability, effectiveness and optimum quality — highly appreciated by our Indian and global clients.",
    applications: ["Personal Care", "Skin Care", "Cosmetics", "Face Packs", "Hair Care", "Detergents"],
    packaging: ["25 kg HDPE Bag", "40 kg HDPE Bag", "50 kg HDPE Bag", "Jumbo Bag"],
  },
  {
    slug: "fullers-earth-lumps",
    name: "Fullers Earth Lumps",
    tagline: "Natural Multani Mitti lumps — 100% pure & skin friendly.",
    price: "2,500.00",
    unit: "Metric Ton",
    moq: "42 Metric Ton",
    images: [
      "https://2.wlimg.com/product_images/bc-full/2024/4/9253049/fullers-earth-lumps-1713243839-7358710.jpeg",
      "https://2.wlimg.com/product_images/bc-small/2024/4/9253049/fuller-ear-1713243839_7358710_2081735.jpeg",
    ],
    specs: [
      ["Business Type", "Manufacturer, Exporter, Supplier, Trader"],
      ["Material", "Earth Clay"],
      ["Form", "Lumps"],
      ["Type", "Multani Mitti"],
      ["Purity", "100%"],
      ["Feature", "Good Quality, Skin Friendly"],
      ["Packaging Size", "25kg, 40kg, 50kg"],
      ["Packaging Type", "HDPE Bag, Jumbo Bag"],
      ["Country of Origin", "India"],
    ],
    description:
      "Natural Fullers Earth Lumps (Multani Mitti) in pure unprocessed form — perfect for buyers who require raw, untreated clay for their own processing into skincare, cosmetic or industrial applications. 100% natural and skin-friendly.",
    applications: ["Skin Care Manufacturing", "Cosmetic Industry", "Spa & Salon Use", "Soap Making", "Traditional Beauty Care"],
    packaging: ["25 kg HDPE Bag", "40 kg HDPE Bag", "50 kg HDPE Bag", "Jumbo Bag"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const PHONE_1 = "7976962506";
export const PHONE_2 = "9309330779";
export const EMAIL = "nkmineral07@gmail.com";
export const EMAIL_2 = "singhsawai063@gmail.com";
export const WA_BASE = `https://wa.me/91${PHONE_1}`;
export const waLink = (text: string) => `${WA_BASE}?text=${encodeURIComponent(text)}`;
