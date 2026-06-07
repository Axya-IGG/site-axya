import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import Solucoes from "@/components/Solucoes";
import Pilares from "@/components/Pilares";
import Bios from "@/components/Bios";
import MarcasParceiras from "@/components/MarcasParceiras";
import EmpresasFamiliares from "@/components/EmpresasFamiliares";
import Resultados from "@/components/Resultados";
import Depoimentos from "@/components/Depoimentos";
import Valores from "@/components/Valores";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FormPopup from "@/components/FormPopup";

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
        <EmpresasFamiliares />
        <Resultados />
        <Depoimentos />
        <Valores />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <FormPopup />
    </>
  );
}
