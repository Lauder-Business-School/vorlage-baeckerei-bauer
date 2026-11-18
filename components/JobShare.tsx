"use client";

import { useState } from "react";

/**
 * Teilen-Leiste pro Stelle: Facebook, WhatsApp, Link kopieren.
 * `url` muss absolut sein (Deep-Link auf die jeweilige Stelle, z. B. …/jobs#prinzendorf).
 * Facebook/WhatsApp sind Standard-Share-Links — es wird nichts im Namen der Bäckerei gepostet.
 */
export default function JobShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(`${title} – Bäckerei Karl Bauer\n${url}`)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard nicht verfügbar (z. B. unsicherer Kontext) — Link bleibt sichtbar im Browser
      setCopied(false);
    }
  }

  const btn =
    "inline-flex items-center gap-2 font-sans text-xs text-ink-muted border border-rule px-3.5 py-2 hover:border-brand hover:text-brand transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="font-sans text-xs uppercase tracking-widest text-ink-muted mr-1">Teilen</span>

      <a
        href={fbHref}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label={`Stelle „${title}" auf Facebook teilen (öffnet neuen Tab)`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
        </svg>
        Facebook
      </a>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label={`Stelle „${title}" per WhatsApp teilen (öffnet neuen Tab)`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.24-9.43 9.45-9.43 2.52 0 4.89.98 6.67 2.77a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43Zm8.03-17.46A11.32 11.32 0 0 0 12.05.9C5.8.9.72 5.98.72 12.22c0 1.99.52 3.94 1.51 5.66L.63 23.6l5.85-1.54a11.3 11.3 0 0 0 5.42 1.38h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.03-1.18-5.87-3.32-8.01Z" />
        </svg>
        WhatsApp
      </a>

      <button
        type="button"
        onClick={copyLink}
        className={btn}
        aria-label={`Link zur Stelle „${title}" kopieren`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        {copied ? "Kopiert!" : "Link kopieren"}
      </button>
    </div>
  );
}
