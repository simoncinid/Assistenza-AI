import type { Metadata } from "next";
import { LeadBand } from "@/components/LeadBand";
import { JsonLd } from "@/components/JsonLd";
import { getServiceJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sviluppo AI su Misura per PMI Italiane",
  description:
    "Sviluppiamo automazioni AI concrete per PMI: preventivi rapidi, triage email, integrazioni CRM e gestionali aziendali senza cambiare i tuoi strumenti.",
  alternates: { canonical: "/servizi/sviluppo-ai-pmi" },
};

export default function SviluppoAiPmiPage() {
  return (
    <>
      <JsonLd
        data={getServiceJsonLd({
          name: "Sviluppo AI su misura per PMI",
          description:
            "Progettazione e sviluppo di automazioni AI collegate a email, CRM, documenti e gestionali per PMI italiane.",
          url: "/servizi/sviluppo-ai-pmi",
        })}
      />
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
          Sviluppo AI per PMI
        </p>
        <h1 className="mt-2 max-w-[24ch] font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Automazioni AI costruite sui tuoi flussi reali
        </h1>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
          Colleghiamo l&apos;intelligenza artificiale agli strumenti che usi già — email, Google Workspace, Notion, CRM e gestionali — per togliere ore di inserimento manuale ogni settimana.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Triage email e richieste</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Classifica ordini, richieste preventivo e ticket assistenza preparando bozze di risposta pronte da approvare.
            </p>
          </div>
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Estrazione dati da PDF</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Legge listini, DDT, bolle e richieste tecniche e li inserisce in formato pulito nel tuo gestionale o foglio di calcolo.
            </p>
          </div>
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Assistenti interni su documenti</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Manuali, procedure e cataloghi interrogabili in secondi dai tuoi tecnici e commerciali, con dati protetti.
            </p>
          </div>
        </div>

        <LeadBand defaultSector="PMI" defaultNeed="Automazione PMI" title="Parliamo del tuo progetto AI" />
      </div>
    </>
  );
}
