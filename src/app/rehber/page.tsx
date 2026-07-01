import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { articles } from "@/lib/articles";
import { services, SITE_URL } from "@/lib/services";
import { providerRef } from "@/lib/schema";

const url = `${SITE_URL}/rehber`;

export const metadata: Metadata = {
  title: "Tabela Rehberi — Türleri, Fiyatları ve Seçim",
  description:
    "Tabela rehberi: kutu harf, ışıklı ve kabartma tabela türleri, fiyatları, malzeme seçimi ve ruhsat süreci. İşletmeniz için doğru tabelayı seçin.",
  alternates: { canonical: url },
  openGraph: {
    title: "Tabela Rehberi — Türleri, Fiyatları ve Seçim",
    description:
      "Kutu harf, ışıklı ve kabartma tabela türleri, fiyatları ve seçim rehberi.",
    url,
    type: "website",
    locale: "tr_TR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tabela Rehberi",
  url,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: providerRef,
  description:
    "Tabela türleri, fiyatları, malzeme seçimi ve ruhsat sürecine dair kapsamlı rehber.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Rehber", href: "/rehber" },
          ]}
        />

        <article className="mx-auto max-w-3xl px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="size-4" /> Tabela Rehberi
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Tabela Rehberi: Türleri, Fiyatları ve Doğru Seçim
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Tabela, bir işletmenin sokaktaki ilk izlenimidir. Bu rehberde tabela
            türlerini, malzemeleri, fiyatı belirleyen faktörleri ve izin
            sürecini bir araya getirdik; işletmeniz için en doğru tabelayı
            seçmenize yardımcı olacak her şey burada.
          </p>

          {/* Tabela türleri (hizmetlere köprü) */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              Tabela türleri
            </h2>
            <p className="mt-3 text-muted-foreground">
              En sık tercih edilen tabela türleri ve hangi ihtiyaca uygun
              oldukları:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="group flex items-center justify-between rounded-lg border p-4 hover:border-primary/40"
                >
                  <div>
                    <div className="font-semibold group-hover:text-primary">
                      {s.title}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {s.metaDescription.split(".")[0]}.
                    </div>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </section>

          {/* Cluster makaleler */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              Rehber yazıları
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tabela kararınızı kolaylaştıracak konu başlıkları:
            </p>
            <div className="mt-6 space-y-4">
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/rehber/${a.slug}`}
                  className="group block rounded-lg border p-5 hover:border-primary/40"
                >
                  <div className="font-semibold group-hover:text-primary">
                    {a.title}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Devamını oku <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Bölge köprüsü */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              İstanbul&apos;da tabela hizmeti
            </h2>
            <p className="mt-3 text-muted-foreground">
              İstanbul&apos;un tüm ilçelerinde tabela imalatı ve montajı
              yapıyoruz. Bölgesel bilgi için{" "}
              <Link
                href="/bolgeler/istanbul"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                İstanbul tabela imalatı
              </Link>{" "}
              sayfamıza göz atın.
            </p>
          </section>
        </article>

        <CtaBand />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
