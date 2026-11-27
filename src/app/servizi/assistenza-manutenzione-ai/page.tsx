import type { Metadata } from "next";
import { LeadBand } from "@/components/LeadBand";
import { JsonLd } from "@/components/JsonLd";
import { getServiceJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Assistenza e Manutenzione Sistemi AI per Aziende",
  description:
    "Supporto tecnico continuativo in italiano per centralini AI, chatbot WhatsApp e automazioni aziendali: monitoraggio, aggiornamenti e controllo costi.",
  alternates: { canonical: "/servizi/assistenza-manutenzione-ai" },
};

export default function AssistenzaManutenzionePage() {
  return (
    <>
      <JsonLd
        data={getServiceJsonLd({
          name: "Assistenza e Manutenzione AI",
          description:
            "Supporto tecnico continuativo, aggiornamento prompt/modelli e monitoraggio per sistemi AI aziendali in Italia.",
          url: "/servizi/assistenza-manutenzione-ai",
        })}
      />
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
          Assistenza e Manutenzione AI
        </p>
        <h1 className="mt-2 max-w-[24ch] font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          I tuoi sistemi AI sempre aggiornati, senza pensieri
        </h1>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
          I modelli e le API cambiano ogni mese. Con il nostro supporto continuativo hai un referente tecnico in italiano che monitora la qualità delle risposte, aggiorna orari e listini e tiene sotto controllo i consumi.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Revisione conversazioni</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Affiniamo periodicamente le risposte sui casi reali dei tuoi clienti per aumentare precisione e conversioni.
            </p>
          </div>
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Aggiornamenti rapidi</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Chiusure per ferie, nuove tariffe o nuovi servizi: ci mandi un messaggio e aggiorniamo tutto noi.
            </p>
          </div>
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Controllo costi e uptime</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Verifichiamo stabilità, latenza e costi delle API così il sistema resta veloce e prevedibile.
            </p>
          </div>
        </div>

        <LeadBand defaultSector="PMI" defaultNeed="Assistenza AI" title="Hai già un'automazione AI da stabilizzare?" />
      </div>
    </>
  );
}
