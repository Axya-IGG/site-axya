"use client";
import { motion } from "framer-motion";

const FORM_LINK = "https://wa.me/5512997205261?text=Vi%20o%20seu%20site%20e%20gostaria%20de%20preencher%20uma%20aplica%C3%A7%C3%A3o.";

export default function CTA() {
  return (
    <section className="relative w-full bg-navy overflow-hidden py-16 md:py-[120px] px-[5%]">
      {/* Moving lines */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[
          { top: "20%", rotate: "-8deg", className: "animate-line-1" },
          { top: "52%", rotate: "5deg", className: "animate-line-2" },
          { bottom: "18%", rotate: "-4deg", className: "animate-line-3" },
        ].map((line, i) => (
          <span
            key={i}
            className={`absolute left-[-40%] h-px ${line.className}`}
            style={{
              top: line.top,
              bottom: (line as { bottom?: string }).bottom,
              width: "180%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent)",
              transform: `rotate(${line.rotate})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-[60px] items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 mb-6 text-pink text-[14px] font-bold uppercase tracking-[2px]">
            <span className="w-[42px] h-0.5 bg-pink inline-block" />
            Estruture seu crescimento
          </span>
          <h2
            className="font-spartan font-black text-white"
            style={{ fontSize: "clamp(32px,4.5vw,58px)", lineHeight: 0.95, letterSpacing: "-2px" }}
          >
            Sua empresa já está pagando o custo da falta de gestão. A pergunta é se você sabe quanto.
          </h2>
        </motion.div>

        {/* Right — CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-end md:justify-end"
        >
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-[520px] min-h-[320px] rounded-[40px] p-[42px] flex flex-col justify-between overflow-hidden text-decoration-none transition-all duration-[450ms] hover:-translate-y-2 group"
            style={{
              background: "linear-gradient(145deg, #f62982 0%, #ff4d9f 100%)",
              boxShadow: "0 35px 90px rgba(246,41,130,.28)",
              textDecoration: "none",
            }}
          >
            {/* Glow orb */}
            <span
              className="absolute w-64 h-64 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-125"
              style={{
                top: -100, right: -100,
                background: "radial-gradient(circle, rgba(255,255,255,.10), transparent 70%)",
              }}
            />

            <span className="relative z-10 text-[13px] uppercase tracking-[2px] font-bold text-white/78">
              Solicitar contato
            </span>

            <span className="relative z-10 font-spartan font-black text-white" style={{ fontSize: "clamp(30px,4vw,50px)", lineHeight: 0.95, letterSpacing: "-2px", maxWidth: 360 }}>
              Quero estruturar minha empresa
            </span>

            <div className="relative z-10 flex items-center justify-between gap-5">
              <span className="text-[16px] font-semibold text-white">Solicitar contato</span>
              <span
                className="w-[74px] h-[74px] rounded-[24px] flex items-center justify-center text-white text-[34px] transition-transform duration-300 group-hover:translate-x-2"
                style={{ background: "rgba(255,255,255,.14)", backdropFilter: "blur(12px)" }}
              >
                →
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
