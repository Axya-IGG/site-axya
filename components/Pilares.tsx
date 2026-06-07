"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK = "https://wa.me/5512997205261?text=Vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20diagn%C3%B3stico%20para%20empresas.";

const pilares = [
  {
    label: "Lideranças",
    title: "Lideranças mais preparadas geram empresas mais sustentáveis.",
    text: "A axya ajuda empresas a desenvolver lideranças mais estratégicas, alinhadas e capazes de conduzir equipes com mais clareza, cultura e resultado.",
    image: "https://axyaigg.com.br/wp-content/uploads/2026/05/Teste-1.png",
  },
  {
    label: "Processos",
    title: "Processos bem estruturados eliminam desperdícios e retrabalho.",
    text: "Mapeamos e organizamos processos internos para que a operação flua com mais eficiência, menos conflito e mais previsibilidade de resultado.",
    image: "https://axyaigg.com.br/wp-content/uploads/2026/05/Teste-1.png",
  },
  {
    label: "Pessoas",
    title: "Pessoas engajadas são o maior ativo de qualquer empresa.",
    text: "Trabalhamos cultura, clima organizacional e engajamento para construir equipes mais comprometidas, produtivas e alinhadas à visão do negócio.",
    image: "https://axyaigg.com.br/wp-content/uploads/2026/05/Teste-1.png",
  },
  {
    label: "Crescimento",
    title: "Crescimento sustentável exige estrutura e direção clara.",
    text: "Combinamos pessoas, processos e estratégia para criar as condições certas para crescer sem perder qualidade, cultura ou eficiência.",
    image: "https://axyaigg.com.br/wp-content/uploads/2026/05/Teste-1.png",
  },
];

export default function Pilares() {
  const [active, setActive] = useState(0);

  return (
    <section id="ppmf" className="w-full bg-navy py-[130px] px-[6%] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-pink text-[12px] font-bold uppercase tracking-[2px] mb-4">Método PPMF</p>
          <h2 className="font-spartan font-black text-white mb-4" style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1, letterSpacing: "-2px" }}>
            Método PPMF. Nosso jeito de fazer.
          </h2>
          <p className="text-white/65 text-[17px] max-w-[640px] mx-auto leading-[1.75]">
            O modelo de diagnóstico e solução para gestão de pessoas desenvolvido pela axya.<br />
            <span className="text-white/45 text-[15px]">Todo problema de gestão de pessoas se conecta a um dos quatro pilares do PPMF. É por eles que começamos.</span>
          </p>
        </div>

        <div className="grid gap-16" style={{ gridTemplateColumns: "1.1fr 0.7fr 1fr" }}>
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-[32px] overflow-hidden"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}
            >
              <img
                src={pilares[active].image}
                alt={pilares[active].label}
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Menu */}
          <div className="flex flex-col gap-3">
            {pilares.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-6 py-[22px] rounded-[18px] font-spartan text-[21px] font-semibold text-left transition-all duration-300 border ${
                  active === i
                    ? "bg-white text-navy border-white shadow-2xl"
                    : "bg-white/5 text-[#e9eef5] border-white/8 hover:translate-x-2 hover:border-cyan hover:bg-white/10"
                }`}
                style={{ backdropFilter: "blur(10px)" }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col justify-center"
            >
              <span className="text-pink text-[12px] font-bold uppercase tracking-[2px] mb-5">Pilares Estratégicos</span>
              <h2 className="font-spartan font-bold text-white mb-7" style={{ fontSize: "clamp(28px,3vw,44px)", lineHeight: 0.98, letterSpacing: "-1px" }}>
                {pilares[active].title}
              </h2>
              <p className="text-white/75 text-[17px] leading-[1.9] mb-10">{pilares[active].text}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center self-start px-[34px] py-[18px] rounded-2xl bg-white text-navy font-semibold transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg,#08d8ff,#f62982)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 18px 40px rgba(246,41,130,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#001832";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                Agendar diagnóstico
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media(max-width:1100px){
          .pilares-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
