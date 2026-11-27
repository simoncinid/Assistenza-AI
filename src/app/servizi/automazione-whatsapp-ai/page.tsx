import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getServiceJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Automazione WhatsApp AI per PMI e Artigiani",
  description:
    "Risposte automatiche intelligenti su WhatsApp Business: raccolta foto guasti, promemoria appuntamenti e qualificazione richieste 24/7.",
  alternates: { canonical: "/servizi/automazione-whatsapp-ai" },
};

export default function AutomazioneWhatsappPage() {
  return (
    <>
      <JsonLd
        data={getServiceJsonLd({
          name: "Automazione WhatsApp AI per PMI",
          description:
            "Assistente WhatsApp Business AI per raccogliere foto, rispondere a richieste ripetitive e confermare appuntamenti automaticamente.",
          url: "/servizi/automazione-whatsapp-ai",
        })}
      />
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
          Automazione WhatsApp AI
        </p>
        <h1 className="mt-2 max-w-[24ch] font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Rispondi ai clienti su WhatsApp anche mentre sei operativo
        </h1>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
          Trasforma WhatsApp in un canale ordinato: l&apos;assistente chiede foto del problema o modello del pezzo, risponde su orari e zone coperte e invia promemoria automatici prima di ogni appuntamento.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Raccolta foto e dettagli</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Prima ancora di richiamare hai già foto della caldaia, del quadro elettrico o della targa, così arrivi con il ricambio giusto.
            </p>
          </div>
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Promemoria anti-assenza</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Conferme automatiche il giorno prima dell&apos;appuntamento per ridurre drasticamente i buchi in agenda.
            </p>
          </div>
          <div className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-[18px] font-semibold text-ink">Passaggio a te in un tap</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Quando serve la tua valutazione umana, l&apos;AI si ferma e ti passa la conversazione completa con il riepilogo.
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-2xl">
          <LeadForm defaultNeed="WhatsApp AI" title="Vuoi automatizzare WhatsApp nella tua azienda?" />
        </div>
      </div>
    </>
  );
}
