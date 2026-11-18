"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks as links } from "@/lib/nav";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, telHref } from "@/lib/config";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Fokus auf ersten Menüpunkt beim Öffnen des Mobile-Menüs
  useEffect(() => {
    if (open) menuRef.current?.querySelector<HTMLElement>("a")?.focus();
  }, [open]);

  // Body scroll lock + inert on main content when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    if (main) {
      if (open) main.setAttribute("inert", "");
      else main.removeAttribute("inert");
    }
    if (footer) {
      if (open) footer.setAttribute("inert", "");
      else footer.removeAttribute("inert");
    }
    return () => {
      document.body.style.overflow = "";
      document.getElementById("main-content")?.removeAttribute("inert");
      document.querySelector("footer")?.removeAttribute("inert");
    };
  }, [open]);

  // Close mobile menu when user scrolls 100px (accidental swipe prevention)
  useEffect(() => {
    if (!open) return;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <>
      {/* #1: Skip-to-content link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Zum Inhalt springen
      </a>

      <nav
        className="sticky top-0 z-50 bg-brand/95 backdrop-blur-md"
        aria-label="Hauptnavigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-[72px] flex items-center justify-between">
          <Link href="/" aria-label="Bäckerei Karl Bauer, Startseite" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-diamond.png"
              alt="Bäckerei Karl Bauer"
              width={52}
              height={52}
              className="h-12 w-12 drop-shadow-sm"
              priority
            />
            <span className="hidden lg:block font-serif text-inverse text-lg leading-tight">
              Bäckerei<br />
              <span className="text-inverse font-bold">Karl Bauer</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-7" role="list">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  {/* #2: Visible active state, underline indicator */}
                  <Link
                    href={link.href}
                    className={`font-sans text-sm transition-colors duration-150 pb-0.5 ${
                      active
                        ? "text-inverse font-semibold border-b-2 border-accent"
                        : "text-inverse/70 hover:text-inverse font-medium border-b-2 border-transparent hover:border-accent/60"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* #4: Phone number + CTA in desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={telHref(CONTACT_PHONE)}
              className="text-inverse/50 hover:text-inverse font-sans text-xs transition-colors duration-150"
              aria-label={`Anrufen: ${CONTACT_PHONE_DISPLAY}`}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
            <Link
              href="/sortiment"
              className="px-4 py-2.5 bg-accent text-inverse font-sans font-semibold text-xs hover:bg-accent/85 transition-colors duration-150 whitespace-nowrap"
            >
              Vorbestellen
            </Link>
          </div>

          <button
            ref={toggleRef}
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-inverse/50 rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 3L19 19M19 3L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        <div
          ref={menuRef}
          id="mobile-menu"
          hidden={!open}
          className="md:hidden bg-brand-dark border-t border-inverse/10 relative overflow-hidden"
        >
          {/* Logo als großes Hintergrund-Element im Mobile-Menu */}
          <div className="absolute bottom-0 right-0 pointer-events-none" aria-hidden="true">
            <Image
              src="/images/logo/logo-diamond.png"
              alt=""
              width={180}
              height={180}
              className="h-40 w-40 opacity-[0.12] translate-x-10 translate-y-10"
            />
          </div>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-4 min-h-[44px] flex items-center font-sans text-sm border-b border-inverse/10 transition-colors ${
                  active
                    ? "text-inverse font-semibold bg-accent/10"
                    : "text-inverse/70 hover:text-inverse hover:bg-inverse/5"
                }`}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Mobile bottom CTAs */}
          <div className="px-6 py-4 flex items-center gap-3 border-t border-inverse/10">
            <a
              href={telHref(CONTACT_PHONE)}
              className="flex items-center gap-2 flex-1 font-sans text-sm text-inverse/60 hover:text-inverse transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Bäckerei Bauer anrufen"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 2.5C2 2.5 3.5 1 4.5 1C5 1.5 5.5 1.5 6 2.5L7 4.5C7.5 5.5 7 6 6.5 6.5C7 7.5 8.5 9 9.5 9.5C10 9 10.5 8.5 11.5 9L13 10C14 10.5 14 11 14 11.5C14 12.5 12.5 14 12.5 14C5.5 14 0 8.5 0 1.5C0 1.5 1.5 0 2.5 0C3 0 3.5 0 4 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {CONTACT_PHONE_DISPLAY}
            </a>
            <Link
              href="/sortiment"
              className="flex-none px-4 py-3 min-h-[44px] bg-accent text-inverse font-sans font-semibold text-xs hover:bg-accent/85 transition-colors flex items-center"
              onClick={() => setOpen(false)}
            >
              Vorbestellen
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
