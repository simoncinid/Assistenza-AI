import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd, INFO_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Sviluppo AI concreto, zero fuffa e supporto tecnico diretto in italiano per PMI, artigiani e studi professionali.",
  alternates: { canonical: "/chi-siamo" },
};

export default function ChiSiamoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Chi siamo", path: "/chi-siamo" },
        ])}
      />
      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
        Chi siamo
      </p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">
        Sviluppo AI concreto, zero fuffa, supporto reale in italiano.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-700">
        Assistenza AI nasce dal lavoro diretto nello sviluppo software per portare automazioni utili e misurabili nelle piccole e medie imprese, negli studi professionali e nelle attività artigianali italiane.
      </p>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">Il nostro metodo</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• Partiamo sempre dal problema operativo reale, non dalla tecnologia di moda.</li>
          <li>• Ti diciamo con chiarezza anche quando un&apos;automazione AI non ti conviene.</li>
          <li>• Restiamo il tuo referente tecnico diretto in italiano anche dopo il lancio.</li>
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          Contatto diretto:{" "}
          <a href={`mailto:${INFO_EMAIL}`} className="font-semibold text-blue-700 hover:underline">
            {INFO_EMAIL}
          </a>
        </p>
      </div>
      <div className="mt-12">
        <LeadForm title="Parliamo della tua attività" />
      </div>
    </div>
  );
}
