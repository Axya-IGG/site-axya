"use client";
import { useEffect } from "react";

// O painel de leads foi para dentro do Axya Flow (aba "Leads"), onde o acesso
// passa pelo login do sistema em vez de uma senha compartilhada na URL.
//
// Esta página continua existindo só para não quebrar links salvo no navegador:
// ela redireciona. Trocar por um 404 deixaria quem tinha o endereço achando que
// o painel caiu.
//
// O site é exportado como estático (output: "export"), então o redirecionamento
// é feito no cliente — não há servidor aqui para devolver um 302.

const PAINEL = "https://axyaigg.com.br/flow/leads";
const NAVY = "#001832";

export default function AdminPage() {
  useEffect(() => {
    window.location.replace(PAINEL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: NAVY }}>
      <div className="w-full max-w-[400px] text-center">
        <img
          src="/Logo-Axya-vetor-sem-escrita-padrão.png"
          alt="axya"
          className="h-16 w-auto mx-auto mb-3"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <p className="text-white/50 text-[14px] mb-6">Painel de Leads</p>
        <div className="bg-white rounded-[24px] p-8">
          <p className="text-[15px] mb-4" style={{ color: NAVY }}>
            O painel de leads agora fica no <strong>Axya Flow</strong>.
          </p>
          <p className="text-[13px] mb-6" style={{ color: "#5d6878" }}>
            Redirecionando…
          </p>
          <a
            href={PAINEL}
            className="inline-block w-full py-3 rounded-[12px] font-bold text-white text-[15px]"
            style={{ background: NAVY }}
          >
            Ir para o painel
          </a>
        </div>
      </div>
    </div>
  );
}
