import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { getOrganizationJsonLd, SITE_NAME, SITE_URL } from "@/lib/site";

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const cfAnalyticsToken = process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Centralino AI e Automazione per PMI e Artigiani in Italia`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sviluppo e assistenza AI su misura per PMI, artigiani e studi professionali italiani: centralino AI 24/7 per idraulici, elettricisti e officine, assistente WhatsApp e automazione preventivi.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Centralino AI e Automazione per PMI e Artigiani`,
    description:
      "Non perdere più chiamate né clienti: centralino AI 24/7, assistente WhatsApp e automazioni su misura per aziende e professionisti in Italia.",
  },
  verification: gscVerification ? { google: gscVerification } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={getOrganizationJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {cfAnalyticsToken ? (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: cfAnalyticsToken })}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
