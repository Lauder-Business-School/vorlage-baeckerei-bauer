import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { striezel2026 } from "@/lib/data";
import type { Metadata } from "next";
import { CONTACT_PHONE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Allerheiligenstriezel kaufen",
  description:
    "Allerheiligenstriezel aus dem Weinviertel: bei Bäckerei Karl Bauer kaufen. Geheimes Hausrezept, regionale Zutaten, saisonal zu Allerheiligen.",
  alternates: { canonical: "/allerheiligenstriezel" },
  keywords: [
    "Allerheiligenstriezel",
    "Allerheiligenstriezel kaufen",
    "Weinviertel",
    "Bäckerei Karl Bauer",
    "Striezel Posch’n",
    "Tradition",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Allerheiligenstriezel kaufen | Bäckerei Karl Bauer",
    description:
      "Allerheiligenstriezel aus dem Weinviertel: bei Bäckerei Karl Bauer kaufen. Geheimes Hausrezept, regionale Zutaten, saisonal zu Allerheiligen.",
    url: "https://www.example.invalid/allerheiligenstriezel",
    type: "website",
    images: [
      {
        url: "/images/produkte/leckereien/striezel.jpg",
        width: 1200,
        height: 630,
        alt: "Allerheiligenstriezel der Bäckerei Karl Bauer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allerheiligenstriezel kaufen | Bäckerei Karl Bauer",
    description: "Allerheiligenstriezel aus dem Weinviertel: kaufen. Geheimes Hausrezept, regionale Zutaten, saisonal zu Allerheiligen.",
    images: ["/images/produkte/leckereien/striezel.jpg"],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Allerheiligenstriezel",
  description:
    "Traditioneller Allerheiligenstriezel aus dem Weinviertel, gebacken nach geheimem Hausrezept mit regionalen Zutaten. Saisonal zu Allerheiligen, Striezel gibt es jeden Tag frisch in unseren Filialen.",
  brand: {
    "@type": "Brand",
    name: "Bäckerei Karl Bauer",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "2.70",
    highPrice: "25.00",
    offerCount: striezel2026.preise.length,
    availability: "https://schema.org/SeasonalAvailability",
    seller: {
      "@type": "LocalBusiness",
      name: "Bäckerei Karl Bauer GmbH",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Baumfeldstraße 9",
        addressLocality: "Wetzelsdorf",
        postalCode: "2170",
        addressCountry: "AT",
      },
      telephone: CONTACT_PHONE.replace(/\s/g, ""),
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist der Striezel Posch’n Brauch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beim Striezel Posch’n schenken Taufpaten ihren Taufkindern zu Allerheiligen einen Allerheiligenstriezel. Der Brauch ist im Weinviertel und in weiten Teilen Niederösterreichs tief verwurzelt und symbolisiert die Verbindung zwischen Generationen.",
      },
    },
    {
      "@type": "Question",
      name: "Wann gibt es den Allerheiligenstriezel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Allerheiligenstriezel ist ein saisonales Gebäck rund um Allerheiligen am 1. November. Striezel gibt es bei Bäckerei Karl Bauer aber jeden Tag frisch in unseren Filialen.",
      },
    },
  ],
};

export default function AllerheiligenstriezelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      <main id="main-content">
        <Breadcrumb
          crumbs={[
            { label: "Startseite", href: "/" },
            { label: "Allerheiligenstriezel" },
          ]}
        />

        {/* Hero */}
        <section className="bg-page pt-16 pb-12 border-b border-rule">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <p className="font-sans text-xs uppercase tracking-widest text-brand mb-4">
              Saisonal zu Allerheiligen
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] text-ink leading-tight mb-6">
              Allerheiligen&shy;striezel
            </h1>
            <p className="font-sans text-base text-ink-secondary leading-relaxed max-w-xl mb-10">
              Ein Stück Weinviertel-Tradition. Gebacken nach einem geheimen
              Hausrezept mit regionalen Zutaten, so wie es schon die
              Großeltern kannten.
            </p>
            <p className="font-sans text-base text-ink leading-relaxed max-w-xl mb-10">
              Die Allerheiligen-Aktion 2026 ist vorbei. Striezel gibt&apos;s
              aber jeden Tag frisch in unseren Filialen.
            </p>
            <Link
              href="/filialen"
              className="inline-flex items-center gap-2 bg-brand text-inverse font-sans font-semibold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Filiale finden
            </Link>
          </div>
        </section>

        {/* Preise 2026 */}
        <section
          aria-labelledby="preise"
          className="bg-page pt-16 pb-12 border-b border-rule"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2
              id="preise"
              className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4"
            >
              Größen &amp; Preise 2026
            </h2>
            <h3 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink leading-snug mb-8">
              Vom kleinen Striezel bis zum großen Familienstriezel
            </h3>
            <Image
              src={striezel2026.image}
              alt={striezel2026.alt}
              width={striezel2026.imageWidth}
              height={striezel2026.imageHeight}
              sizes="(max-width: 768px) 100vw, 48rem"
              className="w-full h-auto shadow-lg mb-8"
              priority
            />
            <table className="w-full font-sans text-sm">
              <caption className="sr-only">Preise Allerheiligenstriezel 2026, pro Stück</caption>
              <thead>
                <tr className="border-b border-rule text-left text-ink-muted text-xs uppercase tracking-widest">
                  <th scope="col" className="py-2 font-semibold">Größe</th>
                  <th scope="col" className="py-2 font-semibold">Variante</th>
                  <th scope="col" className="py-2 font-semibold text-right">Preis pro Stück</th>
                </tr>
              </thead>
              <tbody>
                {striezel2026.preise.map(({ gewicht, variante, preis }) => (
                  <tr key={gewicht} className="border-b border-rule">
                    <th scope="row" className="py-3 font-semibold text-ink text-left whitespace-nowrap pr-4">{gewicht}</th>
                    <td className="py-3 text-ink-secondary pr-4">{variante}</td>
                    <td className="py-3 text-ink font-semibold text-right whitespace-nowrap">€ {preis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="font-sans text-sm text-ink-secondary mt-4">
              Unsere Striezel sind ohne Rosinen.
            </p>
          </div>
        </section>

        {/* Was ist der Allerheiligenstriezel */}
        <section
          aria-labelledby="tradition"
          className="bg-page pt-16 pb-12 border-b border-rule"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2
              id="tradition"
              className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4"
            >
              Tradition &amp; Rezept
            </h2>
            <h3 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink leading-snug mb-6">
              Was steckt im Allerheiligenstriezel?
            </h3>
            <div className="space-y-4 font-sans text-sm text-ink-secondary leading-loose">
              <p>
                Der Allerheiligenstriezel ist ein geflochtenes Hefegebäck, das
                im Weinviertel und in weiten Teilen Niederösterreichs zu
                Allerheiligen eine jahrhundertealte Tradition hat. Das Flechten
                steht für Verbindung, zwischen den Lebenden und den
                Verstorbenen, zwischen Generationen, zwischen Taufpaten und
                Taufkindern.
              </p>
              <p>
                Bei Bäckerei Karl Bauer wird der Striezel nach einem geheimen
                Familienrezept gebacken, das über Generationen weitergegeben
                wurde. Der Teig ruht lange, damit er seine feine Textur
                entwickelt. Verwendet werden ausschließlich regionale Zutaten
                aus dem Weinviertel: Mehl vom lokalen Mühlenpartner, frische
                Eier, echte Butter.
              </p>
              <p>
                Das Ergebnis ist ein Striezel mit zartem Briocheteig, goldener
                Kruste und einem Duft, der das Gefühl von Allerheiligen in die
                Backstube bringt.
              </p>
            </div>
          </div>
        </section>

        {/* Varianten */}
        <section
          aria-labelledby="varianten"
          className="bg-page pt-16 pb-12 border-b border-rule"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2
              id="varianten"
              className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4"
            >
              Varianten
            </h2>
            <h3 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink leading-snug mb-8">
              Für jeden Geschmack das Richtige
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-5">
                <span
                  className="mt-1 shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="text-brand"
                    />
                    <path
                      d="M5.5 8.5 7 10l3.5-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-sans font-semibold text-ink text-sm mb-1">
                    Klassisch mit Briochezucker
                  </p>
                  <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                    Der Ursprungsklassiker: goldgelb gebacken, mit grobem
                    Briochezucker bestreut. Süß, leicht knusprig an der
                    Oberfläche, flaumig innen.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span
                  className="mt-1 shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="text-brand"
                    />
                    <path
                      d="M5.5 8.5 7 10l3.5-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-sans font-semibold text-ink text-sm mb-1">
                    Mit Mandel-Bestreuung
                  </p>
                  <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                    Gehobelter Mandel trifft auf den feinen Briocheteig. Eine
                    Variante für alle, die es ein wenig nussiger mögen.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span
                  className="mt-1 shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="text-brand"
                    />
                    <path
                      d="M5.5 8.5 7 10l3.5-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-sans font-semibold text-ink text-sm mb-1">
                    Ohne Bestreuung
                  </p>
                  <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                    Pur und schlicht, für alle, die den Teig für sich sprechen
                    lassen wollen. Ideal mit Marmelade oder Butter.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Striezel Posch’n Brauch */}
        <section
          aria-labelledby="posch’n"
          className="bg-page pt-16 pb-12 border-b border-rule"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2
              id="posch’n"
              className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4"
            >
              Brauchtum
            </h2>
            <h3 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink leading-snug mb-6">
              Der Striezel Posch’n Brauch
            </h3>
            <div className="space-y-4 font-sans text-sm text-ink-secondary leading-loose">
              <p>
                Im Weinviertel ist der Brauch des Striezel Posch’n lebendig:
                Taufpaten bringen ihren Taufkindern zu Allerheiligen einen
                Striezel als Geschenk. Das Wort „posch’n“ kommt vom mittelhochdeutschen
                und bedeutet so viel wie „schenken“ oder „beschenken“.
              </p>
              <p>
                Früher war der Striezel oft das einzige Süßgebäck im Jahr für
                viele Kinder. Heute ist der Brauch ein lebendiges Symbol der
                Verbundenheit zwischen Paten und Taufkind und ein Anlass, um
                gemeinsam am Tisch zu sitzen, Kaffee zu trinken und zu erzählen.
              </p>
              <p>
                Wer zu Allerheiligen im Weinviertel einen Striezel von Bäckerei
                Karl Bauer mitbringt, bringt nicht nur Gebäck, sondern ein
                Stück regionale Geschichte.
              </p>
            </div>
          </div>
        </section>

        {/* Zitat */}
        <section
          aria-label="Kundenstimme"
          className="bg-page pt-16 pb-12 border-b border-rule"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <figure>
              <blockquote className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] text-ink leading-snug italic mb-6">
                „Am liebsten mit Marillenmarmelade aus dem eigenen Garten.“
              </blockquote>
              <figcaption className="font-sans text-sm text-ink-muted">
                Therese Mayer, Stammkundin aus Wetzelsdorf
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Striezel das ganze Jahr */}
        <section
          aria-labelledby="ganzjaehrig"
          className="bg-page pt-16 pb-24"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2
              id="ganzjaehrig"
              className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4"
            >
              Striezel das ganze Jahr
            </h2>
            <h3 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink leading-snug mb-6">
              Jeden Tag frisch in unseren Filialen
            </h3>
            <p className="font-sans text-sm text-ink-secondary leading-loose mb-10">
              Die Allerheiligenstriezel 2026 sind vorbei, danke an alle, die
              bei uns bestellt haben. Auf einen Striezel müssen Sie trotzdem
              nicht bis nächstes Jahr warten: Den gibt es jeden Tag frisch in
              unseren Filialen.
            </p>
            <Link
              href="/filialen"
              className="inline-flex items-center gap-2 bg-brand text-inverse font-sans font-semibold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Filiale finden
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq"
          className="bg-page pt-0 pb-24 border-t border-rule"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12 pt-16">
            <h2
              id="faq"
              className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-8"
            >
              Häufige Fragen
            </h2>
            <dl className="space-y-8">
              <div>
                <dt className="font-sans font-semibold text-ink text-sm mb-2">
                  Was ist der Striezel Posch’n Brauch?
                </dt>
                <dd className="font-sans text-sm text-ink-secondary leading-relaxed">
                  Beim Striezel Posch’n schenken Taufpaten ihren Taufkindern zu
                  Allerheiligen einen Allerheiligenstriezel. Der Brauch ist im
                  Weinviertel und in weiten Teilen Niederösterreichs tief
                  verwurzelt und symbolisiert die Verbindung zwischen
                  Generationen.
                </dd>
              </div>
              <div className="border-t border-rule pt-8">
                <dt className="font-sans font-semibold text-ink text-sm mb-2">
                  Wann gibt es den Allerheiligenstriezel?
                </dt>
                <dd className="font-sans text-sm text-ink-secondary leading-relaxed">
                  Der Allerheiligenstriezel ist ein saisonales Gebäck rund um
                  Allerheiligen am 1. November. Striezel gibt es bei Bäckerei
                  Karl Bauer aber jeden Tag frisch in unseren Filialen.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
