import Link from "next/link";
import {
  Boxes,
  Lightbulb,
  Ruler,
  Wrench,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WHATSAPP } from "@/lib/services";

const services = [
  {
    icon: Boxes,
    title: "3D Kutu Harf",
    desc: "Paslanmaz, pleksi ve kompozit malzemeyle dayanıklı, hacimli kutu harf tabelalar.",
    href: "/hizmetler/kutu-harf-tabela",
  },
  {
    icon: Lightbulb,
    title: "Işıklı Tabela",
    desc: "LED aydınlatmalı, enerji tasarruflu, gece net okunan ışıklı tabela çözümleri.",
    href: "/hizmetler/isikli-tabela",
  },
  {
    icon: Ruler,
    title: "Kabartma Logo",
    desc: "Kurumsal kimliğinize uygun, hassas kesim kabartma harf ve logo uygulamaları.",
    href: "/hizmetler/kabartma-logo",
  },
  {
    icon: Wrench,
    title: "Montaj & Bakım",
    desc: "Keşiften montaja anahtar teslim hizmet, sonrasında bakım ve destek.",
    href: "#iletisim",
  },
];

const steps = [
  { n: "01", t: "Keşif & Ölçü", d: "Yerinde keşif ve ücretsiz ölçü alımı." },
  { n: "02", t: "Tasarım", d: "3D önizleme ile onaylı tasarım." },
  { n: "03", t: "Üretim", d: "Kendi atölyemizde kaliteli üretim." },
  { n: "04", t: "Montaj", d: "Profesyonel ekiple hızlı montaj." },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
              Tasarımdan montaja anahtar teslim
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Markanızı 3 boyutlu tabelalarla öne çıkarın
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-balance">
              3D kutu harf, ışıklı tabela ve kabartma logo üretiminde uçtan uca
              çözüm. Dayanıklı malzeme, temiz işçilik, zamanında teslimat.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Ücretsiz Teklif Al <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#hizmetler">Hizmetleri İncele</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="hizmetler" className="border-t bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Hizmetlerimiz</h2>
              <p className="mt-3 text-muted-foreground">
                İhtiyacınıza uygun tabela çözümünü birlikte belirleyelim.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <Link key={s.title} href={s.href} className="group">
                  <Card className="h-full transition-colors group-hover:border-primary/40">
                    <CardHeader>
                      <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <s.icon className="size-5" />
                      </div>
                      <CardTitle className="flex items-center gap-1">
                        {s.title}
                        <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                      </CardTitle>
                      <CardDescription>{s.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="surec" className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Nasıl Çalışıyoruz?</h2>
            <p className="mt-3 text-muted-foreground">
              Dört adımda tabelanız hazır.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="text-3xl font-bold text-muted-foreground/40">
                  {s.n}
                </div>
                <h3 className="mt-2 font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="iletisim" className="border-t bg-muted/30">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Projenizi konuşalım
              </h2>
              <p className="mt-3 text-muted-foreground">
                Ölçü ve keşif ücretsiz. En kısa sürede size özel teklif
                hazırlayalım.
              </p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary"
                  >
                    <Phone className="size-5 text-primary" />
                    <span>0544 673 22 02 (WhatsApp)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@3dtabela.com"
                    className="flex items-center gap-3 hover:text-primary"
                  >
                    <Mail className="size-5 text-primary" />
                    <span>info@3dtabela.com</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-5 text-primary" />
                  <span>İstanbul, Türkiye</span>
                </li>
              </ul>
              <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
                {["Ücretsiz keşif ve ölçü", "3D önizlemeli tasarım", "Garantili işçilik"].map(
                  (b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-primary" />
                      {b}
                    </li>
                  )
                )}
              </ul>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Hızlı İletişim</CardTitle>
                <CardDescription>
                  En hızlı yanıt için WhatsApp&apos;tan yazın; ölçü veya fotoğraf
                  gönderin, size özel teklif çıkaralım.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button asChild size="lg" className="w-full">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    WhatsApp&apos;tan Teklif Al <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="mt-3 w-full">
                  <a href="tel:+905446732202">
                    <Phone className="size-4" /> Hemen Ara: 0544 673 22 02
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
