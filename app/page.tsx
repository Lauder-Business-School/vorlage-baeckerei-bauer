import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { ArrowRight } from "@/components/icons";
import { teamMembers, blogPosts, striezel2026, isStriezelActive } from "@/lib/data";
import { CONTACT_PHONE, telHref } from "@/lib/config";
import LazyYouTubeBackground from "@/components/LazyYouTubeBackground";
import WatermarkLogo from "@/components/WatermarkLogo";
import LazyYouTubeEmbed from "@/components/LazyYouTubeEmbed";
import { vorbestellung } from "@/lib/mailto";

// Stündlich neu rendern: Striezel-Block verschwindet am 2.11.2026 von selbst.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Bäckerei Karl Bauer | Handwerk aus dem Weinviertel seit 1960",
  description:
    "Hausbrot, Winzerwecken und Sauerteigbrot aus dem Weinviertel. 13 Filialen in Niederösterreich, 4 Kaffeehäuser. Täglich frisch aus der Backstube Wetzelsdorf.",
  alternates: {
    canonical: "/",
  },
  // #13: Keywords speziell für die Startseite
  keywords: [
    "Bäckerei Weinviertel",
    "Bäckerei Karl Bauer",
    "Hausbrot Niederösterreich",
    "Winzerwecken kaufen",
    "Sauerteigbrot Weinviertel",
    "Handwerksbäckerei Österreich",
    "Brot frisch täglich",
    "Bäckerei 13 Filialen",
    "Backstube Wetzelsdorf",
    "Bäckerei seit 1960",
    "Kaffeehaus Weinviertel",
    "Buchteln Mittwoch",
    "Brot vorbestellen",
    "regionale Bäckerei Niederösterreich",
  ],
  openGraph: {
    title: "Bäckerei Karl Bauer | Handwerk aus dem Weinviertel seit 1960",
    // #14: OG-Description = gleiche wie meta description (konsistent)
    description:
      "Hausbrot, Winzerwecken und Sauerteigbrot aus dem Weinviertel. 13 Filialen in Niederösterreich, 4 Kaffeehäuser. Täglich frisch aus der Backstube Wetzelsdorf.",
    url: "https://www.example.invalid",
    images: [
      {
        url: "/images/hero/weinviertel-brot-backstube.jpg",
        width: 1200,
        height: 800,
        alt: "Weinviertel-Sauerteigbrot mit eingeätztem Schriftzug, Backstube Bäckerei Karl Bauer",
      },
    ],
  },
};

const pillars = [
  {
    number: "01",
    unit: "Bäckerei",
    heading: "Frisches Brot. Jeden Morgen.",
    text: "Seit 1960 backen wir in Wetzelsdorf, mit eigenem Sauerteig, Mehl aus regionalen Mühlen und Händen, die ihr Handwerk kennen. Für Kinder auf dem Weg zur Schule und Pensionisten, die jeden Tag ihre Semmel holen.",
  },
  {
    number: "02",
    unit: "Kaffeehaus",
    heading: "Mehr als nur Kaffee.",
    text: "Unsere Kaffeehäuser sind Treffpunkte. Hier wird Zeitung gelesen, geplaudert, durchgeatmet. Hausgemachtes Gebäck, guter Kaffee und das Gefühl, willkommen zu sein.",
  },
  {
    number: "03",
    unit: "ADEG & Schulbuffet",
    heading: "Nah. Täglich. Für alle.",
    text: "Ob im ADEG-Supermarkt oder am Schulbuffet: Wir sind dort, wo das Leben passiert. Frische Qualität für die Region, vom ersten Jausensemmerl bis zum Feierabendeinkauf.",
  },
  {
    number: "13",
    unit: "Standorte",
    heading: "Ein Ziel im Weinviertel.",
    text: "Dreizehn Standorte, eine Haltung: Qualität, die man schmeckt. Für Menschen im Weinviertel, egal ob jung oder alt, ob Bäcker oder Schulkind.",
  },
];

const marqueeLabels = [
  "Weinviertel",
  "Handgemacht seit 1960",
  "13 Filialen",
  "Sauerteig aus eigener Führung",
  "Bäckerei Karl Bauer",
];

const regionalFacts = [
  {
    label: "Weinviertler Mehl",
    detail: "Regionale Mühlen, kurze Wege, voller Geschmack.",
  },
  {
    label: "Eigene Sauerteigführung",
    detail: "Unser Sauerteig kommt nicht aus der Tüte. Den führen wir selbst.",
  },
  {
    label: "Täglich frisch gebacken",
    detail: "Jede Nacht wird in Wetzelsdorf gebacken. Morgens ist alles frisch in den Filialen.",
  },
];

export default function Home() {
  // Striezel-Preisbeitrag nach Aktionsende nicht mehr als Aufmacher; im Blog bleibt er.
  const homePosts = isStriezelActive()
    ? blogPosts
    : blogPosts.filter((p) => p.slug !== "allerheiligenstriezel-2026-preise");
  return (
    <>
      <Navigation />

      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.example.invalid/#webpage",
                  url: "https://www.example.invalid",
                  name: "Bäckerei Karl Bauer | Handwerk aus dem Weinviertel seit 1960",
                  description:
                    "Handwerklich gebackenes Brot, Gebäck und Kaffeehaus im Weinviertel. 13 Filialen in Niederösterreich.",
                  isPartOf: { "@id": "https://www.example.invalid/#website" },
                  about: { "@id": "https://www.example.invalid/#bakery" },
                },
              ],
            }),
          }}
        />

        {/* ─── HERO: Cinematic Video ──────────────────────────────── */}
        <section className="relative min-h-screen flex items-end" aria-label="Hero">
          <Image
            src="/images/hero/weinviertelbrot-hero.jpg"
            alt="Frisch gebackenes Weinviertler Brot, warm aus dem Ofen der Bäckerei Bauer"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Video nur auf Desktop, auf Mobile verursacht YouTube native Controls */}
          <div className="absolute inset-0 overflow-hidden hidden md:block">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ width: "177.78vh", height: "100vh", minWidth: "100%", minHeight: "56.25vw" }}
            >
              <LazyYouTubeBackground
                videoId="-DhgZm8BuOs"
                title="Bäckerei Karl Bauer Backstube Weinviertel"
                start={8}
                end={30}
                delayMs={3000}
              />
            </div>
          </div>
          {/* Sanfterer Overlay: mehr Bildwirkung */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/25" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-24 md:pb-36 pb-safe">
            <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-white/50 mb-6">
              Bäckerei Karl Bauer · Weinviertel · seit 1960
            </p>
            <h1 className="font-serif text-[clamp(2.75rem,7.5vw,6rem)] leading-[1.0] font-normal text-white max-w-2xl mb-8 text-balance">
              Seit 1960.<br />
              Aus dem Weinviertel.<br />
              Für euch.
            </h1>
            <div className="w-12 h-px bg-accent mb-8" aria-hidden="true" />
            <p className="text-base md:text-lg text-white/65 mb-12 max-w-xs font-sans leading-relaxed">
              Handwerk, das man schmeckt.<br />Frisch gebacken in 13 Filialen.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/sortiment"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-ink font-sans font-semibold text-sm hover:bg-accent hover:text-white transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Sortiment entdecken
                <ArrowRight className="transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/filialen"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-sans text-sm hover:border-white/70 transition-colors duration-150"
              >
                Filiale finden
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 pointer-events-none" aria-hidden="true">
            <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-white/40">Scroll</span>
            <svg width="14" height="18" viewBox="0 0 16 20" fill="none" className="animate-bounce opacity-40">
              <path d="M8 2V14M3 10L8 15L13 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>

        {/* ─── EYEBROW STRIP ──────────────────────────────────────── */}
        <div className="py-4 border-b border-rule bg-page overflow-hidden" aria-hidden="true">
          <div className="flex items-center gap-10 animate-logo-marquee" style={{width: "max-content"}}>
            {Array.from({ length: 4 }, (_, rep) =>
              marqueeLabels.map((label, i) => (
                <span key={`${rep}-${i}`} className="flex items-center gap-10 flex-shrink-0">
                  <Image src="/images/logo/logo-diamond.png" alt="" width={24} height={24} className="h-5 w-5 opacity-20" />
                  <span className="font-sans text-xs font-medium tracking-[0.22em] uppercase text-ink-muted whitespace-nowrap">
                    {label}
                  </span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* ─── PILLARS: Viel Luft, große Zahlen ──────────────────── */}
        <section className="relative overflow-hidden bg-page" aria-label="Was uns ausmacht">
          <WatermarkLogo position="top-right" size="lg" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-14 md:pt-44 pb-0">
            <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-6">
              Was uns ausmacht
            </p>
          </div>
          {pillars.map((pillar, i) => (
            <div key={pillar.number} className="border-t border-rule">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 grid grid-cols-1 md:grid-cols-[180px_1fr_1.4fr] gap-4 md:gap-16 items-start">
                {/* Große Zahl */}
                <div>
                  <span className="font-serif text-[clamp(3.5rem,7vw,5.5rem)] leading-none text-accent/50 block" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Heading */}
                <div className="md:pt-2">
                  <span className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-accent block mb-3">
                    {pillar.number} {pillar.unit}
                  </span>
                  <h2 className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] text-ink leading-tight">
                    {pillar.heading}
                  </h2>
                </div>
                {/* Text */}
                <div className="md:pt-2">
                  <p className="text-ink-secondary font-sans leading-relaxed text-base max-w-lg">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-rule" />
        </section>

        {/* ─── PRODUKTE ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-page pt-14 md:pt-44 pb-14 md:pb-44" aria-label="Frische Produkte">
          <WatermarkLogo position="bottom-left" size="lg" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-end justify-between mb-10 md:mb-20">
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-4">
                  Sortiment
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight text-balance">
                  Heute frisch aus dem Ofen
                </h2>
              </div>
              <Link href="/sortiment" className="hidden md:inline-flex items-center gap-1.5 text-sm font-sans text-brand hover:text-ink transition-colors underline underline-offset-4 decoration-brand/30">
                Gesamtes Sortiment
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Featured */}
              <div className="group relative overflow-hidden h-80 md:h-[560px]">
                <Image
                  src="/images/produkte/brot/winzerwecken.jpg"
                  alt="Winzerwecken mit knuspriger Kruste, das Hausbrot-Original der Bäckerei Bauer"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="text-xs font-sans uppercase tracking-[0.25em] text-white/50 mb-2">Empfehlung</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-2">Winzerwecken</h3>
                  <p className="text-sm text-white/55 font-sans mb-5">Hausbrot-Original · knusprige Kruste</p>
                  <a
                    href={vorbestellung("Winzerwecken")}
                    className="inline-flex items-center gap-2 text-sm font-semibold font-sans text-accent hover:text-white transition-colors"
                  >
                    Vorbestellen
                    <ArrowRight />
                  </a>
                </div>
              </div>

              {/* Zwei gestapelt */}
              <div className="flex flex-col gap-4">
                <div className="group relative overflow-hidden flex-1 h-64 md:h-auto">
                  <Image
                    src="/images/produkte/brot/nussbrot-aufgeschnitten.jpg"
                    alt="Nussbrot aufgeschnitten"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-serif text-xl text-white mb-1">Nussbrot</h3>
                    <p className="text-xs text-white/55 font-sans">Walnüsse aus dem Bezirk Mistelbach · 1 kg</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden flex-1 h-64 md:h-auto">
                  <Image
                    src="/images/hero/buchteln-backstube.jpg"
                    alt="Goldene Buchteln frisch aus dem Ofen der Bäckerei Bauer"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-serif text-xl text-white mb-1">Buchteln</h3>
                    <p className="text-xs text-white/55 font-sans">Jeden Mittwoch frisch · 6 Stück</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:hidden">
              <Link href="/sortiment" className="text-sm font-sans text-brand underline underline-offset-4 decoration-brand/30">
                Gesamtes Sortiment
              </Link>
            </div>
          </div>
        </section>

        {isStriezelActive() && (
          <>
        {/* ─── ALLERHEILIGENSTRIEZEL 2026: Oktober bis Allerheiligen ─── */}
        <section className="bg-brand-dark relative overflow-hidden" aria-label="Allerheiligenstriezel 2026">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-24">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Text */}
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-accent mb-5">
                  Aktuell · Allerheiligen 2026
                </p>
                <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] text-white leading-tight text-balance mb-6">
                  Unsere Allerheiligenstriezel. Von Hand, mit Herz.
                </h2>
                <p className="text-white/60 font-sans text-base leading-relaxed mb-8 max-w-md">
                  Geflochten nach unserem Hausrezept, aus regionalen Zutaten und ohne Rosinen. Zum Striezel Posch&apos;n, fürs Patenkind oder einfach für den Kaffeetisch.
                </p>
                <ul className="mb-10 max-w-md divide-y divide-white/10 border-y border-white/10">
                  {striezel2026.preise.map(({ gewicht, variante, preis }) => (
                    <li key={gewicht} className="flex items-baseline justify-between gap-4 py-2.5">
                      <span>
                        <span className="font-serif text-white text-lg">{gewicht}</span>
                        <span className="text-white/70 font-sans text-xs ml-2">{variante}</span>
                      </span>
                      <span className="font-sans font-semibold text-white whitespace-nowrap">€ {preis}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={vorbestellung("Allerheiligenstriezel 2026", "")}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-sans font-semibold text-sm px-6 py-3 transition-colors"
                  >
                    Jetzt vorbestellen
                    <ArrowRight />
                  </a>
                  <Link
                    href="/allerheiligenstriezel"
                    className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-sans font-semibold text-sm px-6 py-3 transition-colors"
                  >
                    Mehr zum Striezel
                  </Link>
                </div>
              </div>
              {/* Poster */}
              <div className="relative">
                <div className="relative overflow-hidden shadow-2xl">
                  <Image
                    src={striezel2026.image}
                    alt={striezel2026.alt}
                    width={striezel2026.imageWidth}
                    height={striezel2026.imageHeight}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -top-4 -left-4 bg-accent text-white font-serif text-sm px-4 py-2 shadow-lg">
                  Preise 2026
                </div>
              </div>
            </div>
          </div>
        </section>
          </>
        )}

        {/* ─── GESCHICHTE: Editorial Split ───────────────────────── */}
        <section className="relative overflow-hidden bg-surface border-y border-rule" aria-label="Familiengeschichte">
          <WatermarkLogo position="bottom-left" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Foto */}
              <div className="relative h-[420px] md:h-full md:min-h-[600px] overflow-hidden md:border-r md:border-rule">
                <Image
                  src="/images/geschichte/georg-bauer-1960.png"
                  alt="Georg Bauer, Gründer der Bäckerei, in seiner ersten Backstube in Herrnbaumgarten, 1960"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center px-0 md:pl-16 lg:pl-24 py-20 md:py-28 relative">
                <span className="absolute top-8 right-0 font-serif font-black leading-none text-ink/[0.04] select-none pointer-events-none text-[6rem] md:text-[9rem]" aria-hidden="true">
                  1960
                </span>
                <p className="relative text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-6">
                  Unsere Geschichte
                </p>
                <h2 className="relative font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight text-ink mb-8">
                  Eine Familie,<br />eine Backstube,<br />seit 1960.
                </h2>
                <div className="w-8 h-px bg-accent mb-8 relative" aria-hidden="true" />
                <p className="relative text-ink-secondary font-sans leading-relaxed mb-10 text-base max-w-md">
                  1960 legte Georg Bauer die Bäckermeisterprüfung ab. 1977 übernahm
                  sein Sohn Karl mit 17 Jahren als jüngster Bäckermeister Österreichs.
                  Heute führt Dr. Stefan Bauer das Unternehmen mit 13 Filialen und
                  demselben Anspruch wie damals.
                </p>
                <Link
                  href="/unsere-welt"
                  className="relative inline-flex items-center gap-2 font-sans text-sm text-brand hover:text-ink transition-colors underline underline-offset-4 decoration-brand/30 self-start"
                >
                  Unsere Geschichte lesen
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── VIDEO: Einblick Filiale Lanzendorf ──────────────────── */}
        <section className="bg-brand-dark relative overflow-hidden" aria-label="Einblick Filiale Ladendorf">
          <WatermarkLogo position="top-left" size="xl" />
          <WatermarkLogo position="bottom-right" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36 relative">
            <div className="flex items-end justify-between mb-14 md:mb-18">
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-white/35 mb-4">
                  Einblick
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-white leading-tight">
                  Aus der Filiale Ladendorf.
                </h2>
                <p className="mt-4 text-sm font-sans text-white/50 leading-relaxed max-w-sm">
                  Hilfsbereit, herzlich und immer mit einem Lächeln: unser Team macht jeden Besuch zu etwas Besonderem. Wir schätzen jeden Einzelnen von ihnen.
                </p>
              </div>
              <span className="hidden md:block text-xs font-sans uppercase tracking-[0.22em] text-white/25">
                Ladendorf · Niederösterreich
              </span>
            </div>
            <LazyYouTubeEmbed
              videoId="6uxKL1TpoOI"
              title="Aus der Backstube Bäckerei Karl Bauer"
              params={{ start: "5" }}
            />
          </div>
        </section>

        {/* ─── KAFFEEHAUS: Produkt Split ──────────────────────────── */}
        <section className="relative overflow-hidden bg-surface border-y border-rule" aria-label="Kaffeehaus Bauer">
          <WatermarkLogo position="bottom-right" size="xl" />
          <div className="grid md:grid-cols-2 items-stretch min-h-[560px] md:min-h-[680px]">
            {/* Bild: ganzes Bild sichtbar, kein Zuschnitt */}
            <div className="flex items-center justify-center bg-surface order-1 p-6 md:p-10">
              <Image
                src="/images/kaffeehaus/schinken-kaese-toast.png"
                alt="Schinken-Käse-Toast frisch aus dem Kaffeehaus Bauer, knusprig, üppig belegt"
                width={800}
                height={800}
                className="w-1/2 h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text: hell, klar, produktzentriert */}
            <div className="relative flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 bg-page order-2">
              <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-accent mb-5">
                Kaffeehaus Bauer
              </p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-ink mb-6">
                Das bekommst du<br />in unseren Kaffeehäusern.
              </h2>
              <div className="w-8 h-[3px] bg-accent mb-7" aria-hidden="true" />
              <p className="text-ink-secondary font-sans text-base leading-relaxed max-w-sm mb-3">
                Schinken-Käse-Toast, frisch aus der Küche. Mit unserem eigenen Brot als Basis, knusprig, üppig belegt, so wie es sein soll.
              </p>
              <p className="text-ink-muted font-sans text-sm leading-relaxed max-w-sm mb-10">
                Kaffee von J. Hornig, hausgemachtes Gebäck und herzhafte Jause. Vier Kaffeehäuser im Weinviertel.
              </p>
              <Link
                href="/kaffeehaus"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors duration-200 group self-start"
              >
                Kaffeehäuser ansehen
                <ArrowRight className="transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── REGIONALITÄT: Editorial Großtext ──────────────────── */}
        <section className="relative overflow-hidden bg-page py-14 md:py-48 border-b border-rule" aria-label="Weinviertel und Regionalität">
          <WatermarkLogo position="top-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 gap-10 md:gap-32 items-start">
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-6">
                  Herkunft
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] text-ink mb-8 leading-[1.05]">
                  Das Weinviertel<br />schmeckt man.
                </h2>
                <div className="w-8 h-px bg-accent mb-8" aria-hidden="true" />
                <p className="text-ink-secondary font-sans leading-relaxed text-base max-w-sm">
                  Fruchtbare Böden, windreiche Hügel, starke Bäuerinnen und Bauern.
                  Das ist die Grundlage für unser Brot. Wir kaufen regional, weil es
                  besser schmeckt. Und weil es das Richtige ist.
                </p>
              </div>
              <div className="flex flex-col gap-10 md:pt-4">
                {regionalFacts.map((fact, i) => (
                  <div key={fact.label} className={i > 0 ? "pt-10 border-t border-rule" : ""}>
                    <div className="w-8 h-[3px] bg-accent mb-4" aria-hidden="true" />
                    <h3 className="font-sans font-semibold text-ink text-sm mb-3">{fact.label}</h3>
                    <p className="text-ink-muted font-sans text-sm leading-relaxed">{fact.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TEAM ───────────────────────────────────────────────── */}
        <section className="bg-page py-14 md:py-44 relative overflow-hidden" aria-label="Unser Team">
          <WatermarkLogo position="top-right" size="2xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-end justify-between mb-10 md:mb-28">
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-4">
                  Team
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight text-balance">
                  Die Menschen<br />hinter dem Brot
                </h2>
              </div>
              <Link href="/jobs" className="hidden md:inline-flex items-center gap-1.5 text-sm font-sans text-brand hover:text-ink transition-colors underline underline-offset-4 decoration-brand/30">
                Werde Teil des Teams
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" role="list">
              {teamMembers.map((member) => (
                <div key={member.name} className="group" role="listitem">
                  <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-surface">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.location}`}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <p className="font-sans font-semibold text-ink text-base mb-0.5">{member.name}</p>
                  <p className="font-sans text-xs text-accent uppercase tracking-widest mb-3">{member.tagline}</p>
                  <p className="font-serif italic text-sm text-ink-secondary leading-relaxed">
                    &bdquo;{member.quote}&ldquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BLOG ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-surface border-t border-rule py-14 md:py-44" aria-label="Blog">
          <WatermarkLogo position="bottom-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-end justify-between mb-10 md:mb-20">
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-4">
                  Blog
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight text-balance">
                  Geschichten aus<br />der Backstube
                </h2>
              </div>
              <Link href="/blog" className="hidden md:inline-flex text-sm font-sans text-brand hover:text-ink transition-colors underline underline-offset-4 decoration-brand/30">
                Alle Beiträge
              </Link>
            </div>

            {/* Featured: horizontal */}
            <article className="group grid md:grid-cols-2 border border-rule overflow-hidden mb-10">
              <Link href={homePosts[0].href} aria-label={homePosts[0].title} className="block relative h-72 md:h-auto overflow-hidden">
                <Image
                  src={homePosts[0].image}
                  alt={homePosts[0].title}
                  fill
                  loading="lazy"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 right-4 rotate-[-10deg] drop-shadow-lg pointer-events-none" aria-hidden="true">
                  <Image src="/images/logo/logo-diamond.png" alt="" width={56} height={56} className="w-12 h-12 opacity-90" />
                </div>
              </Link>
              <div className="p-8 md:p-14 flex flex-col justify-center bg-page">
                <p className="text-xs font-sans font-medium tracking-[0.25em] uppercase text-accent mb-4">{homePosts[0].category}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-5 leading-snug group-hover:text-brand transition-colors">
                  {homePosts[0].title}
                </h3>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed mb-8">{homePosts[0].excerpt}</p>
                <Link href={homePosts[0].href} className="inline-flex items-center gap-2 text-sm font-sans text-brand hover:text-ink transition-colors underline underline-offset-4 decoration-brand/30 self-start">
                  Weiterlesen
                  <ArrowRight />
                </Link>
              </div>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {homePosts.slice(1, 3).map((post) => (
                <article key={post.title} className="group">
                  <Link href={post.href} className="block">
                    <div className="relative h-64 overflow-hidden mb-6 bg-surface">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        loading="lazy"
                        className={`object-cover ${post.imagePosition ?? "object-center"} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-xs font-sans font-medium tracking-[0.25em] uppercase text-accent mb-3">{post.category}</p>
                    <h3 className="font-serif text-xl text-ink group-hover:text-brand transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm font-sans text-ink-secondary leading-relaxed line-clamp-3">{post.excerpt}</p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FACEBOOK ───────────────────────────────────────────── */}
        <section className="bg-page border-t border-rule py-14 md:py-24" aria-label="Bäckerei Bauer auf Facebook">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-4">
              Facebook
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-10">
              Aktuelles aus der Backstube.
            </h2>
            <p>Social-Media-Inhalte sind in dieser Vorlage nicht verbunden.</p>
          </div>
        </section>

        {/* Jausen-Ideen Teaser */}
        <section className="relative overflow-hidden bg-page py-12 md:py-40 border-t border-rule" aria-label="Jausen-Ideen">
          <WatermarkLogo position="bottom-left" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                  Aus der Backstube auf den Tisch
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight">
                  Drei Jausen-Ideen.
                </h2>
              </div>
              <Link
                href="/sortiment#brot"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-brand hover:text-brand-dark transition-colors shrink-0"
              >
                Alle Ideen ansehen
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              {/* Jause 1 */}
              <div className="relative bg-surface overflow-hidden p-8 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">01</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Jause</p>
                <h3 className="font-serif text-xl text-ink leading-tight mb-2">Salzstangerl mit Aufschnitt</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Salzstangerl · Stück</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Knusprig, salzig, frisch. Ein Salzstangerl mit Schinken, Käse oder Salami und die Jause ist fertig. In jeder unserer 13 Filialen täglich frisch.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Schinken", "Käse", "Salami"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Jause 2 */}
              <div className="relative bg-surface overflow-hidden p-8 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">02</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Mittag</p>
                <h3 className="font-serif text-xl text-ink leading-tight mb-2">Dinkel-Wachauerbrot zur Suppe</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Dinkel-Wachauerbrot · 500 g</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Eine gute Kartoffelsuppe oder Kürbiscremesuppe und dazu zwei Scheiben Dinkel-Wachauerbrot. Mehr braucht ein gutes Mittagessen nicht.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Kartoffelsuppe", "Kürbiscremesuppe", "Wachauer Schinken"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Jause 3 */}
              <div className="relative bg-surface overflow-hidden p-8 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">03</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Feierabend</p>
                <h3 className="font-serif text-xl text-ink leading-tight mb-2">Nußbrot mit Käse und Veltliner</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Nußbrot · 500 g oder 1 kg</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Walnusskerne aus dem Bezirk Mistelbach, Blauschimmelkäse, Birnenscheiben und ein Veltliner aus dem Weinviertel. Das ist Feierabend auf Weinviertel-Art.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Blauschimmelkäse", "Birne", "Veltliner"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── VORBESTELLEN: Elegant, ruhig ──────────────────────── */}
        <section className="bg-accent-muted border-y border-accent-light" aria-label="Vorbestellung">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink mb-1">
                Lieblingsbrot sichern.
              </p>
              <p className="font-sans text-sm text-ink-muted">
                Einfach vorbestellen und in deiner Filiale abholen.{" "}
                <a href="/sortiment#gutscheine" className="underline underline-offset-2 hover:text-ink">
                  Gutscheine zum Verschenken
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={telHref(CONTACT_PHONE)}
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent-border text-ink-secondary font-sans text-sm hover:border-accent hover:text-ink transition-colors"
              >
                Anrufen
              </a>
              <a
                href={vorbestellung()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-sans font-semibold text-sm hover:bg-accent-dark transition-colors"
              >
                Vorbestellen
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* ─── PARTNER ────────────────────────────────────────────── */}
        <section className="bg-surface border-t border-rule py-20 md:py-28 relative overflow-hidden" aria-label="Unsere Partner">
          <WatermarkLogo position="bottom-left" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-ink-muted mb-3">
              Unsere Partner
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-12 md:mb-16">
              Starke Namen an unserer Seite.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* ADEG */}
              <div className="border border-rule bg-page p-8 md:p-10 flex flex-col gap-6">
                <div className="h-16 flex items-center">
                  <Image
                    src="/images/partner/adeg-logo.png"
                    alt="ADEG Logo"
                    width={200}
                    height={80}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">ADEG Nahversorger mit Herz</h3>
                  <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                    In Ladendorf, Wilfersdorf und Poysdorf führen wir ADEG-Märkte und sind als Nahversorger
                    fest in der Gemeinde verwurzelt. Frisches Brot, regionale Produkte und persönlicher
                    Service einer Bäckerei. Alles unter einem Dach.
                  </p>
                </div>
                <a
                  href="https://www.adeg.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors mt-auto"
                  aria-label="ADEG Website öffnen (öffnet in neuem Tab)"
                >
                  adeg.at
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1.5 6H10.5M7.5 3L10.5 6L7.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              {/* Hornig */}
              <div className="border border-rule bg-page p-8 md:p-10 flex flex-col gap-6">
                <div className="h-16 flex items-center">
                  <a
                    href="https://www.jhornig.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="J. Hornig Website öffnen (öffnet in neuem Tab)"
                  >
                    <Image
                      src="/images/partner/hornig-logo.png"
                      alt="J. Hornig Kaffee Logo"
                      width={180}
                      height={72}
                      className="h-12 w-auto object-contain"
                    />
                  </a>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">J. Hornig Wiener Kaffeekultur</h3>
                  <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                    In unseren Kaffeehäusern servieren wir Kaffee von{" "}
                    <a
                      href="https://www.jhornig.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 decoration-1 hover:text-brand transition-colors"
                    >
                      J. Hornig
                    </a>
                    , einer der ältesten
                    Kaffeeröstereien Österreichs seit 1912. Handwerkliches Gebäck und feinstem Rösterkaffee.
                    Das macht den Besuch zu einem echten Genussmoment.
                  </p>
                </div>
                <a
                  href="https://www.jhornig.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors mt-auto"
                  aria-label="J. Hornig Website öffnen (öffnet in neuem Tab)"
                >
                  jhornig.com
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1.5 6H10.5M7.5 3L10.5 6L7.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />

        {/* ─── FILIALEN CTA: Cinematic dunkel ────────────────────── */}
        <section className="bg-gradient-to-br from-brand-mid via-brand-deeper to-brand-dark py-24 md:py-40 relative overflow-hidden" aria-label="Filialen finden">
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none" aria-hidden="true">
            <Image
              src="/images/logo/logo-diamond.png"
              alt=""
              width={440}
              height={440}
              className="w-56 md:w-[380px] lg:w-[440px] opacity-[0.08] translate-x-1/4"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:flex md:items-center md:justify-between gap-16">
              <div className="mb-10 md:mb-0">
                <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-white/35 mb-6">
                  Unsere Standorte
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] text-white leading-tight mb-5">
                  13 Filialen.<br />
                  Täglich frisch.
                </h2>
                <p className="text-white/50 font-sans text-base max-w-sm leading-relaxed">
                  In Herrnbaumgarten hat alles begonnen. Heute sind wir in
                  12 Gemeinden des Weinviertels zuhause.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/filialen"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-ink font-sans font-semibold text-sm hover:bg-accent hover:text-white transition-colors duration-200"
                >
                  Filiale in meiner Nähe
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/filialen#sonntags"
                  className="mt-4 flex items-center justify-center min-h-[44px] font-sans font-semibold text-sm text-white underline underline-offset-4 hover:text-accent transition-colors"
                >
                  Sonntags geöffnete Filialen
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      {/* #1 und #2: VideoObject-Schemas für beide YouTube-Videos */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Bäckerei Karl Bauer: Backstube Weinviertel",
              description: "Einblick in die Backstube der Bäckerei Karl Bauer in Wetzelsdorf. Handwerkliche Brotproduktion im Weinviertel seit 1960.",
              thumbnailUrl: "https://i.ytimg.com/vi/6uxKL1TpoOI/maxresdefault.jpg",
              uploadDate: "2024-01-01",
              contentUrl: "https://www.youtube.com/watch?v=6uxKL1TpoOI",
              embedUrl: "https://www.youtube-nocookie.com/embed/6uxKL1TpoOI",
              publisher: { "@id": "https://www.example.invalid/#organization" },
              inLanguage: "de-AT",
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Aus der Backstube: Bäckerei Karl Bauer",
              description: "Hinter den Kulissen der Bäckerei Karl Bauer. Handwerk, Leidenschaft und frisches Brot aus der Backstube Wetzelsdorf.",
              thumbnailUrl: "https://i.ytimg.com/vi/-DhgZm8BuOs/maxresdefault.jpg",
              uploadDate: "2024-01-01",
              contentUrl: "https://www.youtube.com/watch?v=-DhgZm8BuOs",
              embedUrl: "https://www.youtube-nocookie.com/embed/-DhgZm8BuOs",
              publisher: { "@id": "https://www.example.invalid/#organization" },
              inLanguage: "de-AT",
            },
          ]),
        }}
      />
      {/* #30: WebPage mainEntity für Startseite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.example.invalid/#webpage",
            url: "https://www.example.invalid",
            name: "Bäckerei Karl Bauer: Handwerk aus dem Weinviertel seit 1960",
            description: "Hausbrot, Winzerwecken und Sauerteigbrot aus dem Weinviertel. 13 Filialen in Niederösterreich, 4 Kaffeehäuser. Täglich frisch aus der Backstube Wetzelsdorf.",
            inLanguage: "de-AT",
            isPartOf: { "@id": "https://www.example.invalid/#website" },
            about: { "@id": "https://www.example.invalid/#bakery" },
            publisher: { "@id": "https://www.example.invalid/#organization" },
          }),
        }}
      />
      {/* #15: OfferCatalog: Verweis auf Sortiment */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Sortiment der Bäckerei Karl Bauer",
            url: "https://www.example.invalid/sortiment",
            description: "Vollständiges Sortiment der Bäckerei Karl Bauer: Hausbrot, Winzerwecken, Gebäck, Leckereien und Knuspertraum halbgebacken.",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hausbrot rund" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Winzerwecken" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Buchteln", description: "Jeden Mittwoch frisch" } },
            ],
          }),
        }}
      />
      {/* #16: HowTo: Brot vorbestellen */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Brot vorbestellen bei Bäckerei Karl Bauer",
            description: "So einfach kannst du Brot und Gebäck bei der Bäckerei Karl Bauer vorbestellen.",
            totalTime: "PT5M",
            step: [
              { "@type": "HowToStep", name: "Produkt auswählen", text: "Wähle dein Brot oder Gebäck aus unserem Sortiment unter example.invalid/sortiment." },
              { "@type": "HowToStep", name: "Kontakt aufnehmen", text: "Ruf deine Filiale an oder schick eine E-Mail an bestellung@example.invalid." },
              { "@type": "HowToStep", name: "Abholen", text: "Hol deine Bestellung frisch gebacken in deiner Filiale ab, täglich frisch aus der Backstube Wetzelsdorf." },
            ],
          }),
        }}
      />
      {/* #17: Event-Schema: Buchteln jeden Mittwoch */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Buchteln-Mittwoch bei Bäckerei Karl Bauer",
            description:
              "Jeden Mittwoch gibt es bei der Bäckerei Karl Bauer frische Buchteln, direkt aus dem Ofen, in allen Filialen. Am besten früh da sein, sie sind schnell weg.",
            eventSchedule: {
              "@type": "Schedule",
              byDay: "Wednesday",
              repeatFrequency: "P1W",
            },
            location: {
              "@type": "Bakery",
              name: "Bäckerei Karl Bauer",
              url: "https://www.example.invalid/filialen",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Weinviertel",
                addressRegion: "Niederösterreich",
                addressCountry: "AT",
              },
            },
            organizer: {
              "@id": "https://www.example.invalid/#organization",
            },
            offers: {
              "@type": "Offer",
              name: "Frische Buchteln",
              availability: "https://schema.org/LimitedAvailability",
              priceCurrency: "EUR",
            },
          }),
        }}
      />
    </>
  );
}
