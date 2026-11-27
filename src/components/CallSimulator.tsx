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
        extract: { label: "Intervento", value: "Tagliando VW Golf 7 Diesel · Giovedì mattina" },
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
    tabLabel: "Studio Prof.",
    companyName: "Studio Commerciale Neri",
    timeLabel: "Ore 11:30 · In riunione",
    scenarioTitle: "Richiesta appuntamento pratica fiscale",
    badgeType: "appuntamento",
    badgeText: "APPUNTAMENTO",
    summaryHeadline: "Nuovo cliente Srl — consulenza bilancio",
    footerNote: "Richiesta filtrata per pratica e fascia oraria, pronta per la segreteria.",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l’assistente virtuale dello Studio Commerciale Neri. I professionisti sono in riunione: come posso aiutarla?",
      },
      {
        speaker: "cliente",
        text: "Salve, siamo una piccola Srl di Reggio Emilia e vorremmo fissare un incontro per valutare il passaggio della contabilità.",
        extract: { label: "Motivo", value: "Nuova Srl — richiesta consulenza contabilità e bilancio" },
      },
      {
        speaker: "ai",
        text: "Volentieri. Mi lascia il suo nome e la fascia oraria preferita così lo studio la richiama per confermare l’appuntamento?",
        extract: { label: "Fascia", value: "Mattina 9:30–12:00 · Da ricontattare oggi" },
      },
    ],
  },
  {
    key: "studi-medici-dentistici",
    tabLabel: "Studio Medico",
    companyName: "Studio Dentistico Verdi",
    timeLabel: "Ore 13:15 · Pausa pranzo",
    scenarioTitle: "Prenotazione visita odontoiatrica",
    badgeType: "appuntamento",
    badgeText: "APPUNTAMENTO",
    summaryHeadline: "Richiesta prima visita + igiene",
    footerNote: "Solo dati minimi GDPR (nessuna diagnosi al telefono).",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l’assistente virtuale dello Studio Dentistico Verdi. La segreteria è momentaneamente occupata: desidera fissare o spostare un appuntamento?",
      },
      {
        speaker: "cliente",
        text: "Vorrei prenotare una visita di controllo e pulizia denti nel pomeriggio, preferibilmente martedì o giovedì.",
        extract: { label: "Prestazione", value: "Visita di controllo + igiene · Mar/Gio pomeriggio" },
      },
      {
        speaker: "ai",
        text: "Perfetto, segno la sua preferenza senza raccogliere dati clinici al telefono. La segreteria le invia la conferma su WhatsApp appena rientra.",
        extract: { label: "Stato", value: "Richiesta appuntamento · Minimizzazione GDPR attiva" },
      },
    ],
  },
  {
    key: "caldaie-climatizzazione",
    tabLabel: "Caldaie & Clima",
    companyName: "Clima Service Italia",
    timeLabel: "Ore 18:10 · Picco stagionale",
    scenarioTitle: "Climatizzatore in blocco / Bollino blu",
    badgeType: "urgente",
    badgeText: "URGENTE",
    summaryHeadline: "Pompa di calore Daikin errore U4",
    footerNote: "Marca verificata tra quelle autorizzate, zona coperta.",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l’assistente virtuale di Clima Service. I tecnici sono tutti fuori in assistenza: mi dica marca dell’impianto e problema.",
      },
      {
        speaker: "cliente",
        text: "Ho una pompa di calore Daikin che segna errore U4 e non scalda, siamo a Parma sud.",
        extract: { label: "Impianto", value: "Daikin pompa di calore (autorizzata) · Codice U4" },
      },
      {
        speaker: "ai",
        text: "Confermo che assistiamo Daikin e copriamo Parma sud. Ho segnato la priorità per il tecnico di zona, che la richiama entro sera.",
        extract: { label: "Zona e stato", value: "Parma sud coperta · Scheda inviata al tecnico" },
      },
    ],
  },
  {
    key: "imprese-edili-ristrutturazioni",
    tabLabel: "Edilizia",
    companyName: "Impresa Edile Moretti",
    timeLabel: "Ore 16:05 · In cantiere",
    scenarioTitle: "Richiesta sopralluogo ristrutturazione",
    badgeType: "appuntamento",
    badgeText: "SOPRALLUOGO",
    summaryHeadline: "Ristrutturazione completa bagno (~9 mq)",
    footerNote: "Comune, metratura e tempistiche già raccolti prima del sopralluogo.",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l’assistente virtuale di Impresa Edile Moretti. Il titolare è in cantiere: che tipo di lavoro deve realizzare?",
      },
      {
        speaker: "cliente",
        text: "Dobbiamo rifare completamente un bagno di circa 9 metri quadri a Monza, vorremmo partire entro due mesi.",
        extract: { label: "Lavoro", value: "Rifacimento completo bagno (~9 mq) · Avvio entro 2 mesi" },
      },
      {
        speaker: "ai",
        text: "Perfetto, Monza è nella nostra zona operativa. Le invio un messaggio WhatsApp per allegare 2 foto se vuole, così il titolare prepara il sopralluogo.",
        extract: { label: "Zona e step", value: "Monza (coperta) · Richiesta foto su WhatsApp" },
      },
    ],
  },
  {
    key: "pmi",
    tabLabel: "PMI B2B",
    companyName: "Tecnomeccanica Srl",
    timeLabel: "Ore 17:45 · Ufficio chiuso",
    scenarioTitle: "Richiesta offerta B2B e smistamento",
    badgeType: "appuntamento",
    badgeText: "LEAD B2B",
    summaryHeadline: "Richiesta fornitura 120 pezzi — ufficio commerciale",
    footerNote: "Lead qualificato instradato nel CRM prima dell’apertura del mattino.",
    turns: [
      {
        speaker: "ai",
        text: "Buongiorno, risponde l’assistente virtuale di Tecnomeccanica Srl. Gli uffici sono chiusi: chiama per un ordine in corso o per una nuova richiesta commerciale?",
      },
      {
        speaker: "cliente",
        text: "Nuova richiesta: cerchiamo un fornitore per un lotto da 120 staffe lavorate, consegna entro fine mese.",
        extract: { label: "Richiesta", value: "Offerta B2B — lotto 120 staffe · Consegna fine mese" },
      },
      {
        speaker: "ai",
        text: "Registrato. Mi conferma azienda ed email così domattina alle 8:30 il commerciale ha già la scheda pronta per inviarle il preventivo?",
        extract: { label: "Instradamento", value: "Ufficio commerciale · Priorità alta" },
      },
    ],
  },
];

export function CallSimulator({
  defaultSector = "idraulici",
  compact = false,
}: {
  defaultSector?: SimulatorSectorKey;
  compact?: boolean;
}) {
  const [selectedKey, setSelectedKey] = useState<SimulatorSectorKey>(defaultSector);
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [instantMode, setInstantMode] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const el = tabRefs.current[selectedKey];
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ inline: "center", block: "nearest", behavior: "auto" });
    }
  }, [selectedKey]);

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
    trackEvent("demo_tab_change", { verticale: key });
  }

  function speakText(text: string) {
    if (!audioEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;
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
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    trackEvent("demo_start", {
      verticale: scenario.tabLabel,
      esigenza: "Centralino AI",
      mode: instantMode || reducedMotion ? "instant" : "normal",
    });

    if (instantMode || reducedMotion) {
      setVisibleCount(scenario.turns.length);
      trackEvent("demo_complete", {
        verticale: scenario.tabLabel,
        esigenza: "Centralino AI",
      });
      return;
    }

    setVisibleCount(1);
    setIsPlaying(true);
    speakText(scenario.turns[0].text);

    let step = 1;
    const advance = () => {
      step += 1;
      setVisibleCount(step);
      const currentTurn = scenario.turns[step - 1];
      if (currentTurn) speakText(currentTurn.text);
      if (step < scenario.turns.length) {
        timerRef.current = setTimeout(advance, 1550);
      } else {
        setIsPlaying(false);
        trackEvent("demo_complete", {
          verticale: scenario.tabLabel,
          esigenza: "Centralino AI",
        });
      }
    };

    timerRef.current = setTimeout(advance, 1450);
  }

  const extractedItems = scenario.turns
    .slice(0, visibleCount)
    .map((t) => t.extract)
    .filter((x): x is { label: string; value: string } => Boolean(x));

  return (
    <section
      id="simulatore"
      className="overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-md)]"
      aria-labelledby="simulatore-title"
    >
      {/* macOS-clean top window chrome */}
      <div className="flex items-center justify-between border-b border-line bg-surface px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        </div>
        <p id="simulatore-title" className="text-[13px] font-semibold text-ink-soft">
          Simulatore Centralino AI
        </p>
        <span className="w-10" aria-hidden="true" />
      </div>

      <div className={compact ? "p-4 sm:p-5" : "p-5 sm:p-7"}>
        {/* Sector Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Settori simulatore">
          {SCENARIOS.map((s) => {
            const active = s.key === scenario.key;
            return (
              <button
                key={s.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleSelectTab(s.key)}
                className={`min-h-11 shrink-0 whitespace-nowrap rounded-full px-3.5 text-[13px] font-semibold transition-colors ${
                  active
                    ? "bg-ink text-white"
                    : "border border-line bg-surface text-ink-soft hover:text-ink"
                }`}
              >
                {s.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Options directly below tabs */}
        <div className="mt-3 flex flex-wrap items-center gap-4 text-[12px] text-ink-soft">
          <label className="inline-flex cursor-pointer items-center gap-1.5">
            <input
              type="checkbox"
              checked={instantMode}
              onChange={(e) => setInstantMode(e.target.checked)}
              className="accent-rame"
            />
            Istantanea
          </label>
          <label className="inline-flex cursor-pointer items-center gap-1.5">
            <input
              type="checkbox"
              checked={audioEnabled}
              onChange={(e) => setAudioEnabled(e.target.checked)}
              className="accent-rame"
            />
            Audio voce IT
          </label>
        </div>

        {/* Call + WhatsApp summary panes */}
        <div className={`mt-4 grid gap-4 ${compact ? "grid-cols-1" : "lg:grid-cols-12"}`}>
          {/* Call pane */}
          <div className={`rounded-lg border border-line bg-surface p-4 ${compact ? "" : "lg:col-span-7"}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
              <div>
                <p className="text-[14px] font-semibold text-ink">{scenario.companyName}</p>
                <p className="font-mono text-[11px] font-medium text-ink-soft">
                  {scenario.timeLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={startSimulation}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-rame px-4 text-[14px] font-semibold text-on-rame transition-colors hover:bg-rame-hover"
              >
                {isPlaying
                  ? "Chiamata in corso..."
                  : isComplete
                    ? "Riproduci"
                    : "Avvia simulazione"}
              </button>
            </div>

            <div className="mt-3.5 space-y-2.5">
              {scenario.turns.slice(0, visibleCount).map((turn, index) => (
                <div
                  key={`${scenario.key}-${index}`}
                  className={`rounded-md px-3.5 py-2.5 text-[14px] leading-relaxed ${
                    turn.speaker === "ai"
                      ? "border border-line bg-raised text-ink"
                      : "ml-4 bg-ink text-[#F7F6F3]"
                  }`}
                >
                  <p
                    className={`mb-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
                      turn.speaker === "ai" ? "text-rame" : "text-[#C7C4BC]"
                    }`}
                  >
                    {turn.speaker === "ai" ? "Assistente AI · < 1s" : "Cliente"}
                  </p>
                  <p>{turn.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp summary pane */}
          <div
            className={`flex flex-col justify-between rounded-lg border border-line bg-surface p-4 ${
              compact ? "" : "lg:col-span-5"
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-line pb-2.5">
                <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-whatsapp">
                  Scheda WhatsApp · +10s
                </p>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide ${
                    scenario.badgeType === "urgente"
                      ? "bg-urgente-bg text-urgente"
                      : "bg-appuntamento-bg text-appuntamento"
                  }`}
                >
                  {scenario.badgeText}
                </span>
              </div>

              <div className="mt-3 rounded-md border border-black/6 bg-raised p-3.5">
                <p className="text-[14px] font-semibold text-ink">{scenario.summaryHeadline}</p>
                {extractedItems.length === 0 ? (
                  <p className="mt-2 text-[13px] text-ink-soft">
                    Premi &ldquo;Avvia simulazione&rdquo; per vedere la scheda compilarsi in diretta.
                  </p>
                ) : (
                  <dl className="mt-2.5 space-y-2 text-[13px]">
                    {extractedItems.map((item) => (
                      <div key={item.label} className="border-t border-line pt-2">
                        <dt className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                          {item.label}
                        </dt>
                        <dd className="mt-0.5 font-medium text-ink">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {isComplete && (
                  <p className="mt-3 border-l-2 border-whatsapp pl-2.5 text-[12px] text-ink-soft">
                    {scenario.footerNote}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-3.5 flex items-center justify-between gap-3 pt-1">
              <span className="text-[12px] text-ink-soft">Conformità Art. 50 AI Act · demo reale</span>
              <a
                href="#contatti-form"
                onClick={() => trackEvent("cta_click", { label: "simulator_cta", verticale: scenario.tabLabel })}
                className="inline-flex min-h-11 items-center text-[13px] font-semibold text-rame hover:text-rame-hover"
              >
                Attivalo sul tuo numero →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
