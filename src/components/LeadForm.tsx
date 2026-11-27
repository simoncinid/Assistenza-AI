"use client";

import { useEffect, useState, type FormEvent } from "react";
import { getAttributionFields, trackEvent } from "@/lib/analytics";
import { QUOTES_EMAIL } from "@/lib/site";

const SECTORS = [
  "Idraulico",
  "Elettricista",
  "Officina",
  "Studio Professionale",
  "PMI",
  "Artigiano",
  "Altro",
] as const;

const NEEDS = [
  "Centralino AI",
  "WhatsApp AI",
  "Automazione PMI",
  "Assistenza AI",
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
  title = "Richiedi una demo gratuita (15 min)",
  subtitle = "Raccontaci la tua attività: ti rispondiamo entro 1 giorno lavorativo con una proposta concreta.",
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState(defaultSector);
  const [need, setNeed] = useState(defaultNeed);
  const [message, setMessage] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [websiteHoneypot, setWebsiteHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const onPrefill = (e: Event) => {
      const custom = e as CustomEvent<{ note?: string }>;
      if (custom.detail?.note) {
        setMessage(custom.detail.note);
      }
    };
    window.addEventListener("assistenza_ai_prefill_note", onPrefill);
    return () => window.removeEventListener("assistenza_ai_prefill_note", onPrefill);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!gdprConsent) {
      setStatus("error");
      setErrorMsg("Conferma il consenso al trattamento dei dati per inviare la richiesta.");
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setStatus("error");
      setErrorMsg("Inserisci almeno un numero di telefono/WhatsApp oppure un'email.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    trackEvent("lead_submit", { sector, need });

    const attribution = getAttributionFields();

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          sector,
          need,
          message: message.trim(),
          gdprConsent,
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
      setEmail("");
      setPhone("");
      setMessage("");
      setGdprConsent(false);
    } catch {
      setStatus("error");
      setErrorMsg(`Errore di connessione. Puoi scriverci anche a ${QUOTES_EMAIL}.`);
    }
  }

  return (
    <div id="contatti-form" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

      {status === "success" ? (
        <div
          role="status"
          className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950"
        >
          <p className="font-bold">Richiesta ricevuta!</p>
          <p className="mt-1">
            Ti ricontatteremo al più presto per mostrarti una simulazione concreta sul tuo settore.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-slate-800">
              Nome e Azienda *
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
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-phone" className="block text-sm font-medium text-slate-800">
                Telefono / WhatsApp *
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                placeholder="Es. 333 1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label htmlFor="lead-email" className="block text-sm font-medium text-slate-800">
                Email aziendale
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                placeholder="nome@azienda.it"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-sector" className="block text-sm font-medium text-slate-800">
                Settore *
              </label>
              <select
                id="lead-sector"
                name="sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
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
                Esigenza principale *
              </label>
              <select
                id="lead-need"
                name="need"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
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
              Note (opzionale)
            </label>
            <textarea
              id="lead-message"
              name="message"
              rows={3}
              placeholder="Quante chiamate ricevi al giorno o cosa vorresti automatizzare?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <label className="flex items-start gap-2.5 text-xs text-slate-600">
            <input
              type="checkbox"
              required
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className="mt-0.5 accent-blue-700"
            />
            <span>
              Acconsento al trattamento dei dati per essere ricontattato in merito alla richiesta (
              <a href="/privacy-policy" className="underline hover:text-slate-900">
                Privacy Policy
              </a>
              ). Zero spam, nessuna cessione a terzi.
            </span>
          </label>

          {status === "error" && (
            <p role="alert" className="text-sm font-medium text-red-600">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
          >
            {status === "submitting" ? "Invio in corso..." : "Richiedi demo gratuita (15 min)"}
          </button>
          <p className="text-center text-xs text-slate-500">
            Preferisci scrivere via email?{" "}
            <a href={`mailto:${QUOTES_EMAIL}`} className="font-medium text-blue-700 hover:underline">
              {QUOTES_EMAIL}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
