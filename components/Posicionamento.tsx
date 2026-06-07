"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Feminino sem ser frágil.",
    text: "Somos acolhedoras na escuta e firmes nas decisões. Respeitamos pessoas, mas não negociamos critérios.",
  },
  {
    title: "Humano, mas realista.",
    text: "Entendemos o peso emocional das empresas familiares, mas não romantizamos conflitos nem resultados. Emoção é considerada mas não é quem manda.",
  },
  {
    title: "Estratégico e acessível.",
    text: "Trabalhamos com método, dados e visão sistêmica, traduzindo tudo em decisões claras, aplicáveis e sem jargões.",
  },
  {
    title: "Resultado sustentável.",
    text: "Nossa bússola é a redução de perdas, a profissionalização da gestão e a construção de negócios preparados para o longo prazo.",
  },
];

export default function Posicionamento() {
  return (
    <section className="w-full bg-navy overflow-hidden">
      <div className="w-full grid md:grid-cols-2" style={{ minHeight: 1000 }}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center bg-navy p-10"
          style={{ minHeight: 500 }}
        >
          <img
            src="https://axyaigg.com.br/wp-content/uploads/2026/05/Teste-4-3.png"
            alt="Axya Consultoria"
            className="w-full max-w-full max-h-full object-contain"
            style={{ maxHeight: 700 }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-navy flex flex-col justify-center"
          style={{ padding: "90px 80px" }}
        >
          <span
            className="inline-flex items-center gap-3 mb-6 text-pink text-[14px] font-bold uppercase tracking-[2px]"
            style={{ borderLeft: "none" }}
          >
            <span className="w-[42px] h-0.5 bg-pink inline-block" />
            Nosso posicionamento
          </span>
          <h2
            className="font-spartan font-black text-white mb-7"
            style={{ fontSize: "clamp(36px,4vw,54px)", lineHeight: 0.9, letterSpacing: "-3px", maxWidth: 650 }}
          >
            Gestão humana,<br />sem romantizar<br />resultados.
          </h2>
          <p className="text-white/72 text-[17px] leading-[1.9] mb-12 max-w-[580px]">
            A Axya atua no ponto de tensão entre família, negócio e resultado, ajudando empresas familiares do setor de serviços a crescer com estrutura, clareza e responsabilidade.
          </p>

          <div className="grid grid-cols-2 gap-[18px]">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pink/25"
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 className="font-spartan text-white text-[28px] leading-tight font-bold mb-3">{card.title}</h3>
                <p className="text-white/72 text-[15px] leading-[1.8]">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
