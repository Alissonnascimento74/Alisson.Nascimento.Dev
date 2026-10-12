import type { Metadata } from "next";
import { content } from "@/data/content";
import { HtmlLang } from "@/components/HtmlLang";

const { profile } = content.en;
const title = `${profile.name} — ${profile.role}`;

// Tudo dentro de /en: títulos e prévia de link em inglês, conteúdo marcado como inglês.
export const metadata: Metadata = {
  // absolute: não herda o "%s · Alisson Nascimento" do layout principal (senão o nome sai repetido)
  title: { absolute: title, template: `%s · ${profile.name}` },
  description: profile.headline,
  alternates: { canonical: "/en", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: {
    title,
    description: profile.headline,
    url: "/en",
    siteName: profile.name,
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description: profile.headline },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <HtmlLang lang="en" />
      {children}
    </div>
  );
}
