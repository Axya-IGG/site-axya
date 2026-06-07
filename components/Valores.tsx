"use client";
import { motion } from "framer-motion";

const valores = [
  {
    letter: "V",
    color: "#7d7d81",
    title: "VERDADE",
    text: "Tudo que fazemos gira em torno da verdade. Analisamos fatos antes de opiniões e encaramos a realidade como ela é.",
  },
  {
    letter: "C",
    color: "#001832",
    title: "CORAGEM",
    text: "Saber não basta. É preciso agir. Dizemos o que precisa ser dito e fazemos o que precisa ser feito.",
  },
  {
    letter: "C",
    color: "#08d8ff",
    title: "CLAREZA",
    text: "Transformamos complexidade em caminhos objetivos, possíveis e compreensíveis, sem jargões e sem rodeios.",
  },
  {
    letter: "R",
    color: "#f62982",
    title: "RESULTADO",
    text: "Resultado só vale se sustentar. Construímos estruturas que sustentam crescimento no longo prazo.",
  },
];

export default function Valores() {
  return (
    <section className="w-full bg-white py-[120px] px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center mb-16"
        >
          <span className="inline-flex items-center gap-3 mb-4 text-pink text-[14px] font-bold uppercase tracking-[2px]">
            <span className="w-[42px] h-0.5 bg-pink inline-block" />
            Nossos valores
          </span>
          <h2
            className="font-spartan font-black text-navy max-w-[780px] mx-auto"
            style={{ fontSize: "clamp(32px,4vw,54px)", lineHeight: 0.95, letterSpacing: "-3px" }}
          >
            O que sustenta<br />cada decisão da Axya.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valores.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-navy/5 rounded-[32px] p-[30px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ boxShadow: "0 20px 50px rgba(0,24,50,.05)" }}
            >
              <div
                className="w-[72px] h-[72px] rounded-[22px] flex items-center justify-center mb-6 font-spartan font-black text-white text-[36px]"
                style={{ background: v.color }}
              >
                {v.letter}
              </div>
              <h4 className="text-navy text-[18px] font-black tracking-wide mb-3">{v.title}</h4>
              <p className="text-[#5d6878] text-[15px] leading-[1.9]">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
