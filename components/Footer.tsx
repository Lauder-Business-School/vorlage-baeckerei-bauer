import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/nav";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_EMAIL, telHref } from "@/lib/config";
import { kontakt } from "@/lib/mailto";

const YEAR = new Date().getFullYear();

const socialLinks = [
  {
    href: "https://instagram.com/baeckerei_bauer",
    label: "Instagram",
    ariaLabel: "Bäckerei Bauer auf Instagram (öffnet in neuem Tab)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/BaeckereiBauer/",
    label: "Facebook",
    ariaLabel: "Bäckerei Bauer auf Facebook (öffnet in neuem Tab)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 2H15C13.67 2 12 3.5 12 5V8H9V12H12V22H16V12H19L20 8H16V5C16 4.5 16.5 4 17 4H20V2H18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "https://citiesapps.com/pages/baeckereibauer",
    label: "CitiesApps",
    ariaLabel: "Bäckerei Bauer bei CitiesApps (öffnet in neuem Tab)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = YEAR;

  return (
    <footer className="bg-brand-dark relative overflow-hidden">
      {/* Ghost-Logo */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none" aria-hidden="true">
        <Image
          src="/images/logo/logo-diamond.png"
          alt=""
          width={700}
          height={700}
          className="w-[420px] md:w-[600px] lg:w-[700px] opacity-[0.055] translate-x-1/3"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand column */}
          <div>
            <Image
              src="/images/logo/logo-diamond.png"
              alt="Bäckerei Karl Bauer"
              width={120}
              height={120}
              className="h-20 w-20 md:h-28 md:w-28 mb-6 drop-shadow-md"
            />
            <p className="text-inverse/70 font-serif italic text-sm mb-4 leading-relaxed">
              Handgemacht seit 1960.<br />Aus dem Weinviertel.
            </p>
            <address className="not-italic text-inverse/70 font-sans text-sm leading-relaxed mb-4">
              Baumfeldstraße 9<br />
              2170 Wetzelsdorf<br />
              Niederösterreich
            </address>
            <p className="text-inverse/70 font-sans text-xs">
              Zentrale &amp; Backstube · Unsere Filialen: Mo bis Sa ab 6 Uhr
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-inverse font-sans font-semibold text-xs tracking-widest uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150 block py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-inverse font-sans font-semibold text-xs tracking-widest uppercase mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link href="/impressum" className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/unsere-welt#nachhaltigkeit" className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150">
                  Nachhaltigkeitsbericht
                </Link>
              </li>
              <li>
                <Link href="/filialen" className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150">
                  Filialen &amp; Öffnungszeiten
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social column */}
          <div>
            <h3 className="text-inverse font-sans font-semibold text-xs tracking-widest uppercase mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 mb-6" role="list">
              <li>
                <a href={telHref(CONTACT_PHONE)} className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150 block py-3 min-h-[44px] flex items-center">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={kontakt()} className="text-inverse/70 hover:text-inverse font-sans text-sm transition-colors duration-150 block py-3 min-h-[44px] flex items-center">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>

            <h4 className="text-inverse font-sans font-semibold text-xs tracking-widest uppercase mb-3">
              Social Media
            </h4>
            <ul className="flex flex-wrap gap-3" role="list">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.ariaLabel}
                    className="flex items-center justify-center w-11 h-11 border border-inverse/20 text-inverse/70 hover:text-inverse hover:border-inverse/50 transition-colors duration-150"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>

            {/* Kontakt-CTA */}
            <div className="mt-6 pt-6 border-t border-inverse/10">
              <p className="text-inverse/70 font-sans text-xs leading-relaxed">
                Neuigkeiten und Angebote direkt anfragen:
              </p>
              <a
                href={kontakt()}
                className="inline-flex items-center gap-2 mt-3 px-4 py-3 border border-inverse/40 text-inverse font-sans font-semibold text-xs hover:bg-inverse/10 hover:border-inverse/60 transition-colors min-h-[44px]"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-inverse/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-inverse/70 font-sans text-xs">
            &copy; {year} Bäckerei Karl Bauer GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-inverse/70 font-sans text-xs">
            FN 360703 x &middot; UID: ATU66410911
          </p>
        </div>
      </div>
    </footer>
  );
}
