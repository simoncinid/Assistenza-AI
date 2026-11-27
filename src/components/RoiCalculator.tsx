"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function RoiCalculator() {
  const [missedPerWeek, setMissedPerWeek] = useState<number>(6);
  const [avgJobValue, setAvgJobValue] = useState<number>(180);
  const [conversionPct, setConversionPct] = useState<number>(35);

  const monthlyLost = Math.round(missedPerWeek * 4.33 * avgJobValue * (conversionPct / 100));
  const yearlyLost = monthlyLost * 12;

  const formatEur = (n: number) =>
    new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(n);

  function handleSendToForm() {
    const note = `Stima calcolatore: ~${missedPerWeek} chiamate perse/settimana, valore medio ${avgJobValue} €, fatturato recuperabile stimato ${formatEur(monthlyLost)} €/mese.`;
    trackEvent("cta_click", {
      label: "roi_calculator_cta",
      monthly_lost: monthlyLost,
    });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("assistenza_ai_prefill_note", { detail: { note } }));
      const formEl = document.getElementById("contatti-form");
      if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      id="calcolatore-roi"
      className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)] sm:p-8"
      aria-labelledby="roi-title"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
            Calcolatore chiamate perse
          </p>
          <h2 id="roi-title" className="mt-2 text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[2.25rem]">
            Quanto ti costano le chiamate a cui non riesci a rispondere?
          </h2>
          <p className="mt-2.5 max-w-[60ch] text-[15px] leading-relaxed text-ink-soft">
            Muovi i cursori sui numeri reali della tua attività per stimare il fatturato che oggi finisce alla concorrenza.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <div className="flex justify-between text-[14px]">
                <label htmlFor="roi-calls" className="font-medium text-ink">
                  Chiamate perse a settimana mentre lavori
                </label>
                <span className="font-mono font-medium tabular-nums text-rame">
                  {missedPerWeek} / sett
                </span>
              </div>
              <input
                id="roi-calls"
                type="range"
                min={1}
                max={30}
                step={1}
                value={missedPerWeek}
                onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                className="mt-2 w-full accent-rame"
              />
            </div>

            <div>
              <div className="flex justify-between text-[14px]">
                <label htmlFor="roi-value" className="font-medium text-ink">
                  Valore medio di un intervento o nuovo cliente
                </label>
                <span className="font-mono font-medium tabular-nums text-rame">
                  {formatEur(avgJobValue)} €
                </span>
              </div>
              <input
                id="roi-value"
                type="range"
                min={50}
                max={2000}
                step={10}
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="mt-2 w-full accent-rame"
              />
            </div>

            <div>
              <div className="flex justify-between text-[14px]">
                <label htmlFor="roi-conv" className="font-medium text-ink">
                  Chiamate che diventano clienti se rispondi subito
                </label>
                <span className="font-mono font-medium tabular-nums text-rame">
                  {conversionPct}%
                </span>
              </div>
              <input
                id="roi-conv"
                type="range"
                min={10}
                max={70}
                step={5}
                value={conversionPct}
                onChange={(e) => setConversionPct(Number(e.target.value))}
                className="mt-2 w-full accent-rame"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-surface p-6 lg:col-span-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Fatturato perso stimato
          </p>
          <p className="mt-2 font-sans text-[2.5rem] font-semibold leading-none tracking-[-0.03em] tabular-nums text-ink">
            {formatEur(monthlyLost)} €
            <span className="text-[16px] font-normal text-ink-soft"> / mese</span>
          </p>
          <p className="mt-2 font-mono text-[14px] font-medium tabular-nums text-rame">
            ≈ {formatEur(yearlyLost)} € / anno
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
            Stima basata sui tuoi numeri: basta recuperare 2 chiamate al mese per ripagare il sistema.
          </p>
          <button
            type="button"
            onClick={handleSendToForm}
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-rame px-5 text-[15px] font-semibold text-on-rame transition-colors hover:bg-rame-hover"
          >
            Blocca le chiamate perse sul tuo numero →
          </button>
        </div>
      </div>
    </section>
  );
}
