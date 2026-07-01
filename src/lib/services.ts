// Tüm hizmetlerin tek kaynağı. Nav, sitemap ve iç linkleme buradan beslenir.
// Kanibalizasyon kuralı: her hizmetin TEK birincil anahtar kelimesi vardır.
export type Service = {
  slug: string;
  title: string; // menü/başlık kısa ad
  primaryKeyword: string; // sayfanın sahiplendiği tek birincil kelime
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "kutu-harf-tabela",
    title: "Kutu Harf Tabela",
    primaryKeyword: "kutu harf tabela",
    metaTitle: "Kutu Harf Tabela İmalatı | Paslanmaz & Pleksi",
    metaDescription:
      "Kutu harf tabela imalatı: paslanmaz, pleksi ve kompozit malzemeyle dayanıklı, ışıklı 3D kutu harf üretimi. Ücretsiz keşif, hızlı montaj, garantili işçilik.",
  },
  {
    slug: "isikli-tabela",
    title: "Işıklı Tabela",
    primaryKeyword: "ışıklı tabela",
    metaTitle: "Işıklı Tabela | LED Aydınlatmalı Tabela Üretimi",
    metaDescription:
      "Işıklı tabela çözümleri: LED aydınlatmalı, enerji tasarruflu, gece net okunan tabela üretimi. Keşiften montaja anahtar teslim, garantili.",
  },
  {
    slug: "kabartma-logo",
    title: "Kabartma Logo",
    primaryKeyword: "kabartma logo",
    metaTitle: "Kabartma Logo & Kabartma Harf Uygulaması",
    metaDescription:
      "Kabartma logo ve kabartma harf uygulaması: kurumsal kimliğinize uygun, hassas kesim, resepsiyon ve cephe için 3 boyutlu logo üretimi.",
  },
];

export const SITE_URL = "https://3dtabela.com";
export const WHATSAPP =
  "https://wa.me/905446732202?text=" +
  encodeURIComponent("Merhaba, 3D tabela hakkında bilgi almak istiyorum.");
