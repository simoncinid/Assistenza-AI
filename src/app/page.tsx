import type { Metadata } from "next";
import Link from "next/link";
import { CallSimulator } from "@/components/CallSimulator";
import { RoiCalculator } from "@/components/RoiCalculator";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getFaqJsonLd, getServiceJsonLd, HOME_FAQS, VERTICALS } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

const VERTICAL_ICON: Record<string, string> = {
  idraulici: "idraulici",
  elettricisti: "elettricisti",
  officine: "officine",
  "caldaie-climatizzazione": "wrench",
  "studi-medici-dentistici": "studi-professionali",
  "studi-professionali": "studi-professionali",
  "imprese-edili-ristrutturazioni": "artigiani",
  pmi: "pmi",
};

export const metadata: Metadata = {
  title: { absolute: "Assistenza AI per PMI e Artigiani | Centralino AI e Automazioni" },
  description:
    "Centralino AI 24/7 sul tuo numero, WhatsApp AI e automazioni chiavi in mano per PMI, artigiani e studi italiani. Prova il simulatore interattivo.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd(HOME_FAQS)} />
      <JsonLd
        data={getServiceJsonLd({
          name: "Centralino AI e Sviluppo AI per PMI e Artigiani",
          description:
            "Assistente telefonico AI 24/7 sul numero esistente, automazione WhatsApp e sviluppo soluzioni AI su misura per aziende italiane.",
          url: "/",
        })}
      />

      {/* HERO 12-col: testo 6 col + simulatore 6 col above the fold */}
      <section className="border-b border-line py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[72rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="min-w-0 lg:col-span-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
              AI PER PMI E ARTIGIANI IN ITALIA
            </p>
            <h1 className="mt-3 text-balance font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.25rem]">
              Non perdere più clienti al telefono mentre lavori.
            </h1>
            <p className="mt-5 max-w-[56ch] text-[17px] leading-[1.55] text-ink-soft sm:text-[18px]">
              Un assistente AI italiano risponde in meno di un secondo al tuo numero attuale, raccoglie urgenze e appuntamenti e ti manda il riepilogo su WhatsApp. Zero cambi numero, zero app da gestire.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contatti-form"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-rame px-5 text-[15px] font-semibold text-on-rame transition-colors hover:bg-rame-hover"
              >
                Richiedi una demo gratuita (15 min)
              </a>
              <a
                href="#calcolatore-roi"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-transparent px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-raised"
              >
                Calcola le chiamate perse
              </a>
            </div>

            <div className="mt-7 border-l-2 border-rame pl-4 text-[14px] leading-relaxed text-ink-soft">
              <strong className="font-semibold text-ink">In breve:</strong>{" "}
              Assistenza AI sviluppa e gestisce sistemi AI chiavi in mano per PMI e artigiani italiani — dal Centralino AI 24/7 (<span className="font-mono text-[13px] font-medium text-ink">*61*</span> sul tuo numero) all&apos;automazione WhatsApp — conformi GDPR e AI Act.
            </div>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <CallSimulator defaultSector="idraulici" compact />
          </div>
        </div>
      </section>

      {/* SERVIZI ASIMMETRICI: Centralino 7 col + 2 servizi impilati a destra 5 col */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[72rem] px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
                Servizi chiavi in mano
              </p>
              <h2 className="mt-2 text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[2.25rem]">
                Automazioni concrete, pronte in pochi giorni
              </h2>
            </div>
            <Link
              href="/servizi"
              className="inline-flex min-h-11 items-center text-[14px] font-semibold text-rame hover:text-rame-hover"
            >
              Vedi tutti i servizi →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <article className="flex flex-col justify-between rounded-xl bg-raised p-7 shadow-[var(--shadow-sm)] sm:p-8 lg:col-span-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-rame-subtle px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-rame">
                    Più richiesto
                  </span>
                  <span className="font-mono text-[12px] font-medium text-ink-soft">Attivo in 5–7 giorni</span>
                </div>
                <h3 className="mt-5 text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
                  Centralino AI 24/7
                </h3>
                <p className="mt-3 max-w-[54ch] text-[16px] leading-relaxed text-ink-soft">
                  Risponde in italiano naturale sul tuo numero attuale solo quando non puoi rispondere tu (deviazione <span className="font-mono text-[14px] text-ink">*61*</span>). Distingue le emergenze dai preventivi, comunica le tue zone coperte e ti invia subito la scheda su WhatsApp.
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[14px] text-ink-soft">
                  <li>• Nessun cambio operatore, nessun hardware da comprare</li>
                  <li>• Dichiarazione trasparente di assistente virtuale (AI Act Art. 50)</li>
                  <li>• Riepilogo ordinato con nome, zona, guasto e urgenza</li>
                </ul>
              </div>
              <div className="mt-7">
                <Link
                  href="/servizi/centralino-ai"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-rame px-5 text-[15px] font-semibold text-on-rame transition-colors hover:bg-rame-hover"
                >
                  Scopri il Centralino AI →
                </Link>
              </div>
            </article>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <article className="flex-1 rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
                <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                  Messaggi e appuntamenti
                </p>
                <h3 className="mt-2 text-[1.25rem] font-semibold leading-[1.3] text-ink">
                  Automazione WhatsApp AI
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  Risponde ai messaggi WhatsApp Business, raccoglie foto dei guasti, invia promemoria appuntamento e riduce i clienti che spariscono.
                </p>
                <Link
                  href="/servizi/automazione-whatsapp-ai"
                  className="mt-4 inline-block text-[14px] font-semibold text-rame hover:text-rame-hover"
                >
                  Approfondisci WhatsApp AI →
                </Link>
              </article>

              <article className="flex-1 rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
                <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                  Progetti su misura
                </p>
                <h3 className="mt-2 text-[1.25rem] font-semibold leading-[1.3] text-ink">
                  Sviluppo e Assistenza AI per PMI
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  Integrazioni su CRM, gestionali, email e documenti con manutenzione continuativa e un tecnico italiano dedicato.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-[14px] font-semibold">
                  <Link href="/servizi/sviluppo-ai-pmi" className="text-rame hover:text-rame-hover">
                    Sviluppo PMI →
                  </Link>
                  <Link href="/servizi/assistenza-manutenzione-ai" className="text-ink-soft hover:text-ink">
                    Manutenzione →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CALCOLATORE ROI su card raised chiara */}
      <section className="py-6 lg:py-10">
        <div className="mx-auto max-w-[72rem] px-4 sm:px-6">
          <RoiCalculator />
        </div>
      </section>

      {/* VERTICALI A INDICE EDITORIALE (no tile clone) */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[72rem] px-4 sm:px-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
            Soluzioni per settore
          </p>
          <h2 className="mt-2 text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[2.25rem]">
            Costruito per chi lavora sul campo o con i clienti
          </h2>

          <div className="mt-8 divide-y divide-line border-y border-line">
            {VERTICALS.map((v, idx) => (
              <Link
                key={v.slug}
                href={`/settori/${v.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-1.5 py-4 transition-colors hover:bg-raised/70 sm:grid-cols-12 sm:gap-2 sm:py-5 sm:px-3"
              >
                <span className="inline-flex items-center gap-2.5 font-mono text-[13px] font-medium text-ink-soft sm:col-span-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/icons/${VERTICAL_ICON[v.slug] ?? "pmi"}.svg`} alt="" width={20} height={20} className="h-5 w-5 shrink-0 opacity-80" />
                  <span>0{idx + 1}</span>
                </span>
                <span className="text-[18px] font-semibold text-ink group-hover:text-rame sm:col-span-4 sm:text-[19px]">
                  {v.shortTitle}
                </span>
                <span className="text-[14px] font-semibold text-rame sm:order-last sm:col-span-1 sm:text-right">
                  →
                </span>
                <span className="col-span-3 line-clamp-2 text-[14px] text-ink-soft sm:col-span-6 sm:text-[15px]">
                  {v.metaDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COME FUNZIONA + QUANDO NON TI SERVE (filetto editoriale, no amber-50) */}
      <section className="border-y border-line bg-raised py-16 lg:py-20">
        <div className="mx-auto grid max-w-[72rem] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
              Come si attiva
            </p>
            <h2 className="mt-2 text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[2.25rem]">
              In 3 passi, senza cambiare numero
            </h2>
            <ol className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="font-mono text-[14px] font-medium text-rame">01</span>
                <div>
                  <h3 className="text-[18px] font-semibold text-ink">Call conoscitiva di 15 minuti</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                    Ci racconti quali chiamate ricevi, quali zone copri e quali domande deve fare l&apos;assistente ai tuoi clienti.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-[14px] font-medium text-rame">02</span>
                <div>
                  <h3 className="text-[18px] font-semibold text-ink">Configurazione chiavi in mano e test dal vivo</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                    Prepariamo tutto noi in 5–7 giorni lavorativi: chiami il numero di prova, ascolti la voce e rifiniamo ogni risposta.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-[14px] font-medium text-rame">03</span>
                <div>
                  <h3 className="text-[18px] font-semibold text-ink">Attivazione sul tuo numero con deviazione *61*</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                    Il telefono continua a squillare a te per primo. Solo se non rispondi o sei occupato subentra l&apos;assistente AI.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <div className="border-l-2 border-ink/25 pl-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Trasparenza prima di tutto
              </p>
              <h3 className="mt-2 text-[20px] font-semibold text-ink">
                Quando NON ti serve il Centralino AI
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Se hai già una segretaria dedicata che risponde sempre al primo squillo, oppure ricevi meno di 2 chiamate a settimana, non hai bisogno di questo servizio. Preferiamo dirtelo subito in call piuttosto che venderti qualcosa che non si ripaga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE PRATICHE */}
      <section className="py-14 lg:py-16 border-b border-line">
        <div className="mx-auto max-w-[72rem] px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
                Guide pratiche
              </p>
              <h2 className="mt-2 text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[2rem]">
                Costi reali, confronti e istruzioni operative
              </h2>
            </div>
            <Link href="/guide" className="inline-flex min-h-11 items-center text-[14px] font-semibold text-rame hover:text-rame-hover">
              Tutte le guide →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-line bg-raised p-5 transition-colors hover:border-rame"
              >
                <h3 className="text-[16px] font-semibold leading-snug text-ink group-hover:text-rame">
                  {g.h1}
                </h3>
                <p className="mt-2 text-[14px] text-ink-soft">{g.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FORM PRIMA DELLE FAQ SU MOBILE (order-1 vs order-2) */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[72rem] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-6">
            <LeadForm />
          </div>

          <div className="order-2 min-w-0 lg:order-1 lg:col-span-6 lg:sticky lg:top-24">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
              Domande frequenti
            </p>
            <h2 className="mt-2 text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[2.25rem]">
              Risposte rapide, senza giri di parole
            </h2>
            <div className="mt-6 divide-y divide-line border-t border-line">
              {HOME_FAQS.map((faq) => (
                <details key={faq.question} className="group py-4">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-1 text-[16px] font-semibold text-ink">
                    <span>{faq.question}</span>
                    <span className="font-mono text-[16px] text-rame transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2.5 max-w-[60ch] text-[15px] leading-relaxed text-ink-soft">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
            <Link
              href="/faq"
              className="mt-5 inline-block text-[14px] font-semibold text-rame hover:text-rame-hover"
            >
              Leggi tutte le FAQ →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
