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
      <JsonLd data={getBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Settori", path: "/servizi" }, { name: vertical.shortTitle, path: `/settori/${vertical.slug}` }])} />
      <JsonLd
        data={getServiceJsonLd({
          name: vertical.metaTitle,
          description: vertical.metaDescription,
          url: `/settori/${vertical.slug}`,
        })}
      />

      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
          Soluzione per {vertical.shortTitle}
        </p>
        <h1 className="mt-2 max-w-[26ch] text-balance font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          {vertical.h1}
        </h1>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
          {vertical.inBreve}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#contatti-form"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-rame px-5 text-[15px] font-semibold text-on-rame transition-colors hover:bg-rame-hover"
          >
            Richiedi una demo sul tuo settore
          </a>
          <Link
            href="/servizi/centralino-ai"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-line px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-raised"
          >
            Come funziona il Centralino AI
          </Link>
        </div>

        <div className="mt-10">
          <CallSimulator defaultSector={vertical.simulatorKey} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr] md:items-start">
          <section className="rounded-xl bg-raised p-7 shadow-[var(--shadow-sm)]">
            <h2 className="text-[20px] font-semibold text-ink">Situazioni tipiche gestite</h2>
            <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              {vertical.situations.map((s) => (
                <li key={s.title}>
                  <p className="font-semibold text-ink">{s.title}</p>
                  <p className="mt-0.5">{s.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl bg-raised p-7 shadow-[var(--shadow-sm)]">
            <h2 className="text-[20px] font-semibold text-ink">Quando NON ti serve</h2>
            <ul className="mt-4 space-y-3 border-l-2 border-ink/25 pl-4 text-[15px] leading-relaxed text-ink-soft">
              {vertical.whenNotNeeded.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </section>
        </div>

        <div id="richiedi-demo" className="mt-14 grid scroll-mt-24 grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="order-1 lg:order-2 lg:col-span-6"><div className="lg:sticky lg:top-24">
            <LeadForm
              defaultSector={vertical.defaultSector}
              defaultNeed={vertical.defaultNeed}
              title={`Attivalo per la tua attività (${vertical.shortTitle})`}
            />
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
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
          </div>
        </div>
      </div>
    </>
  );
}
