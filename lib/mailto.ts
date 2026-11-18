// Vorausgefüllte E-Mails: einzige Stelle, an der mailto-Links entstehen.
// Die Kundin ergänzt die offenen Felder und schickt selbst ab. Keine Bestellnummer,
// keine Zusage, dass eine Bestellung angenommen ist; die Bäckerei bestätigt per E-Mail.
import { CONTACT_EMAIL, ORDER_EMAIL } from "./config.ts";

type Mail = { to: string; subject: string; body?: string };
export type MailVorlage = Required<Mail>;

const SCHEMA = "mailto:";
export const isMailto = (href: string) => href.startsWith(SCHEMA);

/** Gegenstück zu mailto(): liest Empfänger, Betreff und Text aus einem Link (für den Kopier-Fallback). */
export const parseMailto = (href: string): MailVorlage => {
  const [adresse, query = ""] = href.slice(SCHEMA.length).split("?");
  const p = new URLSearchParams(query.replace(/\+/g, "%2B"));
  return {
    to: decodeURIComponent(adresse),
    subject: p.get("subject") ?? "",
    body: (p.get("body") ?? "").replace(/\r\n/g, "\n"),
  };
};

// RFC 6068: Zeilenumbrüche im body als CRLF, alles andere UTF-8-prozentkodiert.
const enc = (s: string) => encodeURIComponent(s.replace(/\r?\n/g, "\r\n"));

export const mailto = ({ to, subject, body }: Mail) =>
  `${SCHEMA}${to}?subject=${enc(subject)}${body ? `&body=${enc(body)}` : ""}`;

const text = (...zeilen: string[]) => zeilen.join("\n");
const GRUSS = ["", "Vielen Dank!"];

export const vorbestellung = (produkt?: string, variante?: string) =>
  mailto({
    to: ORDER_EMAIL,
    subject: produkt ? `Vorbestellung: ${produkt}` : "Vorbestellung",
    body: text(
      "Guten Tag,",
      "",
      produkt ? "ich möchte gerne folgendes Produkt vorbestellen:" : "ich möchte gerne Folgendes vorbestellen:",
      "",
      `Produkt: ${produkt ?? ""}`,
      ...(variante !== undefined ? [`Variante/Größe: ${variante}`] : []),
      "Menge: ",
      "Gewünschte Abholfiliale: ",
      "Gewünschter Abholtermin: ",
      "Name: ",
      "Telefonnummer für Rückfragen: ",
      ...GRUSS,
    ),
  });

export const groessereBestellung = () =>
  mailto({
    to: ORDER_EMAIL,
    subject: "Anfrage: größere Bestellung",
    body: text(
      "Guten Tag,",
      "",
      "ich möchte eine größere Bestellung anfragen:",
      "",
      "Anlass: ",
      "Datum: ",
      "Produkte und Mengen: ",
      "Gewünschte Abholfiliale: ",
      "Name: ",
      "Telefonnummer für Rückfragen: ",
      ...GRUSS,
    ),
  });

export const gutscheinAnfrage = () =>
  mailto({
    to: ORDER_EMAIL,
    subject: "Anfrage zu einem Geschenkgutschein",
    body: text(
      "Guten Tag,",
      "",
      "ich interessiere mich für einen Geschenkgutschein der Bäckerei Bauer.",
      "",
      "Gewünschter Gutscheinwert: ",
      "Anzahl: ",
      "Gewünschte Übergabe oder Zustellung: ",
      "Name: ",
      "Telefonnummer für Rückfragen: ",
      ...GRUSS,
    ),
  });

export const bewerbung = (betreff: string, stelle?: string) =>
  mailto({
    to: CONTACT_EMAIL,
    subject: betreff,
    body: text(
      "Guten Tag,",
      "",
      stelle ? `ich bewerbe mich für die Stelle: ${stelle}.` : "ich möchte mich bei der Bäckerei Bauer bewerben.",
      "",
      "Kurz zu mir: ",
      "Ab wann ich anfangen kann: ",
      "Telefonnummer für Rückfragen: ",
      "",
      "Einen Lebenslauf hänge ich an, falls vorhanden.",
      "",
      "Viele Grüße",
    ),
  });

export const reservierung = (ort?: string) =>
  mailto({
    to: CONTACT_EMAIL,
    subject: ort ? `Tischreservierung Kaffeehaus ${ort}` : "Tischreservierung Kaffeehaus",
    body: text(
      "Guten Tag,",
      "",
      "ich möchte gerne einen Tisch reservieren:",
      "",
      `Kaffeehaus: ${ort ?? ""}`,
      "Datum und Uhrzeit: ",
      "Anzahl Personen: ",
      "Name: ",
      "Telefonnummer für Rückfragen: ",
      ...GRUSS,
    ),
  });

export const kontakt = (subject?: string, body?: string) =>
  subject ? mailto({ to: CONTACT_EMAIL, subject, body }) : `${SCHEMA}${CONTACT_EMAIL}`;
