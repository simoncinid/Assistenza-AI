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
  defaultSector = "",
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
      if (custom.detail?.note) setMessage(custom.detail.note);
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
    trackEvent("lead_submit", { verticale: sector, esigenza: need });

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

  const inputClass =
    "mt-1.5 h-11 w-full rounded-md border border-line bg-raised px-3.5 text-[16px] md:text-[16px] md:text-[15px] text-ink placeholder:text-ink-soft/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rame";

  return (
    <div
      id="contatti-form"
      className="rounded-xl bg-raised p-6 shadow-[var(--shadow-sm)] sm:p-8"
    >
      <h2 className="text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
        {title}
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{subtitle}</p>

      {status === "success" ? (
        <div
          role="status"
          className="mt-6 rounded-lg border border-whatsapp/25 bg-whatsapp-bg p-4 text-[14px] text-ink"
        >
          <p className="font-semibold text-whatsapp">Richiesta ricevuta.</p>
          <p className="mt-1 text-ink-soft">
            Ti ricontatteremo entro 1 giorno lavorativo con una simulazione concreta sul tuo settore.
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
            <label htmlFor="lead-name" className="block text-[14px] font-medium text-ink">
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
              className={inputClass}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-phone" className="block text-[14px] font-medium text-ink">
                Telefono / WhatsApp *
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                placeholder="Es. 333 1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="lead-email" className="block text-[14px] font-medium text-ink">
                Email aziendale
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                placeholder="nome@azienda.it"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-sector" className="block text-[14px] font-medium text-ink">
                Settore *
              </label>
              <select
                id="lead-sector"
                name="sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>Seleziona il tuo settore…</option>
                {SECTORS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="lead-need" className="block text-[14px] font-medium text-ink">
                Esigenza principale *
              </label>
              <select
                id="lead-need"
                name="need"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className={inputClass}
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
            <label htmlFor="lead-message" className="block text-[14px] font-medium text-ink">
              Note (opzionale)
            </label>
            <textarea
              id="lead-message"
              name="message"
              rows={3}
              placeholder="Quante chiamate ricevi al giorno o cosa vorresti automatizzare?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-line bg-raised px-3.5 py-2.5 text-[16px] md:text-[15px] text-ink placeholder:text-ink-soft/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rame"
            />
          </div>

          <label className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-soft">
            <input
              type="checkbox"
              required
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-rame"
            />
            <span>
              Acconsento al trattamento dei dati per essere ricontattato (
              <a href="/privacy-policy" className="inline-flex min-h-11 items-center text-rame underline underline-offset-2 hover:text-rame-hover">
                Privacy Policy
              </a>
              ). Zero spam, nessuna cessione a terzi.
            </span>
          </label>

          {status === "error" && (
            <p role="alert" className="text-[14px] font-medium text-rame">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-rame px-5 text-[15px] font-semibold text-on-rame transition-colors hover:bg-rame-hover disabled:opacity-60"
          >
            {status === "submitting" ? "Invio in corso..." : "Richiedi demo gratuita (15 min)"}
          </button>

          <p className="text-center text-[13px] text-ink-soft">
            Risposta diretta da un tecnico in italiano entro 1 giorno lavorativo. Oppure scrivi a{" "}
            <a href={`mailto:${QUOTES_EMAIL}`} className="whitespace-nowrap font-medium text-rame hover:text-rame-hover">
              {QUOTES_EMAIL}
            </a>.
          </p>
        </form>
      )}
    </div>
  );
}
