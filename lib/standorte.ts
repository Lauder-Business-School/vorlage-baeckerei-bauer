// Einzige Quelle für alle Standortdaten (Filialen-Seite, Kaffeehaus-Seite, JSON-LD in layout.tsx).
// Öffnungszeiten nur hier pflegen; Sonntagsfilter und schema.org-Zeiten werden aus `hours` abgeleitet.
import { SITE_URL, schemaPhone } from "./config.ts";

export type Standort = {
  /** Anker auf /filialen (#id), auch @id im JSON-LD. Nicht umbenennen, wird verlinkt. */
  id: string;
  name: string;
  street?: string;
  postalCode?: string;
  locality: string;
  /** Nur die eigene Nummer des Standorts, nie die Zentralnummer als Ersatz. */
  phone?: string;
  /** Anzeigeformat: "Mo-Fr 06:00-18:00 · Sa 06:00-12:00 · So 07:00-12:00" */
  hours: string;
  features: string[];
  teamMember?: string;
  mapsUrl: string;
  photo?: string;
  video?: string;
  rating?: number;
  reviewCount?: number;
  bestReview?: { author: string; text: string };
  note?: string;
  highlight?: boolean;
  adegPartner?: boolean;
};

export const standorte: Standort[] = [
  {
    id: "herrnbaumgarten",
    name: "Herrnbaumgarten · Hauptstraße",
    photo: "/images/filialen/herrnbaumgarten.jpg",
    street: "Hauptstraße 97",
    postalCode: "2171",
    locality: "Herrnbaumgarten",
    phone: "",
    hours: "Mo-Fr 06:30-12:00 & 15:00-18:00 · Sa 07:00-12:00",
    features: ["Lebensmittel und Bäckereiprodukte"],
    teamMember: "Martina",
    mapsUrl: "https://maps.app.goo.gl/VSVRGdn1EAWor4ZJ9",
    rating: 4.7,
    reviewCount: 49,
    bestReview: {
      author: "Roman Vögler",
      text: "Frisches Hausbrot ist das Beste in der Region. Sehr freundliches und stets bemühtes Personal.",
    },
  },
  {
    id: "poysdorf",
    name: "Poysdorf · Oberer Markt",
    photo: "/images/filialen/poysdorf-oberer-markt.jpg",
    video: "/videos/poysdorf-cafe-oberer-markt.mp4",
    street: "Oberer Markt 2",
    postalCode: "2170",
    locality: "Poysdorf",
    phone: "",
    hours: "Mo-Sa 06:00-19:00 · So 07:30-19:00",
    features: ["Kaffeehaus"],
    teamMember: "Andrea",
    mapsUrl: "https://maps.app.goo.gl/yJfvug5fqfPvzm6R9",
    rating: 4.3,
    reviewCount: 223,
    bestReview: {
      author: "Georg Grossauer",
      text: "Wir kaufen ganzjährig Brot und Backwaren bei Karl Bauer und sind sehr zufrieden. Große Auswahl, faire Preise, sehr freundliches Personal.",
    },
  },
  {
    id: "lanzendorf",
    name: "Lanzendorf · Backshop & Cafe",
    photo: "/images/filialen/lanzendorf.jpg",
    street: "Lanzendorfer Hauptstraße 9",
    postalCode: "2130",
    locality: "Lanzendorf",
    phone: "",
    hours: "Mo-Fr 05:30-18:00 · Sa 05:30-15:00 · So 07:00-13:00",
    features: ["Kaffeehaus"],
    teamMember: "Elvira",
    mapsUrl: "https://maps.app.goo.gl/1FpUDoi6WC4pk3C79",
    rating: 4.8,
    reviewCount: 84,
    bestReview: {
      author: "Martina Blaim",
      text: "Sehr nettes Lokal, man kann auch draußen sitzen. Absolut nette, freundliche Bedienung. Kaffee, Wurstsemmel und Kuchen waren hervorragend.",
    },
  },
  {
    id: "ladendorf",
    name: "Ladendorf · ADEG Bauer",
    photo: "/images/filialen/ladendorf.jpg",
    street: "Hauptstraße 33",
    postalCode: "2126",
    locality: "Ladendorf",
    phone: "",
    hours: "Mo-Fr 06:30-18:30 · Sa 06:30-12:00",
    features: ["ADEG", "Postpartner"],
    adegPartner: true,
    teamMember: "Melanie",
    mapsUrl: "https://maps.app.goo.gl/vSc9qXSAAYeVQ2AW8",
    rating: 4.8,
    reviewCount: 22,
    bestReview: {
      author: "Herbert Bader",
      text: "Öffnet sehr früh, bietet alles was man braucht. Die fleißigen Damen sind sehr freundlich, man fühlt sich wirklich wohl hier.",
    },
  },
  {
    id: "grosskrut",
    name: "Großkrut · Kaufhaus & Cafe",
    photo: "/images/filialen/grosskrut.jpg",
    street: "Warendorferstraße 3",
    postalCode: "2143",
    locality: "Großkrut",
    phone: "",
    hours: "Mo-Fr 05:30-18:30 · Sa 06:00-13:00 · So 07:00-12:00",
    features: ["Kaufhaus", "Kaffeehaus"],
    teamMember: "Eva",
    mapsUrl: "https://maps.app.goo.gl/vhiQpvNP5E3Kdag26",
    rating: 4.5,
    reviewCount: 169,
    bestReview: {
      author: "Ewi",
      text: "Schön, dass es hier noch einen Nahversorger gibt. Das Café ist ein extra Bonus.",
    },
  },
  {
    id: "wilfersdorf",
    name: "Wilfersdorf · ADEG Bauer",
    photo: "/images/filialen/wilfersdorf.jpg",
    street: "Marktplatz 16",
    postalCode: "2193",
    locality: "Wilfersdorf",
    phone: "",
    hours: "Mo-Fr 05:30-12:30 & 15:30-18:30 · Sa 06:00-12:00",
    features: ["ADEG"],
    adegPartner: true,
    teamMember: "Manuela",
    mapsUrl: "https://maps.app.goo.gl/8DhXkatEftmfxvjaA",
    rating: 4.3,
    reviewCount: 64,
    bestReview: {
      author: "Bobby",
      text: "Immer ein sehr freundliches und hilfsbereites Personal. Feinkost und Gebäck ist erste Klasse.",
    },
  },
  {
    id: "poysdorf-wiener-strasse",
    name: "Poysdorf · Wiener Straße",
    photo: "/images/filialen/poysdorf-wiener-strasse.jpg",
    street: "Wiener Straße 13",
    postalCode: "2170",
    locality: "Poysdorf",
    phone: "",
    hours: "Mo-Fr 05:30-18:00 · Sa 06:00-12:00",
    features: ["ADEG"],
    adegPartner: true,
    teamMember: "Dani",
    mapsUrl: "https://maps.app.goo.gl/NvP4ECoVBmxqjCrq9",
    rating: 4.5,
    reviewCount: 85,
    bestReview: {
      author: "Rainer J.K.",
      text: "Dort gehe ich gerne hin, entspricht meinem Geschmack. Total sympathisch, und ich muss nicht km-lang durch einen Supermarkt latschen.",
    },
  },
  {
    id: "prinzendorf",
    name: "Prinzendorf · Kaufhaus",
    photo: "/images/filialen/prinzendorf.jpg",
    street: "Hauptstraße 103",
    postalCode: "2185",
    locality: "Prinzendorf an der Zaya",
    phone: "",
    hours: "Mo-Fr 06:00-12:00 & 17:00-19:00 · Sa 06:00-12:00",
    features: ["Kaufhaus"],
    adegPartner: true,
    teamMember: "Helene",
    mapsUrl: "https://maps.app.goo.gl/ZpwsqEZqsSiDgQGt5",
    rating: 4.7,
    reviewCount: 56,
    bestReview: {
      author: "Ines Scharringer",
      text: "Kleiner aber feiner Einkaufsladen, mit frischem Gebäck, Feinkost und regionalen Produkten wie Honig und Kürbiskernöl.",
    },
  },
  {
    id: "mistelbach",
    name: "Mistelbach · Backshop",
    photo: "/images/filialen/mistelbach.jpg",
    street: "Waldstraße 34",
    postalCode: "2130",
    locality: "Mistelbach",
    phone: "",
    hours: "Mo-Fr 05:30-18:00 · Sa 05:30-12:00",
    features: ["Backshop"],
    mapsUrl: "https://maps.app.goo.gl/wD9WLNoX5FefUUij9",
    rating: 4.5,
    reviewCount: 67,
    bestReview: {
      author: "Jogi K.",
      text: "Meine Stammbäckerei. Gebäck wird ausschließlich hier gekauft. Außergewöhnliche Produkte, faire Preise, sehr große Auswahl.",
    },
  },
  {
    id: "hohenau",
    name: "Hohenau · Backshop & Cafe",
    photo: "/images/filialen/hohenau.jpg",
    street: "Hauptstraße 6",
    postalCode: "2273",
    locality: "Hohenau an der March",
    phone: "",
    hours: "Mo-Fr 06:00-18:00 · Sa 06:00-12:00 · So 07:00-12:00",
    features: ["Kaffeehaus", "Backshop"],
    mapsUrl: "https://maps.app.goo.gl/CoAoueEnxyqjaN286",
    rating: 4.1,
    reviewCount: 104,
    bestReview: {
      author: "Harald VELUX",
      text: "Heute einen Top Kaffee mit Blechkuchen gehabt. Nette Dame im Lokal.",
    },
  },
  {
    id: "wetzelsdorf",
    name: "Wetzelsdorf · Zentrale & Produktion",
    photo: "/images/filialen/wetzelsdorf.jpg",
    street: "Baumfeldstraße 9",
    postalCode: "2170",
    locality: "Wetzelsdorf",
    hours: "Mo-Fr 06:00-18:00 · Sa 06:00-12:00",
    features: ["Produktion", "Zentrale"],
    mapsUrl: "https://maps.app.goo.gl/nxGkzfmBs9VLQRtz8",
    rating: 4.5,
    reviewCount: 24,
    note: "Direkt an der Produktion. Hier riecht es immer nach frischem Brot.",
    bestReview: {
      author: "Christian Summerauer",
      text: "Bestes Brot in der Umgebung.",
    },
  },
  {
    id: "mistelbach-schulbuffet",
    name: "Mistelbach · Schulbuffet Bundesschulzentrum",
    street: "Bundesschulzentrum Mistelbach",
    postalCode: "2130",
    locality: "Mistelbach",
    hours: "Schulzeiten Mo bis Fr",
    features: ["Schulbuffet"],
    // Kein eigener Maps-Kurzlink bekannt; Suche nach der sichtbaren Adresse statt Link auf den Backshop Waldstraße
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bundesschulzentrum%20Mistelbach",
    note: "Frisches Gebäck direkt im Schulbuffet des Bundesschulzentrums Mistelbach.",
  },
  {
    id: "falkenstein",
    name: "Falkenstein · Filiale",
    locality: "Falkenstein",
    hours: "Mo-Fr 06:00-12:00 · Sa 07:00-11:00",
    features: ["Backshop"],
    mapsUrl: "https://maps.app.goo.gl/SJVDUDd7voL3rS8B9",
    note: "Unsere Filiale im Herzen von Falkenstein. Mit allem Tagesbedarf vom Bäcker.",
  },
];

export const standortById = (id: string): Standort => {
  const s = standorte.find((x) => x.id === id);
  if (!s) throw new Error(`Unbekannter Standort: ${id}`);
  return s;
};

export const addressLine = (s: Standort) =>
  s.street && s.postalCode
    ? `${s.street}, ${s.postalCode} ${s.locality}`
    : `${s.locality}, Niederösterreich`;

/** Regulär sonntags geöffnet: steht "So" in den hinterlegten Öffnungszeiten. Keine Feiertagslogik. */
export const isSundayOpen = (s: Standort) => /(^|·\s*)So\s/.test(s.hours);

export const isKaffeehaus = (s: Standort) => s.features.includes("Kaffeehaus");
export const isNahversorger = (s: Standort) =>
  s.features.some((f) => ["ADEG", "Kaufhaus", "Lebensmittel und Bäckereiprodukte"].includes(f));
export const isBackshop = (s: Standort) => s.features.includes("Backshop");

/** "Mo-Fr 06:30-12:00 & 15:00-18:00 · Sa 07:00-12:00" → ["Mo-Fr 06:30-12:00", "Mo-Fr 15:00-18:00", "Sa 07:00-12:00"] */
export const schemaOpeningHours = (hours: string): string[] =>
  hours.split("·").flatMap((segment) => {
    const m = segment.trim().match(/^((?:Mo|Di|Mi|Do|Fr|Sa|So)(?:-(?:Mo|Di|Mi|Do|Fr|Sa|So))?)\s+(.+)$/);
    if (!m) return [];
    const days = m[1].replace(/So/g, "Su").replace(/Di/g, "Tu").replace(/Mi/g, "We").replace(/Do/g, "Th");
    return m[2].split("&").map((t) => `${days} ${t.trim()}`).filter((x) => /\d{2}:\d{2}-\d{2}:\d{2}$/.test(x));
  });

/** Gut vorlesbar: "Mo-Sa 06:00-19:00" → "Mo bis Sa 06:00 bis 19:00" */
export const hoursReadable = (hours: string) => hours.replace(/-/g, " bis ");

const rated = standorte.filter((s) => s.rating && s.reviewCount);
export const reviewTotal = rated.reduce((n, s) => n + s.reviewCount!, 0);
/** Nach Bewertungszahl gewichteter Schnitt der Google-Bewertungen, eine Nachkommastelle */
export const ratingAverage =
  Math.round((rated.reduce((n, s) => n + s.rating! * s.reviewCount!, 0) / reviewTotal) * 10) / 10;

const topRating = Math.max(...rated.map((s) => s.rating!));
/** Bestbewertete Standorte, z. B. { orte: ["Lanzendorf", "Ladendorf"], rating: 4.8 } */
export const topBewertet = {
  orte: rated.filter((s) => s.rating === topRating).map((s) => s.locality),
  rating: topRating,
};

export const standortSchema = (s: Standort) => ({
  "@type": isKaffeehaus(s) ? ["Bakery", "CafeOrCoffeeShop"] : "Bakery",
  "@id": `${SITE_URL}/filialen#${s.id}`,
  name: `Bäckerei Karl Bauer, ${s.name.replace(" · ", " ")}`,
  address: {
    "@type": "PostalAddress",
    ...(s.street && s.postalCode ? { streetAddress: s.street, postalCode: s.postalCode } : {}),
    addressLocality: s.locality,
    addressRegion: "Niederösterreich",
    addressCountry: "AT",
  },
  ...(s.phone ? { telephone: schemaPhone(s.phone) } : {}),
  ...(schemaOpeningHours(s.hours).length ? { openingHours: schemaOpeningHours(s.hours) } : {}),
  hasMap: s.mapsUrl,
  url: `${SITE_URL}/filialen#${s.id}`,
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
});
