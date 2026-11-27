import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { FAQ_ITEMS, getFaqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Domande Frequenti su Centralino AI e Automazione per PMI",
  description:
    "Risposte chiare su come funziona un centralino AI per artigiani e PMI, tempi di attivazione, mantenimento del numero e conformità GDPR.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <JsonLd data={getFaqJsonLd(FAQ_ITEMS)} />
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Domande frequenti
      </h1>
      <p className="mt-3 text-slate-600">
        Tutto quello che serve sapere prima di attivare un centralino AI o un&apos;automazione per la tua impresa.
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
        <LeadForm
          title="Hai un'altra domanda?"
          subtitle="Scrivici senza impegno: rispondiamo in modo chiaro e diretto."
        />
      </div>
    </div>
  );
}
