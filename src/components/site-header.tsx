import Link from "next/link";
import { Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, WHATSAPP } from "@/lib/services";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Boxes className="size-6" />
          <span className="text-lg">3D Tabela</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          <Link href="/" className="hover:text-foreground">
            Ana Sayfa
          </Link>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              className="hover:text-foreground"
            >
              {s.title}
            </Link>
          ))}
          <Link href="/rehber" className="hover:text-foreground">
            Rehber
          </Link>
        </nav>
        <Button asChild size="sm">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Teklif Al
          </a>
        </Button>
      </div>
    </header>
  );
}
