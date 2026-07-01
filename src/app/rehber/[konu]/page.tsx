import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/services";
import { providerRef, ORG_ID } from "@/lib/schema";

export function generateStaticParams() {
  return articles.map((a) => ({ konu: a.slug }));
}

type Props = { params: Promise<{ konu: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { konu } = await params;
  const a = articles.find((x) => x.slug === konu);
  if (!a) return {};
  const url = `${SITE_URL}/rehber/${a.slug}`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: a.metaTitle,
      description: a.metaDescription,
      url,
      type: "article",
      locale: "tr_TR",
    },
  };
}

export default async function Page({ params }: Props) {
  const { konu } = await params;
  const a = articles.find((x) => x.slug === konu);
  if (!a) notFound();

  const url = `${SITE_URL}/rehber/${a.slug}`;
  const others = articles.filter((x) => x.slug !== a.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.metaDescription,
    datePublished: a.updated,
    dateModified: a.updated,
    inLanguage: "tr-TR",
    mainEntityOfPage: url,
    url,
    author: providerRef,
    publisher: { "@id": ORG_ID },
    about: { "@id": ORG_ID },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: a.faq.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Rehber", href: "/rehber" },
            { name: a.title, href: `/rehber/${a.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {a.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{a.intro}</p>

          <div className="mt-10 space-y-10">
            {a.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {s.h2}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-muted-foreground">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <Faq items={a.faq} />

        {/* İlgili rehberler (iç linkleme) */}
        <section className="mx-auto max-w-3xl px-4 pb-4">
          <h2 className="text-xl font-semibold tracking-tight">
            İlgili rehberler
          </h2>
          <ul className="mt-4 space-y-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/rehber/${o.slug}`}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {o.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/rehber"
                className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                ← Tüm rehbere dön
              </Link>
            </li>
          </ul>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
