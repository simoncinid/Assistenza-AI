import type { Metadata } from "next";
import Link from "next/link";
import { CallSimulator } from "@/components/CallSimulator";
import { RoiCalculator } from "@/components/RoiCalculator";
import { LeadBand } from "@/components/LeadBand";
import { JsonLd } from "@/components/JsonLd";
import { getServiceJsonLd, VERTICALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Centralino AI 24/7 per Artigiani, Studi e PMI",
  description:
    "Segretaria AI vocale in italiano sul tuo numero attuale (*61*). Risponde in meno di 1 secondo, filtra urgenze e invia il riepilogo su WhatsApp.",
  alternates: { canonical: "/servizi/centralino-ai" },
};

export default function CentralinoAiPage() {
  return (
    <>
      <JsonLd
        data={getServiceJsonLd({
          name: "Centralino AI 24/7 per PMI e Artigiani",
          description:
            "Assistente telefonico AI in italiano naturale sul numero esistente, con riepilogo WhatsApp istantaneo e conformità GDPR/AI Act.",
          url: "/servizi/centralino-ai",
        })}
      />
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
          Centralino AI 24/7
        </p>
        <h1 className="mt-2 max-w-[22ch] font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Il centralino AI che risponde al tuo numero quando lavori
        </h1>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
          Mantieni il tuo numero fisso o cellulare: grazie alla deviazione su mancata risposta (<span className="font-mono text-[15px] text-ink">*61*</span>), l&apos;assistente risponde solo quando non puoi farlo tu, raccoglie i dati del cliente e ti invia la scheda ordinata su WhatsApp.
        </p>

        <div className="mt-10">
          <CallSimulator defaultSector="idraulici" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Zero cambi numero</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Funziona con qualsiasi operatore italiano (TIM, Vodafone, WindTre, Iliad, Fastweb). Attivi o disattivi la deviazione in 5 secondi.
            </p>
          </div>
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Triage urgenze e zone</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Chiede problema, indirizzo e urgenza, comunica la tua tariffa di uscita e separa i clienti fuori zona dalle chiamate ad alto valore.
            </p>
          </div>
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Conforme GDPR e AI Act</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Dichiara subito di essere un assistente virtuale (AI Act Art. 50) e tratta i dati nel rispetto del GDPR con conservazione controllata.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <RoiCalculator />
        </div>

        <div className="mt-14">
          <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-ink">
            Pagine dedicate per settore
          </h2>
          <div className="mt-4 grid divide-y divide-line border-y border-line sm:grid-cols-2 sm:gap-x-6">
            {VERTICALS.map((v) => (
              <Link
                key={v.slug}
                href={`/settori/${v.slug}`}
                className="inline-flex min-h-10 items-center rounded-full border border-line bg-raised px-4 text-[14px] font-medium text-ink transition-colors hover:border-rame hover:text-rame"
              >
                {v.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <LeadBand defaultNeed="Centralino AI" />
      </div>
    </>
  );
}
