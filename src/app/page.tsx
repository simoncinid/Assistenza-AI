import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_ITEMS, getFaqJsonLd, VERTICALS } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              AI pratica per PMI, artigiani e studi italiani
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Centralino AI e automazioni che rispondono ai clienti mentre lavori
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Progettiamo e gestiamo assistenti AI su misura per idraulici, elettricisti, officine, studi professionali e PMI: risposta telefonica 24/7 in italiano naturale, filtro urgenze, WhatsApp e appuntamenti automatici.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contatti-form"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Richiedi una demo gratuita
              </a>
              <Link
                href="/servizi"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Scopri i servizi
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <LeadForm
              title="Parla con noi"
              subtitle="Dimmi in che settore lavori: ti preparo un esempio pratico su misura per la tua attività."
            />
          </div>
        </div>
      </section>

      {/* Settori */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Soluzioni AI pensate per il tuo settore
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Ogni mestiere ha chiamate, urgenze e clienti diversi. Ecco come configuriamo l&apos;AI sui casi reali delle imprese italiane.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((v) => (
            <Link
              key={v.slug}
              href={`/settori/${v.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">
                {v.shortTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{v.metaDescription}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                Approfondisci →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Domande frequenti
          </h2>
          <div className="mt-8 space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold text-slate-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
