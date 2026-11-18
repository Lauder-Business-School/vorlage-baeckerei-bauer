import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WatermarkLogo from "@/components/WatermarkLogo";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import type { Metadata } from "next";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_EMAIL, telHref } from "@/lib/config";
import { kontakt } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die Bäckerei Karl Bauer GmbH: Bestellungen, Fragen, Feedback. Telefonisch, per E-Mail oder direkt in einer unserer 13 Filialen im Weinviertel.",
  alternates: { canonical: "/kontakt" },
  keywords: [
    "Bäckerei Karl Bauer Kontakt",
    "Bäckerei Poysdorf Telefon",
    "Brot vorbestellen Weinviertel",
    "Bäckerei Bauer Adresse",
    "Backstube Wetzelsdorf Kontakt",
  ],
  openGraph: {
    title: "Kontakt | Bäckerei Karl Bauer",
    description:
      "Anrufen, schreiben oder direkt vorbeikommen: Bäckerei Karl Bauer GmbH, Wetzelsdorf, Niederösterreich.",
    url: "https://www.example.invalid/kontakt",
    images: [
      {
        url: "/images/hero/weinviertel-brot-backstube.jpg",
        width: 1200,
        height: 800,
        alt: "Bäckerei Karl Bauer, Backstube Wetzelsdorf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Bäckerei Karl Bauer",
    description: "Anrufen, schreiben oder direkt vorbeikommen: Bäckerei Karl Bauer GmbH, Wetzelsdorf, Niederösterreich.",
    images: ["/images/hero/weinviertel-brot-backstube.jpg"],
  },
};

const contactOptions = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 3.5C3 3.5 5 2 6.5 2C7.5 2 8.5 3 9.5 5L11 8C12 10 11 11 10 12C11 14 13.5 16.5 15.5 17.5C16.5 16.5 17.5 16 19 17L21 18C22 18.5 22 19.5 22 20C22 21.5 20 23 20 23C10 23 1 14 1 4C1 4 3 2 4.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Telefon",
    value: CONTACT_PHONE_DISPLAY,
    href: telHref(CONTACT_PHONE),
    description: "Montag bis Samstag ab 6 Uhr erreichbar",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7L11 13L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "E-Mail",
    value: CONTACT_EMAIL,
    href: kontakt(),
    description: "Wir antworten in der Regel innerhalb von 24 Stunden",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2C7.13 2 4 5.13 4 9C4 14.25 11 21 11 21C11 21 18 14.25 18 9C18 5.13 14.87 2 11 2Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Adresse",
    value: "Baumfeldstraße 9, 2170 Wetzelsdorf",
    href: "https://maps.google.com/?q=Baumfeldstraße+9,+2170+Wetzelsdorf",
    description: "Produktionsstandort, kein Direktverkauf",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-dark via-brand-dark to-brand py-14 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none" aria-hidden="true">
            <Image
              src="/images/logo/logo-diamond.png"
              alt=""
              width={600}
              height={600}
              className="w-[280px] md:w-[440px] opacity-[0.05] translate-x-1/3"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-inverse/40 mb-5 font-sans">
              Bäckerei Karl Bauer GmbH
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-inverse mb-5">
              Kontakt.
            </h1>
            <p className="font-sans text-base md:text-lg text-inverse/60 max-w-xl leading-relaxed">
              Fragen, Bestellungen oder Feedback. Wir freuen uns von Ihnen zu hören.
            </p>
          </div>
        </section>

        <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Kontakt" }]} />

        {/* Contact options */}
        <section className="py-10 md:py-24 bg-page relative overflow-hidden" aria-label="Kontaktmöglichkeiten">
          <WatermarkLogo position="top-right" size="2xl" />
          <WatermarkLogo position="bottom-left" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.href.startsWith("https") ? "_blank" : undefined}
                  rel={option.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-4 p-5 md:p-8 border border-rule hover:border-brand transition-colors bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <span className="text-brand group-hover:scale-110 transition-transform origin-left w-fit">
                    {option.icon}
                  </span>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-ink-muted mb-1">
                      {option.label}
                    </p>
                    <p className="font-serif text-lg text-ink mb-1 group-hover:text-brand transition-colors">
                      {option.value}
                    </p>
                    <p className="font-sans text-xs text-ink-muted leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-3xl text-ink mb-4">
                  Schreiben Sie uns.
                </h2>
                <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-8">
                  Für Bestellungen, allgemeine Anfragen oder Feedback: schreiben Sie uns
                  eine E-Mail oder rufen Sie an. Wir melden uns bei Ihnen.
                </p>
                <div className="space-y-4 text-sm font-sans text-ink-secondary">
                  <div className="flex gap-3 items-start">
                    <span className="text-brand font-bold mt-0.5" aria-hidden="true">·</span>
                    <span>Brotbestellungen bitte <strong className="text-ink">3 Tage im Voraus</strong></span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-brand font-bold mt-0.5" aria-hidden="true">·</span>
                    <span>Für dringende Anfragen am besten <strong className="text-ink">anrufen</strong></span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-brand font-bold mt-0.5" aria-hidden="true">·</span>
                    <span>Filialen und Öffnungszeiten unter{" "}
                      <Link href="/filialen" className="text-brand hover:text-brand-dark underline underline-offset-2 transition-colors">
                        /filialen
                      </Link>
                    </span>
                  </div>
                </div>
              </div>

              {/* Direkte Kontakt-Optionen */}
              <div className="space-y-6" aria-label="Direkter Kontakt">
                <div className="p-8 border border-rule bg-surface">
                  <p className="font-sans text-xs uppercase tracking-widest text-ink-muted mb-4">
                    Per E-Mail schreiben
                  </p>
                  <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-6">
                    Schreiben Sie uns direkt, für Bestellungen, Fragen und Feedback. Wir antworten
                    in der Regel innerhalb von 24 Stunden.
                  </p>
                  <TrackedLink
                    href={kontakt("Anfrage über example.invalid")}
                    eventName="contact_email_click"
                    className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    E-Mail schreiben
                    <ArrowRight size={14} />
                  </TrackedLink>
                  <p className="mt-4 font-sans text-xs text-ink-muted">
                    {CONTACT_EMAIL}
                  </p>
                </div>

                <div className="p-8 border border-rule bg-surface">
                  <p className="font-sans text-xs uppercase tracking-widest text-ink-muted mb-4">
                    Schnell anrufen
                  </p>
                  <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-6">
                    Für dringende Anfragen und Bestellungen: am schnellsten per Telefon.
                    Montag bis Samstag ab 6 Uhr.
                  </p>
                  <TrackedLink
                    href={telHref(CONTACT_PHONE)}
                    eventName="contact_phone_click"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-rule text-ink font-sans font-semibold text-sm hover:border-brand hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filialen CTA */}
        {/* Während du wartest */}
        <section className="relative overflow-hidden py-12 md:py-40 bg-page border-t border-rule" aria-label="Rezeptideen">
          <WatermarkLogo position="bottom-right" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                  Wir melden uns bald
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight">
                  Drei Ideen fürs Warten.
                </h2>
              </div>
              <p className="text-ink-secondary font-sans leading-relaxed max-w-xs text-sm md:text-right shrink-0">
                Bis dahin: gut essen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">01</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Sofort</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Sonnenbrot mit Tzatziki und Chorizo</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Sonnenbrot · 500 g</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Sesamkruste, feinporig, nährstoffreich. Dünn aufschneiden, Tzatziki drauf, ein paar Scheiben spanische Chorizo daneben. Dazu ein kühler Radler, fertig ist die beste Wartezeit.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Tzatziki", "Chorizo", "Radler"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">02</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Auf Bestellung</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Olivenbrot frisch vom Grill</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Olivenbrot · Laib · 2 Tage Vorlauf</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  24 Stunden Teigruhe, handverlesene schwarze Oliven und dann auf den Grill. Auf Bestellung, genau wie diese Anfrage. Den nächsten Grillabend schon jetzt einplanen.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Grill", "schwarze Oliven", "2 Tage vorher"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative bg-surface overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">03</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Sommer</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Sandwich als Caprese</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Sandwich · 500 g</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Goldbraun gebackenes Weißbrot, dicke Tomatenscheiben, Mozzarella, frisches Basilikum, Olivenöl. Mehr braucht Sommer nicht.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Tomate", "Mozzarella", "Basilikum"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-page border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 bg-surface border-t border-rule" aria-label="Filialen finden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl text-ink mb-2">
                Lieber persönlich vorbeikommen?
              </h2>
              <p className="font-sans text-sm text-ink-secondary">
                13 Filialen und 4 Kaffeehäuser im Weinviertel, täglich frisch.
              </p>
            </div>
            <Link
              href="/filialen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Filialen &amp; Öffnungszeiten
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt | Bäckerei Karl Bauer GmbH",
            url: "https://www.example.invalid/kontakt",
            inLanguage: "de-AT",
            about: { "@id": "https://www.example.invalid/#organization" },
          }),
        }}
      />
    </>
  );
}
