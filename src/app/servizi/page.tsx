import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Servizi di Sviluppo e Assistenza AI per PMI e Artigiani",
  description:
    "Centralino AI 24/7, assistente WhatsApp Business, automazione preventivi e appuntamenti per PMI e professionisti in Italia.",
  alternates: { canonical: "/servizi" },
};

const SERVICES = [
  {
    title: "Centralino Telefonico AI 24/7",
    desc: "Risponde al posto tuo quando sei in cantiere, in riunione o fuori orario. Capisce il motivo della chiamata, distingue le urgenze e ti invia subito un riepilogo pulito.",
  },
  {
    title: "Assistente WhatsApp Business AI",
    desc: "Risponde alle richieste su WhatsApp in pochi secondi, raccoglie foto o dettagli tecnici e accompagna il cliente fino all'appuntamento.",
  },
  {
    title: "Automazione Preventivi e Appuntamenti",
    desc: "Sincronizza richieste da sito, telefono ed email con il tuo calendario e il tuo gestionale per eliminare il lavoro manuale a fine giornata.",
  },
  {
    title: "Sviluppo e Assistenza AI Continua",
    desc: "Non ti lasciamo solo con un software: progettiamo, integriamo e manteniamo nel tempo le automazioni AI insieme al tuo team.",
  },
];

export default function ServiziPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Servizi AI su misura per lavorare meglio e perdere zero clienti
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Ogni soluzione viene configurata sulla tua operatività reale, senza stravolgere il numero di telefono o gli strumenti che usi già.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold text-slate-900">Hai un settore specifico?</h2>
          <p className="mt-2 text-sm text-slate-600">
            Esplora gli esempi dedicati a{" "}
            <Link href="/settori/idraulici" className="font-medium text-blue-600 hover:underline">
              idraulici
            </Link>
            ,{" "}
            <Link href="/settori/elettricisti" className="font-medium text-blue-600 hover:underline">
              elettricisti
            </Link>
            ,{" "}
            <Link href="/settori/officine" className="font-medium text-blue-600 hover:underline">
              officine
            </Link>{" "}
            e{" "}
            <Link href="/settori/pmi" className="font-medium text-blue-600 hover:underline">
              PMI
            </Link>
            .
          </p>
        </div>
        <div className="lg:col-span-7">
          <LeadForm defaultSector="PMI" defaultNeed="Centralino AI" />
        </div>
      </div>
    </div>
  );
}
