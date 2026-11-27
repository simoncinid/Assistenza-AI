import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-slate-900">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-700" aria-hidden="true" />
          {SITE_NAME}
          <span className="font-mono text-xs font-semibold text-blue-700">.it</span>
        </Link>
        <nav aria-label="Navigazione principale" className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          <Link href="/servizi/centralino-ai" className="hover:text-blue-700">
            Centralino AI
          </Link>
          <Link href="/servizi" className="hover:text-blue-700">
            Servizi
          </Link>
          <Link href="/settori/idraulici" className="hover:text-blue-700">
            Idraulici
          </Link>
          <Link href="/settori/elettricisti" className="hover:text-blue-700">
            Elettricisti
          </Link>
          <Link href="/settori/officine" className="hover:text-blue-700">
            Officine
          </Link>
          <Link href="/faq" className="hover:text-blue-700">
            FAQ
          </Link>
          <Link href="/chi-siamo" className="hover:text-blue-700">
            Chi siamo
          </Link>
        </nav>
        <Link
          href="/contatti"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Demo gratuita
        </Link>
      </div>
    </header>
  );
}
