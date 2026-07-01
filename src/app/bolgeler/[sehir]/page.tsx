import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { Faq, type QA } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { cities, getCity } from "@/lib/cities";
import { SITE_URL } from "@/lib/services";

export function generateStaticParams() {
  return cities.map((c) => ({ sehir: c.slug }));
}

type Props = { params: Promise<{ sehir: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sehir } = await params;
  const c = getCity(sehir);
  if (!c) return {};
  const url = `${SITE_URL}/bolgeler/${c.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: [
      `${c.slug} tabela`,
      `${c.slug} tabela imalatı`,
      `${c.slug} tabelacı`,
      `${c.slug} kutu harf tabela`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      type: "article",
      locale: "tr_TR",
    },
  };
}

export default async function Page({ params }: Props) {
  const { sehir } = await params;
  const c = getCity(sehir);
  if (!c) notFound();

  const url = `${SITE_URL}/bolgeler/${c.slug}`;
  const faq: QA[] = [
    {
      q: `${c.name}'da hangi ilçelere tabela hizmeti veriyorsunuz?`,
      a: `${c.name} genelinde hizmet veriyoruz. ${c.districts
        .map((d) => d.name)
        .join(", ")} başta olmak üzere tüm ilçe ve beldelerde keşif, üretim ve montaj yapıyoruz.`,
    },
    {
      q: `${c.name}'da tabela keşfi ve teklif ücretli mi?`,
      a: `Hayır. ${c.name} içinde yerinde keşif, ölçü ve fiyat teklifi tamamen ücretsizdir. Cephe fotoğrafınızı WhatsApp'tan göndererek yerinde keşfe gerek kalmadan da ön fiyat alabilirsiniz.`,
    },
    {
      q: `${c.name} tabela fiyatları neye göre değişir?`,
      a: "Fiyat; tabela türü (kutu harf, ışıklı, kabartma), ölçü, malzeme, ışıklı olup olmaması ve montaj yüksekliğine göre değişir. İlçe fark etmeksizin net fiyat için ölçü veya fotoğraf yeterlidir.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${c.name} Tabela İmalatı`,
    serviceType: "Tabela imalatı ve montajı",
    areaServed: { "@type": "City", name: c.name },
    provider: {
      "@type": "LocalBusiness",
      name: "3D Tabela",
      telephone: "+905446732202",
      url: SITE_URL,
    },
    description: c.metaDescription,
    url,
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: c.name, href: `/bolgeler/${c.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {c.name} Tabela İmalatı
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{c.intro}</p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                {c.name}&apos;da verdiğimiz tabela hizmetleri
              </h2>
              <p className="mt-3 text-muted-foreground">{c.character}</p>
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
                {c.name}&apos;da hizmet verdiğimiz ilçeler
              </h2>
              <p className="mt-3 text-muted-foreground">
                {c.name} genelinde çalışıyoruz; aşağıdaki ilçeler için ayrıntılı
                bilgi sayfalarımıza göz atabilirsiniz.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.districts.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/bolgeler/${c.slug}/${d.slug}`}
                    className="rounded-full border px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
                  >
                    {d.name} Tabela
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Neden {c.name}&apos;da bizi tercih etmelisiniz?
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Kendi atölyemizde üretim — aracı yok, doğrudan imalatçı fiyatı",
                  `${c.name} içinde ücretsiz keşif ve ölçü`,
                  "3D önizleme ile onaylı tasarım",
                  "Dayanıklı malzeme, garantili işçilik ve hızlı montaj",
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
                {c.name} tabela fiyatları
              </h2>
              <p className="mt-3 text-muted-foreground">
                {c.name}&apos;da tabela fiyatı sabit bir liste değildir; her
                cephe ve her işletme farklıdır. Fiyatı belirleyen etkenler:
                seçtiğiniz tabela türü, harf/ölçü boyutu, malzeme, ışıklı olup
                olmaması ve montaj yüksekliğidir. İlçe fark etmeksizin net fiyat
                için tek yapmanız gereken bir cephe fotoğrafı göndermek — keşif
                ve teklif ücretsizdir.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" /> Plaka {c.plate} ·{" "}
                {c.name}
              </div>
            </section>
          </div>
        </article>

        <Faq items={faq} />
        <CtaBand
          title={`${c.name}'da tabelanız için ücretsiz teklif alın`}
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
