"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const familiarStats = [
  { label: "Responsáveis por gerar empregos no Brasil", pct: 90 },
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
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Empresas Familiares */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-spartan font-black text-navy mb-10" style={{ fontSize: "clamp(32px,3.5vw,48px)", lineHeight: 1, letterSpacing: "-2px" }}>
            Empresas familiares<br />no Brasil.
          </h2>
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
          <h2 className="font-spartan font-black text-navy mb-10" style={{ fontSize: "clamp(32px,3.5vw,48px)", lineHeight: 1, letterSpacing: "-2px" }}>
            Setor de serviços<br />no Brasil.
          </h2>
          <div className="flex flex-col gap-6 mb-10">
            {servicosStats.map((s) => (
              <div key={s.label} className="bg-navy rounded-[24px] p-8 text-white">
                <p className="text-white/70 text-[15px] font-medium mb-2">{s.label}</p>
                <div className="flex items-baseline gap-3">
                  <span className="font-spartan font-black text-[48px] leading-none text-white">{s.value}</span>
                  <span className="text-white/50 text-[14px]">{s.year}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-[24px] p-8 border border-navy/8">
            <p className="font-spartan font-bold text-navy text-[22px] leading-tight">
              O setor mais intensivo em <span className="text-pink">PESSOAS</span>, não em ativos físicos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
