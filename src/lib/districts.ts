// İlçe (bölge) sayfaları. Kanibalizasyon + doorway kuralı:
// Her ilçenin İÇERİĞİ özgündür (isim değiştirilmiş şablon DEĞİL).
// Birincil kelime: "[ilçe] tabela / [ilçe] tabelacı". Hizmet kelimelerini
// hizmet sayfaları sahiplenir; bu sayfalar yerel niyeti sahiplenir.
export type District = {
  slug: string;
  name: string; // İlçe adı
  yaka: "Avrupa" | "Anadolu";
  // Her ilçeye özgü, o bölgenin ticari karakterini anlatan giriş (özgün).
  intro: string;
  // O ilçenin iş dokusuna özgü ikinci paragraf (özgün).
  local: string;
  // İlçeye özgü bir SSS sorusu-cevabı (özgün).
  faqQ: string;
  faqA: string;
};

export const districts: District[] = [
  {
    slug: "ikitelli",
    name: "İkitelli",
    yaka: "Avrupa",
    intro:
      "İkitelli, İstanbul'un en büyük sanayi ve toptan ticaret bölgelerinden biridir; irili ufaklı binlerce atölye, showroom ve toptancı burada faaliyet gösterir. Bu yoğunlukta cephenizin fark edilmesi için dayanıklı, net okunan ve profesyonel bir tabela şarttır.",
    local:
      "İkitelli OSB ve çevresindeki iş yerleri için paslanmaz kutu harf, ışıklı kutu tabela ve totem çözümleri üretiyoruz. Sanayi ortamının tozuna ve dış hava koşullarına dayanıklı malzeme seçimiyle uzun ömürlü tabelalar teslim ediyoruz.",
    faqQ: "İkitelli sanayi sitesindeki atölyeler için nasıl tabela öneriyorsunuz?",
    faqA:
      "İkitelli'deki atölye ve showroomlar için genellikle paslanmaz kutu harf veya ışıklı kutu tabela öneriyoruz; bunlar hem uzaktan net okunur hem de sanayi koşullarına dayanıklıdır. Keşifte cephenize en uygun türü birlikte belirliyoruz.",
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    yaka: "Avrupa",
    intro:
      "Başakşehir, yeni yerleşim alanları, plazaları ve alışveriş merkezleriyle hızla büyüyen, kurumsal işletme yoğunluğu yüksek bir ilçedir. Modern cephelere yakışan, prestijli ve ışıklı tabela çözümleri burada öne çıkıyor.",
    local:
      "Başakşehir'deki ofis, mağaza ve kurumsal işletmeler için 3D kutu harf ve LED ışıklı tabela üretiyoruz. Plaza ve site girişleri için kabartma logo uygulamalarıyla da kurumsal kimliğinizi güçlendiriyoruz.",
    faqQ: "Başakşehir'de plaza ve kurumsal ofisler için hangi tabela uygun?",
    faqA:
      "Başakşehir'deki plaza ve kurumsal ofisler için genellikle paslanmaz kutu harf ve resepsiyon için kabartma logo tercih edilir. Modern, temiz ve prestijli bir görünüm sağlar; ihtiyacınıza göre ışıklı da yapıyoruz.",
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    yaka: "Avrupa",
    intro:
      "Bağcılar, yoğun esnaf ve küçük sanayi dokusuyla İstanbul'un en hareketli ticaret ilçelerinden biridir. Cadde üzeri dükkânlardan üretim atölyelerine kadar her işletme, rekabette öne çıkmak için güçlü bir tabelaya ihtiyaç duyar.",
    local:
      "Bağcılar'daki dükkân, market ve atölyeler için ekonomik ve dayanıklı ışıklı tabela, kutu harf ve pleksi pano çözümleri sunuyoruz. Yerinde keşif ve hızlı montajla işinizi aksatmadan tabelanızı yeniliyoruz.",
    faqQ: "Bağcılar'da dükkan tabelası ne kadar sürede montaj edilir?",
    faqA:
      "Bağcılar içinde tasarım onayından sonra üretim birkaç iş günü, montaj ise çoğunlukla aynı gün tamamlanır. Cadde üzeri dükkânlarda işinizi aksatmayacak şekilde planlama yapıyoruz.",
  },
  {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    yaka: "Avrupa",
    intro:
      "Küçükçekmece, yüksek nüfusu ve yoğun cadde ticaretiyle Avrupa yakasının en canlı perakende bölgelerinden biridir. Yaya ve araç trafiğinin yoğun olduğu bu ilçede, gece de net okunan ışıklı tabela büyük fark yaratır.",
    local:
      "Küçükçekmece'deki mağaza, market ve hizmet işletmeleri için LED ışıklı tabela ve kutu harf üretiyoruz. Yoğun cadde trafiğinde markanızı 24 saat görünür kılacak çözümler sunuyoruz.",
    faqQ: "Küçükçekmece'de ışıklı tabela elektrik gideri yüksek mi?",
    faqA:
      "Hayır. Kullandığımız düşük tüketimli LED modülleri sayesinde ışıklı tabelanın elektrik gideri oldukça düşüktür. Yoğun cadde ticaretinin olduğu Küçükçekmece'de gece görünürlüğü kazandırırken enerjiden tasarruf edersiniz.",
  },
  {
    slug: "esenyurt",
    name: "Esenyurt",
    yaka: "Avrupa",
    intro:
      "Esenyurt, hızla büyüyen nüfusu ve sürekli açılan yeni işletmeleriyle İstanbul'un en dinamik ilçelerinden biridir. Yeni açılan bir dükkân ya da şube için ilk izlenimi belirleyen en önemli unsur, kaliteli bir tabeladır.",
    local:
      "Esenyurt'taki yeni işletmeler, AVM içi mağazalar ve cadde üzeri dükkânlar için anahtar teslim tabela hizmeti veriyoruz. Kutu harf, ışıklı tabela ve kabartma logoyu tasarımdan montaja tek elden hallediyoruz.",
    faqQ: "Esenyurt'ta yeni açılan iş yeri için komple tabela çözümü var mı?",
    faqA:
      "Evet. Esenyurt'ta yeni açılan iş yerleri için keşif, tasarım, üretim ve montajı kapsayan anahtar teslim tabela çözümü sunuyoruz. Cephe fotoğrafınızı gönderin, size özel bir teklif hazırlayalım.",
  },
  {
    slug: "kadikoy",
    name: "Kadıköy",
    yaka: "Anadolu",
    intro:
      "Kadıköy, kafe ve restoran kültürü, butik mağazaları ve Bağdat Caddesi hattıyla Anadolu yakasının en prestijli perakende bölgesidir. Estetik ve markaya özel tabela, bu rekabetçi ortamda işletmenizi bir adım öne taşır.",
    local:
      "Kadıköy'deki kafe, restoran ve butiklere özel tasarım kutu harf, ışıklı tabela ve kabartma logo üretiyoruz. Konsept mekânlara uygun, markanızın karakterini yansıtan çözümler sunuyoruz.",
    faqQ: "Kadıköy'de kafe/restoran için özel tasarım tabela yapıyor musunuz?",
    faqA:
      "Evet. Kadıköy'deki kafe ve restoranlar için mekânınızın konseptine uygun, markaya özel font ve malzeme seçenekleriyle tasarım tabela üretiyoruz. 3D önizleme ile sonucu montajdan önce görürsünüz.",
  },
  {
    slug: "atasehir",
    name: "Ataşehir",
    yaka: "Anadolu",
    intro:
      "Ataşehir, İstanbul Finans Merkezi ve plazalarıyla Anadolu yakasının kurumsal kalbidir. Ofis, banka ve kurumsal işletmelerin yoğun olduğu bu bölgede, prestijli ve şık tabela uygulamaları ön plandadır.",
    local:
      "Ataşehir'deki ofis ve plazalar için paslanmaz kutu harf, resepsiyon için kabartma logo ve cephe için ışıklı tabela çözümleri üretiyoruz. Kurumsal kimliğinize uygun, temiz ve profesyonel bir görünüm sağlıyoruz.",
    faqQ: "Ataşehir'de ofis resepsiyonu için logo uygulaması yapıyor musunuz?",
    faqA:
      "Evet. Ataşehir'deki ofis ve plazalar için resepsiyon ve giriş duvarlarına kabartma logo uyguluyoruz. Paslanmaz, pleksi veya ışıklı (halo) seçeneklerle kurumsal bir karşılama alanı oluşturuyoruz.",
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    yaka: "Anadolu",
    intro:
      "Ümraniye, hem yoğun sanayi ve toptan ticaret hem de büyük alışveriş merkezleriyle Anadolu yakasının en yüksek ticaret hacmine sahip ilçelerinden biridir. Bu çeşitlilik, her işletme türüne uygun tabela çözümü gerektirir.",
    local:
      "Ümraniye'deki sanayi işletmeleri, showroomlar ve perakende mağazaları için kutu harf, ışıklı tabela ve totem üretiyoruz. İşletmenizin türüne ve cephesine göre en doğru çözümü birlikte belirliyoruz.",
    faqQ: "Ümraniye sanayi bölgesindeki firmalar için totem tabela yapıyor musunuz?",
    faqA:
      "Evet. Ümraniye'deki sanayi işletmeleri ve showroomlar için totem tabela, yönlendirme tabelaları ve ışıklı kutu tabela üretiyoruz. Dış koşullara dayanıklı malzemeyle uzun ömürlü çözümler sunuyoruz.",
  },
  {
    slug: "sisli",
    name: "Şişli",
    yaka: "Avrupa",
    intro:
      "Şişli, plazaları, mağazaları ve kurumsal merkezleriyle İstanbul'un en yoğun iş bölgelerinden biridir. Rekabetin yüksek olduğu bu merkezde, kaliteli ve dikkat çekici bir tabela markanızın görünürlüğü için belirleyicidir.",
    local:
      "Şişli'deki mağaza, ofis ve kurumsal işletmeler için 3D kutu harf, ışıklı tabela ve kabartma logo üretiyoruz. Merkezi konumun getirdiği yoğun trafikte öne çıkacak prestijli çözümler sunuyoruz.",
    faqQ: "Şişli'de mağaza cephesi için kutu harf mi ışıklı pano mı daha iyi?",
    faqA:
      "Şişli gibi yoğun ve rekabetçi bir merkezde, prestij isteyen markalar için kutu harf; geniş ve ekonomik bir çözüm arayanlar için ışıklı pano uygundur. Cephenizi görüp en doğru türü keşifte öneriyoruz.",
  },
  {
    slug: "beyoglu",
    name: "Beyoğlu",
    yaka: "Avrupa",
    intro:
      "Beyoğlu, İstiklal Caddesi ve çevresindeki tarihi dokusu, yoğun yaya trafiği ve turistik mağazalarıyla eşsiz bir ticaret bölgesidir. Tarihi cephelerle uyumlu, hem şık hem dikkat çekici tabela uygulamaları burada önemlidir.",
    local:
      "Beyoğlu'ndaki mağaza, kafe ve restoranlar için tarihi dokuya uygun kutu harf, ışıklı tabela ve kabartma logo üretiyoruz. Yoğun yaya trafiğinde markanızı öne çıkaracak, estetik çözümler sunuyoruz.",
    faqQ: "Beyoğlu'nda tarihi cepheye uygun tabela uygulaması yapıyor musunuz?",
    faqA:
      "Evet. Beyoğlu ve İstiklal çevresindeki tarihi cephelere uyumlu, hem estetik hem dayanıklı tabela çözümleri üretiyoruz. Cephenizin karakterine uygun malzeme ve ölçüyü keşifte belirliyoruz.",
  },
  {
    slug: "fatih",
    name: "Fatih",
    yaka: "Avrupa",
    intro:
      "Fatih, tarihi yarımadanın toptan çarşıları, esnaf yoğunluğu ve geleneksel ticaret dokusuyla İstanbul'un en canlı alışveriş bölgelerinden biridir. Yoğun çarşı trafiğinde dükkânınızı öne çıkarmak için net ve dayanıklı bir tabela şarttır.",
    local:
      "Fatih'teki toptancı, esnaf ve mağazalar için ekonomik ve dayanıklı ışıklı tabela, kutu harf ve pleksi pano üretiyoruz. Yoğun çarşı ortamında hızlı ve temiz montaj yapıyoruz.",
    faqQ: "Fatih'teki toptan çarşılarda dükkanlar için uygun tabela nedir?",
    faqA:
      "Fatih'in toptan çarşılarındaki dükkânlar için genellikle ışıklı kutu tabela ve pleksi pano öneriyoruz; bunlar ekonomik, net okunan ve dayanıklıdır. Yoğun çarşı ortamına uygun hızlı montaj yapıyoruz.",
  },
];
