import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd, INFO_EMAIL, QUOTES_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti e Demo Gratuita",
  description:
    "Richiedi una consulenza o demo gratuita di 15 minuti per Centralino AI, WhatsApp AI e automazioni per la tua azienda in Italia.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contatti", path: "/contatti" },
        ])}
      />
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Richiedi una consulenza o demo gratuita di 15 minuti
      </h1>
      <p className="mt-3 text-slate-600">
        Compila il modulo qui sotto oppure scrivi a{" "}
        <a href={`mailto:${QUOTES_EMAIL}`} className="font-semibold text-blue-700 hover:underline">
          {QUOTES_EMAIL}
        </a>{" "}
        (o{" "}
        <a href={`mailto:${INFO_EMAIL}`} className="font-semibold text-blue-700 hover:underline">
          {INFO_EMAIL}
        </a>{" "}
        per informazioni generali).
      </p>
      <div className="mt-8">
        <LeadForm />
      </div>
    </div>
  );
}
