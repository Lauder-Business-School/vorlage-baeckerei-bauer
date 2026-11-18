import Link from "next/link";

type Crumb = { label: string; href?: string };

const BASE = "https://www.example.invalid";

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: crumb.href ? `${BASE}${crumb.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-rule bg-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ol
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center gap-2 text-xs font-sans text-ink-muted min-w-0"
        role="list"
      >
        {crumbs.map((crumb, i) => (
          <li key={i} className={`flex items-center gap-2 ${!crumb.href ? "min-w-0 overflow-hidden" : "shrink-0"}`}>
            {i > 0 && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="shrink-0">
                <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-ink transition-colors whitespace-nowrap">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-ink font-medium truncate block" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
