import Link from "next/link";
import { content } from "@/data/content";
import { paths, ui, type Lang } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";

// Menu do topo. `altHref` = a mesma página no outro idioma (botão PT/EN).
export function Nav({ lang = "pt", altHref }: { lang?: Lang; altHref?: string }) {
  const t = ui[lang];
  const home = paths[lang].home;
  const other: Lang = lang === "pt" ? "en" : "pt";
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-paper/70 dark:bg-[#0a0a0c]/70 border-b border-line/50 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between text-sm">
        <Link href={home} className="font-medium tracking-tight">
          {content.pt.profile.name.split(" ")[0]}.
        </Link>
        <div className="flex items-center gap-5 md:gap-8 text-muted dark:text-white/60">
          <Link href={`${home}#work`} className="hover:text-ink dark:hover:text-white transition-colors">{t.nav.work}</Link>
          <Link href="/blog" className="hover:text-ink dark:hover:text-white transition-colors">{t.nav.blog}</Link>
          <Link href={`${home}#about`} className="hover:text-ink dark:hover:text-white transition-colors hidden sm:inline">{t.nav.about}</Link>
          <Link href={`${home}#contact`} className="hover:text-ink dark:hover:text-white transition-colors hidden sm:inline">{t.nav.contact}</Link>
          <Link
            href={altHref ?? paths[other].home}
            hrefLang={other === "pt" ? "pt-BR" : "en"}
            aria-label={`${t.switchTo} — ${t.switchLabel}`}
            className="text-xs font-medium tracking-wider px-2.5 py-1 rounded-full border border-line/60 dark:border-white/15 hover:text-ink dark:hover:text-white transition-colors"
          >
            {t.switchTo}
          </Link>
          <ThemeToggle label={t.themeLabel} />
        </div>
      </div>
    </nav>
  );
}
