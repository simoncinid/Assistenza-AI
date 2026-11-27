import Link from "next/link";
import type { SimulatorSectorKey } from "@/lib/site";

interface SectorCardData {
  company: string;
  time: string;
  badge: string;
  badgeTone: "urgente" | "appuntamento";
  headline: string;
  fields: { label: string; value: string }[];
  footer: string;
}

const SECTOR_CARDS: Record<SimulatorSectorKey, SectorCardData> = {
  idraulici: {
    company: "Termoidraulica Rossi",
    time: "Ore 14:22 · In cantiere",
    badge: "URGENTE",
    badgeTone: "urgente",
    headline: "Caldaia Vaillant in blocco (codice F28)",
    fields: [
      { label: "Problema", value: "Nessuna acqua calda, pressione bassa" },
      { label: "Zona", value: "Zona coperta · Piano terra" },
      { label: "Azione AI", value: "Scheda WhatsApp inviata al titolare" },
    ],
    footer: "Chiamata risposta al 2° squillo · 0 sec di attesa",
  },
  elettricisti: {
    company: "Impianti Elettrici Bianchi",
    time: "Ore 11:05 · Quadro in cantiere",
    badge: "URGENTE",
    badgeTone: "urgente",
    headline: "Salvavita che scatta al piano terra",
    fields: [
      { label: "Urgenza", value: "Attività commerciale senza corrente" },
      { label: "Dettagli", value: "Scatta anche con forno spento" },
      { label: "Azione AI", value: "Priorità alta su WhatsApp + richiamata" },
    ],
    footer: "Dati tecnici raccolti prima ancora di richiamare",
  },
  officine: {
    company: "Autofficina Conti",
    time: "Ore 09:40 · Sotto ponte",
    badge: "APPUNTAMENTO",
    badgeTone: "appuntamento",
    headline: "Tagliando completo VW Golf 7 (115.000 km)",
    fields: [
      { label: "Veicolo", value: "Volkswagen Golf 7 1.6 TDI · 2018" },
      { label: "Slot proposto", value: "Giovedì ore 08:30 (confermato)" },
      { label: "Azione AI", value: "Appuntamento in agenda + promemoria" },
    ],
    footer: "Zero telefonate mentre sei con le mani sporche",
  },
  "caldaie-climatizzazione": {
    company: "Clima Service Italia",
    time: "Ore 18:10 · Picco stagionale",
    badge: "URGENTE",
    badgeTone: "urgente",
    headline: "Pompa di calore Daikin errore U4",
    fields: [
      { label: "Impianto", value: "Daikin (marca autorizzata) · Cod. U4" },
      { label: "Copertura", value: "Zona coperta · Verifica automatica" },
      { label: "Azione AI", value: "Scheda priorità al tecnico di zona" },
    ],
    footer: "Filtra marche non assistite e picchi estivi/invernali",
  },
  "studi-medici-dentistici": {
    company: "Studio Dentistico Verdi",
    time: "Ore 10:15 · Segreteria occupata",
    badge: "APPUNTAMENTO",
    badgeTone: "appuntamento",
    headline: "Prenotazione igiene dentale · Paziente ricorrente",
    fields: [
      { label: "Prestazione", value: "Igiene dentale periodica (45 min)" },
      { label: "Preferenza", value: "Martedì o giovedì dopo le 17:00" },
      { label: "Privacy", value: "Nessun dato clinico sensibile richiesto" },
    ],
    footer: "Riduce telefonate in reception e no-show",
  },
  "studi-professionali": {
    company: "Studio Commerciale Neri",
    time: "Ore 15:30 · In riunione",
    badge: "QUALIFICATO",
    badgeTone: "appuntamento",
    headline: "Nuovo cliente Srl — cambio commercialista",
    fields: [
      { label: "Profilo", value: "Srl 12 dipendenti · Contabilità ordinaria" },
      { label: "Esigenza", value: "Valutazione passaggio da gennaio" },
      { label: "Azione AI", value: "Call conoscitiva proposta + riepilogo email" },
    ],
    footer: "Distingue clienti esistenti da nuove richieste ad alto valore",
  },
  "imprese-edili-ristrutturazioni": {
    company: "Impresa Edile Moretti",
    time: "Ore 16:05 · In cantiere",
    badge: "SOPRALLUOGO",
    badgeTone: "appuntamento",
    headline: "Ristrutturazione completa bagno (~9 mq)",
    fields: [
      { label: "Lavoro", value: "Rifacimento completo · Avvio entro 2 mesi" },
      { label: "Zona", value: "Comune coperto · Sopralluogo idoneo" },
      { label: "Azione AI", value: "Link WhatsApp inviato per foto stato attuale" },
    ],
    footer: "Raccoglie comune, metratura e foto prima del sopralluogo",
  },
  pmi: {
    company: "Tecnomeccanica Srl",
    time: "Ore 17:45 · Ufficio chiuso",
    badge: "LEAD B2B",
    badgeTone: "appuntamento",
    headline: "Richiesta fornitura 120 pezzi — commerciale",
    fields: [
      { label: "Smistamento", value: "Nuova richiesta → Ufficio commerciale" },
      { label: "Dati raccolti", value: "Azienda, quantità, tempistiche consegna" },
      { label: "Azione AI", value: "Lead registrato su CRM + email al team" },
    ],
    footer: "Copertura 24/7 fuori orario e picchi di centralino",
  },
};

export function SectorWhatsAppCard({ sector }: { sector: SimulatorSectorKey }) {
  const data = SECTOR_CARDS[sector] || SECTOR_CARDS.idraulici;
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-raised p-5 shadow-[var(--shadow-md)]">
      <div className="flex items-center justify-between gap-2 border-b border-line pb-3">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-rame">
            Scheda WhatsApp · Esempio
          </p>
          <p className="mt-0.5 text-[12px] text-ink-soft">{data.company} · {data.time}</p>
        </div>
        <span
          className={
            data.badgeTone === "urgente"
              ? "shrink-0 rounded-full bg-rame-tint px-2.5 py-1 font-mono text-[11px] font-semibold text-rame"
              : "shrink-0 rounded-full bg-surface px-2.5 py-1 font-mono text-[11px] font-semibold text-ink"
          }
        >
          {data.badge}
        </span>
      </div>

      <p className="mt-4 text-[16px] font-semibold leading-snug text-ink">
        {data.headline}
      </p>

      <dl className="mt-4 space-y-2.5 rounded-xl bg-surface p-3.5 text-[13px]">
        {data.fields.map((f) => (
          <div key={f.label} className="grid grid-cols-[96px_1fr] gap-2">
            <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">
              {f.label}
            </dt>
            <dd className="font-medium text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-3 text-[12px] text-ink-soft">
        <span>{data.footer}</span>
        <a
          href="#simulatore"
          className="inline-flex shrink-0 items-center py-3 -my-3 font-semibold text-rame hover:text-rame-hover"
        >
          Prova live ↓
        </a>
      </div>
    </div>
  );
}

export function CallAnatomyCard() {
  const steps = [
    { sec: "00s", title: "Deviazione *61* se non rispondi", detail: "Il cliente chiama il tuo numero di sempre: dopo 4 squilli subentra l’AI." },
    { sec: "04s", title: "Risposta in italiano + avviso AI Act", detail: "Voce naturale, informativa Art. 50 inclusa, zero attese." },
    { sec: "22s", title: "Qualifica problema, zona e urgenza", detail: "Fa solo le domande del tuo mestiere e filtra fuori zona." },
    { sec: "38s", title: "Scheda WhatsApp + appuntamento", detail: "Ricevi il riepilogo pulito pronto da richiamare o già in agenda." },
  ];
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-raised p-5 shadow-[var(--shadow-md)]">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
        Anatomia di una chiamata · 38 secondi
      </p>
      <ol className="mt-4 divide-y divide-line">
        {steps.map((s) => (
          <li key={s.sec} className="grid grid-cols-[44px_1fr] gap-3 py-3 first:pt-0 last:pb-0">
            <span className="font-mono text-[12px] font-semibold text-rame">{s.sec}</span>
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-ink">{s.title}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function WhatsAppMockupCard() {
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-raised p-5 shadow-[var(--shadow-md)]">
      <div className="flex items-center justify-between gap-2 border-b border-line pb-3">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-rame">
            WhatsApp Business AI
          </p>
          <p className="mt-0.5 text-[12px] text-ink-soft">Risposta automatica · 24/7</p>
        </div>
        <span className="shrink-0 whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-800">
          API Ufficiali
        </span>
      </div>
      <div className="mt-4 space-y-3 text-[13px] leading-relaxed">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface px-3.5 py-2.5 text-ink">
          Ciao, la caldaia perde acqua sotto il mobile. Posso mandarvi una foto?
          <span className="mt-1.5 inline-flex items-center gap-1 rounded border border-line bg-raised px-2 py-0.5 font-mono text-[11px] text-ink-soft">
            📷 foto-guasto.jpg (ricevuta)
          </span>
        </div>
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-dark px-3.5 py-2.5 text-[#F7F6F3]">
          Grazie! Ho girato la foto al tecnico con priorità alta. Confermiamo l’intervento domani tra le 08:30 e le 09:30?
        </div>
        <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2 font-mono text-[11px] text-ink-soft">
          <span>Promemoria automatico inviato -24h</span>
          <span className="font-semibold text-rame">Confermato ✓</span>
        </div>
      </div>
    </div>
  );
}

export function PmiPipelineCard() {
  const nodes = [
    {
      step: "01 · INPUT",
      title: "Email, PDF, ordini e DDT",
      desc: "Allegati fornitori, richieste di preventivo, ticket clienti in ingresso.",
    },
    {
      step: "02 · ELABORAZIONE AI",
      title: "Estrazione e controllo campi",
      desc: "Legge codici articolo, quantità, scadenze e verifica anomalie con log audit.",
    },
    {
      step: "03 · OUTPUT AZIENDALE",
      title: "Gestionale, CRM o bozza pronta",
      desc: "Scrive nel tuo ERP/CRM o prepara la risposta pronta per l’approvazione umana.",
    },
  ];
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-raised p-5 shadow-[var(--shadow-md)]">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
        Architettura tipica · Esempio flusso PMI
      </p>
      <div className="mt-4 space-y-2.5">
        {nodes.map((n, idx) => (
          <div key={n.step}>
            <div className="rounded-xl border border-line bg-surface p-3.5">
              <p className="font-mono text-[11px] font-semibold text-rame">{n.step}</p>
              <p className="mt-1 text-[14px] font-semibold text-ink">{n.title}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">{n.desc}</p>
            </div>
            {idx < nodes.length - 1 && (
              <div className="flex justify-center py-1 font-mono text-[12px] text-rame" aria-hidden="true">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AssistenzaStatusCard() {
  const rows = [
    { label: "Centralino vocale", state: "Operativo", metric: "Latenza 420 ms" },
    { label: "Webhook WhatsApp / CRM", state: "Sincronizzato", metric: "0 errori · 24h" },
    { label: "Revisione prompt & trascrizioni", state: "Aggiornato", metric: "Ciclo mensile" },
    { label: "Controllo conformità AI Act", state: "Verificato", metric: "Art. 50 attivo" },
  ];
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-dark p-5 text-[#F7F6F3] shadow-[var(--shadow-md)]">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#E09B72]">
          Monitoraggio · Esempio
        </span>
      </div>
      <div className="mt-4 divide-y divide-white/10">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
            <div className="min-w-0">
              <p className="text-[13px] font-medium text-white">{r.label}</p>
              <p className="font-mono text-[11px] text-[#9E9B94]">{r.metric}</p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
              {r.state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MethodStepsCard() {
  const steps = [
    { num: "01", title: "Ascolto (15 min)", desc: "Analizziamo chiamate, richieste e colli di bottiglia reali della tua attività." },
    { num: "02", title: "Configurazione (5–7 gg)", desc: "Costruiamo flussi, voce italiana, orari, zone coperte e integrazioni." },
    { num: "03", title: "Test su numero di prova", desc: "Chiami l’assistente in prima persona e rifiniamo ogni risposta prima del lancio." },
    { num: "04", title: "Attivazione *61* + assistenza", desc: "Vai live senza cambiare numero, con monitoraggio continuo incluso." },
  ];
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-raised p-5 shadow-[var(--shadow-md)]">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
        Il metodo in 4 passi
      </p>
      <ol className="mt-4 divide-y divide-line">
        {steps.map((s) => (
          <li key={s.num} className="grid grid-cols-[32px_1fr] gap-3 py-3 first:pt-0 last:pb-0">
            <span className="font-mono text-[12px] font-semibold text-rame">{s.num}</span>
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-ink">{s.title}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ServicesOverviewCard() {
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-raised p-5 shadow-[var(--shadow-md)]">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
        Standard operativo · Tutti i progetti
      </p>
      <dl className="mt-4 divide-y divide-line text-[14px]">
        <div className="flex items-baseline justify-between gap-4 py-3 first:pt-0">
          <dt className="text-ink-soft">Avvio chiavi in mano</dt>
          <dd className="font-mono font-semibold text-ink">5–7 gg lavorativi</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-ink-soft">Cambio numero</dt>
          <dd className="font-mono font-semibold text-ink">Nessuno (*61*)</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-ink-soft">Conformità normativa</dt>
          <dd className="font-mono font-semibold text-ink">GDPR · AI Act Art. 50</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3 last:pb-0">
          <dt className="text-ink-soft">Supporto tecnico</dt>
          <dd className="font-mono font-semibold text-ink">Diretto in italiano</dd>
        </div>
      </dl>
    </div>
  );
}

export function GuidesToolsCard() {
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-raised p-5 shadow-[var(--shadow-md)]">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
        Strumenti gratuiti sul sito
      </p>
      <div className="mt-3 divide-y divide-line">
        <Link
          href="/#simulatore"
          className="flex min-h-12 items-center justify-between gap-3 py-3 text-[14px] font-semibold text-ink hover:text-rame"
        >
          <span>Simulatore chiamate AI (8 settori)</span>
          <span className="font-mono text-rame">→</span>
        </Link>
        <Link
          href="/#calcolatore-roi"
          className="flex min-h-12 items-center justify-between gap-3 py-3 text-[14px] font-semibold text-ink hover:text-rame"
        >
          <span>Calcolatore chiamate perse e ROI</span>
          <span className="font-mono text-rame">→</span>
        </Link>
        <Link
          href="/faq"
          className="flex min-h-12 items-center justify-between gap-3 py-3 text-[14px] font-semibold text-ink hover:text-rame"
        >
          <span>20 risposte su costi, GDPR e *61*</span>
          <span className="font-mono text-rame">→</span>
        </Link>
      </div>
    </div>
  );
}
