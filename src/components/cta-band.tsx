import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP } from "@/lib/services";

export function CtaBand({
  title = "Projeniz için ücretsiz teklif alın",
  text = "Ölçü ve keşif ücretsiz. Fotoğraf veya ölçü gönderin, en kısa sürede size özel fiyat çıkaralım.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-balance">
          {title}
        </h2>
        <p className="max-w-2xl text-muted-foreground text-balance">{text}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              WhatsApp&apos;tan Yaz <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+905446732202">
              <Phone className="size-4" /> 0544 673 22 02
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
