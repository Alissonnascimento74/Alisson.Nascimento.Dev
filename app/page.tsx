import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingThemeToggle } from "@/components/FloatingThemeToggle";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <FloatingThemeToggle />
    </main>
  );
}
