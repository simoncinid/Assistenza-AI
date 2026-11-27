"use client";

import { useState, type FormEvent } from "react";
import { getAttributionFields, trackCtaClick } from "@/lib/analytics";

const SECTORS = [
  "Idraulico",
  "Elettricista",
  "Officina",
  "Studio professionale",
  "PMI",
  "Altro",
] as const;

const NEEDS = [
  "Centralino AI",
  "Automazione appuntamenti/preventivi",
  "Assistente WhatsApp",
  "Altro",
] as const;

interface LeadFormProps {
  defaultSector?: string;
  defaultNeed?: string;
  title?: string;
  subtitle?: string;
}

export function LeadForm({
  defaultSector = "Idraulico",
  defaultNeed = "Centralino AI",
  title = "Richiedi una demo gratuita",
  subtitle = "Raccontaci la tua attività: ti rispondiamo entro 1 giorno lavorativo con una proposta concreta.",
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sector, setSector] = useState(defaultSector);
  const [need, setNeed] = useState(defaultNeed);
  const [message, setMessage] = useState("");
  const [websiteHoneypot, setWebsiteHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    trackCtaClick("lead_form_submit", sector);

    const attribution = getAttributionFields();

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          sector,
          need,
          message: message.trim(),
          website: websiteHoneypot,
          ...attribution,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Si è verificato un errore. Riprova tra poco.");
        return;
      }

      setStatus("success");
      setName("");
      setContact("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMsg("Errore di connessione. Riprova tra qualche istante.");
    }
  }

  return (
    <div id="contatti-form" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

      {status === "success" ? (
        <div
          role="status"
          className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
        >
          <p className="font-semibold">Richiesta ricevuta!</p>
          <p className="mt-1">
            Grazie per averci scritto. Ti ricontatteremo al più presto per mostrarti la soluzione più adatta alla tua attività.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Honeypot anti-spam field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={websiteHoneypot}
              onChange={(e) => setWebsiteHoneypot(e.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-name" className="block text-sm font-medium text-slate-800">
                Nome / Azienda *
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                required
                minLength={2}
                placeholder="Es. Marco Rossi — Termoidraulica Rossi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label htmlFor="lead-contact" className="block text-sm font-medium text-slate-800">
                Telefono / WhatsApp o Email *
              </label>
              <input
                id="lead-contact"
                name="contact"
                type="text"
                required
                minLength={5}
                placeholder="Es. 333 1234567 oppure nome@azienda.it"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-sector" className="block text-sm font-medium text-slate-800">
                Settore / Attività *
              </label>
              <select
                id="lead-sector"
                name="sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                {SECTORS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="lead-need" className="block text-sm font-medium text-slate-800">
                Bisogno principale *
              </label>
              <select
                id="lead-need"
                name="need"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                {NEEDS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="lead-message" className="block text-sm font-medium text-slate-800">
              Messaggio (opzionale)
            </label>
            <textarea
              id="lead-message"
              name="message"
              rows={3}
              placeholder="Quante chiamate ricevi al giorno o cosa vorresti automatizzare?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {status === "error" && (
            <p role="alert" className="text-sm font-medium text-red-600">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {status === "submitting" ? "Invio in corso..." : "Richiedi informazioni gratuite"}
          </button>
          <p className="text-xs text-slate-500">
            Nessun impegno e zero spam. Usiamo i tuoi dati solo per rispondere alla richiesta.
          </p>
        </form>
      )}
    </div>
  );
}
