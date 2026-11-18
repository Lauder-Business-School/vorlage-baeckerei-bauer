"use client";

import { useState } from "react";
import { kontakt } from "@/lib/mailto";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, ORDER_EMAIL, telHref } from "@/lib/config";

const faqs = [
  {
    q: "Kann ich Brot und Gebäck vorbestellen?",
    a: 'Ja, du kannst bei jedem Produkt auf "Vorbestellen" klicken oder direkt in deiner Filiale reservieren. Für größere Mengen, Feste oder saisonale Spezialitäten empfehlen wir, rechtzeitig anzurufen oder eine E-Mail zu schicken.',
  },
  {
    q: "Wie lange ist euer Brot haltbar?",
    a: "Unsere Sauerteigbrote halten sich bei Raumtemperatur 4 bis 6 Tage. Angeschnitten bitte mit der Schnittfläche nach unten auf einem Holzbrett lagern. Eingefroren sind die meisten Brote bis zu 3 Monate haltbar.",
  },
  {
    q: "Wann gibt es Buchteln?",
    a: "Buchteln gibt es jeden Mittwoch frisch. Das ist unser Versprechen. Mittwoch riecht in der Filiale immer nach warmen Buchteln. Am besten früh da sein, sie sind schnell weg.",
  },
  {
    q: "Habt ihr glutenfreie Produkte?",
    a: "Einige unserer Produkte sind glutenreduziert, z.B. das LowCarb Brot. Da unsere Backstube Gluten verwendet, können wir keine 100 % glutenfreie Produktion garantieren. Bei Unverträglichkeiten bitte direkt in der Filiale nachfragen.",
  },
  {
    q: "Wo werden eure Brote gebacken?",
    a: "Alle Brote und Backwaren werden in unserer Produktionsbäckerei in Wetzelsdorf gebacken und täglich frisch in die 13 Filialen geliefert.",
  },
  {
    q: "Bietet ihr auch Catering oder Großbestellungen an?",
    a: `Für Feste, Firmenveranstaltungen und Großbestellungen nehmt ihr am besten direkt Kontakt auf: ${ORDER_EMAIL} oder ${CONTACT_PHONE_DISPLAY}. Wir finden eine gute Lösung.`,
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section className="py-14 md:py-44 bg-page border-t border-rule" aria-label="Häufige Fragen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
            Häufige Fragen
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight mb-14 md:mb-16">
            Was möchtest du wissen?
          </h2>

          <dl className="divide-y divide-brand/10">
            {faqs.map((faq, i) => (
              <div key={i}>
                <dt>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-sans font-medium text-ink text-base pr-6 group-hover:text-brand transition-colors">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-ink-muted group-hover:text-brand transition-colors">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                      >
                        <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-200 ${open === i ? "max-h-[40rem] pb-5" : "max-h-0"}`}
                >
                  <p className="text-ink-secondary font-sans text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 pt-8 border-t border-brand/10">
            <p className="text-ink-muted font-sans text-sm">
              Noch eine Frage?{" "}
              <a
                href={kontakt()}
                className="text-brand hover:text-brand-dark underline underline-offset-2 transition-colors"
              >
                Schreib uns
              </a>{" "}
              oder ruf einfach an:{" "}
              <a
                href={telHref(CONTACT_PHONE)}
                className="text-brand hover:text-brand-dark underline underline-offset-2 transition-colors"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
