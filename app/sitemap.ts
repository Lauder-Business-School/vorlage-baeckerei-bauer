import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.example.invalid";

  const alternates = (path: string) => ({
    languages: { "de-AT": `${base}${path}` },
  });

  const blogDetailPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date
      ? new Date(post.date.split(".").reverse().join("-"))
      : new Date("2026-07-19"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: alternates(`/blog/${post.slug}`),
  }));

  return [
    {
      url: base,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "weekly",
      priority: 1,
      alternates: alternates("/"),
    },
    {
      url: `${base}/sortiment`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: alternates("/sortiment"),
    },
    {
      url: `${base}/filialen`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alternates("/filialen"),
    },
    {
      url: `${base}/kaffeehaus`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alternates("/kaffeehaus"),
    },
    {
      url: `${base}/unsere-welt`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: alternates("/unsere-welt"),
    },
    {
      url: `${base}/blog`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: alternates("/blog"),
    },
    {
      url: `${base}/allerheiligenstriezel`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: alternates("/allerheiligenstriezel"),
    },
    {
      url: `${base}/jobs`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: alternates("/jobs"),
    },
    {
      url: `${base}/kontakt`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: alternates("/kontakt"),
    },
    {
      url: `${base}/datenschutz`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("/datenschutz"),
    },
    // /impressum ist noindex — noindex-Seiten gehören nicht in die Sitemap
    ...blogDetailPages,
  ];
}
