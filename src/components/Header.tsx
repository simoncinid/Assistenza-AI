import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          {SITE_NAME}
          <span className="text-blue-600">.it</span>
        </Link>
        <nav aria-label="Navigazione principale" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/servizi" className="hover:text-blue-600">
            Servizi
          </Link>
          <Link href="/settori/idraulici" className="hover:text-blue-600">
            Idraulici
          </Link>
          <Link href="/settori/elettricisti" className="hover:text-blue-600">
            Elettricisti
          </Link>
          <Link href="/settori/officine" className="hover:text-blue-600">
            Officine
          </Link>
          <Link href="/settori/pmi" className="hover:text-blue-600">
            PMI
          </Link>
          <Link href="/faq" className="hover:text-blue-600">
            FAQ
          </Link>
        </nav>
        <Link
          href="/contatti"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Richiedi demo
        </Link>
      </div>
    </header>
  );
}
