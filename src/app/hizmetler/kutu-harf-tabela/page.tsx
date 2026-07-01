import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { Faq, type QA } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { services, SITE_URL } from "@/lib/services";

const svc = services.find((s) => s.slug === "kutu-harf-tabela")!;
const url = `${SITE_URL}/hizmetler/${svc.slug}`;

export const metadata: Metadata = {
  title: svc.metaTitle,
  description: svc.metaDescription,
  alternates: { canonical: url },
  openGraph: {
    title: svc.metaTitle,
    description: svc.metaDescription,
    url,
    type: "article",
    locale: "tr_TR",
  },
};

const faq: QA[] = [
  {
    q: "Kutu harf tabela nedir?",
    a: "Kutu harf tabela, her harfin ayrı ayrı üç boyutlu bir kutu olarak üretilip cepheye monte edildiği tabela türüdür. Harflerin yan yüzeyi (yanak) ve ön yüzü kapalı olduğu için hacimli, kurumsal ve dayanıklı bir görünüm sağlar; içine LED yerleştirilerek ışıklı da yapılabilir.",
  },
  {
    q: "Kutu harf tabela fiyatı neye göre değişir?",
    a: "Fiyat; harf yüksekliği ve sayısı, kullanılan malzeme (paslanmaz, pleksi, kompozit), ışıklı olup olmaması, LED tipi, cephe yüksekliği ve montaj zorluğuna göre değişir. Net fiyat için ölçü veya cephe fotoğrafı yeterlidir; keşif ve teklif ücretsizdir.",
  },
  {
    q: "Kutu harf mi, pleksi (yüzeyden ışıklı) tabela mı daha iyi?",
    a: "Kutu harf, harf başına hacim ve premium görünüm ister markalar için idealdir; pleksi panolu ışıklı tabela ise daha ekonomik ve geniş yüzeyli işletmeler için uygundur. İhtiyacınıza göre en doğru türü keşifte birlikte belirliyoruz.",
  },
  {
    q: "Işıklı kutu harf ne kadar elektrik harcar?",
    a: "Modern kutu harflerde düşük tüketimli LED kullanıldığı için elektrik gideri çok düşüktür. Harf sayısına bağlı olsa da genellikle birkaç ampul mertebesinde enerji tüketir ve uzun ömürlüdür.",
  },
  {
    q: "Üretim ve montaj ne kadar sürer?",
    a: "Standart bir cephe için tasarım onayından sonra üretim genellikle birkaç iş günü, montaj ise çoğunlukla aynı gün tamamlanır. Süre; harf ölçüsü, malzeme ve cephe koşullarına göre keşifte netleştirilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kutu Harf Tabela İmalatı",
  serviceType: "Kutu harf tabela",
  areaServed: "TR",
  provider: {
    "@type": "LocalBusiness",
    name: "3D Tabela",
    telephone: "+905446732202",
    url: SITE_URL,
  },
  description: svc.metaDescription,
  url,
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Hizmetler", href: "/#hizmetler" },
            { name: "Kutu Harf Tabela", href: `/hizmetler/${svc.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Kutu Harf Tabela İmalatı
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Kutu harf tabela, her harfin ayrı bir üç boyutlu kutu olarak
            üretilip cepheye monte edildiği, hacimli ve kurumsal duran tabela
            türüdür. Paslanmaz, pleksi ve kompozit malzemeyle; ışıklı veya
            ışıksız olarak üretiyor, tasarımdan montaja anahtar teslim teslim
            ediyoruz.
          </p>

          <div className="prose-none mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Neden kutu harf tabela?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Kutu harf, markanızı cephede öne çıkarmanın en prestijli
                yollarından biridir. Harflerin hacimli yapısı gündüz güçlü bir
                kurumsal algı oluşturur; içine yerleştirilen LED ile gece net ve
                dikkat çekici bir okunurluk sağlar. Düz vinil veya baskı
                tabelalara göre çok daha dayanıklı ve uzun ömürlüdür.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Hacimli, premium ve kurumsal görünüm",
                  "İç aydınlatmayla gece net okunurluk",
                  "Dış hava koşullarına dayanıklı malzeme",
                  "Markaya özel font, ölçü ve renkte üretim",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Malzeme seçenekleri
              </h2>
              <p className="mt-3 text-muted-foreground">
                Doğru malzeme; bütçenize, cephe konumunuza ve istediğiniz
                görünüme göre değişir. En sık tercih edilen üç seçenek:
              </p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Paslanmaz kutu harf:</strong>{" "}
                  Metalik, şık ve son derece dayanıklı. Kurumsal markalar ve uzun
                  ömür isteyen cepheler için idealdir.
                </li>
                <li>
                  <strong className="text-foreground">Pleksi kutu harf:</strong>{" "}
                  Renk ve ışık geçirgenliği yüksek; ışıklı uygulamalarda canlı,
                  homojen bir aydınlatma verir.
                </li>
                <li>
                  <strong className="text-foreground">Kompozit kutu harf:</strong>{" "}
                  Hafif ve ekonomik; büyük ölçülü harflerde ve geniş cephelerde
                  avantaj sağlar.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Işıklı kutu harf: önden, yandan ve arkadan aydınlatma
              </h2>
              <p className="mt-3 text-muted-foreground">
                İçine yerleştirilen LED&apos;in yönüne göre farklı etkiler elde
                edilir: önden ışıklı harfler klasik ve en okunur seçenektir;
                arkadan ışıklı (halo/ters aydınlatma) harfler duvarda zarif bir
                ışık halesi oluşturur; yandan ışıklı çözümler ise özel
                tasarımlarda kullanılır. Enerji tasarruflu LED sayesinde elektrik
                gideri düşük, ömrü uzundur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Tasarımdan montaja üretim süreci
              </h2>
              <ol className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">1. Ücretsiz keşif ve ölçü:</strong>{" "}
                  Cepheyi yerinde inceliyor, doğru harf ölçüsünü belirliyoruz.
                </li>
                <li>
                  <strong className="text-foreground">2. 3D tasarım ve onay:</strong>{" "}
                  Tabelanın cephedeki halini önizleme olarak gösteriyoruz.
                </li>
                <li>
                  <strong className="text-foreground">3. Üretim:</strong> Kendi
                  atölyemizde, seçilen malzemeyle hassas üretim yapıyoruz.
                </li>
                <li>
                  <strong className="text-foreground">4. Montaj:</strong>{" "}
                  Profesyonel ekiple hızlı ve güvenli montaj; sonrasında bakım
                  desteği.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Kutu harf tabela fiyatını belirleyen faktörler
              </h2>
              <p className="mt-3 text-muted-foreground">
                Kutu harf tabela fiyatı standart bir liste değildir; her cephe
                farklıdır. Fiyatı belirleyen başlıca etkenler: harf yüksekliği ve
                adedi, malzeme türü, ışıklı olup olmaması, LED tipi, cephe
                yüksekliği ve montaj zorluğu. Net fiyat için bize bir cephe
                fotoğrafı veya kaba ölçü göndermeniz yeterli — keşif ve teklif
                tamamen ücretsizdir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                İlgili tabela çözümleri
              </h2>
              <p className="mt-3 text-muted-foreground">
                İhtiyacınıza kutu harf yerine farklı bir çözüm daha uygun
                olabilir. Geniş yüzeyli ve ekonomik bir aydınlatma istiyorsanız{" "}
                <Link
                  href="/hizmetler/isikli-tabela"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  LED ışıklı tabela
                </Link>{" "}
                seçeneğine, resepsiyon ve iç mekân logo uygulamaları için{" "}
                <Link
                  href="/hizmetler/kabartma-logo"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  kabartma logo uygulamasına
                </Link>{" "}
                göz atabilirsiniz.
              </p>
            </section>
          </div>
        </article>

        <Faq items={faq} />
        <CtaBand
          title="Kutu harf tabelanız için ücretsiz teklif alın"
          text="Cephe fotoğrafınızı veya ölçünüzü WhatsApp'tan gönderin, size özel fiyatı hızlıca çıkaralım."
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
