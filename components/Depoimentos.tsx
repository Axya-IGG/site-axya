"use client";
import { motion } from "framer-motion";

const depoimentos = [
  {
    titulo: "Recomendo com total confiança.",
    texto: "Trabalhei com Luciana e Kathleen e sempre admirei a competência, a sensibilidade e o profissionalismo das duas. Elas unem cuidado genuíno com pessoas e uma capacidade incrível de transformar ambientes e processos.",
    destaque: "Recomendo com total confiança",
    textoPos: " — quem contar com o trabalho delas estará em excelentes mãos.",
    nome: "Carla Davidovich",
    foto: "/carla.jpg.jpeg",
    iniciais: "C",
  },
  {
    titulo: "Experientes e muito confiáveis!",
    texto: "Luciana e Kathleen sempre entregaram um trabalho de altíssima qualidade. São profissionais comprometidas, experientes e muito confiáveis.",
    destaque: "Tenho total segurança em recomendar o trabalho delas",
    textoPos: ".",
    nome: "Marcelo Cusnir",
    foto: "/marcelo.jpg.jpeg",
    iniciais: "M",
  },
  {
    titulo: "Recomendo seu trabalho com total confiança.",
    texto: "Trabalhei com a Luciana e a Kathleen por vários anos e sempre pude contar com um trabalho sério, competente e alinhado às necessidades da empresa. Ambas demonstraram profundo conhecimento em Recursos Humanos, excelente capacidade de organização e uma postura ética exemplar. São profissionais dedicadas, responsáveis e com visão estratégica.",
    destaque: "Recomendo seu trabalho com total confiança",
    textoPos: ".",
    nome: "Ingrid Davidovich",
    foto: "/ingrid.jpg.jpeg",
    iniciais: "I",
  },
];

export default function Depoimentos() {
  return (
    <section className="w-full bg-white py-16 md:py-[110px] px-[5%]">
      <div className="max-w-[1350px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-spartan font-black text-navy"
            style={{ fontSize: "clamp(36px,4.5vw,60px)", lineHeight: 0.95, letterSpacing: "-2px" }}
          >
            Nosso combustível<span className="text-pink">.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Quote mark above card */}
              <div
                className="font-spartan font-black text-pink leading-none mb-[-16px] relative z-10"
                style={{ fontSize: 80 }}
              >
                &ldquo;
              </div>

              {/* Card */}
              <div
                className="w-full flex flex-col rounded-[16px] p-7 flex-1"
                style={{
                  border: "1px solid rgba(0,24,50,0.12)",
                  boxShadow: "0 4px 20px rgba(0,24,50,0.04)",
                }}
              >
                {/* Title */}
                <h3
                  className="font-spartan font-bold text-navy mb-4"
                  style={{ fontSize: "clamp(16px,1.4vw,20px)", lineHeight: 1.25 }}
                >
                  {d.titulo}
                </h3>

                {/* Body text */}
                <p className="text-[#5d6878] text-[14px] leading-[1.85] flex-1 mb-6">
                  {d.texto}{" "}
                  <strong className="text-navy font-bold">{d.destaque}</strong>
                  {d.textoPos}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-navy/80 flex items-center justify-center">
                    <img
                      src={d.foto}
                      alt={d.nome}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                    <span className="text-white text-[14px] font-bold font-spartan">{d.iniciais}</span>
                  </div>
                  <span
                    className="px-4 py-2 rounded-full text-white text-[13px] font-semibold font-spartan"
                    style={{ background: "#001832" }}
                  >
                    {d.nome}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
