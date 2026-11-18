import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WatermarkLogo from "@/components/WatermarkLogo";
import Breadcrumb from "@/components/Breadcrumb";
import Filialfinder from "@/components/Filialfinder";
import { StarRating } from "@/components/StarRating";
import { teamMembers } from "@/lib/data";
import { standorte as filialen, reviewTotal, ratingAverage, topBewertet } from "@/lib/standorte";

const partners = [
  {
    name: "ADEG",
    logo: "/images/partner/adeg-logo.png",
    width: 100,
    height: 40,
    description: "Nahversorger-Partner in Ladendorf, Wilfersdorf & Poysdorf",
    url: "https://www.adeg.at",
  },
  {
    name: "J. Hornig Kaffee",
    logo: "/images/partner/hornig-logo.png",
    width: 150,
    height: 60,
    description: "Kaffeerösterei aus Wien, in unseren Kaffeehäusern",
    url: "https://www.jhornig.com/",
  },
];
import type { Metadata } from "next";
import { vorbestellung } from "@/lib/mailto";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, telHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Filialen & Öffnungszeiten",
  description:
    "13 Filialen der Bäckerei Karl Bauer im Weinviertel: Herrnbaumgarten, Poysdorf, Lanzendorf, Ladendorf, Hohenau und mehr. Öffnungszeiten und Adressen.",
  alternates: {
    canonical: "/filialen",
  },
  keywords: [
    "Bäckerei Öffnungszeiten Weinviertel",
    "Bäckerei Herrnbaumgarten",
    "Bäckerei Poysdorf Öffnungszeiten",
    "Bäckerei Lanzendorf",
    "Bäckerei Ladendorf",
    "Bäckerei Hohenau",
    "Bäckerei Mistelbach",
    "Bäckerei Falkenstein",
    "Bäckerei Großkrut",
    "Bäckerei Wilfersdorf",
    "Filiale Niederösterreich Bäckerei",
    "Bäckerei Adresse Weinviertel",
  ],
  openGraph: {
    title: "Filialen & Öffnungszeiten | Bäckerei Karl Bauer",
    description:
      "13 Filialen im Weinviertel: Herrnbaumgarten, Poysdorf, Lanzendorf, Ladendorf, Hohenau und mehr. Öffnungszeiten und Adressen auf einen Blick.",
    url: "https://www.example.invalid/filialen",
    images: [
      {
        url: "/images/hero/weinviertel-brot-backstube.jpg",
        width: 1200,
        height: 800,
        alt: "Filialen der Bäckerei Karl Bauer im Weinviertel",
      },
    ],
  },
  // #2: Twitter Card Filialen
  twitter: {
    card: "summary_large_image",
    title: "Filialen & Öffnungszeiten | Bäckerei Karl Bauer",
    description: "13 Filialen im Weinviertel: Herrnbaumgarten, Poysdorf, Lanzendorf, Ladendorf, Hohenau und mehr.",
    images: ["/images/hero/weinviertel-brot-backstube.jpg"],
  },
};



export default function FilialenPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[560px] md:min-h-[640px] flex flex-col justify-end overflow-hidden"
          aria-label="Filialen Intro"
        >
          <Image
            src="/images/hero/weinviertel-brot-backstube.jpg"
            alt="Weinviertel-Sauerteigbrot mit eingeätztem Schriftzug, vor den Gärregalen der Backstube Wetzelsdorf"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10" />

          {/* Schwebende Ortsnamen als Hintergrund-Dekoration */}
          <div
            className="hidden md:block absolute top-0 left-0 right-0 pt-24 px-12 lg:px-20 pointer-events-none"
            aria-hidden="true"
          >
            {/* #20: Increased opacity for better visibility */}
            <div className="flex flex-wrap gap-2 max-w-2xl opacity-50">
              {[
                "Herrnbaumgarten", "Poysdorf", "Lanzendorf", "Ladendorf",
                "Großkrut", "Wilfersdorf", "Mistelbach", "Hohenau",
                "Wetzelsdorf", "Prinzendorf", "Falkenstein",
              ].map((name) => (
                <span
                  key={name}
                  className="text-xs font-sans font-medium uppercase tracking-[0.15em] border border-inverse/60 px-2.5 py-1 text-inverse"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Ghost "13" als Dekoration rechts */}
          <span
            className="absolute right-4 md:right-10 lg:right-16 bottom-8 font-serif text-[12rem] md:text-[18rem] leading-[0.85] text-inverse/8 font-bold select-none pointer-events-none"
            aria-hidden="true"
          >
            13
          </span>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-inverse/50 mb-5 font-sans">
              Im Weinviertel zuhause
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-inverse leading-[1.05] max-w-2xl mb-6">
              13 Orte.<br />Täglich frisch.
            </h1>
            <p className="text-inverse/70 font-sans text-lg max-w-lg leading-relaxed">
              Von Herrnbaumgarten bis Falkenstein. Bäckerei Bauer ist im
              Weinviertel zuhause. Kommt vorbei.
            </p>
          </div>
        </section>

        <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Filialen" }]} />

        {/* Rating strip */}
        <section className="relative overflow-hidden py-8 bg-surface border-b border-rule" aria-label="Bewertungsübersicht">
          <WatermarkLogo position="bottom-left" size="sm" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-wrap gap-8 md:gap-14 items-center">
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">
                  Ø Google Bewertung
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl text-brand leading-none">{ratingAverage.toLocaleString("de-AT")}</span>
                  <div>
                    <StarRating rating={ratingAverage} size={14} />
                    <p className="text-xs font-sans text-ink-muted mt-1">{reviewTotal} Bewertungen</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-px h-10 bg-rule" aria-hidden="true" />
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">Standorte</p>
                <p className="font-serif text-3xl text-ink leading-none">{filialen.length}</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-rule" aria-hidden="true" />
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">Top-bewertete Filiale</p>
                <p className="font-sans text-sm font-semibold text-ink">{topBewertet.orte.join(" & ")}</p>
                <p className="text-xs font-sans text-brand mt-0.5">{topBewertet.rating.toLocaleString("de-AT")} von 5 Sternen</p>
              </div>
            </div>
          </div>
        </section>

        <Filialfinder
          standorte={filialen.map((s) => ({
            ...s,
            teamMember: teamMembers.some((m) => m.name === s.teamMember) ? s.teamMember : undefined,
          }))}
        />

        {/* ADEG Jubiläum Feature */}
        <section className="relative overflow-hidden border-t border-rule" aria-label="ADEG Jubiläum Ladendorf">
          <WatermarkLogo position="center" size="lg" />
          <div className="grid md:grid-cols-2 items-stretch min-h-[360px] md:min-h-[480px]">
            <div className="flex flex-col justify-center px-8 md:px-16 py-14 bg-page order-2 md:order-1">
              <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-accent mb-5">
                ADEG Bauer · Ladendorf
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-6">
                Seit 1995 im Ort.
              </h2>
              <p className="text-ink-secondary font-sans leading-relaxed text-base max-w-sm mb-6">
                Seit 1995 ist der ADEG Bauer Ladendorf ein fixer Bestandteil des Weinviertler Alltags. Frisches Brot, Lebensmittel, Postpartner, alles unter einem Dach. 2025 haben wir 30 Jahre Nahversorgung gefeiert.
              </p>
              <div className="flex items-center gap-4">
                <Image src="/images/partner/adeg-logo.png" alt="ADEG" width={80} height={32} className="h-7 w-auto object-contain" />
                <span className="text-xs font-sans text-ink-muted uppercase tracking-widest">Hauptstraße 33, 2126 Ladendorf</span>
              </div>
            </div>
            <div className="relative overflow-hidden order-1 md:order-2 min-h-[260px]">
              <Image
                src="/images/filialen/adeg-jubilaeum.png"
                alt="Jubiläumsplakat 30 Jahre ADEG Bauer Ladendorf aus dem Jahr 2025"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Kundenstimmen */}
        <section className="py-12 md:py-40 bg-gradient-to-br from-brand-dark via-brand-dark to-brand relative overflow-hidden" aria-label="Kundenstimmen">
          {/* Flächen-Logo */}
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none" aria-hidden="true">
            <Image
              src="/images/logo/logo-diamond.png"
              alt=""
              width={600}
              height={600}
              className="w-[320px] md:w-[500px] lg:w-[600px] opacity-[0.05] translate-x-1/3"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-[8rem] leading-none font-serif text-accent/50 mb-2 select-none pointer-events-none" aria-hidden="true">„</div>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-inverse/50 mb-4 font-sans">
              Was Kund:innen sagen
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-inverse leading-tight mb-16 md:mb-20">
              Stimmen aus dem Weinviertel.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  quote: "Wir kaufen ganzjährig Brot und Backwaren bei Karl Bauer und sind sehr zufrieden. Große Auswahl, faire Preise, sehr freundliches Personal.",
                  author: "Georg Grossauer",
                  location: "Poysdorf · Oberer Markt",
                  stars: 5,
                },
                {
                  quote: "Meine Stammbäckerei. Gebäck wird ausschließlich hier gekauft. Außergewöhnliche Produkte, faire Preise, sehr große Auswahl.",
                  author: "Jogi K.",
                  location: "Mistelbach · Backshop",
                  stars: 5,
                },
                {
                  quote: "Sehr nettes Lokal, man kann auch draußen sitzen. Nette, freundliche Bedienung. Kaffee und Kuchen hervorragend. Absolut empfehlenswert.",
                  author: "Martina Blaim",
                  location: "Lanzendorf · Cafe",
                  stars: 5,
                },
              ].map((review) => (
                <div key={review.author} className="border-t border-inverse/20 pt-10">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: review.stars }, (_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="currentColor" className="text-accent" aria-hidden="true">
                        <path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-serif italic text-lg text-inverse leading-relaxed mb-5">
                    &bdquo;{review.quote}&ldquo;
                  </p>
                  <p className="text-xs font-sans uppercase tracking-widest text-inverse/50">
                    {review.author} &middot; {review.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner */}
        <section className="relative overflow-hidden bg-page py-16 md:py-20 border-t border-rule" aria-label="Unsere Partner">
          <WatermarkLogo position="top-left" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-ink-muted mb-8">
              Unsere Partner
            </p>
            <div className="flex flex-wrap items-start gap-10 md:gap-16">
              {partners.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3"
                >
                  <div className="h-12 flex items-center">
                    <Image
                      src={p.logo}
                      alt={`${p.name} Logo`}
                      width={p.width}
                      height={p.height}
                      className="h-10 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                      unoptimized
                    />
                  </div>
                  <p className="text-xs font-sans text-ink-muted max-w-[200px] leading-relaxed">
                    {p.description}
                    <span className="sr-only"> (Website von {p.name}, öffnet in neuem Tab)</span>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Heute frisch mitnehmen */}
        <section className="relative overflow-hidden py-12 md:py-40 bg-page border-t border-rule" aria-label="Heute frisch mitnehmen">
          <WatermarkLogo position="bottom-right" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                  Auf dem Weg nach Hause
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight">
                  Drei Ideen für heute.
                </h2>
              </div>
              <p className="text-ink-secondary font-sans leading-relaxed max-w-xs text-sm md:text-right shrink-0">
                Täglich frisch in allen 13 Filialen. Das Beste schnell mitgenommen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">01</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Exklusiv</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Vitisweckerl mit Frischkäse</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Vitisweckerl · Stück</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Nur bei uns: das Vitisweckerl mit der echten Weinviertel-Traube. Mit Frischkäse bestrichen und frischen Radieschen drauf. Das Frühstück oder die Jause, die man woanders nicht bekommt.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Nur bei Bauer", "Weinviertel-Traube", "Frischkäse"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">02</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Jause</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Kornspitz mit Liptauer</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Kornspitz · Stück</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Kross, körnig, mit feiner Körnung im Teig und Liptauer dazu. Das ist die klassische Weinviertel-Jause. Schnell in der Filiale mitgenommen, sofort genossen.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Liptauer", "Körnung", "schnelle Jause"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">03</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Mittwochs</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Buchteln nicht vergessen</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Buchteln · 6 Stück · jeden Mittwoch</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Jeden Mittwoch frisch. Flaumig, warm, mit Marillenmarmelade gefüllt und meistens rasch ausverkauft. Wer eine Filiale in der Nähe hat, weiß: Mittwoch nicht vergessen.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Nur mittwochs", "Marillenmarmelade", "schnell weg"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Vorbestellung */}
        <section className="relative overflow-hidden bg-surface py-14 md:py-20 border-t border-rule" aria-label="Vorbestellung">
          <WatermarkLogo position="bottom-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:flex md:items-center md:justify-between gap-12">
              <div className="mb-6 md:mb-0">
                <h2 className="font-serif text-2xl md:text-3xl text-ink mb-3">
                  Saisonal vorbestellen.
                </h2>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed max-w-md">
                  Striezel, Germteigkrampus, Ostergebäck und Gutscheine bitte
                  rechtzeitig in eurer Filiale vorbestellen. Einfach anrufen oder
                  direkt vorbeikommen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={telHref(CONTACT_PHONE)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={vorbestellung()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink/20 text-ink font-sans font-medium text-sm hover:border-brand hover:text-brand transition-colors"
                >
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* #8: ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Filialen & Öffnungszeiten: Bäckerei Karl Bauer",
            url: "https://www.example.invalid/filialen",
            description: "13 Filialen der Bäckerei Karl Bauer im Weinviertel mit Öffnungszeiten, Adressen und Kontaktdaten.",
            inLanguage: "de-AT",
            about: { "@id": "https://www.example.invalid/#bakery" },
            publisher: { "@id": "https://www.example.invalid/#organization" },
          }),
        }}
      />
    </>
  );
}
