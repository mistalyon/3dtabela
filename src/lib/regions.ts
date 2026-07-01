// Bölge/şehir sayfaları. Kanibalizasyon kuralı:
// Bölge sayfaları YEREL niyeti sahiplenir ("istanbul tabela", "[ilçe] tabelacı").
// Hizmet sayfaları hizmet kelimelerini ("kutu harf tabela" vb.) sahiplenir.
export type Region = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
};

export const regions: Region[] = [
  {
    slug: "istanbul",
    name: "İstanbul",
    metaTitle: "İstanbul Tabela İmalatı — Kutu Harf & Işıklı Tabela",
    metaDescription:
      "İstanbul'da tabela imalatı: kutu harf, ışıklı tabela ve kabartma logo üretimi. Avrupa ve Anadolu yakasının tüm ilçelerine ücretsiz keşif ve hızlı montaj.",
  },
];
