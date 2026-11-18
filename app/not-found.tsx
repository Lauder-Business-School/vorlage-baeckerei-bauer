import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// #25: 404-Seite mit noindex (Google soll sie nicht indexieren)
export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: "Diese Seite existiert nicht. Zurück zur Startseite der Bäckerei Karl Bauer.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1 flex flex-col">
        <section className="flex-1 flex items-center bg-page py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/images/logo/logo-diamond.png"
                  alt="Bäckerei Karl Bauer"
                  width={64}
                  height={64}
                  className="h-16 w-16 opacity-40"
                />
                <span className="font-serif text-[6rem] leading-none text-brand/10 font-bold select-none">
                  404
                </span>
              </div>
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                Seite nicht gefunden
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
                Hier gibt&apos;s leider nichts zu naschen.
              </h1>
              <p className="text-ink-secondary font-sans leading-relaxed mb-10">
                Diese Seite existiert nicht (mehr). Vielleicht wurde sie
                umgezogen oder der Link ist veraltet. Zurück zur Startseite
                Dort gibt&apos;s frisches Brot.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Zur Startseite
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/sortiment"
                  className="inline-flex items-center px-7 py-3.5 border border-rule text-ink font-sans text-sm hover:border-brand hover:text-brand transition-colors"
                >
                  Sortiment ansehen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
