"use client";

import { useEffect } from "react";

/** Springt nach dem Laden zur Stelle, damit Besucher aus Facebook nicht suchen müssen. */
export default function ScrollToJob({ id }: { id: string }) {
  useEffect(() => {
    // instant: html hat scroll-behavior: smooth, die Animation bricht beim Laden ab
    document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, [id]);
  return null;
}
