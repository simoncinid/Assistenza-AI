import { LeadForm } from "@/components/LeadForm";
import { INFO_EMAIL } from "@/lib/site";

interface LeadBandProps {
  defaultSector?: string;
  defaultNeed?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  lede?: string;
}

export function LeadBand({
  defaultSector = "",
  defaultNeed = "Centralino AI",
  title = "Richiedi una demo gratuita (15 min)",
  subtitle = "Compila i campi qui sotto: ti rispondiamo entro 1 giorno lavorativo con una simulazione concreta.",
  eyebrow = "Demo gratuita · 15 minuti",
  heading = "Parliamo del tuo caso,",
  headingAccent = "senza impegno.",
  lede = "Vediamo insieme quante chiamate o richieste perdi oggi, simuliamo l’assistente AI sul tuo settore e ti diciamo con onestà se si ripaga dal primo mese.",
}: LeadBandProps) {
  return (
    <section className="mt-16 mb-16 rounded-2xl bg-dark px-5 py-10 text-[#F7F6F3] sm:mb-24 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="min-w-0 lg:col-span-5">
          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-[#E09B72]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-sans text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2.25rem]">
            {heading}{" "}
            <span className="text-[#E09B72]">{headingAccent}</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#C7C4BC]">
            {lede}
          </p>

          <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-[14px] text-[#E6E3DD]">
            <li className="flex items-start gap-2.5">
              <span className="font-mono text-[#E09B72]">01</span>
              <span>Risposta entro 1 giorno lavorativo da un tecnico italiano</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-mono text-[#E09B72]">02</span>
              <span>Nessun cambio numero: funziona con deviazione *61*</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-mono text-[#E09B72]">03</span>
              <span>Conformità GDPR e AI Act Art. 50 inclusa fin dal giorno 1</span>
            </li>
          </ul>

          <p className="mt-6 text-[13px] text-[#9E9B94]">
            Preferisci scrivere via email?{" "}
            <a
              href={`mailto:${INFO_EMAIL}`}
              className="whitespace-nowrap font-medium text-white underline underline-offset-2 hover:text-[#E09B72]"
            >
              {INFO_EMAIL}
            </a>
          </p>
        </div>

        <div className="min-w-0 lg:col-span-7 text-ink">
          <LeadForm
            defaultSector={defaultSector}
            defaultNeed={defaultNeed}
            title={title}
            subtitle={subtitle}
          />
        </div>
      </div>
    </section>
  );
}
