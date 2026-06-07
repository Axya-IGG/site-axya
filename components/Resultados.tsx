"use client";
import { motion } from "framer-motion";

const cards = [
  {
    eyebrow: "Rotatividade",
    stat: "1 a 2%",
    label: "de turnover ao ano",
    desc: "A média de mercado considerada ideal é de 5 a 10%. Empresas com gestão estruturada de pessoas são capazes de ficar abaixo disso. Repor um colaborador pode custar até 200% do salário anual do cargo. Reduzir rotatividade é reduzir um dos maiores custos invisíveis do negócio.",
    topGrad: "linear-gradient(90deg,#08d8ff,#f62982)",
    statGrad: "linear-gradient(135deg,#08d8ff,#f62982)",
  },
  {
    eyebrow: "Produtividade",
    stat: "R$1.636.363",
    label: "de faturamento por colaborador",
    desc: "Resultado de uma empresa familiar com apenas 55 funcionários. Quando pessoas, processos e liderança funcionam juntos, cada colaborador passa a gerar mais valor. O crescimento deixa de depender de contratar mais e começa a depender de gerir melhor.",
    topGrad: "linear-gradient(90deg,#f62982,#08d8ff)",
    statGrad: "linear-gradient(135deg,#f62982,#08d8ff)",
  },
  {
    eyebrow: "Passivo Trabalhista",
    stat: "100%",
    label: "de redução do passivo trabalhista",
    desc: "Processos frágeis, documentação precária e gestão sem critério são o terreno fértil para ações trabalhistas. O passivo trabalhista não aparece do nada: ele se acumula silenciosamente enquanto a empresa opera no improviso. Com método, trabalho preventivo e comprometimento, é possível zerar esse passivo e manter o negócio protegido de custos financeiros altíssimos.",
    topGrad: "linear-gradient(90deg,#5b1c45,#f62982)",
    statGrad: "linear-gradient(135deg,#f62982,#ff9ed4)",
  },
];

export default function Resultados() {
  return (
    <section className="w-full bg-navy overflow-hidden py-16 md:py-[110px] px-[5%] relative">
      {/* Blur orbs */}
      <div
        className="absolute top-[-80px] left-[-60px] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "#08d8ff", filter: "blur(120px)", opacity: 0.10 }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "#f62982", filter: "blur(120px)", opacity: 0.12 }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink text-[12px] font-bold uppercase tracking-[2px] mb-4 block">
            Resultados reais. Cliente real.
          </span>
          <h2
            className="font-spartan font-black text-white mb-5"
            style={{ fontSize: "clamp(28px,4vw,52px)", lineHeight: 0.96, letterSpacing: "-2px" }}
          >
            O que muda quando a gestão de pessoas<br className="hidden md:block" /> para de ser improviso.
          </h2>
          <p className="text-white/65 text-[16px] leading-[1.8] max-w-[680px] mx-auto">
            Não é promessa. É o que aconteceu em uma das empresas que decidiu transformar gestão de pessoas em motor de resultados.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[28px] overflow-hidden flex flex-col"
              style={{
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.30)",
              }}
            >
              {/* Top gradient band */}
              <div className="h-[5px] w-full flex-shrink-0" style={{ background: c.topGrad }} />

              {/* Content */}
              <div
                className="px-8 py-9 flex flex-col gap-4 flex-1"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-[2px]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {c.eyebrow}
                </span>

                <div>
                  <p
                    className="font-spartan font-black leading-none mb-1"
                    style={{
                      fontSize: i === 1 ? "clamp(28px,3vw,42px)" : "clamp(36px,4vw,52px)",
                      letterSpacing: "-2px",
                      background: c.statGrad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {c.stat}
                  </p>
                  <p className="text-white/50 text-[12px] font-semibold uppercase tracking-[1px]">
                    {c.label}
                  </p>
                </div>

                <div className="h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.85 }}>
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
