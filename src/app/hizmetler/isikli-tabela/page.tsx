import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { Faq, type QA } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { services, SITE_URL } from "@/lib/services";

const svc = services.find((s) => s.slug === "isikli-tabela")!;
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
    q: "Işıklı tabela nedir?",
    a: "Işıklı tabela, gövdesine yerleştirilen LED aydınlatma sayesinde gece de net okunan tabela türüdür. Kutu harf, pleksi pano veya kutu (ışıklı kaset) tabela olarak üretilebilir; amaç markanızın 24 saat görünür olmasıdır.",
  },
  {
    q: "Işıklı tabela ne kadar elektrik harcar?",
    a: "Günümüzde ışıklı tabelalarda düşük tüketimli LED kullanılır; bu yüzden elektrik gideri oldukça düşüktür. Eski neon veya floresanlı sistemlere göre hem çok daha az enerji harcar hem de çok daha uzun ömürlüdür.",
  },
  {
    q: "LED ışıklı tabelanın ömrü ne kadardır?",
    a: "Kaliteli LED modülleri ve uygun güç kaynağıyla üretilen tabelalar uzun yıllar sorunsuz çalışır. Su yalıtımı doğru yapıldığında dış cephede de yüksek dayanıklılık sağlar; bakım ihtiyacı minimumdur.",
  },
  {
    q: "Işıklı tabela gündüz de görünür mü?",
    a: "Evet. Işıklı tabela gündüz malzeme, renk ve kabartma etkisiyle; gece ise aydınlatmayla öne çıkar. Yani hem gündüz hem gece etkili bir görünüm sunar.",
  },
  {
    q: "Işıklı tabela için elektrik ve montaj dahil mi?",
    a: "Keşif sonrası verdiğimiz teklif üretim ve montajı kapsar; elektrik bağlantısı ve konumlandırma dahil anahtar teslim çalışıyoruz. Detaylar keşifte netleştirilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Işıklı Tabela Üretimi",
  serviceType: "Işıklı tabela",
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
            { name: "Işıklı Tabela", href: `/hizmetler/${svc.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Işıklı Tabela &amp; LED Aydınlatmalı Tabela
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Işıklı tabela, LED aydınlatma sayesinde gece de net okunan, markanızı
            24 saat görünür kılan tabeladır. Enerji tasarruflu LED modülleriyle;
            kutu harf, pleksi pano ve ışıklı kaset tabela olarak, keşiften montaja
            anahtar teslim üretiyoruz.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Işıklı tabelanın avantajları
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Gece net okunurluk ve maksimum görünürlük",
                  "Düşük enerji tüketimli, uzun ömürlü LED",
                  "Gündüz malzeme, gece ışık ile çift etki",
                  "Dış hava koşullarına dayanıklı, su yalıtımlı üretim",
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
                Işıklı tabela türleri
              </h2>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Işıklı kutu harf:</strong>{" "}
                  Her harf ayrı ve hacimli; en kurumsal görünen ışıklı çözüm.
                  Detaylar için{" "}
                  <Link
                    href="/hizmetler/kutu-harf-tabela"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    kutu harf tabela
                  </Link>{" "}
                  sayfasına bakın.
                </li>
                <li>
                  <strong className="text-foreground">Pleksi ışıklı pano:</strong>{" "}
                  Geniş yüzey, canlı renk ve homojen ışık; ekonomik ve etkili.
                </li>
                <li>
                  <strong className="text-foreground">Işıklı kaset tabela:</strong>{" "}
                  Tek gövde içinde aydınlatma; hızlı ve pratik çözüm.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                LED aydınlatma neden önemli?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Işıklı tabelanın kalitesi büyük ölçüde kullanılan LED modülüne ve
                güç kaynağına bağlıdır. Doğru LED seçimi; homojen (leke yapmayan)
                bir aydınlatma, düşük elektrik gideri ve uzun ömür anlamına gelir.
                Biz dayanıklı LED modülleri ve uygun trafolarla, su yalıtımına
                dikkat ederek üretim yapıyoruz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Hangi işletmeye hangi ışıklı tabela?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Kafe, restoran ve perakende mağazaları için ışıklı kutu harf
                prestijli bir tercihtir; market, eczane ve hizmet işletmeleri için
                pleksi ışıklı pano geniş ve ekonomik bir çözüm sunar. İç mekân ve
                resepsiyon logoları içinse{" "}
                <Link
                  href="/hizmetler/kabartma-logo"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  kabartma logo
                </Link>{" "}
                daha uygundur. Doğru türü keşifte birlikte belirliyoruz.
              </p>
            </section>
          </div>
        </article>

        <Faq items={faq} />
        <CtaBand
          title="Işıklı tabelanız için ücretsiz teklif alın"
          text="Cephe fotoğrafınızı WhatsApp'tan gönderin; LED tipi, ölçü ve fiyatı birlikte netleştirelim."
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
