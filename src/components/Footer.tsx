import Link from "next/link";
import { INFO_EMAIL, QUOTES_EMAIL, SITE_NAME, VERTICALS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-base font-extrabold text-slate-900">{SITE_NAME}.it</p>
          <p className="mt-2 text-sm text-slate-600">
            Sviluppo, configurazione e assistenza AI chiavi in mano per PMI, artigiani e studi professionali in Italia.
          </p>
          <div className="mt-3 space-y-1 text-xs text-slate-600">
            <p>
              Info:{" "}
              <a href={`mailto:${INFO_EMAIL}`} className="font-medium text-blue-700 hover:underline">
                {INFO_EMAIL}
              </a>
            </p>
            <p>
              Preventivi:{" "}
              <a href={`mailto:${QUOTES_EMAIL}`} className="font-medium text-blue-700 hover:underline">
                {QUOTES_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-slate-900">Servizi</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/servizi/centralino-ai" className="hover:text-blue-700">Centralino AI 24/7</Link></li>
            <li><Link href="/servizi/automazione-whatsapp-ai" className="hover:text-blue-700">Automazione WhatsApp AI</Link></li>
            <li><Link href="/servizi/sviluppo-ai-pmi" className="hover:text-blue-700">Sviluppo AI per PMI</Link></li>
            <li><Link href="/servizi/assistenza-manutenzione-ai" className="hover:text-blue-700">Assistenza e Manutenzione AI</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold text-slate-900">Settori</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {VERTICALS.map((v) => (
              <li key={v.slug}>
                <Link href={`/settori/${v.slug}`} className="hover:text-blue-700">
                  {v.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold text-slate-900">Azienda e Legale</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/chi-siamo" className="hover:text-blue-700">Chi siamo</Link></li>
            <li><Link href="/faq" className="hover:text-blue-700">Domande frequenti (FAQ)</Link></li>
            <li><Link href="/contatti" className="hover:text-blue-700">Contatti e Demo</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-blue-700">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-blue-700">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE_NAME} · www.assistenza-ai.it · Conformità GDPR e AI Act Art. 50
      </div>
    </footer>
  );
}
