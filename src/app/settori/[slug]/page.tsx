import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, VERTICALS } from "@/lib/site";

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = VERTICALS.find((v) => v.slug === slug);
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
  const vertical = VERTICALS.find((v) => v.slug === slug);
  if (!vertical) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: vertical.shortTitle,
    description: vertical.metaDescription,
    url: `${SITE_URL}/settori/${vertical.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "IT",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd data={serviceJsonLd} />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Settore: {vertical.name}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
            {vertical.heroTitle}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {vertical.heroSubtitle}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-base font-bold text-slate-900">Problemi che eliminiamo</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {vertical.painPoints.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5">
              <h2 className="text-base font-bold text-slate-900">Cosa ottieni subito</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {vertical.benefits.map((b) => (
                  <li key={b}>✓ {b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <LeadForm
            defaultSector={vertical.defaultSector}
            defaultNeed={vertical.defaultNeed}
            title={`Prova l'AI per ${vertical.name}`}
            subtitle="Lascia il tuo recapito: ti mostriamo una simulazione reale su chiamate e richieste del tuo settore."
          />
        </div>
      </div>
    </div>
  );
}
