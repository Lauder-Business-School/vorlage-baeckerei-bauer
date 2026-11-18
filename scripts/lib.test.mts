// Prüft Mail-Vorlagen und Standortlogik. Lauf: npm test (Node >= 22.18, Typen werden nativ entfernt).
import { test } from "node:test";
import assert from "node:assert/strict";
import { vorbestellung, gutscheinAnfrage, bewerbung, parseMailto } from "../lib/mailto.ts";
import { CONTACT_PHONE } from "../lib/config.ts";
import { standorte, isSundayOpen, schemaOpeningHours, reviewTotal, ratingAverage } from "../lib/standorte.ts";

test("Vorbestellung: Empfänger, Betreff, CRLF, Pflichtfelder", () => {
  const href = vorbestellung("Winzerwecken");
  assert.ok(href.startsWith("mailto:bestellung@example.invalid?subject=Vorbestellung%3A%20Winzerwecken&body="));
  assert.ok(href.includes("%0D%0A"), "Zeilenumbrüche als CRLF");
  assert.ok(!/[\s\n]/.test(href), "keine rohen Leer- oder Steuerzeichen");
  const { body } = parseMailto(href);
  for (const feld of ["Produkt: Winzerwecken", "Menge:", "Gewünschte Abholfiliale:", "Gewünschter Abholtermin:", "Name:", "Telefonnummer für Rückfragen:"]) {
    assert.ok(body.includes(feld), feld);
  }
  assert.ok(!/bestellnummer|bestätigt|verbindlich/i.test(body), "keine Bestellnummer, keine Zusage");
});

test("Umlaute, Sonderzeichen und lange Namen überleben den Rundweg", () => {
  const name = "Dinkel-Vollkornbrot „Großkrut“ & Söhne 1/2 kg + extra lange Bezeichnung für Tests";
  const v = parseMailto(vorbestellung(name, "1 kg"));
  assert.equal(v.subject, `Vorbestellung: ${name}`);
  assert.ok(v.body.includes(`Produkt: ${name}`));
  assert.ok(v.body.includes("Variante/Größe: 1 kg"));
  assert.ok(vorbestellung("Großkrut").includes("Gro%C3%9Fkrut"));
});

test("Gutschein und Bewerbung", () => {
  const g = parseMailto(gutscheinAnfrage());
  assert.equal(g.to, "bestellung@example.invalid");
  assert.equal(g.subject, "Anfrage zu einem Geschenkgutschein");
  for (const feld of ["Gewünschter Gutscheinwert:", "Anzahl:", "Gewünschte Übergabe oder Zustellung:"]) assert.ok(g.body.includes(feld));
  const b = parseMailto(bewerbung("Bewerbung FahrerIn Wetzelsdorf", "FahrerIn, Backstube Wetzelsdorf"));
  assert.equal(b.to, "office@example.invalid");
  assert.equal(b.subject, "Bewerbung FahrerIn Wetzelsdorf");
});

test("Sonntags geöffnet: genau die vier Standorte mit Sonntagszeiten", () => {
  assert.deepEqual(
    standorte.filter(isSundayOpen).map((s) => s.id).sort(),
    ["grosskrut", "hohenau", "lanzendorf", "poysdorf"],
  );
});

test("schema.org-Öffnungszeiten aus der Anzeige", () => {
  assert.deepEqual(schemaOpeningHours("Mo-Fr 06:30-12:00 & 15:00-18:00 · Sa 07:00-12:00"), [
    "Mo-Fr 06:30-12:00",
    "Mo-Fr 15:00-18:00",
    "Sa 07:00-12:00",
  ]);
  assert.deepEqual(schemaOpeningHours("Mo-Sa 06:00-19:00 · So 07:30-19:00"), ["Mo-Sa 06:00-19:00", "Su 07:30-19:00"]);
  assert.deepEqual(schemaOpeningHours("Schulzeiten Mo bis Fr"), []);
  for (const s of standorte) {
    if (s.id !== "mistelbach-schulbuffet") assert.ok(schemaOpeningHours(s.hours).length > 0, `${s.id}: Zeiten nicht lesbar`);
  }
});

test("Standortdaten eindeutig", () => {
  const ids = standorte.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length, "ids eindeutig");
  const maps = standorte.map((s) => s.mapsUrl);
  assert.equal(new Set(maps).size, maps.length, "jeder Standort hat seinen eigenen Maps-Link");
  const phones = standorte.flatMap((s) => (s.phone ? [s.phone] : []));
  assert.equal(new Set(phones).size, phones.length, "keine Nummer an zwei Standorten");
  // In der Kursvorlage sind alle Telefonnummern deaktiviert
  assert.equal(CONTACT_PHONE, "");
  assert.equal(phones.length, 0, "Telefonnummern in der Kursvorlage deaktiviert");
});

test("Bewertungssumme und Schnitt", () => {
  assert.equal(reviewTotal, 947);
  assert.equal(ratingAverage, 4.5);
});
