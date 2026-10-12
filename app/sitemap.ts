import type { MetadataRoute } from "next";
import { content } from "@/data/content";
import { paths } from "@/lib/i18n";

// /sitemap.xml — lista de páginas pro Google, com a versão em inglês de cada uma.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = content.pt.profile.siteUrl;
  const pair = (pt: string, en: string) => ({ languages: { "pt-BR": base + pt, en: base + en } });
  return [
    { url: base + "/", alternates: pair("/", "/en"), priority: 1 },
    { url: base + "/en", alternates: pair("/", "/en"), priority: 0.9 },
    ...content.pt.projects.flatMap((p) => [
      { url: base + paths.pt.project(p.slug), alternates: pair(paths.pt.project(p.slug), paths.en.project(p.slug)) },
      { url: base + paths.en.project(p.slug), alternates: pair(paths.pt.project(p.slug), paths.en.project(p.slug)) },
    ]),
    { url: base + "/blog" },
    ...content.posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
