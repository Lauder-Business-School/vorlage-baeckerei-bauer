import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight } from "@/components/icons";
import { blogPosts } from "@/lib/data";
import { vorbestellung } from "@/lib/mailto";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.example.invalid/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
      type: "article",
      publishedTime: post.date
        ? post.date.split(".").reverse().join("-")
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

const categoryColors: Record<string, string> = {
  Tradition: "bg-brand/10 text-brand",
  Brauchtum: "bg-accent-muted text-brand-dark",
  Produkte: "bg-surface text-ink-secondary",
  Weinviertel: "bg-brand/10 text-brand",
  Jobs: "bg-accent-muted text-brand-dark",
  Team: "bg-surface text-ink-secondary",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);
  const others = blogPosts
    .filter((p) => p.slug !== slug && !related.includes(p))
    .slice(0, 2 - related.length);
  const suggestions = [...related, ...others].slice(0, 2);

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[220px] max-h-[420px] overflow-hidden bg-brand-dark">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className={`object-cover ${post.imagePosition ?? "object-center"} opacity-50`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-12">
            <span className={`inline-block text-xs font-sans font-semibold uppercase tracking-wider px-2.5 py-1 mb-4 ${categoryColors[post.category] ?? "bg-surface text-ink-muted"}`}>
              {post.category}
            </span>
            <h1 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-tight text-inverse max-w-3xl">
              {post.title}
            </h1>
          </div>
        </section>

        <Breadcrumb
          crumbs={[
            { label: "Startseite", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Article body */}
        <article className="py-10 md:py-24 bg-page" aria-label={post.title}>
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-10 text-xs font-sans text-ink-muted">
              {post.date && <span>{post.date}</span>}
              {post.readTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime} Lesen</span>
                </>
              )}
              {post.source && (
                <>
                  <span aria-hidden="true">·</span>
                  {post.sourceUrl ? (
                    <a
                      href={post.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors underline underline-offset-2"
                    >
                      {post.source}
                    </a>
                  ) : (
                    <span>{post.source}</span>
                  )}
                </>
              )}
            </div>

            {/* Body paragraphs */}
            {post.body && post.body.length > 0 ? (
              <div className="space-y-6 font-sans text-base text-ink-secondary leading-relaxed">
                {post.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="font-sans text-ink-secondary leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* CTA */}
            <div className="mt-14 pt-10 border-t border-rule">
              <p className="text-sm font-sans text-ink-secondary mb-4">
                Fragen oder Bestellungen?
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={vorbestellung()}
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Per E-Mail bestellen
                </a>
                <Link
                  href="/filialen"
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] border border-rule text-ink font-sans font-semibold text-sm hover:border-brand hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Filialen finden
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Prev / Next navigation */}
        {(prevPost || nextPost) && (
          <nav className="bg-surface border-t border-rule py-10" aria-label="Vorheriger und nächster Beitrag">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between gap-6">
              {prevPost ? (
                <Link
                  href={prevPost.href}
                  className="group flex items-center gap-3 text-sm font-sans text-ink-secondary hover:text-brand transition-colors py-3 min-h-[44px]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="line-clamp-1">{prevPost.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {nextPost && (
                <Link
                  href={nextPost.href}
                  className="group flex items-center gap-3 text-sm font-sans text-ink-secondary hover:text-brand transition-colors text-right"
                >
                  <span className="line-clamp-1">{nextPost.title}</span>
                  <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </nav>
        )}

        {/* Related posts */}
        {suggestions.length > 0 && (
          <section className="py-10 md:py-24 bg-page border-t border-rule" aria-label="Weitere Beiträge">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
              <h2 className="font-serif text-2xl text-ink mb-10">
                Das könnte dich auch interessieren.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {suggestions.map((related) => (
                  <article key={related.slug} className="group">
                    <Link href={related.href} className="block">
                      <div className="relative h-52 overflow-hidden mb-5 bg-surface">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          loading="lazy"
                          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-block text-xs font-sans font-semibold uppercase tracking-wider px-2.5 py-1 ${categoryColors[related.category] ?? "bg-surface text-ink-muted"}`}>
                          {related.category}
                        </span>
                        {related.readTime && (
                          <span className="text-xs font-sans text-ink-muted">{related.readTime} Lesen</span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl text-ink group-hover:text-brand transition-colors leading-snug">
                        {related.title}
                      </h3>
                    </Link>
                  </article>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium font-sans text-brand hover:text-brand-dark transition-colors border-b border-brand pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Alle Beiträge
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: `https://www.example.invalid${post.image}`,
            datePublished: post.date
              ? post.date.split(".").reverse().join("-")
              : undefined,
            dateModified: post.date
              ? post.date.split(".").reverse().join("-")
              : undefined,
            author: {
              "@type": "Organization",
              "@id": "https://www.example.invalid/#organization",
            },
            publisher: {
              "@id": "https://www.example.invalid/#organization",
            },
            url: `https://www.example.invalid/blog/${post.slug}`,
            inLanguage: "de-AT",
            isPartOf: {
              "@type": "Blog",
              url: "https://www.example.invalid/blog",
            },
          }),
        }}
      />
    </>
  );
}
