import Link from "next/link";
import {
  INFO_EMAIL,
  SITE_NAME,
  VAT_NUMBER,
  VERTICALS,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-dark text-[#F7F6F3]">
      <div className="mx-auto grid max-w-[72rem] grid-cols-2 gap-x-6 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-4 md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" aria-label="Assistenza AI, torna alla home" className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/lockup-dark.svg"
              alt="Assistenza AI"
              className="h-7 w-auto"
              width={156}
              height={28}
            />
          </Link>
          <p className="mt-4 text-[14px] leading-relaxed text-[#C7C4BC]">
            Sviluppo, configurazione e assistenza AI chiavi in mano per PMI, artigiani e studi professionali in Italia.
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#9E9B94]">Servizi</p>
          <ul className="mt-3 space-y-2 text-[14px] text-[#E6E3DD]">
            <li><Link href="/servizi/centralino-ai" className="inline-block py-1 hover:text-white">Centralino AI 24/7</Link></li>
            <li><Link href="/servizi/automazione-whatsapp-ai" className="inline-block py-1 hover:text-white">Automazione WhatsApp AI</Link></li>
            <li><Link href="/servizi/sviluppo-ai-pmi" className="inline-block py-1 hover:text-white">Sviluppo AI per PMI</Link></li>
            <li><Link href="/servizi/assistenza-manutenzione-ai" className="inline-block py-1 hover:text-white">Assistenza e Manutenzione AI</Link></li>
          </ul>
        </div>

        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#9E9B94]">Settori</p>
          <ul className="mt-3 space-y-2 text-[14px] text-[#E6E3DD]">
            {VERTICALS.map((v) => (
              <li key={v.slug}>
                <Link href={`/settori/${v.slug}`} className="inline-block py-1 hover:text-white">
                  {v.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 min-w-0 md:col-span-1">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#9E9B94]">Azienda e Legale</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[14px] text-[#E6E3DD] md:grid-cols-1">
            <li><Link href="/chi-siamo" className="inline-block py-1 hover:text-white">Chi siamo</Link></li>
            <li><Link href="/guide" className="inline-block py-1 hover:text-white">Guide pratiche</Link></li>
            <li><Link href="/faq" className="inline-block py-1 hover:text-white">Domande frequenti</Link></li>
            <li><Link href="/contatti" className="inline-block py-1 hover:text-white">Contatti e Demo</Link></li>
            <li><Link href="/privacy-policy" className="inline-block py-1 hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy" className="inline-block py-1 hover:text-white">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-[13px] text-[#9E9B94]">
        © {new Date().getFullYear()} {SITE_NAME} · P.IVA {VAT_NUMBER} ·{" "}
        <a href={`mailto:${INFO_EMAIL}`} className="whitespace-nowrap text-[#E6E3DD] underline underline-offset-2 hover:text-white">
          {INFO_EMAIL}
        </a>{" "}
        · Conformità GDPR e AI Act Art. 50
      </div>
    </footer>
  );
}
