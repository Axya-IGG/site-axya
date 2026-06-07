"use client";
import { useState, useCallback } from "react";

type Status = "novo" | "em_contato" | "finalizado";

type Lead = {
  id: string;
  nome: string;
  cargo: string;
  empresa: string;
  segmento: string;
  funcionarios: string;
  email: string;
  whatsapp: string;
  solucao: string;
  createdAt: string;
  status: Status;
};

const STATUS_CONFIG: Record<Status, { label: string; bg: string; text: string; border: string }> = {
  novo: { label: "Novo", bg: "rgba(8,216,255,0.10)", text: "#0ba8c5", border: "rgba(8,216,255,0.35)" },
  em_contato: { label: "Em contato", bg: "rgba(246,41,130,0.10)", text: "#c2246b", border: "rgba(246,41,130,0.35)" },
  finalizado: { label: "Finalizado", bg: "rgba(0,24,50,0.07)", text: "#001832", border: "rgba(0,24,50,0.18)" },
};

const NAVY = "#001832";
const PINK = "#f62982";

function fmt(iso: string) {
  try {
    return new Date(iso).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  } catch {
    return iso;
  }
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [filter, setFilter] = useState<Status | "todos">("todos");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/leads?password=${encodeURIComponent(password)}`);
      if (!res.ok) { setError("Senha incorreta."); setLoading(false); return; }
      setLeads(await res.json());
      setAuthed(true);
    } catch {
      setError("Erro ao conectar. Tente novamente.");
    }
    setLoading(false);
  };

  const updateStatus = useCallback(async (id: string, status: Status) => {
    await fetch(`/api/leads?password=${encodeURIComponent(password)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setLeads((l) => l.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
    setSelected((s) => (s?.id === id ? { ...s, status } : s));
  }, [password]);

  const deleteLead = useCallback(async (id: string) => {
    if (!confirm("Excluir este lead?")) return;
    await fetch(`/api/leads?password=${encodeURIComponent(password)}&id=${id}`, { method: "DELETE" });
    setLeads((l) => l.filter((lead) => lead.id !== id));
    if (selected?.id === id) setSelected(null);
  }, [password, selected]);

  const counts = {
    todos: leads.length,
    novo: leads.filter((l) => l.status === "novo").length,
    em_contato: leads.filter((l) => l.status === "em_contato").length,
    finalizado: leads.filter((l) => l.status === "finalizado").length,
  };

  const visible = filter === "todos" ? leads : leads.filter((l) => l.status === filter);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: NAVY }}>
        <div className="w-full max-w-[400px]">
          <div className="text-center mb-10">
            <img
              src="/Logo-Axya-vetor-sem-escrita-padrão.png"
              alt="axya"
              className="h-16 w-auto mx-auto mb-3"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white/50 text-[14px]">Painel de Leads</p>
          </div>
          <form onSubmit={login} className="bg-white rounded-[24px] p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-navy/50 uppercase tracking-[1.2px]">Senha de acesso</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                className="w-full px-4 py-3 rounded-[12px] text-[14px] outline-none"
                style={{ border: "1.5px solid rgba(0,24,50,0.15)", background: "#fafbff" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = PINK)}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,24,50,0.15)")}
              />
            </div>
            {error && <p className="text-[13px] text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-[12px] font-bold text-white text-[15px] transition-all hover:-translate-y-0.5 disabled:opacity-60"
              style={{ background: NAVY }}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#f4f6fa" }}>
      {/* Header */}
      <div style={{ background: NAVY }} className="px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/Logo-Axya-vetor-sem-escrita-padrão.png"
            alt="axya"
            className="h-8 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="text-white/30 text-[14px]">/</span>
          <p className="text-white/70 text-[14px]">Painel de Leads</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/50 text-[13px]">{leads.length} leads total</span>
          <button
            onClick={() => { setAuthed(false); setLeads([]); setPassword(""); }}
            className="text-white/50 hover:text-white text-[13px] transition-colors"
          >
            Sair
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(["todos", "novo", "em_contato", "finalizado"] as const).map((s) => {
            const cfg = s === "todos"
              ? { label: "Todos", bg: NAVY, text: "#fff", border: NAVY }
              : STATUS_CONFIG[s];
            const active = filter === s;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className="px-4 py-2 rounded-[10px] text-[13px] font-semibold transition-all"
                style={active
                  ? { background: s === "todos" ? NAVY : cfg.bg, color: s === "todos" ? "#fff" : cfg.text, border: `1.5px solid ${cfg.border}` }
                  : { background: "#fff", color: "#5d6878", border: "1.5px solid rgba(0,24,50,0.10)" }
                }
              >
                {s === "todos" ? "Todos" : STATUS_CONFIG[s].label} · {counts[s]}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-6">
          {/* Lead list */}
          <div className="flex flex-col gap-3">
            {visible.length === 0 && (
              <div className="bg-white rounded-[20px] p-10 text-center text-[#5d6878] text-[15px]">
                Nenhum lead {filter !== "todos" ? `com status "${STATUS_CONFIG[filter as Status]?.label}"` : ""} ainda.
              </div>
            )}
            {visible.map((lead) => {
              const cfg = STATUS_CONFIG[lead.status];
              const isActive = selected?.id === lead.id;
              return (
                <button
                  key={lead.id}
                  onClick={() => setSelected(isActive ? null : lead)}
                  className="bg-white rounded-[18px] p-5 text-left w-full transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ border: isActive ? `2px solid ${PINK}` : "2px solid transparent", boxShadow: isActive ? `0 0 0 2px rgba(246,41,130,0.12)` : "0 2px 8px rgba(0,24,50,0.06)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <p className="font-spartan font-bold text-navy text-[16px]">{lead.nome}</p>
                        <span
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                          style={{ background: cfg.bg, color: cfg.text, border: `1px solid ${cfg.border}` }}
                        >
                          {cfg.label}
                        </span>
                      </div>
                      <p className="text-[#5d6878] text-[13px]">{lead.cargo} · {lead.empresa}</p>
                      <p className="text-[#5d6878] text-[12px] mt-1">{lead.solucao}</p>
                    </div>
                    <p className="text-[11px] text-navy/35 flex-shrink-0 mt-0.5">{fmt(lead.createdAt)}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div>
            {selected ? (
              <div className="bg-white rounded-[20px] p-6 sticky top-6" style={{ border: "1.5px solid rgba(0,24,50,0.08)" }}>
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="font-spartan font-bold text-navy text-[20px] leading-tight">{selected.nome}</p>
                    <p className="text-pink text-[12px] font-semibold mt-0.5">{selected.cargo}</p>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-navy/25 hover:text-navy text-[18px]">✕</button>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  {[
                    ["Empresa", selected.empresa],
                    ["Segmento", selected.segmento],
                    ["Funcionários", selected.funcionarios],
                    ["E-mail", selected.email],
                    ["WhatsApp", selected.whatsapp],
                    ["Solução desejada", selected.solucao],
                    ["Recebido em", fmt(selected.createdAt)],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <p className="text-[10px] font-bold text-navy/40 uppercase tracking-[1px]">{label}</p>
                      <p className="text-navy text-[14px]">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="h-px mb-5" style={{ background: "rgba(0,24,50,0.07)" }} />

                {/* Status change */}
                <p className="text-[11px] font-bold text-navy/40 uppercase tracking-[1px] mb-2">Alterar status</p>
                <div className="flex flex-col gap-2 mb-5">
                  {(["novo", "em_contato", "finalizado"] as Status[]).map((s) => {
                    const cfg = STATUS_CONFIG[s];
                    const active = selected.status === s;
                    return (
                      <button
                        key={s}
                        onClick={() => updateStatus(selected.id, s)}
                        className="w-full py-2.5 rounded-[10px] text-[13px] font-semibold transition-all"
                        style={active
                          ? { background: cfg.bg, color: cfg.text, border: `1.5px solid ${cfg.border}` }
                          : { background: "transparent", color: "#5d6878", border: "1.5px solid rgba(0,24,50,0.10)" }
                        }
                      >
                        {cfg.label}
                      </button>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${selected.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-[10px] text-[13px] font-semibold text-center transition-all hover:-translate-y-0.5"
                    style={{ background: "#25D366", color: "#fff" }}
                  >
                    Abrir WhatsApp
                  </a>
                  <a
                    href={`mailto:${selected.email}`}
                    className="w-full py-2.5 rounded-[10px] text-[13px] font-semibold text-center transition-all hover:-translate-y-0.5"
                    style={{ background: "rgba(0,24,50,0.06)", color: NAVY }}
                  >
                    Enviar e-mail
                  </a>
                  <button
                    onClick={() => deleteLead(selected.id)}
                    className="w-full py-2.5 rounded-[10px] text-[13px] font-semibold transition-all hover:-translate-y-0.5"
                    style={{ background: "rgba(220,38,38,0.07)", color: "#dc2626" }}
                  >
                    Excluir lead
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-[20px] p-8 text-center" style={{ border: "1.5px dashed rgba(0,24,50,0.12)" }}>
                <p className="text-navy/30 text-[14px]">Selecione um lead para ver os detalhes</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
