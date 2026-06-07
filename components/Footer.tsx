"use client";

const WA_LINK = "https://wa.me/5512997205261?text=Vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20diagn%C3%B3stico%20para%20empresas.";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#somos", label: "Quem Somos" },
  { href: "#solu", label: "Nossas Soluções" },
];

const socialLinks = [
  { href: "https://www.instagram.com/axya.consultoria/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/axya-intelig%C3%AAncia-em-gente-e-gest%C3%A3o/?viewAsMember=true", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer id="contato" className="w-full bg-navy text-white pt-12 pb-8 px-[6%]">
      <div className="max-w-[860px] mx-auto text-center">
        {/* Logo */}
        <img
          src="/Logo-Axya-vetor-sem-escrita-padrão.png"
          alt="axya"
          className="mx-auto mb-6"
          style={{ height: 48, width: "auto", filter: "brightness(0) invert(1)" }}
        />

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-white/60 text-[14px] hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>

        {/* Contact + social */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
          <a href="tel:+5512997205261" className="text-white/60 text-[14px] hover:text-white transition-colors">(12) 99720-5261</a>
          <a href="mailto:contato@axyaigg.com.br" className="text-white/60 text-[14px] hover:text-white transition-colors">contato@axyaigg.com.br</a>
          {socialLinks.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/60 text-[14px] hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-navy font-semibold text-[13px] hover:bg-pink hover:text-white transition-all duration-300 mb-8"
        >
          Fale pelo WhatsApp
        </a>

        {/* Divider */}
        <div className="border-t border-white/8 pt-6">
          <p className="text-white/35 text-[12px]">Axya IGG. © Todos os Direitos Reservados – 2026</p>
        </div>
      </div>
    </footer>
  );
}
