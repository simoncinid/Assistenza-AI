import { SITE_NAME, SITE_URL, type FaqItem } from "./site";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface GuideSection {
  heading: string;
  blocks: GuideBlock[];
}

export interface GuideItem {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keyword: string;
  publishedAt: string;
  readingTime: string;
  inBreve: string;
  sections: GuideSection[];
  faqs: FaqItem[];
  relatedPaths: string[];
}

export const GUIDES: GuideItem[] = [
  {
    "slug": "centralino-ai-idraulici-artigiani",
    "metaTitle": "Centralino AI per idraulici e artigiani: costi e come va",
    "metaDescription": "Quanto costa un centralino AI per idraulici e artigiani, come funziona sul tuo numero con *61*, obbligo AI Act Art. 50 e quando conviene davvero.",
    "h1": "Centralino AI per idraulici e artigiani: costi reali, come funziona e quando conviene",
    "keyword": "centralino AI idraulici, segretaria AI artigiani, centralino automatico idraulico, costi centralino AI Italia",
    "publishedAt": "2026-11-27",
    "readingTime": "6 min",
    "inBreve": "Un centralino AI per idraulici e artigiani è un assistente vocale in italiano che risponde al tuo numero fisso o cellulare solo quando non puoi farlo (tramite deviazione *61*). Raccoglie tipo di guasto, indirizzo, marca dell'impianto e urgenza, poi ti invia un riepilogo su WhatsApp. In Italia il costo tipico di un servizio chiavi in mano con assistenza varia tra 90 e 250 €/mese, ripagato recuperando anche solo 1–2 interventi persi al mese.",
    "sections": [
      {
        "heading": "1. Come funziona nella pratica (senza cambiare numero)",
        "blocks": [
          {
            "type": "p",
            "text": "Molti artigiani pensano che attivare un centralino automatico significhi cambiare numero sui furgoni, su Google Maps e sui biglietti da visita. Non è così."
          },
          {
            "type": "p",
            "text": "Il funzionamento standard su linea mobile italiana (TIM, Vodafone, WindTre, Iliad, Fastweb) o linea fissa VoIP si basa sulla deviazione condizionata su mancata risposta (*61*) o su occupato (*67*):"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Il cliente chiama il tuo numero di sempre.",
              "Il telefono squilla normalmente da te per 15–20 secondi (circa 4–5 squilli).",
              "Se sei sotto un lavandino, su una scala o già in chiamata, la telefonata passa automaticamente al Centralino AI.",
              "L'assistente risponde in italiano naturale, dichiara subito di essere un assistente automatico (come richiesto dall'Art. 50 dell'AI Act europeo, in vigore dal 2 agosto 2026) e fa 3 domande mirate: qual è il problema, in che comune/via si trova il cliente e se c'è un'urgenza immediata.",
              "Appena la chiamata termina, ricevi su WhatsApp o email una scheda ordinata: nome, numero, indirizzo, sintesi del guasto e tag URGENTE oppure PREVENTIVO."
            ]
          },
          {
            "type": "p",
            "text": "Puoi testare dal vivo il dialogo e la scheda WhatsApp nel [Simulatore Centralino AI](/#simulatore)."
          }
        ]
      },
      {
        "heading": "2. Costi reali in Italia nel 2026: fai-da-te, SaaS e servizio chiavi in mano",
        "blocks": [
          {
            "type": "p",
            "text": "Non tutti i centralini AI costano uguale. Ecco le tre strade reali sul mercato italiano e cosa includono davvero:"
          },
          {
            "type": "table",
            "headers": [
              "Soluzione",
              "Costo indicativo mensile",
              "Setup iniziale",
              "Cosa devi fare tu",
              "Adatta a"
            ],
            "rows": [
              [
                "Fai-da-te (API vocali + automazioni)",
                "30–70 € (solo consumo minuti/API)",
                "Tempo tecnico (15–30 ore)",
                "Configuri prompt, telefonia SIP, GDPR e manutenzione",
                "Solo chi ha competenze tecniche interne"
              ],
              [
                "Piattaforma SaaS self-service",
                "50–120 €/mese",
                "0–200 €",
                "Scrivi gli script, aggiorni orari e risolvi problemi da solo",
                "Micro-attività che hanno tempo di gestire il pannello"
              ],
              [
                "Servizio chiavi in mano con assistenza (es. Assistenza AI)",
                "90–250 €/mese (in base a volumi e integrazioni)",
                "Setup personalizzato una tantum",
                "Niente: call iniziale di 15 min, poi gestiamo e aggiorniamo noi",
                "Idraulici, elettricisti, officine e PMI che vogliono zero pensieri"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Attenzione ai costi nascosti delle soluzioni \"a consumo puro\": alcune piattaforme fatturano separatamente numero VoIP italiano, minuti di trascrizione, sintesi vocale e invio WhatsApp Business. Chiedi sempre il costo totale stimato sui tuoi minuti medi mensili."
          }
        ]
      },
      {
        "heading": "3. Quando conviene (e quando NON conviene)",
        "blocks": [
          {
            "type": "p",
            "text": "Un centralino AI conviene quando il valore di un singolo lavoro recuperato supera il canone mensile. Esempio concreto per un termoidraulico:"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Valore medio di un intervento caldaia o riparazione perdita: 140–250 € (sostituzione caldaia: 1.800–2.800 €).",
              "Chiamate perse in cantiere o pausa pranzo: anche solo 2 al giorno = circa 40 chiamate perse al mese.",
              "Se anche solo il 10% di chi non riceve risposta chiama il numero successivo su Google (in realtà per le emergenze idrauliche la percentuale supera il 60%), stai perdendo almeno 4–10 lavori al mese.",
              "Recuperando 1 solo intervento al mese il centralino è già in pari; dal secondo in poi è margine netto."
            ]
          },
          {
            "type": "p",
            "text": "Puoi inserire i tuoi numeri reali nel [Calcolatore Chiamate Perse & ROI](/#calcolatore-roi)."
          },
          {
            "type": "p",
            "text": "Quando NON ti conviene:"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Ricevi meno di 3–4 chiamate al giorno e riesci sempre a rispondere tu o un socio.",
              "Hai già una segretaria in ufficio che copre tutte le linee, compresa pausa pranzo e fuori orario.",
              "Lavori esclusivamente su appalti fissi con 2–3 committenti e non cerchi nuovi clienti da Google o passaparola."
            ]
          }
        ]
      },
      {
        "heading": "4. Cosa chiedono davvero i clienti italiani al telefono (esempio idraulico)",
        "blocks": [
          {
            "type": "p",
            "text": "Il segreto perché il cliente non riattacchi non è la \"voce fantascientifica\", ma velocità e concretezza:"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Caldaia in blocco: l'AI chiede marca (es. Vaillant, Baxi, Immergas), eventuale codice errore sul display (es. F28) e comune.",
              "Perdita d'acqua: chiede se l'acqua è già stata chiusa dal rubinetto centrale e l'indirizzo esatto, marcando la scheda URGENTE.",
              "Fuori zona: se il cliente chiama da un comune che non copri, l'AI glielo dice subito con cortesia, evitandoti una richiamata inutile a fine giornata."
            ]
          },
          {
            "type": "p",
            "text": "Approfondisci le pagine dedicate per settore: [Centralino AI per Idraulici](/settori/idraulici), [Centralino AI per Elettricisti](/settori/elettricisti) e [Centralino AI per Autofficine](/settori/officine), oppure scopri il servizio completo su [Centralino AI 24/7](/servizi/centralino-ai)."
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "Quanto costa al mese un centralino AI per un idraulico o un artigiano?",
        "answer": "In Italia un centralino AI chiavi in mano configurato e seguito nel tempo costa indicativamente tra 90 e 250 € al mese in base al numero di chiamate e alle integrazioni (WhatsApp, Google Calendar). Le piattaforme self-service partono da 50–120 €/mese ma richiedono configurazione e manutenzione autonome."
      },
      {
        "question": "Devo cambiare numero di telefono o operatore per attivare il centralino AI?",
        "answer": "No. Si usa la deviazione condizionata (*61* su mancata risposta o *67* su occupato) sul tuo numero TIM, Vodafone, WindTre, Iliad o VoIP attuale. Il cliente continua a chiamare il numero che conosce già."
      },
      {
        "question": "È legale usare un centralino AI in Italia con l'AI Act e il GDPR?",
        "answer": "Sì, a patto di rispettare due regole: l'Articolo 50 dell'AI Act europeo (in vigore dal 2 agosto 2026), che richiede di informare chiaramente il chiamante che sta parlando con un'AI all'inizio della chiamata, e il GDPR per la raccolta minima e protetta dei dati."
      },
      {
        "question": "Se il cliente chiede un prezzo esatto al telefono, l'AI lo inventa?",
        "answer": "No. L'assistente comunica solo le informazioni che hai approvato tu (ad esempio il diritto di chiamata o i comuni coperti). Per preventivi tecnici raccoglie i dettagli e ti passa la scheda per richiamare il cliente."
      }
    ],
    "relatedPaths": [
      "/settori/idraulici",
      "/settori/elettricisti",
      "/settori/officine",
      "/servizi/centralino-ai",
      "/#simulatore",
      "/#calcolatore-roi"
    ]
  },
  {
    "slug": "come-non-perdere-chiamate-cantiere-officina",
    "metaTitle": "Come non perdere chiamate in cantiere o officina: guida",
    "metaDescription": "Perdi clienti mentre sei in cantiere o sotto un ponte in officina? Confronto pratico tra segreteria tradizionale, SMS automatico, call center e AI.",
    "h1": "Come non perdere chiamate in cantiere o in officina: guida pratica per artigiani",
    "keyword": "non perdere chiamate in cantiere, gestire chiamate officina, chiamate perse artigiani, deviazione chiamata 61",
    "publishedAt": "2026-11-27",
    "readingTime": "6 min",
    "inBreve": "Per non perdere chiamate mentre lavori in cantiere o in officina esistono 4 soluzioni pratiche: segreteria telefonica classica, SMS automatico su chiamata persa, segreteria umana in outsourcing o Centralino AI con deviazione *61*. La segreteria classica ha il tasso di abbandono più alto (oltre l'80% riattacca senza lasciare messaggi). La combinazione più efficace per artigiani e officine è la risposta immediata via Centralino AI seguita da un riepilogo strutturato su WhatsApp.",
    "sections": [
      {
        "heading": "1. Il costo nascosto delle chiamate perse mentre lavori",
        "blocks": [
          {
            "type": "p",
            "text": "Quando un cliente cerca un idraulico, un elettricista o un'officina su Google Maps, apre i primi 3 risultati in ordine di vicinanza e recensioni. Se il primo numero squilla a vuoto:"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Per un guasto urgente (caldaia spenta, salvavita che scatta, auto ferma), il cliente non aspetta 2 ore: richiama il secondo numero della lista dopo 30 secondi.",
              "Per una richiesta di tagliando, revisione o preventivo, una parte dei clienti lascia perdere o scrive a un concorrente che risponde prima.",
              "A fine giornata ti ritrovi 8–12 chiamate senza risposta con solo un numero sconosciuto: non sai chi era un'urgenza da 300 €, chi voleva solo sapere l'orario e chi era telemarketing."
            ]
          },
          {
            "type": "p",
            "text": "Calcola in 30 secondi quanto vale questo buco per la tua attività con il [Calcolatore Chiamate Perse](/#calcolatore-roi)."
          }
        ]
      },
      {
        "heading": "2. Confronto tra le 4 soluzioni reali per artigiani e officine",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Soluzione",
              "Il cliente ottiene risposta subito?",
              "Raccoglie i dati del lavoro (targa/guasto/zona)?",
              "Filtra lo spam?",
              "Costo mensile tipico"
            ],
            "rows": [
              [
                "Segreteria telefonica classica",
                "No (messaggio registrato)",
                "Quasi mai (la maggior parte riattacca)",
                "No",
                "0 €"
              ],
              [
                "SMS automatico \"ti richiamo dopo\"",
                "Parziale (solo testo)",
                "No, devi comunque richiamare alla cieca",
                "No",
                "0–15 €"
              ],
              [
                "Segretaria part-time / Call center esterno",
                "Solo in fascia oraria",
                "Sì, ma spesso poco tecnica",
                "Sì",
                "350–1.200 €"
              ],
              [
                "Centralino AI + WhatsApp (*61*)",
                "Sì, 24/7 in 2 squilli dopo il mancato ascolto",
                "Sì (targa, indirizzo, codice errore, urgenza)",
                "Sì",
                "90–250 €"
              ]
            ]
          }
        ]
      },
      {
        "heading": "3. Il trucco tecnico che quasi nessuno usa bene: i codici *61* e *67*",
        "blocks": [
          {
            "type": "p",
            "text": "Non serve un centralino fisico in ufficio. Su quasi tutti gli operatori mobili italiani puoi attivare in 10 secondi due deviazioni intelligenti:"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Deviazione su mancata risposta (*61*NUMERO**20#): il tuo telefono squilla per 20 secondi (circa 4–5 squilli). Se sei libero, rispondi tu come sempre. Se non puoi, la chiamata passa automaticamente al backup.",
              "Deviazione su occupato (*67*NUMERO#): se sei già al telefono con un fornitore o un cliente, la seconda chiamata non trova occupato ma viene presa in carico subito.",
              "Disattivazione istantanea (##61# e ##67#): in qualsiasi momento puoi spegnerla dal tastierino del telefono."
            ]
          },
          {
            "type": "p",
            "text": "(Nota: la sintassi esatta del tempo di squillo può variare leggermente tra TIM, Vodafone, WindTre e Iliad; con il servizio chiavi in mano la verifichiamo insieme a te in fase di attivazione.)"
          }
        ]
      },
      {
        "heading": "4. Due flussi pratici pronti da copiare",
        "blocks": [
          {
            "type": "p",
            "text": "Flusso A — Officina meccanica / carrozzeria (tagliandi e revisioni):"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Sei sotto il ponte e non rispondi dopo 4 squilli.",
              "Il [Centralino AI per Autofficine](/settori/officine) risponde, chiede targa o modello auto, tipo di intervento (tagliando, revisione, spia accesa, gomme) e fascia preferita.",
              "Ti arriva su WhatsApp la scheda pronta. In pausa pranzo confermi lo slot con un clic, oppure il sistema invia già una conferma via [Automazione WhatsApp AI](/servizi/automazione-whatsapp-ai)."
            ]
          },
          {
            "type": "p",
            "text": "Flusso B — Elettricista o idraulico in cantiere:"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Hai le mani sporche o sei su un quadro elettrico.",
              "Il [Centralino AI per Elettricisti](/settori/elettricisti) o [Idraulici](/settori/idraulici) filtra lo spam telefonico, esclude chi è fuori provincia e raccoglie indirizzo + gravità del guasto.",
              "Appena scendi dalla scala vedi su WhatsApp solo le chiamate vere, già ordinate per priorità."
            ]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "Perché la segreteria telefonica tradizionale non funziona più per gli artigiani?",
        "answer": "La grande maggioranza di chi chiama un artigiano o un'officina non lascia messaggi in segreteria perché teme di non essere richiamato in tempo. Passa subito al contatto successivo trovato su Google."
      },
      {
        "question": "Cos'è il codice *61* e funziona con il mio cellulare?",
        "answer": "*61* è il codice GSM standard per deviare una chiamata solo quando non rispondi entro un certo numero di secondi (es. 15–20 secondi). Funziona sui principali operatori italiani (TIM, Vodafone, WindTre, Iliad) e ti permette di mantenere il tuo numero attuale."
      },
      {
        "question": "Come distinguo le chiamate urgenti dal telemarketing senza rispondere in cantiere?",
        "answer": "Un Centralino AI filtra automaticamente le chiamate commerciali e ti notifica su WhatsApp solo le richieste reali di clienti, indicando già se si tratta di un guasto urgente o di un preventivo programmabile."
      },
      {
        "question": "Posso rispondere io quando sono libero e usare l'AI solo quando sono occupato?",
        "answer": "Sì. Con la deviazione condizionata l'assistente entra in azione solo se non rispondi entro 4–5 squilli, se sei già in chiamata o negli orari serali e festivi che scegli tu."
      }
    ],
    "relatedPaths": [
      "/settori/idraulici",
      "/settori/officine",
      "/settori/elettricisti",
      "/servizi/centralino-ai",
      "/servizi/automazione-whatsapp-ai",
      "/#calcolatore-roi"
    ]
  },
  {
    "slug": "preventivi-automatici-ai-pmi-artigiani",
    "metaTitle": "Preventivi automatici con AI per PMI e artigiani: flusso",
    "metaDescription": "Come preparare bozze di preventivi in 2 minuti con l'AI per PMI e artigiani: flusso reale da WhatsApp/email al PDF, errori da evitare e tempi di ritorno.",
    "h1": "Preventivi automatici con AI per PMI e artigiani: flusso reale e tempi di ritorno",
    "keyword": "preventivi automatici AI, automazione preventivi PMI, generare preventivi con AI artigiani, ridurre tempi preventivi",
    "publishedAt": "2026-11-27",
    "readingTime": "6 min",
    "inBreve": "Un sistema di preventivi automatici con AI per PMI e artigiani non \"inventa\" prezzi al posto tuo: raccoglie i dati del cliente da telefonate, email o messaggi WhatsApp, li incrocia con il tuo listino e i tuoi preventivi storici, e genera in pochi secondi una bozza pronta da approvare (PDF o gestionale). Il titolare mantiene sempre l'ok finale, riducendo da 30–45 minuti a 3–5 minuti il tempo per ogni preventivo e aumentando il tasso di chiusura.",
    "sections": [
      {
        "heading": "1. Il vero collo di bottiglia nelle PMI e nelle aziende artigiane italiane",
        "blocks": [
          {
            "type": "p",
            "text": "In molte PMI (impiantistica, serramenti, edilizia, manutenzioni B2B, officine, forniture) il problema non è trovare richieste, ma rispondere in tempo con un preventivo preciso:"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Le richieste arrivano sparse tra chiamate, vocali WhatsApp, foto di targhette/impianti ed email.",
              "Il titolare o il tecnico prepara i preventivi la sera dopo cena o il sabato mattina, spesso 4–7 giorni dopo la richiesta.",
              "Nel frattempo il cliente ha già firmato con chi gli ha mandato il preventivo il giorno stesso."
            ]
          },
          {
            "type": "p",
            "text": "Secondo i dati 2026 dell'Osservatorio Artificial Intelligence del Politecnico di Milano, il 71% delle grandi imprese italiane usa già l'AI contro solo l'8% delle PMI — ma proprio sui processi ripetitivi d'ufficio (preventivi, lettura fatture passive, DDT) le PMI ottengono il ritorno più rapido."
          }
        ]
      },
      {
        "heading": "2. Il flusso reale in 5 passaggi (con controllo umano obbligatorio)",
        "blocks": [
          {
            "type": "p",
            "text": "Ecco come funziona un'automazione preventivi costruita bene su misura (senza rischi di errori di prezzo):"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Acquisizione strutturata: il cliente invia richiesta via [Centralino AI](/servizi/centralino-ai), [WhatsApp AI](/servizi/automazione-whatsapp-ai) o email. Se mancano dati essenziali (es. metri quadri, modello caldaia, comune, foto del quadro), l'assistente li chiede subito al cliente.",
              "Estrazione dati: l'AI legge testo, note vocali e allegati (es. computi brevi, foto targhetta) e compila una scheda pulita.",
              "Incrocio con il tuo listino reale: il sistema consulta esclusivamente il tuo listino materiali/manodopera (Excel, Google Sheets o gestionale) e le tue regole di margine e diritto di chiamata.",
              "Generazione della bozza: crea automaticamente la bozza di preventivo nel tuo formato (Google Docs, PDF aziendale o bozza su gestionale/Fatture in Cloud).",
              "Revisione e invio in 1 clic: ricevi una notifica, controlli le voci in 2–3 minuti, correggi eventuali sconti o note tecniche e invii."
            ]
          },
          {
            "type": "p",
            "text": "Regola d'oro anti-errori: nei lavori tecnici non si lascia mai l'AI inviare prezzi vincolanti senza revisione umana. L'AI fa il 90% del lavoro noioso (raccolta, calcolo voci, impaginazione); tu metti l'occhio tecnico e la firma."
          }
        ]
      },
      {
        "heading": "3. Prima e dopo: confronto tempi e tempi di ritorno (ROI)",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Voce",
              "Processo manuale tradizionale",
              "Con flusso AI (bozza + ok umano)"
            ],
            "rows": [
              [
                "Raccolta dati mancanti dal cliente",
                "2–3 telefonate o chat frammentate",
                "Automatica via WhatsApp / telefono"
              ],
              [
                "Tempo medio per preparare 1 preventivo",
                "30–45 minuti (spesso la sera)",
                "3–5 minuti di revisione"
              ],
              [
                "Tempo di invio al cliente",
                "2–7 giorni lavorativi",
                "Entro poche ore dalla richiesta"
              ],
              [
                "Tempo risparmiato (su 25 preventivi/mese)",
                "—",
                "12–16 ore/mese di lavoro d'ufficio"
              ],
              [
                "Impatto sul tasso di accettazione",
                "Più basso per ritardi di risposta",
                "Più alto grazie alla rapidità e chiarezza"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Tempi di ritorno indicativi: per una PMI o un'azienda artigiana che prepara almeno 15–25 preventivi al mese, tra ore tecniche liberate e 1–2 commesse vinte in più grazie alla risposta rapida, l'investimento in un flusso su misura si ripaga tipicamente in 2–4 mesi."
          },
          {
            "type": "p",
            "text": "Scopri come costruiamo questi flussi collegati ai programmi che usi già nella pagina [Sviluppo AI per PMI](/servizi/sviluppo-ai-pmi) e nella pagina dedicata alle [PMI Italiane](/settori/pmi)."
          }
        ]
      },
      {
        "heading": "4. Quando ha senso automatizzare i preventivi (e quando no)",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Ha senso se: hai un listino o una logica ricorrente (es. installazione caldaie/climatizzatori, serramenti, manutenzione programmata, tagliandi, impianti elettrici standard, forniture B2B) e perdi ore ogni settimana a copiare dati tra WhatsApp, Excel e PDF.",
              "Non ha senso se: ogni progetto è un'opera unica da 100.000 € che richiede sopralluogo ingegneristico complesso e computo metrico interamente su misura (in quel caso l'AI serve meglio per qualificare il cliente prima del sopralluogo, non per calcolare il preventivo)."
            ]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "L'AI invia il preventivo al cliente da sola rischiando di sbagliare prezzo?",
        "answer": "No. Nei flussi ben progettati l'AI prepara la bozza usando solo il tuo listino e le tue regole, poi la invia a te per l'approvazione finale prima dell'invio al cliente."
      },
      {
        "question": "Devo cambiare il mio gestionale o i miei listini Excel?",
        "answer": "No. L'automazione si collega ai file che usi già (Excel, Google Sheets, PDF, gestionali compatibili) senza stravolgere il modo di lavorare dell'ufficio."
      },
      {
        "question": "Funziona anche se i clienti mandano vocali WhatsApp o foto?",
        "answer": "Sì. Il flusso può trascrivere automaticamente i messaggi vocali WhatsApp ed estrarre dati da foto di targhette o documenti allegati, organizzandoli nella scheda cliente."
      },
      {
        "question": "In quanto tempo si vede il ritorno dell'investimento?",
        "answer": "Per chi gestisce 15–25 preventivi al mese, il risparmio medio è di 12–16 ore al mese di lavoro amministrativo, oltre ai preventivi vinti rispondendo prima dei concorrenti: il ritorno tipico è tra 2 e 4 mesi."
      }
    ],
    "relatedPaths": [
      "/servizi/sviluppo-ai-pmi",
      "/servizi/automazione-whatsapp-ai",
      "/settori/pmi",
      "/settori/idraulici",
      "/settori/elettricisti",
      "/#calcolatore-roi"
    ]
  },
  {
    "slug": "segreteria-ai-vs-call-center-pmi",
    "metaTitle": "Segreteria AI vs call center esterno per PMI: costi e dati",
    "metaDescription": "Confronto diretto tra segreteria AI 24/7 e call center esterno per PMI italiane: costi reali al mese, copertura serale, qualità tecnica e conversione lead.",
    "h1": "Segreteria AI vs call center esterno per PMI italiane: confronto costi e conversioni",
    "keyword": "segreteria AI vs call center, segretaria virtuale AI o call center, costi segretaria a distanza PMI, centralino AI PMI",
    "publishedAt": "2026-11-27",
    "readingTime": "6 min",
    "inBreve": "Una segreteria AI costa in media 90–250 €/mese con copertura 24/7 inclusi sera e weekend, risponde senza attese anche a più chiamate simultanee e invia trascrizioni strutturate su WhatsApp o CRM. Un call center esterno o segretariato telefonico umano in Italia costa 300–1.200+ €/mese (spesso con extra a chiamata e limiti orari 9–18 lun–ven), ma resta preferibile quando servono empatia complessa, trattative delicate o gestione di reclami critici che richiedono discrezionalità umana.",
    "sections": [
      {
        "heading": "1. Il confronto diretto punto per punto (dati mercato italiano 2026)",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Criterio",
              "Segreteria AI (chiavi in mano)",
              "Call center / Segretariato umano esterno",
              "Segretaria interna part-time"
            ],
            "rows": [
              [
                "Costo mensile indicativo",
                "90–250 €/mese",
                "300–1.200+ €/mese (spesso a pacchetti chiamate)",
                "900–1.400 €/mese (costo azienda lordo)"
              ],
              [
                "Orario di copertura",
                "24 ore su 24, 7 giorni su 7 (anche festivi)",
                "Tipicamente lun–ven 9:00–18:00 (24/7 costa molto di più)",
                "20 ore/settimana (escluse ferie/malattie)"
              ],
              [
                "Chiamate simultanee",
                "Illimitate (zero linea occupata)",
                "Dipende dalla coda operatori",
                "1 chiamata alla volta"
              ],
              [
                "Conoscenza tecnica del tuo business",
                "Addestrata sui tuoi servizi, zone, listini base e FAQ",
                "Script generico condiviso tra decine di aziende",
                "Alta (dopo mesi di formazione)"
              ],
              [
                "Qualità della scheda ricevuta",
                "Trascrizione + riepilogo strutturato su WhatsApp/CRM in 10 sec",
                "Email breve (spesso errori su cognomi, targhe o codici)",
                "Alta, gestisce anche back-office"
              ],
              [
                "Trasparenza normativa",
                "Obbligo avviso AI (AI Act Art. 50) + GDPR",
                "GDPR / nomina responsabile esterno",
                "Dipendente interno"
              ]
            ]
          }
        ]
      },
      {
        "heading": "2. Dove vince la Segreteria AI (e perché converte di più sulle urgenze)",
        "blocks": [
          {
            "type": "p",
            "text": "La segreteria AI supera nettamente il call center esterno in tre scenari tipici delle PMI e dei professionisti italiani:"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Picchi e fuori orario: un cliente che chiama alle 19:30 o il sabato mattina trova risposta immediata invece di un disco registrato. Se è un'urgenza o una prenotazione (tagliando, visita, sopralluogo), il lead viene bloccato subito invece di passare al concorrente.",
              "Precisione sui dati tecnici: i call center multi-cliente spesso sbagliano sigle, codici errore caldaia, targhe auto o nomi di vie. Una segreteria AI configurata sul tuo settore fa il controllo dei dati (es. ripete indirizzo o targa) e li scrive puliti su WhatsApp o direttamente nel gestionale.",
              "Zero tempi morti e zero \"attenda in linea\": risponde al primo squillo dopo la deviazione *61*, anche se chiamano 4 clienti contemporaneamente il lunedì mattina."
            ]
          },
          {
            "type": "p",
            "text": "Puoi ascoltare e provare la resa reale sul [Simulatore Centralino AI](/#simulatore)."
          }
        ]
      },
      {
        "heading": "3. Dove vince ancora il call center umano (o una segretaria interna)",
        "blocks": [
          {
            "type": "p",
            "text": "Essere onesti evita investimenti sbagliati. Scegli una persona fisica (interna o esterna dedicata) se:"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Gestisci reclami molto tesi o situazioni sanitarie/legali ad alta emotività dove il chiamante pretende un confronto umano immediato.",
              "La telefonata serve a negoziare contratti o chiudere vendite consulenziali complesse direttamente al telefono.",
              "Hai bisogno di qualcuno che oltre al telefono gestisca accoglienza fisica in studio, pagamenti POS e archivio cartaceo."
            ]
          }
        ]
      },
      {
        "heading": "4. La soluzione ibrida che usano le PMI più organizzate",
        "blocks": [
          {
            "type": "p",
            "text": "Molti [studi professionali](/settori/studi-professionali), [officine](/settori/officine) e [PMI](/settori/pmi) non scelgono \"o uno o l'altro\": usano il Centralino AI come rete di sicurezza intelligente."
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "Durante l'orario di lavoro normale, la chiamata squilla prima in ufficio o sul cellulare del titolare.",
              "Se nessuno risponde entro 4–5 squilli (linea occupata, pausa pranzo, picco del lunedì, sera o weekend), subentra automaticamente la Segreteria AI.",
              "Il risultato: zero chiamate perse, zero costi fissi da call center 24/7 e il team umano si concentra solo sulle richiamate già qualificate."
            ]
          },
          {
            "type": "p",
            "text": "Calcola quanto stai perdendo oggi tra chiamate non risposte e fuori orario con il [Calcolatore ROI](/#calcolatore-roi), oppure guarda i dettagli tecnici su [Centralino AI 24/7](/servizi/centralino-ai) e nelle [FAQ](/faq)."
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "Quanto fa risparmiare una segreteria AI rispetto a un call center esterno?",
        "answer": "A parità di copertura base, una segreteria AI costa indicativamente 90–250 €/mese 24/7 contro i 300–1.200+ €/mese di un segretariato umano esterno (spesso limitato agli orari d'ufficio), con un risparmio tipico del 60–75% e copertura notturna e festiva inclusa."
      },
      {
        "question": "I clienti italiani accettano di parlare con una segreteria AI invece di un operatore?",
        "answer": "Sì, quando l'assistente è rapido, trasparente (si presenta subito come AI secondo l'Art. 50 dell'AI Act) e utile: chi chiama un artigiano, un'officina o uno studio preferisce lasciare in 40 secondi indirizzo e problema con conferma immediata piuttosto che trovare occupato o la segreteria classica."
      },
      {
        "question": "Posso usare la segreteria AI insieme alla mia segretaria in ufficio?",
        "answer": "Sì, è uno degli usi più efficaci. L'AI interviene solo quando la segretaria è già al telefono, in pausa pranzo, in ferie o dopo l'orario di chiusura, eliminando le chiamate perse nei picchi."
      },
      {
        "question": "Il call center esterno è meglio per gestire clienti arrabbiati o trattative complesse?",
        "answer": "Sì. Per reclami complessi o negoziazioni delicate una persona fisica resta superiore. In quei casi la segreteria AI è configurata per riconoscere il tono o l'argomento, non insistere e segnalare subito la chiamata come prioritaria al titolare."
      }
    ],
    "relatedPaths": [
      "/servizi/centralino-ai",
      "/settori/studi-professionali",
      "/settori/pmi",
      "/settori/idraulici",
      "/settori/officine",
      "/#simulatore"
    ]
  }
];

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getArticleJsonLd(guide: GuideItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.metaDescription,
    inLanguage: "it-IT",
    datePublished: guide.publishedAt,
    dateModified: guide.publishedAt,
    mainEntityOfPage: `${SITE_URL}/guide/${guide.slug}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/app-icon.svg`,
      },
    },
  };
}
