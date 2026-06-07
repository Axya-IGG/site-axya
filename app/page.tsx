import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import Solucoes from "@/components/Solucoes";
import Pilares from "@/components/Pilares";
import Bios from "@/components/Bios";
import MarcasParceiras from "@/components/MarcasParceiras";
import Estrutura from "@/components/Estrutura";
import EmpresasFamiliares from "@/components/EmpresasFamiliares";
import Dores from "@/components/Dores";
import Valores from "@/components/Valores";
import Resultados from "@/components/Resultados";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBanner />
        <Solucoes />
        <Pilares />
        <Bios />
        <MarcasParceiras />
        <Estrutura />
        <EmpresasFamiliares />
        <Dores />
        <Valores />
        <Resultados />
        <CTA />
      </main>
      <Footer />

      <WhatsAppFloat />
    </>
  );
}
