"use client";
import { motion } from "framer-motion";

const parceiros = [
  { nome: "AR&D Assessoria",              src: "/ard-assessoria.png"    },
  { nome: "Bufunffa",                     src: "/bufunffa.png"          },
  { nome: "Convenia",                     src: "/convenia.png"          },
  { nome: "Nogueira Oliveira & Correali", src: "/nogueira-oliveira.png" },
  { nome: "Support Segma",               src: "/support-segma.png"     },
  { nome: "S8Vox",                        src: "/s8-vox.png"            },
  { nome: "IEF",                          src: "/ief.png"               },
  { nome: "Unixs",                        src: "/unixs.png"             },
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

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {parceiros.map((p, i) => (
            <motion.img
              key={i}
              src={p.src}
              alt={p.nome}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="w-auto object-contain transition-all duration-300"
              style={{ height: 60, filter: "grayscale(100%) opacity(0.75)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%) opacity(1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%) opacity(0.75)";
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
