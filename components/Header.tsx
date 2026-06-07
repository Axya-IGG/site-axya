"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const WA_LINK = "https://wa.me/5512997205261?text=Vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20diagn%C3%B3stico%20para%20empresas.";

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#somos", label: "Quem Somos" },
  { href: "#solu", label: "Nossas Soluções" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
      style={{ borderBottom: "1px solid rgba(0,24,50,0.07)" }}
    >
      <div className="flex items-center justify-between px-[5%] py-5 max-w-[1600px] mx-auto">
        {/* Logo */}
        <a href="#home">
          <Image
            src="https://axyaigg.com.br/wp-content/uploads/2026/05/Site-Logo-663-x-123-px-1.png"
            alt="Axya IGG"
            width={180}
            height={40}
            style={{ height: 48, width: "auto" }}
            unoptimized
          />
        </a>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.label === "Home" ? handleHomeClick : undefined}
              className="text-[14px] font-semibold text-navy tracking-tight transition-colors duration-200 hover:text-pink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-xl bg-navy text-white text-[14px] font-semibold transition-all duration-300 hover:bg-pink hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Fale Conosco
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 bg-transparent border-none cursor-pointer z-[10001]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navy rounded transition-all duration-300 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy rounded transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy rounded transition-all duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-navy/5 shadow-xl flex flex-col px-[5%] transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ paddingBottom: 24, paddingTop: 12 }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={link.label === "Home" ? handleHomeClick : closeMenu}
            className="text-[15px] font-semibold text-navy py-4 border-b border-navy/5 transition-colors hover:text-pink"
          >
            {link.label}
          </a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="mt-3 inline-flex items-center justify-center gap-2 px-[22px] py-[14px] rounded-xl bg-navy text-white font-semibold hover:bg-pink transition-colors"
        >
          <WhatsAppIcon />
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
