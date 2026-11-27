"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA4_ID || "G-VPF5GJ092Z";

export function trackEvent(
  event: string,
  data?: Record<string, string | number | undefined>
) {
  if (typeof window === "undefined") return;
  try {
    const cleanParams: Record<string, string | number> = {};
    if (data) {
      for (const [k, v] of Object.entries(data)) {
        if (v !== undefined && v !== "") cleanParams[k] = v;
      }
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", event, cleanParams);
    }
    window.dispatchEvent(
      new CustomEvent("assistenza_ai_event", {
        detail: {
          event,
          ...cleanParams,
          page_url: window.location.href,
          timestamp: new Date().toISOString(),
        },
      })
    );
  } catch {
    // Non-blocking
  }
}

export function getAttributionFields() {
  if (typeof window === "undefined") {
    return {
      page_url: "",
      referrer: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      timestamp: "",
    };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    page_url: window.location.href,
    referrer: document.referrer || "",
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    timestamp: new Date().toISOString(),
  };
}
