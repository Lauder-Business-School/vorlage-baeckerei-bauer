import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WatermarkLogo from "@/components/WatermarkLogo";
import AudioPlayer from "@/components/AudioPlayer";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Unsere Welt: Geschichte & Handwerk",
  description:
    "Bäckerei Bauer im Weinviertel: Familienbetrieb seit 1960, eigene Sauerteigführung, regionale Rohstoffe und Handwerk, das man schmeckt.",
  alternates: {
    canonical: "/unsere-welt",
  },
  keywords: [
    "Geschichte Bäckerei Karl Bauer",
    "Bäckerei Weinviertel seit 1960",
    "Handwerk Bäckerei",
    "Nachhaltigkeit Bäckerei",
    "Familienunternehmen Niederösterreich",
    "Georg Bauer Bäckermeister",
    "Sauerteig Herstellung",
    "regionale Rohstoffe Brot",
    "Weinviertler Mehl",
    "Backstube Wetzelsdorf",
  ],
  openGraph: {
    title: "Unsere Welt: Geschichte & Handwerk | Bäckerei Karl Bauer",
    description:
      "Bäckerei Bauer im Weinviertel. Familienbetrieb seit 1960, eigene Sauerteigführung, regionale Rohstoffe und Handwerk, das man schmeckt.",
    url: "https://www.example.invalid/unsere-welt",
    images: [
      {
        url: "/images/geschichte/georg-bauer-1960.png",
        width: 1200,
        height: 800,
        alt: "Georg Bauer, Gründer der Bäckerei Karl Bauer, 1960 in Herrnbaumgarten",
      },
    ],
  },
  // #6 Twitter Card Unsere Welt
  twitter: {
    card: "summary_large_image",
    title: "Unsere Welt: Geschichte & Handwerk | Bäckerei Karl Bauer",
    description: "Bäckerei Bauer im Weinviertel. Familienbetrieb seit 1960, eigene Sauerteigführung, regionale Rohstoffe.",
    images: ["/images/geschichte/georg-bauer-1960.png"],
  },
};

const timeline = [
  {
    year: "1960",
    event: "Georg Bauer legt die Bäckermeisterprüfung ab und eröffnet die erste Backstube in Herrnbaumgarten, Große Zeile 65. Mit Maria an seiner Seite und drei Kindern (Wilma, Maria und Karl) wird der Betrieb sofort zum echten Familienprojekt.",
  },
  {
    year: "1977",
    event: "Karl Bauer, geboren am 29. Juni 1959, legt mit nur 17 Jahren die Bäckermeisterprüfung ab und übernimmt den Betrieb seines Vaters. Er ist damals der jüngste Bäckermeister Österreichs. Ein Rekord, der bis heute hält.",
  },
  {
    year: "1978",
    event: "Am 4. August 1978 gründet Karl Bauer offiziell sein Unternehmen, er ist gerade mal 18 Jahre alt. Was als Einzelunternehmen beginnt, trägt von Anfang an seinen Namen: Bäckerei Karl Bauer.",
  },
  {
    year: "1979",
    event: "Neues Geschäftslokal in der Hauptstraße 97 in Herrnbaumgarten. Bis heute die Stammfiliale und das Herzstück. Karl beliefert mit dem Lieferwagen persönlich Gastronomie und Lebensmittelhändler im Umland.",
  },
  {
    year: "1995",
    event: "ADEG Bauer Ladendorf eröffnet. Die Bäckerei wird zum echten Nahversorger: Brot, frische Lebensmittel, Postpartner, alles unter einem Dach. Über die Jahre betreibt Karl Bauer mehr als 13 ADEG-Standorte im Weinviertel.",
  },
  {
    year: "2025",
    event: "65 Jahre Bäckerei Bauer. 13 Filialen, 4 Kaffeehäuser, ein Produktionsstandort in Wetzelsdorf. Und derselbe Anspruch wie am ersten Tag.",
  },
];

const handwerkSchritte = [
  {
    nr: "01",
    title: "Rohstoffe",
    text: "Mehl aus Weinviertler Mühlen, regionale Getreide, eigene Rezepturen. Keine langen Wege, keine Kompromisse beim Ursprung.",
  },
  {
    nr: "02",
    title: "Sauerteig",
    text: "Wir führen unseren Sauerteig selbst. Das kostet Zeit. Die nehmen wir uns, weil man einen guten Sauerteig nicht kaufen kann.",
  },
  {
    nr: "03",
    title: "Formen & Ruhen",
    text: "Jeder Wecken wird von Hand geformt und bekommt die Zeit, die er braucht. Keine Abkürzungen, keine Eile.",
  },
  {
    nr: "04",
    title: "Backen",
    text: "Langsam gebacken bei gleichmäßiger Hitze: so entsteht die Kruste, die man hört, wenn man sie bricht.",
  },
];

const nachhaltigkeitSaeulen = [
  {
    title: "Regional",
    text: "Rohstoffe aus dem Weinviertel, kurze Lieferwege, Weinviertler Mehl. Was hier wächst, wird hier verbacken.",
  },
  {
    title: "Energie",
    text: "Photovoltaik auf dem Produktionsdach in Wetzelsdorf. Solarstrom direkt aus dem Weinviertel für unsere Backstube.",
  },
  {
    title: "Gemeinschaft",
    text: "Nahversorger-Funktion in ländlichen Gemeinden, Postpartner in Ladendorf. Eine Bäckerei ist mehr als ein Laden.",
  },
];

export default function UnsereWeltPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Unsere Welt" }]} />
        {/* #25: Chapter nav also at top for immediate orientation */}
        <nav className="py-4 bg-surface border-b border-rule" aria-label="Kapitel-Schnellzugang">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-wrap gap-5">
            {[
              { href: "#geschichte", label: "Geschichte" },
              { href: "#karl-bauer", label: "Karl Bauer" },
              { href: "#adeg-ladendorf", label: "ADEG" },
              { href: "#fuehrungsteam", label: "Team" },
              { href: "#im-radio", label: "Im Radio" },
              { href: "#krone-bericht", label: "Krone" },
              { href: "#handwerk", label: "Handwerk" },
              { href: "#nachhaltigkeit", label: "Nachhaltigkeit" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium font-sans text-ink-muted hover:text-brand transition-colors uppercase tracking-[0.15em] py-3 inline-flex items-center min-h-[44px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Page Hero */}
        <section aria-label="Unsere Welt Intro" className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 md:h-[600px]">
            {/* Links: historisches Foto (Graustufen) */}
            <div className="relative h-72 md:h-full overflow-hidden">
              <Image
                src="/images/geschichte/georg-bauer-1960.png"
                alt="Georg Bauer, Gründer der Bäckerei Bauer, in seiner Backstube in Herrnbaumgarten, 1960"
                fill
                className="object-cover object-top grayscale"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-dark/25" />
              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
                <span className="text-xs font-sans uppercase tracking-[0.18em] text-inverse/65">
                  Georg Bauer · Herrnbaumgarten · 1960
                </span>
              </div>
            </div>

            {/* Rechts: Editorial-Textpanel auf hellem Hintergrund */}
            <div className="bg-surface flex flex-col justify-end px-8 md:px-14 lg:px-20 py-14 md:pb-20 relative overflow-hidden">
              {/* Dekoratives Jahreszahl-Wasserzeichen */}
              <span
                className="absolute -top-4 -right-2 font-serif font-bold text-[8rem] md:text-[11rem] leading-none text-brand/8 select-none pointer-events-none"
                aria-hidden="true"
              >
                1960
              </span>

              <p className="relative text-xs font-medium tracking-[0.2em] uppercase text-ink-muted mb-5 font-sans">
                Bäckerei Karl Bauer
              </p>
              <h1 className="relative font-serif text-[clamp(2.5rem,5vw,4rem)] text-ink leading-[1.05] mb-6">
                Unsere Welt.
              </h1>
              <p className="relative text-ink-secondary font-sans text-lg leading-relaxed mb-10 max-w-xs">
                Handwerk, Familiengeschichte und Weinviertler Verwurzelung seit 1960.
              </p>

              {/* Zeitspanne 1960 bis 2026 */}
              <div className="relative flex items-center gap-4 pt-6 border-t border-rule">
                <span className="font-serif text-2xl md:text-3xl text-brand font-bold leading-none">1960</span>
                <div className="flex-1 h-px bg-rule relative" aria-hidden="true">
                  <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-brand/50 to-transparent" />
                </div>
                <span className="font-serif text-2xl md:text-3xl text-brand font-bold leading-none">2026</span>
              </div>
              <p className="relative text-[11px] font-sans uppercase tracking-widest text-ink-muted mt-3">
                Seit 1960 · Eine Familie · Ein Versprechen
              </p>
            </div>
          </div>
        </section>

        {/* Kapitel 1: Geschichte */}
        <section
          id="geschichte"
          className="relative scroll-mt-20 py-24 md:py-40 bg-page overflow-hidden"
          aria-label="Unsere Geschichte"
        >
          <WatermarkLogo position="top-right" size="lg" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-accent mb-4 font-sans">
              Kapitel 1
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight mb-6">
              Seit 1960. Eine Familie. Ein Handwerk.
            </h2>
            <p className="text-ink-secondary font-sans leading-relaxed max-w-2xl mb-16 md:mb-24 text-base">
              Was 1960 mit einer Bäckermeisterprüfung begann, ist heute ein
              Unternehmen mit 13 Filialen und dem gleichen Anspruch wie am ersten Tag.
            </p>

            <div className="md:grid md:grid-cols-2 gap-20 items-start">
              {/* Photo + Zitat */}
              <div className="mb-12 md:mb-0">
                <div className="relative h-[400px] md:h-[520px] overflow-hidden">
                  <Image
                    src="/images/geschichte/poster-2024.png"
                    alt="Georg Bauer, Gründer der Bäckerei Bauer, in seiner ersten Backstube in Herrnbaumgarten, 1960"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/60 to-transparent p-6">
                    <p className="text-inverse/70 font-sans text-xs">
                      Georg Bauer · Herrnbaumgarten · 1960
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-rule">
                  <p className="font-serif italic text-lg text-ink leading-relaxed mb-3">
                    &bdquo;Mit 17 bist du kein Unternehmer, aber du lernst schnell.&ldquo;
                  </p>
                  <p className="text-xs font-sans uppercase tracking-widest text-ink-muted">
                    Karl Bauer, Bäckermeister &amp; Inhaber
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <ol className="space-y-12 md:space-y-14">
                  {timeline.map((entry) => (
                    <li key={entry.year} className="flex gap-6 items-start">
                      <div className="shrink-0 w-[4rem] pt-0.5">
                        <span className="font-serif text-lg font-bold text-brand block text-right">
                          {entry.year}
                        </span>
                      </div>
                      <p className="text-ink-secondary font-sans text-sm leading-relaxed pt-0.5">
                        {entry.event}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Karl Bauer Portrait */}
        <section
          id="karl-bauer"
          className="relative overflow-hidden scroll-mt-20 py-16 md:py-28 bg-surface border-t border-rule"
          aria-label="Karl Bauer"
        >
          <WatermarkLogo position="bottom-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:grid md:grid-cols-[3fr_2fr] gap-16 items-start">

              {/* Foto */}
              <div className="relative mb-10 md:mb-0">
                <div className="relative overflow-hidden bg-ink/5">
                  <Image
                    src="/images/geschichte/karl-bauer-baeckermeister.jpg"
                    alt="Karl Bauer bei der Bäckermeisterprüfung mit seinem Team in der Backstube"
                    width={1200}
                    height={830}
                    className="w-full object-cover grayscale"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/70 to-transparent px-6 py-5">
                    <p className="text-inverse font-serif italic text-base">
                      Wer findet Karl Bauer? 👀
                    </p>
                    <p className="text-inverse/60 font-sans text-xs mt-1">
                      Karl Bauer und sein Team bei der Bäckermeisterprüfung
                    </p>
                  </div>
                </div>
                {/* Social Media CTA */}
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://www.facebook.com/BaeckereiBauer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-medium text-brand hover:text-brand-dark transition-colors"
                    aria-label="Bäckerei Bauer auf Facebook"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M18 2H15C13.67 2 12 3.5 12 5V8H9V12H12V22H16V12H19L20 8H16V5C16 4.5 16.5 4 17 4H20V2H18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Auf Facebook kommentieren
                  </a>
                  <span className="text-rule" aria-hidden="true">·</span>
                  <a
                    href="https://instagram.com/baeckerei_bauer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-medium text-brand hover:text-brand-dark transition-colors"
                    aria-label="Bäckerei Bauer auf Instagram"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                    Instagram folgen
                  </a>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-ink-muted mb-3">
                  Der Mann hinter der Bäckerei
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-6">
                  Karl Bauer. Bäckermeister, Unternehmer, Weinviertler.
                </h2>

                <div className="space-y-4 text-base font-sans text-ink-secondary leading-relaxed mb-8">
                  <p>
                    Karl Bauer wuchs in der Backstube auf und übernahm den Betrieb schon in jungen Jahren. 1977 legte er die Bäckermeisterprüfung ab.
                  </p>
                  <p>
                    Am 4. August 1978 gründete er offiziell sein Unternehmen, noch nicht mal 20 Jahre alt. Was als kleines Einzelunternehmen begann, wurde zu einem der bekanntesten Bäckereiunternehmen des Weinviertels.
                  </p>
                </div>

                {/* ADEG Partnership */}
                <div className="flex items-center gap-5 p-5 bg-page border border-rule">
                  <Image
                    src="/images/partner/adeg-logo.png"
                    alt="ADEG"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain shrink-0"
                  />
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">
                    Als ADEG-Partner verbindet die Bäckerei Bauer seit 1995 frisches Handwerk mit regionalem Nahversorgertum. 13 Standorte im Weinviertel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kapitel: ADEG 30 Jahre */}
        <section
          id="adeg-ladendorf"
          className="scroll-mt-20 py-20 md:py-32 bg-surface border-t border-rule"
          aria-label="30 Jahre ADEG Bauer Ladendorf"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:grid md:grid-cols-2 gap-16 items-center">
              {/* Bild */}
              <div className="relative aspect-square overflow-hidden mb-8 md:mb-0">
                <Image
                  src="/images/unsere-welt/adeg-ladendorf-30jahre.png"
                  alt="30 Jahre ADEG Bauer Ladendorf, Team und Produkte"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted">
                    Jubiläum
                  </span>
                  <span className="h-px flex-1 bg-rule" aria-hidden="true" />
                </div>
                <p className="font-sans text-xs text-ink-muted mb-3 uppercase tracking-widest">Seit 1995</p>
                <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] text-ink leading-tight mb-5">
                  30 Jahre ADEG Bauer Ladendorf.
                </h2>
                <p className="text-ink-secondary font-sans leading-relaxed text-base mb-4">
                  1995 eröffnete die Bäckerei Karl Bauer in Ladendorf einen ADEG-Markt und wurde damit zum echten Nahversorger: Brot, Lebensmittel und Postpartner in einem. Was als Erweiterung begann, ist heute ein fester Bestandteil des Weinviertler Alltags.
                </p>
                <p className="text-ink-secondary font-sans leading-relaxed text-base">
                  2025 haben wir 30 Jahre gefeiert. Ein runder Geburtstag für ein Haus, das täglich zeigt, was Nahversorgung wirklich bedeutet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kapitel: Führungsteam */}
        <section
          id="fuehrungsteam"
          className="relative overflow-hidden scroll-mt-20 py-20 md:py-32 bg-page border-t border-rule"
          aria-label="Führungsteam"
        >
          <WatermarkLogo position="top-left" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted">
                Das Team
              </span>
              <span className="h-px flex-1 bg-rule" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight mb-16">
              Die Menschen hinter der Bäckerei.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {[
                { name: "Dr. Stefan Bauer", role: "Geschäftsführer GmbH", image: "/images/team/stefan-bauer.jpg" },
                { name: "Therese Mayer", role: "Prokuristin", image: "/images/team/therese-mayer.png" },
                { name: "Marion Schöfmann", role: "Backstellen-Leitung", image: "/images/team/marion-schoefmann.png" },
                { name: "Karl Bauer", role: "Gesellschafter & Bäckermeister", image: "/images/team/karl-bauer.jpg" },
              ].map((person) => (
                <div key={person.name} className="flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-surface">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <p className="font-serif text-base text-ink leading-snug mb-1">{person.name}</p>
                  <p className="font-sans text-xs text-ink-muted uppercase tracking-wider">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kapitel: Im Radio */}
        <section
          id="im-radio"
          className="scroll-mt-20 py-20 md:py-32 bg-surface border-t border-rule"
          aria-label="ORF Radio Niederösterreich Beitrag"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:grid md:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted">
                    Presse & Medien
                  </span>
                  <span className="h-px flex-1 bg-rule" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] text-ink leading-tight mb-5">
                  Bäckerei Bauer im ORF Radio NÖ.
                </h2>
                <p className="text-ink-secondary font-sans leading-relaxed text-base mb-3">
                  ORF Radio Niederösterreich hat die Bäckerei Bauer in der Sendereihe
                  &bdquo;So schmeckt’s&ldquo; vorgestellt: Lebensmitteltipps aus
                  dem Weinviertel, direkt aus unserer Backstube.
                </p>
                <p className="text-ink-muted font-sans text-sm">
                  Sendung vom 26. September 2022 &middot; Radio Niederösterreich
                </p>
              </div>

              {/* Player */}
              <div>
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-brand shrink-0">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 6.5L14 10L8 13.5V6.5Z" fill="currentColor" />
                    </svg>
                    <span className="font-sans font-semibold text-sm text-ink">
                      So schmeckt’s: Lebensmitteltipps aus der Region
                    </span>
                  </div>
                  <p className="font-sans text-xs text-ink-muted pl-8">
                    ORF Radio Niederösterreich · 2022
                  </p>
                </div>
                <AudioPlayer
                  src="/audio/radio-noe-lebensmitteltipps-2022.mp3"
                  label="ORF Radio Niederösterreich, So schmeckt's: Lebensmitteltipps aus der Region, Bäckerei Bauer, 2022"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kapitel: Krone Bericht */}
        <section
          id="krone-bericht"
          className="scroll-mt-20 py-20 md:py-32 bg-page border-t border-rule"
          aria-label="Niederösterreichische Krone Bericht"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:grid md:grid-cols-2 gap-16 items-center">
              {/* Bild */}
              <div className="relative aspect-[4/3] overflow-hidden mb-8 md:mb-0">
                <Image
                  src="/images/blog/stefan-therese-krone.webp"
                  alt="Prokuristin Therese Mayer und Geschäftsführer Stefan Bauer in der Filiale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/40">
                  <p className="font-sans text-xs text-white/70">Foto: Werner Kraus · Niederösterreichische Krone</p>
                </div>
              </div>
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted">
                    Presse & Medien
                  </span>
                  <span className="h-px flex-1 bg-rule" aria-hidden="true" />
                </div>
                <p className="font-sans text-xs text-ink-muted mb-3 uppercase tracking-widest">06. Juni 2025 · Niederösterreichische Krone</p>
                <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] text-ink leading-tight mb-5">
                  Ein gutes Brot braucht Zeit und ein starkes Team.
                </h2>
                <p className="text-ink-secondary font-sans leading-relaxed text-base mb-4">
                  86 Mitarbeitende, kurze Wege, echte Wertschätzung. Die Niederösterreichische Krone hat die Bäckerei Karl Bauer porträtiert und gezeigt, wie Handwerk und Menschlichkeit Hand in Hand gehen.
                </p>
                <p className="text-ink-secondary font-sans leading-relaxed text-base mb-6">
                  „Ein gutes Brot gelingt nur, wenn alles perfekt zusammenspielt, genauso ist es mit unserem Team“, sagt Geschäftsführer Stefan Bauer. Prokuristin Therese Mayer, seit 14 Jahren im Betrieb: „Wir stehen zusammen, auch wenn’s mal stressig wird.“
                </p>
                <a
                  href="https://www.krone.at/3802627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors"
                  aria-label="Artikel auf krone.at lesen (öffnet in neuem Tab)"
                >
                  Zum Artikel auf krone.at
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1.5 6H10.5M7.5 3L10.5 6L7.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kapitel 2: Handwerk */}
        <section
          id="handwerk"
          className="relative overflow-hidden scroll-mt-20 py-24 md:py-40 bg-surface"
          aria-label="Unser Handwerk"
        >
          <WatermarkLogo position="bottom-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-accent mb-4 font-sans">
              Kapitel 2
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight mb-6">
              So entsteht unser Brot.
            </h2>
            <p className="text-ink-secondary font-sans leading-relaxed max-w-2xl mb-16 md:mb-24 text-base">
              Vom Korn zum Genuss: vier Schritte, kein Kompromiss, keine Abkürzung.
              Das ist das Versprechen hinter jedem Laib, jedem Wecken, jedem Stangerl.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {handwerkSchritte.map((schritt) => (
                <div key={schritt.nr}>
                  <span className="font-serif text-[5rem] leading-none text-brand/15 font-bold block mb-5 select-none" aria-hidden="true">
                    {schritt.nr}
                  </span>
                  <h3 className="font-serif text-xl text-ink mb-4">{schritt.title}</h3>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{schritt.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 md:mt-28 border-t border-rule pt-12 max-w-2xl">
              <p className="font-serif italic text-xl text-ink leading-relaxed mb-3">
                &bdquo;Striezel sind Tradition, im November und das ganze Jahr ein Fixstarter im Sortiment.&ldquo;
              </p>
              <p className="text-xs font-sans uppercase tracking-widest text-ink-muted">
                Backstellenleiterin · Bäckerei Karl Bauer
              </p>
            </div>
          </div>
        </section>

        {/* Kapitel 3: Nachhaltigkeit */}
        <section
          id="nachhaltigkeit"
          className="scroll-mt-20 py-24 md:py-40 bg-page"
          aria-label="Nachhaltigkeit"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-accent mb-4 font-sans">
              Kapitel 3
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight mb-6">
              Gut für den Tisch.<br />Gut für die Region.
            </h2>
            <p className="text-ink-secondary font-sans leading-relaxed max-w-2xl mb-16 md:mb-24 text-base">
              Nachhaltigkeit ist bei uns kein Marketingwort. Es bedeutet: regionale
              Rohstoffe, kurze Wege, Solarstrom auf dem Dach, und eine Rolle als
              Nahversorger, die wir ernst nehmen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-rule mb-12 md:mb-28">
              {nachhaltigkeitSaeulen.map((saeule, i) => (
                <div
                  key={saeule.title}
                  className={`py-10 ${i === 0 ? "" : "md:pl-14 lg:pl-20"} ${
                    i === nachhaltigkeitSaeulen.length - 1 ? "" : "md:pr-14 lg:pr-20"
                  } border-t md:border-t-0 border-rule first:border-t-0 md:first:border-t-0`}
                >
                  <h3 className="font-serif text-2xl text-brand mb-5">{saeule.title}</h3>
                  <p className="text-ink-secondary font-sans leading-relaxed text-base">{saeule.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Vom Korn auf den Tisch */}
        <section className="relative overflow-hidden py-12 md:py-40 bg-surface border-t border-rule" aria-label="Vom Korn auf den Tisch">
          <WatermarkLogo position="top-right" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                  Handwerk zum Genießen
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight">
                  Drei regionale Klassiker.
                </h2>
              </div>
              <p className="text-ink-secondary font-sans leading-relaxed max-w-xs text-sm md:text-right shrink-0">
                Was im Weinviertel wächst, kommt bei uns auf den Tisch.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">01</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Klassiker</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Hausbrot mit Leberpastete</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Hausbrot · 1 kg (Der Runde)</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Eine dicke Scheibe Hausbrot, großzügig mit Leberpastete bestrichen. Das ist das ehrliche Heurigenbrot, so wie es seit 1960 aus unserer Backstube kommt. Dazu ein Viertel Grüner Veltliner. Fertig.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Leberpastete", "Veltliner", "Heuriger"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">02</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Klassiker</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Weinviertelbrot überbacken</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Weinviertelbrot · 1,5 kg</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Nur 4 Zutaten: Wasser, Mehl, Salz, Sauerteig. Scheiben schneiden, mit regionalem Bergkäse oder Gouda belegen, kurz unter den Grill, und das einfachste Gericht schmeckt nach echtem Weinviertel.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Bergkäse", "Überbacken", "Genussregion"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">03</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Klassiker</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Kürbiskernbrot mit Rindfleisch und Kernöl</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Kürbiskernbrot · 500 g</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Saures Rindfleisch auf dunklem Kürbiskernbrot, darüber steirisches Kernöl aus dem Nachbarbundesland. Ein Gericht, das von kurzen Wegen erzählt, wie wir es mögen.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Rindfleisch", "Kernöl", "Kürbiskerne"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interne Verlinkung: Kaffeehaus & Blog */}
        <section className="py-16 md:py-20 bg-page border-t border-rule" aria-label="Weiter entdecken">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted mb-8">Mehr entdecken</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/kaffeehaus" className="group block p-8 border border-rule hover:border-brand transition-colors">
                <p className="text-xs font-sans uppercase tracking-widest text-ink-muted mb-3 group-hover:text-brand transition-colors">Kaffeehaus</p>
                <p className="font-serif text-xl text-ink mb-4">Erleben, nicht nur lesen</p>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed">Vier Kaffeehäuser im Weinviertel: der beste Ort, um das Handwerk von seiner schönsten Seite zu erleben.</p>
                <span className="inline-flex items-center gap-2 mt-4 text-xs font-sans font-semibold uppercase tracking-wider text-brand group-hover:gap-3 transition-all">
                  Zu den Kaffeehäusern
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
              </Link>
              <Link href="/blog" className="group block p-8 border border-rule hover:border-brand transition-colors">
                <p className="text-xs font-sans uppercase tracking-widest text-ink-muted mb-3 group-hover:text-brand transition-colors">Blog</p>
                <p className="font-serif text-xl text-ink mb-4">Geschichten aus der Backstube</p>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed">Von Sauerteig bis Striezel: Rezepte, Bräuche und Einblicke aus dem Weinviertel.</p>
                <span className="inline-flex items-center gap-2 mt-4 text-xs font-sans font-semibold uppercase tracking-wider text-brand group-hover:gap-3 transition-all">
                  Zum Blog
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Chapter Nav */}
        <nav className="py-10 bg-surface border-t border-rule" aria-label="Kapitel-Navigation">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-wrap gap-6">
            {[
              { href: "#geschichte", label: "Geschichte" },
              { href: "#karl-bauer", label: "Karl Bauer" },
              { href: "#adeg-ladendorf", label: "ADEG" },
              { href: "#fuehrungsteam", label: "Team" },
              { href: "#im-radio", label: "Im Radio" },
              { href: "#krone-bericht", label: "Krone" },
              { href: "#handwerk", label: "Handwerk" },
              { href: "#nachhaltigkeit", label: "Nachhaltigkeit" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium font-sans text-brand hover:text-brand-dark transition-colors border-b border-brand pb-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </main>

      {/* #29 Timeline als Event-Liste / Meilensteine */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Gründung Bäckerei Karl Bauer: Georg Bauer eröffnet erste Backstube",
              startDate: "1960",
              location: { "@type": "Place", name: "Herrnbaumgarten, Niederösterreich", address: { "@type": "PostalAddress", addressLocality: "Herrnbaumgarten", addressCountry: "AT" } },
              organizer: { "@id": "https://www.example.invalid/#organization" },
              description: "Georg Bauer legt die Bäckermeisterprüfung ab und eröffnet die erste Backstube in Herrnbaumgarten.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Karl Bauer: jüngster Bäckermeister Österreichs",
              startDate: "1977",
              location: { "@type": "Place", name: "Herrnbaumgarten, Niederösterreich" },
              organizer: { "@id": "https://www.example.invalid/#organization" },
              description: "Karl Bauer übernimmt mit 17 Jahren als jüngster Bäckermeister Österreichs.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: "30 Jahre ADEG Bauer Ladendorf",
              startDate: "1995",
              endDate: "2025",
              location: { "@type": "Place", name: "Ladendorf, Niederösterreich", address: { "@type": "PostalAddress", addressLocality: "Ladendorf", addressCountry: "AT" } },
              organizer: { "@id": "https://www.example.invalid/#organization" },
              description: "ADEG Bauer Ladendorf eröffnet. Die Bäckerei wird zum Nahversorger.",
            },
            // #18 Zwei weitere Timeline-Meilensteine
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Neue Stammfiliale Herrnbaumgarten Hauptstraße 97",
              startDate: "1979",
              location: { "@type": "Place", name: "Herrnbaumgarten, Niederösterreich", address: { "@type": "PostalAddress", streetAddress: "Hauptstraße 97", addressLocality: "Herrnbaumgarten", addressCountry: "AT" } },
              organizer: { "@id": "https://www.example.invalid/#organization" },
              description: "Neues Geschäftslokal in der Hauptstraße 97 in Herrnbaumgarten. Bis heute die Stammfiliale und das Herzstück.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: "65 Jahre Bäckerei Karl Bauer: Jubiläum 2025",
              startDate: "2025",
              location: { "@type": "Place", name: "Weinviertel, Niederösterreich" },
              organizer: { "@id": "https://www.example.invalid/#organization" },
              description: "65 Jahre Bäckerei Bauer. 13 Filialen, 4 Kaffeehäuser, ein Produktionsstandort in Wetzelsdorf. Und derselbe Anspruch wie am ersten Tag.",
            },
          ]),
        }}
      />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Unsere Welt: Geschichte, Handwerk & Nachhaltigkeit",
            url: "https://www.example.invalid/unsere-welt",
            description:
              "Bäckerei Karl Bauer im Weinviertel. Familienbetrieb seit 1960, eigene Sauerteigführung, regionale Rohstoffe aus Niederösterreich.",
            inLanguage: "de-AT",
            about: {
              "@type": "Bakery",
              "@id": "https://www.example.invalid/#bakery",
              name: "Bäckerei Karl Bauer GmbH",
              foundingDate: "1960",
              founder: { "@type": "Person", name: "Georg Bauer" },
            },
            publisher: {
              "@id": "https://www.example.invalid/#organization",
            },
          }),
        }}
      />
    </>
  );
}
