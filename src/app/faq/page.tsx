import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_GROUPS, FAQ_ITEMS, getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Domande Frequenti (FAQ) su Centralino AI e Automazioni",
  description:
    "20 risposte chiare su funzionamento *61*, costi reali, conformità GDPR e AI Act Art. 50, integrazione WhatsApp e tempi di attivazione.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd(FAQ_ITEMS)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">FAQ</p>
        <h1 className="mt-2 font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Domande frequenti
        </h1>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
          Le 20 risposte più richieste da artigiani, studi e PMI su attivazione sul numero attuale, costi, GDPR, AI Act e integrazioni.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            {FAQ_GROUPS.map((group) => (
              <section key={group.group}>
                <h2 className="text-[1.25rem] font-semibold tracking-[-0.02em] text-ink">
                  {group.group}
                </h2>
                <div className="mt-3 divide-y divide-line border-y border-line">
                  {group.items.map((faq, idx) => (
                    <details key={`${faq.question}-${idx}`} className="group py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-ink">
                        <span>{faq.question}</span>
                        <span className="font-mono text-[16px] text-rame transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            <div className="pt-2">
              <Link href="/guide" className="inline-flex min-h-11 items-center text-[14px] font-semibold text-rame hover:text-rame-hover">
                Approfondisci nelle guide pratiche →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <LeadForm title="Hai una domanda specifica?" subtitle="Scrivici o richiedi una breve call: ti rispondiamo in modo diretto." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
