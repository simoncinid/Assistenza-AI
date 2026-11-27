export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.assistenza-ai.it";

export const SITE_NAME = "Assistenza AI";
export const INFO_EMAIL = "info@assistenza-ai.it";
export const QUOTES_EMAIL = "preventivi@assistenza-ai.it";

export type SimulatorSectorKey =
  | "idraulici"
  | "elettricisti"
  | "officine"
  | "studi-professionali";

export interface Vertical {
  slug: string;
  name: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  inBreve: string;
  situations: { title: string; detail: string }[];
  whenNotNeeded: string[];
  faqs: FaqItem[];
  defaultSector: string;
  defaultNeed: string;
  simulatorKey: SimulatorSectorKey;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Devo cambiare il mio numero di telefono?",
    answer:
      "No. Mantieni il tuo numero fisso o cellulare attuale (TIM, Vodafone, WindTre, Iliad, VoIP): basta attivare la deviazione condizionata (*61*) così l'assistente risponde solo se non puoi rispondere dopo 4–5 squilli, se sei occupato o fuori orario.",
  },
  {
    question: "Chi chiama capisce che sta parlando con un'AI?",
    answer:
      "Sì, ed è un obbligo di legge: dal 2 agosto 2026 l'Articolo 50 dell'AI Act europeo impone di informare chi parla con un sistema di intelligenza artificiale. I nostri assistenti si presentano sempre in modo chiaro e naturale all'inizio della chiamata.",
  },
  {
    question: "Cosa succede se il cliente fa una domanda tecnica complessa?",
    answer:
      "L'assistente non inventa mai risposte né prezzi non autorizzati. Prende nota con precisione della richiesta, rassicura il cliente e ti invia subito la trascrizione su WhatsApp o email così puoi richiamarlo tu con tutti i dati in mano.",
  },
  {
    question: "In quanto tempo si attiva il sistema?",
    answer:
      "Dopo una breve call di 15 minuti per raccogliere servizi, zone, orari e regole, configuriamo e testiamo il centralino insieme a te in pochi giorni lavorativi, senza che tu debba imparare software complicati.",
  },
  {
    question: "Come sono gestiti i dati dei clienti secondo il GDPR?",
    answer:
      "Configuriamo i flussi nel rispetto del GDPR: minimizzazione dei dati, informativa chiara e nessuna rivendita o riutilizzo dei contatti per addestrare modelli esterni.",
  },
  {
    question: "Fate solo centralini telefonici o anche automazioni AI per PMI?",
    answer:
      "Entrambi: oltre a Centralino AI e WhatsApp AI per artigiani e studi, sviluppiamo automazioni AI su misura per PMI (lettura fatture passive e DDT, bozze preventivi, integrazioni con CRM e gestionali esistenti) con assistenza continuativa in italiano.",
  },
];

export const VERTICALS: Vertical[] = [
  {
    slug: "idraulici",
    name: "Idraulici e Termoidraulici",
    shortTitle: "Idraulici e Termoidraulici",
    metaTitle: "Centralino AI per Idraulici e Termoidraulici | Assistenza AI",
    metaDescription:
      "Segretaria AI 24/7 per idraulici e caldaisti: risponde mentre sei in cantiere, distingue caldaia in blocco da preventivi e invia indirizzo e urgenza su WhatsApp.",
    h1: "Centralino AI per idraulici e termoidraulici: nessun cliente perso mentre sei in cantiere.",
    inBreve:
      "Il Centralino AI per idraulici risponde sul tuo numero di cellulare o fisso quando hai le mani occupate su un impianto. Chiede al cliente il tipo di guasto (perdita, caldaia in blocco, codice errore), verifica la zona e ti manda subito un riepilogo su WhatsApp così sai chi richiamare per primo.",
    situations: [
      {
        title: "Caldaia in blocco o perdita urgente",
        detail:
          "Raccoglie marca, eventuale codice errore (es. F28) e indirizzo esatto, marcando la scheda come URGENTE.",
      },
      {
        title: "Zone coperte e costo uscita",
        detail:
          "Risponde solo con i comuni che servi e le tariffe che hai approvato tu, filtrando chi è fuori zona.",
      },
      {
        title: "Richieste di preventivo",
        detail:
          "Raccoglie dettagli dell'impianto (bagno, condizionatore, sostituzione caldaia) senza farti perdere 10 minuti al telefono.",
      },
      {
        title: "Sera e weekend",
        detail:
          "Informa il cliente sugli orari di riapertura e registra le emergenze ordinate per il mattino dopo.",
      },
    ],
    whenNotNeeded: [
      "Ricevi poche chiamate al giorno e riesci già a rispondere sempre di persona.",
      "Hai già una segretaria dedicata che copre tutte le linee, pausa pranzo e weekend inclusi.",
      "Vuoi un sistema che emetta preventivi vincolanti in autonomia senza il tuo ok tecnico.",
    ],
    faqs: [
      {
        question: "Funziona anche se uso solo il cellulare personale o aziendale?",
        answer:
          "Sì. Con la deviazione condizionata (*61*) il centralino AI entra in funzione solo se non rispondi dopo 4–5 squilli o se sei già al telefono.",
      },
      {
        question: "Riesce a distinguere una caldaia in blocco da una richiesta di preventivo?",
        answer:
          "Sì. Fa 2–3 domande mirate su marca, codice errore e presenza di acqua calda, classificando subito la chiamata come URGENTE o PREVENTIVO nel riepilogo WhatsApp.",
      },
      {
        question: "Posso impostare i comuni che servo e il diritto di chiamata?",
        answer:
          "Sì. Configuriamo il tuo elenco esatto di comuni e la tariffa di uscita approvata da te, così eviti di richiamare persone fuori zona.",
      },
      {
        question: "Chi chiama sa che sta parlando con un assistente virtuale?",
        answer:
          "Sì, come previsto dall'Art. 50 dell'AI Act europeo, il messaggio iniziale presenta chiaramente l'assistente virtuale della tua ditta in tono naturale e professionale.",
      },
      {
        question: "In quanto tempo ricevo il riepilogo della chiamata?",
        answer:
          "Entro 10 secondi dalla chiusura della telefonata ricevi su WhatsApp o email nome, numero, indirizzo e sintesi del guasto.",
      },
    ],
    defaultSector: "Idraulico",
    defaultNeed: "Centralino AI",
    simulatorKey: "idraulici",
  },
  {
    slug: "elettricisti",
    name: "Elettricisti e Impiantisti",
    shortTitle: "Elettricisti e Impiantisti",
    metaTitle: "Centralino AI per Elettricisti e Impiantisti | Assistenza AI",
    metaDescription:
      "Segretaria virtuale AI per elettricisti: risponde al telefono quando sei in cantiere, filtra zone e urgenze su salvavita o impianti e fissa i sopralluoghi.",
    h1: "Centralino AI per elettricisti e impiantisti: rispondi sempre, anche in cantiere.",
    inBreve:
      "La segretaria AI per elettricisti si attiva automaticamente quando non puoi rispondere sul tuo numero. Distingue un guasto urgente (quadro elettrico, salvavita che scatta, corto circuito) da una richiesta di sopralluogo per fotovoltaico, domotica o rifacimento impianto, inviandoti la scheda completa su WhatsApp.",
    situations: [
      {
        title: "Guasto urgente al quadro o salvavita",
        detail:
          "Identifica subito se manca corrente o scatta il differenziale e segnala la priorità alta sul tuo telefono.",
      },
      {
        title: "Filtro zona e diritto di chiamata",
        detail:
          "Verifica il comune del cliente e comunica con chiarezza la tariffa di uscita che hai stabilito tu.",
      },
      {
        title: "Prenotazione sopralluoghi su calendario",
        detail:
          "Per nuovi impianti, colonnine o fotovoltaico raccoglie dettagli e propone gli slot liberi in agenda.",
      },
      {
        title: "Chiamate fuori orario e festivi",
        detail:
          "Accoglie la richiesta anche la sera o nel weekend senza lasciar cadere il contatto alla concorrenza.",
      },
    ],
    whenNotNeeded: [
      "Lavori esclusivamente su subappalti B2B senza chiamate dirette da privati o aziende.",
      "Hai già un ufficio che risponde a tutte le chiamate in entrata in ogni fascia oraria.",
      "Cerchi un'AI che dia istruzioni tecniche di intervento su impianti sotto tensione.",
    ],
    faqs: [
      {
        question: "Il centralino dà consigli tecnici pericolosi a chi chiama?",
        answer:
          "No, mai. È istruito per raccogliere sintomi, comune e recapito in sicurezza e fissare il tuo ricontatto senza improvvisare diagnosi elettriche.",
      },
      {
        question: "Posso tenere il mio numero di cellulare attuale?",
        answer:
          "Sì, tramite deviazione su mancata risposta (*61*) o su occupato, senza cambiare SIM o operatore.",
      },
      {
        question: "Può filtrare le chiamate fuori dalla mia provincia?",
        answer:
          "Sì. Inseriamo le zone coperte e avvisa subito con cortesia chi chiama da fuori area.",
      },
      {
        question: "Come ricevo le richieste di sopralluogo?",
        answer:
          "Su WhatsApp o email, con nome, numero, indirizzo, tipo di impianto e fascia oraria preferita dal cliente.",
      },
      {
        question: "Quanto tempo richiede l'attivazione?",
        answer:
          "Pochi giorni lavorativi dopo una call iniziale di 15 minuti in cui definiamo zone, servizi e regole.",
      },
    ],
    defaultSector: "Elettricista",
    defaultNeed: "Centralino AI",
    simulatorKey: "elettricisti",
  },
  {
    slug: "officine",
    name: "Autofficine e Carrozzerie",
    shortTitle: "Autofficine e Carrozzerie",
    metaTitle: "Centralino AI per Autofficine e Centri Revisione | Assistenza AI",
    metaDescription:
      "Segretaria AI per autofficine e carrozzerie: prenota tagliandi e revisioni raccogliendo targa, modello e problema senza interrompere il lavoro in officina.",
    h1: "Centralino AI per autofficine e carrozzerie: prenotazioni e tagliandi senza fermare il ponte.",
    inBreve:
      "Il Centralino AI per autofficine risponde alle chiamate ripetitive mentre i meccanici lavorano sui veicoli. Raccoglie targa, modello, tipo di intervento (tagliando, revisione, cambio gomme, spia accesa) e giorno preferito, inviandoti la scheda pronta da confermare in agenda.",
    situations: [
      {
        title: "Prenotazione tagliando con targa e modello",
        detail:
          "Raccoglie subito marca, modello, alimentazione, targa e giorno preferito prima ancora che tu prenda in mano il telefono.",
      },
      {
        title: "Richieste stato auto (\"è pronta?\")",
        detail:
          "Riduce le interruzioni in accettazione registrando targa e contatto per confermare il ritiro via WhatsApp.",
      },
      {
        title: "Cambio gomme e picchi stagionali",
        detail:
          "Assorbe il picco di chiamate di primavera e autunno senza far trovare occupato ai clienti abituali.",
      },
      {
        title: "Urgenze carroattrezzi o auto in panne",
        detail:
          "Segnala subito come urgente chi è fermo per strada o ha una spia critica accesa.",
      },
    ],
    whenNotNeeded: [
      "Hai già un accettatore dedicato a tempo pieno che non perde chiamate nemmeno nei picchi stagionali.",
      "Preferisci gestire solo clienti di passaggio senza prenotazione telefonica.",
      "Vuoi un preventivo ricambi calcolato al centesimo al telefono senza verifica a libretto.",
    ],
    faqs: [
      {
        question: "Riesce a trascrivere correttamente targa e modello dell'auto?",
        answer:
          "Sì, chiede al cliente di confermare targa e modello e ti riporta tutto pulito nella scheda WhatsApp o email.",
      },
      {
        question: "Posso confermare io gli appuntamenti prima di bloccare il ponte?",
        answer:
          "Certamente. Puoi scegliere tra conferma manuale (ricevi la scheda e confermi con un clic) oppure integrazione diretta con Google Calendar.",
      },
      {
        question: "Funziona anche con il numero fisso dell'officina?",
        answer:
          "Sì, è compatibile con linee fisse, VoIP e cellulari aziendali senza cambiare numero.",
      },
      {
        question: "Gestisce anche richieste su WhatsApp?",
        answer:
          "Sì, possiamo affiancare al centralino telefonico l'assistente WhatsApp per conferme appuntamento e avviso auto pronta.",
      },
      {
        question: "È conforme all'AI Act europeo?",
        answer:
          "Sì: dichiara sempre all'inizio della chiamata di essere l'assistente virtuale dell'officina (Art. 50 AI Act).",
      },
    ],
    defaultSector: "Officina",
    defaultNeed: "Centralino AI",
    simulatorKey: "officine",
  },
  {
    slug: "studi-professionali",
    name: "Studi Professionali",
    shortTitle: "Studi Professionali",
    metaTitle: "Segreteria AI per Studi Professionali | Dentisti, Commercialisti, Avvocati",
    metaDescription:
      "Segreteria AI conforme GDPR e AI Act per studi dentistici, medici, commercialisti, avvocati e amministratori di condominio: filtro richieste e agenda.",
    h1: "Segreteria AI per studi professionali: filtra le chiamate mentre sei in visita o in riunione.",
    inBreve:
      "La segreteria AI per studi professionali risponde sul numero dello studio quando la segreteria è occupata o fuori orario. Distingue nuovi pazienti/clienti da pratiche già aperte, raccoglie motivo e fascia oraria preferita e prepara la conferma su WhatsApp nel pieno rispetto di GDPR e AI Act.",
    situations: [
      {
        title: "Nuovi pazienti o clienti",
        detail:
          "Raccoglie nome, recapito, tipo di prestazione richiesta e fascia oraria preferita senza far cadere la chiamata.",
      },
      {
        title: "Pausa pranzo, riunioni e fuori orario",
        detail:
          "Copre le fasce in cui la segreteria fisica non risponde, evitando che i nuovi contatti chiamino un altro studio.",
      },
      {
        title: "Filtro pratiche e urgenze",
        detail:
          "Separa le urgenze reali (es. dolore acuto in studio dentistico o guasto condominiale) dalle richieste amministrative.",
      },
      {
        title: "Conformità GDPR e Art. 50 AI Act",
        detail:
          "Trasparenza vocale dichiarata, minimizzazione dei dati e zero utilizzo dei dati per addestrare modelli terzi.",
      },
    ],
    whenNotNeeded: [
      "Lo studio richiede consulenze telefoniche approfondite immediate da parte del professionista alla prima chiamata.",
      "Hai già un team di segreteria su più linee che copre il 100% delle chiamate in ingresso.",
      "Non lavori su appuntamento o gestione telefonica dei clienti.",
    ],
    faqs: [
      {
        question: "È adatto a studi dentistici, medici, commercialisti e avvocati?",
        answer:
          "Sì. Configuriamo il tono formale dello studio e le domande preliminari specifiche per tipo di prestazione, senza mai raccogliere dati sensibili non necessari.",
      },
      {
        question: "Come viene gestita la privacy GDPR?",
        answer:
          "Applichiamo il principio di minimizzazione: raccogliamo solo i dati indispensabili per fissare o richiamare l'appuntamento, con informativa chiara e flussi isolati.",
      },
      {
        question: "Si integra con l'agenda dello studio?",
        answer:
          "Sì, può inviare la richiesta di appuntamento da confermare oppure sincronizzarsi con Google Calendar o il gestionale tramite integrazione dedicata.",
      },
      {
        question: "Possiamo cambiare orari di chiusura e ferie facilmente?",
        answer:
          "Sì: fa parte della nostra assistenza continua in italiano. Ci scrivi un messaggio e aggiorniamo orari e risposte per te.",
      },
      {
        question: "Chi chiama viene informato che parla con un'AI?",
        answer:
          "Sì, sempre all'inizio della telefonata in conformità all'Art. 50 dell'AI Act europeo.",
      },
    ],
    defaultSector: "Studio Professionale",
    defaultNeed: "Centralino AI",
    simulatorKey: "studi-professionali",
  },
  {
    slug: "pmi",
    name: "PMI Italiane",
    shortTitle: "PMI Italiane",
    metaTitle: "Sviluppo e Automazione AI per PMI Italiane | Assistenza AI",
    metaDescription:
      "Automazioni AI concrete per PMI da 5 a 100 dipendenti: lettura fatture passive e DDT, preventivi automatici, integrazione ERP/CRM e assistenza continua.",
    h1: "Sviluppo e automazione AI per PMI italiane: meno data entry manuale, più controllo sui processi.",
    inBreve:
      "Affianchiamo PMI italiane da 5 a 100 dipendenti per eliminare il lavoro manuale ripetitivo tra email, WhatsApp, DDT, fatture passive, preventivi e gestionale. Partiamo sempre da un processo ad alto ROI, lo integriamo nei programmi che usi già e lo seguiamo con assistenza tecnica continua in italiano.",
    situations: [
      {
        title: "Lettura automatica fatture passive e DDT",
        detail:
          "Estrazione strutturata di codici articolo, quantità, prezzi e scadenze da PDF e scansioni verso il tuo gestionale o foglio di controllo.",
      },
      {
        title: "Smistamento email e richieste commerciali",
        detail:
          "Classificazione automatica delle richieste in ingresso, bozze di risposta e inserimento ordinato nel CRM aziendale.",
      },
      {
        title: "Centralino AI e WhatsApp Business",
        detail:
          "Copertura 24/7 per assistenza clienti, richieste ordine e qualifica nuovi contatti B2B.",
      },
      {
        title: "Governance anti Shadow AI",
        detail:
          "Strumenti aziendali controllati e conformi GDPR invece di dipendenti che incollano documenti riservati su chat pubbliche.",
      },
    ],
    whenNotNeeded: [
      "I tuoi processi non sono ancora definiti internamente: prima conviene chiarire il flusso, poi automatizzarlo.",
      "Cerchi una presentazione teorica sull'AI invece di un'automazione funzionante collegata ai tuoi strumenti.",
      "Vuoi sostituire completamente il controllo umano su decisioni legali o contabili critiche.",
    ],
    faqs: [
      {
        question: "Dobbiamo cambiare il gestionale o il CRM che usiamo oggi?",
        answer:
          "No. Progettiamo integrazioni attorno agli strumenti che la tua azienda utilizza già (email, gestionali, CRM, Google Workspace, Microsoft 365, Notion).",
      },
      {
        question: "Da quale processo conviene partire in una PMI?",
        answer:
          "Da quello più ripetitivo e misurabile: di solito smistamento richieste commerciali/centralino, lettura DDT e fatture passive, oppure preparazione bozze preventivi.",
      },
      {
        question: "Come garantite la sicurezza dei dati aziendali?",
        answer:
          "Usiamo ambienti isolati, API aziendali che non addestrano modelli sui tuoi dati e permessi minimi necessari, in linea con GDPR e AI Act.",
      },
      {
        question: "Offrite anche manutenzione dopo il rilascio?",
        answer:
          "Sì, è il cuore del nostro servizio: monitoraggio, aggiornamenti e modifiche rapide in italiano quando cambiano listini, moduli o processi.",
      },
      {
        question: "Come funziona la prima analisi?",
        answer:
          "Una call gratuita di 15 minuti per capire i colli di bottiglia reali e dirti con onestà dove l'AI porta un ritorno concreto e dove non serve.",
      },
    ],
    defaultSector: "PMI",
    defaultNeed: "Automazione PMI",
    simulatorKey: "idraulici",
  },
];

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: INFO_EMAIL,
    areaServed: "IT",
    availableLanguage: "it",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: QUOTES_EMAIL,
        contactType: "sales",
        availableLanguage: "Italian",
        areaServed: "IT",
      },
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "it-IT",
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    email: INFO_EMAIL,
    areaServed: { "@type": "Country", name: "Italy" },
    availableLanguage: "it",
    description:
      "Sviluppo, configurazione e assistenza AI chiavi in mano per PMI, artigiani e studi professionali italiani: centralino AI 24/7 sul numero esistente, WhatsApp AI e automazioni su misura.",
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
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
