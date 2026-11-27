import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { getOrganizationJsonLd, getWebSiteJsonLd, SITE_NAME, SITE_URL } from "@/lib/site";

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["500"],
});

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const cfAnalyticsToken = process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN;
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || "G-VPF5GJ092Z";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Assistenza AI per PMI e Artigiani | Centralino AI e Automazioni",
    template: "%s | Assistenza AI",
  },
  description:
    "Sviluppo e assistenza AI chiavi in mano per PMI, artigiani e studi italiani. Centralino AI 24/7 sul tuo numero, WhatsApp AI e automazioni su misura conformi GDPR e AI Act.",
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Assistenza AI per PMI e Artigiani | Centralino AI e Automazioni",
    description:
      "Centralino AI 24/7 sul tuo numero (*61*), WhatsApp AI e automazioni su misura per PMI e artigiani in Italia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Assistenza AI — Centralino AI e Automazioni per PMI e Artigiani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistenza AI per PMI e Artigiani | Centralino AI e Automazioni",
    description:
      "Centralino AI 24/7 sul tuo numero (*61*), WhatsApp AI e automazioni su misura per PMI e artigiani in Italia.",
    images: ["/og-image.png"],
  },
  verification: gscVerification ? { google: gscVerification } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${figtree.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-surface font-sans text-ink antialiased">
        <JsonLd data={getOrganizationJsonLd()} />
        <JsonLd data={getWebSiteJsonLd()} />
        {ga4Id ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "${ga4Id}", { anonymize_ip: true });`}
            </Script>
          </>
        ) : null}
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
