import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Chi siamo | Assistenza AI per PMI e Artigiani",
  description:
    "Sviluppatori e tecnici italiani specializzati in automazioni AI concrete per PMI, artigiani e studi professionali.",
  alternates: { canonical: "/chi-siamo" },
};

export default function ChiSiamoPage() {
  return (
    <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">Chi siamo</p>
      <h1 className="mt-2 max-w-[24ch] font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
        Tecnici italiani che portano l&apos;AI dove serve davvero
      </h1>
      <div className="mt-6 max-w-[65ch] space-y-4 text-[17px] leading-[1.55] text-ink-soft">
        <p>
          Assistenza AI nasce con un obiettivo semplice: dare ad artigiani, studi e PMI italiane gli stessi strumenti di automazione delle grandi aziende, ma consegnati chiavi in mano e senza parole complicate.
        </p>
        <p>
          Non vendiamo abbonamenti a software vuoti da configurare da soli: progettiamo i flussi sui tuoi casi reali, li testiamo con te prima di andare online e restiamo al tuo fianco per l&apos;assistenza continua.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
          <h2 className="text-[18px] font-semibold text-ink">Approccio pratico</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Ogni automazione deve risparmiare tempo o recuperare clienti persi fin dal primo mese.
          </p>
        </div>
        <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
          <h2 className="text-[18px] font-semibold text-ink">Trasparenza totale</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Dichiarazione chiara ai clienti (AI Act Art. 50), conformità GDPR e nessun vincolo nascosto.
          </p>
        </div>
        <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
          <h2 className="text-[18px] font-semibold text-ink">Supporto diretto</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Parli sempre con chi ha sviluppato il tuo sistema, in italiano, senza ticket infiniti.
          </p>
        </div>
      </div>

      <div className="mt-14 max-w-2xl">
        <LeadForm title="Conosciamoci in 15 minuti" />
      </div>
    </div>
  );
}
