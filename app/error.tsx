"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-page font-sans p-6">
      <div className="max-w-md text-center">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4">
          Etwas ist schiefgelaufen
        </p>
        <h1 className="text-3xl font-serif text-ink mb-4">
          Da ist etwas in der Backstube verbrannt.
        </h1>
        <p className="text-ink-secondary text-sm leading-relaxed mb-8">
          Ein unerwarteter Fehler ist aufgetreten. Das tut uns leid. Du kannst
          es nochmal versuchen oder zurück zur Startseite gehen.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-brand text-inverse text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Nochmal versuchen
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-ink/20 text-ink text-sm hover:border-ink/50 transition-colors"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
