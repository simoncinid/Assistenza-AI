"use client";

import { useEffect, useRef, useState } from "react";
import type { SimulatorSectorKey } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

interface DialogueTurn {
  speaker: "ai" | "cliente";
  text: string;
  extract?: { label: string; value: string };
}

interface Scenario {
  key: SimulatorSectorKey;
  tabLabel: string;
  companyName: string;
  timeLabel: string;
  scenarioTitle: string;
  badgeType: "urgente" | "appuntamento";
  badgeText: string;
  summaryHeadline: string;
  footerNote: string;
  turns: DialogueTurn[];
}

const SCENARIOS: Scenario[] = [
  {
    key: "idraulici",
    tabLabel: "Idraulico",
    companyName: "Termoidraulica Rossi",
    timeLabel: "Ore 19:20 · Deviazione *61*",
    scenarioTitle: "Caldaia in blocco (cod. F28)",
    badgeType: "urgente",
    badgeText: "URGENTE",
    summaryHeadline: "Caldaia Vaillant in blocco (cod. F28)",
    footerNote: "Da richiamare per primo appena chiudi l'intervento.",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l'assistente virtuale di Termoidraulica Rossi. Il tecnico è su un intervento: mi dica pure cosa è successo.",
      },
      {
        speaker: "cliente",
        text: "Salve, mi è andata in blocco la caldaia Vaillant, segna errore F28 e non ho acqua calda.",
        extract: { label: "Problema", value: "Caldaia Vaillant in blocco (cod. F28), acqua calda assente" },
      },
      {
        speaker: "ai",
        text: "Capisco, è un'urgenza. Mi conferma il suo nome, l'indirizzo e se questo numero è quello giusto per richiamarla?",
      },
      {
        speaker: "cliente",
        text: "Marco Ferretti, Via Emilia 42 a Modena. Sì, il numero è questo.",
        extract: { label: "Cliente e zona", value: "Marco Ferretti · Via Emilia 42, Modena" },
      },
      {
        speaker: "ai",
        text: "Perfetto signor Ferretti, ho già segnato l'errore F28 come urgente. Il titolare la richiama appena chiude l'intervento in corso.",
        extract: { label: "Stato", value: "Classificato URGENTE · Numero confermato" },
      },
    ],
  },
  {
    key: "elettricisti",
    tabLabel: "Elettricista",
    companyName: "Impianti Bianchi",
    timeLabel: "Ore 15:40 · In cantiere",
    scenarioTitle: "Salvavita che scatta",
    badgeType: "urgente",
    badgeText: "URGENTE",
    summaryHeadline: "Salvavita scatta all'accensione del forno",
    footerNote: "Zona coperta e tariffa uscita già comunicate al cliente.",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l'assistente virtuale di Impianti Bianchi. Al momento siamo in cantiere: come posso aiutarla?",
      },
      {
        speaker: "cliente",
        text: "Scatta in continuazione il salvavita appena accendo il forno, abito a Bergamo centro.",
        extract: { label: "Guasto e zona", value: "Salvavita scatta con forno · Bergamo centro (coperta)" },
      },
      {
        speaker: "ai",
        text: "Bergamo centro è nella nostra zona servita. L'uscita per pronto intervento parte da 60 € + IVA: vuole che prenoti un ricontatto urgente?",
        extract: { label: "Tariffa uscita", value: "60 € + IVA comunicata · Ricontatto richiesto" },
      },
    ],
  },
  {
    key: "officine",
    tabLabel: "Autofficina",
    companyName: "Autofficina Conti",
    timeLabel: "Ore 10:15 · Officina piena",
    scenarioTitle: "Prenotazione tagliando",
    badgeType: "appuntamento",
    badgeText: "APPUNTAMENTO",
    summaryHeadline: "Tagliando VW Golf 7 Diesel",
    footerNote: "Scheda pronta in officina: basta un messaggio per confermare.",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l'assistente virtuale di Autofficina Conti. I meccanici sono al lavoro: per cosa chiama?",
      },
      {
        speaker: "cliente",
        text: "Devo fare il tagliando alla mia Golf 7 diesel, posso portarla giovedì mattina?",
        extract: { label: "Intervento", value: "Tagliando VW Golf 7 Diesel · Preferenza: Giovedì mattina" },
      },
      {
        speaker: "ai",
        text: "Volentieri. Mi dice la targa e il suo nome così lascio già pronta la scheda in officina?",
        extract: { label: "Targa", value: "FX 482 KL · Da confermare in agenda" },
      },
    ],
  },
  {
    key: "studi-professionali",
    tabLabel: "Studio Professionale",
    companyName: "Studio Dentistico Verdi",
    timeLabel: "Ore 13:10 · Pausa pranzo",
    scenarioTitle: "Nuovo paziente igiene dentale",
    badgeType: "appuntamento",
    badgeText: "PRENOTAZIONE",
    summaryHeadline: "Igiene dentale (nuovo paziente)",
    footerNote: "Conferma WhatsApp da inviare alla riapertura dello studio.",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l'assistente virtuale dello Studio Dentistico Verdi. In questo momento siamo in visita: mi dica pure.",
      },
      {
        speaker: "cliente",
        text: "Vorrei fissare una pulizia dei denti la prossima settimana, preferibilmente dopo le 17.",
        extract: { label: "Prestazione", value: "Igiene dentale (nuovo paziente) · Dopo le 17:00" },
      },
      {
        speaker: "ai",
        text: "Perfetto, verifico la disponibilità serale e le mando conferma su WhatsApp. Mi lascia nome e cognome?",
        extract: { label: "Canale conferma", value: "WhatsApp · Agenda serale da verificare" },
      },
    ],
  },
];

export function CallSimulator({
  defaultSector = "idraulici",
}: {
  defaultSector?: SimulatorSectorKey;
}) {
  const [selectedKey, setSelectedKey] = useState<SimulatorSectorKey>(defaultSector);
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [instantMode, setInstantMode] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scenario = SCENARIOS.find((s) => s.key === selectedKey) || SCENARIOS[0];
  const isComplete = visibleCount >= scenario.turns.length;

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function stopPlayback() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  function handleSelectTab(key: SimulatorSectorKey) {
    stopPlayback();
    setSelectedKey(key);
    setVisibleCount(1);
    trackEvent("demo_tab_change", { sector: key });
  }

  function speakText(text: string) {
    if (!audioEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "it-IT";
      utter.rate = 1.05;
      window.speechSynthesis.speak(utter);
    } catch {
      // Ignore speech synthesis errors
    }
  }

  function startSimulation() {
    stopPlayback();
    trackEvent("demo_start", { verticale: scenario.tabLabel, esigenza: "Centralino AI", mode: instantMode ? "instant" : "normal" });

    if (instantMode) {
      setVisibleCount(scenario.turns.length);
      trackEvent("demo_complete", { verticale: scenario.tabLabel, esigenza: "Centralino AI", sector: scenario.key });
      return;
    }

    setVisibleCount(1);
    setIsPlaying(true);
    speakText(scenario.turns[0].text);

    let step = 1;
    const advance = () => {
      step += 1;
      setVisibleCount(step);
      if (step <= scenario.turns.length) {
        const currentTurn = scenario.turns[step - 1];
        if (currentTurn) speakText(currentTurn.text);
      }
      if (step < scenario.turns.length) {
        timerRef.current = setTimeout(advance, 1650);
      } else {
        setIsPlaying(false);
        trackEvent("demo_complete", { verticale: scenario.tabLabel, esigenza: "Centralino AI", sector: scenario.key });
      }
    };

    timerRef.current = setTimeout(advance, 1500);
  }

  const extractedItems = scenario.turns
    .slice(0, visibleCount)
    .map((t) => t.extract)
    .filter((x): x is { label: string; value: string } => Boolean(x));

  return (
    <section
      id="simulatore"
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
      aria-labelledby="simulatore-title"
    >
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
            Demo interattiva · Zero costi API
          </p>
          <h2 id="simulatore-title" className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Simula una chiamata reale sul tuo settore
          </h2>
          <p className="mt-1.5 text-sm text-slate-600">
            Scegli il tuo mestiere e guarda come il Centralino AI risponde in italiano (conforme AI Act Art. 50) e ti prepara il riepilogo su WhatsApp in 10 secondi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
            <input
              type="checkbox"
              checked={instantMode}
              onChange={(e) => setInstantMode(e.target.checked)}
              className="accent-blue-700"
            />
            Modalità istantanea
          </label>
          <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
            <input
              type="checkbox"
              checked={audioEnabled}
              onChange={(e) => setAudioEnabled(e.target.checked)}
              className="accent-blue-700"
            />
            Audio voce IT
          </label>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Settori simulatore">
        {SCENARIOS.map((s) => {
          const active = s.key === scenario.key;
          return (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => handleSelectTab(s.key)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {s.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Main 2-column simulation */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        {/* Left: Call transcript */}
        <div className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <p className="text-sm font-bold text-slate-900">{scenario.companyName}</p>
              <p className="font-mono text-xs text-slate-500">
                {scenario.timeLabel} · {scenario.scenarioTitle}
              </p>
            </div>
            <button
              type="button"
              onClick={startSimulation}
              className="rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800"
            >
              {isPlaying
                ? "Simulazione in corso..."
                : isComplete
                  ? "Riproduci di nuovo"
                  : "Avvia simulazione chiamata"}
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {scenario.turns.slice(0, visibleCount).map((turn, index) => (
              <div
                key={`${scenario.key}-${index}`}
                className={`rounded-xl px-4 py-3 text-sm leading-relaxed ${
                  turn.speaker === "ai"
                    ? "border border-blue-200 bg-white text-slate-800"
                    : "ml-4 border border-slate-200 bg-slate-900 text-slate-50"
                }`}
              >
                <p
                  className={`mb-1 font-mono text-[11px] font-semibold uppercase tracking-wide ${
                    turn.speaker === "ai" ? "text-blue-700" : "text-amber-300"
                  }`}
                >
                  {turn.speaker === "ai" ? "Centralino AI · Risposta < 1s" : "Cliente al telefono"}
                </p>
                <p>{turn.text}</p>
              </div>
            ))}
          </div>

          {!isComplete && !isPlaying && (
            <p className="mt-4 text-xs text-slate-500">
              Premi &ldquo;Avvia simulazione chiamata&rdquo; per vedere il dialogo completo e la scheda WhatsApp compilarsi in diretta.
            </p>
          )}
        </div>

        {/* Right: WhatsApp summary card */}
        <div className="flex flex-col justify-between rounded-xl border border-emerald-200 bg-[#F0FDF4] p-4 sm:p-5 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
                  Riepilogo WhatsApp · +10 sec
                </p>
                <p className="text-sm font-bold text-slate-900">Scheda ricevuta sul tuo telefono</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-bold ${
                  scenario.badgeType === "urgente"
                    ? "bg-red-100 text-red-800"
                    : "bg-amber-100 text-amber-900"
                }`}
              >
                {scenario.badgeText}
              </span>
            </div>

            <div className="mt-4 rounded-xl border border-emerald-200 bg-white p-4 shadow-xs">
              <p className="text-sm font-bold text-slate-900">{scenario.summaryHeadline}</p>

              {extractedItems.length === 0 ? (
                <p className="mt-3 text-xs text-slate-500">
                  In attesa dei dati raccolti dalla chiamata...
                </p>
              ) : (
                <dl className="mt-3 space-y-2.5 text-xs">
                  {extractedItems.map((item) => (
                    <div key={item.label} className="border-t border-slate-100 pt-2">
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 font-medium text-slate-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {isComplete && (
                <p className="mt-3 rounded-lg bg-slate-50 p-2.5 text-xs text-slate-700">
                  {scenario.footerNote}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 pt-2">
            <span className="font-mono text-[11px] text-emerald-900">
              Conforme Art. 50 AI Act
            </span>
            <a
              href="#contatti-form"
              onClick={() => trackEvent("cta_click", { label: "simulator_cta", sector: scenario.key })}
              className="rounded-lg bg-emerald-700 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-800"
            >
              Attivalo sul tuo numero →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
