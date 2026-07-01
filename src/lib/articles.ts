// Rehber (pillar + cluster) içerikleri. Topical authority için:
// /rehber = pillar hub; her makale = cluster; hepsi birbirine ve hizmet/bölge
// sayfalarına iç linkle bağlanır. İçerikler özgün ve konu odaklıdır.
export type Section = { h2: string; body: string[] };
export type ArticleQA = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  updated: string; // ISO tarih
  intro: string;
  sections: Section[];
  faq: ArticleQA[];
};

export const articles: Article[] = [
  {
    slug: "tabela-fiyatlari-2026",
    title: "Tabela Fiyatları 2026: Neye Göre Belirlenir?",
    metaTitle: "Tabela Fiyatları 2026 — Neye Göre Değişir? | Rehber",
    metaDescription:
      "Tabela fiyatları 2026'da neye göre belirlenir? Kutu harf, ışıklı ve kabartma tabela fiyatını etkileyen malzeme, ölçü, aydınlatma ve montaj faktörleri.",
    excerpt:
      "Tabela fiyatını belirleyen malzeme, ölçü, aydınlatma ve montaj faktörlerini ve doğru teklif almanın yolunu açıklıyoruz.",
    updated: "2026-07-02",
    intro:
      "Tabela fiyatı sabit bir liste değildir; her cephe, her işletme ve her malzeme farklı bir maliyet doğurur. Bu rehberde tabela fiyatını belirleyen başlıca faktörleri ve net bir teklif almanın en hızlı yolunu açıklıyoruz.",
    sections: [
      {
        h2: "Tabela fiyatını belirleyen 6 ana faktör",
        body: [
          "Tabela fiyatı birbirini etkileyen birkaç değişkenden oluşur. En belirleyici olanlar şunlardır: harf/pano ölçüsü, tabela türü, kullanılan malzeme, ışıklı olup olmaması, LED tipi ve montaj yüksekliği/zorluğu.",
          "Örneğin büyük ölçülü paslanmaz bir kutu harf, aynı ölçüdeki pleksi bir panodan daha maliyetlidir; yüksek bir cepheye montaj ise ek platform/işçilik gerektirebilir.",
        ],
      },
      {
        h2: "Malzeme seçiminin fiyata etkisi",
        body: [
          "Paslanmaz metalik ve premium bir görünüm sunar, dayanıklıdır ve genellikle en üst fiyat bandındadır. Pleksi renk ve ışık geçirgenliğiyle ışıklı işlerde idealdir ve orta bandı temsil eder. Kompozit ise büyük yüzeylerde hafif ve ekonomik bir çözümdür.",
          "Doğru malzeme yalnızca fiyatı değil, tabelanın ömrünü ve görünümünü de belirler. Detaylar için kutu harf tabela ve ışıklı tabela sayfalarımıza göz atabilirsiniz.",
        ],
      },
      {
        h2: "Işıklı tabela ek maliyet mi?",
        body: [
          "Işıklı tabela, LED ve güç kaynağı eklendiği için ışıksıza göre bir miktar daha maliyetlidir; ancak modern LED'ler düşük tüketimlidir ve elektrik gideri çok düşüktür. Gece görünürlüğü gereken işletmeler için bu fark genellikle kısa sürede geri döner.",
        ],
      },
      {
        h2: "Net fiyat için ne yapmalısınız?",
        body: [
          "En doğru fiyat, cepheyi gördükten sonra çıkar. Size özel net teklif için bir cephe fotoğrafı veya kaba ölçü göndermeniz yeterli — keşif ve teklif ücretsizdir. İstanbul içinde yerinde keşfe de geliyoruz.",
        ],
      },
    ],
    faq: [
      {
        q: "Tabela metrekare fiyatı nasıl hesaplanır?",
        a: "Tabela metrekare bazlı sabit bir fiyatla satılmaz; ölçü, malzeme, ışıklı olup olmaması ve montaj koşulları birlikte değerlendirilir. Kaba ölçü veya fotoğrafla net fiyat çıkarıyoruz.",
      },
      {
        q: "En ekonomik tabela türü hangisidir?",
        a: "Genellikle pleksi ışıklı pano ve kompozit çözümler daha ekonomiktir; kutu harf ise daha prestijli ve üst bantta yer alır. İhtiyaca göre en doğru dengeyi keşifte belirliyoruz.",
      },
    ],
  },
  {
    slug: "kutu-harf-mi-pleksi-mi",
    title: "Kutu Harf mı, Pleksi Tabela mı? Karşılaştırma",
    metaTitle: "Kutu Harf mı Pleksi Tabela mı? Karşılaştırma | Rehber",
    metaDescription:
      "Kutu harf mı pleksi tabela mı? Görünüm, dayanıklılık, aydınlatma ve maliyet açısından karşılaştırma ve işletmenize uygun seçim rehberi.",
    excerpt:
      "İki popüler tabela türünü görünüm, dayanıklılık, aydınlatma ve maliyet açısından karşılaştırıp doğru seçimi bulmanıza yardım ediyoruz.",
    updated: "2026-07-02",
    intro:
      "Cephe tabelası seçerken en sık karşılaşılan karar, kutu harf ile pleksi (yüzeyden ışıklı) pano arasında verilir. İkisi de farklı ihtiyaçlara hitap eder; bu rehberde ikisini yan yana karşılaştırıyoruz.",
    sections: [
      {
        h2: "Görünüm ve prestij",
        body: [
          "Kutu harf, her harfin ayrı ve hacimli olması sayesinde en kurumsal ve premium görünen çözümdür. Pleksi pano ise tek yüzeyde geniş ve düz bir görünüm sunar; marka logosu ve çok renkli tasarımlar için pratiktir.",
          "Kurumsal kimliğini öne çıkarmak isteyen markalar genellikle kutu harfi; geniş ve ekonomik bir çözüm arayan işletmeler pleksi panoyu tercih eder.",
        ],
      },
      {
        h2: "Aydınlatma farkı",
        body: [
          "Kutu harfte aydınlatma yöne göre değişir: önden, arkadan (halo) veya yandan ışık farklı etkiler verir. Pleksi panoda ise ışık yüzeyin tamamından homojen biçimde geçer ve gece net, dolu bir görünüm oluşturur.",
        ],
      },
      {
        h2: "Dayanıklılık ve maliyet",
        body: [
          "Paslanmaz kutu harf uzun ömür ve dayanıklılıkta öne çıkar; pleksi pano ekonomik ve montajı hızlıdır. Bütçe, cephe ölçüsü ve istenen görünüm birlikte değerlendirilerek karar verilir.",
          "İhtiyacınıza uygun türü keşifte birlikte belirliyoruz; detaylar için kutu harf tabela ve ışıklı tabela sayfalarımıza bakabilirsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "Kutu harf mi daha dayanıklı?",
        a: "Paslanmaz kutu harf uzun ömür ve dış koşullara dayanıklılıkta genellikle öndedir. Pleksi pano da doğru üretildiğinde uzun süre sorunsuz çalışır; fark, öncelik ve bütçeye göre belirlenir.",
      },
      {
        q: "Hangisi daha ucuz?",
        a: "Genellikle pleksi pano daha ekonomiktir. Ancak kesin fiyat ölçü, malzeme ve aydınlatmaya göre değişir; net teklif için cephenizi görmemiz yeterli.",
      },
    ],
  },
  {
    slug: "tabela-ruhsati-ve-izinleri",
    title: "Tabela Ruhsatı ve İzinleri: İşletmeler İçin Rehber",
    metaTitle: "Tabela Ruhsatı ve İzinleri — İşletme Rehberi | Rehber",
    metaDescription:
      "Dükkan ve mağaza tabelası için ruhsat/izin gerekir mi? Belediye tabela izni sürecine dair işletmelerin bilmesi gereken temel bilgiler.",
    excerpt:
      "Dükkan ve mağaza tabelası için belediye izni sürecine dair işletmelerin bilmesi gereken temel noktaları özetliyoruz.",
    updated: "2026-07-02",
    intro:
      "Cepheye tabela asmadan önce birçok işletme sahibinin aklına ruhsat ve izin süreci gelir. Bu rehberde tabela izniyle ilgili genel çerçeveyi ve işletmelerin dikkat etmesi gereken noktaları özetliyoruz. Not: kesin kurallar belediyeden belediyeye değişir; bu içerik genel bilgilendirme amaçlıdır.",
    sections: [
      {
        h2: "Tabela için genellikle ne gerekir?",
        body: [
          "Cephe tabelaları çoğu ilçe belediyesinde ilan-reklam yönetmeliğine tabidir. Genellikle tabelanın ölçüsü, konumu ve türü belediye kriterlerine uygun olmalı; bazı bölgelerde ilan-reklam vergisi ve/veya izin başvurusu gerekebilir.",
          "Tarihi bölgeler (ör. tarihi yarımada) ve özel silüet alanlarında kurallar daha katı olabilir; cephe rengi ve tabela türü sınırlanabilir.",
        ],
      },
      {
        h2: "İşletme olarak nelere dikkat etmelisiniz?",
        body: [
          "Tabelanızı yaptırmadan önce bağlı olduğunuz ilçe belediyesinin ilan-reklam biriminden güncel kriterleri teyit etmeniz en sağlıklısıdır. Ölçü ve konumu bu kriterlere göre planlamak, sonradan sökme/değişiklik maliyetini önler.",
          "Biz üretim öncesi tasarım aşamasında ölçü ve konumu netleştiriyor, cephenize uygun bir çözüm öneriyoruz. Bölgesel örnekler için İstanbul tabela sayfamıza göz atabilirsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "Her tabela için izin gerekir mi?",
        a: "Kurallar ilçe belediyesine göre değişir. Birçok bölgede cephe tabelaları ilan-reklam yönetmeliğine tabidir; güncel durumu bağlı olduğunuz belediyeden teyit etmek en doğrusudur.",
      },
      {
        q: "İzin sürecinde bize yardımcı oluyor musunuz?",
        a: "Tasarım aşamasında tabelanın ölçü ve konumunu belediye kriterlerine uygun planlamanıza yardımcı oluyoruz. Resmi başvuru işletme adına yapılır; süreçte yönlendirme sağlıyoruz.",
      },
    ],
  },
];
