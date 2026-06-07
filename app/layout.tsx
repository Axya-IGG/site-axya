import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "axya — Inteligência em Gente e Gestão",
  description: "A axya estrutura a gestão de pessoas de empresas familiares do setor de serviços. Menos improviso com gente. Mais clareza, método e resultado.",
  icons: {
    icon: "https://axyaigg.com.br/wp-content/uploads/2025/10/cropped-cropped-X-Padrao-scaled-2-32x32.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
