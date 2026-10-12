import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingThemeToggle } from "@/components/FloatingThemeToggle";
import { ui } from "@/lib/i18n";
import { PersonJsonLd } from "@/components/PersonJsonLd";

// Página inicial em português (a versão em inglês está em app/en/page.tsx)
export default function Home() {
  return (
    <main>
      <PersonJsonLd lang="pt" />
      <ScrollProgress />
      <Nav lang="pt" altHref="/en" />
      <Hero lang="pt" />
      <Work lang="pt" />
      <About lang="pt" />
      <Contact lang="pt" />
      <FloatingThemeToggle label={ui.pt.themeLabel} />
    </main>
  );
}
