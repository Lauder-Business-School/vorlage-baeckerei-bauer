// Filialsuche: Karten werden auf dem Server gerendert, FilialFilter blendet sie im Browser aus.
// "Sonntags geöffnet" heißt: reguläre Sonntagszeiten sind hinterlegt. Kein "Jetzt geöffnet", keine Feiertagslogik.
import Image from "next/image";
import { StarRating } from "@/components/StarRating";
import FilialFilter from "@/components/FilialFilter";
import { normSuche } from "@/lib/suche";
import { telHref } from "@/lib/config";
import {
  type Standort,
  addressLine,
  isSundayOpen,
  isKaffeehaus,
  isNahversorger,
  isBackshop,
  hoursReadable,
} from "@/lib/standorte";

const filterTokens = (s: Standort) =>
  [
    "alle",
    isSundayOpen(s) && "sonntag",
    isKaffeehaus(s) && "kaffeehaus",
    isNahversorger(s) && "nahversorger",
    isBackshop(s) && "backshop",
  ]
    .filter(Boolean)
    .join(" ");

const suchText = (s: Standort) =>
  normSuche([s.name, s.locality, s.street ?? "", s.postalCode ?? "", ...s.features].join(" "));

const featureBadgeColors: Record<string, string> = {
  Kaffeehaus: "bg-brand text-inverse",
  "Lebensmittel und Bäckereiprodukte": "bg-surface text-ink border border-rule",
  ADEG: "bg-ink text-inverse",
  Postpartner: "bg-surface text-ink border border-rule",
  Produktion: "bg-brand-dark text-inverse",
  Zentrale: "bg-brand-dark text-inverse",
  Kaufhaus: "bg-ink text-inverse",
  Backshop: "bg-surface text-ink border border-rule",
  Schulbuffet: "bg-surface text-ink border border-rule",
};

export default function Filialfinder({ standorte }: { standorte: Standort[] }) {
  return (
    <section
      id="filialfinder"
      className="relative overflow-hidden py-12 md:py-24 bg-page scroll-mt-20"
      aria-labelledby="filialfinder-titel"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 id="filialfinder-titel" className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-6">
          Filiale finden
        </h2>
        <FilialFilter total={standorte.length} sonntagCount={standorte.filter(isSundayOpen).length} />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {standorte.map((filiale) => (
            <li
              key={filiale.id}
              id={filiale.id}
              data-standort=""
              data-filter={filterTokens(filiale)}
              data-suche={suchText(filiale)}
              className="scroll-mt-24"
            >
              <FilialKarte filiale={filiale} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FilialKarte({ filiale }: { filiale: Standort }) {
  const sonntag = isSundayOpen(filiale);
  return (
    <article className={`h-full border border-rule flex flex-col ${filiale.highlight ? "border-brand bg-brand/[0.05]" : "bg-surface"}`}>
      {filiale.video ? (
        <div className="relative w-full aspect-video overflow-hidden">
          {/* Bei reduzierter Bewegung nur das Standbild */}
          <video
            src={filiale.video}
            poster={filiale.photo}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover motion-reduce:hidden"
            aria-label={`Video der Filiale ${filiale.name}`}
          />
          {filiale.photo && (
            <Image src={filiale.photo} alt={`Filiale ${filiale.name}`} fill className="object-cover hidden motion-reduce:block" sizes="(max-width: 768px) 100vw, 33vw" />
          )}
        </div>
      ) : filiale.photo ? (
        <div className="relative w-full aspect-video overflow-hidden bg-surface">
          <Image
            src={filiale.photo}
            alt={`Filiale ${filiale.name}`}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="p-5 md:p-8 flex flex-col flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 min-h-[1.75rem]">
          <div className="flex flex-wrap gap-2">
            {filiale.features.map((f) => (
              <span
                key={f}
                className={`text-xs font-sans font-semibold uppercase tracking-wider px-2.5 py-1 ${
                  featureBadgeColors[f] ?? "bg-surface text-ink border border-rule"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
          {filiale.adegPartner && (
            <Image src="/images/partner/adeg-logo.png" alt="ADEG Partner" width={80} height={32} className="h-7 w-auto object-contain" />
          )}
        </div>
        <h3 className="font-serif text-xl text-ink mb-1 leading-tight">{filiale.name}</h3>
        <address className="not-italic text-sm font-sans text-ink-secondary leading-relaxed mb-3">
          {addressLine(filiale)}
        </address>
        <p className="text-sm font-sans text-ink leading-relaxed mb-1">{hoursReadable(filiale.hours)}</p>
        {sonntag && (
          <p className="inline-flex self-start items-center gap-1.5 text-xs font-sans font-semibold text-ink bg-accent-muted px-2 py-1 mb-3">
            Sonntags geöffnet
          </p>
        )}
        {!sonntag && <div className="mb-3" />}
        {filiale.rating && (
          <div className="flex items-center gap-2 mb-4">
            <span className="font-serif font-bold text-brand text-sm leading-none">
              {filiale.rating.toLocaleString("de-AT")}
            </span>
            <StarRating rating={filiale.rating} />
            <span className="text-xs font-sans text-ink-secondary">({filiale.reviewCount} auf Google)</span>
          </div>
        )}
        {filiale.bestReview && (
          <div className="bg-brand/[0.08] px-4 py-3 mb-4">
            <p className="font-serif italic text-sm text-ink-secondary leading-relaxed mb-1.5">
              &bdquo;{filiale.bestReview.text}&ldquo;
            </p>
            <p className="text-xs font-sans text-ink-secondary">{filiale.bestReview.author}, Google Maps</p>
          </div>
        )}
        {!filiale.bestReview && filiale.note && (
          <p className="font-serif italic text-sm text-ink-secondary leading-relaxed mb-4">{filiale.note}</p>
        )}
        {filiale.teamMember && (
          <p className="text-xs font-sans text-ink-secondary mb-4">
            <span className="font-semibold text-ink">{filiale.teamMember}</span> ist hier für euch da
          </p>
        )}
        <div className="mt-auto pt-4 border-t border-rule flex flex-wrap gap-3">
          {filiale.phone && (
            <a
              href={telHref(filiale.phone)}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors"
            >
              Anrufen <span className="font-normal">{filiale.phone}</span>
              <span className="sr-only"> ({filiale.name})</span>
            </a>
          )}
          <a
            href={filiale.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 border border-ink/20 text-ink font-sans font-semibold text-sm hover:border-brand hover:text-brand transition-colors"
          >
            Route anzeigen
            <span className="sr-only"> zu {filiale.name} in Google Maps (öffnet in neuem Tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
