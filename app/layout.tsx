import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#28477a",
};
import { Vollkorn, Figtree } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import MailtoFallback from "@/components/MailtoFallback";
import StriezelPopup from "@/components/StriezelPopup";
import { CONTACT_PHONE, CONTACT_EMAIL, SITE_URL, schemaPhone } from "@/lib/config";
import { standorte, standortSchema, isKaffeehaus, ratingAverage, reviewTotal } from "@/lib/standorte";

const vollkorn = Vollkorn({
  subsets: ["latin"],
  variable: "--font-vollkorn",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bäckerei Karl Bauer | Weinviertel | Seit 1960",
    template: "%s | Bäckerei Karl Bauer",
  },
  description:
    "Handwerklich gebackenes Brot und Gebäck aus dem Weinviertel. 13 Filialen und Kaffeehäuser in Niederösterreich. Frisch aus eigener Backstube seit 1960.",
  metadataBase: new URL("https://www.example.invalid"),
  // #6: hreflang self-reference für de-AT
  alternates: {
    canonical: "/",
    languages: {
      "de-AT": "https://www.example.invalid",
    },
  },
  openGraph: {
    title: "Bäckerei Karl Bauer: Handwerk aus dem Weinviertel",
    description:
      "Handwerklich gebackenes Brot und Gebäck aus dem Weinviertel. 13 Filialen und Kaffeehäuser in Niederösterreich. Frisch aus eigener Backstube seit 1960.",
    locale: "de_AT",
    type: "website",
    siteName: "Bäckerei Karl Bauer",
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
  twitter: {
    card: "summary_large_image",
    title: "Bäckerei Karl Bauer: Handwerk aus dem Weinviertel",
    description: "Handwerklich gebackenes Brot und Gebäck aus dem Weinviertel. 13 Filialen und Kaffeehäuser in Niederösterreich. Frisch aus eigener Backstube seit 1960.",
    images: ["/images/hero/weinviertel-brot-backstube.jpg"],
  },
  keywords: [
    "Bäckerei Weinviertel",
    "Brot Niederösterreich",
    "Bäckerei Karl Bauer",
    "Sauerteigbrot Weinviertel",
    "Weinviertler Bäcker",
    "Handwerksbäckerei Niederösterreich",
    "Backstube Wetzelsdorf",
    "Bäckerei Herrnbaumgarten",
    "Bäckerei Poysdorf",
    "Bäckerei Lanzendorf",
    "Bäckerei Ladendorf",
    "Bäckerei Großkrut",
    "Bäckerei Wilfersdorf",
    "Bäckerei Mistelbach",
    "Bäckerei Hohenau",
    "Bäckerei Wetzelsdorf",
    "Bäckerei Prinzendorf",
    "Bäckerei Falkenstein",
    "Hausbrot Weinviertel",
    "Winzerwecken",
    "Nußbrot",
    "Kraftlackl",
    "Weinviertelbrot",
    "CRAFT-Karl",
    "Tirolerbrot",
    "Dinkel-Vollkornbrot",
    "Sonnenbrot",
    "Kaffeehaus Poysdorf",
    "Kaffeehaus Lanzendorf",
    "Kaffeehaus Großkrut",
    "Kaffeehaus Hohenau",
    "Frühstück Weinviertel",
    "Jause Niederösterreich",
    "J. Hornig Kaffee",
    "halbgebacken Knuspertraum",
    "Brot vorbestellen Niederösterreich",
    "ADEG Nahversorger Weinviertel",
    "Gebäck frisch täglich",
    "Bäckerei seit 1960",
    // #26: neue Longtail-Keywords
    "Brot kaufen Weinviertel",
    "frisches Brot Niederösterreich",
    "Bäckerei mit Kaffeehaus",
    "Brot vorbestellen online",
    "Sauerteig kaufen Österreich",
    "Halbgebackenes Brot",
    "Bäckerei Catering Weinviertel",
    "glutenreduziertes Brot Weinviertel",
    "Bäckerei Familienbetrieb Österreich",
    "Brot Abo Niederösterreich",
  ],
  robots: {
    index: true,
    follow: true,
    // #5: Google darf volle Snippets & große Vorschaubilder zeigen
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-AT"
      className={`${vollkorn.variable} ${figtree.variable}`}
    >
      <head>
        {/* theme-color ist jetzt im viewport Export definiert */}
        {/* #18: Sprache explizit */}
        <meta name="language" content="German" />
        <meta name="content-language" content="de-AT" />
        {/* #19: Geo-Meta-Tags für lokale Suche */}
        <meta name="geo.region" content="AT-3" />
        <meta name="geo.placename" content="Wetzelsdorf, Niederösterreich" />
        <meta name="geo.position" content="48.6667;16.6167" />
        <meta name="ICBM" content="48.6667, 16.6167" />
        {/* #20: Application Name */}
        <meta name="application-name" content="Bäckerei Karl Bauer" />
        {/* Apple Touch Icon kommt automatisch aus app/apple-icon.png (Next File Convention) */}
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* DNS-Prefetch für YouTube (kein preconnect, kein Tracking ohne Nutzeraktion) */}
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        {/* JSON-LD: Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.example.invalid/#organization",
                  name: "Bäckerei Karl Bauer GmbH",
                  legalName: "Bäckerei Karl Bauer GmbH",
                  // #13: Firmenbuchnummer + UID
                  legalIdentifier: "FN 360703 x",
                  vatID: "ATU66410911",
                  // #14: Telefon direkt auf Organization
                  telephone: schemaPhone(CONTACT_PHONE),
                  url: "https://www.example.invalid",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.example.invalid/images/logo/logo-diamond.png",
                    width: 512,
                    height: 512,
                  },
                  // #22 + #27: sameAs vollständig inkl. www-Varianten
                  sameAs: [
                    "https://www.example.invalid",
                    "https://example.invalid",
                    "https://www.instagram.com/baeckerei_bauer",
                    "https://www.facebook.com/BaeckereiBauer/",
                    "https://citiesapps.com/pages/baeckereibauer",
                    "https://maps.app.goo.gl/VSVRGdn1EAWor4ZJ9",
                  ],
                  // #23: ContactPoint mit E-Mail
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: schemaPhone(CONTACT_PHONE),
                    email: CONTACT_EMAIL,
                    contactType: "customer service",
                    availableLanguage: "German",
                    areaServed: "AT",
                  },
                  // #24: foundingLocation
                  foundingLocation: {
                    "@type": "Place",
                    name: "Herrnbaumgarten, Niederösterreich",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Herrnbaumgarten",
                      postalCode: "2171",
                      addressCountry: "AT",
                    },
                  },
                  // #25: numberOfEmployees
                  numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    minValue: 80,
                  },
                  // #26: subOrganization, die 4 Kaffeehäuser
                  subOrganization: standorte.filter(isKaffeehaus).map((k) => ({ "@id": `${SITE_URL}/filialen#${k.id}` })),
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.example.invalid/#website",
                  url: "https://www.example.invalid",
                  name: "Bäckerei Karl Bauer",
                  publisher: {
                    "@id": "https://www.example.invalid/#organization",
                  },
                },
                {
                  "@type": "Bakery",
                  "@id": "https://www.example.invalid/#bakery",
                  name: "Bäckerei Karl Bauer",
                  url: "https://www.example.invalid",
                  description:
                    "Handwerklich gebackenes Brot und Gebäck aus dem Weinviertel. 13 Filialen und Kaffeehäuser in Niederösterreich. Frisch aus eigener Backstube seit 1960.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Baumfeldstraße 9",
                    addressLocality: "Wetzelsdorf",
                    postalCode: "2170",
                    addressRegion: "Niederösterreich",
                    addressCountry: "AT",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 48.6667,
                    longitude: 16.6167,
                  },
                  telephone: schemaPhone(CONTACT_PHONE),
                  email: CONTACT_EMAIL,
                  priceRange: "€",
                  currenciesAccepted: "EUR",
                  paymentAccepted: "Cash, Credit Card, Debit Card",
                  servesCuisine: ["Austrian", "Bakery", "Café"],
                  image: "https://www.example.invalid/images/hero/weinviertel-brot-backstube.jpg",
                  foundingDate: "1960",
                  founder: {
                    "@type": "Person",
                    name: "Georg Bauer",
                  },
                  // #7: Slogan
                  slogan: "Handwerk. Herz. Heimat.",
                  // #8: Reservierungen / Vorbestellungen möglich
                  acceptsReservations: true,
                  // #9: Produktkatalog-Link
                  hasMenu: "https://www.example.invalid/sortiment",
                  // #10: Expertise-Felder
                  knowsAbout: [
                    "Bäckerhandwerk",
                    "Sauerteigführung",
                    "Weinviertler Rohstoffe",
                    "Handwerksbäckerei",
                    "Österreichische Backwaren",
                  ],
                  // #26: aggregateRating: Summe und gewichteter Schnitt der Google-Bewertungen aller Filialen (lib/standorte.ts)
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: String(ratingAverage),
                    reviewCount: String(reviewTotal),
                    bestRating: "5",
                    worstRating: "1",
                  },
                  // #27: hasMap
                  hasMap: "https://maps.app.goo.gl/VSVRGdn1EAWor4ZJ9",
                  // #28: makesOffer
                  makesOffer: [
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hausbrot rund", description: "Mildwürzig, saftig, mit Milch und regionalen Mehlen." } },
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Winzerwecken", description: "Die Wecken-Form des Hausbrots, knusprig und saftig." } },
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Weinviertelbrot", description: "Regionales Brot aus der Genussregion Weinviertler Getreide." } },
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Buchteln", description: "Jeden Mittwoch frisch, das Versprechen der Bäckerei Bauer." } },
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Knuspertraum halbgebacken", description: "Brot und Gebäck zum Zuhause fertig backen." } },
                  ],
                  areaServed: [
                    "Herrnbaumgarten",
                    "Poysdorf",
                    "Lanzendorf",
                    "Ladendorf",
                    "Großkrut",
                    "Wilfersdorf",
                    "Mistelbach",
                    "Hohenau an der March",
                    "Wetzelsdorf",
                    "Prinzendorf",
                    "Falkenstein",
                    "Weinviertel",
                    "Niederösterreich",
                  ],
                  parentOrganization: {
                    "@id": "https://www.example.invalid/#organization",
                  },
                },
                // #12: Person-Schema für Geschäftsführer Dr. Stefan Bauer
                {
                  "@type": "Person",
                  "@id": "https://www.example.invalid/#stefan-bauer",
                  name: "Dr. Stefan Bauer",
                  jobTitle: "Geschäftsführer",
                  worksFor: { "@id": "https://www.example.invalid/#organization" },
                  image: "https://www.example.invalid/images/team/stefan-bauer.jpg",
                },
                ...standorte.map(standortSchema),
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-page text-ink antialiased">
        <div style={{ background: "#fff3cd", color: "#222", padding: "12px", textAlign: "center" }}>
          Lehrveranstaltung: Prototyp, keine offizielle Website. Kontakt- und Live-Dienste sind nicht eingerichtet.
        </div>
        <div className="flex flex-col flex-1">
          {children}
        </div>
        <BackToTop />
        <MailtoFallback />
        <StriezelPopup />
      </body>
    </html>
  );
}
