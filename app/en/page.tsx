import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingThemeToggle } from "@/components/FloatingThemeToggle";
import { ui } from "@/lib/i18n";

// Home page in English (Portuguese version: app/page.tsx)
export default function HomeEn() {
  return (
    <main>
      <ScrollProgress />
      <Nav lang="en" altHref="/" />
      <Hero lang="en" />
      <Work lang="en" />
      <About lang="en" />
      <Contact lang="en" />
      <FloatingThemeToggle label={ui.en.themeLabel} />
    </main>
  );
}
