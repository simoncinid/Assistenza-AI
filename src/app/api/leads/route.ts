import { NextResponse } from "next/server";

interface LeadPayload {
  name?: string;
  contact?: string;
  sector?: string;
  need?: string;
  message?: string;
  website?: string;
  page_url?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  timestamp?: string;
}

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_MAX;
}

async function saveLeadToNotion(lead: Required<Omit<LeadPayload, "website">>) {
  const token = process.env.NOTION_TOKEN;
  const dbId = process.env.NOTION_LEADS_DB_ID;
  if (!token || !dbId) return { saved: false, reason: "notion_not_configured" };

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: dbId },
      properties: {
        Name: { title: [{ text: { content: lead.name.slice(0, 200) } }] },
        Contatto: { rich_text: [{ text: { content: lead.contact.slice(0, 200) } }] },
        Settore: { select: { name: lead.sector.slice(0, 100) } },
        Bisogno: { select: { name: lead.need.slice(0, 100) } },
        Messaggio: { rich_text: [{ text: { content: lead.message.slice(0, 1500) } }] },
        Pagina: { url: lead.page_url || null },
        UTM: {
          rich_text: [
            {
              text: {
                content: [lead.utm_source, lead.utm_medium, lead.utm_campaign]
                  .filter(Boolean)
                  .join(" / "),
              },
            },
          ],
        },
      },
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("[lead_submit] Notion save failed:", res.status, errText);
    return { saved: false, reason: "notion_error" };
  }
  return { saved: true };
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Troppe richieste ravvicinate. Riprova tra un minuto." },
      { status: 429 }
    );
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Richiesta non valida." }, { status: 400 });
  }

  // Silent honeypot drop for bots
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const contact = (body.contact || "").trim();
  const sector = (body.sector || "Altro").trim();
  const need = (body.need || "Altro").trim();
  const message = (body.message || "").trim();

  if (name.length < 2 || contact.length < 5) {
    return NextResponse.json(
      { ok: false, error: "Inserisci nome/azienda e un recapito valido." },
      { status: 400 }
    );
  }

  const lead = {
    name,
    contact,
    sector,
    need,
    message,
    page_url: (body.page_url || "").trim(),
    referrer: (body.referrer || "").trim(),
    utm_source: (body.utm_source || "").trim(),
    utm_medium: (body.utm_medium || "").trim(),
    utm_campaign: (body.utm_campaign || "").trim(),
    timestamp: body.timestamp || new Date().toISOString(),
  };

  console.info("[lead_submit]", JSON.stringify({ sector: lead.sector, need: lead.need, utm_source: lead.utm_source, timestamp: lead.timestamp }));

  await saveLeadToNotion(lead);

  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "lead_submit", lead }),
      });
    } catch (err) {
      console.error("[lead_submit] Webhook failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
