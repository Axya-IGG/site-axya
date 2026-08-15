// Captação de leads do site institucional.
//
// O destino é o Axya Flow (aba "Leads"), que substituiu o painel /admin daqui.
// Este endpoint continua existindo porque é o endereço que o formulário do site
// já usa — quem mudou foi só o que acontece com o lead depois.
//
// O KV (LEADS_KV) deixou de ser a base: virou FILA DE RECUPERAÇÃO. Ele só é
// escrito quando o envio ao Flow falha, sob uma chave própria
// ("leads_pendentes"), e nunca é lido por nenhuma tela.
//
// Por que a fila existe: o formulário do site mostra "sucesso" mesmo quando o
// envio falha (o fetch dele está dentro de um try/catch que engole o erro). Sem
// a fila, uma indisponibilidade do Flow perderia o lead sem ninguém perceber —
// e lead perdido é dinheiro perdido, não bug de tela.
//
// O endereço é o da ORIGEM (flow-origin, DNS-only) e não axyaigg.com.br/flow:
// aquele caminho passa pelo Worker de proxy, e uma subrequisição para a mesma
// zona é justamente o tipo de coisa que falha de formas difíceis de depurar.

const CORS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const FLOW_LEADS_URL = "https://flow-origin.axyaigg.com.br/flow/api/leads";
const PAINEL_URL = "https://axyaigg.com.br/flow/leads";
const CHAVE_PENDENTES = "leads_pendentes";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: CORS });
}

async function enfileirarPendente(env, lead, motivo) {
  try {
    const raw = await env.LEADS_KV.get(CHAVE_PENDENTES);
    const fila = raw ? JSON.parse(raw) : [];
    fila.unshift({ ...lead, _falhaEm: new Date().toISOString(), _motivo: String(motivo).slice(0, 200) });
    await env.LEADS_KV.put(CHAVE_PENDENTES, JSON.stringify(fila));
  } catch {
    // Se nem o KV responder não há mais o que fazer aqui; o console do Worker
    // registra a exceção original.
  }
}

export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method;

  if (method === "OPTIONS") return new Response(null, { headers: CORS });

  if (method === "POST") {
    let lead;
    try {
      const data = await request.json();
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      lead = { ...data, id, createdAt: new Date().toISOString(), status: "novo" };
    } catch {
      return json({ error: "Falha ao ler o lead." }, 400);
    }

    try {
      const r = await fetch(FLOW_LEADS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!r.ok) throw new Error("Flow respondeu HTTP " + r.status);
      return json({ success: true, id: lead.id });
    } catch (e) {
      // O visitante não tem culpa nem ação possível: responde sucesso e guarda
      // o lead na fila para reenvio manual.
      await enfileirarPendente(env, lead, e && e.message);
      return json({ success: true, id: lead.id, queued: true });
    }
  }

  // O painel antigo foi aposentado. Um 404 mudo deixaria qualquer link salvo
  // parecendo defeito; 410 com o endereço novo diz o que aconteceu.
  return json(
    { error: "O painel de leads agora fica no Axya Flow.", painel: PAINEL_URL },
    410
  );
}
