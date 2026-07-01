import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://3dtabela.com"),
  title: {
    default: "3D Tabela | Işıklı & Kabartma Tabela Üretimi",
    template: "%s | 3D Tabela",
  },
  description:
    "3D kutu harf, ışıklı tabela, kabartma logo ve kurumsal tabela üretimi. Tasarımdan montaja anahtar teslim çözümler.",
  keywords: [
    "3d tabela",
    "kutu harf tabela",
    "ışıklı tabela",
    "kabartma harf",
    "kurumsal tabela",
    "reklam tabelası",
  ],
  openGraph: {
    title: "3D Tabela | Işıklı & Kabartma Tabela Üretimi",
    description:
      "3D kutu harf, ışıklı tabela ve kurumsal tabela üretimi. Anahtar teslim çözümler.",
    url: "https://3dtabela.com",
    siteName: "3D Tabela",
    locale: "tr_TR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "3D Tabela",
  image: "https://3dtabela.com/og.jpg",
  "@id": "https://3dtabela.com",
  url: "https://3dtabela.com",
  telephone: "+905446732202",
  email: "info@3dtabela.com",
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: "TR",
  description:
    "3D kutu harf, ışıklı tabela, kabartma logo ve kurumsal tabela üretimi. Tasarımdan montaja anahtar teslim çözümler.",
  sameAs: ["https://wa.me/905446732202"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
