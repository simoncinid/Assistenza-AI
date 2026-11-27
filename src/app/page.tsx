import Link from "next/link";
import { CallSimulator } from "@/components/CallSimulator";
import { RoiCalculator } from "@/components/RoiCalculator";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import {
  FAQ_ITEMS,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getProfessionalServiceJsonLd,
  getWebSiteJsonLd,
  VERTICALS,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getWebSiteJsonLd()} />
      <JsonLd data={getProfessionalServiceJsonLd()} />
      <JsonLd data={getFaqJsonLd(FAQ_ITEMS)} />
      <JsonLd data={getBreadcrumbJsonLd([{ name: "Home", path: "/" }])} />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
              Sviluppo e assistenza AI per PMI e artigiani in Italia
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Non perdere più clienti al telefono mentre lavori.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Configuriamo e seguiamo nel tempo il tuo Centralino AI 24/7, l&apos;automazione WhatsApp e i flussi AI collegati ai tuoi gestionali. Nessun numero da cambiare, supporto diretto in italiano.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contatti-form"
                className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Richiedi una demo gratuita (15 min)
              </a>
              <a
                href="#simulatore"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Prova il simulatore qui sotto
              </a>
            </div>
          </div>

          {/* AEO Answer-First "In breve" */}
          <aside className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
              In breve
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-800">
              Assistenza AI progetta, configura e gestisce sistemi di intelligenza artificiale per piccole e medie imprese, artigiani e studi professionali italiani. Attiviamo centralini vocali AI sul tuo numero attuale (via deviazione <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs">*61*</code>), automazioni WhatsApp e integrazioni con gestionali esistenti, conformi a GDPR e Art. 50 dell&apos;AI Act europeo.
            </p>
          </aside>
        </div>
      </section>

      {/* Demo 1: Interactive Call Simulator */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <CallSimulator defaultSector="idraulici" />
      </div>

      {/* 3 Pillar Services */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
            Cosa attiviamo per te
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            Tre interventi concreti, chiavi in mano
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <p className="font-mono text-xs font-semibold text-blue-700">01 · TELEFONO</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Centralino AI 24/7</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Risponde quando sei in cantiere, in officina o fuori orario. Raccoglie problema, indirizzo e urgenza e ti manda il riepilogo su WhatsApp.
              </p>
            </div>
            <Link href="/servizi/centralino-ai" className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:underline">
              Scopri il Centralino AI →
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <p className="font-mono text-xs font-semibold text-blue-700">02 · WHATSAPP</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">WhatsApp &amp; Appuntamenti AI</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Risponde a messaggi e vocali, qualifica le richieste, filtra le zone non coperte e propone slot liberi su Google Calendar.
              </p>
            </div>
            <Link href="/servizi/automazione-whatsapp-ai" className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:underline">
              Scopri WhatsApp AI →
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <p className="font-mono text-xs font-semibold text-blue-700">03 · PMI &amp; GESTIONALI</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Automazioni AI su misura</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Elimina il data entry manuale su fatture passive, DDT, preventivi ed email integrando l&apos;AI nei programmi che usi già.
              </p>
            </div>
            <Link href="/servizi/sviluppo-ai-pmi" className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:underline">
              Scopri Sviluppo AI PMI →
            </Link>
          </div>
        </div>
      </section>

      {/* Demo 2: ROI Calculator */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <RoiCalculator />
      </div>

      {/* Verticals */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Soluzioni configurate sul tuo mestiere
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Ogni settore ha urgenze, tariffe e domande diverse. Scegli la tua categoria per vedere esempi reali di utilizzo.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((v) => (
            <Link
              key={v.slug}
              href={`/settori/${v.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-400 hover:shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">
                {v.shortTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.metaDescription}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-700">
                Vedi esempi e FAQ →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3 Steps + When NOT needed */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Come lavoriamo in 3 passi
            </h2>
            <ol className="mt-6 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Analisi gratuita di 15 minuti</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Vediamo quante chiamate o ore perdi oggi e se l&apos;AI ha davvero senso nel tuo caso.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
                  2
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Configurazione chiavi in mano</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Costruiamo l&apos;assistente sui tuoi listini, zone e orari. Sul telefono mantieni il tuo numero con una semplice deviazione dopo 4 squilli (<code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs">*61*</code>).
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Assistenza continua in italiano</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Non ti lasciamo un pannello da gestire da solo. Aggiorniamo risposte, orari e integrazioni ogni volta che cambia qualcosa.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 lg:col-span-5">
            <h2 className="text-xl font-bold text-slate-900">Quando NON ti serve</h2>
            <p className="mt-1 text-xs text-slate-600">
              Preferiamo dirtelo prima di farti perdere tempo:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-800">
              <li>• Se ricevi poche chiamate al giorno e riesci già a rispondere sempre di persona.</li>
              <li>• Se cerchi un&apos;AI che faccia diagnosi tecniche o preventivi vincolanti senza il tuo ok: il nostro sistema raccoglie i dati, la decisione resta sempre tua.</li>
              <li>• Se hai già una segreteria dedicata che copre tutte le linee, pausa pranzo e weekend inclusi.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ + Lead Form */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Domande frequenti
          </h2>
          <div className="mt-6 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <summary className="cursor-pointer text-sm font-bold text-slate-900">
                  {item.question}
                </summary>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
