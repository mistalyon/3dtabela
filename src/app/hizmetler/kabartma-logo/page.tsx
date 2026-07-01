import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { Faq, type QA } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { services, SITE_URL } from "@/lib/services";

const svc = services.find((s) => s.slug === "kabartma-logo")!;
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
    q: "Kabartma logo nedir?",
    a: "Kabartma logo, markanızın logosunun üç boyutlu, yüzeyden kabarık biçimde üretilip duvara veya cepheye uygulanmasıdır. Resepsiyon, ofis girişi, toplantı odası ve mağaza içi için kurumsal, kaliteli bir görünüm sağlar.",
  },
  {
    q: "Kabartma logo hangi malzemelerden yapılır?",
    a: "En sık pleksi, paslanmaz, ahşap ve kompozit malzeme kullanılır. Fırça darbeli paslanmaz metalik ve şık dururken, pleksi renk ve boyut esnekliği sunar; malzeme, mekânın konseptine göre seçilir.",
  },
  {
    q: "Kabartma logo ile tabela arasındaki fark nedir?",
    a: "Kabartma logo genellikle iç mekân ve resepsiyon gibi yakın mesafeden görülen alanlar için, tabela ise cephede uzaktan görünürlük için üretilir. Cephe için hacimli çözüm istiyorsanız kutu harf tabela daha uygundur.",
  },
  {
    q: "Kabartma logo ışıklı olabilir mi?",
    a: "Evet, arkadan aydınlatmalı (halo) kabartma logo uygulamalarıyla duvarda zarif bir ışık etkisi oluşturulabilir. İhtiyacınıza göre ışıklı veya ışıksız üretiyoruz.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kabartma Logo Uygulaması",
  serviceType: "Kabartma logo",
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
            { name: "Kabartma Logo", href: `/hizmetler/${svc.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Kabartma Logo &amp; Kabartma Harf Uygulaması
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Kabartma logo, markanızın logosunun üç boyutlu ve yüzeyden kabarık
            biçimde duvara uygulanmasıdır. Resepsiyon, ofis girişi ve mağaza içi
            için kurumsal kimliğinize uygun; pleksi, paslanmaz ve ahşap
            malzemeyle hassas kesim üretiyoruz.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Nerelerde kullanılır?
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Resepsiyon ve ofis giriş duvarları",
                  "Toplantı odaları ve karşılama alanları",
                  "Mağaza içi marka ve slogan uygulamaları",
                  "Fuar standları ve kurumsal etkinlikler",
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
                Malzeme ve görünüm seçenekleri
              </h2>
              <p className="mt-3 text-muted-foreground">
                Kabartma logoda malzeme, mekânın konseptini belirler. Fırça
                darbeli paslanmaz metalik ve prestijli bir hava verirken; pleksi
                renk, kalınlık ve boyutta esneklik sunar. Ahşap ve kompozit ise
                sıcak veya modern konseptlere uyum sağlar. Arkadan aydınlatmalı
                (halo) uygulamayla logonuz duvarda ışıklı bir etkiyle öne çıkar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Cephe için hacimli çözüm mü arıyorsunuz?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Kabartma logo iç mekân ve yakın mesafe için idealdir. Dükkân
                cephenizde uzaktan görünen, hacimli ve ışıklı bir çözüm
                istiyorsanız{" "}
                <Link
                  href="/hizmetler/kutu-harf-tabela"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  kutu harf tabela
                </Link>{" "}
                ya da{" "}
                <Link
                  href="/hizmetler/isikli-tabela"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  ışıklı tabela
                </Link>{" "}
                daha doğru tercih olur.
              </p>
            </section>
          </div>
        </article>

        <Faq items={faq} />
        <CtaBand
          title="Kabartma logonuz için ücretsiz teklif alın"
          text="Logo dosyanızı ve uygulama alanının fotoğrafını WhatsApp'tan gönderin; malzeme ve fiyatı birlikte belirleyelim."
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
