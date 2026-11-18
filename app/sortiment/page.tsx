import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WatermarkLogo from "@/components/WatermarkLogo";
import Breadcrumb from "@/components/Breadcrumb";
import SortimentCategoryNav from "@/components/SortimentCategoryNav";
import { teamMembers, striezel2026, isStriezelActive } from "@/lib/data";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, telHref } from "@/lib/config";
import FAQSection from "@/components/FAQSection";
import type { Metadata } from "next";
import { vorbestellung, groessereBestellung, gutscheinAnfrage } from "@/lib/mailto";

// Stündlich neu rendern: Striezel-Block verschwindet am 2.11.2026 von selbst.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "Brot & Gebäck kaufen | Bäckerei Karl Bauer Weinviertel" },
  description:
    "Hausbrot, Winzerwecken, Sauerteigbrot und Gebäck aus dem Weinviertel. Täglich frisch aus der Backstube Wetzelsdorf. Vorbestellen oder in 13 Filialen kaufen.",
  alternates: {
    canonical: "/sortiment",
  },
  keywords: [
    "Brot kaufen Weinviertel",
    "Hausbrot",
    "Winzerwecken",
    "Nußbrot",
    "Kraftlackl",
    "Weinviertelbrot",
    "CRAFT-Karl",
    "Tirolerbrot",
    "Dinkel-Vollkornbrot",
    "Sonnenbrot",
    "Sauerteigbrot",
    "Gebäck Niederösterreich",
    "Kipferl",
    "Buchteln",
    "Brot vorbestellen",
    "halbgebacken",
    "Knuspertraum halbgebacken",
    "Mini Semmel kaufen",
    "Speckstangerl bestellen",
    "Allerheiligenstriezel kaufen",
    "Germkrampus Weihnachten",
    "Bäckerei Catering",
    "Stangenbrot Heuriger",
    "glutenreduziert Brot",
    "Vollkornbrot Weinviertel",
    "Brot mit Kürbiskernen",
  ],
  openGraph: {
    title: "Brot & Gebäck kaufen | Bäckerei Karl Bauer Weinviertel",
    description:
      "Hausbrot, Winzerwecken, Sauerteigbrot, Buchteln und Gebäck, täglich frisch aus der Backstube Wetzelsdorf. Jetzt vorbestellen oder in 13 Filialen kaufen.",
    url: "https://www.example.invalid/sortiment",
    images: [
      {
        url: "/images/produkte/brot/winzerwecken.jpg",
        width: 1200,
        height: 800,
        alt: "Winzerwecken, das Hausbrot-Original der Bäckerei Karl Bauer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brot & Gebäck kaufen | Bäckerei Karl Bauer Weinviertel",
    description: "Hausbrot, Winzerwecken, Sauerteigbrot und Gebäck, täglich frisch aus der Backstube Wetzelsdorf.",
    images: ["/images/produkte/brot/winzerwecken.jpg"],
  },
};

const brote = [
  {
    name: "Hausbrot rund",
    weight: "1 kg (Der Runde) · 2 kg (Der Zweier)",
    description: "Mildwürzig und außergewöhnlich saftig. Wir geben diesem Brot Zeit: erst dem Sauerteig, dann dem langsamen Ofen. Das Ergebnis ist ein Laib, der auf jedem Heurigentisch ankommt.",
    statement: "Unser meistgekauftes Brot. Jeden Tag frisch.",
    image: "/images/produkte/brot/hausbrot-rund.jpg",
    featured: true,
  },
  {
    name: "Winzerwecken",
    weight: "ca. 1 kg",
    description: "Unser Hausbrotteig in Weckenform, mit knuspriger Kruste und saftiger Krume. Passt zur herzhaften Jause mit Wurst und Schinken genauso wie zum süßen Frühstück mit Marmelade oder Kräutertopfen.",
    statement: "Außen resch, innen weich. So soll Brot sein.",
    image: "/images/produkte/brot/winzerwecken.jpg",
    teamTip: { name: "Melanie", quote: "Mein absoluter Favorit: außen schön resch, innen weich, und er schmeckt einfach immer." },
  },
  {
    name: "VollkornSepp",
    weight: "500 g / 1 kg",
    description: "Kräftig, frisch, natürlich gut. Ein Vollkornbrot aus langer Teigführung, mit Sesamkruste und weicher, saftiger Krume. Jeden Tag frisch gebacken, mit besten Zutaten, von Hand.",
    statement: "Für alle, die beim Brot keine Kompromisse machen.",
    image: "/images/produkte/brot/vollkorn-sepp.jpg",
    badge: "Brot des Jahres",
    teamTip: { name: "Marion", quote: "Der VollkornSepp ist unser neuer Liebling in der Backstube, kräftig im Geschmack und trotzdem angenehm leicht." },
  },
  {
    name: "Weinviertelbrot",
    weight: "1,5 kg",
    description: "Viereckig und regional, mehr braucht es nicht. Seit der niederösterreichischen Landesausstellung 2013 produziert in Poysdorf, im Herzen der Genussregion Weinviertler Getreide. Besonders gut geeignet zum Überbacken.",
    statement: "Nur 4 Zutaten: Wasser, Mehl, Salz, Sauerteig.",
    image: "/images/produkte/brot/weinviertelbrot.jpg",
  },
  {
    name: "CRAFT-Karl",
    weight: "Laib",
    description: "Dunkles, mildes Roggenbrot mit Biermalz und leicht nussigem Geschmack. Eine moderne Interpretation des Handwerks, mit Sonnenblumenkernen und Chiasamen aus Österreich.",
    statement: "Handwerk neu gedacht. Zutaten aus der Region.",
    image: "/images/produkte/brot/craft-karl.jpg",
    teamTip: { name: "Marion", quote: "Mit Streichwurst leicht bestreichen, dünne Radieschenscheiben drauf und mit Schnittlauch bestreuen. Simpel, aber perfekt." },
  },
  {
    name: "Nußbrot",
    weight: "500 g / 1 kg",
    description: "Unser Hausbrotteig mit mindestens 20 % Walnusskernen aus dem Bezirk Mistelbach. Schonend gebacken, ideal zur Weinverkostung. Serviertipp: mit etwas Butter bestreichen, feine Birnenscheiben und Blauschimmelkäse drauf, ein paar Tropfen Aceto Balsamico, fertig. Auch als Speckbrot erhältlich, gleicher Teig, mit Speck statt Nüssen. Bitte 2 Tage im Voraus bestellen.",
    statement: "20 % Walnusskerne. Aus dem Bezirk Mistelbach.",
    image: "/images/produkte/brot/nussbrot-aufgeschnitten.jpg",
    teamTip: { name: "Stefan", quote: "Mit Blauschimmelkäse, Birnenscheiben und einem Veltliner aus dem Weinviertel: das ist unser Nußbrot auf dem Niveau einer Weinbar." },
  },
  {
    name: "Kraftlackl Brot",
    weight: "325 g / 750 g",
    description: "Ein rustikales Brot ohne Weizenmehl. Die Malznote rundet den Geschmack ab, und das bei nur 226 kcal pro 100 g. Kräftige Kruste, und er hält sich mehrere Tage frisch.",
    statement: "Kein Weizenmehl, voller Geschmack. Kräftige Kruste.",
    image: "/images/produkte/brot/fitberry.jpg",
    teamTip: { name: "Helene", quote: "Mit Bauerngeselchtem, Salami oder einem würzigen Käse: der Kraftlackl hält, was die Kruste verspricht." },
  },
  {
    name: "Tiroler Ährenbrot",
    weight: "1 kg · 2 kg · 5 kg",
    description: "Dunkel, herzhaft, mit geröstetem Roggenmehl. Saftiger Biss trifft milde Säure: die ideale Basis für Almkäse mit Rahmbutter und Schnittlauch vom Fensterbrett, Camembert oder klassisch mit kaltem Schweinsbraten, Senf und Kren.",
    statement: "Dunkel, saftig, mit geröstetem Roggenmehl.",
    image: "/images/produkte/brot/tiroler-aehrenbrot.jpg",
  },
  {
    name: "Dinkel-Vollkornbrot",
    weight: "500 g",
    description: "Vollwertiges Dinkelbrot mit Sonnenblumenkernen und Lupinenschrot, schön saftig, ganz ohne Hefe. Dinkel, der Urweizen, ist besonders leicht verdaulich und ein natürlicher Kraftspender. Ideal zu Kürbiscremesuppe oder mit Gemüsesticks und Dips.",
    statement: "Der Urweizen. Leicht verdaulich, naturbelassen.",
    image: "/images/produkte/brot/dinkel-vollkornbrot.jpg",
  },
  {
    name: "Dinkel-Wachauerbrot",
    weight: "500 g",
    description: "Nährstoffreich, charaktervoll und mit natürlichen Zutaten gebacken. Passt hervorragend zu Wachauer Schinken, pikanten Aufstrichen, Räucherwurst oder einer guten Kartoffelsuppe.",
    statement: "Charaktervoll und nährstoffreich. Ein Brot für jeden Tag.",
    image: "/images/produkte/brot/dinkelbrot-aufgeschnitten.jpg",
  },
  {
    name: "Sandwich",
    weight: "500 g",
    description: "Das klassische Weißbrot unserer Gegend, aus Vorschussmehl, goldbraun gebacken. Die Basis für Panzanella, Caprese und Antipasti, oder warm überbacken mit Pizzakäse.",
    statement: "Das Weißbrot, das Sommer schmeckt.",
    image: "/images/produkte/brot/sandwich.jpg",
  },
  {
    name: "Toastbrot",
    weight: "500 g",
    description: "Weich und fluffig mit zarter Kruste, die beim Toasten herrlich knusprig wird. Auch als Dinkel-Toast erhältlich, für alle, die beim schnellen Frühstück auf Substanz setzen.",
    statement: "Weich. Fluffig. Beim Toasten unwiderstehlich.",
    image: "/images/produkte/brot/toastbrot.jpg",
  },
  {
    name: "Kürbiskernbrot",
    weight: "500 g",
    description: "Vollkornbrot mit Kürbiskernen in Krume und Kruste. Die fettreichen Pluza-Kerne verleihen jedem Bissen ihren typisch nussigen Charakter. Ideal zu saurem Rindfleisch mit Kernöl oder zu cremigem Ziegenkäse.",
    statement: "Kürbiskerne in Krume und Kruste. Nussig bis zum letzten Bissen.",
  },
  {
    name: "Sonnenbrot",
    weight: "500 g",
    description: "Nährstoffreich, mit Sesambestreuung, feinporiger Krume und fester Kruste. Dünn geschnitten ein Gedicht, zu weißem Spargel, Olivendip, Tzatziki oder spanischer Chorizo. Dazu ein kühler Radler oder ein fruchtiger Weißwein.",
    statement: "Sesamkruste, feinporig, nährstoffreich. Für die leichte Jause.",
  },
  {
    name: "Olivenbrot",
    weight: "Laib",
    description: "Der Teig ruht 24 Stunden im Kühlraum, bevor er geformt und gebacken wird. Besonders bekömmlich, saftig getoastet oder frisch vom Grill. Mit handverlesenen schwarzen Oliven. Bitte 2 Tage im Voraus bestellen.",
    statement: "24 Stunden Teigruhe. Handverlesene Oliven. Auf Bestellung.",
    badge: "Auf Bestellung",
  },
  {
    name: "Zwiebelbrot",
    weight: "Laib",
    description: "Der Teig unseres Nußbrotes mit saftigen Zwiebeln statt Nüssen. Herzhaft, aromatisch, ein Statement auf jedem Jausenbrett. Mit Streichwurst, Radieschen und Schnittlauch. Bitte 2 Tage im Voraus bestellen.",
    statement: "Herzhaft und aromatisch. Das Statement auf dem Jausenbrett.",
    badge: "Auf Bestellung",
  },
  {
    name: "Heurigenbrot / Stangenbrot / Meterbrot",
    weight: "3 kg · 4 kg · 5 kg",
    description: "Unser Hausbrotteig als großer Laib, ideal für den Heurigen, das Buffet oder die Großveranstaltung. Als Rundlaib (3 kg), Stange (4 bis 5 kg) oder Meterbrot auf Bestellung.",
    statement: "Für den Heurigen, das Buffet oder die ganze Gemeinschaft.",
    image: "/images/produkte/brot/stangenbrot.jpg",
    badge: "Auf Bestellung",
  },
];

const gebaeck = [
  {
    name: "Semmel",
    weight: "Stück",
    description: "Die klassische Wiener Semmel, kross gebacken, am besten warm aus dem Ofen. Täglich frisch, täglich ein kleines Glück.",
    statement: "Die Semmel, die man nicht vergisst.",
    image: "/images/produkte/gebaeck/semmel.jpg",
    featured: true,
  },
  {
    name: "Vitisweckerl",
    weight: "Stück",
    description: "Unser Alleinstellungsmerkmal: das Vitisweckerl mit der süßen Traube aus dem Weinviertel. Ein Stück Heimat zum Frühstück.",
    statement: "Nur bei uns: mit echter Weinviertel-Traube.",
    image: "/images/produkte/gebaeck/vitisweckerl-1.jpg",
    teamTip: { name: "Dani", quote: "Ich liebe die Kreativität dabei, wie mit Radieschen, Paprika und frischen Zutaten richtig schöne Sachen entstehen." },
  },
  {
    name: "Salzstangerl",
    weight: "Stück",
    description: "Knusprig, salzig, unwiderstehlich. Das Stangerl, das in keinem Brotkorb fehlen darf.",
    statement: "Knusprig, salzig, unwiderstehlich. Der Klassiker.",
    image: "/images/produkte/gebaeck/salzstangerl-korb.jpg",
  },
  {
    name: "Kornspitz",
    weight: "Stück",
    description: "Schön kross, mit feiner Körnung im Teig. Die herzhafte Alternative zum klassischen Stangerl.",
    statement: "Feine Körnung, kräftiger Biss.",
    image: "/images/produkte/gebaeck/kornstangerl-korb.jpg",
  },
  {
    name: "Kürbiskernweckerl",
    weight: "Stück",
    description: "Vollkorndunkler Wecken mit Kürbiskernen: nussig, kräftig, ein echter Weinviertel-Charakter.",
    statement: "Nussig, kräftig, mit Kürbiskernen aus der Region.",
    image: "/images/produkte/gebaeck/kuerbiskernweckerl.jpg",
  },
  {
    name: "Kornweckerl",
    weight: "Stück",
    description: "Saftig, körnig, vollwertig. Für alle, die beim Frühstück auch an die Körner denken.",
    statement: "Vollwertig und saftig. Für den bewussten Start in den Tag.",
    image: "/images/produkte/gebaeck/kornweckerl.jpg",
  },
  {
    name: "Spinat-Feta-Stangerl",
    weight: "Stück",
    description: "Nicht süß, nicht salzig, sondern pikant-kreativ. Spinat und Feta im knusprigen Teig, für die Jause mit Charakter.",
    statement: "Pikant-kreativ. Für die Jause, die auffällt.",
    image: "/images/produkte/gebaeck/spinat-feta-stangerl.jpg",
  },
  {
    name: "Laugengebäck",
    weight: "Stück",
    description: "Dunkelbraun, glänzend, mit feiner Laugennote. Klassisch mit Butter oder als Basis für herzhaften Aufschnitt.",
  },
];

const leckereien = [
  {
    name: "Buchteln",
    weight: "6 Stück",
    description: "Jeden Mittwoch frisch. Das ist unser Versprechen. Flaumig, warm, mit Marillenmarmelade gefüllt. Der Mittwoch riecht immer nach Buchteln.",
    statement: "Jeden Mittwoch. Immer ausverkauft. Mit Marillenmarmelade.",
    image: "/images/produkte/leckereien/buchteln.jpg",
    featured: true,
    badge: "Jeden Mittwoch",
    teamTip: { name: "Manuela", quote: "Mittwoch ist Buchtel-Tag. Der Duft zieht durch die ganze Backstube, und spätestens dann weiß man, warum man diesen Job liebt." },
  },
  {
    name: "Krapfen",
    weight: "Stück",
    description: "Mit Marillenmarmelade gefüllt und mit Staubzucker bestäubt. Der österreichische Klassiker, wie er sein soll.",
    statement: "Der österreichische Klassiker. Ohne Kompromisse.",
    image: "/images/produkte/leckereien/krapfen.jpg",
  },
  {
    name: "Topfengolatsche",
    weight: "Stück",
    description: "Blätterteig, Topfenfüllung, ein Hauch Zucker. Die Topfengolatsche ist ein stilles Meisterwerk der Bäckerei.",
    statement: "Ein stilles Meisterwerk. Blätterteig trifft Topfen.",
    image: "/images/produkte/leckereien/topfengolatsche.jpg",
  },
  {
    name: "Schokoschnecke",
    weight: "Stück",
    description: "Weicher Germteig, Schokoladen-Spirale, goldbraun gebacken. Für alle, die morgens schon wissen, dass der Tag gut wird.",
    statement: "Für alle, die morgens schon wissen, dass der Tag gut wird.",
    image: "/images/produkte/leckereien/schokoschnecke.jpg",
  },
  {
    name: "Striezel",
    weight: "150 g bis 1500 g · ab € 2,70",
    description: "Geflochten, duftend, süß, ohne Rosinen. Unser Striezel ist das ganze Jahr dabei, und zu Allerheiligen ist er das Herzstück jeder Weinviertler Feier. Alle Größen und Preise 2026 auf unserer Allerheiligenstriezel-Seite.",
    statement: "Handwerk aus dem Weinviertel seit 1960.",
    image: "/images/produkte/leckereien/striezel-poschn.jpg",
  },
  {
    name: "Gugelhupf",
    weight: "Stück",
    description: "Saftig, locker, mit Staubzucker bestäubt. Der Gugelhupf aus unserer Backstube ist so, wie er sein soll: hausgemacht und ohne Schnörkel.",
    statement: "Hausgemacht, ohne Schnörkel. So wie früher.",
    image: "/images/produkte/leckereien/gugelhupf.jpg",
  },
  {
    name: "Erdbeerschnitte",
    weight: "Stück",
    description: "Lockerer Biskuit, frische Erdbeeren, glänzendes Gelee. Wenn Saison ist, gibt es keinen besseren Grund, zum Kaffeehaus zu kommen.",
    statement: "Nur wenn Saison ist. Dann aber wunderschön.",
    image: "/images/produkte/leckereien/erdbeerschnitte.jpg",
  },
  {
    name: "Schokomuffin",
    weight: "Stück",
    description: "Dunkel, saftig, mit Schokolade durch und durch. Der Muffin für alle, die es beim Kaffee etwas ernster nehmen.",
    statement: "Dunkel, saftig, ernsthaft schokoladig.",
  },
];

const knuspertraum = [
  {
    name: "Mini-Semmel",
    weight: "10 Stück",
    description: "Halbgebacken, zuhause im eigenen Ofen fertig gebacken. Bäckerei-Qualität aus dem eigenen Ofen, ohne Frühaufsteher-Gen.",
    statement: "Kurz in den Ofen. Frische Semmel, ohne um 6 aufzustehen.",
    image: "/images/produkte/knuspertraum/mini-semmel.png",
  },
  {
    name: "Mini-Speckstangerl",
    weight: "10 Stück",
    description: "Knusprig, herzhaft, mit echtem Speck. Perfekt als Snack, Partygebäck oder zum nächsten Heurigen.",
    statement: "Mit echtem Speck. Der Favorit auf jedem Heurigen.",
    image: "/images/produkte/knuspertraum/mini-speckstangerl.png",
  },
  {
    name: "Mini-Schinkenstangerl",
    weight: "10 Stück",
    description: "Schinkenfüllung im knusprigen Stangerl. Auch für Kinder ein Highlight, am besten noch warm servieren.",
    statement: "Für Groß und Klein. Am besten noch warm.",
    image: "/images/produkte/knuspertraum/mini-schinkenstangerl.png",
  },
  {
    name: "Mini-Kornhaxn",
    weight: "10 Stück",
    description: "Vollkorn-Knuspertraum für das gesunde Gewissen. Körner obenauf, innen weich, außen resch.",
    statement: "Körner obenauf. Für das gute Gewissen beim Knuspern.",
    image: "/images/produkte/knuspertraum/mini-kornhaxn.png",
  },
  {
    name: "Mini-Käsestangerl",
    weight: "10 Stück",
    description: "Würziger Käse in knusprigem Teig. Der Favorit am Partyabend. Wer einmal anfängt, hört nicht mehr auf.",
    statement: "Würziger Käse, knuspriger Teig. Wer anfängt, hört nicht mehr auf.",
    image: "/images/produkte/knuspertraum/mini-kaesestangerl.png",
  },
];

const melanie = teamMembers.find((m) => m.name === "Melanie")!;

type Product = {
  name: string;
  weight?: string;
  description: string;
  statement?: string;
  image?: string;
  featured?: boolean;
  badge?: string;
  teamTip?: { name: string; quote: string };
};

function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div className="group">
      {product.image ? (
        <div
          className={`relative overflow-hidden mb-7 bg-surface ${
            large ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes={large ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          />
          {product.badge && (
            <div className="absolute top-4 left-4 bg-accent text-inverse text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1">
              {product.badge}
            </div>
          )}
        </div>
      ) : product.badge ? (
        <div className="mb-7">
          <span className="inline-block bg-accent text-inverse text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1">
            {product.badge}
          </span>
        </div>
      ) : null}
      <h3 className={`font-serif text-ink leading-tight mb-2 ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>
        {product.name}
      </h3>
      {product.weight && (
        <p className="text-xs font-sans uppercase tracking-widest text-ink-muted mb-3">
          {product.weight}
        </p>
      )}
      <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-4">
        {product.description}
      </p>
      {product.teamTip && (
        <div className="border-l-2 border-accent pl-3 mb-4">
          <p className="text-xs font-serif italic text-ink-secondary leading-relaxed">
            &bdquo;{product.teamTip.quote}&ldquo;
          </p>
          <p className="text-xs font-sans text-accent mt-1">{product.teamTip.name}</p>
        </div>
      )}
      <a
        href={vorbestellung(product.name)}
        className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors"
        aria-label={`${product.name} vorbestellen, E-Mail an Bäckerei Bauer`}
      >
        Vorbestellen
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1.5 6H10.5M7.5 3L10.5 6L7.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

function TextOnlyCard({ product }: { product: Product }) {
  return (
    <div className="group border-t border-rule pt-8">
      {product.badge && (
        <span className="inline-block bg-accent text-inverse text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1 mb-5">
          {product.badge}
        </span>
      )}
      <h3 className="font-serif text-xl text-ink leading-tight mb-2">{product.name}</h3>
      {product.weight && (
        <p className="text-xs font-sans uppercase tracking-widest text-ink-muted mb-3">{product.weight}</p>
      )}
      {product.statement && (
        <p className="font-serif italic text-base text-brand mb-3">{product.statement}</p>
      )}
      <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-4">{product.description}</p>
      {product.teamTip && (
        <div className="border-l-2 border-accent pl-3 mb-4">
          <p className="text-xs font-serif italic text-ink-secondary leading-relaxed">
            &bdquo;{product.teamTip.quote}&ldquo;
          </p>
          <p className="text-xs font-sans text-accent mt-1">{product.teamTip.name}</p>
        </div>
      )}
      <a
        href={vorbestellung(product.name)}
        className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors"
        aria-label={`${product.name} vorbestellen, E-Mail an Bäckerei Bauer`}
      >
        Vorbestellen
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1.5 6H10.5M7.5 3L10.5 6L7.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

function CategorySection({
  id,
  eyebrow,
  heading,
  intro,
  products,
  bg = "bg-page",
  watermark,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  intro: string;
  products: Product[];
  bg?: string;
  watermark?: { position: "top-right" | "bottom-right" | "top-left" | "bottom-left" | "center"; size: "sm" | "md" | "lg" | "xl" | "2xl" };
}) {
  const featured = products.find((p) => p.featured);
  const rest = products.filter((p) => !p.featured);
  const withImage = rest.filter((p) => !!p.image);
  const withoutImage = rest.filter((p) => !p.image);

  return (
    <section id={id} className={`relative overflow-hidden py-12 md:py-40 scroll-mt-[116px] ${bg}`} aria-label={heading}>
      {watermark && <WatermarkLogo position={watermark.position} size={watermark.size} />}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
          {eyebrow}
        </p>
        <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight mb-5">
          {heading}
        </h2>
        <p className="text-ink-secondary font-sans leading-relaxed max-w-2xl mb-10 md:mb-20 text-base">
          {intro}
        </p>

        {featured && (
          <div className="mb-10 md:mb-20">
            <ProductCard product={featured} large />
          </div>
        )}

        {withImage.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-16">
            {withImage.map((product) => (
              <ProductCard key={`${product.name}-img`} product={product} />
            ))}
          </div>
        )}

        {withoutImage.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
            {withoutImage.map((product) => (
              <TextOnlyCard key={`${product.name}-text`} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function SortimentPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              // BreadcrumbList liefert bereits die <Breadcrumb>-Komponente
              "@graph": [
                {
                  "@type": "ItemList",
                  name: "Brot und Gebäck Bäckerei Karl Bauer",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      item: {
                        "@type": "Product",
                        name: "Hausbrot rund",
                        description: "Mildwürzig, saftig, mit Milch und ausgesuchten Roggen- und Weizenmehlen.",
                        offers: { "@type": "Offer", price: "4.70", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      item: {
                        "@type": "Product",
                        name: "Winzerwecken",
                        description: "Das Hausbrot-Original mit knuspriger Kruste.",
                        offers: { "@type": "Offer", price: "4.70", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      item: {
                        "@type": "Product",
                        name: "Nussbrot",
                        description: "Mit Walnüssen aus dem Bezirk Mistelbach, 1 kg.",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      item: {
                        "@type": "Product",
                        name: "Sauerteigbrot",
                        description: "Aus eigener Sauerteigführung, täglich frisch aus der Backstube Wetzelsdorf.",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      item: {
                        "@type": "Product",
                        name: "Buchteln",
                        description: "Jeden Mittwoch frisch, 6 Stück.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* Page Hero */}
        <section aria-label="Sortiment Intro" className="overflow-hidden">
          <div className="flex flex-col md:flex-row md:min-h-[620px]">

            {/* Left: warm cream text panel */}
            <div className="bg-[#faf7f2] flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-20 md:w-[42%] shrink-0">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent/70 mb-6 font-sans">
                Bäckerei Karl Bauer
              </p>
              <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[1.0] mb-8">
                <span className="text-brand block">Handwerk in</span>
                <span className="text-accent block">jeder Kruste.</span>
              </h1>
              <p className="text-brand/60 font-sans text-lg leading-relaxed mb-12 max-w-[28ch]">
                Täglich frisch gebacken im Weinviertel, ohne Abkürzungen, ohne Kompromisse.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-accent/20">
                <div>
                  <span className="font-serif text-4xl md:text-5xl text-accent leading-none font-bold">65</span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-brand/50 mt-2 block leading-tight">Jahre<br />Handwerk</span>
                </div>
                <div>
                  <span className="font-serif text-4xl md:text-5xl text-accent leading-none font-bold">4</span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-brand/50 mt-2 block leading-tight">Produkt-<br />kategorien</span>
                </div>
                <div>
                  <span className="font-serif text-4xl md:text-5xl text-accent leading-none font-bold">13</span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-brand/50 mt-2 block leading-tight">Filialen im<br />Weinviertel</span>
                </div>
              </div>
            </div>

            {/* Right: product image collage */}
            <div className="flex-1 p-3 md:p-4 bg-[#faf7f2] flex items-center justify-center min-h-[300px]">
              <div className="grid grid-cols-2 grid-rows-2 gap-2.5 w-full min-h-[280px] md:h-full md:max-h-[580px]">
                {/* Hausbrot: tall left */}
                <div className="relative rounded-2xl overflow-hidden row-span-2 min-h-[260px] md:min-h-0">
                  <Image
                    src="/images/produkte/brot/hausbrot-rund.jpg"
                    alt="Hausbrot rund, Bäckerei Karl Bauer"
                    fill
                    className="object-cover object-center hover:scale-[1.04] transition-transform duration-700"
                    sizes="(max-width: 768px) 45vw, 25vw"
                    priority
                  />
                </div>
                {/* Brezeln */}
                <div className="relative rounded-2xl overflow-hidden min-h-[125px] md:min-h-0">
                  <Image
                    src="/images/produkte/gebaeck/brezeln.jpg"
                    alt="Frische Brezeln, Bäckerei Karl Bauer"
                    fill
                    loading="lazy"
                    className="object-cover object-center hover:scale-[1.04] transition-transform duration-700"
                    sizes="(max-width: 768px) 45vw, 13vw"
                  />
                </div>
                {/* Buchteln */}
                <div className="relative rounded-2xl overflow-hidden min-h-[125px] md:min-h-0">
                  <Image
                    src="/images/produkte/leckereien/buchteln.jpg"
                    alt="Frische Buchteln, Bäckerei Karl Bauer"
                    fill
                    loading="lazy"
                    className="object-cover object-center hover:scale-[1.04] transition-transform duration-700"
                    sizes="(max-width: 768px) 45vw, 13vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Photo Strip */}
        <div className="flex overflow-x-auto scrollbar-none h-40 md:h-56 snap-x snap-mandatory overscroll-x-contain" aria-hidden="true" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
          {[
            { src: "/images/galerie/strip-brote-papier.jpg", alt: "Brote auf Bäckerei Bauer Einschlagpapier" },
            { src: "/images/galerie/strip-brot-korb.jpg", alt: "Aufgeschnittenes Roggenbrot im Weidenkörbchen" },
            { src: "/images/galerie/strip-stempelbrot.jpg", alt: "Brot mit Bäckerei-Bauer-Stempel" },
            { src: "/images/galerie/strip-stangerl-korb.jpg", alt: "Kürbiskernstangerl im Weidenkorb" },
            { src: "/images/galerie/strip-backstube-koerbe.jpg", alt: "Gebäckkörbe in der Backstube Wetzelsdorf" },
          ].map((img) => (
            <div key={img.src} className="relative flex-none w-48 md:w-72 overflow-hidden snap-start">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="eager"
                className="object-cover brightness-90"
                sizes="(max-width: 640px) 192px, 288px"
              />
            </div>
          ))}
        </div>

        <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Unsere Produkte" }]} />

        {isStriezelActive() && (
          <>
        {/* Aktuell: Allerheiligenstriezel 2026 */}
        <section className="bg-brand-dark" aria-label="Aktuell: Allerheiligenstriezel 2026">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10 grid md:grid-cols-[1fr_minmax(0,22rem)] gap-6 md:gap-12 items-center">
            <div>
              <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-accent mb-3">Aktuell</p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-white leading-tight mb-3">
                Allerheiligenstriezel 2026 sind da.
              </h2>
              <p className="text-white/60 font-sans text-sm leading-relaxed mb-5 max-w-lg">
                Von 150 g um € 2,70 bis zum 1500-g-Familienstriezel um € 25,00. Ohne Rosinen, jetzt vorbestellen.
              </p>
              <Link
                href="/allerheiligenstriezel"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-sans font-semibold text-sm px-6 py-3 transition-colors"
              >
                Alle Größen &amp; Preise
              </Link>
            </div>
            <Link href="/allerheiligenstriezel" className="block shadow-2xl">
              <Image
                src={striezel2026.image}
                alt={striezel2026.alt}
                width={striezel2026.imageWidth}
                height={striezel2026.imageHeight}
                sizes="(max-width: 768px) 100vw, 22rem"
                className="w-full h-auto"
              />
            </Link>
          </div>
        </section>
          </>
        )}

        {/* Brot des Jahres: VollkornSepp Feature */}
        <section className="relative overflow-hidden bg-surface border-b border-rule" aria-label="Brot des Jahres">
          <WatermarkLogo position="top-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/produkte/brot/vollkorn-sepp.jpg"
                  alt="VollkornSepp, Brot des Jahres, Bäckerei Karl Bauer"
                  width={900}
                  height={900}
                  className="w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-accent text-inverse text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                      <path d="M6 0l1.5 4.5H12L8.25 7.25 9.75 12 6 9.25 2.25 12l1.5-4.75L0 4.5h4.5z"/>
                    </svg>
                    Brot des Jahres
                  </span>
                  <span className="text-xs font-sans text-ink-muted uppercase tracking-widest">2026</span>
                </div>
                <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-ink leading-tight mb-3">
                  VollkornSepp.
                </h2>
                <p className="font-serif italic text-xl text-ink-secondary mb-6">
                  Kräftig. Frisch. Natürlich gut.
                </p>
                <p className="font-sans text-base text-ink-secondary leading-relaxed mb-4">
                  Ein Vollkornbrot aus langer Teigführung, mit goldener Sesamkruste und weicher, saftiger Krume. Jeden Tag frisch gebacken, mit besten Zutaten, von Hand. Der VollkornSepp ist unser Herzstück für alle, die beim Brot keine Kompromisse machen.
                </p>
                <p className="font-sans text-sm text-ink-muted leading-relaxed mb-8">
                  Mit besten Zutaten. Von Hand gebacken.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={vorbestellung("VollkornSepp")}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors min-h-[44px]"
                  >
                    Jetzt anfragen
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href={telHref(CONTACT_PHONE)}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-rule text-ink font-sans font-semibold text-sm hover:border-brand hover:text-brand transition-colors min-h-[44px]"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SortimentCategoryNav />

        {/* ─── HERBST POSTER: Markenbild ──────────────────────────── */}
        <section className="relative overflow-hidden bg-page border-t border-rule" aria-label="Sortiment Markenbild">
          <WatermarkLogo position="center" size="lg" />
          <div className="grid md:grid-cols-2 items-stretch min-h-[360px] md:min-h-[480px]">
            <div className="relative overflow-hidden min-h-[300px] md:min-h-0">
              <Image
                src="/images/sortiment/herbst-poster.png"
                alt="Bäckerei Karl Bauer: Brot, Weckerl, Semmerl aus dem Weinviertel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-8 md:px-16 py-14 bg-surface">
              <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-ink-muted mb-5">
                Handwerk seit 1960
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-6">
                Frisch. Täglich.<br />Aus Wetzelsdorf.
              </h2>
              <p className="text-ink-secondary font-sans leading-relaxed text-base max-w-sm">
                Jede Nacht wird in unserer Backstube gebacken. Sauerteig aus eigener Führung, Mehl aus regionalen Mühlen, damit morgens in allen 13 Filialen alles frisch bereitsteht.
              </p>
            </div>
          </div>
        </section>

        <CategorySection
          id="brot"
          eyebrow="Brot & Laibe"
          heading="Unsere Brote"
          intro="Ob saftig-mild oder herzhaft-dunkel: unsere Brote entstehen mit Sauerteig aus eigener Führung und Zutaten aus dem Weinviertel. Jeder Laib braucht seine Zeit. Die nehmen wir uns."
          products={brote}
          bg="bg-page"
          watermark={{ position: "top-right", size: "xl" }}
        />

        {/* ─── CATERING / BRÖTCHEN ─────────────────────────────── */}
        <section className="relative overflow-hidden py-12 md:py-40 bg-surface border-t border-rule" aria-label="Brötchen und Catering">
          <WatermarkLogo position="bottom-left" size="lg" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted">
                Für jeden Anlass
              </span>
              <span className="h-px flex-1 bg-rule" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight mb-5">
              Belegte Brötchen.<br />In unseren Filialen oder als Catering.
            </h2>
            <p className="font-sans text-base text-ink-secondary leading-relaxed max-w-2xl mb-14">
              Ob Frühstücksjause, Firmenfeier oder Festtafel: unsere belegten Brötchen kommen frisch aus der Backstube. Mit unserem eigenen Brot als Basis, belegt mit Schinken, Salami, Käse oder Lachs. Für kleine Runden genauso wie für große Gesellschaften.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-12">
              {[
                { src: "/images/catering/brot-catering-box.jpg", alt: "Belegte Brötchen im Catering-Karton" },
                { src: "/images/catering/brot-catering-lachs.jpg", alt: "Belegte Brötchen mit Lachs" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 min-h-[44px] border border-rule text-ink-secondary font-sans text-sm hover:border-brand hover:text-brand transition-colors"
              >
                Kontakt nicht verbunden
              </a>
              <a
                href={groessereBestellung()}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 min-h-[44px] bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors"
              >
                E-Mail schreiben
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <CategorySection
          id="gebaeck"
          eyebrow="Frühstück & Jause"
          heading="Gebäck"
          intro="Frisch gebacken: morgens kross, mittags noch gut. Für den Frühstückstisch, die Jause und den Hunger dazwischen. Täglich frisch, täglich anders sortiert."
          products={gebaeck}
          bg="bg-surface"
          watermark={{ position: "bottom-left", size: "xl" }}
        />

        <CategorySection
          id="leckereien"
          eyebrow="Süßes & Feines"
          heading="Leckereien"
          intro="Süßes aus der Backstube. Mit Marillenmarmelade, Schokolade oder Mohn: bei uns gibt es echte Rezepte, keine Fertigware. Manches ist saisonal. Manches ist immer da."
          products={leckereien}
          bg="bg-page"
          watermark={{ position: "center", size: "2xl" }}
        />

        {/* Knuspertraum special section */}
        <section id="knuspertraum" className="py-12 md:py-40 bg-gradient-to-br from-brand-dark via-brand-dark to-brand relative overflow-hidden" aria-label="Knuspertraum">
          <div className="absolute bottom-0 right-0 pointer-events-none" aria-hidden="true">
            <Image
              src="/images/logo/logo-diamond.png"
              alt=""
              width={560}
              height={560}
              className="w-[280px] md:w-[420px] lg:w-[560px] opacity-[0.05] translate-x-1/4 translate-y-1/4"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-inverse/50 mb-4 font-sans">
              Zum Aufbacken
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-inverse leading-tight mb-5">
              Knuspertraum
            </h2>
            <p className="text-inverse/70 font-sans leading-relaxed max-w-2xl mb-10 md:mb-20 text-base">
              Frischer Ofen-Genuss ohne Bäcker-Frühaufsteher-Gen. Einfach halbgebacken
              kaufen, im eigenen Ofen fertig backen. Bäckerei-Qualität
              direkt aus deiner Küche.
            </p>
            <div className="flex gap-6 overflow-x-auto scrollbar-none pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
              {knuspertraum.map((product) => (
                <div key={product.name} className="group flex-none w-[200px] sm:w-[220px] lg:w-auto">
                  <div className="relative overflow-hidden aspect-square mb-4 bg-brand">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 200px, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-inverse mb-0.5">{product.name}</h3>
                  <p className="text-xs font-sans text-inverse/50 uppercase tracking-widest mb-2">{product.weight}</p>
                  <p className="font-serif italic text-sm text-accent mb-2">{product.statement}</p>
                  <p className="text-sm font-sans text-inverse/80 leading-relaxed mb-3">{product.description}</p>
                  <a
                    href={vorbestellung(product.name)}
                    className="text-xs font-sans font-semibold uppercase tracking-wider text-accent hover:text-inverse transition-colors"
                  >
                    Vorbestellen
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frühstücksideen */}
        <section className="relative overflow-hidden py-12 md:py-40 bg-page border-t border-rule" aria-label="Frühstücksideen mit Brot">
          <WatermarkLogo position="bottom-right" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                  Morgens aus der Backstube
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight">
                  Drei Frühstücksideen mit Brot.
                </h2>
              </div>
              <p className="text-ink-secondary font-sans leading-relaxed max-w-xs text-sm md:text-right shrink-0">
                Der beste Start in den Tag. Fertig in wenigen Minuten.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              {/* Frühstück 1 */}
              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">
                  01
                </span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">
                  Frühstücksidee
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  Winzerwecken mit Marillenmarmelade
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">
                  Winzerwecken · ca. 1 kg
                </p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Den Winzerwecken frisch aufschneiden, mit guter Butter bestreichen und Marillenmarmelade darauf, oder Schokoaufstrich für die Kinder. Außen resch, innen weich, morgens am besten. Der Sonntagmorgen, der nach Bäckerei riecht.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Butter", "Marillenmarmelade", "Schokoaufstrich", "Kräutertopfen"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frühstück 2 */}
              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">
                  02
                </span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">
                  Frühstücksidee
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  Toastie mit Schinken, Käse und Senf
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">
                  Toastbrot · 500 g
                </p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Zwei Scheiben Toastbrot mit Dijonsenf bestreichen, Schinken und Käse drauf, im Ofen oder der Pfanne goldbraun überbacken. Warm servieren, sofort essen. Einfacher geht gutes Frühstück nicht.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Schinken", "Käse", "Dijonsenf"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frühstück 3 */}
              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">
                  03
                </span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">
                  Frühstücksidee
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  Hausbrot mit Frischkäse und Radieschen
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">
                  Hausbrot · 1 kg (Der Runde)
                </p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Eine dicke Scheibe Hausbrot, großzügig mit Frischkäse oder Hüttenkäse bestreichen. Dünne Radieschenscheiben drauf, Schnittlauch und etwas Salz. Das Frühstück, das satt macht und trotzdem leicht bleibt.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Frischkäse", "Radieschen", "Schnittlauch"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Rezeptideen */}
        <section className="relative overflow-hidden py-12 md:py-40 bg-surface border-t border-rule" aria-label="Rezeptideen mit Brot">
          <WatermarkLogo position="top-left" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                  Inspirationen aus der Backstube
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight">
                  Drei Abendideen mit Brot.
                </h2>
              </div>
              <p className="text-ink-secondary font-sans leading-relaxed max-w-xs text-sm md:text-right shrink-0">
                Gutes Brot braucht keine große Küche. Nur die richtigen Zutaten.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              {/* Idee 1 */}
              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">
                  01
                </span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">
                  Abendidee
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  Nußbrot mit Blauschimmelkäse und Birne
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">
                  Nußbrot · 500 g oder 1 kg
                </p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Eine Scheibe Nußbrot mit etwas Butter bestreichen. Feine Birnenscheiben und Blauschimmelkäse drauflegen, ein paar Tropfen Aceto Balsamico darüber. Dazu ein Veltliner aus dem Weinviertel, und fertig ist das beste Abendessen der Woche.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Blauschimmelkäse", "Birne", "Aceto Balsamico", "Veltliner"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Idee 2 */}
              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">
                  02
                </span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">
                  Abendidee
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  Tiroler Ährenbrot mit kaltem Schweinsbraten
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">
                  Tiroler Ährenbrot · 1 kg oder 2 kg
                </p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Dunkles Roggenbrot, dünn aufgeschnitten, mit kaltem Schweinsbraten belegen. Grober Senf und frisch geriebener Kren dazu, und schon hat man ein Abendessen, das nach echtem Weinviertel schmeckt. Kein Herd nötig.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Schweinsbraten", "Grober Senf", "Frischer Kren"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Idee 3 */}
              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">
                  03
                </span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">
                  Abendidee
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  CRAFT-Karl als Feierabend-Jausenbrett
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">
                  CRAFT-Karl · Laib
                </p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Den CRAFT-Karl aufschneiden, leicht mit Streichwurst bestreichen, dünne Radieschenscheiben drauf und mit frischem Schnittlauch bestreuen. Wer mag, legt noch Bauerngeselchtes oder Salami dazu. Simpel, ehrlich, gut.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Streichwurst", "Radieschen", "Schnittlauch", "Bauerngeselchtes"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Order Info Banner */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-surface border-y border-rule" aria-label="Bestellhinweis">
          <WatermarkLogo position="bottom-left" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:flex md:items-center md:justify-between gap-12">
              <div className="mb-8 md:mb-0">
                <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4">
                  Frisch auf Bestellung.
                </h2>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed max-w-lg">
                  Viele unserer Produkte, vor allem saisonale Spezialitäten wie Striezel,
                  Germteigkrampus oder Gutscheine, bestellt man am besten rechtzeitig in
                  der Filiale. Einfach persönlich, telefonisch oder per E-Mail anfragen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={telHref(CONTACT_PHONE)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink/20 text-ink font-sans font-medium text-sm hover:border-brand hover:text-brand transition-colors"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={vorbestellung()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink/20 text-ink font-sans font-medium text-sm hover:border-brand hover:text-brand transition-colors"
                >
                  E-Mail schreiben
                </a>
                <a
                  href="/filialen"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors"
                >
                  Filiale finden
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gutscheine: Anfrage per E-Mail, kein Onlinekauf */}
        <section id="gutscheine" className="scroll-mt-[116px] bg-page border-b border-rule" aria-labelledby="gutscheine-titel">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div className="md:grid md:grid-cols-[1fr_auto] md:items-end gap-12 border-l-4 border-accent pl-6 md:pl-10">
              <div className="max-w-xl mb-8 md:mb-0">
                <h2 id="gutscheine-titel" className="font-serif text-2xl md:text-3xl text-ink mb-4">
                  Gutscheine zum Verschenken.
                </h2>
                <p className="text-ink-secondary font-sans text-base leading-relaxed mb-3">
                  Für alle, die gutes Brot zu schätzen wissen. Schreibt uns, welchen Wert und
                  wie viele Gutscheine ihr braucht. Wir melden uns mit allen Details zu Abholung
                  und Bezahlung.
                </p>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed">
                  Gutscheine könnt ihr auch persönlich in eurer Filiale vorbestellen.
                </p>
              </div>
              <a
                href={gutscheinAnfrage()}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors"
              >
                Gutschein anfragen
              </a>
            </div>
          </div>
        </section>

        {/* Team Pull-Quote */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-page" aria-label="Team-Empfehlung">
          <WatermarkLogo position="top-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:flex md:items-center gap-12">
              <div className="relative overflow-hidden w-24 h-24 md:w-32 md:h-32 rounded-none shrink-0 mb-6 md:mb-0">
                <Image
                  src={melanie.image}
                  alt={melanie.name}
                  fill
                  className="object-cover object-center"
                  sizes="128px"
                />
              </div>
              <div>
                <p className="font-serif italic text-xl md:text-2xl text-ink leading-relaxed mb-3">
                  &bdquo;{melanie.quote}&ldquo;
                </p>
                <p className="text-xs font-sans uppercase tracking-widest text-ink-muted">
                  {melanie.name} &middot; {melanie.location}
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />

        {/* Interne Verlinkung: Kaffeehaus & Blog */}
        <section className="py-16 md:py-20 bg-surface border-t border-rule" aria-label="Weiter entdecken">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-muted mb-8">Auch interessant</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/kaffeehaus" className="group block p-8 border border-rule hover:border-brand transition-colors">
                <p className="text-xs font-sans uppercase tracking-widest text-ink-muted mb-3 group-hover:text-brand transition-colors">Kaffeehaus</p>
                <p className="font-serif text-xl text-ink mb-4">Genuss direkt vor Ort</p>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed">Frühstück, Jause und hausgemachte Leckereien, in vier Kaffeehäusern im Weinviertel.</p>
                <span className="inline-flex items-center gap-2 mt-4 text-xs font-sans font-semibold uppercase tracking-wider text-brand group-hover:gap-3 transition-all">
                  Zu den Kaffeehäusern
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
              </Link>
              <Link href="/blog" className="group block p-8 border border-rule hover:border-brand transition-colors">
                <p className="text-xs font-sans uppercase tracking-widest text-ink-muted mb-3 group-hover:text-brand transition-colors">Blog</p>
                <p className="font-serif text-xl text-ink mb-4">Geschichten aus der Backstube</p>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed">Was Sauerteig kann, warum Buchteln immer mittwochs kommen: Einblicke aus dem Weinviertel.</p>
                <span className="inline-flex items-center gap-2 mt-4 text-xs font-sans font-semibold uppercase tracking-wider text-brand group-hover:gap-3 transition-all">
                  Zum Blog
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Brot & Gebäck kaufen bei der Bäckerei Karl Bauer im Weinviertel",
            url: "https://www.example.invalid/sortiment",
            description: "Vollständiges Sortiment der Bäckerei Karl Bauer: Brote, Gebäck, Leckereien, Knuspertraum. Täglich frisch aus der Backstube Wetzelsdorf.",
            inLanguage: "de-AT",
            publisher: { "@id": "https://www.example.invalid/#organization" },
            about: { "@id": "https://www.example.invalid/#bakery" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Brot & Gebäck von der Bäckerei Karl Bauer",
            url: "https://www.example.invalid/sortiment",
            description: "Frisches Brot und Gebäck aus der Backstube Wetzelsdorf, täglich geliefert in 13 Filialen im Weinviertel.",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Hausbrot rund", url: "https://www.example.invalid/sortiment#brot" },
              { "@type": "ListItem", position: 2, name: "Winzerwecken", url: "https://www.example.invalid/sortiment#brot" },
              { "@type": "ListItem", position: 3, name: "Weinviertelbrot", url: "https://www.example.invalid/sortiment#brot" },
              { "@type": "ListItem", position: 4, name: "Nußbrot", url: "https://www.example.invalid/sortiment#brot" },
              { "@type": "ListItem", position: 5, name: "CRAFT-Karl", url: "https://www.example.invalid/sortiment#brot" },
              { "@type": "ListItem", position: 6, name: "Semmel", url: "https://www.example.invalid/sortiment#gebaeck" },
              { "@type": "ListItem", position: 7, name: "Vitisweckerl", url: "https://www.example.invalid/sortiment#gebaeck" },
              { "@type": "ListItem", position: 8, name: "Buchteln", url: "https://www.example.invalid/sortiment#leckereien" },
              { "@type": "ListItem", position: 9, name: "Krapfen", url: "https://www.example.invalid/sortiment#leckereien" },
              { "@type": "ListItem", position: 10, name: "Knuspertraum halbgebacken", url: "https://www.example.invalid/sortiment#knuspertraum" },
            ],
          }),
        }}
      />
    </>
  );
}
