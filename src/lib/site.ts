export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.assistenza-ai.it";

export const SITE_NAME = "Assistenza AI";
export const INFO_EMAIL = "info@assistenza-ai.it";
export const QUOTES_EMAIL = "info@assistenza-ai.it";
export const LEGAL_OWNER_NAME = "Diego Simoncini";
export const VAT_NUMBER = "02524780505";
export const LEGAL_BUSINESS_ADDRESS = "Via Capecchi 28, 56026 Pontedera (PI)";

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

export interface FaqGroup {
  group: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    "group": "Telefonia, numero esistente e attivazione",
    "items": [
      {
        "question": "Devo cambiare il mio numero di telefono?",
        "answer": "No. Mantieni il tuo numero fisso o cellulare attuale (TIM, Vodafone, WindTre, Iliad, Fastweb o VoIP): attiviamo la deviazione condizionata (*61* su mancata risposta, *67* su occupato o *62* su non raggiungibile) così l'assistente risponde solo quando non puoi farlo tu."
      },
      {
        "question": "Posso continuare a rispondere io quando sono libero?",
        "answer": "Sì. Il telefono squilla normalmente da te per 15–20 secondi (circa 4–5 squilli). Se sei libero rispondi tu come sempre; solo se non rispondi, sei già al telefono o sei fuori orario subentra automaticamente il Centralino AI."
      },
      {
        "question": "Come disattivo il centralino se voglio spegnerlo per un giorno?",
        "answer": "Puoi disattivare la deviazione in qualsiasi momento in 5 secondi digitando ##61# dal tastierino del cellulare, oppure chiedendoci di modificare orari e regole con un messaggio."
      },
      {
        "question": "In quanto tempo si attiva il sistema?",
        "answer": "Dopo una call iniziale di 15 minuti per raccogliere servizi, comuni coperti, tariffe base e orari, configuriamo e testiamo il centralino insieme a te in pochi giorni lavorativi. Non devi imparare software complicati."
      },
      {
        "question": "Funziona anche se il mio cellulare non prende in cantina o in cantiere?",
        "answer": "Sì. Attivando la deviazione su non raggiungibile (*62*), se sei in un seminterrato, in garage o in una zona senza campo la chiamata passa subito all'assistente AI invece di cadere nel vuoto."
      },
      {
        "question": "Gestisce più clienti che chiamano nello stesso momento?",
        "answer": "Sì. A differenza di un cellulare o di una linea singola che dà segnale di occupato, il Centralino AI risponde a più chiamate simultanee, ideale nei picchi del lunedì mattina o nei mesi di alta stagione."
      }
    ]
  },
  {
    "group": "Qualità della voce, dialetti, errori e limiti tecnici",
    "items": [
      {
        "question": "Cosa succede se il cliente fa una domanda tecnica complessa o chiede un preventivo preciso?",
        "answer": "L'assistente non inventa mai risposte né prezzi non autorizzati. Raccoglie i dettagli richiesti, rassicura il cliente che lo richiamerai tu con una risposta precisa e ti invia subito trascrizione e scheda sintetica su WhatsApp o email."
      },
      {
        "question": "Capisce anche gli accenti regionali, il rumore di fondo o chi parla veloce?",
        "answer": "Sì. I modelli vocali moderni in italiano gestiscono bene gli accenti regionali e il rumore ambientale. In caso di dubbi su dati critici (come un indirizzo, un cognome o una targa), l'assistente è programmato per ripeterli ad alta voce e chiedere conferma al chiamante."
      },
      {
        "question": "Riesce a filtrare il telemarketing e le chiamate di spam?",
        "answer": "Sì. Riconosce proposte commerciali, call center promozionali e chiamate fuori zona o fuori target, chiude educatamente la conversazione e non ti disturba con notifiche inutili su WhatsApp."
      },
      {
        "question": "Come ricevo le richieste raccolte dall'AI?",
        "answer": "Appena termina la chiamata ricevi una scheda ordinata su WhatsApp o email (e volendo anche sul tuo CRM o Google Sheet) con: nome, numero cliccabile, comune/indirizzo, sintesi del problema e priorità (URGENTE o PREVENTIVO)."
      },
      {
        "question": "Posso cambiare orari, ferie, zone coperte o prezzi di uscita nel tempo?",
        "answer": "Sì. Il nostro servizio include assistenza continuativa in italiano: ci mandi un messaggio per segnalare ferie, nuovi servizi o cambio orari e aggiorniamo noi il centralino senza che tu debba mettere mano a configurazioni tecniche."
      }
    ]
  },
  {
    "group": "Costi, ROI e confronto con alternative",
    "items": [
      {
        "question": "Quanto costa un centralino AI per una piccola azienda o un artigiano?",
        "answer": "Il costo dipende dal volume mensile di chiamate e dalle integrazioni scelte (WhatsApp, Google Calendar, CRM o gestionali). In Italia una soluzione chiavi in mano con assistenza continuativa parte tipicamente da fasce accessibili a un singolo artigiano (indicativamente 90–250 €/mese): basta recuperare 1–2 lavori persi al mese per ripagarla."
      },
      {
        "question": "Ci sono vincoli annuali obbligatori o hardware da comprare?",
        "answer": "Non serve acquistare alcun centralino fisico né cambiare smartphone. Lavoriamo su cloud con il tuo numero attuale e condizioni trasparenti concordate prima di partire, senza sorprese in fattura."
      },
      {
        "question": "Meglio una segreteria AI o un call center esterno?",
        "answer": "Una segreteria AI costa in media il 60–75% in meno di un call center esterno, copre 24/7 (inclusi sera e weekend) e segue regole tecniche precise sul tuo mestiere. Il call center umano resta preferibile solo se gestisci trattative complesse o reclami ad alta tensione emotiva che richiedono discrezionalità umana."
      },
      {
        "question": "Quanto tempo mi fa risparmiare l'automazione su WhatsApp e preventivi?",
        "answer": "Per un'azienda che gestisce 15–25 richieste di preventivo al mese, raccogliere dati in automatico e generare bozze dal tuo listino libera tipicamente 12–16 ore al mese di lavoro d'ufficio e riduce i tempi di risposta da giorni a poche ore."
      }
    ]
  },
  {
    "group": "Normativa (AI Act Art. 50, GDPR) e servizi PMI",
    "items": [
      {
        "question": "Chi chiama capisce che sta parlando con un'AI? È obbligatorio dirlo?",
        "answer": "Sì, ed è un obbligo di legge: dal 2 agosto 2026 l'Articolo 50 dell'AI Act europeo impone di informare chiaramente chi interagisce con un sistema di intelligenza artificiale. I nostri assistenti si presentano sempre in modo naturale e trasparente all'inizio della chiamata."
      },
      {
        "question": "Come sono gestiti i dati dei clienti secondo il GDPR?",
        "answer": "Configuriamo ogni flusso nel rispetto del GDPR: principio di minimizzazione (raccogliamo solo i dati necessari a ricontattare il cliente), informativa chiara, nessuna rivendita dei contatti e nessun riutilizzo dei tuoi dati aziendali per addestrare modelli esterni."
      },
      {
        "question": "È adatto anche a studi medici, dentistici o commercialisti con dati riservati?",
        "answer": "Sì. Per gli studi sanitari e professionali configuriamo l'assistente per raccogliere solo dati organizzativi (nome, recapito, tipo di appuntamento o richiesta di richiamata), evitando di chiedere o registrare diagnosi cliniche o dati sensibili non necessari al telefono."
      },
      {
        "question": "Fate solo centralini telefonici o anche automazioni AI su misura per PMI?",
        "answer": "Entrambi. Oltre a Centralino AI e WhatsApp AI per artigiani e studi, sviluppiamo automazioni AI su misura per PMI (lettura automatica di fatture passive e DDT, bozze preventivi da listino, smistamento email e integrazioni con gestionali/CRM esistenti)."
      },
      {
        "question": "Posso vedere una demo realistica prima di decidere?",
        "answer": "Sì. Puoi provare subito il Simulatore Centralino AI e il Calcolatore ROI qui sul sito, oppure prenotare una demo gratuita di 15 minuti in cui testiamo uno scenario reale calibrato sul tuo settore."
      }
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);

export const VERTICALS: Vertical[] = [
  {
    slug: "idraulici",
    name: "Idraulici e Termoidraulici",
    shortTitle: "Idraulici e Termoidraulici",
    metaTitle: "Centralino AI per Idraulici e Termoidraulici",
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
    metaTitle: "Centralino AI per Elettricisti e Impiantisti",
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
    metaTitle: "Centralino AI per Autofficine e Centri Revisione",
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
    metaTitle: "Segreteria AI per Commercialisti, Avvocati e Studi",
    metaDescription: "Segreteria AI conforme GDPR e AI Act per commercialisti, avvocati, consulenti del lavoro e amministratori di condominio: filtro pratiche e agenda.",
    h1: "Segreteria AI per studi professionali: filtra le chiamate mentre sei in riunione o in udienza.",
    inBreve:
      "La segreteria AI per studi professionali (commercialisti, avvocati, consulenti del lavoro, amministratori di condominio) risponde sul numero dello studio quando sei in riunione o fuori orario. Distingue nuovi clienti da pratiche aperte, raccoglie motivo e fascia oraria e invia il riepilogo nel rispetto di GDPR e AI Act. Per ambulatori e cliniche vedi anche la pagina dedicata agli studi medici e dentistici.",
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
    metaTitle: "Sviluppo e Automazione AI per PMI Italiane",
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
  {
    "slug": "caldaie-climatizzazione",
    "name": "Caldaie, Clima e Termotecnici",
    "shortTitle": "Caldaie, Clima e Termotecnici",
    "metaTitle": "Centralino AI per Centri Caldaie, Clima e Termotecnici",
    "metaDescription": "Gestisci i picchi di ottobre e luglio senza linee intasate: il Centralino AI per caldaisti e climatizzazione filtra guasti, bollino blu e zone coperte.",
    "h1": "Centralino AI per centri assistenza caldaie e climatizzazione: zero linee intasate nei picchi stagionali.",
    "inBreve": "Il Centralino AI per centri assistenza caldaie e climatizzazione risponde simultaneamente a tutte le chiamate durante i picchi di ottobre-novembre (accensione riscaldamento) e giugno-luglio (guasti condizionatori). Raccoglie marca dell'impianto, codice errore sul display, comune e tipo di richiesta (guasto urgente vs manutenzione annuale/bollino blu), inviando la scheda ordinata su WhatsApp o gestionale senza farti cambiare numero.",
    "situations": [
      {
        "title": "Picco accensione caldaie (ottobre–novembre)",
        "detail": "risponde anche a 5 clienti contemporaneamente quando la linea in ufficio è occupata, raccogliendo marca (Vaillant, Baxi, Ariston, Immergas, Riello), codice errore e indirizzo."
      },
      {
        "title": "Manutenzione annuale e bollino blu",
        "detail": "distingue subito un controllo fumi programmabile da una caldaia in blocco con casa fredda, proponendo le fasce orarie disponibili della settimana."
      },
      {
        "title": "Emergenza climatizzatori e pompe di calore in estate",
        "detail": "raccoglie tipo di problema (non raffredda, perde acqua dallo split, errore scheda) e filtra le marche o le zone che non tratti."
      },
      {
        "title": "Conferma appuntamento e riduzione assenze",
        "detail": "via WhatsApp AI ricorda al cliente giorno e fascia oraria del tecnico, evitando uscite a vuoto."
      }
    ],
    "whenNotNeeded": [
      "Sei un tecnico singolo con pochi clienti fissi e riesci già a rispondere a tutte le telefonate anche a ottobre e luglio.",
      "Lavori solo su impianti industriali complessi gestiti tramite ticket portale B2B e non ricevi telefonate da privati o condomini.",
      "Vuoi che l'AI faccia diagnosi tecniche o preventivi di sostituzione senza il tuo controllo."
    ],
    "faqs": [
      {
        "question": "Regge i picchi di chiamate di ottobre e luglio quando chiamano 4–5 clienti insieme?",
        "answer": "Sì. A differenza di una linea singola o di una segretaria in ufficio, il Centralino AI gestisce più chiamate simultanee senza mai dare segnale di occupato."
      },
      {
        "question": "Posso filtrare solo le marche di caldaie o condizionatori di cui siamo centro assistenza?",
        "answer": "Sì. Impostiamo l'elenco esatto delle marche autorizzate e dei comuni coperti: se un chiamante chiede un marchio che non gestisci, l'assistente glielo comunica subito con cortesia."
      },
      {
        "question": "Raccoglie il codice errore della caldaia e distingue tra bollino blu e blocco urgente?",
        "answer": "Sì. Chiede sempre se l'impianto è fermo o se si tratta di manutenzione ordinaria, annotando marca, modello e codice errore sul display nella scheda WhatsApp o email."
      },
      {
        "question": "Funziona in affiancamento alla nostra segretaria d'ufficio?",
        "answer": "Sì. Puoi attivarlo con deviazione su occupato (*67*) o mancata risposta (*61*), così interviene solo quando l'ufficio è saturo, in pausa pranzo o fuori orario."
      }
    ],
    "defaultSector": "Artigiano",
    "defaultNeed": "Centralino AI",
    "simulatorKey": "idraulici"
  },
  {
    "slug": "studi-medici-dentistici",
    "name": "Studi Medici, Dentistici e Fisioterapia",
    "shortTitle": "Studi Medici, Dentistici e Fisioterapia",
    "metaTitle": "Segreteria AI per Studi Dentistici, Medici e Fisioterapia",
    "metaDescription": "Segreteria AI conforme GDPR e AI Act per studi dentistici e medici: gestisce prenotazioni, spostamenti visite e promemoria WhatsApp anti no-show 24/7.",
    "h1": "Segreteria AI per studi medici, dentistici e fisioterapia: meno chiamate perse in reception, meno visite saltate.",
    "inBreve": "La Segreteria AI per studi medici, dentistici e fisioterapia risponde alle chiamate quando la segreteria è impegnata con i pazienti al desk, in pausa pranzo o fuori orario. Gestisce richieste di prima visita, igiene, spostamenti appuntamento e informazioni su orari e parcheggio, nel pieno rispetto del GDPR (senza raccogliere diagnosi cliniche non necessarie) e dell'Art. 50 dell'AI Act.",
    "situations": [
      {
        "title": "Reception occupata con pazienti in sala d'attesa",
        "detail": "la telefonata non squilla a vuoto mentre la segretaria sta facendo accettazione o fatturazione; l'AI raccoglie nome, recapito e prestazione richiesta."
      },
      {
        "title": "Spostamento e disdetta appuntamenti (anche la sera)",
        "detail": "il paziente che avvisa alle 20:30 di non poter venire il giorno dopo lascia subito la segnalazione, così la mattina recuperi lo slot libero."
      },
      {
        "title": "Filtro urgenze dentistiche o fisioterapiche",
        "detail": "distingue un controllo di routine da un dolore acuto o un dente rotto, segnalando subito l'urgenza alla segreteria."
      },
      {
        "title": "Promemoria automatici su WhatsApp anti no-show",
        "detail": "invia conferme 24–48 ore prima della visita per ridurre drasticamente gli appuntamenti saltati senza preavviso."
      }
    ],
    "whenNotNeeded": [
      "Hai già un team di reception dedicato con più linee telefoniche che risponde entro 3 squilli in tutte le fasce orarie.",
      "Cerchi un software che fornisca consigli medici, triage clinici o lettura di referti (l'AI svolge solo segreteria organizzativa).",
      "Gestisci tutte le prenotazioni esclusivamente tramite CUP pubblico o portali esterni senza telefono diretto."
    ],
    "faqs": [
      {
        "question": "Come gestisce la privacy dei pazienti e i dati sanitari (GDPR)?",
        "answer": "La segreteria AI è configurata con principio di minimizzazione: raccoglie solo dati organizzativi (nome, telefono, tipo di appuntamento richiesto come \"prima visita\" o \"igiene\", fascia oraria preferita) evitando di chiedere dettagli clinici o diagnosi. I dati non vengono mai usati per addestrare modelli esterni."
      },
      {
        "question": "I pazienti si trovano a disagio a parlare con un assistente AI?",
        "answer": "L'assistente si presenta chiaramente all'inizio della chiamata (come previsto dall'Art. 50 dell'AI Act) con tono calmo, educato e diretto. I pazienti apprezzano di trovare risposta immediata per spostare una visita o lasciare richiesta invece di trovare occupato per ore."
      },
      {
        "question": "Può collegarsi al calendario dello studio?",
        "answer": "Sì, possiamo integrarlo con Google Calendar oppure inviare ogni richiesta ordinata via email/WhatsApp alla segretaria che conferma lo slot sul gestionale medico (es. AlfaDocs, OrisDent, MioDottore)."
      },
      {
        "question": "Riduce davvero i pazienti che non si presentano (no-show)?",
        "answer": "Abbinando la Segreteria AI ai promemoria automatici su WhatsApp 24 ore prima della visita con conferma/spostamento rapido, si recuperano gli slot scoperti prima che la poltrona resti vuota."
      }
    ],
    "defaultSector": "Studio Professionale",
    "defaultNeed": "Centralino AI",
    "simulatorKey": "studi-professionali"
  },
  {
    "slug": "imprese-edili-ristrutturazioni",
    "name": "Imprese Edili, Ristrutturazioni e Serramenti",
    "shortTitle": "Imprese Edili, Ristrutturazioni e Serramenti",
    "metaTitle": "Centralino AI per Imprese Edili, Ristrutturazioni e Infissi",
    "metaDescription": "Non perdere richieste di ristrutturazione o infissi mentre sei in cantiere: l'AI filtra provincia, tipo di lavoro e metratura prima del sopralluogo.",
    "h1": "Centralino AI per imprese edili, ristrutturazioni e serramentisti: filtra i curiosi e blocca i sopralluoghi veri.",
    "inBreve": "Il Centralino AI per imprese edili, ristrutturazioni e serramentisti risponde sul tuo numero mentre sei in cantiere o dal fornitore. Prima di farti perdere mezz'ora in auto per un sopralluogo fuori zona o fuori target, raccoglie comune dell'immobile, tipo di intervento (ristrutturazione completa, bagno, tetto, infissi), metratura indicativa e tempistiche, inviandoti una scheda chiara su WhatsApp.",
    "situations": [
      {
        "title": "Qualifica preventiva prima del sopralluogo",
        "detail": "raccoglie tipo di lavoro (bagno, appartamento intero, cappotto, sostituzione finestre), mq indicativi e comune, così richiami prima i lavori in target."
      },
      {
        "title": "Filtro immediato su zone e lavori minimi",
        "detail": "se non fai piccoli ritocchi o non operi fuori provincia, l'assistente lo chiarisce subito con gentilezza risparmiandoti richiamate a vuoto."
      },
      {
        "title": "Raccolta foto e planimetrie su WhatsApp",
        "detail": "dopo la telefonata, il flusso WhatsApp AI invita il cliente a inviare 2–3 foto o la piantina per arrivare preparato al preventivo."
      },
      {
        "title": "Supporto bozze preventivi",
        "detail": "per voci ricorrenti (es. sostituzione finestre, rifacimento bagno standard) prepara una bozza strutturata dal tuo listino da revisionare in pochi minuti."
      }
    ],
    "whenNotNeeded": [
      "Lavori esclusivamente con gare d'appalto pubbliche o con 2–3 general contractor fissi senza contatti da privati o amministratori.",
      "Hai già un ufficio tecnico commerciale con una persona dedicata a filtrare tutte le chiamate in ingresso.",
      "Preferisci fissare sopralluoghi di persona per ogni chiamata senza alcun filtro preliminare."
    ],
    "faqs": [
      {
        "question": "Può filtrare chi chiama solo per piccoli lavori che la nostra impresa non fa?",
        "answer": "Sì. Definiamo insieme le tue regole (es. solo ristrutturazioni complete, solo sostituzione da 4 infissi in su, solo provincia X): l'AI informa subito chi chiama se il lavoro rientra nel vostro ambito."
      },
      {
        "question": "Funziona anche se siamo tutto il giorno in cantiere con campo scarso o mani occupate?",
        "answer": "Sì. Con la deviazione condizionata su non raggiungibile (*62*) e mancata risposta (*61*), anche quando il telefono non prende in un seminterrato la chiamata viene risposta subito dall'AI."
      },
      {
        "question": "Può chiedere al cliente di mandarci foto o planimetria su WhatsApp?",
        "answer": "Sì. Al termine della chiamata il sistema può inviare un messaggio WhatsApp al cliente chiedendo foto dello stato attuale o metratura, così hai tutto pronto prima di richiamarlo."
      },
      {
        "question": "Emette preventivi da sola al telefono?",
        "answer": "Mai. L'AI raccoglie i dati tecnici di base e, se vuoi, ti prepara una bozza interna sul tuo listino, ma ogni cifra verso il cliente passa sempre dalla tua approvazione."
      }
    ],
    "defaultSector": "Artigiano",
    "defaultNeed": "Centralino AI",
    "simulatorKey": "idraulici"
  },
];

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/app-icon.svg`,
    email: INFO_EMAIL,
    taxID: VAT_NUMBER,
    vatID: `IT${VAT_NUMBER}`,
    areaServed: { "@type": "Country", name: "Italy" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: INFO_EMAIL,
      availableLanguage: ["Italian"],
    },
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
    taxID: VAT_NUMBER,
    vatID: `IT${VAT_NUMBER}`,
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

export const HOME_FAQS = FAQ_ITEMS.slice(0, 6);

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export function getServiceJsonLd(opts: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Italy" },
  };
}
