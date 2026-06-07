"use client";
import { motion } from "framer-motion";

const cards = [
  { title: "Lideranças mais preparadas", text: "Equipes mais alinhadas geram decisões mais estratégicas e ambientes mais produtivos." },
  { title: "Menos desgaste interno", text: "Processos organizados reduzem conflitos, retrabalho e perdas silenciosas." },
  { title: "Crescimento sustentável", text: "Estruturas mais sólidas permitem crescer com mais clareza e segurança." },
  { title: "Gestão com mais clareza", text: "Menos improviso e mais direção para decisões importantes do negócio." },
];

const floatingWords = [
  { text: "CULTURA", className: "animate-float-1", style: { top: "10%", left: "4%", fontSize: 70 } },
  { text: "LIDERANÇA", className: "animate-float-2", style: { bottom: "8%", left: "6%", fontSize: 60 } },
  { text: "PROCESSOS", className: "animate-float-3", style: { top: "7%", right: "3%", fontSize: 80 } },
  { text: "GESTÃO", className: "animate-float-4", style: { bottom: "4%", right: "10%", fontSize: 80 } },
];

export default function Estrutura() {
  return (
    <section className="w-full bg-white py-[80px] md:py-[140px] px-[6%] relative overflow-hidden">
      {/* Floating background words */}
      {floatingWords.map((w) => (
        <span
          key={w.text}
          className={`hidden md:block absolute font-spartan font-black pointer-events-none select-none ${w.className}`}
          style={{ color: "rgba(0,24,50,0.03)", ...w.style }}
        >
          {w.text}
        </span>
      ))}

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-[90px] items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 px-[22px] py-3 rounded-full text-pink text-[13px] font-semibold mb-7"
              style={{ background: "rgba(246,41,130,0.08)", border: "1px solid rgba(246,41,130,0.15)" }}
            >
              Estrutura • Pessoas • Crescimento
            </span>
            <h2 className="font-spartan font-black text-navy mb-7" style={{ fontSize: "clamp(36px,4vw,58px)", lineHeight: 0.95, letterSpacing: "-2px" }}>
              Estruturas fortes<br />começam pelas pessoas.
            </h2>
            <p className="text-[#5d6878] text-[19px] leading-[1.8] mb-5 max-w-[620px]">
              A Axya ajuda empresas familiares a organizar processos, fortalecer lideranças e construir operações mais sustentáveis através de uma gestão estratégica mais clara e eficiente.
            </p>
            <p
              className="text-[24px] font-bold"
              style={{ background: "linear-gradient(90deg,#001832,#f62982)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Crescimento saudável exige direção.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-navy/5 rounded-[20px] md:rounded-[30px] p-4 md:p-[34px] relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-pink/10"
                style={{ boxShadow: "0 10px 30px rgba(0,24,50,0.03)" }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, #08d8ff, #f62982)" }}
                />
                <h3 className="font-spartan font-bold text-navy text-[16px] md:text-[28px] leading-tight mb-2 md:mb-4">{card.title}</h3>
                <span className="text-[#687385] text-[12px] md:text-[16px] leading-[1.6]">{card.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
