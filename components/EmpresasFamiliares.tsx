"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const familiarStats = [
  { label: "Empresas familiares no Brasil", pct: 90 },
  { label: "Responsável por gerar 75% dos empregos", pct: 75 },
  { label: "Responsáveis por 65% do PIB", pct: 65 },
  { label: "Apenas 30% chegam à 3ª geração", pct: 30 },
  { label: "Apenas 15% sobrevivem", pct: 15 },
];

const servicosStats = [
  { label: "Recorde em geração de empregos", value: "15,2 MM", year: "2023" },
  { label: "Recorde de empresas ativas", value: "1,7 M", year: "2023" },
];

function ProgressBar({ pct, animate }: { pct: number; animate: boolean }) {
  return (
    <div className="flex items-center w-full font-sans mb-3">
      <div className="flex-1 bg-[#f0f0f0] h-6 rounded-full overflow-hidden">
        <div
          className="bg-navy h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${pct}%` : "0%" }}
        />
      </div>
      <span className="text-[#D42D7F] font-bold text-[18px] ml-4 min-w-[50px] text-right">{pct}%</span>
    </div>
  );
}

export default function EmpresasFamiliares() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-24 px-[6%]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink text-[12px] font-bold uppercase tracking-[2px] mb-4 block">Por que empresas familiares</span>
          <h2
            className="font-spartan font-black text-navy mb-6"
            style={{ fontSize: "clamp(32px,4vw,54px)", lineHeight: 0.95, letterSpacing: "-2px" }}
          >
            O mercado que a axya escolheu<br className="hidden md:block" /> atender não foi por acaso.
          </h2>
          <div className="max-w-[820px]">
            <p className="text-[#5d6878] text-[17px] leading-[1.85] mb-5">
              Empresas familiares movem a economia brasileira, geram a maior parte dos empregos e carregam uma complexidade de gestão
              que poucos entendem de verdade.
            </p>
            <p className="text-[#5d6878] text-[17px] leading-[1.85]">
              A axya nasceu da vivência real nesse ambiente, combinada à experiência em multinacionais e startups de alta complexidade.
              É essa somatória que nos permite levar para empresas familiares o nível de estrutura em gestão de pessoas que antes era
              privilégio de grandes corporações, respeitando o que há de mais valioso na essência familiar:{" "}
              <strong className="text-navy">proximidade, cultura e visão de longo prazo.</strong>
            </p>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          {/* Empresas Familiares */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-spartan font-black text-navy mb-10" style={{ fontSize: "clamp(26px,3vw,40px)", lineHeight: 1, letterSpacing: "-1.5px" }}>
              Empresas familiares<br />no Brasil.
            </h3>
            {familiarStats.map((s) => (
              <div key={s.label}>
                <p className="text-navy font-semibold text-[15px] mb-1">{s.label}</p>
                <ProgressBar pct={s.pct} animate={animated} />
              </div>
            ))}
          </motion.div>

          {/* Setor de Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-spartan font-black text-navy mb-10" style={{ fontSize: "clamp(26px,3vw,40px)", lineHeight: 1, letterSpacing: "-1.5px" }}>
              Setor de serviços<br />no Brasil.
            </h3>

            {/* Stat cards — 2 colunas */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {servicosStats.map((s) => (
                <div key={s.label} className="bg-navy rounded-[20px] p-6 text-white">
                  <p className="text-white/70 text-[13px] font-medium mb-3 leading-tight">{s.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-spartan font-black text-[32px] leading-none text-white">{s.value}</span>
                    <span className="text-white/50 text-[13px]">{s.year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Card cyan */}
            <div className="rounded-[20px] p-6 mb-4 flex items-center justify-between gap-4" style={{ background: "#1CC8D4" }}>
              <p className="font-spartan font-bold text-white text-[17px] leading-snug">
                O setor mais intensivo em <span className="font-black">PESSOAS</span>,{" "}
                não em ativos físicos.
              </p>
              <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="14" r="6" fill="white" fillOpacity="0.85" />
                <path d="M4 36c0-7 5-11 12-11s12 4 12 11" fill="white" fillOpacity="0.85" />
                <circle cx="32" cy="14" r="6" fill="white" fillOpacity="0.55" />
                <path d="M20 36c0-7 5-11 12-11s12 4 12 11" fill="white" fillOpacity="0.55" />
              </svg>
            </div>

            {/* Cards inferiores — 2 colunas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy rounded-[20px] p-6 flex items-center justify-between gap-3">
                <p className="text-white text-[14px] font-medium leading-tight">Alta carga tributária</p>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z" fill="#9ca3af" />
                    <path d="M12 14c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" fill="#9ca3af" />
                    <path d="M18 2l-1.5 1.5L18 5l1.5-1.5L21 5l1.5-1.5L21 2l-1.5 1.5L18 2z" fill="#9ca3af" />
                    <path d="M17 8h4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="bg-navy rounded-[20px] p-6 flex items-center justify-between gap-3">
                <p className="text-white text-[14px] font-medium leading-tight">Alto custo com a Folha de pgto</p>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="#9ca3af" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[24px] px-10 py-8"
          style={{ background: "rgba(0,24,50,0.04)", border: "1px solid rgba(0,24,50,0.07)" }}
        >
          <p className="text-[#5d6878] text-[16px] leading-[1.85]">
            Esse é o mercado que a axya escolheu abraçar. Conhecemos os desafios da gestão familiar de perto.
            E usamos esse conhecimento para transformar esses desafios em vantagem competitiva.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
