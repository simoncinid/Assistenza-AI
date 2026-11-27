const ALLOWED_SECTORS = new Set([
  "Idraulico",
  "Elettricista",
  "Officina",
  "Studio Professionale",
  "PMI",
  "Artigiano",
  "Altro",
]);

const ALLOWED_NEEDS = new Set([
  "Centralino AI",
  "WhatsApp AI",
  "Automazione PMI",
  "Assistenza AI",
  "Altro",
]);

async function handleLeadPost(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Richiesta non valida." }, { status: 400 });
  }

  // Honeypot silent drop
  if (body.website && String(body.website).trim().length > 0) {
    return Response.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const sector = ALLOWED_SECTORS.has(body.sector) ? body.sector : "Altro";
  const need = ALLOWED_NEEDS.has(body.need) ? body.need : "Altro";
  const message = String(body.message || "").trim();
  const gdprConsent = Boolean(body.gdprConsent);

  if (name.length < 2 || (!email && !phone)) {
    return Response.json(
      { ok: false, error: "Inserisci nome/azienda e almeno telefono o email." },
      { status: 400 }
    );
  }
  if (!gdprConsent) {
    return Response.json(
      { ok: false, error: "È necessario il consenso GDPR per inviare la richiesta." },
      { status: 400 }
    );
  }

  const pageUrl = String(body.page_url || "").trim();
  const utmSource = String(body.utm_source || "").trim();
  const utmMedium = String(body.utm_medium || "").trim();
  const utmCampaign = String(body.utm_campaign || "").trim();

  if (env.NOTION_TOKEN && env.NOTION_LEADS_DB_ID) {
    const properties = {
      "Nome / Azienda": { title: [{ text: { content: name.slice(0, 200) } }] },
      Settore: { select: { name: sector } },
      Esigenza: { select: { name: need } },
      Qualifica: { select: { name: "Da qualificare" } },
      "Consenso GDPR": { checkbox: true },
      Messaggio: { rich_text: [{ text: { content: message.slice(0, 1500) } }] },
      "UTM Source": { rich_text: [{ text: { content: utmSource.slice(0, 200) } }] },
      "UTM Medium": { rich_text: [{ text: { content: utmMedium.slice(0, 200) } }] },
      "UTM Campaign": { rich_text: [{ text: { content: utmCampaign.slice(0, 200) } }] },
    };
    if (email) properties.Email = { email };
    if (phone) properties.Telefono = { phone_number: phone.slice(0, 50) };
    if (pageUrl && pageUrl.startsWith("http")) {
      properties["Pagina sorgente"] = { url: pageUrl };
    }

    try {
      await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parent: { database_id: env.NOTION_LEADS_DB_ID },
          properties,
        }),
      });
    } catch (err) {
      console.error("[lead_submit] Notion error:", err);
    }
  }

  if (env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "lead_submit",
          name,
          email,
          phone,
          sector,
          need,
          message,
          pageUrl,
          utmSource,
          utmMedium,
          utmCampaign,
        }),
      });
    } catch (err) {
      console.error("[lead_submit] Webhook error:", err);
    }
  }

  return Response.json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/googlea029d6c275f7abea.html") {
      return new Response("google-site-verification: googlea029d6c275f7abea.html\n", {
        status: 200,
        headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
      });
    }
    if (url.pathname === "/api/leads" && request.method === "POST") {
      return handleLeadPost(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
