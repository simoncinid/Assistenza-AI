import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import {
  BUSINESS_ADDRESS,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
  INFO_EMAIL,
  OWNER_NAME,
  VAT_NUMBER,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti e Demo Gratuita",
  description:
    "Richiedi una demo gratuita di 15 minuti per il Centralino AI o le automazioni per la tua PMI. Risposta entro 1 giorno lavorativo.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">Contatti</p>
          <h1 className="mt-2 font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
            Richiedi la tua demo gratuita
          </h1>
          <p className="mt-4 text-[17px] leading-[1.55] text-ink-soft">
            In 15 minuti vediamo insieme come risponde il Centralino AI sui casi reali della tua attività e se conviene davvero attivarlo.
          </p>

          <div className="mt-8 space-y-3 border-t border-line pt-6 text-[15px] text-ink-soft">
            <p>
              <strong className="font-semibold text-ink">Email:</strong>{" "}
              <a href={`mailto:${INFO_EMAIL}`} className="text-rame hover:text-rame-hover">{INFO_EMAIL}</a>
            </p>
            <p>
              <strong className="font-semibold text-ink">Telefono:</strong>{" "}
              <a href={BUSINESS_PHONE_HREF} className="text-rame hover:text-rame-hover">{BUSINESS_PHONE_DISPLAY}</a>
            </p>
            <p>
              <strong className="font-semibold text-ink">Sede:</strong> {BUSINESS_ADDRESS}
            </p>
            <p className="text-[14px]">
              Titolare: {OWNER_NAME} · P.IVA {VAT_NUMBER}
            </p>
            <p className="text-[14px]">Tempi di risposta: entro 1 giorno lavorativo, in italiano.</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
