"use client";

import { useEffect, useState } from "react";

const categories = [
  { id: "brot", label: "Brote" },
  { id: "gebaeck", label: "Gebäck" },
  { id: "leckereien", label: "Leckereien" },
  { id: "knuspertraum", label: "Knuspertraum" },
];

export default function SortimentCategoryNav() {
  const [active, setActive] = useState<string>("brot");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sticky top-[72px] z-40 bg-page border-b border-rule shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <nav className="flex gap-0 overflow-x-auto scrollbar-none" aria-label="Produktkategorien">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`flex-none py-4 px-5 text-sm font-sans font-medium border-b-2 transition-colors duration-150 whitespace-nowrap ${
                active === cat.id
                  ? "text-ink border-brand"
                  : "text-ink-muted hover:text-ink border-transparent hover:border-brand/40"
              }`}
              aria-current={active === cat.id ? "true" : undefined}
            >
              {cat.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
