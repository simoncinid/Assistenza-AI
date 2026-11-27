import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME, VERTICALS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-base font-bold text-slate-900">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-slate-600">
            Sviluppo e assistenza AI per PMI, artigiani e studi professionali in Italia.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-blue-600 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Soluzioni per settore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {VERTICALS.map((v) => (
              <li key={v.slug}>
                <Link href={`/settori/${v.slug}`} className="hover:text-blue-600">
                  {v.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Risorse</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/servizi" className="hover:text-blue-600">
                Tutti i servizi AI
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-600">
                Domande frequenti (FAQ)
              </Link>
            </li>
            <li>
              <Link href="/contatti" className="hover:text-blue-600">
                Richiedi una consulenza gratuita
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE_NAME} — www.assistenza-ai.it
      </div>
    </footer>
  );
}
