"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_DIAG = "https://wa.me/5512997205261?text=Quero%20iniciar%20meu%20Diagn%C3%B3stico%20PPMF.";

const pilares = [
  {
    label: "Pessoas",
    content: [
      "Quem contrata por indicação porque não tem processo. Quem promove pelo tempo de casa porque não tem critério. Quem perde bons profissionais sem entender o motivo. Quem tem líderes que não conseguem liderar, e equipes que dependem do dono para qualquer decisão.",
      "Tudo isso tem causa. E a causa está aqui.",
      "O pilar Pessoas cuida dos comportamentos, competências, liderança, cultura e estrutura dos times. É o pilar de quem faz o negócio funcionar, ou travar.",
    ],
  },
  {
    label: "Processos",
    content: [
      "O conhecimento está na cabeça de uma pessoa. Quando ela sai, vai junto. O retrabalho é diário. Cada colaborador faz do seu jeito. A operação não funciona por método, funciona por sorte e por quem está presente.",
      "Processo inexistente não é só ineficiência. É dinheiro saindo sem você ver.",
      "O pilar Processos organiza como a empresa funciona: padronização, fluxos, políticas e rituais de gestão. Previsibilidade e produtividade não acontecem por acaso.",
    ],
  },
  {
    label: "Marketing Interno",
    content: [
      "A empresa tem uma cultura que existe no discurso do dono e não no dia a dia da equipe. As pessoas não sabem para onde a empresa está indo. Não se sentem parte de nada. Entregam o mínimo porque ninguém explicou o que é o suficiente.",
      "Quando a comunicação interna falha, o custo aparece em rotatividade, retrabalho e perda de produtividade que ninguém consegue nomear.",
      "O pilar Marketing Interno cuida do alinhamento, do senso de pertencimento e da construção da empresa como marca empregadora: o lugar onde as pessoas querem ficar e onde entregam o melhor.",
    ],
  },
  {
    label: "Finanças de RH",
    content: [
      "A empresa investe em pessoas sem saber o retorno. Demite sem calcular o custo real. Contrata sem avaliar o impacto na folha. Não tem visibilidade do passivo trabalhista que está crescendo. Não sabe quanto custa cada colaborador, nem o que está perdendo com rotatividade.",
      "Decisão sobre gente sem critério financeiro é a origem de boa parte dos prejuízos invisíveis das empresas familiares.",
      "O pilar Finanças de RH conecta cada decisão sobre pessoas ao seu impacto no caixa. Custo, retorno, risco e viabilidade. Nada no PPMF é aplicado sem passar por aqui.",
    ],
  },
];

export default function Pilares() {
  const [active, setActive] = useState(0);

  return (
    <section id="ppmf" className="w-full bg-navy overflow-hidden">
      {/* ── Header ── */}
      <div className="max-w-[1200px] mx-auto px-[5%] pt-[120px] pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink text-[12px] font-bold uppercase tracking-[2px] mb-4 block">Método PPMF</span>
          <h2
            className="font-spartan font-black text-white mb-6"
            style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 0.96, letterSpacing: "-2px" }}
          >
            Nosso jeito de fazer.
          </h2>
          <p className="text-white/70 text-[17px] leading-[1.85] max-w-[780px] mx-auto">
            O PPMF é o modelo de diagnóstico e solução para gestão de pessoas desenvolvido pela axya.
            Criado a partir de anos de experiência real dentro de empresas familiares, ele parte de um
            princípio simples: todo problema com gente se conecta a um dos quatro pilares que sustentam
            qualquer negócio. Quando um trava, os outros sentem. E o negócio paga.
          </p>
        </motion.div>
      </div>

      {/* ── Tabs + Content ── */}
      <div className="max-w-[1200px] mx-auto px-[5%] pb-24">
        {/* Tab menu */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {pilares.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-7 py-[14px] rounded-[16px] font-spartan font-semibold text-[17px] transition-all duration-300"
              style={{
                background: active === i ? "#ffffff" : "rgba(255,255,255,0.06)",
                color: active === i ? "#001832" : "rgba(255,255,255,0.75)",
                border: active === i ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.10)",
                boxShadow: active === i ? "0 8px 30px rgba(0,0,0,0.25)" : "none",
                transform: active === i ? "translateY(-2px)" : "none",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="rounded-[28px] p-10 md:p-14"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3
              className="font-spartan font-bold text-white mb-8"
              style={{ fontSize: "clamp(26px,3vw,38px)", lineHeight: 1, letterSpacing: "-1px" }}
            >
              {pilares[active].label}
            </h3>
            <div className="flex flex-col gap-5">
              {pilares[active].content.map((para, j) => (
                <p
                  key={j}
                  style={{
                    color: j === 1 ? "#08d8ff" : "rgba(255,255,255,0.82)",
                    fontSize: j === 1 ? 18 : 16,
                    lineHeight: 1.9,
                    fontWeight: j === 1 ? 600 : 400,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bloco de transição ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-[5%] mb-16 rounded-[28px] px-10 md:px-16 py-12 text-center"
        style={{ background: "rgba(8,216,255,0.05)", border: "1px solid rgba(8,216,255,0.12)" }}
      >
        <p className="text-white/80 text-[18px] leading-[1.85] max-w-[820px] mx-auto">
          <span className="text-cyan font-bold text-[20px]">36 critérios</span> distribuídos nos quatro pilares.
          Cada um expõe um custo que a empresa ainda não consegue ver, mas já está pagando.
        </p>
        <p className="text-white/55 text-[16px] mt-4">
          Saber em qual pilar está o problema, com qual gravidade e por onde começar: isso é o que o Diagnóstico PPMF faz.
        </p>
      </motion.div>

      {/* ── Card do Diagnóstico PPMF ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-[5%] mb-[120px] rounded-[32px] overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0b2444 0%,#5b1c45 55%,#f62982 100%)" }}
      >
        <div className="px-10 md:px-16 py-14 flex flex-col md:flex-row items-start md:items-center gap-10">
          <div className="flex-1">
            <p
              className="font-spartan font-bold text-white mb-4"
              style={{ fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.1 }}
            >
              Você não precisa adivinhar o que está errado.
            </p>
            <p className="text-white/80 text-[16px] leading-[1.85]">
              O Diagnóstico PPMF avalia os quatro pilares da gestão de pessoas do seu negócio, identifica onde a
              empresa está perdendo dinheiro com gente e aponta as prioridades reais de atuação.{" "}
              <strong className="text-white">Gratuito. Leva menos de 15 minutos. O relatório é gerado na hora.</strong>
            </p>
          </div>
          <a
            href={WA_DIAG}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-8 py-5 rounded-[18px] bg-white text-navy font-bold text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl whitespace-nowrap"
          >
            Iniciar meu diagnóstico
          </a>
        </div>
      </motion.div>
    </section>
  );
}
