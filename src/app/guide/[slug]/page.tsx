import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
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
          <Link href="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guide" className="hover:text-ink">Guide</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{guide.metaTitle}</span>
        </nav>

        <div className="mt-6 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-rame">
              Guida pratica · {guide.readingTime} · Aggiornata {guide.publishedAt}
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
                            {block.text}
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
                              <li key={iIdx}>{item}</li>
                            ))}
                          </Tag>
                        );
                      }
                      return (
                        <div key={bIdx} className="overflow-x-auto rounded-lg border border-line bg-raised">
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
              <div className="mt-4 flex flex-wrap gap-2.5">
                {guide.relatedPaths.map((href) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex min-h-10 items-center rounded-md border border-line bg-surface px-3.5 text-[13px] font-medium text-ink transition-colors hover:border-rame hover:text-rame"
                  >
                    {LINK_LABELS[href] ?? href}
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
            <div className="lg:sticky lg:top-24">
              <LeadForm
                title="Vuoi provarlo sul tuo numero?"
                subtitle="In 15 minuti simuliamo le chiamate reali della tua attività e vediamo se si ripaga."
              />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
