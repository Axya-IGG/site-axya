"use client";

const stats = [
  { em: "56%", text: "de aumento no turnover no Brasil — maior taxa do mundo.", source: "Robert Half" },
  { em: "8 em cada 10", text: "pessoas deixam a empresa por causa do líder, não da empresa.", source: "Michael Page" },
  { em: "56%", text: "dos funcionários brasileiros estão desengajados no trabalho.", source: "Engaja S/A · FGV 2024" },
  { em: "75%", text: "dos profissionais fizeram quiet quitting nos últimos 3 meses.", source: "Engaja S/A 2024" },
  { em: "66%", text: "dos brasileiros pensaram em pedir demissão no último trimestre.", source: "Flash · FGV 2024" },
  { em: "200%", text: "do salário anual é o custo de repor um funcionário.", source: "Robert Half" },
  { em: "51,3%", text: "dos trabalhadores foram desligados ou pediram demissão em 12 meses.", source: "CAGED · MTE" },
  { em: "67%", text: "dos brasileiros sofrem de estresse no trabalho.", source: "Wellhub 2024" },
  { em: "R$ 2,3 tri", text: "perdidos globalmente por falta de engajamento.", source: "Gallup 2024" },
];

function StatItem({ em, text, source }: { em: string; text: string; source: string }) {
  return (
    <span
      className="inline-flex items-center whitespace-nowrap px-10 relative text-[14.5px] font-light"
      style={{
        color: "rgba(255,255,255,0.72)",
        background: "rgba(8,216,255,0.06)",
        borderTop: "1px solid rgba(8,216,255,0.12)",
        borderBottom: "1px solid rgba(8,216,255,0.12)",
        padding: "4px 40px",
      }}
    >
      <strong style={{ color: "#08D8FF", fontWeight: 700, fontSize: 14, marginRight: 5, letterSpacing: "-0.5px" }}>
        {em}
      </strong>
      {" "}{text}{" "}
      <sup style={{ fontSize: "9.5px", color: "rgba(8,216,255,0.45)", marginLeft: 6, textTransform: "uppercase" }}>
        {source}
      </sup>
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
        style={{ background: "rgba(8,216,255,0.55)" }}
      />
    </span>
  );
}

export default function StatsBanner() {
  const doubled = [...stats, ...stats];

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        background: "rgba(0,24,50,0.97)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Fade left */}
      <div
        className="absolute top-0 bottom-0 left-0 w-36 pointer-events-none z-10"
        style={{ background: "linear-gradient(90deg, #09090B 0%, transparent 100%)" }}
      />
      {/* Fade right */}
      <div
        className="absolute top-0 bottom-0 right-0 w-36 pointer-events-none z-10"
        style={{ background: "linear-gradient(270deg, #09090B 0%, transparent 100%)" }}
      />

      <div className="py-3 whitespace-nowrap overflow-hidden group">
        <div className="inline-flex animate-scroll-left group-hover:[animation-play-state:paused]">
          {doubled.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}
