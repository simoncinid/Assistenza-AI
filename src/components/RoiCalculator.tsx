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
      className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8"
      aria-labelledby="roi-title"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
            Calcolatore chiamate perse
          </p>
          <h2 id="roi-title" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            Quanto ti costano le chiamate a cui non riesci a rispondere?
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Muovi i cursori sui numeri reali della tua attività per stimare il fatturato che oggi finisce alla concorrenza.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <div className="flex justify-between text-sm">
                <label htmlFor="roi-calls" className="text-slate-200">
                  Chiamate perse a settimana mentre lavori
                </label>
                <span className="font-mono font-bold text-amber-300">{missedPerWeek} / sett</span>
              </div>
              <input
                id="roi-calls"
                type="range"
                min={1}
                max={30}
                step={1}
                value={missedPerWeek}
                onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                className="mt-2 w-full accent-amber-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <label htmlFor="roi-value" className="text-slate-200">
                  Valore medio di un intervento o nuovo cliente
                </label>
                <span className="font-mono font-bold text-amber-300">{formatEur(avgJobValue)} €</span>
              </div>
              <input
                id="roi-value"
                type="range"
                min={50}
                max={2000}
                step={10}
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="mt-2 w-full accent-amber-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <label htmlFor="roi-conv" className="text-slate-200">
                  Chiamate che diventano clienti se rispondi subito
                </label>
                <span className="font-mono font-bold text-amber-300">{conversionPct}%</span>
              </div>
              <input
                id="roi-conv"
                type="range"
                min={10}
                max={70}
                step={5}
                value={conversionPct}
                onChange={(e) => setConversionPct(Number(e.target.value))}
                className="mt-2 w-full accent-amber-400"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-6 lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Fatturato perso stimato
          </p>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-white">
            {formatEur(monthlyLost)} €<span className="text-lg font-medium text-slate-300"> / mese</span>
          </p>
          <p className="mt-1 font-mono text-sm text-amber-300">
            ≈ {formatEur(yearlyLost)} € / anno
          </p>
          <p className="mt-4 text-xs leading-relaxed text-slate-300">
            Stima basata sui tuoi numeri: basta recuperare 2 chiamate al mese per ripagare il sistema.
          </p>
          <button
            type="button"
            onClick={handleSendToForm}
            className="mt-6 w-full rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Blocca le chiamate perse sul tuo numero →
          </button>
        </div>
      </div>
    </section>
  );
}
