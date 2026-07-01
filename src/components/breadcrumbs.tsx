import Link from "next/link";
import { SITE_URL } from "@/lib/services";

export type Crumb = { name: string; href: string };

// Görsel breadcrumb + BreadcrumbList yapısal verisi.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  };
  return (
    <nav aria-label="breadcrumb" className="mx-auto max-w-3xl px-4 pt-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i < items.length - 1 ? (
              <Link href={it.href} className="hover:text-foreground">
                {it.name}
              </Link>
            ) : (
              <span className="text-foreground">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
