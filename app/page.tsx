import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import Solucoes from "@/components/Solucoes";
import Pilares from "@/components/Pilares";
import Estrutura from "@/components/Estrutura";
import EmpresasFamiliares from "@/components/EmpresasFamiliares";
import Posicionamento from "@/components/Posicionamento";
import Dores from "@/components/Dores";
import Valores from "@/components/Valores";
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
        <Estrutura />
        <EmpresasFamiliares />
        <Posicionamento />
        <Dores />
        <Valores />
        <CTA />
      </main>
      <Footer />

      <WhatsAppFloat />
    </>
  );
}
