"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FORM_LINK = "https://wa.me/5512997205261?text=Vi%20o%20seu%20site%20e%20gostaria%20de%20preencher%20uma%20aplica%C3%A7%C3%A3o.";

const solucoes = [
  {
    label: "Implantação de RH",
    short: "Estruture o RH do zero com método e critério.",
    full: "A empresa cresceu. O que era fácil de controlar virou problema. As questões de pessoal chegam no colo do dono, a pessoa do administrativo improvisa o que pode. No fim das contas, ninguém tem preparo real para cuidar de gente.\n\nA axya estrutura o departamento de RH do zero: processos, rotinas e ferramentas construídos com método e critério desde o início. Quando a empresa decide contratar um profissional para assumir a área, a axya também conduz esse processo seletivo.",
  },
  {
    label: "Consultoria RH Alta Performance",
    short: "Transforme o RH operacional em parceiro estratégico.",
    full: "O departamento de RH já existe, mas o dia a dia não deixa espaço para nada além do operacional: admissão, demissão, folha, ponto. O RH opera, mas não influencia decisões. Não tem voz. Não é visto como parceiro do negócio.\n\nA axya diagnostica o nível de maturidade da gestão de pessoas e conduz o departamento, por meio de consultoria e acompanhamento contínuo, até que ele opere com visão de negócio e influência real nos resultados.",
  },
  {
    label: "Assessoria em Recrutamento e Seleção",
    short: "Contrate certo. Reduza rotatividade e custos.",
    full: "Contratar errado custa caro. E na maioria das empresas familiares, o processo seletivo ainda depende de indicação, intuição ou sorte.\n\nA axya atua como apoio externo do planejamento da vaga à decisão final de contratação, com critério e método, para reduzir o risco de contratações equivocadas e o custo gerado pela rotatividade.",
  },
  {
    label: "Desenvolvimento de Lideranças",
    short: "Liderança que deixa de ser gargalo e vira motor.",
    full: "Nas empresas familiares, é comum que líderes cheguem à posição pelo tempo de casa ou pela confiança do dono, e não pela capacidade de liderar pessoas e entregar resultado.\n\nA axya desenvolve programas sob medida para a realidade do negócio, com foco em comportamento, gestão e performance, para que a liderança deixe de ser o gargalo e passe a ser o motor do crescimento.",
  },
  {
    label: "NR-1 e Riscos Psicossociais",
    short: "Adequação legal e gestão real do risco psicossocial.",
    full: "Desde 26 de maio de 2026, a NR-1 exige que toda empresa identifique e gerencie os riscos psicossociais no trabalho. Não é recomendação, é obrigação legal. E a maioria das empresas ainda não está adequada — ou acha que está.\n\nA axya diagnostica o nível de conformidade da empresa com a norma, identifica falhas e vulnerabilidades, apoia o RH na construção das evidências e documentação necessárias e desenvolve as lideranças para que a gestão do risco psicossocial seja contínua e não uma resposta pontual à fiscalização.\n\nPara entregar essa solução de forma completa, a axya conta com a parceria oficial da Bufunffa, referência em educação financeira corporativa. Pesquisa da PwC mostrou que 1 em cada 3 funcionários relata que preocupações com dinheiro impactaram negativamente sua produtividade. O estresse financeiro é um dos principais gatilhos de sofrimento mental dentro das empresas — e, portanto, um risco psicossocial que precisa ser gerido, não ignorado.",
    tag: "Obrigação legal desde Mai/2026",
  },
];

export default function Solucoes() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="solu" className="w-full bg-white py-16 md:py-[110px] px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink text-[12px] font-bold uppercase tracking-[2px] mb-4 block">Nossas Soluções</span>
          <h2
            className="font-spartan font-black text-navy mb-4"
            style={{ fontSize: "clamp(22px,4vw,54px)", lineHeight: 0.95, letterSpacing: "-2px" }}
          >
            Para cada momento do negócio,<br className="hidden md:block" />uma solução.
          </h2>
          <p className="text-[#5d6878] text-[18px] leading-[1.7]">
            Toda empresa familiar tem sua própria história. As nossas soluções também.
          </p>
        </motion.div>

        {/* Solutions accordion */}
        <div className="flex flex-col gap-3">
          {solucoes.map((s, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-[24px] overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? "2px solid rgba(255,255,255,0.14)" : "2px solid rgba(0,24,50,0.18)",
                  background: isOpen ? "#001832" : "#ffffff",
                }}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 px-8 py-6 text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span
                        className="font-spartan font-bold text-[20px]"
                        style={{ color: isOpen ? "#ffffff" : "#001832" }}
                      >
                        {s.label}
                      </span>
                      {s.tag && (
                        <span
                          className="text-[11px] font-bold px-3 py-1 rounded-full"
                          style={isOpen
                            ? { background: "rgba(246,41,130,0.25)", border: "1px solid rgba(246,41,130,0.5)", color: "#ff79ae" }
                            : { background: "rgba(246,41,130,0.08)", border: "1px solid rgba(246,41,130,0.15)", color: "#f62982" }
                          }
                        >
                          {s.tag}
                        </span>
                      )}
                    </div>
                    {!isOpen && (
                      <p className="text-[#687385] text-[14px]">{s.short}</p>
                    )}
                  </div>
                  <span
                    className="text-[24px] font-light transition-transform duration-300 flex-shrink-0 mt-1"
                    style={{
                      color: isOpen ? "#ffffff" : "#f62982",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div
                          className="w-full h-px mb-6"
                          style={{ background: "rgba(255,255,255,0.14)" }}
                        />
                        {s.full.split("\n\n").map((p, j) => (
                          <p key={j} style={{ color: "rgba(255,255,255,0.82)", fontSize: 16, lineHeight: 1.9, marginBottom: 16 }}>
                            {p}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-[28px]"
          style={{ background: "linear-gradient(135deg,#001832 0%,#0b2444 60%,#5b1c45 100%)" }}
        >
          <div className="flex-1">
            <p className="text-white font-spartan font-bold text-[22px] mb-1">Pronto para dar o próximo passo?</p>
            <p className="text-white/65 text-[15px]">Preencha a aplicação e entraremos em contato para entender sua realidade.</p>
          </div>
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-8 py-4 rounded-[16px] font-bold text-[15px] transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
            style={{
              background: "linear-gradient(#001832,#001832) padding-box, linear-gradient(135deg,#08d8ff,#f62982) border-box",
              border: "2px solid transparent",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "linear-gradient(135deg,#08d8ff,#f62982) padding-box, linear-gradient(135deg,#08d8ff,#f62982) border-box";
              el.style.boxShadow = "0 12px 35px rgba(8,216,255,0.30)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "linear-gradient(#001832,#001832) padding-box, linear-gradient(135deg,#08d8ff,#f62982) border-box";
              el.style.boxShadow = "none";
            }}
          >
            Preencher aplicação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
