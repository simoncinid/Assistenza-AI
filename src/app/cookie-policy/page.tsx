import type { Metadata } from "next";
import Link from "next/link";
import { INFO_EMAIL, VAT_NUMBER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull'utilizzo dei cookie e strumenti di misurazione su www.assistenza-ai.it.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-[48rem] px-4 py-14 sm:px-6 lg:py-20">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">Informativa legale</p>
      <h1 className="mt-2 font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
        Cookie Policy
      </h1>
      <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-soft">
        <p>
          Il sito <strong className="text-ink">www.assistenza-ai.it</strong> (P.IVA {VAT_NUMBER}, dati del titolare del trattamento indicati nella{" "}
          <Link href="/privacy-policy" className="font-medium text-rame hover:text-rame-hover">Privacy Policy</Link>) utilizza cookie tecnici indispensabili al funzionamento delle pagine e strumenti di analisi statistica aggregata (Google Analytics 4 con anonimizzazione IP) per migliorare i contenuti e le prestazioni del servizio.
        </p>
        <p>
          Non utilizziamo cookie di profilazione pubblicitaria di terze parti. Puoi gestire o disabilitare i cookie in qualsiasi momento dalle impostazioni del tuo browser.
        </p>
        <p>
          Per chiarimenti scrivi a{" "}
          <a href={`mailto:${INFO_EMAIL}`} className="font-medium text-rame hover:text-rame-hover">{INFO_EMAIL}</a>.
        </p>
      </div>
    </div>
  );
}
