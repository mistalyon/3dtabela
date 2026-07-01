// Çok şehirli bölge yapısı (İstanbul hariç; o kendi statik klasöründe).
// Dinamik rota: /bolgeler/[sehir] ve /bolgeler/[sehir]/[ilce].
// Kanibalizasyon kuralı: her ilçe TEK yerel birincil kelime sahiplenir
// ("[ilçe] tabela"); içerikler isim-değiştirilmiş şablon DEĞİL, özgündür.

export type CityDistrict = {
  slug: string;
  name: string;
  primaryKeyword: string; // "battalgazi tabela"
  secondaryKeyword: string; // "battalgazi tabelacı"
  tail: string; // başlığa eklenen benzersiz uzun kuyruk
  intro: string; // ilçenin ticari karakterine özgü giriş (özgün)
  local: string; // iş dokusuna özgü ikinci paragraf (özgün)
  faqQ: string;
  faqA: string;
};

export type City = {
  slug: string;
  name: string;
  plate: string; // il plaka kodu (içerikte kullanılır)
  metaTitle: string;
  metaDescription: string;
  intro: string; // şehir hub giriş paragrafı (özgün)
  character: string; // şehrin ticari karakteri (hub 2. paragraf)
  districts: CityDistrict[];
};

export const cities: City[] = [
  {
    slug: "malatya",
    name: "Malatya",
    plate: "44",
    metaTitle: "Malatya Tabela İmalatı — Kutu Harf & Işıklı Tabela",
    metaDescription:
      "Malatya'da tabela imalatı: kutu harf, ışıklı tabela ve kabartma logo üretimi. Battalgazi, Yeşilyurt ve tüm ilçelere ücretsiz keşif, hızlı montaj.",
    intro:
      "Malatya'da tabela yaptırmak isteyen işletmelere; kutu harf, ışıklı tabela ve kabartma logo üretiminde uçtan uca çözüm sunuyoruz. Şehrin ticari kalbi Battalgazi çarşılarından Yeşilyurt'un modern caddelerine kadar, kendi atölyemizde ürettiğimiz dayanıklı tabelalarla markanızı öne çıkarıyoruz.",
    character:
      "Kayısının başkenti Malatya, güçlü bir esnaf geleneğine ve hızla modernleşen bir perakende dokusuna sahiptir. Eski merkezdeki yoğun çarşı ticareti ile yeni yerleşim bölgelerindeki kurumsal işletmeler farklı tabela ihtiyaçları doğurur; biz de her iki dünyaya uygun çözümler üretiyoruz.",
    districts: [
      {
        slug: "battalgazi",
        name: "Battalgazi",
        primaryKeyword: "battalgazi tabela",
        secondaryKeyword: "battalgazi tabelacı",
        tail: "Çarşı & Dükkan Tabelası",
        intro:
          "Battalgazi, Malatya'nın tarihi merkezi ve en yoğun çarşı ticaretinin yürüdüğü ilçesidir. PTT Caddesi hattı, kuyumcular çarşısı ve kapalı çarşı çevresindeki dükkânlar için net okunan, dayanıklı bir tabela rekabette belirleyicidir.",
        local:
          "Battalgazi'deki esnaf, kuyumcu ve toptancı dükkânları için ışıklı kutu tabela, kutu harf ve pleksi pano üretiyoruz. Yoğun çarşı ortamında işinizi aksatmadan, hızlı ve temiz montaj yapıyoruz.",
        faqQ: "Battalgazi çarşısındaki dükkanlar için uygun tabela nedir?",
        faqA:
          "Battalgazi çarşısındaki dükkânlar için genellikle ışıklı kutu tabela ve pleksi pano öneriyoruz; ekonomik, net okunan ve dayanıklıdır. Yoğun çarşı ortamına uygun hızlı montaj yapıyoruz.",
      },
      {
        slug: "yesilyurt",
        name: "Yeşilyurt",
        primaryKeyword: "yeşilyurt tabela",
        secondaryKeyword: "yeşilyurt tabelacı",
        tail: "Mağaza & Işıklı Tabela",
        intro:
          "Yeşilyurt, İnönü Üniversitesi, yeni alışveriş merkezleri ve modern konut projeleriyle Malatya'nın hızla büyüyen çağdaş yüzüdür. Genç nüfusun yoğun olduğu bu ilçede kafe, mağaza ve markalı işletmeler için şık, gece net okunan tabelalar öne çıkar.",
        local:
          "Yeşilyurt'taki mağaza, kafe ve kurumsal işletmeler için 3D kutu harf, LED ışıklı tabela ve kabartma logo üretiyoruz. Modern cephelere yakışan, markanızın karakterini yansıtan çözümler sunuyoruz.",
        faqQ: "Yeşilyurt'ta kafe ve mağazalar için ışıklı tabela yapıyor musunuz?",
        faqA:
          "Evet. Yeşilyurt'taki kafe, restoran ve mağazalar için LED aydınlatmalı, gece net okunan ışıklı tabela ve kutu harf üretiyoruz. 3D önizleme ile sonucu montajdan önce görürsünüz.",
      },
      {
        slug: "dogansehir",
        name: "Doğanşehir",
        primaryKeyword: "doğanşehir tabela",
        secondaryKeyword: "doğanşehir tabelacı",
        tail: "Esnaf & Cephe Tabelası",
        intro:
          "Doğanşehir, tarım ve yerel ticaretin canlı olduğu, ilçe merkezinde yoğun bir esnaf dokusuna sahip bir Malatya ilçesidir. Cadde üzeri dükkânlar ve tarımsal ticaret işletmeleri için dayanıklı ve ekonomik tabela çözümleri önemlidir.",
        local:
          "Doğanşehir'deki esnaf, market ve tarım ticareti işletmeleri için ışıklı tabela, kutu harf ve pleksi pano üretiyoruz. İlçeye ücretsiz keşif için gelip cephenize en uygun çözümü belirliyoruz.",
        faqQ: "Doğanşehir'e keşif için geliyor musunuz?",
        faqA:
          "Evet. Doğanşehir ve çevre beldelere yerinde ücretsiz keşif ve ölçü için geliyoruz. Dilerseniz cephe fotoğrafınızı WhatsApp'tan göndererek ön fiyat da alabilirsiniz.",
      },
      {
        slug: "darende",
        name: "Darende",
        primaryKeyword: "darende tabela",
        secondaryKeyword: "darende tabelacı",
        tail: "Turistik & Cephe Tabelası",
        intro:
          "Darende, Somuncu Baba Külliyesi ve doğal güzellikleriyle yoğun ziyaretçi çeken, turizmin canlı olduğu bir Malatya ilçesidir. Lokanta, konaklama ve hediyelik işletmeleri için hem estetik hem dayanıklı tabela uygulamaları öne çıkar.",
        local:
          "Darende'deki lokanta, konaklama ve ticari işletmeler için kutu harf, ışıklı tabela ve yönlendirme tabelaları üretiyoruz. Ziyaretçi yoğunluğunda markanızı öne çıkaracak, cephenize uygun çözümler sunuyoruz.",
        faqQ: "Darende'de lokanta ve konaklama için tabela yapıyor musunuz?",
        faqA:
          "Evet. Darende'deki lokanta, otel ve pansiyonlar için kutu harf, ışıklı tabela ve yönlendirme tabelaları üretiyoruz. Yoğun ziyaretçi trafiğinde net okunan, dayanıklı çözümler sağlıyoruz.",
      },
      {
        slug: "akcadag",
        name: "Akçadağ",
        primaryKeyword: "akçadağ tabela",
        secondaryKeyword: "akçadağ tabelacı",
        tail: "Esnaf & Dükkan Tabelası",
        intro:
          "Akçadağ, tarım ekonomisinin belirleyici olduğu, ilçe merkezinde canlı bir esnaf ticaretinin sürdüğü bir Malatya ilçesidir. Cadde üzeri dükkânlar ve tarımsal işletmeler için ekonomik ve uzun ömürlü tabelalar tercih edilir.",
        local:
          "Akçadağ'daki dükkân, market ve tarım işletmeleri için dayanıklı ışıklı tabela, kutu harf ve pleksi pano üretiyoruz. İlçeye ücretsiz keşif yapıp bütçenize uygun çözümü birlikte belirliyoruz.",
        faqQ: "Akçadağ'da tabela fiyatı neye göre değişir?",
        faqA:
          "Fiyat; tabela türü, ölçü, malzeme ve ışıklı olup olmamasına göre değişir. Akçadağ içinde net fiyat için cephe fotoğrafı veya kaba ölçü yeterlidir; keşif ve teklif ücretsizdir.",
      },
    ],
  },
  {
    slug: "bursa",
    name: "Bursa",
    plate: "16",
    metaTitle: "Bursa Tabela İmalatı — Kutu Harf & Işıklı Tabela",
    metaDescription:
      "Bursa'da tabela imalatı: kutu harf, ışıklı tabela ve kabartma logo üretimi. Osmangazi, Nilüfer, Yıldırım ve tüm ilçelere ücretsiz keşif, hızlı montaj.",
    intro:
      "Bursa'da tabela yaptırmak isteyen işletmelere; kutu harf, ışıklı tabela ve kabartma logo üretiminde uçtan uca çözüm sunuyoruz. Osmangazi'nin tarihi çarşılarından Nilüfer'in modern plazalarına, İnegöl'ün mobilya sanayisinden sahil ilçelerine kadar kendi atölyemizde ürettiğimiz tabelalarla markanızı öne çıkarıyoruz.",
    character:
      "Sanayi, mobilya, tekstil ve turizmin bir arada güçlü olduğu Bursa, Türkiye'nin en yüksek ticaret hacimli şehirlerinden biridir. Fabrika ve showroomlardan cadde üzeri dükkânlara, plaza ofislerinden sahil restoranlarına kadar her işletme türü farklı bir tabela çözümü ister; biz de bu çeşitliliğe uygun üretim yapıyoruz.",
    districts: [
      {
        slug: "osmangazi",
        name: "Osmangazi",
        primaryKeyword: "osmangazi tabela",
        secondaryKeyword: "osmangazi tabelacı",
        tail: "Çarşı & Mağaza Tabelası",
        intro:
          "Osmangazi, Bursa'nın tarihi ve ticari merkezidir; Kapalıçarşı, Heykel ve çevresindeki yoğun perakende dokusu şehrin kalbini oluşturur. Bu rekabetçi ortamda cephenizin fark edilmesi için net okunan, kaliteli bir tabela şarttır.",
        local:
          "Osmangazi'deki mağaza, çarşı esnafı ve kurumsal işletmeler için 3D kutu harf, ışıklı tabela ve kabartma logo üretiyoruz. Tarihi merkezin yoğun trafiğinde öne çıkacak, dayanıklı çözümler sunuyoruz.",
        faqQ: "Osmangazi Heykel ve çarşı çevresinde montaj yapıyor musunuz?",
        faqA:
          "Evet. Osmangazi'nin Heykel, Kapalıçarşı ve cadde hatlarındaki dükkânlara keşif, üretim ve montaj yapıyoruz. Yoğun merkez trafiğinde işinizi aksatmayacak şekilde planlıyoruz.",
      },
      {
        slug: "nilufer",
        name: "Nilüfer",
        primaryKeyword: "nilüfer tabela",
        secondaryKeyword: "nilüfer tabelacı",
        tail: "Kurumsal & Plaza Tabelası",
        intro:
          "Nilüfer, plazaları, AVM'leri, kurumsal ofisleri ve modern konut projeleriyle Bursa'nın en hızlı büyüyen, en yüksek kurumsal yoğunluğa sahip ilçesidir. Prestijli ve şık tabela uygulamaları burada öne çıkar.",
        local:
          "Nilüfer'deki ofis, plaza ve markalı mağazalar için paslanmaz kutu harf, resepsiyon için kabartma logo ve cephe için LED ışıklı tabela üretiyoruz. Kurumsal kimliğinize uygun, temiz ve profesyonel bir görünüm sağlıyoruz.",
        faqQ: "Nilüfer'de plaza ve kurumsal ofisler için hangi tabela uygun?",
        faqA:
          "Nilüfer'deki plaza ve kurumsal ofisler için genellikle paslanmaz kutu harf ve resepsiyon için kabartma logo tercih edilir. Modern ve prestijli bir görünüm sağlar; ihtiyaca göre ışıklı da yapıyoruz.",
      },
      {
        slug: "yildirim",
        name: "Yıldırım",
        primaryKeyword: "yıldırım tabela",
        secondaryKeyword: "yıldırım tabelacı",
        tail: "Dükkan & Işıklı Tabela",
        intro:
          "Yıldırım, yoğun konut nüfusu, canlı cadde ticareti ve küçük sanayi dokusuyla Bursa'nın en hareketli ilçelerinden biridir. Mahalle aralarındaki dükkânlardan cadde üzeri mağazalara kadar her işletme güçlü bir tabelaya ihtiyaç duyar.",
        local:
          "Yıldırım'daki dükkân, market ve atölyeler için ekonomik ve dayanıklı ışıklı tabela, kutu harf ve pleksi pano üretiyoruz. Yerinde keşif ve hızlı montajla işinizi aksatmadan tabelanızı yeniliyoruz.",
        faqQ: "Yıldırım'da dükkan tabelası ne kadar sürede montaj edilir?",
        faqA:
          "Yıldırım içinde tasarım onayından sonra üretim birkaç iş günü, montaj ise çoğunlukla aynı gün tamamlanır. Cadde üzeri dükkânlarda işinizi aksatmayacak şekilde planlama yapıyoruz.",
      },
      {
        slug: "inegol",
        name: "İnegöl",
        primaryKeyword: "inegöl tabela",
        secondaryKeyword: "inegöl tabelacı",
        tail: "Mobilya & Sanayi Tabelası",
        intro:
          "İnegöl, Türkiye'nin mobilya üretim merkezidir; yüzlerce fabrika, showroom ve mobilya mağazası burada faaliyet gösterir. Geniş showroom cephelerinde markanızı öne çıkaracak büyük ölçekli, prestijli tabelalar bu ilçede kritik önem taşır.",
        local:
          "İnegöl'deki mobilya fabrikaları, showroomlar ve sanayi işletmeleri için büyük ölçülü kutu harf, ışıklı tabela ve totem çözümleri üretiyoruz. Geniş cephelere uygun, uzaktan net okunan dayanıklı tabelalar teslim ediyoruz.",
        faqQ: "İnegöl'de mobilya showroomları için büyük tabela yapıyor musunuz?",
        faqA:
          "Evet. İnegöl'deki mobilya showroom ve fabrikaları için büyük ölçekli kutu harf, ışıklı cephe tabelası ve totem üretiyoruz. Geniş cephede uzaktan okunurluk için doğru ölçü ve aydınlatmayı keşifte belirliyoruz.",
      },
      {
        slug: "gemlik",
        name: "Gemlik",
        primaryKeyword: "gemlik tabela",
        secondaryKeyword: "gemlik tabelacı",
        tail: "Showroom & Cephe Tabelası",
        intro:
          "Gemlik, zeytin ticareti, limanı ve çevresindeki sanayi işletmeleriyle canlı bir ticaret ilçesidir. Zeytin satış noktalarından sanayi showroomlarına kadar dayanıklı, deniz ikliminin nemine dirençli tabelalar önem taşır.",
        local:
          "Gemlik'teki zeytin işletmeleri, showroomlar ve sanayi firmaları için paslanmaz kutu harf, ışıklı tabela ve totem üretiyoruz. Deniz ikliminin koşullarına dayanıklı malzeme seçimiyle uzun ömürlü çözümler sunuyoruz.",
        faqQ: "Gemlik'te deniz ikliminde tabela çabuk bozulur mu?",
        faqA:
          "Doğru malzeme seçildiğinde hayır. Gemlik'in nemli deniz iklimi için paslanmaz ve dış koşullara dayanıklı malzemeler öneriyoruz; böylece tabelanız uzun süre ilk günkü gibi kalır.",
      },
      {
        slug: "mudanya",
        name: "Mudanya",
        primaryKeyword: "mudanya tabela",
        secondaryKeyword: "mudanya tabelacı",
        tail: "Kafe & Restoran Tabelası",
        intro:
          "Mudanya, sahil şeridi, balık restoranları ve butik kafeleriyle Bursa'nın en keyifli sahil ilçesidir. Deniz manzaralı mekânlarda markaya özel, estetik ve dayanıklı tabela uygulamaları öne çıkar.",
        local:
          "Mudanya'daki kafe, restoran ve butiklere özel tasarım kutu harf, ışıklı tabela ve kabartma logo üretiyoruz. Sahil konseptine uygun, markanızın karakterini yansıtan, deniz koşullarına dayanıklı çözümler sunuyoruz.",
        faqQ: "Mudanya sahilinde restoranlar için özel tasarım tabela yapıyor musunuz?",
        faqA:
          "Evet. Mudanya sahilindeki restoran ve kafeler için mekânınızın konseptine uygun, markaya özel tasarım tabela üretiyoruz. Deniz ikliminde uzun ömür için dayanıklı malzeme kullanıyoruz.",
      },
      {
        slug: "gursu",
        name: "Gürsu",
        primaryKeyword: "gürsu tabela",
        secondaryKeyword: "gürsu tabelacı",
        tail: "Sanayi & Totem Tabela",
        intro:
          "Gürsu, organize sanayi bölgesi ve üretim tesisleriyle Bursa'nın önemli sanayi ilçelerinden biridir. Fabrika cepheleri ve sanayi sitelerinde uzaktan net okunan, dış koşullara dayanıklı tabelalar gerekir.",
        local:
          "Gürsu'daki fabrika, atölye ve sanayi işletmeleri için paslanmaz kutu harf, ışıklı kutu tabela, totem ve yönlendirme tabelaları üretiyoruz. Sanayi ortamının koşullarına dayanıklı, uzun ömürlü çözümler sunuyoruz.",
        faqQ: "Gürsu OSB'deki fabrikalar için totem tabela yapıyor musunuz?",
        faqA:
          "Evet. Gürsu Organize Sanayi Bölgesi'ndeki fabrika ve tesisler için totem, yönlendirme tabelaları ve ışıklı cephe tabelası üretiyoruz. Dış koşullara dayanıklı malzemeyle uzun ömürlü çözümler sağlıyoruz.",
      },
      {
        slug: "kestel",
        name: "Kestel",
        primaryKeyword: "kestel tabela",
        secondaryKeyword: "kestel tabelacı",
        tail: "Sanayi & Işıklı Tabela",
        intro:
          "Kestel, organize sanayi bölgesi ve büyüyen üretim dokusuyla Bursa'nın sanayi odaklı ilçelerindendir. Fabrika ve showroom cephelerinde kurumsal bir görünüm veren dayanıklı tabelalar öne çıkar.",
        local:
          "Kestel'deki sanayi işletmeleri, showroomlar ve depolar için kutu harf, ışıklı tabela ve totem üretiyoruz. İşletmenizin türüne ve cephesine göre en doğru, uzun ömürlü çözümü birlikte belirliyoruz.",
        faqQ: "Kestel'de fabrika cephesi için ışıklı tabela uygun mu?",
        faqA:
          "Evet. Kestel'deki fabrika ve showroom cepheleri için LED ışıklı kutu tabela ve kutu harf öneriyoruz; gece de kurumsal ve net bir görünüm sağlar, enerji tüketimi düşüktür.",
      },
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
