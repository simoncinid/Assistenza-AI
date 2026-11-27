import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Servizi AI per PMI e Artigiani in Italia",
  description:
    "Centralino AI 24/7, Automazione WhatsApp AI, Sviluppo AI su misura per PMI e Assistenza continuativa. Soluzioni chiavi in mano conformi GDPR.",
  alternates: { canonical: "/servizi" },
};

const SERVICES = [
  {
    tag: "Più richiesto",
    title: "Centralino AI 24/7",
    href: "/servizi/centralino-ai",
    desc: "Risponde al tuo numero attuale quando sei su un intervento o occupato, qualifica urgenze e appuntamenti e ti invia il riepilogo su WhatsApp.",
  },
  {
    tag: "Messaggistica",
    title: "Automazione WhatsApp AI",
    href: "/servizi/automazione-whatsapp-ai",
    desc: "Gestisce richieste su WhatsApp Business, raccoglie foto dei guasti, invia promemoria e risponde alle domande ripetitive h24.",
  },
  {
    tag: "Su misura",
    title: "Sviluppo AI per PMI",
    href: "/servizi/sviluppo-ai-pmi",
    desc: "Automazione preventivi, triage email, integrazioni su CRM e gestionali aziendali per eliminare ore di lavoro manuale ogni settimana.",
  },
  {
    tag: "Supporto continuo",
    title: "Assistenza e Manutenzione AI",
    href: "/servizi/assistenza-manutenzione-ai",
    desc: "Monitoraggio, aggiornamenti continui, controllo costi API e supporto tecnico diretto in italiano sui tuoi flussi AI.",
  },
];

export default function ServiziPage() {
  return (
    <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">Servizi</p>
      <h1 className="mt-2 font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
        Sviluppo e assistenza AI chiavi in mano
      </h1>
      <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
        Niente piattaforme fai-da-te da imparare la sera: progettiamo, configuriamo e manteniamo i tuoi sistemi AI in italiano, con obiettivi misurabili fin dal primo mese.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <article key={s.href} className="flex flex-col justify-between rounded-xl bg-raised p-7 shadow-[var(--shadow-sm)]">
            <div>
              <span className="rounded-full bg-rame-subtle px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-rame">
                {s.tag}
              </span>
              <h2 className="mt-4 text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
                {s.title}
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
            <div className="mt-6">
              <Link href={s.href} className="text-[14px] font-semibold text-rame hover:text-rame-hover">
                Scopri i dettagli →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 max-w-2xl">
        <LeadForm title="Non sai da quale servizio partire?" subtitle="Raccontaci il tuo collo di bottiglia: ti indichiamo la soluzione più rapida da ripagare." />
      </div>
    </div>
  );
}
