import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Assistenza e Manutenzione AI per Aziende",
  description:
    "Assistenza AI continua in italiano per PMI e artigiani: configuriamo, monitoriamo e aggiorniamo i tuoi assistenti e automazioni nel tempo.",
  alternates: { canonical: "/servizi/assistenza-manutenzione-ai" },
};

export default function AssistenzaManutenzionePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Assistenza e Manutenzione AI",
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          areaServed: "IT",
        }}
      />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
          { name: "Assistenza e Manutenzione AI", path: "/servizi/assistenza-manutenzione-ai" },
        ])}
      />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
            Supporto continuativo in italiano
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">
            Assistenza AI continua in italiano: configuriamo, monitoriamo, aggiorniamo.
          </h1>
          <aside className="mt-6 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-800">
            <strong className="block font-mono text-[11px] uppercase text-slate-500">In breve</strong>
            Un sistema AI non si abbandona dopo l&apos;installazione. Seguiamo nel tempo i tuoi assistenti vocali, WhatsApp e automazioni: aggiorniamo orari, ferie, listini e monitoriamo la qualità delle risposte.
          </aside>
        </div>
        <div className="lg:col-span-5">
          <LeadForm defaultSector="PMI" defaultNeed="Assistenza AI" title="Parla con un tecnico" />
        </div>
      </div>
    </div>
  );
}
