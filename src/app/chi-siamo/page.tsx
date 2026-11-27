import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import {
  BUSINESS_ADDRESS,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
  getProfessionalServiceJsonLd,
  INFO_EMAIL,
  OWNER_NAME,
  VAT_NUMBER,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi siamo | Assistenza AI per PMI e Artigiani",
  description:
    "Assistenza AI è il progetto di Diego Simoncini (Pontedera, PI) dedicato allo sviluppo e alla gestione chiavi in mano di sistemi AI per PMI e artigiani italiani.",
  alternates: { canonical: "/chi-siamo" },
};

export default function ChiSiamoPage() {
  return (
    <>
      <JsonLd data={getProfessionalServiceJsonLd()} />
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">Chi siamo</p>
        <h1 className="mt-2 max-w-[24ch] font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Tecnici italiani che portano l&apos;AI dove serve davvero
        </h1>
        <div className="mt-6 max-w-[65ch] space-y-4 text-[17px] leading-[1.55] text-ink-soft">
          <p>
            Assistenza AI è guidata da <strong className="font-semibold text-ink">{OWNER_NAME}</strong>, sviluppatore software con sede a Pontedera (PI), con un obiettivo concreto: dare ad artigiani, studi e PMI italiane gli stessi strumenti di automazione delle grandi aziende, consegnati chiavi in mano e senza parole complicate.
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

        <div className="mt-10 rounded-xl border border-line bg-raised p-6 text-[14px] text-ink-soft">
          <p className="font-semibold text-ink">Dati aziendali e contatti diretti</p>
          <p className="mt-1.5">
            {OWNER_NAME} · P.IVA {VAT_NUMBER} · {BUSINESS_ADDRESS} ·{" "}
            <a href={BUSINESS_PHONE_HREF} className="text-rame hover:text-rame-hover">{BUSINESS_PHONE_DISPLAY}</a> ·{" "}
            <a href={`mailto:${INFO_EMAIL}`} className="text-rame hover:text-rame-hover">{INFO_EMAIL}</a>
          </p>
        </div>

        <div className="mt-14 max-w-2xl">
          <LeadForm title="Conosciamoci in 15 minuti" />
        </div>
      </div>
    </>
  );
}
