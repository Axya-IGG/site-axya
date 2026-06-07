"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DIAG_LINK = "https://axyaigg.com.br/diagnostico-ppmf";

const headlines = [
  "que reduz rotatividade.",
  "que zera passivos\ntrabalhistas.",
  "que desenvolve lideranças.",
  "que aumenta produtividade.",
  "que profissionaliza operações.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % headlines.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full min-h-screen relative bg-white overflow-hidden">
      {/* Right: photo — absolutely fills right half top-to-bottom */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        className="hidden md:block absolute right-0 bottom-0"
        style={{ width: "50%", top: 80 }}
      >
        <img
          src="/home-axya.png"
          alt="axya Consultoria"
          className="w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          fetchPriority="high"
          loading="eager"
        />
      </motion.div>

      {/* Left: text column */}
      <div className="relative z-10 w-full md:w-[50%] flex items-center min-h-screen pt-28 pb-16 px-[5%] md:px-[6%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start max-w-[600px]"
        >
          <span className="text-[12px] tracking-[2px] uppercase text-[#d42d7f] font-semibold mb-3" style={{ opacity: 0.85 }}>
            Consultoria em Gestão de Pessoas para Empresas Familiares
          </span>
          <h1
            className="font-spartan font-black text-navy mb-6"
            style={{ fontSize: "clamp(42px, 4.5vw, 62px)", lineHeight: 0.94, letterSpacing: "-2px" }}
          >
            Gestão de pessoas{" "}
            <span
              className="block"
              style={{
                minHeight: "clamp(80px, 10vw, 115px)",
                background: "linear-gradient(90deg,#001832 0%,#0b2444 35%,#5b1c45 75%,#d42d7f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                whiteSpace: "pre-line",
              }}
            >
              {headlines[index]}
            </span>
          </h1>
          <p className="text-[15px] leading-[1.7] text-[#52606f] max-w-[540px] mb-8">
            A axya estrutura a gestão de pessoas de empresas familiares do setor de serviços.{" "}
            <strong>Menos improviso com gente. Mais clareza, método e resultado.</strong>
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={DIAG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-[30px] py-[17px] rounded-2xl bg-navy text-white text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(135deg,#7d1d5a 0%,#b32672 45%,#d42d7f 100%)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 35px rgba(212,45,127,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#001832";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              Diagnóstico gratuito
            </a>
            <a
              href="#solu"
              className="px-[30px] py-[17px] rounded-2xl border border-navy/10 text-navy text-[14px] font-semibold transition-all duration-300 hover:border-[#d42d7f] hover:text-[#d42d7f]"
            >
              Conheça nossas soluções
            </a>
          </div>

          {/* Credentials bar */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {["+30 anos de experiência combinada", "Metodologia PPMF", "Especialistas em empresas familiares"].map((c, i) => (
              <span key={i} className="flex items-center gap-2 text-[13px] text-[#5d6878] font-medium">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-pink inline-block" />}
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
