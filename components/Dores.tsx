"use client";
import { motion } from "framer-motion";

const dores = [
  {
    title: "Alta rotatividade e dificuldade para reter talentos",
    body: [
      "Custos elevados com desligamentos e novas contratações. Clima ruim, sensação de instabilidade e perda de produtividade.",
      "A empresa contrata, treina e perde bons profissionais com frequência.",
    ],
  },
  {
    title: "Lideranças sobrecarregadas e despreparadas",
    body: [
      "Gestores promovidos pela performance técnica, mas sem preparo para liderar pessoas.",
      "O resultado: ruído na comunicação, retrabalho e perda de performance nas equipes.",
    ],
  },
  {
    title: "RH inexistente ou extremamente operacional",
    body: [
      "O setor de RH não existe ou se limita a tarefas administrativas, sem atuar estrategicamente.",
      "Processos de gestão de pessoas ficam soltos, sem indicadores ou direcionamento para o negócio.",
    ],
  },
  {
    title: "Falta de visão estratégica integrada",
    body: [
      "Financeiro, RH e operação não se conversam.",
      "As decisões são tomadas no feeling, sem dados, conexão entre áreas ou uso inteligente de tecnologia.",
    ],
  },
  {
    title: "Equipe desmotivada e desorganização interna",
    body: [
      "Queda de produtividade, conflitos e falta de senso de dono.",
      "Faltam processos claros e responsabilidades definidas. Cada colaborador trabalha do seu jeito.",
    ],
  },
  {
    title: "Cultura organizacional fraca e pouco engajadora",
    body: [
      "A cultura organizacional existe apenas no papel — quando existe.",
      "Colaboradores desconectados da missão, valores e identidade da empresa.",
    ],
  },
];

export default function Dores() {
  return (
    <section className="w-full bg-navy relative overflow-hidden py-0 px-[1%]">
      {/* Blur orbs */}
      <div className="absolute top-[-80px] right-[-60px] w-80 h-80 rounded-full pointer-events-none" style={{ background: "#f62982", filter: "blur(100px)", opacity: 0.18 }} />
      <div className="absolute bottom-[-60px] left-[-60px] w-64 h-64 rounded-full pointer-events-none" style={{ background: "#08d8ff", filter: "blur(100px)", opacity: 0.18 }} />

      <div className="max-w-[1450px] mx-auto relative z-10 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1050px] mx-auto text-center mb-20"
        >
          <span
            className="inline-flex px-5 py-3 rounded-full text-pink text-[13px] font-bold tracking-wide mb-7"
            style={{ background: "rgba(246,41,130,.10)", border: "1px solid rgba(246,41,130,.18)" }}
          >
            Problemas invisíveis geram prejuízos reais
          </span>
          <h2
            className="font-spartan font-black text-white mb-7"
            style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 0.96, letterSpacing: "-2px" }}
          >
            Crescimento estagnado, baixa produtividade e resultados financeiros instáveis não são coincidência.
          </h2>
          <p className="text-white/72 text-[22px] leading-[1.7] max-w-[850px] mx-auto font-light">
            São sintomas de uma gestão que ainda não entende o impacto das pessoas no negócio.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          {dores.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-[30px] px-9 py-10 text-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-pink/20 hover:shadow-2xl"
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.06)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #08d8ff, #f62982)" }}
              />
              <h3
                className="font-spartan font-bold text-white mb-6"
                style={{ fontSize: "clamp(22px,2vw,30px)", lineHeight: 1.05, letterSpacing: "-1px" }}
              >
                {d.title}
              </h3>
              {d.body.map((b, j) => (
                <p key={j} className="text-white/72 text-[16px] leading-[1.9] mb-4">{b}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Final phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-12 text-center flex flex-col gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
        >
          <span className="text-white/65 text-[22px] font-light">Empresas não travam apenas por falta de estratégia.</span>
          <strong
            className="font-spartan font-black text-white"
            style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 1, letterSpacing: "-2px" }}
          >
            Travam por falta de estrutura humana.
          </strong>
        </motion.div>
      </div>
    </section>
  );
}
