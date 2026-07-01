import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { Faq, type QA } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { cities, getCity } from "@/lib/cities";
import { SITE_URL } from "@/lib/services";

export function generateStaticParams() {
  return cities.flatMap((c) =>
    c.districts.map((d) => ({ sehir: c.slug, ilce: d.slug }))
  );
}

type Props = { params: Promise<{ sehir: string; ilce: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sehir, ilce } = await params;
  const c = getCity(sehir);
  const d = c?.districts.find((x) => x.slug === ilce);
  if (!c || !d) return {};
  // Başlık ilçeye özgü BENZERSİZ kuyrukla kurulur → başlıklar aynı olmaz.
  const title = `${d.name} Tabela — ${d.tail}`;
  const description = `${d.name} tabela imalatı: kutu harf, ışıklı tabela ve kabartma logo. ${d.name} tabelacı olarak ücretsiz keşif, hızlı montaj ve garantili işçilikle yanınızdayız.`;
  const url = `${SITE_URL}/bolgeler/${c.slug}/${d.slug}`;
  return {
    title,
    description,
    keywords: [
      d.primaryKeyword,
      d.secondaryKeyword,
      `${d.name.toLocaleLowerCase("tr")} kutu harf tabela`,
      `${d.name.toLocaleLowerCase("tr")} ışıklı tabela`,
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", locale: "tr_TR" },
  };
}

export default async function Page({ params }: Props) {
  const { sehir, ilce } = await params;
  const c = getCity(sehir);
  const d = c?.districts.find((x) => x.slug === ilce);
  if (!c || !d) notFound();

  const url = `${SITE_URL}/bolgeler/${c.slug}/${d.slug}`;
  const faq: QA[] = [
    { q: d.faqQ, a: d.faqA },
    {
      q: `${d.name}'da keşif ve teklif ücretli mi?`,
      a: `Hayır. ${d.name} içinde yerinde keşif, ölçü ve fiyat teklifi ücretsizdir. Cephe fotoğrafınızı WhatsApp'tan göndererek ön fiyat da alabilirsiniz.`,
    },
    {
      q: `${d.name}'da tabela fiyatı neye göre değişir?`,
      a: "Fiyat; tabela türü, ölçü, malzeme, ışıklı olup olmaması ve montaj yüksekliğine göre değişir. Net fiyat için ölçü veya fotoğraf yeterlidir.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${d.name} Tabela İmalatı`,
    serviceType: "Tabela imalatı ve montajı",
    areaServed: { "@type": "AdministrativeArea", name: `${d.name}, ${c.name}` },
    provider: {
      "@type": "LocalBusiness",
      name: "3D Tabela",
      telephone: "+905446732202",
      url: SITE_URL,
    },
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
            { name: d.name, href: `/bolgeler/${c.slug}/${d.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {d.name} Tabela İmalatı
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{d.intro}</p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                {d.name}&apos;da tabela çözümlerimiz
              </h2>
              <p className="mt-3 text-muted-foreground">{d.local}</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <Link
                    href="/hizmetler/kutu-harf-tabela"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Kutu harf tabela
                  </Link>{" "}
                  — paslanmaz, pleksi ve kompozit malzemeyle hacimli cephe
                  tabelaları.
                </li>
                <li>
                  <Link
                    href="/hizmetler/isikli-tabela"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Işıklı tabela
                  </Link>{" "}
                  — LED aydınlatmalı, gece net okunan çözümler.
                </li>
                <li>
                  <Link
                    href="/hizmetler/kabartma-logo"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Kabartma logo
                  </Link>{" "}
                  — resepsiyon ve iç mekân için 3 boyutlu logo uygulamaları.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Neden bizi tercih etmelisiniz?
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Kendi atölyemizde üretim — doğrudan imalatçı fiyatı",
                  `${d.name} içinde ücretsiz keşif ve ölçü`,
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
                {c.name} genelinde hizmetinizdeyiz
              </h2>
              <p className="mt-3 text-muted-foreground">
                {d.name}, {c.name} ilinin canlı ticaret bölgelerinden biridir;{" "}
                {d.name} tabelacı olarak buradaki tüm mahalleler ve çevre
                ilçelere de hizmet veriyoruz. Daha geniş bilgi için{" "}
                <Link
                  href={`/bolgeler/${c.slug}`}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {c.name} tabela imalatı
                </Link>{" "}
                sayfamıza göz atabilirsiniz.
              </p>
            </section>
          </div>
        </article>

        <Faq items={faq} />
        <CtaBand
          title={`${d.name}'da tabelanız için ücretsiz teklif alın`}
          text="Cephe fotoğrafınızı WhatsApp'tan gönderin; keşif için gelelim, size özel fiyatı çıkaralım."
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
