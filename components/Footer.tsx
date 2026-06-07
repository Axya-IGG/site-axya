"use client";
import Image from "next/image";

const WA_LINK = "https://wa.me/5512997205261?text=Vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20diagn%C3%B3stico%20para%20empresas.";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#somos", label: "Quem Somos" },
  { href: "#solu", label: "Nossas Soluções" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  { href: "https://www.instagram.com/axya.consultoria/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/axya-intelig%C3%AAncia-em-gente-e-gest%C3%A3o/?viewAsMember=true", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer id="contato" className="w-full bg-navy text-white pt-20 pb-10 px-[6%]">
      <div className="max-w-[1400px] mx-auto">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-white/8">
          {/* Logo + contact */}
          <div>
            <Image
              src="https://axyaigg.com.br/wp-content/uploads/2026/05/Site-Logo-663-x-123-px-1.png"
              alt="Axya IGG"
              width={160}
              height={36}
              className="mb-6 brightness-0 invert"
              unoptimized
            />
            <div className="flex flex-col gap-2 text-white/70 text-[15px]">
              <a href="tel:+5512997205261" className="hover:text-white transition-colors">(12) 99720-5261</a>
              <a href="mailto:contato@axyaigg.com.br" className="hover:text-white transition-colors">contato@axyaigg.com.br</a>
            </div>
          </div>

          {/* Site nav */}
          <div>
            <p className="text-white font-bold text-[13px] uppercase tracking-[2px] mb-5">Site</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-white/65 text-[15px] hover:text-white transition-colors">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-white font-bold text-[13px] uppercase tracking-[2px] mb-5">Redes Sociais</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/65 text-[15px] hover:text-white transition-colors">{l.label}</a>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy font-semibold text-[14px] hover:bg-pink hover:text-white transition-all duration-300"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[13px]">Axya IGG. © Todos os Direitos Reservados – 2026</p>
          <img
            src="https://axyaigg.com.br/wp-content/uploads/2026/05/Design-sem-nome-9.png"
            alt="Axya"
            className="h-16 w-auto opacity-80"
          />
        </div>
      </div>
    </footer>
  );
}
