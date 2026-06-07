"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SOLUCOES = [
  "Implantação de RH",
  "Consultoria RH Alta Performance",
  "Assessoria em Recrutamento e Seleção",
  "Desenvolvimento de Lideranças",
  "NR-1 e Riscos Psicossociais",
  "Ainda não sei / Quero conversar",
];

const FUNCIONARIOS = ["Até 10", "11 a 50", "51 a 100", "101 a 300", "Mais de 300"];

type FormData = {
  nome: string; cargo: string; empresa: string; segmento: string;
  funcionarios: string; email: string; whatsapp: string; solucao: string;
};

const empty: FormData = {
  nome: "", cargo: "", empresa: "", segmento: "",
  funcionarios: "", email: "", whatsapp: "", solucao: "",
};

function Field({ label, type = "text", value, onChange, required }: {
  label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-bold text-navy/45 uppercase tracking-[1.2px]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-3 py-2.5 rounded-[10px] text-[14px] text-navy outline-none transition-colors"
        style={{ border: "1.5px solid rgba(0,24,50,0.12)", background: "#fafbff" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#f62982")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,24,50,0.12)")}
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options, required }: {
  label: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-bold text-navy/45 uppercase tracking-[1.2px]">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-3 py-2.5 rounded-[10px] text-[14px] text-navy outline-none transition-colors appearance-none cursor-pointer"
        style={{ border: "1.5px solid rgba(0,24,50,0.12)", background: "#fafbff" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#f62982")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,24,50,0.12)")}
      >
        <option value="">Selecione...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function FormPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>(empty);
  const savedScroll = useRef(0);

  // Lock body scroll when modal is open (prevents background scroll and iOS viewport resize)
  useEffect(() => {
    if (open) {
      savedScroll.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScroll.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, savedScroll.current);
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = "";
      });
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openLeadForm", handler);
    return () => window.removeEventListener("openLeadForm", handler);
  }, []);

  const set = (field: keyof FormData) => (v: string) => setForm((f) => ({ ...f, [field]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, createdAt: new Date().toISOString() }),
      });
    } catch { /* show success anyway */ }
    setStep("success");
    setLoading(false);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => { setStep("form"); setForm(empty); }, 350);
  };

  return (
    <AnimatePresence>
      {open && (
        /* Full-screen overlay — pointer events block background interaction */
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            background: "rgba(0,10,24,0.78)",
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          {/* Desktop: centered */}
          <style>{`@media (min-width: 768px) { #lead-modal { align-self: center; border-radius: 24px; max-height: 90vh; } }`}</style>

          <motion.div
            id="lead-modal"
            key="modal"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            style={{
              width: "100%",
              maxWidth: 560,
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              borderRadius: "24px 24px 0 0",
              /* Fixed height avoids keyboard-induced reflow */
              height: "min(620px, 92svh)",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.25)",
              overflow: "hidden",
            }}
          >
            {/* ── Sticky header ── */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ height: 4, background: "linear-gradient(90deg,#08d8ff,#f62982)" }} />
              <div
                style={{ padding: "14px 20px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(0,24,50,0.07)" }}
              >
                <div>
                  <p style={{ color: "#f62982", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 2 }}>Solicitar contato</p>
                  <h3 className="font-spartan" style={{ fontWeight: 900, color: "#001832", fontSize: 20, lineHeight: 1, letterSpacing: "-0.5px" }}>
                    Fale com a axya
                  </h3>
                </div>
                <button
                  onClick={close}
                  style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(0,24,50,0.05)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(0,24,50,0.35)", fontSize: 16 }}
                >
                  ✕
                </button>
              </div>
            </div>

            {step === "form" ? (
              <>
                {/* ── Scrollable body ── */}
                <form
                  id="lead-form"
                  onSubmit={handleSubmit}
                  style={{ flex: 1, overflowY: "auto", padding: "14px 20px", WebkitOverflowScrolling: "touch" }}
                >
                  <p style={{ color: "#5d6878", fontSize: 12, marginBottom: 14 }}>Preencha e entraremos em contato em até 24 horas úteis.</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <Field label="Nome" value={form.nome} onChange={set("nome")} required />
                      <Field label="Cargo" value={form.cargo} onChange={set("cargo")} required />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <Field label="Empresa" value={form.empresa} onChange={set("empresa")} required />
                      <Field label="Segmento" value={form.segmento} onChange={set("segmento")} required />
                    </div>
                    <SelectField label="Quantidade de funcionários" value={form.funcionarios} onChange={set("funcionarios")} options={FUNCIONARIOS} required />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <Field label="E-mail corporativo" type="email" value={form.email} onChange={set("email")} required />
                      <Field label="WhatsApp" type="tel" value={form.whatsapp} onChange={set("whatsapp")} required />
                    </div>
                    <SelectField label="Solução desejada" value={form.solucao} onChange={set("solucao")} options={SOLUCOES} required />
                  </div>
                </form>

                {/* ── Sticky footer ── */}
                <div style={{ flexShrink: 0, padding: "12px 20px 20px", borderTop: "1px solid rgba(0,24,50,0.07)" }}>
                  <button
                    type="submit"
                    form="lead-form"
                    disabled={loading}
                    className="font-spartan"
                    style={{
                      width: "100%", padding: "14px", borderRadius: 12, fontWeight: 700, color: "#fff",
                      fontSize: 15, border: "none", cursor: "pointer", background: "linear-gradient(135deg,#001832,#0b2444)",
                      opacity: loading ? 0.6 : 1, transition: "opacity 0.2s",
                    }}
                  >
                    {loading ? "Enviando..." : "Solicitar contato"}
                  </button>
                </div>
              </>
            ) : (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "32px 32px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(8,216,255,0.10)", border: "2px solid rgba(8,216,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 }}>
                  ✓
                </div>
                <h3 className="font-spartan" style={{ fontWeight: 900, color: "#001832", fontSize: 24, letterSpacing: "-0.5px", marginBottom: 8 }}>
                  Recebemos o seu contato!
                </h3>
                <p style={{ color: "#5d6878", fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>
                  Nossa equipe entrará em contato em até 24 horas úteis.
                </p>
                <button
                  onClick={close}
                  style={{ marginTop: 28, padding: "10px 32px", borderRadius: 12, background: "#001832", color: "#fff", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer" }}
                >
                  Fechar
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
