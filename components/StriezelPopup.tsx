"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { striezel2026, isStriezelActive } from "@/lib/data";
import { CONTACT_PHONE, telHref } from "@/lib/config";

const STORAGE_KEY = "striezel2026-dismissed";
const DELAY_MS = 5000;
const QUIET_DAYS = 3;

export default function StriezelPopup() {
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/allerheiligenstriezel") return;
    if (!isStriezelActive()) return;
    try {
      const last = Number(localStorage.getItem(STORAGE_KEY));
      if (last && Date.now() - last < QUIET_DAYS * 86_400_000) return;
    } catch {
      // Speicher blockiert: Pop-up trotzdem zeigen.
    }
    const t = setTimeout(() => {
      if (!ref.current?.open) ref.current?.showModal();
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  const close = () => ref.current?.close();

  if (!isStriezelActive()) return null;

  return (
    <dialog
      ref={ref}
      aria-labelledby="striezel-popup-title"
      onClose={() => {
        try {
          localStorage.setItem(STORAGE_KEY, String(Date.now()));
        } catch {}
      }}
      // Klick auf den Hintergrund schließt.
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto w-[min(92vw,56rem)] max-h-[92vh] p-0 bg-page shadow-2xl backdrop:bg-brand-dark/70"
    >
      <div>
        <div className="flex justify-end p-1">
          <button
            type="button"
            onClick={close}
            aria-label="Schließen"
            className="w-11 h-11 text-ink text-3xl leading-none flex items-center justify-center hover:text-brand"
          >
            ×
          </button>
        </div>
        <Link href="/allerheiligenstriezel" onClick={close}>
          <Image
            src={striezel2026.image}
            alt={striezel2026.alt}
            width={striezel2026.imageWidth}
            height={striezel2026.imageHeight}
            sizes="(max-width: 768px) 92vw, 56rem"
            loading="eager"
            className="w-full h-auto"
          />
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between px-5 py-4">
          <p id="striezel-popup-title" className="font-serif text-lg text-ink leading-snug">
            Unsere Allerheiligenstriezel sind da. Jetzt vorbestellen!
          </p>
          <div className="flex gap-3 shrink-0">
            <a
              href={telHref(CONTACT_PHONE)}
              className="bg-accent hover:bg-accent/90 text-white font-sans font-semibold text-sm px-5 py-3 transition-colors"
            >
              Anrufen
            </a>
            <Link
              href="/allerheiligenstriezel"
              onClick={close}
              className="border border-brand text-brand font-sans font-semibold text-sm px-5 py-3 hover:bg-brand hover:text-white transition-colors"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </dialog>
  );
}
