import Link from "next/link";
import { Boxes } from "lucide-react";
import { services } from "@/lib/services";
import { regions } from "@/lib/regions";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Boxes className="size-5" />
            3D Tabela
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            3D kutu harf, ışıklı tabela ve kabartma logo üretiminde tasarımdan
            montaja anahtar teslim çözümler.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Hizmetler</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            {regions.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/bolgeler/${r.slug}`}
                  className="hover:text-foreground"
                >
                  {r.name} Tabela
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">İletişim</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="https://wa.me/905446732202"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                0544 673 22 02 (WhatsApp)
              </a>
            </li>
            <li>
              <a href="mailto:info@3dtabela.com" className="hover:text-foreground">
                info@3dtabela.com
              </a>
            </li>
            <li>İstanbul, Türkiye</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} 3dtabela.com — Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
