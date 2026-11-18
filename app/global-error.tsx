"use client";

import { useEffect } from "react";

// Greift nur, wenn das Root-Layout selbst crasht — muss daher <html>/<body>
// rendern und darf sich nicht auf globals.css verlassen (Inline-Styles).
export default function GlobalError({
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
    <html lang="de-AT">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FBFAF7",
          color: "#1a1a1a",
          fontFamily: "system-ui, sans-serif",
          padding: "1.5rem",
          margin: 0,
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
            Da ist etwas in der Backstube verbrannt.
          </h1>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "2rem", color: "#555" }}>
            Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es
            nochmal oder laden Sie die Seite neu.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.75rem 1.5rem",
              background: "#3070B4",
              color: "#fff",
              border: "none",
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
          >
            Nochmal versuchen
          </button>
        </div>
      </body>
    </html>
  );
}
