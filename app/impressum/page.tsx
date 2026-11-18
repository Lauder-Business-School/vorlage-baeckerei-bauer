import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { kontakt } from "@/lib/mailto";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_EMAIL, telHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz",
  description:
    "Impressum und Datenschutzerklärung der Bäckerei Karl Bauer GmbH, Wetzelsdorf, Niederösterreich.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <section className="bg-page pt-16 pb-28">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <Breadcrumb
              crumbs={[
                { label: "Startseite", href: "/" },
                { label: "Impressum & Datenschutz" },
              ]}
            />

            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-tight mt-10 mb-12">
              Impressum &amp; Datenschutz
            </h1>

            {/* Impressum */}
            <section aria-labelledby="impressum-heading" className="mb-16">
              <h2
                id="impressum-heading"
                className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-6"
              >
                Impressum
              </h2>

              <div className="space-y-6 text-sm font-sans text-ink-secondary leading-loose">
                <div>
                  <p className="font-semibold text-ink">Bäckerei Karl Bauer GmbH</p>
                  <p>Baumfeldstraße 9</p>
                  <p>2170 Wetzelsdorf</p>
                  <p>Niederösterreich, Österreich</p>
                </div>

                <div>
                  <p>
                    <span className="text-ink font-medium">Telefon: </span>
                    <a href={telHref(CONTACT_PHONE)} className="hover:text-brand transition-colors">
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <span className="text-ink font-medium">E-Mail: </span>
                    <a href={kontakt()} className="hover:text-brand transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <p>
                    <span className="text-ink font-medium">Website: </span>
                    <a href="https://www.example.invalid" className="hover:text-brand transition-colors">
                      www.example.invalid
                    </a>
                  </p>
                </div>

                <div>
                  <p>
                    <span className="text-ink font-medium">Geschäftsführer: </span>
                    Dr. Stefan Bauer (alleinvertretungsberechtigt)
                  </p>
                  <p>
                    <span className="text-ink font-medium">Gesellschafter: </span>
                    Karl Bauer (100 %)
                  </p>
                </div>

                <div>
                  <p>
                    <span className="text-ink font-medium">Firmenbuchnummer: </span>
                    FN 360703 x
                  </p>
                  <p>
                    <span className="text-ink font-medium">Firmenbuchgericht: </span>
                    Landesgericht Korneuburg
                  </p>
                  <p>
                    <span className="text-ink font-medium">UID-Nummer: </span>
                    ATU66410911
                  </p>
                </div>

                <div>
                  <p>
                    <span className="text-ink font-medium">Unternehmensgegenstand: </span>
                    Herstellung und Verkauf von Backwaren, Betrieb von Kaffeehäusern und Lebensmittelgeschäften
                  </p>
                  <p>
                    <span className="text-ink font-medium">Berufsrecht: </span>
                    Gewerbeordnung (GewO), abrufbar unter{" "}
                    <a
                      href="https://www.ris.bka.gv.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors underline underline-offset-2"
                    >
                      www.ris.bka.gv.at
                    </a>
                  </p>
                  <p>
                    <span className="text-ink font-medium">Aufsichtsbehörde: </span>
                    Bezirkshauptmannschaft Mistelbach
                  </p>
                  <p>
                    <span className="text-ink font-medium">Mitglied bei: </span>
                    Wirtschaftskammer Niederösterreich
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-rule mb-16" />

            {/* Datenschutz */}
            <section aria-labelledby="datenschutz-heading" className="mb-16">
              <h2
                id="datenschutz-heading"
                className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-6"
              >
                Datenschutzerklärung
              </h2>

              <div className="space-y-8 text-sm font-sans text-ink-secondary leading-loose">
                <div>
                  <h3 className="font-medium text-ink mb-2">Verantwortlicher</h3>
                  <p>
                    Verantwortlicher im Sinne der DSGVO ist die Bäckerei Karl Bauer GmbH,
                    Baumfeldstraße 9, 2170 Wetzelsdorf. Kontakt:{" "}
                    <a href={kontakt()} className="hover:text-brand transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-ink mb-2">Erhebung und Verarbeitung personenbezogener Daten</h3>
                  <p>
                    Diese Website erhebt beim Aufruf automatisch technische Daten (IP-Adresse,
                    Browsertyp, Zeitpunkt des Zugriffs) im Rahmen des Serverbetriebs. Diese Daten
                    werden nicht mit anderen Datenquellen zusammengeführt und nach 30 Tagen gelöscht.
                  </p>
                  <p className="mt-3">
                    Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur
                    Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht
                    ohne Ihre ausdrückliche Zustimmung.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-ink mb-2">Cookies</h3>
                  <p>
                    Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools von Drittanbietern.
                    Technisch notwendige Cookies können für den Betrieb der Website eingesetzt werden.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-ink mb-2">Externe Dienste</h3>
                  <p>
                    Diese Website bindet Videos von YouTube (Google LLC) ein. Dabei wird die
                    datenschutzfreundliche Variante youtube-nocookie.com verwendet. Beim Laden der
                    Seite werden möglicherweise Verbindungen zu Google-Servern hergestellt.
                    Datenschutzerklärung von Google:{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors underline underline-offset-2"
                    >
                      policies.google.com/privacy
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-ink mb-2">Ihre Rechte</h3>
                  <p>
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                    der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf
                    Datenübertragbarkeit. Zur Ausübung Ihrer Rechte wenden Sie sich an{" "}
                    <a href={kontakt()} className="hover:text-brand transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                    . Sie haben außerdem das Recht, eine Beschwerde bei der österreichischen
                    Datenschutzbehörde (
                    <a
                      href="https://www.dsb.gv.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors underline underline-offset-2"
                    >
                      dsb.gv.at
                    </a>
                    ) einzureichen.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-rule mb-16" />

            {/* Haftungsausschluss */}
            <section aria-labelledby="haftung-heading">
              <h2
                id="haftung-heading"
                className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-6"
              >
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-sm font-sans text-ink-secondary leading-loose">
                <p>
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen
                  wir keine Gewähr. Als Diensteanbieter sind wir für eigene Inhalte nach § 18
                  ECG verantwortlich.
                </p>
                <p>
                  Für externe Links übernehmen wir keine Haftung. Für den Inhalt verlinkter
                  Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
      {/* #20: LegalNotice Schema (auch bei noindex nützlich für Entitäts-Signal) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Impressum & Datenschutz | Bäckerei Karl Bauer GmbH",
            url: "https://www.example.invalid/impressum",
            inLanguage: "de-AT",
            about: {
              "@type": "Organization",
              "@id": "https://www.example.invalid/#organization",
              name: "Bäckerei Karl Bauer GmbH",
              legalName: "Bäckerei Karl Bauer GmbH",
              vatID: "ATU66410911",
              legalIdentifier: "FN 360703 x",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Baumfeldstraße 9",
                addressLocality: "Wetzelsdorf",
                postalCode: "2170",
                addressRegion: "Niederösterreich",
                addressCountry: "AT",
              },
            },
          }),
        }}
      />
    </>
  );
}
