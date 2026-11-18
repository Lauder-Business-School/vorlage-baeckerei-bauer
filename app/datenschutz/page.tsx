import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { CONTACT_PHONE_DISPLAY, CONTACT_EMAIL } from "@/lib/config";
import type { Metadata } from "next";
import { kontakt } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Bäckerei Karl Bauer GmbH gemäß DSGVO. Informationen zu Datenverarbeitung, Cookies und Ihren Rechten.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <section className="bg-page pt-16 pb-28">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <Breadcrumb
              crumbs={[
                { label: "Startseite", href: "/" },
                { label: "Datenschutz" },
              ]}
            />

            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-tight mt-10 mb-4">
              Datenschutzerklärung
            </h1>
            <p className="font-sans text-sm text-ink-muted mb-12">
              Bäckerei Karl Bauer GmbH, gemäß DSGVO
            </p>

            <div className="space-y-12 text-sm font-sans text-ink-secondary leading-loose">

              <section aria-labelledby="verantwortlicher">
                <h2 id="verantwortlicher" className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4">
                  Verantwortlicher
                </h2>
                <div className="space-y-2">
                  <p className="font-semibold text-ink">Bäckerei Karl Bauer GmbH</p>
                  <p>Baumfeldstraße 9, 2170 Wetzelsdorf, Niederösterreich</p>
                  <p>
                    E-Mail:{" "}
                    <a href={kontakt()} className="hover:text-brand transition-colors underline underline-offset-2">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <p>
                    Telefon:{" "}
                    <a href="/kontakt" className="hover:text-brand transition-colors">
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>Geschäftsführer: Dr. Stefan Bauer (alleinvertretungsberechtigt)</p>
                </div>
              </section>

              <div className="border-t border-rule" />

              <section aria-labelledby="datenerhebung">
                <h2 id="datenerhebung" className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4">
                  Erhebung und Verarbeitung personenbezogener Daten
                </h2>
                <div className="space-y-4">
                  <p>
                    Diese Website erhebt beim Aufruf automatisch technische Daten (IP-Adresse, Browsertyp,
                    Zeitpunkt des Zugriffs) im Rahmen des Serverbetriebs. Diese Daten werden nicht mit anderen
                    Datenquellen zusammengeführt und nach 30 Tagen gelöscht.
                  </p>
                  <p>
                    Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung
                    Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche
                    Zustimmung.
                  </p>
                  <p>
                    Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
                    sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
                  </p>
                </div>
              </section>

              <div className="border-t border-rule" />

              <section aria-labelledby="cookies">
                <h2 id="cookies" className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4">
                  Cookies
                </h2>
                <p>
                  Diese Website verwendet keine Tracking-Cookies. Für anonymisierte Besucherstatistiken
                  wird Vercel Analytics eingesetzt. Dieser Dienst setzt keine Cookies, erfasst keine
                  personenbezogenen Daten und benötigt daher keine Cookie-Einwilligung. Technisch
                  notwendige Cookies können für den Betrieb der Website eingesetzt werden. Diese
                  Cookies enthalten keine personenbezogenen Daten und werden nach dem Schließen
                  des Browsers gelöscht.
                </p>
              </section>

              <div className="border-t border-rule" />

              <section aria-labelledby="externe-dienste">
                <h2 id="externe-dienste" className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4">
                  Externe Dienste
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-ink mb-2">YouTube (Google LLC)</h3>
                    <p>
                      Diese Website bindet Videos von YouTube ein. Dabei wird die datenschutzfreundliche
                      Variante <code className="text-xs bg-surface px-1 py-0.5">youtube-nocookie.com</code> verwendet.
                      Beim Laden der Seite werden möglicherweise Verbindungen zu Google-Servern hergestellt.
                      Datenschutzerklärung:{" "}
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
                    <h3 className="font-medium text-ink mb-2">Vercel Analytics</h3>
                    <p>
                      Diese Website verwendet Vercel Analytics für anonymisierte Besucherstatistiken.
                      Vercel Analytics setzt keine Cookies, erfasst keine IP-Adressen und verarbeitet
                      keine personenbezogenen Daten. Die Auswertung erfolgt auf Basis aggregierter,
                      nicht personenbezogener Daten. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
                      (berechtigtes Interesse an der Optimierung des Webauftritts). Datenschutzerklärung:{" "}
                      <a
                        href="https://vercel.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand transition-colors underline underline-offset-2"
                      >
                        vercel.com/legal/privacy-policy
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-ink mb-2">Google Fonts</h3>
                    <p>
                      Diese Website verwendet Google Fonts mit vollständig lokalem Hosting. Die Schriftdateien
                      werden beim Build-Vorgang heruntergeladen und anschließend vom eigenen Server ausgeliefert.
                      Es werden keine Verbindungen zu Google-Servern hergestellt und keine IP-Adressen an Google
                      übermittelt.
                    </p>
                  </div>
                </div>
              </section>

              <div className="border-t border-rule" />

              <section aria-labelledby="rechte">
                <h2 id="rechte" className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4">
                  Ihre Rechte
                </h2>
                <div className="space-y-4">
                  <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex gap-2">
                      <span className="text-brand font-bold mt-0.5" aria-hidden="true">&bull;</span>
                      <span>Recht auf Auskunft (Art. 15 DSGVO)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand font-bold mt-0.5" aria-hidden="true">&bull;</span>
                      <span>Recht auf Berichtigung (Art. 16 DSGVO)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand font-bold mt-0.5" aria-hidden="true">&bull;</span>
                      <span>Recht auf Löschung (Art. 17 DSGVO)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand font-bold mt-0.5" aria-hidden="true">&bull;</span>
                      <span>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand font-bold mt-0.5" aria-hidden="true">&bull;</span>
                      <span>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand font-bold mt-0.5" aria-hidden="true">&bull;</span>
                      <span>Widerspruchsrecht (Art. 21 DSGVO)</span>
                    </li>
                  </ul>
                  <p>
                    Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                    <a href={kontakt()} className="hover:text-brand transition-colors underline underline-offset-2">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <p>
                    Sie haben außerdem das Recht, eine Beschwerde bei der österreichischen Datenschutzbehörde
                    einzureichen:{" "}
                    <a
                      href="https://www.dsb.gv.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors underline underline-offset-2"
                    >
                      dsb.gv.at
                    </a>
                  </p>
                </div>
              </section>

              <div className="border-t border-rule" />

              <section aria-labelledby="speicherdauer">
                <h2 id="speicherdauer" className="font-sans font-semibold text-xs uppercase tracking-widest text-ink-muted mb-4">
                  Speicherdauer
                </h2>
                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen
                  Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                  Kontaktanfragen werden 6 Monate nach abschließender Bearbeitung gelöscht, sofern keine
                  gesetzliche Aufbewahrungspflicht (z.B. UGB § 212: 7 Jahre für Geschäftsbriefe) entgegensteht.
                  Server-Logdaten werden nach 30 Tagen automatisch gelöscht.
                </p>
              </section>

              <div className="border-t border-rule" />

              <p className="text-xs text-ink-muted">
                Stand: Juni 2026. Diese Datenschutzerklärung gilt für die Website{" "}
                <a href="https://www.example.invalid" className="hover:text-brand transition-colors">
                  www.example.invalid
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
