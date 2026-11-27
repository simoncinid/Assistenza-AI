import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Automazione WhatsApp AI per PMI e Artigiani",
  description:
    "Rispondi su WhatsApp H24, qualifica i clienti, raccogli foto dei guasti e fissa appuntamenti su Google Calendar senza perdere ore in chat.",
  alternates: { canonical: "/servizi/automazione-whatsapp-ai" },
};

export default function WhatsAppAiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Automazione WhatsApp AI",
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          areaServed: "IT",
        }}
      />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
          { name: "Automazione WhatsApp AI", path: "/servizi/automazione-whatsapp-ai" },
        ])}
      />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
            WhatsApp Business AI
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">
            Rispondi su WhatsApp H24, qualifica i clienti e fissa appuntamenti.
          </h1>
          <aside className="mt-6 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-800">
            <strong className="block font-mono text-[11px] uppercase text-slate-500">In breve</strong>
            L&apos;assistente WhatsApp AI risponde in pochi secondi a messaggi di testo e note vocali, raccoglie foto del lavoro o codice articolo, filtra le zone non servite e propone gli slot liberi sul tuo Google Calendar.
          </aside>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li>• Risposta immediata anche la sera e nel fine settimana.</li>
            <li>• Raccolta guidata di foto, indirizzo, targa o modello prima di farti richiamare.</li>
            <li>• Promemoria automatici prima dell&apos;appuntamento per ridurre i mancati arrivi.</li>
          </ul>
        </div>
        <div className="lg:col-span-5">
          <LeadForm defaultSector="PMI" defaultNeed="WhatsApp AI" title="Richiedi analisi gratuita" />
        </div>
      </div>
    </div>
  );
}
