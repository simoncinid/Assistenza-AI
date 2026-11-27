"use client";

export function trackCtaClick(label: string, destination?: string) {
  if (typeof window === "undefined") return;
  try {
    const payload = {
      event: "cta_click",
      label,
      destination: destination || "",
      page_url: window.location.href,
      timestamp: new Date().toISOString(),
    };
    window.dispatchEvent(new CustomEvent("assistenza_ai_event", { detail: payload }));
  } catch {
    // Non-blocking telemetry
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
