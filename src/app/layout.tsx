import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { getOrganizationJsonLd, SITE_NAME, SITE_URL } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const cfAnalyticsToken = process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Assistenza AI per PMI e Artigiani | Centralino AI e Automazioni",
    template: "%s | Assistenza AI",
  },
  description:
    "Sviluppo e assistenza AI chiavi in mano per PMI, artigiani e studi italiani. Centralino AI 24/7 sul tuo numero, WhatsApp AI e automazioni su misura conformi GDPR e AI Act.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Assistenza AI per PMI e Artigiani | Centralino AI e Automazioni",
    description:
      "Centralino AI 24/7 sul tuo numero (*61*), WhatsApp AI e automazioni su misura per PMI e artigiani in Italia.",
  },
  verification: gscVerification ? { google: gscVerification } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
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
