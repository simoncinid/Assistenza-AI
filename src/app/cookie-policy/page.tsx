import type { Metadata } from "next";
import { INFO_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sui cookie per www.assistenza-ai.it: analisi aggregata cookie-less senza cookie di profilazione.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-slate-900">Cookie Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          Il sito <strong>www.assistenza-ai.it</strong> non utilizza cookie di profilazione pubblicitaria né tracciamento cross-site.
        </p>
        <p>
          Per le statistiche aggregate di traffico e prestazioni utilizziamo esclusivamente strumenti privacy-first cookie-less (Cloudflare Web Analytics), che non memorizzano cookie né identificatori personali sul dispositivo dell&apos;utente.
        </p>
        <p>
          Per domande scrivi a{" "}
          <a href={`mailto:${INFO_EMAIL}`} className="font-semibold text-blue-700 hover:underline">
            {INFO_EMAIL}
          </a>.
        </p>
      </div>
    </div>
  );
}
