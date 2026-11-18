// Prüft die gebauten Seiten (.next/server/app/*.html). Vorher: npm run build.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { standorte } from "../lib/standorte.ts";
import { telHref } from "../lib/config.ts";

const APP = join(import.meta.dirname, "..", ".next", "server", "app");
const gebaut = existsSync(join(APP, "filialen.html"));
const seite = (name: string) => readFileSync(join(APP, `${name}.html`), "utf8");
const htmlDateien = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? htmlDateien(join(dir, e.name)) : e.name.endsWith(".html") ? [join(dir, e.name)] : [],
  );

test("Build-Ausgabe vorhanden", { skip: !gebaut && "kein Build gefunden, erst npm run build" }, () => {
  assert.ok(gebaut);
});

test("jedes JSON-LD ist gültiges JSON", { skip: !gebaut }, () => {
  let n = 0;
  for (const datei of htmlDateien(APP)) {
    for (const m of readFileSync(datei, "utf8").matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => JSON.parse(m[1]), datei);
      n++;
    }
  }
  assert.ok(n > 10, `nur ${n} JSON-LD-Blöcke gefunden`);
});

test("Startseite ohne Preise im JSON-LD", { skip: !gebaut }, () => {
  assert.equal((seite("index").match(/"price"/g) ?? []).length, 0);
});

test("Filialen: Sonntagsfilter und eigene Telefonnummern je Karte", { skip: !gebaut }, () => {
  const html = seite("filialen");
  assert.ok(html.includes("Sonntags geöffnet"));
  assert.ok(html.includes("Ort oder Filiale suchen"));
  for (const s of standorte) {
    const start = html.indexOf(`<li id="${s.id}"`);
    assert.ok(start > 0, `Karte ${s.id} fehlt`);
    const karte = html.slice(start, html.indexOf("</li>", start));
    const tels = [...karte.matchAll(/href="(tel:[^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(tels, s.phone ? [telHref(s.phone)] : [], `${s.id}: Telefon`);
    assert.ok(karte.includes(s.mapsUrl.replace(/&/g, "&amp;")), `${s.id}: Maps-Link`);
  }
});

test("Sortiment: Gutschein anfragen per E-Mail", { skip: !gebaut }, () => {
  const html = seite("sortiment");
  assert.ok(html.includes("Gutschein anfragen"));
  assert.ok(html.includes("subject=Anfrage%20zu%20einem%20Geschenkgutschein"));
});

test("alle mailto-Links sauber kodiert", { skip: !gebaut }, () => {
  for (const datei of htmlDateien(APP)) {
    for (const m of readFileSync(datei, "utf8").matchAll(/href="(mailto:[^"]*)"/g)) {
      assert.ok(!/\s/.test(m[1]), `${datei}: ${m[1].slice(0, 80)}`);
    }
  }
});
