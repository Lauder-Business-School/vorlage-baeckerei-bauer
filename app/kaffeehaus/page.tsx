import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WatermarkLogo from "@/components/WatermarkLogo";
import SpeisenkarteGallery from "@/components/SpeisenkarteGallery";
import { teamMembers } from "@/lib/data";
import type { Metadata } from "next";
import { standortById, addressLine, hoursReadable } from "@/lib/standorte";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, telHref } from "@/lib/config";
import { reservierung } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Kaffeehaus Bauer | Frühstück & Kaffee im Weinviertel",
  description:
    "Frühstücken im Weinviertel: Vier Kaffeehäuser in Hohenau, Großkrut, Poysdorf und Lanzendorf. Bauer's Frühstück ab € 9,50, J. Hornig Kaffee und frisches Gebäck.",
  alternates: {
    canonical: "/kaffeehaus",
  },
  keywords: [
    "Kaffeehaus Weinviertel",
    "Café Niederösterreich",
    "Kaffeehaus Poysdorf",
    "Kaffeehaus Lanzendorf",
    "Kaffeehaus Großkrut",
    "Kaffeehaus Hohenau",
    "Frühstück Weinviertel",
    "Frühstück Poysdorf",
    "Frühstück Hohenau",
    "J. Hornig Kaffee",
    "Jause Niederösterreich",
    "Café Bäckerei",
    "Bauer Frühstück",
    "Kuchen Weinviertel",
    "Melange Café",
  ],
  openGraph: {
    title: "Kaffeehaus Bauer | Frühstück & Kaffee im Weinviertel",
    description:
      "Vier Kaffeehäuser in Poysdorf, Lanzendorf, Großkrut und Hohenau. Frühstück ab € 9,50, J. Hornig Kaffee, frisches Gebäck täglich.",
    url: "https://www.example.invalid/kaffeehaus",
    images: [
      {
        url: "/images/hero/kaffeehaus-fruehstueck.jpg",
        width: 1200,
        height: 800,
        alt: "Frühstück im Kaffeehaus Bauer: Kaffee und Gebäck im Weinviertel",
      },
    ],
  },
  // #3 Twitter Card Kaffeehaus
  twitter: {
    card: "summary_large_image",
    title: "Kaffeehaus Bauer | Frühstück & Kaffee im Weinviertel",
    description: "Vier Kaffeehäuser in Poysdorf, Lanzendorf, Großkrut und Hohenau. Frühstück ab € 9,50, J. Hornig Kaffee.",
    images: ["/images/hero/kaffeehaus-fruehstueck.jpg"],
  },
};

const menuItems = [
  {
    name: "Bauer's Frühstück",
    price: "9,50",
    description:
      "Zwei Gebäck nach Wahl, Schinken, Käse, Tomaten und Frühstücksei. Die perfekte Art, in den Tag zu starten, am Tisch im Weinviertel.",
    highlight: true,
  },
  {
    name: "Poysdorfer Frühstück",
    price: "11,90",
    description:
      "Eine Semmel, zwei Gebäck ihrer Wahl, Lachs, Schinken, Käse, Tomaten, glückliches Ei und Nutella.",
  },
  {
    name: "Schinken-Käse Toast",
    price: "4,20",
    description:
      "Knusprig gegrillt, mit Schinken und Käse. Mit Salat, Tomate, Gurke und einem kleinen Ketchup serviert. Die herzhafte Jause im Kaffeehaus.",
    image: "/images/kaffeehaus/schinken-kaese-toast.png",
  },
  {
    name: "Karl's Apfelstrudel",
    price: "3,30",
    description:
      "Mit Schlagobers serviert. Frisch aus der eigenen Backstube, ein Klassiker, der bleibt.",
  },
];

const kaffeehausDaten = (id: string) => {
  const s = standortById(id);
  return { id, address: addressLine(s), hours: hoursReadable(s.hours), mapsUrl: s.mapsUrl, phone: s.phone, ort: s.locality };
};

const kaffeehaeuser = [
  {
    ...kaffeehausDaten("poysdorf"),
    name: "Kaffeehaus Poysdorf",
    note: "Mitten in Poysdorf. Für die kurze Pause und das lange Gespräch.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGS3w1qQCXfjSz5MeBQY0jnMxQNIfgkQYUhNgMm7jLcG6EKfrnVkFnOmZTAFvuOtD3qKiK4VNPmUbFQupYTb8kAVju8iXof8wb1ndA4NOW9mGPr_NgS0K_OJpJeB8NPiKA9YOApSQ=w800-h533-k-no",
  },
  {
    ...kaffeehausDaten("lanzendorf"),
    name: "Kaffeehaus Lanzendorf",
    note: "Man kann auch draußen sitzen. Und der Kaffee ist so gut, dass man gleich noch einen bestellt.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH8upP6LBGext-bNp99hbt_IdCJgyvyWQy6awo8Phf56NDsQ2E_X39jHN7-DpUOcjzFjRs-jaqDtpFmMeC0Cc-SNdJWzIHuH64C7XMAGxV5cJxLzk9l3DrOKUqVQhuDYxnyPcQL=w800-h533-k-no",
  },
  {
    ...kaffeehausDaten("grosskrut"),
    name: "Kaffeehaus Großkrut",
    note: "Kaufhaus und Café in einem. Hier trifft sich das Dorf.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHY_lJ0jDILMSqCoCu-uXcIzLgzFsl5mgUAOipUYqZC-TzCrPHxE0Mh4j-ORosLXQtV0XubA_voPmmp1upPJbw4HvdwpdtUwOS2qo52m6JufmKlc1ROJjHGxHMLPCNlDPv0G_Sz=w800-h533-k-no",
  },
  {
    ...kaffeehausDaten("hohenau"),
    name: "Kaffeehaus Hohenau",
    note: "An der March, am Ende des Weinviertels. Weit weg ist hier ein Kompliment.",
    photo: "https://lh3.googleusercontent.com/p/AF1QipPK6DD4Pvj0sIbl9M8IX-a45r4wOlf3VlJIfQWP=w800-h533-k-no",
  },
];

const elvira = teamMembers.find((m) => m.name === "Elvira")!;

export default function KaffeehausPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Kaffeehaus" }]} />

        {/* HERO */}
        <section
          className="relative min-h-[480px] md:h-[700px] flex items-center justify-center overflow-hidden"
          aria-label="Kaffeehaus Hero"
        >
          <Image
            src="/images/hero/kaffeehaus-fruehstueck.jpg"
            alt="Frühstück im Kaffeehaus Bauer: Kaffee, Gebäck und Jause auf dunklem Holztisch"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80" />

          <div className="relative z-10 text-center max-w-2xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-4 justify-center mb-8 md:mb-10">
              <div className="h-px w-10 md:w-16 bg-inverse/30" aria-hidden="true" />
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-inverse/55 font-sans whitespace-nowrap">
                Kaffeehaus Bauer
              </p>
              <div className="h-px w-10 md:w-16 bg-inverse/30" aria-hidden="true" />
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-inverse mb-6 md:mb-8">
              Setz dich.<br />Die Zeit läuft<br />nicht davon.
            </h1>

            <p className="text-inverse/70 font-sans text-base leading-relaxed max-w-md mx-auto mb-8 md:mb-10">
              Frisches Gebäck, das noch warm ist. Ein Kaffee, dem man anmerkt,
              dass jemand Freude daran hatte, ihn zuzubereiten.
            </p>

            <div className="flex items-center justify-center gap-5 md:gap-8">
              <div className="h-px w-6 bg-inverse/25" aria-hidden="true" />
              <span className="text-xs font-sans uppercase tracking-widest text-inverse/50">4 Standorte</span>
              <span className="text-inverse/25" aria-hidden="true">·</span>
              <span className="text-xs font-sans uppercase tracking-widest text-inverse/50">täglich frisch</span>
              <span className="text-inverse/25" aria-hidden="true">·</span>
              <span className="text-xs font-sans uppercase tracking-widest text-inverse/50">Weinviertel</span>
              <div className="h-px w-6 bg-inverse/25" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ATMOSPHÄRE */}
        <section className="relative overflow-hidden py-24 md:py-40 bg-page" aria-label="Atmosphäre">
          <WatermarkLogo position="bottom-right" size="lg" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:grid md:grid-cols-2 gap-20 items-start">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-5 font-sans">
                  Der Ort
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-8">
                  Hier wird geplaudert. Oder auch einfach geschwiegen.
                </h2>
                <p className="text-ink-secondary font-sans leading-relaxed mb-6 text-base">
                  Es muss kein Grund sein. Kein Geburtstag, kein Meeting, kein besonderer Anlass.
                  Manchmal reicht es, dass draußen das Weinviertel vorbeizieht, drinnen jemand
                  Bekanntes sitzt und die Tasse noch voll ist.
                </p>
                <p className="text-ink-secondary font-sans leading-relaxed text-base">
                  Unsere Kaffeehäuser sind nicht auf Durchzug ausgelegt. Sie sind für die, die sich
                  eine Stunde nehmen wollen, und für die, die fünf Minuten brauchen, aber trotzdem
                  kurz durchschnaufen. Stammgäste kommen täglich. Neue Gesichter werden schnell
                  bekannte. Das passiert nicht durch ein Konzept, sondern weil bei uns echte Menschen
                  hinter der Theke stehen.
                </p>
              </div>

              <div className="mt-10 md:mt-0">
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src="/images/kaffeehaus/kaffeeplausch.jpg"
                    alt="Gäste beim Kaffee Plausch im Kaffeehaus Bäckerei Bauer, nette Leute, immer was los"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DER KAFFEE */}
        <section className="relative overflow-hidden py-24 md:py-40 bg-surface border-y border-rule" aria-label="Unser Kaffee">
          <WatermarkLogo position="top-left" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="md:grid md:grid-cols-2 md:gap-20 items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-6 font-sans">
                  Unser Kaffeepartner
                </p>
                <a
                  href="https://www.jhornig.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="J. Hornig Website öffnen (öffnet in neuem Tab)"
                  className="inline-block mb-8"
                >
                  <Image
                    src="/images/partner/hornig-logo.png"
                    alt="J. Hornig Kaffee"
                    width={375}
                    height={150}
                    className="h-24 md:h-28 w-auto object-contain"
                  />
                </a>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-8">
                  Ein Kaffee, der nach mehr schmeckt.
                </h2>
                <p className="text-ink-secondary font-sans leading-relaxed mb-6 text-base">
                  Nicht jeder Kaffee ist gleich. Das merkt man spätestens dann, wenn man einmal einen
                  getrunken hat, der wirklich gut war. Bei uns kommt der Kaffee von{" "}
                  <a
                    href="https://www.jhornig.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 decoration-1 hover:text-brand transition-colors"
                  >
                    J. Hornig
                  </a>
                  , einer
                  österreichischen Rösterei mit über hundert Jahren Erfahrung und dem konsequenten
                  Verzicht auf Abkürzungen.
                </p>
                <p className="text-ink-secondary font-sans leading-relaxed text-base">
                  Sorgsame Langzeitröstung mit Bohnen, hinter denen eine Geschichte steckt.
                  Was wir daraus machen, ist unser Teil: die richtige Maschine, die richtige Hand, der
                  richtige Moment. Ein Espresso, der seinen Körper hat. Ein Milchkaffee, bei dem der
                  Schaum sitzt. Eine Tasse, zu der man nicht viel sagen muss, weil sie für sich spricht.
                </p>
                <a
                  href="https://www.jhornig.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors mt-8"
                  aria-label="J. Hornig Website öffnen (öffnet in neuem Tab)"
                >
                  Mehr über J. Hornig
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1.5 6H10.5M7.5 3L10.5 6L7.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="mt-12 md:mt-0">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/kaffeehaus/kaffee.png"
                    alt="Von der Bohne über die Mahlung bis zur fertigen Tasse: sechs Espressotassen mit Kaffeebohnen, gemahlenem Kaffee und gebrühtem Kaffee"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIE VERBINDUNG */}
        <section className="relative overflow-hidden py-24 md:py-40 bg-page" aria-label="Gebäck und Kaffee">
          <WatermarkLogo position="bottom-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-5 font-sans">
                Das Zusammenspiel
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-8">
                Frisch gebacken und frisch gebrüht. Das ist kein Zufall.
              </h2>
              <p className="text-ink-secondary font-sans leading-relaxed mb-6 text-base">
                Brot braucht Zeit. Kaffee braucht Aufmerksamkeit. Beides lässt sich nicht
                beschleunigen, ohne dass man es sofort schmeckt. Deshalb passt bei uns zusammen,
                was woanders selten zusammenkommt: Backwaren, die täglich frisch aus unserer
                Backstube kommen und nie länger auf dich warten als nötig, und ein Kaffee, der
                mit der gleichen Überzeugung zubereitet wird.
              </p>
              <p className="text-ink-secondary font-sans leading-relaxed text-base">
                Ein Kipferl, das noch Wärme in sich trägt, und ein Espresso mit dem richtigen Biss.
                Das braucht keine große Erklärung. Das spürt man beim ersten Bissen und beim ersten Schluck.
              </p>
            </div>
          </div>
        </section>

        {/* Kaffeepausen-Ideen */}
        <section className="relative overflow-hidden py-12 md:py-40 bg-surface border-t border-rule" aria-label="Kaffeepausen-Ideen">
          <WatermarkLogo position="top-right" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                  Gebäck trifft Kaffee
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight">
                  Drei Kaffeepausen-Ideen.
                </h2>
              </div>
              <p className="text-ink-secondary font-sans leading-relaxed max-w-xs text-sm md:text-right shrink-0">
                Das richtige Gebäck zum richtigen Kaffee. Kein Zufall, sondern Überzeugung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              {/* Idee 1 */}
              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">01</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Kaffeepause</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  Topfengolatsche mit Wiener Melange
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Topfengolatsche · Stück</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Knuspriger Blätterteig, cremige Topfenfüllung, und dazu eine Wiener Melange, die ihren Namen verdient. Das ist die klassische Kaffeehausviertelstunde. Nichts übertrieben, alles stimmt.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Wiener Melange", "Topfen", "Blätterteig"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Idee 2 */}
              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">02</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Kaffeepause</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  Buchteln warm mit Milchkaffee
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Buchteln · 6 Stück · jeden Mittwoch</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Mittwochs gibt es Buchteln, flaumig, frisch, mit Marillenmarmelade gefüllt. Dazu ein großer Milchkaffee. Das ist kein Frühstück, das ist ein Versprechen, das die Bäckerei Bauer seit Jahrzehnten hält.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Milchkaffee", "Marillenmarmelade", "jeden Mittwoch"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Idee 3 */}
              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">03</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Kaffeepause</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">
                  Schokoschnecke mit Espresso
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Schokoschnecke · Stück</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Nachmittag, drei Uhr, das Tief kommt. Weicher Germteig, Schokoladen-Spirale, goldbraun, und ein kurzer Espresso daneben. Fertig ist die Rettung des Tages.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Espresso", "Schokolade", "Germteig"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="py-24 md:py-40 bg-surface" aria-label="Speisekarte">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
              Angebot
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-16 md:mb-20">
              Was auf den Tisch kommt.
            </h2>

            <div className="divide-y divide-rule">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className={`py-6 md:py-14 md:grid md:gap-20 items-start ${
                    item.image ? "md:grid-cols-[auto_1fr_auto]" : "md:grid-cols-[1fr_auto]"
                  } ${item.highlight ? "bg-brand/[0.05] -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20" : ""}`}
                >
                  {item.image && (
                    <div className="relative w-full md:w-40 h-40 overflow-hidden shrink-0 mb-6 md:mb-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-baseline gap-4 mb-4">
                      <h3 className="font-serif text-2xl text-ink">{item.name}</h3>
                      {item.highlight && (
                        <span className="text-xs font-sans font-semibold uppercase tracking-wider text-accent border border-accent px-2 py-0.5">
                          Empfehlung
                        </span>
                      )}
                    </div>
                    <p className="text-ink-secondary font-sans leading-relaxed max-w-lg text-base">
                      {item.description}
                    </p>
                  </div>
                  <p className="font-serif text-2xl text-brand mt-5 md:mt-0 md:text-right shrink-0">
                    € {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPEISEKARTE GALLERY */}
        <section className="py-24 md:py-40 bg-page" aria-label="Vollständige Speisekarte">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
              Speisekarte
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-5">
              Alles auf einen Blick.
            </h2>
            <p className="text-ink-secondary font-sans text-base leading-relaxed mb-16 md:mb-20 max-w-xl">
              Von der heißen Jause bis zum Aperol Spritzer. Die vollständige Speisekarte für alle vier Kaffeehäuser. Einfach antippen zum Vergrößern.
            </p>
            <SpeisenkarteGallery />
          </div>
        </section>

        {/* TEAM QUOTE */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-brand to-brand-dark relative overflow-hidden" aria-label="Team-Stimme">
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none" aria-hidden="true">
            <Image
              src="/images/logo/logo-diamond.png"
              alt=""
              width={500}
              height={500}
              className="w-[260px] md:w-[400px] lg:w-[500px] opacity-[0.06] translate-x-1/3"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-[8rem] leading-none font-serif text-accent/50 mb-2 select-none pointer-events-none" aria-hidden="true">„</div>
            <div className="md:flex md:items-center gap-16">
              <div className="relative overflow-hidden w-20 h-20 md:w-28 md:h-28 shrink-0 mb-6 md:mb-0 rounded-full ring-2 ring-inverse/20">
                <Image
                  src={elvira.image}
                  alt={elvira.name}
                  fill
                  className="object-cover object-center"
                  sizes="112px"
                />
              </div>
              <div>
                <p className="font-serif italic text-xl md:text-2xl text-inverse leading-relaxed mb-5">
                  &bdquo;Ich mag es, Kund:innen zu begrüßen, ihre Wünsche zu erfüllen, einfach da zu sein. Es ist schön, wenn man spürt, dass die Leute sich freuen.&ldquo;
                </p>
                <p className="text-xs font-sans uppercase tracking-widest text-inverse/60">
                  {elvira.name} &middot; {elvira.location}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STANDORTE */}
        <section className="relative overflow-hidden py-24 md:py-40 bg-page" aria-label="Kaffeehaus Standorte">
          <WatermarkLogo position="top-right" size="md" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
              Standorte
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-16 md:mb-20">
              4 Kaffeehäuser im Weinviertel.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              {kaffeehaeuser.map((kh) => (
                <div key={kh.name}>
                  <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-surface">
                    <Image
                      src={kh.photo}
                      alt={kh.name}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                  </div>
                  <h3 className="font-serif text-lg text-ink mb-2">{kh.name}</h3>
                  <address className="not-italic text-sm font-sans text-ink-secondary leading-relaxed mb-2">
                    {kh.address}
                  </address>
                  <p className="text-xs font-sans text-ink-muted mb-4 leading-relaxed">
                    {kh.hours}
                  </p>
                  <p className="text-sm font-serif italic text-ink-secondary mb-5">{kh.note}</p>
                  <div className="flex flex-wrap gap-3">
                    {kh.phone && (
                      <a
                        href={telHref(kh.phone)}
                        className="inline-flex items-center min-h-[44px] px-4 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors"
                      >
                        Anrufen<span className="sr-only"> {kh.name}, {kh.phone}</span>
                      </a>
                    )}
                    <a
                      href={kh.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center min-h-[44px] px-4 border border-ink/20 text-ink font-sans font-semibold text-sm hover:border-brand hover:text-brand transition-colors"
                    >
                      Route anzeigen<span className="sr-only"> zu {kh.name} in Google Maps (öffnet in neuem Tab)</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KOMM EINFACH VORBEI */}
        <section className="py-24 md:py-32 bg-surface border-t border-rule" aria-label="Einladung">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-5 font-sans">
                Du bist willkommen
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-8">
                Komm einfach vorbei.
              </h2>
              <p className="text-ink-secondary font-sans leading-relaxed text-base mb-10">
                Eine unserer 13 Filialen im Weinviertel ist nicht weit. Und irgendwo zwischen
                Mistelbach und Poysdorf, zwischen Hohenau und Ladendorf, wartet eine Tasse auf dich,
                die es wert ist, dass du kurz stehenbleibst. Oder länger. Das entscheidest du.
              </p>
              <a
                href="/filialen"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors"
              >
                Filiale in meiner Nähe
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section className="py-14 bg-page border-t border-rule" aria-label="Kontakt">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-sans text-sm text-ink-secondary">
              Fragen zu Öffnungszeiten oder Reservierungen? Am schnellsten direkt beim Kaffeehaus anrufen, oder per E-Mail anfragen.
            </p>
            <a
              href={telHref(CONTACT_PHONE)}
              aria-label={`Anrufen: ${CONTACT_PHONE_DISPLAY}`}
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-brand hover:text-brand-dark transition-colors min-h-[44px] py-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 3C2 3 4 1 5 1C5.5 1 6.5 2 7 3L8.5 5.5C9 6.5 8.5 7 8 7.5C8.5 8.5 10 10 11 10.5C11.5 10 12.5 9.5 13.5 10L15 11C16 11.5 16 12.5 16 13C16 14 14.5 16 14.5 16C6 16 0 10 0 1.5C0 1.5 2 0 3 0C3.5 0 4 0.5 4.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={reservierung()}
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-brand hover:text-brand-dark transition-colors min-h-[44px] py-2"
            >
              Tisch per E-Mail anfragen
            </a>
          </div>
        </section>

      </main>

      <Footer />
      {/* #11 MenuItem-Schemas für die Speisekarte */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            name: "Speisekarte Kaffeehaus Bauer",
            url: "https://www.example.invalid/kaffeehaus",
            inLanguage: "de-AT",
            hasMenuSection: [
              {
                "@type": "MenuSection",
                name: "Frühstück & Jause",
                hasMenuItem: [
                  {
                    "@type": "MenuItem",
                    name: "Bauer's Frühstück",
                    description: "Zwei Gebäck nach Wahl, Schinken, Käse, Tomaten und Frühstücksei.",
                    offers: { "@type": "Offer", price: "9.50", priceCurrency: "EUR" },
                  },
                  {
                    "@type": "MenuItem",
                    name: "Poysdorfer Frühstück",
                    description: "Eine Semmel, zwei Gebäck, Lachs, Schinken, Käse, Tomaten, Ei und Nutella.",
                    offers: { "@type": "Offer", price: "11.90", priceCurrency: "EUR" },
                  },
                  {
                    "@type": "MenuItem",
                    name: "Schinken-Käse Toast",
                    description: "Knusprig gegrillt, mit Schinken und Käse, Salat, Tomate, Gurke.",
                    offers: { "@type": "Offer", price: "4.20", priceCurrency: "EUR" },
                  },
                  {
                    "@type": "MenuItem",
                    name: "Karl's Apfelstrudel",
                    description: "Mit Schlagobers serviert. Frisch aus der eigenen Backstube.",
                    offers: { "@type": "Offer", price: "3.30", priceCurrency: "EUR" },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
