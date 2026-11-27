export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.assistenza-ai.it";

export const SITE_NAME = "Assistenza AI";
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@assistenza-ai.it";

export interface Vertical {
  slug: string;
  name: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoints: string[];
  benefits: string[];
  defaultNeed: string;
  defaultSector: string;
}

export const VERTICALS: Vertical[] = [
  {
    slug: "idraulici",
    name: "Idraulici",
    shortTitle: "Centralino AI per Idraulici",
    metaTitle: "Centralino AI per Idraulici | Non Perdere Nessuna Chiamata in Cantiere",
    metaDescription:
      "Centralino telefonico AI 24/7 per idraulici e termoidraulici: risponde ai clienti mentre lavori, filtra le urgenze e fissa i sopralluoghi in agenda.",
    heroTitle: "Centralino AI per idraulici: risponde lui mentre sei in cantiere",
    heroSubtitle:
      "Ogni chiamata persa durante un intervento è un lavoro che va alla concorrenza. Il nostro assistente AI risponde in italiano naturale, raccoglie indirizzo e urgenza e ti invia subito il riepilogo su WhatsApp.",
    painPoints: [
      "Chiamate perse mentre hai le mani occupate su un impianto o sei alla guida",
      "Clienti che cercano un altro idraulico se trovano occupato o segreteria",
      "Ore spese la sera a richiamare e trascrivere indirizzi e preventivi",
    ],
    benefits: [
      "Risposta immediata 24/7 in italiano naturale, anche nei festivi",
      "Classificazione automatica tra emergenza (perdita d'acqua/caldaia) e preventivo",
      "Riepilogo strutturato via WhatsApp o email con nome, zona e numero",
    ],
    defaultNeed: "Centralino AI",
    defaultSector: "Idraulico",
  },
  {
    slug: "elettricisti",
    name: "Elettricisti",
    shortTitle: "Assistente AI per Elettricisti",
    metaTitle: "Assistente e Centralino AI per Elettricisti | Gestione Guasti e Preventivi",
    metaDescription:
      "Automazione chiamate e richieste WhatsApp per elettricisti e impiantisti: smistamento guasti, sopralluoghi e appuntamenti senza interruzioni.",
    heroTitle: "Assistente AI per elettricisti: filtra guasti e sopralluoghi in automatico",
    heroSubtitle:
      "Resta concentrato sugli impianti in sicurezza. L'assistente AI risponde a telefono e WhatsApp, raccoglie foto e dettagli del guasto e pianifica il sopralluogo.",
    painPoints: [
      "Interruzioni continue mentre lavori su quadri elettrici o cantieri",
      "Richieste vaghe senza dettagli utili per preparare materiali e preventivo",
      "Difficoltà a gestire richieste di pronto intervento fuori orario",
    ],
    benefits: [
      "Raccolta guidata del tipo di impianto, comune e fascia oraria",
      "Conferma automatica dell'appuntamento al cliente",
      "Integrazione diretta con il tuo calendario e WhatsApp",
    ],
    defaultNeed: "Centralino AI",
    defaultSector: "Elettricista",
  },
  {
    slug: "officine",
    name: "Officine",
    shortTitle: "AI per Officine Meccaniche",
    metaTitle: "Segreteria AI per Officine Meccaniche | Prenotazione Tagliandi e Revisioni",
    metaDescription:
      "Automatizza prenotazioni di tagliandi, revisioni e richieste stato auto per officine e carrozzerie con un assistente telefonico e WhatsApp AI.",
    heroTitle: "Segreteria AI per officine: meno telefonate in accettazione, più tempo sui veicoli",
    heroSubtitle:
      "Gestisci automaticamente le chiamate per tagliandi, cambio gomme, revisioni e stato lavorazione auto, senza interrompere i meccanici in ponte.",
    painPoints: [
      "Telefonate ripetitive per sapere se l'auto è pronta o prenotare una revisione",
      "Accettazione intasata nelle fasce di punta della mattina",
      "Clienti che dimenticano l'appuntamento per mancato promemoria",
    ],
    benefits: [
      "Prenotazione autonoma di tagliandi e revisioni con targa e modello",
      "Promemoria automatici su WhatsApp prima dell'appuntamento",
      "Notifica istantanea al cliente quando il veicolo è pronto al ritiro",
    ],
    defaultNeed: "Automazione appuntamenti/preventivi",
    defaultSector: "Officina",
  },
  {
    slug: "studi-professionali",
    name: "Studi Professionali",
    shortTitle: "AI per Studi Professionali",
    metaTitle: "Assistente AI per Studi Professionali | Segreteria e Gestione Clienti",
    metaDescription:
      "Segreteria AI e automazione documentale per commercialisti, avvocati, architetti e studi tecnici italiani: filtro richieste e prenotazione consulenze.",
    heroTitle: "Segreteria AI per studi professionali: filtra richieste e fissa consulenze",
    heroSubtitle:
      "Libera lo studio dalle chiamate ripetitive e dalle richieste di documenti. L'AI qualifica il contatto, raccoglie le informazioni preliminari e propone gli slot liberi.",
    painPoints: [
      "Tempo prezioso assorbito da chiamate informative non qualificate",
      "Follow-up manuali per raccogliere documenti mancanti dai clienti",
      "Difficoltà a garantire risposta rapida durante riunioni o udienze",
    ],
    benefits: [
      "Filtro intelligente tra nuovi clienti e pratiche già aperte",
      "Prenotazione consulenze sincronizzata con l'agenda dello studio",
      "Architettura progettata nel rispetto della normativa GDPR",
    ],
    defaultNeed: "Automazione appuntamenti/preventivi",
    defaultSector: "Studio professionale",
  },
  {
    slug: "pmi",
    name: "PMI",
    shortTitle: "Automazione AI per PMI Italiane",
    metaTitle: "Sviluppo e Automazione AI su Misura per PMI Italiane | Assistenza AI",
    metaDescription:
      "Soluzioni AI pratiche per PMI italiane: centralino AI, assistente WhatsApp Business, automazione preventivi, email e integrazione CRM.",
    heroTitle: "Sviluppo e assistenza AI su misura per PMI italiane",
    heroSubtitle:
      "Progettiamo e manteniamo automazioni AI concrete che riducono i tempi morti in ufficio e aumentano i contatti commerciali, integrate con gli strumenti che usi già.",
    painPoints: [
      "Lead da sito, telefono e WhatsApp gestiti in ritardo o persi",
      "Processi manuali ripetitivi tra email, fogli Excel e gestionale",
      "Soluzioni AI generiche difficili da adattare ai processi reali dell'azienda",
    ],
    benefits: [
      "Analisi dei processi e prototipo funzionante in tempi rapidi",
      "Integrazione con CRM, email, calendari e WhatsApp Business",
      "Assistenza tecnica continua in italiano, senza complessità interne",
    ],
    defaultNeed: "Assistente WhatsApp",
    defaultSector: "PMI",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Come funziona un centralino AI per artigiani e PMI?",
    answer:
      "Quando non puoi rispondere o fuori orario, la chiamata viene gestita da un assistente vocale AI in italiano naturale che ascolta la richiesta, raccoglie nome, zona e tipo di intervento e ti invia subito un riepilogo su WhatsApp o email.",
  },
  {
    question: "Devo cambiare il mio numero di telefono attuale?",
    answer:
      "No. Puoi mantenere il tuo numero fisso o mobile attuale attivando una semplice deviazione di chiamata su mancata risposta, su occupato o fuori orario.",
  },
  {
    question: "In quanto tempo si attiva il servizio?",
    answer:
      "Una configurazione standard di centralino AI o assistente WhatsApp viene progettata, testata insieme a te e messa online in pochi giorni lavorativi.",
  },
  {
    question: "Le soluzioni sono conformi al GDPR?",
    answer:
      "Sì. Progettiamo ogni flusso con raccolta minima dei dati necessari, informative chiare e tracciamento cookie-less sul sito web.",
  },
  {
    question: "Posso integrare l'assistente AI con WhatsApp, calendario o gestionale?",
    answer:
      "Sì. Possiamo collegare il centralino o il form del sito a Google Calendar, email, WhatsApp Business, Notion o al tuo CRM aziendale.",
  },
];

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
    description:
      "Sviluppo e assistenza AI su misura per PMI, artigiani e professionisti italiani: centralino AI 24/7, assistente WhatsApp e automazione preventivi e appuntamenti.",
    serviceType: [
      "Centralino AI per artigiani e PMI",
      "Assistente WhatsApp AI",
      "Automazione preventivi e appuntamenti",
      "Sviluppo e assistenza AI su misura",
    ],
  };
}

export function getFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
