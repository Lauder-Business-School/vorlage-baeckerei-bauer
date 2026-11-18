import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight } from "@/components/icons";
import { blogPosts } from "@/lib/data";
import WatermarkLogo from "@/components/WatermarkLogo";
import { kontakt } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Blog: Geschichten aus der Backstube",
  description:
    "Geschichten aus unserer Backstube, alte Bräuche aus dem Weinviertel, Wissenswertes über Sauerteig und Neuigkeiten rund um die Bäckerei Karl Bauer seit 1960.",
  alternates: { canonical: "/blog" },
  keywords: [
    "Backstube Weinviertel",
    "Bäckerei Blog",
    "Sauerteig Wissen",
    "Weinviertel Tradition",
    "Brot Rezepte",
    "Allerheiligenstriezel",
    "Striezel Posch'n",
    "Bäcker Handwerk",
    "Fitberry Brot",
    "Nachhaltigkeit Bäckerei",
    "Weinviertler Getreide",
  ],
  openGraph: {
    title: "Blog: Geschichten aus der Backstube | Bäckerei Karl Bauer",
    description:
      "Bräuche, Handwerk, Sauerteig und Weinviertel: Geschichten aus der Bäckerei Karl Bauer seit 1960.",
    url: "https://www.example.invalid/blog",
    // #16: spezifisches Blog-OG-Bild statt generisches Backstube-Foto
    images: [
      {
        url: "/images/blog/stefan-therese-krone.webp",
        width: 1200,
        height: 800,
        alt: "Stefan Bauer und Therese Mayer, Bäckerei Karl Bauer Team, NÖ Krone",
      },
    ],
  },
  // #4: Twitter Card Blog
  twitter: {
    card: "summary_large_image",
    title: "Blog: Geschichten aus der Backstube | Bäckerei Karl Bauer",
    description: "Bräuche, Handwerk, Sauerteig und Weinviertel: Geschichten aus der Bäckerei Karl Bauer seit 1960.",
    images: ["/images/blog/stefan-therese-krone.webp"],
  },
};

const categoryColors: Record<string, string> = {
  Tradition: "bg-brand/10 text-brand",
  Brauchtum: "bg-accent-muted text-brand-dark",
  Produkte: "bg-surface text-ink-secondary",
  Weinviertel: "bg-brand/10 text-brand",
  Jobs: "bg-accent-muted text-brand-dark",
};

export default function BlogPage() {
  const postsWithSlugs = blogPosts.filter((p) => p.slug);
  const [featured, ...rest] = postsWithSlugs;

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-dark via-brand-dark to-brand py-14 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none" aria-hidden="true">
            <Image
              src="/images/logo/logo-diamond.png"
              alt=""
              width={600}
              height={600}
              className="w-[280px] md:w-[440px] opacity-[0.05] translate-x-1/3"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-inverse/40 mb-5 font-sans">
              Backstube &amp; Geschichten
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-inverse mb-5">
              Unser Blog.
            </h1>
            <p className="font-sans text-base md:text-lg text-inverse/60 max-w-xl leading-relaxed">
              Handwerk, Tradition und Weinviertel-Geschichten, frisch aus der Backstube.
            </p>
          </div>
        </section>

        <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Blog" }]} />

        {/* Featured post */}
        <section className="py-16 md:py-24 bg-page relative overflow-hidden" aria-label="Aktueller Beitrag">
          <WatermarkLogo position="top-right" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <article className="group grid md:grid-cols-2 gap-0 overflow-hidden border border-rule">
              <Link href={featured.href} className="block relative h-72 md:h-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 right-4 rotate-[-11deg] drop-shadow-xl pointer-events-none" aria-hidden="true">
                  <Image src="/images/logo/logo-diamond.png" alt="" width={72} height={72} className="w-14 h-14 opacity-90" />
                </div>
              </Link>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`inline-block text-xs font-sans font-semibold uppercase tracking-wider px-2.5 py-1 ${categoryColors[featured.category] ?? "bg-surface text-ink-muted"}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs font-sans text-ink-muted">{featured.readTime} Lesen</span>
                  {featured.date && <span className="text-xs font-sans text-ink-muted">{featured.date}</span>}
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4 leading-snug group-hover:text-brand transition-colors">
                  <Link href={featured.href}>{featured.title}</Link>
                </h2>
                <p className="text-ink-secondary font-sans text-sm leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-2 text-sm font-medium font-sans text-brand hover:text-brand-dark transition-colors border-b border-brand pb-0.5 self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Weiterlesen
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* All posts grid */}
        <section className="pb-24 md:pb-40 bg-page relative overflow-hidden" aria-label="Alle Beiträge">
          <WatermarkLogo position="bottom-left" size="2xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {rest.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={post.href} className="block">
                    <div className="relative h-56 overflow-hidden mb-5 bg-surface">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        loading="lazy"
                        className={`object-cover ${post.imagePosition ?? "object-center"} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-block text-xs font-sans font-semibold uppercase tracking-wider px-2.5 py-1 ${categoryColors[post.category] ?? "bg-surface text-ink-muted"}`}>
                        {post.category}
                      </span>
                      <span className="text-xs font-sans text-ink-muted">{post.readTime} Lesen</span>
                      {post.date && <span className="text-xs font-sans text-ink-muted">{post.date}</span>}
                    </div>
                    <h3 className="font-serif text-xl text-ink group-hover:text-brand transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm font-sans text-ink-secondary leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Direkt ausprobieren */}
        <section className="relative overflow-hidden py-12 md:py-40 bg-surface border-t border-rule" aria-label="Rezeptideen aus dem Blog">
          <WatermarkLogo position="top-left" size="xl" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-ink-muted mb-4 font-sans">
                  Lesen macht Hunger
                </p>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink leading-tight">
                  Drei Ideen zum sofort Ausprobieren.
                </h2>
              </div>
              <p className="text-ink-secondary font-sans leading-relaxed max-w-xs text-sm md:text-right shrink-0">
                Vom Blog direkt auf den Teller.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">01</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Tradition</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Allerheiligenstriezel mit Butter</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Striezel · Stück</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Der Striezel hat eine eigene Geschichte im Weinviertel, nicht nur zum Allerheiligen-Brauch, sondern auch das ganze Jahr. Frisch, leicht warm, mit guter Butter: ein Stück Tradition auf dem Tisch.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Butter", "Tradition", "Allerheiligen"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">02</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Kraftpaket</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">Kraftlackl mit Olivenöl und Salz</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">Kraftlackl · 325 g oder 750 g</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Rustikales Roggenbrot ohne Weizenmehl, nur 226 kcal pro 100 g. Eine Scheibe mit gutem Olivenöl bestreichen, grobem Meersalz bestreuen, mehr braucht es nicht, wenn das Brot stimmt.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Olivenöl", "Meersalz", "ohne Weizenmehl"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative bg-page overflow-hidden p-8 md:p-10 flex flex-col">
                <span className="absolute -bottom-4 -right-2 font-serif text-[11rem] leading-none text-ink/[0.04] select-none pointer-events-none" aria-hidden="true">03</span>
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-5">Handwerk</p>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-2">CRAFT-Karl mit Hummus und Paprika</h3>
                <p className="text-[11px] font-sans uppercase tracking-widest text-ink-muted mb-5">CRAFT-Karl · Laib</p>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-7 flex-1">
                  Dunkles Biermalz-Brot, Hummus drauf, frische Paprikastreifen und ein paar Chiliflocken. Modern, sättigend, überraschend gut. Handwerk neu interpretiert.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Hummus", "Paprika", "Biermalz"].map((tag) => (
                    <span key={tag} className="text-[11px] font-sans bg-surface border border-rule px-3 py-1 text-ink-muted">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-surface border-t border-rule" aria-label="Kein Beitrag verpassen">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl text-ink mb-3">
                Kein Beitrag verpassen.
              </h2>
              <p className="text-ink-secondary font-sans text-sm leading-relaxed mb-6">
                Neue Geschichten aus der Backstube, saisonale Angebote und Weinviertel-Bräuche, direkt ins Postfach.
              </p>
              <a
                href={kontakt("Newsletter Anmeldung", "Ich möchte den Newsletter der Bäckerei Bauer erhalten.")}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-brand text-inverse font-sans font-semibold text-sm hover:bg-brand-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Anmelden
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* BlogPosting-Schemas: data-driven, korrekte URLs und Daten */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPosts.map((post) => ({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              image: `https://www.example.invalid${post.image}`,
              datePublished: post.date ? post.date.split(".").reverse().join("-") : undefined,
              dateModified: post.date ? post.date.split(".").reverse().join("-") : undefined,
              author: { "@type": "Organization", "@id": "https://www.example.invalid/#organization" },
              publisher: { "@id": "https://www.example.invalid/#organization" },
              url: `https://www.example.invalid/blog/${post.slug}`,
              inLanguage: "de-AT",
              isPartOf: { "@type": "Blog", url: "https://www.example.invalid/blog" },
            }))
          ),
        }}
      />
      {/* #10: CollectionPage Schema für Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Blog: Backstube & Geschichten | Bäckerei Karl Bauer",
            url: "https://www.example.invalid/blog",
            description: "Geschichten aus der Backstube, Weinviertel-Bräuche, Handwerk und Neuigkeiten der Bäckerei Karl Bauer.",
            inLanguage: "de-AT",
            publisher: { "@id": "https://www.example.invalid/#organization" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Backstube & Geschichten | Bäckerei Karl Bauer",
            description:
              "Geschichten aus der Backstube, Weinviertel-Bräuche, Handwerk und Neuigkeiten der Bäckerei Karl Bauer.",
            url: "https://www.example.invalid/blog",
            publisher: {
              "@type": "Organization",
              name: "Bäckerei Karl Bauer GmbH",
              url: "https://www.example.invalid",
              logo: {
                "@type": "ImageObject",
                url: "https://www.example.invalid/images/logo/logo-diamond.png",
                width: 512,
                height: 512,
              },
            },
            inLanguage: "de-AT",
          }),
        }}
      />
    </>
  );
}
