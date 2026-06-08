"use client";
import { motion } from "framer-motion";

const pessoas = [
  {
    nome: "Luciana Splicigo",
    photo: "/luciana.png",
    cargo: "Sócia-Cofundadora da axya · Especialista em Gestão de Pessoas, Implantação de RH e Desenvolvimento de Lideranças",
    bio: "Mais de 20 anos dentro de empresas. Empresas familiares, holdings, multinacionais. Viu de perto o mesmo padrão se repetir: negócios com potencial real, travados por falta de estrutura em gestão de pessoas. Líderes promovidos sem preparo. Times sem direção. RH operacional demais para fazer a diferença onde importa.\n\nFoi essa repetição que deu origem à convicção que orienta o trabalho dela até hoje: gestão de pessoas não é suporte ao negócio. É o que faz o negócio funcionar ou travar.\n\nNa axya, Luciana é responsável pela frente de gestão de pessoas e desenvolvimento organizacional. Leva para empresas familiares do setor de serviços o mesmo nível de estrutura que viveu em ambientes de alta complexidade, como DHL e Edições Globo Condé Nast, sem perder de vista a realidade e a cultura de cada negócio.",
    credenciais: ["+20 anos de experiência", "Ex-executiva de RH Edições Globo (Vogue, Casa Vogue, GQ, Glamour)", "Coach pela SBC", "Cocriadora do Método PPMF"],
  },
  {
    nome: "Kathleen Amaro",
    photo: "/kathleen.png",
    cargo: "Sócia-Cofundadora da axya · Consultora em Estratégia Organizacional e Estruturação de Processos",
    bio: "Formada em Gestão de pessoas, pós-graduada em consultoria empresarial e mais de 10 anos transitando entre empresas familiares, multinacionais e startups. Em cada ambiente que passou, o mesmo ponto de atenção: negócios que cresciam sem estrutura, decisões sobre pessoas tomadas no improviso e processos que dependiam de quem estava presente no dia.\n\nEssa vivência, somada à passagem por ambientes de alta complexidade como Edições Globo Condé Nast e Quero Educação, construiu uma visão que vai além do RH. Gestão de pessoas, processos, cultura e resultado financeiro são partes de uma mesma engrenagem. Quando uma trava, as outras sentem.\n\nNa axya, Kathleen é responsável pela frente de processos, projetos e estruturação. Traduz diagnóstico em plano de ação, e plano de ação em execução real. Também é empresária, e carrega esse olhar em cada projeto: sabe exatamente o que custa tomar decisões erradas.",
    credenciais: ["+10 anos de experiência", "Edições Globo Condé Nast", "Quero Educação", "New Age Tour Operator", "Cocriadora do Método PPMF"],
  },
];

const numeros = [
  "+30 anos de experiência combinada",
  "Multinacionais e empresas familiares",
  "Metodologia própria",
];

export default function Bios() {
  return (
    <section id="somos" className="w-full bg-white py-16 md:py-[110px] px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink text-[12px] font-bold uppercase tracking-[2px] mb-4 block">Quem faz</span>
          <h2
            className="font-spartan font-black text-navy"
            style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 0.95, letterSpacing: "-2px" }}
          >
            Conheça quem está por trás da axya.
          </h2>
        </motion.div>

        {/* Bio cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pessoas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-[28px] p-10 flex flex-col gap-6"
              style={{ background: "#fafbff", border: "1px solid rgba(0,24,50,0.07)" }}
            >
              {/* Foto + nome */}
              <div className="flex items-center gap-5">
                <div
                  className="flex-shrink-0 rounded-full"
                  style={{
                    padding: 3,
                    background: "linear-gradient(135deg,#08d8ff,#f62982)",
                    width: 106,
                    height: 106,
                  }}
                >
                  <img
                    src={p.photo}
                    alt={p.nome}
                    className="rounded-full object-cover w-full h-full block"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-spartan font-bold text-navy text-[20px] leading-tight">{p.nome}</p>
                  <p className="text-pink text-[12px] font-semibold mt-1 leading-snug max-w-[340px]">{p.cargo}</p>
                </div>
              </div>

              {/* Linha divisória */}
              <div className="h-px" style={{ background: "rgba(0,24,50,0.07)" }} />

              {/* Bio */}
              <div className="flex flex-col gap-4">
                {p.bio.split("\n\n").map((para, j) => (
                  <p key={j} className="text-[#5d6878] text-[15px] leading-[1.9]">{para}</p>
                ))}
              </div>

              {/* Credenciais */}
              <div className="flex flex-wrap gap-2">
                {p.credenciais.map((c, j) => (
                  <span
                    key={j}
                    className="text-[12px] font-semibold px-3 py-1 rounded-full text-navy"
                    style={{ background: "rgba(0,24,50,0.06)", border: "1px solid rgba(0,24,50,0.08)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Barra de números */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[24px] px-10 py-8 flex flex-wrap justify-center gap-x-12 gap-y-4"
          style={{ background: "#001832" }}
        >
          {numeros.map((n, i) => (
            <span key={i} className="flex items-center gap-4 text-white/80 text-[14px] font-medium">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-pink inline-block" />}
              {n}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
