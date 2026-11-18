import type { Metadata } from "next";
import JobsPage from "../page";
import ScrollToJob from "../fahrerin/ScrollToJob";

// Eigene URL nur für die Facebook-Vorschau der Feinkost-Stelle: Facebook ignoriert #anker
// und zeigt für /jobs immer dasselbe Bild. Inhalt = Jobseite, springt zur Stelle.
const TITLE = "FeinkostmitarbeiterIn in Ladendorf gesucht | Bäckerei Karl Bauer";
const DESCRIPTION =
  "ADEG Bauer Ladendorf: 30 bis 35 Std./Woche an der Feinkosttheke. Wurst und Käse aufschneiden, Gebäck belegen, Kund:innen beraten. Ab sofort, mit Einschulung.";
const IMAGE = {
  url: "/images/jobs/feinkost-ladendorf-facebook.jpg",
  width: 1200,
  height: 630,
  alt: "FeinkostmitarbeiterIn gesucht, ADEG Bauer Ladendorf, Bäckerei Karl Bauer",
};

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/jobs/feinkost-ladendorf" },
  // Gleicher Inhalt wie /jobs: nicht doppelt indexieren
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.example.invalid/jobs/feinkost-ladendorf",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE.url],
  },
};

export default function FeinkostLadendorfPage() {
  return (
    <>
      <JobsPage />
      <ScrollToJob id="feinkost-ladendorf" />
    </>
  );
}
