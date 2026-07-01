import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { Faq, type QA } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { regions } from "@/lib/regions";
import { districts } from "@/lib/districts";
import { SITE_URL } from "@/lib/services";

const reg = regions.find((r) => r.slug === "istanbul")!;
const url = `${SITE_URL}/bolgeler/${reg.slug}`;

export const metadata: Metadata = {
  title: reg.metaTitle,
  description: reg.metaDescription,
  alternates: { canonical: url },
  openGraph: {
    title: reg.metaTitle,
    description: reg.metaDescription,
    url,
    type: "article",
    locale: "tr_TR",
  },
};

const avrupa = [
  "Başakşehir",
  "İkitelli",
  "Bağcılar",
  "Küçükçekmece",
  "Esenyurt",
  "Beylikdüzü",
  "Bahçelievler",
  "Güngören",
  "Zeytinburnu",
  "Şişli",
  "Beyoğlu",
  "Fatih",
];
const anadolu = [
  "Kadıköy",
  "Ümraniye",
  "Ataşehir",
  "Maltepe",
  "Kartal",
  "Pendik",
  "Sancaktepe",
  "Üsküdar",
  "Çekmeköy",
  "Tuzla",
];

const faq: QA[] = [
  {
    q: "İstanbul'un hangi ilçelerine tabela montajı yapıyorsunuz?",
    a: "İstanbul'un hem Avrupa hem Anadolu yakasındaki tüm ilçelere hizmet veriyoruz. Başakşehir, İkitelli, Bağcılar, Küçükçekmece, Esenyurt, Şişli, Beyoğlu, Kadıköy, Ümraniye, Ataşehir, Kartal, Pendik ve diğer ilçelerde keşif, üretim ve montaj yapıyoruz.",
  },
  {
    q: "İstanbul'da tabela keşfi ve teklif ücretli mi?",
    a: "Hayır. İstanbul içinde yerinde keşif, ölçü alımı ve fiyat teklifi tamamen ücretsizdir. Dilerseniz cephe fotoğrafınızı WhatsApp'tan göndererek yerinde keşfe gerek kalmadan da ön fiyat alabilirsiniz.",
  },
  {
    q: "İstanbul'da tabela ne kadar sürede hazır olur?",
    a: "Tasarım onayından sonra üretim genellikle birkaç iş günü sürer; montaj çoğunlukla aynı gün tamamlanır. İstanbul içi trafik ve cephe koşulları planlamaya dahil edilir, teslim tarihini keşifte netleştiririz.",
  },
  {
    q: "İstanbul tabela fiyatları neye göre değişir?",
    a: "Fiyat; tabela türü (kutu harf, ışıklı, kabartma), ölçü, malzeme, ışıklı olup olmaması ve montaj yüksekliğine göre değişir. İlçe fark etmeksizin net fiyat için ölçü veya fotoğraf yeterlidir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "İstanbul Tabela İmalatı",
  serviceType: "Tabela imalatı ve montajı",
  areaServed: { "@type": "City", name: "İstanbul" },
  provider: {
    "@type": "LocalBusiness",
    name: "3D Tabela",
    telephone: "+905446732202",
    url: SITE_URL,
    areaServed: "İstanbul",
  },
  description: reg.metaDescription,
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
            { name: "Bölgeler", href: "/bolgeler/istanbul" },
            { name: "İstanbul", href: `/bolgeler/${reg.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            İstanbul Tabela İmalatı
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            İstanbul&apos;da tabela imalatı yaptırmak isteyen işletmelere; kutu
            harf, ışıklı tabela ve kabartma logo üretiminde uçtan uca çözüm
            sunuyoruz. Avrupa ve Anadolu yakasının tüm ilçelerinde ücretsiz
            keşif, kendi atölyemizde kaliteli üretim ve profesyonel montaj ile
            markanızı sokakta öne çıkarıyoruz.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                İstanbul&apos;da verdiğimiz tabela hizmetleri
              </h2>
              <p className="mt-3 text-muted-foreground">
                İşletmenizin cephesine, konseptine ve bütçenize göre en doğru
                tabela türünü birlikte belirliyoruz. Başlıca hizmetlerimiz:
              </p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <Link
                    href="/hizmetler/kutu-harf-tabela"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Kutu harf tabela
                  </Link>{" "}
                  — paslanmaz, pleksi ve kompozit malzemeyle hacimli, kurumsal
                  cephe tabelaları.
                </li>
                <li>
                  <Link
                    href="/hizmetler/isikli-tabela"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Işıklı tabela
                  </Link>{" "}
                  — LED aydınlatmalı, gece net okunan, enerji tasarruflu
                  çözümler.
                </li>
                <li>
                  <Link
                    href="/hizmetler/kabartma-logo"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Kabartma logo
                  </Link>{" "}
                  — resepsiyon ve iç mekân için 3 boyutlu kurumsal logo
                  uygulamaları.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                İstanbul&apos;un iki yakasında da yanınızdayız
              </h2>
              <p className="mt-3 text-muted-foreground">
                İstanbul, Türkiye&apos;nin ticaret ve reklam merkezidir; her
                cadde, her AVM ve her sanayi bölgesi güçlü bir tabela rekabetine
                sahiptir. Biz de bu rekabette işletmenizi öne çıkarmak için
                Avrupa ve Anadolu yakasının tümüne montaj yapıyoruz.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border p-5">
                  <div className="flex items-center gap-2 font-semibold">
                    <MapPin className="size-4 text-primary" /> Avrupa Yakası
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {avrupa.join(", ")} ve çevresi.
                  </p>
                </div>
                <div className="rounded-lg border p-5">
                  <div className="flex items-center gap-2 font-semibold">
                    <MapPin className="size-4 text-primary" /> Anadolu Yakası
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {anadolu.join(", ")} ve çevresi.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Hizmet verdiğimiz ilçeler
              </h2>
              <p className="mt-3 text-muted-foreground">
                İstanbul genelinde çalışıyoruz; aşağıdaki ilçeler için ayrıntılı
                bilgi sayfalarımıza göz atabilirsiniz.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {districts.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/bolgeler/istanbul/${d.slug}`}
                    className="rounded-full border px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
                  >
                    {d.name} Tabela
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Neden İstanbul&apos;da bizi tercih etmelisiniz?
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Kendi atölyemizde üretim — aracı yok, doğrudan imalatçı fiyatı",
                  "İstanbul içi ücretsiz keşif ve ölçü",
                  "3D önizleme ile onaylı tasarım",
                  "Dayanıklı malzeme ve garantili işçilik",
                  "Hızlı montaj ve sonrasında bakım desteği",
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
                İstanbul&apos;da tabela süreci nasıl işliyor?
              </h2>
              <ol className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">1. İletişim:</strong>{" "}
                  WhatsApp&apos;tan cephe fotoğrafı veya kaba ölçü gönderin.
                </li>
                <li>
                  <strong className="text-foreground">2. Ücretsiz keşif:</strong>{" "}
                  İlçenize gelip yerinde ölçü ve keşif yapalım.
                </li>
                <li>
                  <strong className="text-foreground">3. Tasarım & onay:</strong>{" "}
                  Tabelanın cephedeki 3D önizlemesini onayınıza sunalım.
                </li>
                <li>
                  <strong className="text-foreground">4. Üretim & montaj:</strong>{" "}
                  Atölyemizde üretip profesyonel ekiple monte edelim.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                İstanbul tabela fiyatları
              </h2>
              <p className="mt-3 text-muted-foreground">
                İstanbul&apos;da tabela fiyatı sabit bir liste değildir; her
                cephe ve her işletme farklıdır. Fiyatı belirleyen etkenler:
                seçtiğiniz tabela türü, harf/ölçü boyutu, malzeme, ışıklı olup
                olmaması ve montaj yüksekliğidir. İlçe fark etmeksizin net fiyat
                için tek yapmanız gereken bir cephe fotoğrafı göndermek — keşif
                ve teklif ücretsizdir.
              </p>
            </section>
          </div>
        </article>

        <Faq items={faq} />
        <CtaBand
          title="İstanbul'da tabelanız için ücretsiz teklif alın"
          text="İlçenizi ve cephe fotoğrafınızı WhatsApp'tan gönderin; keşif için gelelim, size özel fiyatı çıkaralım."
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
