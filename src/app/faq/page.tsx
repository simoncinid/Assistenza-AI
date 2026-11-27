import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { FAQ_ITEMS, getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Domande Frequenti su Centralino AI, *61*, GDPR e AI Act",
  description:
    "Risposte chiare su come funziona un centralino AI per artigiani e PMI: mantenimento del numero (*61*), obbligo trasparenza AI Act Art. 50, tempi e GDPR.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <JsonLd data={getFaqJsonLd(FAQ_ITEMS)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Domande frequenti
      </h1>
      <p className="mt-3 text-slate-600">
        Risposte dirette su deviazione <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs">*61*</code>, AI Act Art. 50, GDPR e tempi di attivazione.
      </p>

      <div className="mt-8 space-y-4">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">{item.question}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <LeadForm title="Hai un'altra domanda?" subtitle="Scrivici senza impegno: rispondiamo in modo chiaro e diretto." />
      </div>
    </div>
  );
}
