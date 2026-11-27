import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servizi AI per PMI e Artigiani",
  description:
    "Centralino AI 24/7 sul tuo numero, automazione WhatsApp, sviluppo AI su misura per PMI e assistenza tecnica continua in italiano.",
  alternates: { canonical: "/servizi" },
};

const SERVICES = [
  {
    href: "/servizi/centralino-ai",
    tag: "TELEFONO 24/7",
    title: "Centralino AI sul tuo numero",
    desc: "Risponde quando sei occupato o fuori orario tramite deviazione *61*, distingue urgenze da preventivi e invia la scheda su WhatsApp.",
  },
  {
    href: "/servizi/automazione-whatsapp-ai",
    tag: "WHATSAPP & AGENDA",
    title: "Automazione WhatsApp AI",
    desc: "Risponde H24 a messaggi e vocali, filtra le zone coperte e propone slot liberi su Google Calendar.",
  },
  {
    href: "/servizi/sviluppo-ai-pmi",
    tag: "PROCESSI PMI",
    title: "Sviluppo AI su misura per PMI",
    desc: "Lettura automatica di fatture passive e DDT, bozze preventivi e integrazioni con il gestionale o CRM che usi già.",
  },
  {
    href: "/servizi/assistenza-manutenzione-ai",
    tag: "SUPPORTO CONTINUO",
    title: "Assistenza e Manutenzione AI",
    desc: "Monitoraggio, aggiornamenti orari, tariffe e miglioramenti continui gestiti da tecnici in italiano.",
  },
];

export default function ServiziPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
        ])}
      />
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Servizi AI chiavi in mano per PMI e artigiani
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Partiamo sempre da un problema concreto: chiamate perse in cantiere, messaggi non evasi o ore perse a ricopiare documenti.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-400 hover:shadow-sm"
          >
            <p className="font-mono text-xs font-semibold text-blue-700">{s.tag}</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-blue-700">
              {s.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-blue-700">
              Dettagli →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14 max-w-2xl">
        <LeadForm defaultSector="PMI" defaultNeed="Centralino AI" />
      </div>
    </div>
  );
}
