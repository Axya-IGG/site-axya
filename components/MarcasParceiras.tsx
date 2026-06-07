"use client";
import { motion } from "framer-motion";

const parceiros = [
  "AR&D",
  "Bufunffa",
  "Convenia",
  "Nogueira Oliveira & Correali",
  "Support Segma",
  "S8Vox",
  "IEF",
  "Unixs",
];

export default function MarcasParceiras() {
  return (
    <section
      className="w-full bg-white py-[72px] px-[5%]"
      style={{ borderTop: "1px solid rgba(0,24,50,0.06)", borderBottom: "1px solid rgba(0,24,50,0.06)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[12px] uppercase tracking-[3px] font-bold mb-12"
          style={{ color: "rgba(0,24,50,0.35)" }}
        >
          Marcas parceiras
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {parceiros.map((nome, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="font-spartan font-bold text-[17px] transition-colors duration-300 cursor-default select-none"
              style={{ color: "rgba(0,24,50,0.28)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLSpanElement).style.color = "#001832";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLSpanElement).style.color = "rgba(0,24,50,0.28)";
              }}
            >
              {nome}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
