"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/servizi/centralino-ai", label: "Centralino AI" },
  { href: "/servizi", label: "Servizi" },
  { href: "/#settori", label: "Settori" },
  { href: "/guide", label: "Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/chi-siamo", label: "Chi siamo" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[72rem] items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Assistenza AI, vai alla home"
          className="inline-flex shrink-0 items-center py-1"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/lockup-light.svg"
            alt="Assistenza AI"
            className="h-7 w-auto"
            width={156}
            height={28}
          />
        </Link>

        <nav
          aria-label="Navigazione principale"
          className="hidden items-center gap-5 text-[13.5px] font-medium text-ink-soft lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contatti"
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md bg-rame px-3 text-[13px] font-semibold text-on-rame transition-colors hover:bg-rame-hover sm:px-5 sm:text-[15px]"
          >
            Demo gratuita
          </Link>

          <button
            type="button"
            aria-label={open ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-raised text-ink transition-colors hover:bg-white lg:hidden"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Menu mobile"
          className="border-t border-line bg-surface px-4 pb-5 pt-3 lg:hidden"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-md px-3 text-[15px] font-medium text-ink transition-colors hover:bg-raised"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
