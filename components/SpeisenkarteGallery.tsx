"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const pages = [
  {
    src: "/images/Speisekarte/1.png",
    alt: "Bäckerei Karl Bauer Speisekarte, Titelseite mit Produktcollage",
    label: "Titelseite",
  },
  {
    src: "/images/Speisekarte/2.png",
    alt: "Speisekarte Speisen: Unser Korn, unser Weinviertel",
    label: "Speisen",
  },
  {
    src: "/images/Speisekarte/3.png",
    alt: "Speisekarte Getränke: Heiß- und Kaltgetränke, Biere und Weine mit Preisen",
    label: "Getränke",
  },
  {
    src: "/images/Speisekarte/4.png",
    alt: "Bäckerei Karl Bauer: Vielen Dank für Ihren Einkauf, Social Media und Gutscheine",
    label: "Rückseite",
  },
];

export default function SpeisenkarteGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const open = selected !== null;

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((s) => ((s ?? 0) + 1) % pages.length);
      if (e.key === "ArrowLeft") setSelected((s) => (((s ?? 0) - 1) + pages.length) % pages.length);
      // Fokus-Falle: Tab bleibt innerhalb des Dialogs
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          "button, [href], [tabindex]:not([tabindex='-1'])"
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  // Fokus in den Dialog beim Öffnen, zurück zum Auslöser beim Schließen
  useEffect(() => {
    if (open) {
      dialogRef.current?.focus();
    } else {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setSelected(i);
            }}
            className="group relative aspect-[3/4] overflow-hidden bg-surface border border-rule hover:border-brand transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            aria-label={`${page.label} in Vollansicht öffnen`}
          >
            <Image
              src={page.src}
              alt={page.alt}
              fill
              className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-3">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-inverse">
                {page.label}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/15">
              <span className="bg-inverse/90 rounded-full p-2" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 3H3v5M17 8V3h-5M3 12v5h5M12 17h5v-5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Speisekarte: ${pages[selected].label}`}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 md:p-8 focus:outline-none"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={pages[selected].src}
              alt={pages[selected].alt}
              width={600}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain"
              priority
            />

            {/* Navigationsleiste */}
            <div className="flex items-center justify-between mt-5 px-1">
              <button
                onClick={() => setSelected(((selected - 1) + pages.length) % pages.length)}
                className="flex items-center gap-2 text-inverse/70 hover:text-inverse text-xs font-sans uppercase tracking-wider transition-colors min-h-[44px] px-3"
                aria-label="Vorherige Seite"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Zurück
              </button>

              <span className="text-xs font-sans text-inverse/60 uppercase tracking-widest">
                {selected + 1} / {pages.length} · {pages[selected].label}
              </span>

              <button
                onClick={() => setSelected((selected + 1) % pages.length)}
                className="flex items-center gap-2 text-inverse/70 hover:text-inverse text-xs font-sans uppercase tracking-wider transition-colors min-h-[44px] px-3"
                aria-label="Nächste Seite"
              >
                Weiter
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Schließen-Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-3 right-0 md:-top-5 md:-right-5 bg-inverse/10 hover:bg-inverse/20 border border-inverse/20 rounded-full w-11 h-11 flex items-center justify-center transition-colors"
              aria-label="Schließen"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 2l10 10M12 2L2 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
