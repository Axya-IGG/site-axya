import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import MetodoPPMF from "@/components/MetodoPPMF";
import Pilares from "@/components/Pilares";
import Estrutura from "@/components/Estrutura";
import EmpresasFamiliares from "@/components/EmpresasFamiliares";
import Posicionamento from "@/components/Posicionamento";
import Dores from "@/components/Dores";
import Valores from "@/components/Valores";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBanner />
        <MetodoPPMF />
        <Pilares />
        <Estrutura />
        <EmpresasFamiliares />
        <Posicionamento />
        <Dores />
        <Valores />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
