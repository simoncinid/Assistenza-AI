import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { LeadBand } from "@/components/LeadBand";
import { getArticleJsonLd, getGuideBySlug, GUIDES } from "@/lib/guides";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/site";

const LINK_LABELS: Record<string, string> = {
  "/servizi/centralino-ai": "Centralino AI 24/7",
  "/servizi/automazione-whatsapp-ai": "Automazione WhatsApp AI",
  "/servizi/sviluppo-ai-pmi": "Sviluppo AI su misura per PMI",
  "/servizi/assistenza-manutenzione-ai": "Assistenza e Manutenzione AI",
  "/settori/idraulici": "Centralino AI per Idraulici",
  "/settori/elettricisti": "Centralino AI per Elettricisti",
  "/settori/officine": "Centralino AI per Autofficine",
  "/settori/caldaie-climatizzazione": "Centralino AI Caldaie e Clima",
  "/settori/studi-medici-dentistici": "Segreteria AI Studi Medici e Dentistici",
  "/settori/studi-professionali": "Segreteria AI Studi Professionali",
  "/settori/imprese-edili-ristrutturazioni": "Centralino AI Imprese Edili",
  "/settori/pmi": "Automazione AI per PMI Italiane",
  "/#simulatore": "Simulatore Centralino AI dal vivo",
  "/#calcolatore-roi": "Calcolatore chiamate perse (ROI)",
  "/faq": "Domande frequenti (20 FAQ)",
  "/contatti": "Richiedi una demo gratuita",
};

function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, idx) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return <span key={idx}>{part}</span>;
    const [, label, href] = m;
    return (
      <Link
        key={idx}
        href={href}
        className="inline-block py-1 -my-1 font-medium text-rame underline decoration-rame/40 underline-offset-2 hover:text-rame-hover"
      >
        {label}
      </Link>
    );
  });
}

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guide/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.metaTitle,
      description: guide.metaDescription,
      publishedTime: guide.publishedAt,
    },
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const otherGuides = GUIDES.filter((g) => g.slug !== guide.slug);
  const formattedDate = new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "short", year: "numeric" }).format(new Date(guide.publishedAt + "T00:00:00Z"));

  return (
    <>
      <JsonLd data={getArticleJsonLd(guide)} />
      <JsonLd data={getFaqJsonLd(guide.faqs)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guide", path: "/guide" },
          { name: guide.metaTitle, path: `/guide/${guide.slug}` },
        ])}
      />

      <article className="mx-auto max-w-[72rem] px-4 py-12 sm:px-6 lg:py-16">
        <nav aria-label="Breadcrumb" className="text-[13px] text-ink-soft">
          <Link href="/" className="inline-block py-2 -my-2 hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guide" className="inline-block py-2 -my-2 hover:text-ink">Guide</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{guide.metaTitle}</span>
        </nav>

        <div className="mt-6 grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-rame">
              Guida pratica · {guide.readingTime} · Aggiornata il {formattedDate}
            </p>
            <h1 className="mt-3 font-sans text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.625rem]">
              {guide.h1}
            </h1>

            {/* Blocco AEO/GEO citabile */}
            <div className="mt-6 rounded-xl border-l-4 border-rame bg-raised p-5 shadow-[var(--shadow-sm)] sm:p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
                In breve
              </p>
              <p className="mt-2 text-[16px] leading-[1.6] text-ink">
                {guide.inBreve}
              </p>
            </div>

            {/* Sezioni */}
            <div className="mt-10 space-y-10">
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[1.625rem]">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.blocks.map((block, bIdx) => {
                      if (block.type === "p") {
                        return (
                          <p key={bIdx} className="text-[16px] leading-[1.65] text-ink-soft">
                            {renderInlineLinks(block.text)}
                          </p>
                        );
                      }
                      if (block.type === "list") {
                        const Tag = block.ordered ? "ol" : "ul";
                        return (
                          <Tag
                            key={bIdx}
                            className={`space-y-2 pl-5 text-[15px] leading-[1.6] text-ink-soft ${
                              block.ordered ? "list-decimal" : "list-disc"
                            }`}
                          >
                            {block.items.map((item, iIdx) => (
                              <li key={iIdx}>{renderInlineLinks(item)}</li>
                            ))}
                          </Tag>
                        );
                      }
                      return (
                        <div key={bIdx} className="space-y-3">
                          {/* Mobile stacked cards (G-02: zero horizontal overflow on 390px) */}
                          <div className="space-y-3 sm:hidden">
                            {block.rows.map((row, rIdx) => (
                              <dl key={rIdx} className="rounded-lg border border-line bg-raised p-4 text-[14px]">
                                <dt className="font-semibold text-ink">{row[0]}</dt>
                                <div className="mt-2.5 space-y-2 border-t border-line pt-2.5">
                                  {row.slice(1).map((cell, cIdx) => (
                                    <div key={cIdx} className="flex flex-col gap-0.5">
                                      <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                                        {block.headers[cIdx + 1]}
                                      </dt>
                                      <dd className="text-ink-soft">{cell}</dd>
                                    </div>
                                  ))}
                                </div>
                              </dl>
                            ))}
                          </div>
                          {/* Desktop responsive table */}
                          <div className="hidden overflow-x-auto rounded-lg border border-line bg-raised sm:block">
                          <table className="w-full border-collapse text-left text-[14px]">
                            <thead className="border-b border-line bg-surface">
                              <tr>
                                {block.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="px-4 py-3 font-semibold text-ink">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-line">
                              {block.rows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`px-4 py-3 ${cIdx === 0 ? "font-medium text-ink" : "text-ink-soft"}`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* FAQ della guida */}
            <section className="mt-12 border-t border-line pt-10">
              <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-ink">
                Domande frequenti su questa guida
              </h2>
              <div className="mt-5 divide-y divide-line border-y border-line">
                {guide.faqs.map((faq, idx) => (
                  <details key={idx} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-ink">
                      <span>{faq.question}</span>
                      <span className="font-mono text-[16px] text-rame transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Approfondimenti correlati */}
            <section className="mt-10 rounded-xl border border-line bg-raised p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
                Risorse e pagine correlate
              </p>
              <div className="mt-4 grid divide-y divide-line border-t border-line sm:grid-cols-2 sm:gap-x-6">
                {guide.relatedPaths.map((href) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex min-h-14 items-center justify-between gap-3 py-2 text-[14px] font-medium text-ink transition-colors hover:text-rame"
                  >
                    <span>{LINK_LABELS[href] ?? href}</span><span className="shrink-0 text-rame">→</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Altre guide */}
            <section className="mt-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Altre guide pratiche
              </p>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {otherGuides.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/guide/${g.slug}`}
                      className="flex min-h-11 items-center justify-between gap-4 py-3 text-[15px] font-medium text-ink hover:text-rame"
                    >
                      <span>{g.h1}</span>
                      <span className="shrink-0 text-rame">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-xl border border-line bg-raised p-6 shadow-[var(--shadow-sm)] lg:sticky lg:top-24">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-rame">
                Demo gratuita · 15 min
              </p>
              <h2 className="mt-2 text-[18px] font-semibold leading-snug text-ink">
                Vuoi provarlo sul tuo numero?
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                Simuliamo le chiamate reali della tua attività e verifichiamo insieme se si ripaga dal primo mese.
              </p>
              <a
                href="#contatti-form"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-rame px-4 text-[14px] font-semibold text-on-rame transition-colors hover:bg-rame-hover"
              >
                Richiedi demo (15 min) →
              </a>
              <p className="mt-3 text-[12px] text-ink-soft">
                Zero cambio numero · Risposta entro 1 giorno lavorativo.
              </p>
            </div>
          </aside>
        </div>

        <LeadBand title="Vuoi provarlo sul tuo numero?" />
      </article>
    </>
  );
}
