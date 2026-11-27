import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sviluppo AI su Misura per PMI Italiane",
  description:
    "Automazioni AI integrate con i tuoi gestionali, documenti, fatture passive, DDT e CRM per ridurre il data entry manuale nelle PMI italiane.",
  alternates: { canonical: "/servizi/sviluppo-ai-pmi" },
};

export default function SviluppoAiPmiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sviluppo AI su Misura per PMI",
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          areaServed: "IT",
        }}
      />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
          { name: "Sviluppo AI PMI", path: "/servizi/sviluppo-ai-pmi" },
        ])}
      />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
            Sviluppo AI su misura · PMI
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">
            Automazioni AI integrate con i tuoi gestionali, documenti e CRM.
          </h1>
          <aside className="mt-6 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-800">
            <strong className="block font-mono text-[11px] uppercase text-slate-500">In breve</strong>
            Sviluppiamo flussi AI concreti per PMI italiane: estrazione dati da DDT e fatture passive, preparazione bozze preventivi, smistamento email commerciali e integrazione sicura con ERP/CRM esistenti nel rispetto del GDPR.
          </aside>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li>• Nessun cambio di gestionale: lavoriamo sopra gli strumenti che usi già.</li>
            <li>• Ambiente aziendale isolato, senza usare i tuoi documenti per addestrare modelli esterni.</li>
            <li>• Rilascio progressivo partendo dal processo con il ritorno economico più rapido.</li>
          </ul>
        </div>
        <div className="lg:col-span-5">
          <LeadForm defaultSector="PMI" defaultNeed="Automazione PMI" title="Prenota un audit gratuito" />
        </div>
      </div>
    </div>
  );
}
