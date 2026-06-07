"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5512997205261?text=Vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20diagn%C3%B3stico%20para%20empresas.";

const headlines = [
  "que sustenta\ncrescimento.",
  "que reduz\nperdas invisíveis.",
  "que fortalece\nlideranças.",
  "que profissionaliza\noperações.",
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
    <section id="home" className="w-full min-h-screen flex items-center bg-white pt-24 pb-16 px-[5%]">
      <div className="max-w-[1400px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <span className="text-[12px] tracking-[2px] uppercase text-[#d42d7f] font-semibold mb-3 opacity-85">
            Consultoria Estratégica em Gestão de Pessoas
          </span>
          <h1
            className="font-spartan font-black text-navy mb-6"
            style={{ fontSize: "clamp(42px, 5vw, 64px)", lineHeight: 0.94, letterSpacing: "-2px" }}
          >
            Gestão de pessoas{" "}
            <span
              className="block"
              style={{
                minHeight: "clamp(80px, 10vw, 120px)",
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
            A Axya ajuda empresas familiares do setor de serviços a reduzir perdas financeiras,
            fortalecer lideranças e estruturar operações mais sustentáveis através do{" "}
            <strong>Método PPMF.</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-[30px] py-[17px] rounded-2xl bg-navy text-white text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 0 0 transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(135deg,#7d1d5a 0%,#b32672 45%,#d42d7f 100%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#001832";
              }}
            >
              Agendar diagnóstico
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-[30px] py-[17px] rounded-2xl border border-navy/10 text-navy text-[14px] font-semibold transition-all duration-300 hover:border-[#d42d7f] hover:text-[#d42d7f]"
            >
              Conhecer método
            </a>
          </div>
        </motion.div>

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative w-full max-w-[480px] aspect-square">
            <div
              className="absolute inset-0 rounded-[40px]"
              style={{
                background: "linear-gradient(135deg, #001832 0%, #0b2444 40%, #5b1c45 80%, #f62982 100%)",
                opacity: 0.08,
              }}
            />
            <img
              src="https://axyaigg.com.br/wp-content/uploads/2026/05/Teste-4-3.png"
              alt="Axya Consultoria"
              className="w-full h-full object-contain relative z-10 p-8"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
