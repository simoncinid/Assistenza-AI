import { GuidesToolsCard } from "@/components/HeroVisuals";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LeadBand } from "@/components/LeadBand";
import { GUIDES } from "@/lib/guides";
import { getBreadcrumbJsonLd, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guide Pratiche su Centralino AI e Automazioni PMI",
  description:
    "Guide operative in italiano per artigiani e PMI: costi reali del centralino AI, deviazione *61*, preventivi automatici e confronto con i call center.",
  alternates: { canonical: "/guide" },
};

export default function GuideIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guide pratiche su Centralino AI e Automazioni PMI",
    url: `${SITE_URL}/guide`,
    inLanguage: "it-IT",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: GUIDES.map((g, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/guide/${g.slug}`,
        name: g.h1,
      })),
    },
  };

  return (
    <>
      <JsonLd data={collectionJsonLd} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guide", path: "/guide" },
        ])}
      />
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-rame">
          Guide operative
        </p>
        <h1 className="mt-2 max-w-[24ch] text-balance font-sans text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Guide pratiche su Centralino AI e automazioni per PMI
        </h1>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.55] text-ink-soft">
          Numeri reali, confronti chiari e istruzioni operative per artigiani, studi e PMI italiane: senza gergo tecnico e con tabelle pronte all&apos;uso.
        </p>
          </div>
          <div className="min-w-0 lg:col-span-5">
            <GuidesToolsCard />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {GUIDES.map((guide, idx) => (
            <article
              key={guide.slug}
              className="flex flex-col justify-between rounded-xl border border-line bg-raised p-6 shadow-[var(--shadow-sm)] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-[12px] text-ink-soft">
                  <span>Guida 0{idx + 1}</span>
                  <span>{guide.readingTime} di lettura</span>
                </div>
                <h2 className="mt-3 text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
                  <Link href={`/guide/${guide.slug}`} className="hover:text-rame">
                    {guide.h1}
                  </Link>
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {guide.metaDescription}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <Link
                  href={`/guide/${guide.slug}`}
                  className="inline-flex min-h-11 items-center text-[14px] font-semibold text-rame hover:text-rame-hover"
                >
                  Leggi la guida →
                </Link>
                <span className="font-mono text-[11px] text-ink-soft">Agg. 27 nov 2026</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/#calcolatore-roi"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-raised px-5 text-[14px] font-semibold text-ink transition-colors hover:bg-white"
          >
            Calcola le chiamate perse →
          </Link>
          <Link
            href="/#simulatore"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-raised px-5 text-[14px] font-semibold text-ink transition-colors hover:bg-white"
          >
            Prova il simulatore dal vivo →
          </Link>
          <Link
            href="/faq"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-raised px-5 text-[14px] font-semibold text-ink transition-colors hover:bg-white"
          >
            Tutte le 20 FAQ →
          </Link>
        </div>

        <LeadBand title="Vuoi applicare queste guide alla tua attività?" />
      </div>
    </>
  );
}
