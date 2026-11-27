import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CallSimulator } from "@/components/CallSimulator";
import { SectorWhatsAppCard } from "@/components/HeroVisuals";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, getServiceJsonLd, getVerticalBySlug, VERTICALS } from "@/lib/site";

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) return {};
  return {
    title: vertical.metaTitle,
    description: vertical.metaDescription,
    alternates: { canonical: `/settori/${vertical.slug}` },
  };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) notFound();

  return (
    <>
      <JsonLd data={getFaqJsonLd(vertical.faqs)} />
      <JsonLd data={getBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Centralino AI", path: "/servizi/centralino-ai" }, { name: vertical.shortTitle, path: `/settori/${vertical.slug}` }])} />
      <JsonLd
        data={getServiceJsonLd({
          name: vertical.metaTitle,
          description: vertical.metaDescription,
          url: `/settori/${vertical.slug}`,
        })}
      />

      <div className="mx-auto max-w-[72rem] px-4 py-12 sm:px-6 lg:py-16">
        <nav aria-label="Breadcrumb" className="text-[13px] text-ink-soft">
          <Link href="/" className="inline-block py-2 -my-2 hover:text-ink">Home</Link> /{" "}
          <Link href="/servizi/centralino-ai" className="inline-block py-2 -my-2 hover:text-ink">Centralino AI</Link> /{" "}
          <span className="text-ink">{vertical.shortTitle}</span>
        </nav>

        <div className="mt-5 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-rame">
              Soluzione per {vertical.shortTitle}
            </p>
            <h1 className="mt-2 max-w-[24ch] text-balance font-sans text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.75rem]">
              {vertical.h1}
            </h1>
            <p className="mt-4 max-w-[60ch] text-[17px] leading-[1.55] text-ink-soft">
              {vertical.inBreve}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contatti-form"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-rame px-5 text-[15px] font-semibold text-on-rame transition-colors hover:bg-rame-hover"
              >
                Richiedi una demo sul tuo settore
              </a>
              <a
                href="#simulatore"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-line px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-raised"
              >
                Prova il simulatore ↓
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <SectorWhatsAppCard sector={vertical.simulatorKey} />
          </div>
        </div>

        <div id="simulatore" className="mt-12 scroll-mt-24">
          <CallSimulator defaultSector={vertical.simulatorKey} />
        </div>

        {/* Situazioni tipiche gestite — griglia 2x2 bilanciata */}
        <section className="mt-12 rounded-2xl border border-line bg-raised p-6 shadow-[var(--shadow-sm)] sm:p-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
            Operatività quotidiana
          </p>
          <h2 className="mt-1 text-[20px] font-semibold text-ink sm:text-[22px]">
            Situazioni tipiche gestite
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-6 md:grid-cols-2">
            {vertical.situations.map((s) => (
              <li key={s.title} className="min-w-0">
                <p className="text-[15px] font-semibold text-ink">{s.title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{s.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Quando NON ti serve — banda orizzontale compatta a 3 colonne (G-07, zero vuoto interno) */}
        <section className="mt-6 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-[18px] font-semibold text-ink">Quando NON ti serve</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              Trasparenza prima della demo
            </span>
          </div>
          <ul className="mt-5 grid grid-cols-1 divide-y divide-line border-t border-line pt-4 md:grid-cols-3 md:divide-x md:divide-y-0">
            {vertical.whenNotNeeded.map((w, idx) => (
              <li
                key={w}
                className={[
                  "py-3 text-[14px] leading-relaxed text-ink-soft md:py-0",
                  idx > 0 ? "md:pl-6" : "",
                  idx < vertical.whenNotNeeded.length - 1 ? "md:pr-6" : "",
                ].join(" ")}
              >
                {w}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ + Form (G-08: blocco chiusura nella colonna FAQ + form sticky) */}
        <div id="richiedi-demo" className="mt-14 grid scroll-mt-24 grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-6 lg:sticky lg:top-24">
            <LeadForm
              defaultSector={vertical.defaultSector}
              defaultNeed={vertical.defaultNeed}
              title={`Attivalo per la tua attività (${vertical.shortTitle})`}
            />
          </div>

          <div className="order-2 min-w-0 lg:order-1 lg:col-span-6">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-rame">
              FAQ {vertical.shortTitle}
            </p>
            <h2 className="mt-2 text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.03em] text-ink">
              Domande frequenti
            </h2>
            <div className="mt-6 divide-y divide-line border-t border-line">
              {vertical.faqs.map((faq) => (
                <details key={faq.question} className="group py-4">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-1 text-[16px] font-semibold text-ink">
                    <span>{faq.question}</span>
                    <span className="font-mono text-[16px] text-rame transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-line bg-raised p-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-rame">
                Attivazione rapida · Zero cambio numero
              </p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                Vuoi verificare come gestiamo i casi specifici del tuo lavoro? Compila il modulo qui accanto: rispondiamo entro 1 giorno lavorativo con una simulazione sul tuo numero di prova.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-[14px] font-semibold">
                <Link href="/servizi/centralino-ai" className="inline-flex min-h-11 items-center text-rame hover:text-rame-hover">
                  Come funziona il Centralino AI →
                </Link>
                <Link href="/faq" className="inline-flex min-h-11 items-center text-ink-soft hover:text-ink">
                  Tutte le 20 FAQ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
