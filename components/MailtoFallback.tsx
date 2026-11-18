"use client";
// Ein Listener für alle mailto-Links der Seite: Bleibt das Fenster nach dem Klick im Vordergrund
// (kein E-Mail-Programm eingerichtet), erscheinen Adresse und Text zum Kopieren.
// Ein Klick ist kein bestätigter Versand und keine bestätigte Bestellung.
import { useEffect, useRef, useState } from "react";
import { isMailto, parseMailto, type MailVorlage } from "@/lib/mailto";

export default function MailtoFallback() {
  const [vorlage, setVorlage] = useState<MailVorlage | null>(null);
  const [kopiert, setKopiert] = useState<"" | "adresse" | "text" | "fehler">("");
  const panel = useRef<HTMLDivElement>(null);
  const ausloeser = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    const abbrechen = () => window.clearTimeout(timer);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (isMailto(href)) {
        const v = parseMailto(href);
        ausloeser.current = a;
        abbrechen();
        timer = window.setTimeout(() => {
          // Öffnet sich ein Mailprogramm, verliert das Fenster den Fokus (blur) und der Timer ist schon abgebrochen
          if (document.visibilityState === "visible") {
            setKopiert("");
            setVorlage(v);
          }
        }, 1500);
      }
    };
    document.addEventListener("click", onClick);
    window.addEventListener("blur", abbrechen);
    document.addEventListener("visibilitychange", abbrechen);
    return () => {
      abbrechen();
      document.removeEventListener("click", onClick);
      window.removeEventListener("blur", abbrechen);
      document.removeEventListener("visibilitychange", abbrechen);
    };
  }, []);

  useEffect(() => {
    if (!vorlage) return;
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setVorlage(null);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      // Fokus zurück auf den Link, der das Panel ausgelöst hat
      ausloeser.current?.focus();
    };
  }, [vorlage]);

  if (!vorlage) return null;

  const volltext = `Betreff: ${vorlage.subject}\n\n${vorlage.body}`;
  const kopieren = async (was: "adresse" | "text", inhalt: string) => {
    try {
      await navigator.clipboard.writeText(inhalt);
      setKopiert(was);
    } catch {
      // Zwischenablage gesperrt: Text markieren, damit er von Hand kopiert werden kann
      setKopiert("fehler");
      const feld = document.getElementById("mailto-fallback-text") as HTMLTextAreaElement | null;
      feld?.focus();
      feld?.select();
    }
  };

  return (
    <div
      ref={panel}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="mailto-fallback-titel"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-lg bg-surface border border-rule shadow-xl p-5 md:p-6 outline-none font-sans"
    >
      <h2 id="mailto-fallback-titel" className="font-serif text-xl text-ink mb-2">
        Kein E-Mail-Programm geöffnet?
      </h2>
      <p className="text-sm text-ink-secondary leading-relaxed mb-4">
        Dann einfach Adresse und Text kopieren und aus dem eigenen Postfach senden.
      </p>
      <p className="text-sm text-ink mb-1">
        An: <span className="font-semibold break-all">{vorlage.to}</span>
      </p>
      <label htmlFor="mailto-fallback-text" className="block text-xs uppercase tracking-wider text-ink-secondary mt-3 mb-1">
        Text
      </label>
      <textarea
        id="mailto-fallback-text"
        readOnly
        value={volltext}
        rows={7}
        className="w-full text-sm text-ink bg-page border border-rule p-3 resize-none"
      />
      {kopiert === "fehler" && (
        <p className="text-sm text-ink mt-2">Kopieren war nicht möglich. Der Text ist markiert und kann von Hand kopiert werden.</p>
      )}
      <div className="flex flex-wrap gap-3 mt-4">
        <button
          type="button"
          onClick={() => kopieren("adresse", vorlage.to)}
          className="min-h-[44px] px-4 bg-brand text-inverse text-sm font-semibold hover:bg-brand-dark transition-colors"
        >
          {kopiert === "adresse" ? "Adresse kopiert" : "Adresse kopieren"}
        </button>
        <button
          type="button"
          onClick={() => kopieren("text", volltext)}
          className="min-h-[44px] px-4 bg-brand text-inverse text-sm font-semibold hover:bg-brand-dark transition-colors"
        >
          {kopiert === "text" ? "Text kopiert" : "Text kopieren"}
        </button>
        <button
          type="button"
          onClick={() => setVorlage(null)}
          className="min-h-[44px] px-4 border border-ink/20 text-ink text-sm font-medium hover:border-brand hover:text-brand transition-colors"
        >
          Schließen
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {kopiert === "adresse" ? "Adresse kopiert" : kopiert === "text" ? "Text kopiert" : kopiert === "fehler" ? "Kopieren nicht möglich, Text ist markiert" : ""}
      </p>
    </div>
  );
}
