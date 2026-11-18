import type { Metadata } from "next";
import JobsPage from "../page";
import ScrollToJob from "./ScrollToJob";

// Eigene URL nur für die Facebook-Vorschau der FahrerIn-Stelle: Facebook ignoriert #anker
// und zeigt für /jobs immer dasselbe Bild. Inhalt = Jobseite, springt zur Stelle.
const TITLE = "FahrerIn gesucht, dringend ab sofort | Bäckerei Karl Bauer";
const DESCRIPTION =
  "Backstube Wetzelsdorf: 15 bis 20 Std./Woche, 5-Tage-Woche, Start 3:30 Uhr früh. Führerschein B, Ortskenntnis im Weinviertel. Kollektivvertrag inklusive Nachtzuschlägen.";
const IMAGE = {
  url: "/images/jobs/fahrerin-facebook.jpg",
  width: 1200,
  height: 630,
  alt: "FahrerIn für die Nacht gesucht, Bäckerei Karl Bauer, Backstube Wetzelsdorf",
};

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/jobs/fahrerin" },
  // Gleicher Inhalt wie /jobs: nicht doppelt indexieren
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.example.invalid/jobs/fahrerin",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE.url],
  },
};

export default function FahrerinPage() {
  return (
    <>
      <JobsPage />
      <ScrollToJob id="fahrerin-wetzelsdorf" />
    </>
  );
}
