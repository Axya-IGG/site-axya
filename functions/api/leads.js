const CORS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-admin-password",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: CORS });
}

async function getLeads(env) {
  const raw = await env.LEADS_KV.get("leads");
  return raw ? JSON.parse(raw) : [];
}

async function saveLeads(env, list) {
  await env.LEADS_KV.put("leads", JSON.stringify(list));
}

function isAuthed(request, env) {
  const url = new URL(request.url);
  const fromQuery = url.searchParams.get("password");
  const fromHeader = request.headers.get("x-admin-password");
  return (fromQuery || fromHeader) === env.ADMIN_PASSWORD;
}

export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method;

  if (method === "OPTIONS") return new Response(null, { headers: CORS });

  // POST — public (anyone can submit a lead)
  if (method === "POST") {
    try {
      const data = await request.json();
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      const lead = { ...data, id, createdAt: new Date().toISOString(), status: "novo" };
      const list = await getLeads(env);
      list.unshift(lead);
      await saveLeads(env, list);
      return json({ success: true, id });
    } catch {
      return json({ error: "Falha ao salvar lead." }, 500);
    }
  }

  // All other methods require auth
  if (!isAuthed(request, env)) {
    return json({ error: "Não autorizado." }, 401);
  }

  if (method === "GET") {
    const leads = await getLeads(env);
    return json(leads);
  }

  if (method === "PATCH") {
    try {
      const { id, status } = await request.json();
      const list = await getLeads(env);
      const updated = list.map((l) => (l.id === id ? { ...l, status } : l));
      await saveLeads(env, updated);
      return json({ success: true });
    } catch {
      return json({ error: "Falha ao atualizar." }, 500);
    }
  }

  if (method === "DELETE") {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const list = await getLeads(env);
    await saveLeads(env, list.filter((l) => l.id !== id));
    return json({ success: true });
  }

  return json({ error: "Método não permitido." }, 405);
}
