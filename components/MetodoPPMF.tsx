"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK = "https://wa.me/5512997205261?text=Vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20diagn%C3%B3stico%20para%20empresas.";

const tabs = [
  {
    label: "O Método PPMF",
    content: {
      pillars: ["Pessoas", "Processos", "Marketing Interno", "Finanças RH"],
      title: "Como a Axya transforma gestão de pessoas em resultado.",
      body: [
        "Através do Método PPMF, nosso modelo próprio de diagnóstico e consultoria, analisamos com profundidade os quatro pilares que sustentam todo negócio.",
        "A partir dessa leitura, desenhamos estratégias sob medida para fortalecer a gestão, otimizar recursos e impulsionar crescimento sustentável.",
      ],
      box: "Nada superficial. Nada genérico.",
    },
  },
  {
    label: "Diagnóstico de Maturidade",
    content: {
      title: "Diagnóstico profundo para identificar onde sua empresa perde dinheiro.",
      body: [
        "Avaliamos os quatro pilares do negócio e mensuramos o nível de maturidade da operação.",
        "Identificamos gargalos, perdas invisíveis, falhas estruturais e oportunidades reais de melhoria.",
      ],
      box: "Objetivo: trazer clareza estratégica para decisões mais inteligentes.",
    },
  },
  {
    label: "Plano de Ação",
    content: {
      title: "Estratégias personalizadas para cada realidade empresarial.",
      body: [
        "Nenhuma empresa possui os mesmos desafios. Por isso, cada plano de ação é construído de forma prática e personalizada.",
        "Direcionamos recursos, prioridades e execução para o que realmente gera impacto.",
      ],
    },
  },
  {
    label: "Acompanhamento Contínuo",
    content: {
      title: "Consultoria próxima, estratégica e contínua.",
      body: [
        "A Axya atua lado a lado com a liderança acompanhando execução, evolução e ajustes.",
        "O acompanhamento contínuo permite adaptar estratégias rapidamente conforme a realidade da operação muda.",
      ],
    },
  },
  {
    label: "Resultados & Evolução",
    content: {
      title: "Gestão mais clara. Crescimento mais sustentável.",
      body: [
        "Monitoramos métricas, avaliamos evolução e entregamos uma visão estratégica do progresso.",
        "O foco não está apenas em organizar pessoas, mas em transformar gestão em performance real.",
      ],
      results: ["Lideranças mais fortes", "Menos desgaste operacional", "Mais clareza estratégica"],
    },
  },
  {
    label: "Como Contratar",
    content: {
      title: "Prepare sua empresa para crescer com estrutura.",
      body: ["O primeiro passo é entender profundamente a realidade do seu negócio."],
      steps: [
        { num: "1.", title: "Aplicação", desc: "Preencha o formulário no site." },
        { num: "2.", title: "Reunião", desc: "Conversamos para entender necessidades e objetivos." },
        { num: "3.", title: "Proposta Personalizada", desc: "Estruturamos uma solução sob medida para sua operação." },
      ],
      cta: true,
    },
  },
];

export default function MetodoPPMF() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="somos" className="w-full bg-white py-28 px-[5%] overflow-hidden">
      <div className="max-w-[1450px] mx-auto">
        <div className="grid gap-12" style={{ gridTemplateColumns: active !== null ? "0px 320px 1fr" : "420px 320px 0fr", transition: "grid-template-columns 0.6s ease" }}>
          {/* Left description — hides when tab open */}
          <div style={{ overflow: "hidden", opacity: active !== null ? 0 : 1, visibility: active !== null ? "hidden" : "visible", transform: active !== null ? "translateX(-60px)" : "none", transition: "all 0.45s ease" }}>
            <p className="text-pink font-semibold text-[18px] mb-3 tracking-wide">Método PPMF</p>
            <h2 className="font-spartan font-black text-navy mb-7" style={{ fontSize: "clamp(36px,4vw,54px)", lineHeight: 0.9, letterSpacing: "-3px" }}>
              Gestão de pessoas<br />que sustenta crescimento.
            </h2>
            <p className="text-[#5d6878] text-[18px] leading-[1.9] max-w-xs">
              Diagnóstico, estratégia e acompanhamento contínuo para empresas que precisam organizar pessoas, processos e performance de forma sustentável.
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-0.5">
            {tabs.map((tab, i) => {
              const isCTA = i === tabs.length - 1;
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(isActive ? null : i)}
                  className={`flex justify-between items-center px-[22px] py-5 rounded-[18px] text-[18px] font-bold transition-all duration-300 text-left ${
                    isCTA
                      ? "mt-3 text-white"
                      : isActive
                      ? "text-pink"
                      : "text-navy border-b border-navy/7 hover:text-pink hover:translate-x-1"
                  }`}
                  style={
                    isCTA
                      ? { background: "linear-gradient(135deg, #001832 0%, #0b2444 45%, #f62982 100%)", boxShadow: "0 18px 40px rgba(246,41,130,.18)" }
                      : {}
                  }
                >
                  {tab.label}
                  <span
                    className="transition-transform duration-300"
                    style={{ transform: isActive ? "rotate(90deg)" : "none" }}
                  >›</span>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div
            style={{
              opacity: active !== null ? 1 : 0,
              visibility: active !== null ? "visible" : "hidden",
              transform: active !== null ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.45s ease",
              background: "#f8fafc",
              border: "1px solid rgba(0,24,50,.05)",
              borderRadius: 34,
              padding: 46,
              minHeight: 520,
            }}
          >
            <AnimatePresence mode="wait">
              {active !== null && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  {tabs[active].content.pillars && (
                    <div className="flex flex-wrap gap-2 mb-7">
                      {tabs[active].content.pillars!.map((p) => (
                        <span key={p} className="px-[18px] py-[10px] rounded-full text-pink text-[13px] font-bold" style={{ background: "rgba(246,41,130,.08)", border: "1px solid rgba(246,41,130,.12)" }}>{p}</span>
                      ))}
                    </div>
                  )}
                  <h3 className="font-spartan font-black text-navy mb-6" style={{ fontSize: "clamp(26px,3vw,42px)", lineHeight: 1, letterSpacing: "-1px" }}>
                    {tabs[active].content.title}
                  </h3>
                  {tabs[active].content.body.map((b, i) => (
                    <p key={i} className="text-[#5d6878] text-[17px] leading-[1.9] mb-4">{b}</p>
                  ))}
                  {tabs[active].content.box && (
                    <div className="mt-8 p-7 rounded-3xl bg-white border border-navy/5 text-navy text-[18px] font-semibold leading-[1.8]">
                      {tabs[active].content.box}
                    </div>
                  )}
                  {tabs[active].content.results && (
                    <div className="mt-8 flex flex-col gap-4">
                      {tabs[active].content.results!.map((r) => (
                        <div key={r} className="flex gap-3 items-start">
                          <span className="text-cyan text-[18px] font-black">✔</span>
                          <p className="text-navy text-[16px] font-medium">{r}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {tabs[active].content.steps && (
                    <div className="mt-8 flex flex-col gap-5">
                      {tabs[active].content.steps!.map((s) => (
                        <div key={s.num} className="flex gap-4 items-start pb-5 border-b border-navy/5">
                          <strong className="font-spartan text-[26px] text-pink">{s.num}</strong>
                          <div>
                            <h4 className="text-[20px] text-navy font-bold mb-1">{s.title}</h4>
                            <p className="text-[#5d6878] text-[15px] leading-[1.7]">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {tabs[active].content.cta && (
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center mt-9 px-[30px] py-[18px] rounded-[18px] bg-navy text-white font-bold transition-all duration-300 hover:bg-pink hover:-translate-y-1"
                    >
                      Solicitar diagnóstico
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile: stack vertically */}
      <style>{`
        @media(max-width:1200px){
          .ppmf-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
