import type { Metadata } from "next";
import Link from "next/link";
import { LeadBand } from "@/components/LeadBand";
import { ServicesOverviewCard } from "@/components/HeroVisuals";

export const metadata: Metadata = {
  title: "Servizi AI per PMI, artigiani e studi",
  description:
    "Centralino AI 24/7, automazione WhatsApp, sviluppo AI su misura per PMI e assistenza continuativa chiavi in mano in Italia.",
  alternates: { canonical: "/servizi" },
};

const SERVICES = [
  {
    href: "/servizi/centralino-ai",
    tag: "Servizio principale",
    title: "Centralino AI 24/7",
    forWho: "Artigiani, officine, studi, imprese edili e PMI",
    whatItDoes:
      "Risponde in italiano al 2° squillo quando non puoi, qualifica urgenze e zona, fissa appuntamenti e invia il riepilogo su WhatsApp.",
    setup: "5–7 gg · deviazione *61*",
  },
  {
    href: "/servizi/automazione-whatsapp-ai",
    tag: "Canale chat",
    title: "Automazione WhatsApp AI",
    forWho: "Attività che gestiscono foto guasti, preventivi e conferme via chat",
    whatItDoes:
      "Risponde h24 su WhatsApp Business API ufficiali, raccoglie foto e dati del cliente, invia promemoria e riduce i no-show.",
    setup: "5–7 gg · API ufficiali",
  },
  {
    href: "/servizi/sviluppo-ai-pmi",
    tag: "Su misura",
    title: "Sviluppo AI per PMI",
    forWho: "PMI con flussi ripetitivi su email, PDF, DDT, ordini e CRM",
    whatItDoes:
      "Integriamo agenti e automazioni nei tuoi strumenti esistenti (ERP, CRM, email) per tagliare inserimento manuale ed errori.",
    setup: "2–4 settimane · su specifica",
  },
  {
    href: "/servizi/assistenza-manutenzione-ai",
    tag: "Continuativo",
    title: "Assistenza e Manutenzione AI",
    forWho: "Aziende con sistemi AI già attivi che vogliono affidabilità nel tempo",
    whatItDoes:
      "Monitoraggio attivo, revisione mensile di trascrizioni e prompt, aggiornamenti normativi AI Act e supporto diretto in italiano.",
    setup: "Canone mensile · SLA 1 gg",
  },
];

export default function ServiziPage() {
  return (
    <div className="mx-auto max-w-[72rem] px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-rame">
            Servizi chiavi in mano
          </p>
          <h1 className="mt-3 text-balance font-sans text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.75rem]">
            Soluzioni AI pratiche per non perdere chiamate, tempo e clienti.
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
            Ogni progetto nasce intorno ai tuoi processi reali: nessun software complicato da configurare da solo, nessun vincolo lungo.
          </p>
        </div>
        <div className="min-w-0 lg:col-span-5">
          <ServicesOverviewCard />
        </div>
      </div>

      <section className="mt-14">
        <div className="hidden grid-cols-12 gap-4 border-b border-line-strong pb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft lg:grid">
          <div className="col-span-3">Servizio</div>
          <div className="col-span-3">Per chi</div>
          <div className="col-span-4">Cosa fa</div>
          <div className="col-span-2 text-right">Attivazione</div>
        </div>

        <div className="divide-y divide-line border-b border-line">
          {SERVICES.map((s) => (
            <div
              key={s.href}
              className="grid grid-cols-1 gap-4 py-6 lg:grid-cols-12 lg:items-center lg:py-7"
            >
              <div className="min-w-0 lg:col-span-3">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-rame">
                  {s.tag}
                </p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-[-0.015em] text-ink">
                  <Link href={s.href} className="hover:text-rame">
                    {s.title}
                  </Link>
                </h2>
              </div>

              <div className="min-w-0 lg:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft lg:hidden">
                  Per chi
                </p>
                <p className="mt-0.5 text-[14px] leading-relaxed text-ink">{s.forWho}</p>
              </div>

              <div className="min-w-0 lg:col-span-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft lg:hidden">
                  Cosa fa
                </p>
                <p className="mt-0.5 text-[14px] leading-relaxed text-ink-soft">{s.whatItDoes}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 lg:col-span-2 lg:flex-col lg:items-end lg:text-right">
                <span className="font-mono text-[12px] text-ink-soft">{s.setup}</span>
                <Link
                  href={s.href}
                  className="inline-flex min-h-11 items-center text-[14px] font-semibold text-rame hover:text-rame-hover"
                >
                  Scopri i dettagli →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LeadBand
        heading="Non sai da quale servizio partire?"
        headingAccent="Lo capiamo insieme."
        lede="In 15 minuti guardiamo dove stai perdendo più chiamate o ore di ufficio e ti proponiamo solo ciò che si ripaga subito."
      />
    </div>
  );
}
