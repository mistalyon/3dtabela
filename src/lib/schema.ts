// Merkezi varlık (entity) tanımı. Tüm sayfalar aynı Organization varlığına
// stabil bir @id üzerinden referans verir → Google için net bir entity.
import { SITE_URL } from "@/lib/services";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// İşletmenin konu uzmanlığı (knowsAbout) — topical authority sinyali.
const KNOWS_ABOUT = [
  "Tabela imalatı",
  "Kutu harf tabela",
  "Işıklı tabela",
  "LED tabela",
  "Kabartma logo",
  "Kabartma harf",
  "Totem tabela",
  "Paslanmaz tabela",
  "Pleksi tabela",
  "Cephe tabelası",
  "Reklam tabelası",
  "Tabela montajı",
];

export const organizationSchema = {
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": ORG_ID,
  name: "3D Tabela",
  url: SITE_URL,
  telephone: "+905446732202",
  email: "info@3dtabela.com",
  image: `${SITE_URL}/og.jpg`,
  logo: `${SITE_URL}/og.jpg`,
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "İstanbul" },
    { "@type": "Country", name: "Türkiye" },
  ],
  knowsAbout: KNOWS_ABOUT,
  sameAs: ["https://wa.me/905446732202"],
  description:
    "3D kutu harf, ışıklı tabela ve kabartma logo üretiminde tasarımdan montaja anahtar teslim çözümler sunan tabela imalatçısı.",
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "3D Tabela",
  inLanguage: "tr-TR",
  publisher: { "@id": ORG_ID },
};

// Sayfa şemalarında sağlayıcı olarak kullanmak için kısa referans.
export const providerRef = { "@id": ORG_ID };
