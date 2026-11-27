import type { Metadata } from "next";
import { CallSimulator } from "@/components/CallSimulator";
import { RoiCalculator } from "@/components/RoiCalculator";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import {
  FAQ_ITEMS,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Centralino AI 24/7 sul Tuo Numero",
  description:
    "Centralino vocale AI in italiano per artigiani, studi e PMI. Si attiva solo quando non rispondi (*61*), filtra le urgenze e invia il riepilogo su WhatsApp. Conforme AI Act.",
  alternates: { canonical: "/servizi/centralino-ai" },
};

export default function CentralinoAiPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Centralino AI 24/7 sul Tuo Numero",
    serviceType: "Centralino telefonico AI per PMI e artigiani",
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: "IT",
    url: `${SITE_URL}/servizi/centralino-ai`,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={getFaqJsonLd(FAQ_ITEMS)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
          { name: "Centralino AI", path: "/servizi/centralino-ai" },
        ])}
      />

      <div className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
          Centralino AI · Deviazione *61* · Conforme AI Act Art. 50
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">
          Il Centralino AI che risponde al tuo posto solo quando non puoi farlo tu.
        </h1>

        <aside className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
            In breve
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-800">
            Un centralino AI è un assistente vocale in italiano naturale che risponde alle chiamate in entrata quando sei occupato, non rispondi dopo 4–5 squilli o sei fuori orario. Non sostituisce il tuo numero: si collega tramite deviazione condizionata (<code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs">*61*</code>), dichiara di essere un&apos;AI come richiesto dall&apos;Art. 50 dell&apos;AI Act (in vigore dal 2 agosto 2026) e ti invia subito trascrizione, urgenza e recapito su WhatsApp o email.
          </p>
        </aside>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Risponde entro 1 secondo, senza menu a tasti ('premi 1 per...').",
          "Riconosce urgenze reali (guasto, blocco, perdita) e le separa dai preventivi.",
          "Verifica indirizzo, zona servita e numero di richiamata.",
          "Invia una scheda sintetica su WhatsApp o email entro 10 secondi.",
          "Fissa sopralluoghi o appuntamenti su Google Calendar (opzionale).",
          "Si disattiva o modifica con un semplice codice dal tuo telefono.",
        ].map((point) => (
          <div key={point} className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-800">
            <span className="font-mono font-bold text-blue-700">✓ </span>
            {point}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <CallSimulator defaultSector="idraulici" />
      </div>

      <div className="mt-12">
        <RoiCalculator />
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-2xl font-bold text-slate-900">Domande frequenti sul Centralino AI</h2>
          <div className="mt-5 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-bold text-slate-900">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <LeadForm defaultSector="Idraulico" defaultNeed="Centralino AI" title="Prenota una demo sul tuo settore" />
        </div>
      </div>
    </div>
  );
}
