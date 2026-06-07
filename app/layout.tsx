import type { Metadata } from "next";
import { League_Spartan, Open_Sans } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-spartan",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "axya — Inteligência em Gente e Gestão",
  description:
    "A axya estrutura a gestão de pessoas de empresas familiares do setor de serviços. Menos improviso com gente. Mais clareza, método e resultado.",
  icons: {
    icon: "https://axyaigg.com.br/wp-content/uploads/2025/10/cropped-cropped-X-Padrao-scaled-2-32x32.png",
  },
  openGraph: {
    title: "axya — Inteligência em Gente e Gestão",
    description:
      "A axya estrutura a gestão de pessoas de empresas familiares do setor de serviços. Menos improviso com gente. Mais clareza, método e resultado.",
    url: "https://lp.axyaigg.com.br",
    siteName: "axya",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${leagueSpartan.variable} ${openSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://axyaigg.com.br" />
      </head>
      <body>{children}</body>
    </html>
  );
}
