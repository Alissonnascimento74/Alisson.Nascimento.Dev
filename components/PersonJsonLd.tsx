import { getContent } from "@/data/content";
import { paths, type Lang } from "@/lib/i18n";

// Dados estruturados (schema.org/Person): ajudam o Google a montar o "cartão" com nome, cargo e links.
export function PersonJsonLd({ lang }: { lang: Lang }) {
  const { profile, socials } = getContent(lang);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: profile.siteUrl + (lang === "en" ? paths.en.home : ""),
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Guarulhos", addressRegion: "SP", addressCountry: "BR" },
    knowsAbout: ["Swift", "SwiftUI", "iOS", "Xcode"],
    worksFor: { "@type": "Organization", name: "AN Services", url: "https://anservices.vercel.app" },
    sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  };
  // "<" escapado: nenhum texto do conteúdo consegue fechar a tag <script>
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
