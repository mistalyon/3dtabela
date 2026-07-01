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
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Boxes,
    title: "3D Kutu Harf",
    desc: "Paslanmaz, pleksi ve kompozit malzemeyle dayanıklı, hacimli kutu harf tabelalar.",
  },
  {
    icon: Lightbulb,
    title: "Işıklı Tabela",
    desc: "LED aydınlatmalı, enerji tasarruflu, gece net okunan ışıklı tabela çözümleri.",
  },
  {
    icon: Ruler,
    title: "Kabartma Logo",
    desc: "Kurumsal kimliğinize uygun, hassas kesim kabartma harf ve logo uygulamaları.",
  },
  {
    icon: Wrench,
    title: "Montaj & Bakım",
    desc: "Keşiften montaja anahtar teslim hizmet, sonrasında bakım ve destek.",
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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Boxes className="size-6" />
            <span className="text-lg">3D Tabela</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href="#hizmetler" className="hover:text-foreground">
              Hizmetler
            </Link>
            <Link href="#surec" className="hover:text-foreground">
              Süreç
            </Link>
            <Link href="#iletisim" className="hover:text-foreground">
              İletişim
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#iletisim">Teklif Al</Link>
          </Button>
        </div>
      </header>

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
                <Link href="#iletisim">
                  Ücretsiz Teklif Al <ArrowRight className="size-4" />
                </Link>
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
                <Card key={s.title}>
                  <CardHeader>
                    <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <s.icon className="size-5" />
                    </div>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                </Card>
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

        {/* CTA / Contact */}
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
                <li className="flex items-center gap-3">
                  <Phone className="size-5 text-primary" />
                  <a href="https://wa.me/905446732202" target="_blank" rel="noopener noreferrer" className="hover:text-primary">0544 673 22 02 (WhatsApp)</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 text-primary" />
                  <span>info@3dtabela.com</span>
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
                <CardTitle>Teklif Formu</CardTitle>
                <CardDescription>
                  Bilgilerinizi bırakın, biz sizi arayalım.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      placeholder="Ad Soyad"
                      name="name"
                    />
                    <input
                      className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      placeholder="Telefon"
                      name="phone"
                    />
                  </div>
                  <input
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="E-posta"
                    type="email"
                    name="email"
                  />
                  <textarea
                    className="min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="Projenizden kısaca bahsedin..."
                    name="message"
                  />
                  <Button type="submit" className="w-full">
                    Teklif İste
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Boxes className="size-5" />
            3D Tabela
          </div>
          <p>© {new Date().getFullYear()} 3dtabela.com — Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
