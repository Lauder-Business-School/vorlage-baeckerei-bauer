"use client";
// Suche und Filter für die server-gerenderten Filialkarten (#filialfinder li[data-standort]).
// Blendet Karten nur per `hidden` aus: ohne JavaScript bleiben alle Standorte sichtbar,
// und die Karten müssen nicht hydriert werden.
import { useEffect, useState } from "react";
import { normSuche } from "@/lib/suche";

export const FILTER = [
  { id: "alle", label: "Alle Standorte" },
  { id: "sonntag", label: "Sonntags geöffnet" },
  { id: "kaffeehaus", label: "Kaffeehaus" },
  { id: "nahversorger", label: "ADEG & Nahversorger" },
  { id: "backshop", label: "Backshop" },
] as const;
type FilterId = (typeof FILTER)[number]["id"];

export default function FilialFilter({ total, sonntagCount }: { total: number; sonntagCount: number }) {
  const [suche, setSuche] = useState("");
  const [filter, setFilter] = useState<FilterId>("alle");
  const [treffer, setTreffer] = useState(total);

  // Direktlink /filialen#sonntags öffnet die Liste mit aktivem Sonntagsfilter
  useEffect(() => {
    if (window.location.hash === "#sonntags") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- einmalig aus der URL übernommen
      setFilter("sonntag");
      document.getElementById("filialfinder")?.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    const q = normSuche(suche.trim());
    let n = 0;
    document.querySelectorAll<HTMLElement>("#filialfinder li[data-standort]").forEach((li) => {
      const sichtbar =
        (li.dataset.filter ?? "").split(" ").includes(filter) && (!q || (li.dataset.suche ?? "").includes(q));
      li.hidden = !sichtbar;
      if (sichtbar) n++;
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Trefferzahl kommt aus dem DOM (externes System)
    setTreffer(n);
  }, [suche, filter]);

  const filterLabel = FILTER.find((f) => f.id === filter)!.label;
  const status =
    treffer === total
      ? `Alle ${total} Standorte`
      : `${treffer} von ${total} Standorten${filter !== "alle" ? `: ${filterLabel}` : ""}${suche.trim() ? `, Suche „${suche.trim()}“` : ""}`;

  return (
    <>
      <div className="max-w-xl mb-5">
        <label htmlFor="filialsuche" className="block font-sans text-sm font-medium text-ink mb-2">
          Ort oder Filiale suchen
        </label>
        <input
          id="filialsuche"
          type="search"
          value={suche}
          onChange={(e) => setSuche(e.target.value)}
          placeholder="z. B. Poysdorf, Mistelbach, Hohenau"
          autoComplete="off"
          enterKeyHint="search"
          className="w-full min-h-[48px] px-4 bg-surface border border-ink/25 font-sans text-base text-ink placeholder:text-ink-secondary/70 focus:border-brand"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Standorte filtern">
        {FILTER.map((f) => {
          const aktiv = f.id === filter;
          const sonntag = f.id === "sonntag";
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={aktiv}
              onClick={() => setFilter(f.id)}
              className={`min-h-[44px] px-4 font-sans text-sm font-semibold border transition-colors ${
                aktiv
                  ? sonntag
                    ? "bg-accent border-accent text-ink"
                    : "bg-brand border-brand text-inverse"
                  : sonntag
                    ? "bg-accent-muted border-accent text-ink hover:bg-accent"
                    : "bg-surface border-rule text-ink hover:border-brand hover:text-brand"
              }`}
            >
              {f.label}
              {sonntag && ` (${sonntagCount})`}
            </button>
          );
        })}
      </div>

      <p className="font-sans text-sm text-ink-secondary mb-8" role="status" aria-live="polite">
        {status}
      </p>

      {treffer === 0 && (
        <div className="border border-rule bg-surface p-8 max-w-xl mb-8">
          <p className="font-sans text-ink mb-4">
            Für diese Suche gibt es keinen Standort. Vielleicht unter einem Nachbarort oder ohne Filter?
          </p>
          <button
            type="button"
            onClick={() => {
              setSuche("");
              setFilter("alle");
            }}
            className="min-h-[44px] px-5 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors"
          >
            Alle Standorte zeigen
          </button>
        </div>
      )}
    </>
  );
}
