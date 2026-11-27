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
      <div className="mx-auto grid max-w-[72rem] gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
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
          <div className="mt-4 space-y-1.5 text-[13px] text-[#C7C4BC]">
            <p>
              Email:{" "}
              <a href={`mailto:${INFO_EMAIL}`} className="text-[#F7F6F3] underline underline-offset-2 hover:text-white">
                {INFO_EMAIL}
              </a>
            </p>
            <p className="pt-1 text-[#9E9B94]">
              P.IVA {VAT_NUMBER}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#9E9B94]">Servizi</p>
          <ul className="mt-3 space-y-2.5 text-[14px] text-[#E6E3DD]">
            <li><Link href="/servizi/centralino-ai" className="hover:text-white">Centralino AI 24/7</Link></li>
            <li><Link href="/servizi/automazione-whatsapp-ai" className="hover:text-white">Automazione WhatsApp AI</Link></li>
            <li><Link href="/servizi/sviluppo-ai-pmi" className="hover:text-white">Sviluppo AI per PMI</Link></li>
            <li><Link href="/servizi/assistenza-manutenzione-ai" className="hover:text-white">Assistenza e Manutenzione AI</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#9E9B94]">Settori</p>
          <ul className="mt-3 space-y-2.5 text-[14px] text-[#E6E3DD]">
            {VERTICALS.map((v) => (
              <li key={v.slug}>
                <Link href={`/settori/${v.slug}`} className="hover:text-white">
                  {v.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#9E9B94]">Azienda e Legale</p>
          <ul className="mt-3 space-y-2.5 text-[14px] text-[#E6E3DD]">
            <li><Link href="/chi-siamo" className="hover:text-white">Chi siamo</Link></li>
            <li><Link href="/faq" className="hover:text-white">Domande frequenti (FAQ)</Link></li>
            <li><Link href="/contatti" className="hover:text-white">Contatti e Demo</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-[13px] text-[#9E9B94]">
        © {new Date().getFullYear()} {SITE_NAME} · P.IVA {VAT_NUMBER} · {INFO_EMAIL} · Conformità GDPR e AI Act Art. 50
      </div>
    </footer>
  );
}
