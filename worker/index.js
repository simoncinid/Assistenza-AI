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

// Sliding-window in-memory rate limit per IP (5 requests / 10 min per isolate)
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const ipHits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const prev = ipHits.get(ip) || [];
  const recent = prev.filter((ts) => now - ts < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX_REQUESTS) {
    ipHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  ipHits.set(ip, recent);
  if (ipHits.size > 1000) {
    for (const [k, v] of ipHits) {
      if (v.every((ts) => now - ts >= RATE_WINDOW_MS)) ipHits.delete(k);
    }
  }
  return false;
}

async function handleLeadPost(request, env) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return Response.json({ ok: false, error: "Formato richiesta non valido." }, { status: 415 });
  }

  const clientIp =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (clientIp !== "unknown" && isRateLimited(clientIp)) {
    return Response.json(
      { ok: false, error: "Hai inviato troppe richieste ravvicinate. Riprova tra qualche minuto o scrivi a info@assistenza-ai.it." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Richiesta non valida." }, { status: 400 });
  }

  // Honeypot anti-spam trap
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

  if (name.length < 2 || name.length > 200 || (!email && !phone)) {
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

  const pageUrl = String(body.page_url || body.source_url || "").trim();
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
      const notionRes = await fetch("https://api.notion.com/v1/pages", {
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
      if (!notionRes.ok) {
        console.error("[lead_submit] Notion HTTP error:", notionRes.status);
      }
    } catch (err) {
      console.error("[lead_submit] Notion error:", err);
    }
  }

  return Response.json({ ok: true });
}

const IMMUTABLE_PREFIXES = ["/_next/static/", "/brand/", "/icons/"];
const IMMUTABLE_EXACT = new Set([
  "/favicon.svg",
  "/favicon.ico",
  "/favicon-32x32.png",
  "/apple-touch-icon.png",
  "/icon-192.png",
  "/icon-512.png",
  "/og-image.png",
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Google Search Console verification file served directly on apex & www
    if (url.pathname === "/googlea029d6c275f7abea.html") {
      return new Response("google-site-verification: googlea029d6c275f7abea.html", {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    // Canonical 301 redirect apex -> www
    if (url.hostname === "assistenza-ai.it") {
      return Response.redirect(`https://www.assistenza-ai.it${url.pathname}${url.search}`, 301);
    }

    // Lead API
    if (url.pathname === "/api/leads") {
      if (request.method === "POST") {
        return handleLeadPost(request, env);
      }
      return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
    }

    const res = await env.ASSETS.fetch(request);
    const headers = new Headers(res.headers);

    // Security headers
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("X-Frame-Options", "SAMEORIGIN");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

    // Prevent indexing on preview workers.dev subdomain
    if (url.hostname.endsWith(".workers.dev")) {
      headers.set("X-Robots-Tag", "noindex, nofollow");
    }

    // Long-term immutable cache for static assets
    if (
      IMMUTABLE_PREFIXES.some((p) => url.pathname.startsWith(p)) ||
      IMMUTABLE_EXACT.has(url.pathname)
    ) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    }

    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  },
};
