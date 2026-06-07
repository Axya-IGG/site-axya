"use client";
import { motion } from "framer-motion";

export default function Dores() {
  return (
    <section className="w-full bg-navy relative overflow-hidden py-16 md:py-28 px-4 md:px-[1%]">
      {/* Blur orbs */}
      <div className="absolute top-[-80px] right-[-60px] w-80 h-80 rounded-full pointer-events-none" style={{ background: "#f62982", filter: "blur(100px)", opacity: 0.18 }} />
      <div className="absolute bottom-[-60px] left-[-60px] w-64 h-64 rounded-full pointer-events-none" style={{ background: "#08d8ff", filter: "blur(100px)", opacity: 0.18 }} />

      <div className="max-w-[1450px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center flex flex-col gap-3 px-4 md:px-0"
        >
          <span className="text-white/65 text-[18px] md:text-[22px] font-light">
            Empresas familiares não travam<br className="md:hidden" /> por falta de esforço.
          </span>
          <strong
            className="font-spartan font-black text-white"
            style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-2px" }}
          >
            Travam por falta de estrutura<br className="md:hidden" /> em gestão de pessoas.
          </strong>
        </motion.div>
      </div>
    </section>
  );
}
