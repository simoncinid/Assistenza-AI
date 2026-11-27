import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[48rem] px-4 py-20 sm:px-6 lg:py-28">
      <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-rame">
        Errore 404
      </p>
      <h1 className="mt-2 font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
        Pagina non trovata
      </h1>
      <p className="mt-4 max-w-[54ch] text-[17px] leading-[1.55] text-ink-soft">
        L&apos;indirizzo che hai aperto non esiste o è stato spostato. Puoi ripartire dalla home oppure richiedere subito una demo gratuita.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-rame px-5 text-[15px] font-semibold text-on-rame transition-colors hover:bg-rame-hover"
        >
          Torna alla home
        </Link>
        <Link
          href="/servizi/centralino-ai"
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-line px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-raised"
        >
          Scopri il Centralino AI
        </Link>
        <Link
          href="/contatti"
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-line px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-raised"
        >
          Contattaci
        </Link>
      </div>
    </div>
  );
}
