import type { Metadata } from "next";
import { INFO_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR) per www.assistenza-ai.it.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy (GDPR)</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          Questa informativa descrive il trattamento dei dati personali raccolti tramite il sito <strong>www.assistenza-ai.it</strong> ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR).
        </p>
        <h2 className="pt-2 text-base font-bold text-slate-900">1. Dati raccolti e finalità</h2>
        <p>
          I dati inseriti volontariamente nei moduli di contatto (nome/azienda, telefono, email, settore, esigenza e note) vengono utilizzati esclusivamente per rispondere alle richieste di demo, consulenza o preventivo.
        </p>
        <h2 className="pt-2 text-base font-bold text-slate-900">2. Conservazione e sicurezza</h2>
        <p>
          I dati non vengono venduti, ceduti a terzi per finalità di marketing né utilizzati per addestrare modelli di intelligenza artificiale esterni.
        </p>
        <h2 className="pt-2 text-base font-bold text-slate-900">3. Diritti dell&apos;interessato</h2>
        <p>
          Puoi richiedere in qualsiasi momento l&apos;accesso, la rettifica o la cancellazione dei tuoi dati scrivendo a{" "}
          <a href={`mailto:${INFO_EMAIL}`} className="font-semibold text-blue-700 hover:underline">
            {INFO_EMAIL}
          </a>.
        </p>
      </div>
    </div>
  );
}
