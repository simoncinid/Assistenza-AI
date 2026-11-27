import type { Metadata } from "next";
import {
  INFO_EMAIL,
  LEGAL_BUSINESS_ADDRESS,
  LEGAL_OWNER_NAME,
  VAT_NUMBER,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per www.assistenza-ai.it.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-[48rem] px-4 py-14 sm:px-6 lg:py-20">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">Informativa legale</p>
      <h1 className="mt-2 font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-soft">
        <p>
          La presente informativa descrive le modalità di trattamento dei dati personali raccolti tramite il sito <strong className="text-ink">www.assistenza-ai.it</strong> ai sensi del Regolamento (UE) 2016/679 (GDPR).
        </p>
        <h2 className="pt-2 text-[19px] font-semibold text-ink">1. Titolare del trattamento</h2>
        <p>
          {LEGAL_OWNER_NAME} — P.IVA {VAT_NUMBER} — {LEGAL_BUSINESS_ADDRESS} — Email:{" "}
          <a href={`mailto:${INFO_EMAIL}`} className="font-medium text-rame hover:text-rame-hover">{INFO_EMAIL}</a>.
        </p>
        <h2 className="pt-2 text-[19px] font-semibold text-ink">2. Dati raccolti e finalità</h2>
        <p>
          I dati inviati tramite il modulo di contatto (nome, azienda, telefono/WhatsApp, email, settore, esigenza e note) vengono utilizzati esclusivamente per rispondere alla tua richiesta di informazioni o demo e preparare un&apos;eventuale proposta commerciale.
        </p>
        <h2 className="pt-2 text-[19px] font-semibold text-ink">3. Base giuridica e conservazione</h2>
        <p>
          Il trattamento si basa sul consenso esplicito espresso prima dell&apos;invio del modulo e sull&apos;esecuzione di misure precontrattuali richieste dall&apos;interessato. I dati non vengono ceduti a terzi per finalità promozionali e sono conservati solo per il tempo necessario a gestire la richiesta.
        </p>
        <h2 className="pt-2 text-[19px] font-semibold text-ink">4. Diritti dell&apos;interessato</h2>
        <p>
          Puoi richiedere in qualsiasi momento l&apos;accesso, la rettifica, la portabilità o la cancellazione dei tuoi dati scrivendo a{" "}
          <a href={`mailto:${INFO_EMAIL}`} className="font-medium text-rame hover:text-rame-hover">{INFO_EMAIL}</a>.
        </p>
      </div>
    </div>
  );
}
