export type QA = { q: string; a: string };

// FAQ listesi + FAQPage yapısal verisi (Google zengin sonuç + LLM/AEO için).
export function Faq({ items }: { items: QA[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Sık Sorulan Sorular
      </h2>
      <div className="mt-8 divide-y">
        {items.map((it) => (
          <details key={it.q} className="group py-4">
            <summary className="cursor-pointer list-none font-semibold marker:content-none">
              {it.q}
            </summary>
            <p className="mt-2 text-muted-foreground">{it.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
