import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WatermarkLogo from "@/components/WatermarkLogo";
import Breadcrumb from "@/components/Breadcrumb";
import { teamMembers } from "@/lib/data";
import { TrackedLink } from "@/components/TrackedLink";
import JobShare from "@/components/JobShare";
import type { Metadata } from "next";
import { bewerbung } from "@/lib/mailto";

export const metadata: Metadata = {
  title: { absolute: "Jobs bei Bäckerei Karl Bauer | Weinviertel" },
  description:
    "Jetzt bewerben: Offene Stellen bei Bäckerei Karl Bauer GmbH im Weinviertel. FahrerIn Backstube Wetzelsdorf (15 bis 20 Std./Woche), FeinkostmitarbeiterIn ADEG Bauer Ladendorf (30 bis 35 Std./Woche) und LebensmittelverkäuferIn in Poysdorf, Wiener Straße (30 Std./Woche). Echter Familienbetrieb seit 1960.",
  alternates: {
    canonical: "/jobs",
  },
  keywords: [
    "Jobs Bäckerei Weinviertel",
    "Arbeit Bäckerei Niederösterreich",
    "Stellenangebote Poysdorf",
    "Fahrer Job Weinviertel",
    "FahrerIn Wetzelsdorf",
    "Zusteller Bäckerei Niederösterreich",
    "VerkäuferIn Poysdorf Wiener Straße",
    "Feinkost Job Ladendorf",
    "FeinkostmitarbeiterIn Weinviertel",
    "LebensmittelverkäuferIn Weinviertel",
    "Job Bäckerei 2026",
    "Teilzeit Bäckerei",
    "Bäckerei Karl Bauer Stellen",
    "Verkäufer Lebensmittel Niederösterreich",
  ],
  openGraph: {
    title: "Jobs bei Bäckerei Karl Bauer | Weinviertel",
    description:
      "Offene Stellen im Weinviertel: FahrerIn Backstube Wetzelsdorf, 15 bis 20 Std./Woche, Start 3:30 Uhr. FeinkostmitarbeiterIn Ladendorf, 30 bis 35 Std./Woche. LebensmittelverkäuferIn Poysdorf, 30 Std./Woche. Familienbetrieb seit 1960.",
    url: "https://www.example.invalid/jobs",
    // #19: Jobs-spezifisches Bild: Mitarbeiterin aus dem Team statt Geschäftsführer
    images: [
      {
        url: "/images/team/Martina.png",
        width: 1080,
        height: 1350,
        alt: "Martina, langjährige Mitarbeiterin der Bäckerei Karl Bauer GmbH",
      },
    ],
  },
  // #5: Twitter Card Jobs
  twitter: {
    card: "summary_large_image",
    title: "Jobs bei Bäckerei Karl Bauer | Weinviertel",
    description: "Jetzt bewerben: FahrerIn Backstube Wetzelsdorf (15 bis 20 Std./Woche), FeinkostmitarbeiterIn Ladendorf (30 bis 35 Std./Woche) und LebensmittelverkäuferIn Poysdorf (30 Std./Woche). Familienbetrieb seit 1960.",
    images: ["/images/team/Martina.png"],
  },
};

const dani    = teamMembers.find((m) => m.name === "Dani")    ?? teamMembers[5];
const martina = teamMembers.find((m) => m.name === "Martina") ?? teamMembers[7];

const DANI_YEARS    = "12 Jahre im Team";
const MARTINA_YEARS = "13 Jahre im Team";

const benefits = [
  {
    number: "65",
    unit: "Jahre",
    heading: "Verwurzelt im Weinviertel",
    text: "Kein Konzern, kein anonymes Großunternehmen. Ein gewachsener Familienbetrieb, in dem man sich kennt und schätzt.",
  },
  {
    number: "13",
    unit: "Standorte",
    heading: "Dein Arbeitsplatz ist ums Eck",
    text: "Von Herrnbaumgarten bis Lanzendorf: Mit 13 Filialen im Weinviertel bist du nie weit von zu Hause.",
  },
  {
    number: "80+",
    unit: "im Team",
    heading: "Menschen, die gern da sind",
    text: "Manche sind seit über zwölf Jahren dabei. Das sagt alles. Wir halten zusammen, auch wenn's mal stressig wird.",
  },
];

type Job = {
  id: string;
  title: string;
  count: number;
  hours: string;
  location: string;
  locationHref?: string;
  start?: string;
  intro: string;
  /** Hervorgehobene Stelle: Bild + 3-Schritt-Visualisierung, „Neu"-Badge */
  featured?: {
    heading: string;
    image: string;
    imageAlt: string;
    imageCaption: string;
    steps: { label: string; detail: string }[];
  };
  applySubject: string;
  /** Eigene Teilen-URL mit eigener Facebook-Vorschau (Facebook ignoriert #anker) */
  sharePath?: string;
  requirements: string[];
  tasks: string[];
  benefits: string[];
  schema: {
    datePosted: string;
    validThrough: string;
    employmentType: string;
    addressLocality: string;
    streetAddress?: string;
    postalCode?: string;
    workHours: string;
    qualifications: string;
    skills: string;
  };
};

const jobs: Job[] = [
  {
    id: "fahrerin-wetzelsdorf",
    title: "FahrerIn",
    count: 1,
    hours: "15 bis 20 Std./Woche",
    location: "Backstube Wetzelsdorf",
    start: "Ab sofort · dringend",
    intro:
      "Wenn das Weinviertel noch schläft, ist unser Brot schon unterwegs. Für unsere Backstube in Wetzelsdorf suchen wir eine verlässliche FahrerIn, die unsere frischen Backwaren jede Nacht in die Filialen bringt. Dein Arbeitstag beginnt um 3:30 Uhr früh.",
    featured: {
      heading: "Von der Backstube in die Filiale",
      image: "/images/galerie/strip-backstube-koerbe.jpg",
      imageAlt: "Körbe mit frischem Gebäck in der Backstube der Bäckerei Karl Bauer, bereit zur Auslieferung",
      imageCaption: "Backstube Wetzelsdorf",
      steps: [
        { label: "Laden", detail: "Um 3:30 Uhr früh stehen die Brotkisten in Wetzelsdorf bereit." },
        { label: "Fahren", detail: "Du fährst die Tour durchs Weinviertel, während alle noch schlafen." },
        { label: "Ausliefern", detail: "In der Früh liegt in den Filialen alles frisch im Regal." },
      ],
    },
    applySubject: "Bewerbung FahrerIn Wetzelsdorf",
    sharePath: "/jobs/fahrerin",
    requirements: [
      "Führerschein B",
      "Gute Deutschkenntnisse",
      "Ortskenntnis im Weinviertel",
      "Körperliche Belastbarkeit: Du hebst und trägst Brotkisten",
      "Pünktlichkeit und Verlässlichkeit, auch mitten in der Nacht",
    ],
    tasks: [
      "Ausliefern unserer Backwaren aus der Backstube Wetzelsdorf an unsere Filialen",
      "Be- und Entladen der Brotkisten",
      "Sorgfältiger Umgang mit Ware und Fahrzeug",
      "Einhalten der Tour und der Lieferzeiten",
    ],
    benefits: [
      "Entlohnung nach Kollektivvertrag inklusive Nachtzuschlägen",
      "15 bis 20 Stunden pro Woche bei einer 5-Tage-Woche",
      "Arbeitsbeginn 3:30 Uhr früh, danach ist der Tag frei",
      "Sicherer Arbeitsplatz in einem Familienbetrieb seit 1960",
      "Gründliche Einschulung auf die Touren",
    ],
    schema: {
      datePosted: "2026-10-09",
      validThrough: "2026-12-31",
      employmentType: "PART_TIME",
      addressLocality: "Wetzelsdorf",
      streetAddress: "Baumfeldstraße 9",
      postalCode: "2170",
      workHours: "15 bis 20 Stunden pro Woche, 5-Tage-Woche, Arbeitsbeginn 3:30 Uhr",
      qualifications: "Führerschein B, gute Deutschkenntnisse, Ortskenntnis im Weinviertel",
      skills: "Auslieferung, Be- und Entladen, Tourenplanung",
    },
  },
  {
    id: "feinkost-ladendorf",
    title: "FeinkostmitarbeiterIn",
    count: 1,
    hours: "30 bis 35 Std./Woche",
    location: "ADEG Bauer Ladendorf",
    locationHref: "/filialen",
    start: "Ab sofort",
    intro:
      "Hinter der Feinkostvitrine in unserem ADEG Markt in Ladendorf wird aufgeschnitten, belegt und beraten: frische Wurst, Käse, belegtes Gebäck und die Jause für zwischendurch. Dafür suchen wir Verstärkung mit Motivation und Freude an Menschen und an guten Lebensmitteln.",
    featured: {
      heading: "Hinter der Vitrine",
      image: "/images/jobs/feinkost-ladendorf.jpg",
      imageAlt: "Feinkosttheke im ADEG Bauer Markt Ladendorf mit Wurst- und Käsevitrine",
      imageCaption: "ADEG Bauer Ladendorf",
      steps: [
        { label: "Schneiden", detail: "Wurst und Käse frisch von der Theke, so wie es die Kund:innen möchten." },
        { label: "Belegen", detail: "Aus unserem Gebäck wird die Jause für den Tag." },
        { label: "Beraten", detail: "Du kennst die Ware und gibst gern einen Tipp." },
      ],
    },
    applySubject: "Bewerbung FeinkostmitarbeiterIn Ladendorf",
    sharePath: "/jobs/feinkost-ladendorf",
    requirements: [
      "Motivation und Einsatzfreude: das ist für uns ein Muss",
      "Freude am Umgang mit Menschen und Kund:innen",
      "Sauberes und hygienisches Arbeiten",
      "Freundliches und gepflegtes Auftreten",
      "Verlässlichkeit und Teamgeist",
      "Erfahrung an einer Feinkost- oder Wursttheke wäre toll",
    ],
    tasks: [
      "Aufschneiden, Abwiegen und Verpacken von Wurst, Käse und Feinkost",
      "Belegen von Gebäck und Zubereiten kleiner Jausen",
      "Freundliche Beratung unserer Kund:innen an der Theke",
      "Ansprechende Präsentation und Pflege der Vitrine",
      "Einhalten der Hygienevorschriften",
    ],
    benefits: [
      "Vergütung nach aktuellem Kollektivvertrag",
      "30 bis 35 Stunden pro Woche",
      "Gründliche Einschulung an der Feinkosttheke",
      "Sicherer Arbeitsplatz in einem familiären Unternehmen",
      "Mitarbeiterrabatte und ein angenehmes Betriebsklima",
    ],
    schema: {
      datePosted: "2026-10-22",
      validThrough: "2026-12-31",
      employmentType: "PART_TIME",
      addressLocality: "Ladendorf",
      streetAddress: "Hauptstraße 33",
      postalCode: "2126",
      workHours: "30 bis 35 Stunden pro Woche",
      qualifications: "Motivation (Voraussetzung), Freude am Verkauf, hygienisches Arbeiten, Erfahrung an der Feinkosttheke erwünscht",
      skills: "Feinkost, Aufschnitt, Kundenberatung, Warenpräsentation, Hygiene",
    },
  },
  {
    id: "verkauf-poysdorf-wiener-strasse",
    title: "LebensmittelverkäuferIn",
    count: 1,
    hours: "30 Std./Woche",
    location: "Filiale Poysdorf · Wiener Straße",
    locationHref: "/filialen",
    start: "Ab sofort",
    intro:
      "Für unsere Filiale in der Wiener Straße in Poysdorf suchen wir Verstärkung im Verkauf, mit Freude an Menschen, an frischen Backwaren und an einem guten Kaffee.",
    applySubject: "Bewerbung LebensmittelverkäuferIn Poysdorf Wiener Straße",
    requirements: [
      "Freude am Umgang mit Menschen und Kund:innen",
      "Freundliches und gepflegtes Auftreten",
      "Verlässlichkeit und Teamgeist",
      "Erfahrung im Verkauf von Vorteil, aber keine Voraussetzung",
    ],
    tasks: [
      "Freundliche Beratung und Betreuung unserer Kund:innen",
      "Verkauf unserer Backwaren und Kaffeespezialitäten",
      "Zubereitung kleiner Snacks und Frühstücke",
      "Kassiertätigkeiten und ansprechende Warenpräsentation",
    ],
    benefits: [
      "Vergütung nach aktuellem Kollektivvertrag",
      "30 Stunden pro Woche",
      "Sicherer Arbeitsplatz in einem familiären Unternehmen",
      "Ein wertschätzendes Arbeitsumfeld",
      "Mitarbeiterrabatte und ein angenehmes Betriebsklima",
    ],
    schema: {
      datePosted: "2026-09-16",
      validThrough: "2026-12-31",
      employmentType: "PART_TIME",
      addressLocality: "Poysdorf",
      streetAddress: "Wiener Straße 13",
      postalCode: "2170",
      workHours: "30 Stunden pro Woche",
      qualifications: "Freude am Verkauf, Erfahrung von Vorteil",
      skills: "Kundenbetreuung, Kassiertätigkeit, Warenpräsentation",
    },
  },
];

const SITE = "https://www.example.invalid";

const tickerItems = [
  "Neu: FahrerIn Backstube Wetzelsdorf",
  "Neu: Feinkost ADEG Bauer Ladendorf",
  "VerkäuferIn Poysdorf Wiener Straße",
  "Familienunternehmen",
  "Handwerk seit 1960",
  "13 Standorte",
  "Weinviertel",
  "Ab sofort",
  "Echte Wertschätzung",
  "Täglich frisch",
  "80+ im Team",
  "#TeamBäckereiBauer",
];

export default function JobsPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Je Stelle ein JobPosting — BreadcrumbList liefert bereits die <Breadcrumb>-Komponente.
            Inhalt ist statisch/entwicklerkontrolliert (jobs-Array oben), JSON.stringify escaped — kein User-Input. */}
        {jobs.map((job) => {
          const ld = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            description: `${job.intro} Aufgaben: ${job.tasks.join(", ")}.`,
            datePosted: job.schema.datePosted,
            validThrough: job.schema.validThrough,
            employmentType: job.schema.employmentType,
            hiringOrganization: {
              "@type": "Organization",
              name: "Bäckerei Karl Bauer GmbH",
              sameAs: SITE,
              logo: `${SITE}/images/logo/logo-diamond.png`,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                ...(job.schema.streetAddress ? { streetAddress: job.schema.streetAddress } : {}),
                addressLocality: job.schema.addressLocality,
                ...(job.schema.postalCode ? { postalCode: job.schema.postalCode } : {}),
                addressRegion: "Niederösterreich",
                addressCountry: "AT",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "EUR",
              value: {
                "@type": "QuantitativeValue",
                unitText: "MONTH",
                description: "Kollektivvertrag",
              },
            },
            workHours: job.schema.workHours,
            qualifications: job.schema.qualifications,
            skills: job.schema.skills,
            applicationContact: {
              "@type": "ContactPoint",
              email: "office@example.invalid",
              contactType: "HR",
            },
          });
          return (
            <script
              key={job.id}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: ld }}
            />
          );
        })}

        <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Jobs" }]} />

        {/* ─── HERO: Split: Text links (hell) · Team-Fotos rechts ── */}
        <section className="min-h-[100svh] grid grid-cols-1 lg:grid-cols-2" aria-label="Jobs Hero">

          {/* Linke Seite: hell, Papier-Weiß */}
          <div className="bg-page flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 pt-28 pb-16 lg:py-0">

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-rule" aria-hidden="true" />
              <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted">
                Team Bäckerei Bauer · Weinviertel
              </p>
            </div>

            <h1
              className="font-serif leading-[0.92] text-ink mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              Werde Teil<br />
              <span className="text-brand">unseres</span><br />
              Teams.
            </h1>

            <p className="text-ink-secondary font-sans text-base md:text-lg leading-relaxed max-w-md mb-10">
              Wir sind ein Familienbetrieb im Weinviertel. Bodenständig, echt und froh über jeden Menschen, der gern dabei ist.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10 pb-10 border-b border-rule">
              {[{ n: "65", u: "Jahre" }, { n: "13", u: "Standorte" }, { n: "80+", u: "im Team" }].map(({ n, u }, i) => (
                <div key={u} className={i > 0 ? "pl-8 border-l border-rule" : ""}>
                  <p className="font-serif text-3xl md:text-4xl text-accent leading-none mb-1">{n}</p>
                  <p className="font-sans text-xs uppercase tracking-widest text-ink-muted">{u}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#offene-stelle"
                className="inline-flex items-center justify-center gap-2.5 bg-accent text-inverse font-sans font-semibold text-sm px-7 py-3.5 hover:bg-accent-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Zu den offenen Stellen
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1L13 7L7 13M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <TrackedLink
                href={bewerbung("Spontanbewerbung")}
                eventName="job_spontan_apply_click"
                className="inline-flex items-center justify-center gap-2.5 border border-rule text-ink-secondary font-sans text-sm px-7 py-3.5 hover:border-brand hover:text-brand transition-colors duration-200"
              >
                Spontan bewerben
              </TrackedLink>
            </div>
          </div>

          {/* Rechte Seite: Team-Foto-Grid, sofort sichtbar */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-2 h-full min-h-[100svh]" aria-hidden="true">
            {teamMembers.slice(0, 6).map((member, i) => (
              <div key={member.name} className="relative overflow-hidden group">
                <Image
                  src={member.image}
                  alt=""
                  fill
                  priority={i < 3}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="20vw"
                />
                {/* Overlay: dunkel-blauer Gradient unten */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
                {/* Name erscheint beim Hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pb-3 px-3">
                  <p className="font-sans text-[9px] uppercase tracking-widest text-white/85 text-center truncate">{member.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: schmaler horizontaler Foto-Strip */}
          <div className="lg:hidden flex h-[200px] w-full" aria-hidden="true">
            {teamMembers.slice(0, 6).map((member) => (
              <div key={member.name} className="relative flex-1 overflow-hidden">
                <Image
                  src={member.image}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="17vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>

        </section>

        {/* ─── TICKER ───────────────────────────────────────────── */}
        <div className="bg-accent overflow-hidden py-3.5" aria-hidden="true">
          <div
            className="ticker-track flex whitespace-nowrap"
            style={{ animation: "ticker 32s linear infinite" }}
          >
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-6 font-sans font-semibold text-[11px] uppercase tracking-[0.2em] text-inverse px-7">
                {item}
                <span className="text-inverse/35">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── TEAM QUOTES: Full Portrait (jetzt weiter oben) ──── */}
        <section className="relative overflow-hidden bg-surface border-b border-rule" aria-label="Stimme aus dem Team">
          <WatermarkLogo position="top-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-10 md:pb-12">
            <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-4">
              Das sagen unsere Mitarbeiterinnen
            </p>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink leading-tight">
              Echte Menschen. Echte Stimmen.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Dani */}
            <div className="relative h-[380px] md:h-[560px] overflow-hidden group">
              <Image
                src={dani.image}
                alt={`${dani.name}, ${dani.location}`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <blockquote>
                  <p className="font-serif italic text-xl md:text-2xl text-white leading-relaxed mb-5">
                    &bdquo;{dani.quote}&ldquo;
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="h-px w-8 bg-accent shrink-0" aria-hidden="true" />
                    <div>
                      <span className="font-sans font-semibold text-xs text-white">{dani.name}</span>
                      <span className="font-sans text-xs text-white/50 ml-2">· {DANI_YEARS}</span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Martina */}
            <div className="relative h-[380px] md:h-[560px] overflow-hidden group md:border-l md:border-black/10">
              <Image
                src={martina.image}
                alt={`${martina.name}, ${martina.location}`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <blockquote>
                  <p className="font-serif italic text-xl md:text-2xl text-white leading-relaxed mb-5">
                    &bdquo;{martina.quote}&ldquo;
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="h-px w-8 bg-accent shrink-0" aria-hidden="true" />
                    <div>
                      <span className="font-sans font-semibold text-xs text-white">{martina.name}</span>
                      <span className="font-sans text-xs text-white/50 ml-2">· {MARTINA_YEARS}</span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>

          </div>
        </section>

        {/* ─── BENEFITS ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-page" aria-label="Warum bei uns arbeiten">
          <WatermarkLogo position="bottom-right" size="lg" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-4">
            <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-4">
              Warum Bäckerei Bauer
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight">
              Kein anonymer Arbeitgeber.<br />Ein echter Betrieb.
            </h2>
          </div>

          {benefits.map((item, i) => (
            <div
              key={item.heading}
              className={`group border-b border-rule hover:bg-surface transition-colors duration-200 ${i === 0 ? "border-t mt-12" : ""}`}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[220px_1fr_1fr] gap-4 md:gap-12 items-start">
                <div className="shrink-0 hidden md:flex items-center">
                  <span
                    className="font-serif leading-none text-ink/10 select-none"
                    style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                </div>
                <div className="md:border-l md:border-rule md:pl-12">
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-ink-muted mb-2">{item.unit}</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">{item.heading}</h3>
                  <p className="md:hidden text-ink-secondary font-sans text-sm leading-relaxed mt-3">{item.text}</p>
                </div>
                <div className="hidden md:block md:border-l md:border-rule md:pl-12">
                  <p className="text-ink-secondary font-sans text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ─── OFFENE STELLE ────────────────────────────────────── */}
        <section
          id="offene-stelle"
          className="relative overflow-hidden bg-page pt-24 md:pt-40 pb-16 md:pb-24"
          aria-label="Offene Stellen"
        >
          <WatermarkLogo position="bottom-left" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16 md:mb-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-4">
                  Offene Stellen
                </p>
                <h2
                  className="font-serif text-ink leading-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                >
                  Wir suchen gerade.
                </h2>
              </div>
              <p className="font-sans text-sm text-ink-muted max-w-xs leading-relaxed">
                Bewerbungsunterlagen mit Lebenslauf, Motivationsschreiben und Arbeitszeugnissen an Frau Mayer.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-10 md:space-y-14">
            {jobs.map((job) => (
              <div key={job.id} id={job.id} className="border border-rule overflow-hidden scroll-mt-28">
                <div className="h-1.5 bg-accent w-full" />

                <div className="px-8 md:px-12 py-8 md:py-10 bg-surface border-b border-rule flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-accent text-inverse font-sans font-semibold text-xs uppercase tracking-wider px-2.5 py-1">
                        {job.count}× gesucht
                      </span>
                      {job.featured && (
                        <span className="border border-accent text-accent font-sans font-semibold text-xs uppercase tracking-wider px-2.5 py-[3px]">
                          Neu
                        </span>
                      )}
                      {job.start && (
                        <span className="font-sans text-xs uppercase tracking-wider text-ink-muted">{job.start}</span>
                      )}
                    </div>
                    <h3
                      className="font-serif text-ink leading-tight mb-4"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                    >
                      {job.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-secondary leading-relaxed max-w-xl">
                      {job.intro}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0 md:text-right">
                    <p className="font-serif text-3xl md:text-4xl text-accent leading-none">{job.hours}</p>
                    {job.locationHref ? (
                      <a
                        href={job.locationHref}
                        className="font-sans text-base md:text-lg font-medium text-ink-secondary hover:text-brand transition-colors duration-150"
                      >
                        {job.location} ↗
                      </a>
                    ) : (
                      <span className="font-sans text-base md:text-lg font-medium text-ink-secondary">{job.location}</span>
                    )}
                  </div>
                </div>

                {job.featured && (
                  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] border-b border-rule">
                    <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[340px] overflow-hidden group">
                      <Image
                        src={job.featured.image}
                        alt={job.featured.imageAlt}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
                      <p className="absolute bottom-5 left-6 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.25em] text-white/85">
                        <span className="h-px w-6 bg-accent" aria-hidden="true" />
                        {job.featured.imageCaption}
                      </p>
                    </div>
                    <div className="px-8 md:px-12 py-10 md:py-12 bg-page">
                      <p className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-8">
                        {job.featured.heading}
                      </p>
                      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8" role="list">
                        {job.featured.steps.map((step, i, all) => (
                          <li key={step.label} className="relative">
                            <span
                              className="block font-serif leading-none text-ink/10 select-none"
                              style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                              aria-hidden="true"
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="-mt-3">
                              <p className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">{step.label}</p>
                              <p className="font-sans text-sm text-ink-secondary leading-relaxed">{step.detail}</p>
                            </div>
                            {i < all.length - 1 && (
                              <svg
                                className="hidden sm:block absolute top-7 -right-6 text-accent"
                                width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                              >
                                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}

                <div className="divide-y divide-rule md:divide-y-0 md:divide-x md:grid md:grid-cols-3">
                  {[
                    { label: "Was wir uns wünschen", items: job.requirements },
                    { label: "Deine Aufgaben",        items: job.tasks },
                    { label: "Was wir bieten",         items: job.benefits },
                  ].map(({ label, items }) => (
                    <div key={label} className="px-5 md:px-10 py-8 md:py-12">
                      <p className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-7">{label}</p>
                      <ul className="space-y-4" role="list">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-[2px] text-accent font-bold font-sans text-sm shrink-0" aria-hidden="true">·</span>
                            <span className="text-ink-secondary font-sans text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-dark border border-accent/30 px-8 md:px-12 py-8 md:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <p className="font-serif italic text-xl text-white mb-1">Interesse? Frau Mayer freut sich.</p>
                    <p className="font-sans text-xs text-white/60">
                      Telefonisch erreichbar bis <strong className="font-semibold text-white/80">11:00 Uhr</strong> vormittags
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2.5 font-sans text-sm text-white/70 border border-white/20 px-6 py-3 hover:border-white/50 hover:text-white transition-colors duration-150"
                    >
                      Kontakt nicht verbunden
                    </a>
                    <TrackedLink
                      href={bewerbung(job.applySubject, `${job.title}, ${job.location}`)}
                      eventName="job_apply_click"
                      aria-label={`Jetzt bewerben für ${job.title} (${job.location}), öffnet E-Mail-Programm`}
                      className="inline-flex items-center justify-center gap-2.5 bg-accent text-inverse font-sans font-semibold text-sm px-6 py-3 hover:bg-accent-dark transition-colors duration-200"
                    >
                      Jetzt bewerben
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </TrackedLink>
                  </div>
                </div>

                <div className="px-8 md:px-12 py-5 bg-page border-t border-rule">
                  <JobShare url={`${SITE}${job.sharePath ?? `/jobs#${job.id}`}`} title={`${job.title} · ${job.location}`} />
                </div>
              </div>
            ))}

            <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1">
              <p className="font-sans text-sm text-ink-muted">
                Keine passende Stelle gefunden? Wir freuen uns auch über Spontanbewerbungen.
              </p>
              <a
                href={bewerbung("Spontanbewerbung Bäckerei Karl Bauer")}
                className="font-sans text-sm font-semibold text-accent hover:text-accent-dark transition-colors shrink-0"
              >
                Spontan bewerben →
              </a>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-brand-mid via-brand-deeper to-brand-dark relative overflow-hidden" aria-label="Bewerbung">
          <div className="absolute inset-0 flex items-center justify-start pointer-events-none" aria-hidden="true">
            <Image
              src="/images/logo/logo-diamond.png"
              alt=""
              width={600}
              height={600}
              className="w-[300px] md:w-[480px] lg:w-[600px] opacity-[0.05] -translate-x-1/3"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">
            <div className="md:grid md:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-[3/2] md:aspect-[4/3] overflow-hidden mb-12 md:mb-0 ring-1 ring-accent/20">
                <Image
                  src="/images/hero/weinviertel-brot-backstube.jpg"
                  alt="Frisches Brot aus der Backstube der Bäckerei Karl Bauer"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-dark/15" />
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Bewerbung</p>
                <h2
                  className="font-serif text-white leading-[1.0] mb-8"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  Klingt<br />
                  <span className="text-accent">nach dir?</span>
                </h2>
                <p className="font-sans text-white/55 leading-relaxed mb-10 max-w-sm text-base">
                  Bewirb dich jetzt mit Lebenslauf, Motivationsschreiben und Arbeitszeugnissen. Wir freuen uns auf dich.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <TrackedLink
                    href={bewerbung("Bewerbung Bäckerei Karl Bauer")}
                    eventName="job_apply_click"
                    aria-label="Jetzt per E-Mail bewerben"
                    className="inline-flex items-center justify-center gap-3 bg-accent text-inverse font-sans font-semibold text-sm px-8 py-4 hover:bg-accent-dark transition-colors duration-200"
                  >
                    office@example.invalid
                  </TrackedLink>
                  <a
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-3 border border-white/25 text-white font-sans font-semibold text-sm px-8 py-4 hover:border-white/60 transition-colors duration-150"
                  >
                    Kontakt nicht verbunden
                  </a>
                </div>
                <p className="mt-6 font-sans text-xs text-white/35">
                  Frau Mayer · telefonisch bis 11:00 Uhr · #TeamBäckereiBauer
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
