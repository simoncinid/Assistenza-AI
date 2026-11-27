import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti e Demo Gratuita",
  description:
    "Richiedi una demo o una consulenza gratuita per centralino AI, assistente WhatsApp e automazione per la tua azienda in Italia.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Richiedi una demo gratuita
      </h1>
      <p className="mt-3 text-slate-600">
        Compila il modulo qui sotto oppure scrivici a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-blue-600 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
      <div className="mt-8">
        <LeadForm />
      </div>
    </div>
  );
}
