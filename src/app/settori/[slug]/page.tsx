import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallSimulator } from "@/components/CallSimulator";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  SITE_NAME,
  SITE_URL,
  VERTICALS,
} from "@/lib/site";

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
    name: `AI per ${vertical.name}`,
    serviceType: vertical.metaTitle,
    description: vertical.metaDescription,
    url: `${SITE_URL}/settori/${vertical.slug}`,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: "IT",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={getFaqJsonLd(vertical.faqs)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: vertical.name, path: `/settori/${vertical.slug}` },
        ])}
      />

      <div className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
          Settore · {vertical.name}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">
          {vertical.h1}
        </h1>
        <aside className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
            In breve
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-800">{vertical.inBreve}</p>
        </aside>
      </div>

      {/* 4 Real situations */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">
          4 situazioni reali che gestisce ogni giorno
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {vertical.situations.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-selected interactive demo */}
      <div className="mt-12">
        <CallSimulator defaultSector={vertical.simulatorKey} />
      </div>

      {/* When NOT needed + Lead Form */}
      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-6">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
            <h2 className="text-lg font-bold text-slate-900">Quando NON ti serve</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              {vertical.whenNotNeeded.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Domande frequenti ({vertical.name})
            </h2>
            <div className="mt-4 space-y-3">
              {vertical.faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-4">
                  <summary className="cursor-pointer text-sm font-bold text-slate-900">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <LeadForm
            defaultSector={vertical.defaultSector}
            defaultNeed={vertical.defaultNeed}
            title={`Richiedi una demo per ${vertical.name}`}
            subtitle="Ti mostriamo come funziona sul tuo numero attuale, senza impegno."
          />
        </div>
      </div>
    </div>
  );
}
