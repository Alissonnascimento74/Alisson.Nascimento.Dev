import Link from "next/link";
import { content } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-paper/70 dark:bg-[#0a0a0c]/70 border-b border-line/50 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between text-sm">
        <Link href="/" className="font-medium tracking-tight">
          {content.profile.name.split(" ")[0]}.
        </Link>
        <div className="flex items-center gap-6 md:gap-8 text-muted dark:text-white/60">
          <Link href="/#work" className="hover:text-ink dark:hover:text-white transition-colors">Trabalho</Link>
          <Link href="/blog" className="hover:text-ink dark:hover:text-white transition-colors">Blog</Link>
          <Link href="/#about" className="hover:text-ink dark:hover:text-white transition-colors hidden sm:inline">Sobre</Link>
          <Link href="/#contact" className="hover:text-ink dark:hover:text-white transition-colors hidden sm:inline">Contato</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
