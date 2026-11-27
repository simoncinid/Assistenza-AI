import type { Metadata } from "next";
import { LeadBand } from "@/components/LeadBand";
import { MethodStepsCard } from "@/components/HeroVisuals";
import { INFO_EMAIL, SITE_NAME, VAT_NUMBER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Assistenza AI: sviluppo, configurazione e assistenza AI chiavi in mano per PMI, artigiani e studi professionali in tutta Italia.",
  alternates: { canonical: "/chi-siamo" },
};

const PRINCIPLES = [
  {
    code: "01",
    title: "Niente software fai-da-te",
    desc: "Non ti lasciamo una dashboard vuota da configurare la sera. Scriviamo noi i flussi di chiamata, testiamo i casi limite sul tuo numero di prova e gestiamo le modifiche nel tempo.",
  },
  {
    code: "02",
    title: "Funziona con il tuo numero attuale",
    desc: "Attivi la deviazione *61* solo quando non puoi rispondere: i clienti continuano a chiamare il numero che già conoscono, senza cambiare operatore o carta intestata.",
  },
  {
    code: "03",
    title: "Conformità GDPR e AI Act inclusa",
    desc: "Ogni chiamata si apre con l’informativa trasparente prevista dall’Art. 50 dell’AI Act europeo, con raccolta dei soli dati necessari all’intervento e zero addestramento su dati dei tuoi clienti.",
  },
  {
    code: "04",
    title: "Onestà sul ritorno economico",
    desc: "Nella call iniziale da 15 minuti verifichiamo quante chiamate perdi davvero. Se il volume è troppo basso per ripagare il servizio, te lo diciamo chiaramente prima di iniziare.",
  },
];

export default function ChiSiamoPage() {
  return (
    <div className="mx-auto max-w-[72rem] px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-rame">
            Chi siamo
          </p>
          <h1 className="mt-3 text-balance font-sans text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.75rem]">
            Intelligenza artificiale pratica, gestita da tecnici italiani.
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
            {SITE_NAME} progetta e mantiene centralini AI, automazioni WhatsApp e flussi su misura per PMI, artigiani e studi professionali in tutta Italia. Niente hype, solo strumenti che si ripagano sul campo.
          </p>
        </div>
        <div className="min-w-0 lg:col-span-5">
          <MethodStepsCard />
        </div>
      </div>

      {/* Metriche di processo in Plex Mono */}
      <section className="mt-14 grid grid-cols-1 divide-y divide-line rounded-2xl border border-line bg-raised sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="p-6">
          <p className="font-mono text-[1.35rem] font-semibold text-ink">5–7 giorni</p>
          <p className="mt-1 text-[13px] text-ink-soft">Tempo medio di configurazione e messa online chiavi in mano</p>
        </div>
        <div className="p-6">
          <p className="font-mono text-[1.35rem] font-semibold text-ink">Entro 1 gg</p>
          <p className="mt-1 text-[13px] text-ink-soft">Risposta tecnica diretta in italiano per richieste e modifiche</p>
        </div>
        <div className="p-6">
          <p className="font-mono text-[1.35rem] font-semibold text-ink">AI Act Art. 50</p>
          <p className="mt-1 text-[13px] text-ink-soft">Informativa vocale trasparente e conformità GDPR integrate</p>
        </div>
      </section>

      {/* Come lavoriamo — griglia 2x2 a filetti */}
      <section className="mt-14">
        <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-rame">
          Come lavoriamo
        </p>
        <h2 className="mt-2 text-[1.6rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2rem]">
          Quattro regole concrete su ogni progetto
        </h2>
        <div className="mt-6 grid grid-cols-1 border-y border-line md:grid-cols-2">
          {PRINCIPLES.map((item, idx) => (
            <div
              key={item.code}
              className={[
                "py-6",
                idx >= 2 ? "border-t border-line" : "",
                idx % 2 === 1 ? "md:border-l md:border-line md:pl-8" : "md:pr-8",
                idx === 1 ? "border-t border-line md:border-t-0" : "",
              ].join(" ")}
            >
              <p className="font-mono text-[12px] font-semibold text-rame">{item.code}</p>
              <h3 className="mt-2 text-[18px] font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blocco societario trasparente (zero PII) */}
      <section className="mt-12 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
              Dati e operatività
            </p>
            <p className="mt-1 text-[18px] font-semibold text-ink">{SITE_NAME}</p>
            <p className="mt-1 font-mono text-[13px] text-ink-soft">P.IVA {VAT_NUMBER}</p>
          </div>
          <div className="text-[14px] leading-relaxed text-ink-soft">
            Operiamo da remoto in tutta Italia con sessioni di configurazione e demo in italiano per PMI, artigiani e studi professionali.
          </div>
          <div className="md:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              Contatto diretto
            </p>
            <a
              href={`mailto:${INFO_EMAIL}`}
              className="mt-1 inline-flex min-h-11 items-center font-mono text-[14px] font-semibold text-rame underline underline-offset-2 hover:text-rame-hover"
            >
              {INFO_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <LeadBand
        heading="Vuoi capire se ha senso"
        headingAccent="per la tua attività?"
        lede="Prenota una demo gratuita di 15 minuti: simuliamo una chiamata reale del tuo settore e ti diciamo numeri e tempi senza giri di parole."
      />
    </div>
  );
}
