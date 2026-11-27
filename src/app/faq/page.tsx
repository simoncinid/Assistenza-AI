import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getFaqJsonLd, HOME_FAQS, VERTICALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Domande Frequenti (FAQ) su Centralino AI e Automazioni",
  description:
    "Risposte chiare su costi, attivazione *61*, conformità GDPR e AI Act Art. 50, integrazione WhatsApp e tempi di attivazione.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const allFaqs = [
    ...HOME_FAQS,
    ...VERTICALS.flatMap((v) => v.faqs),
  ];

  return (
    <>
      <JsonLd data={getFaqJsonLd(allFaqs)} />
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">FAQ</p>
        <h1 className="mt-2 font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Domande frequenti
        </h1>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
          Tutto quello che serve sapere su funzionamento, attivazione sul tuo numero, privacy e conformità normativa.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="divide-y divide-line border-y border-line">
              {allFaqs.map((faq, idx) => (
                <details key={`${faq.question}-${idx}`} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-ink">
                    <span>{faq.question}</span>
                    <span className="font-mono text-[16px] text-rame transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <LeadForm title="Hai una domanda specifica?" subtitle="Scrivici o richiedi una breve call: ti rispondiamo in modo diretto." />
          </div>
        </div>
      </div>
    </>
  );
}
