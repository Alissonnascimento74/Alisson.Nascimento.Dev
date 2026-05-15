import Link from "next/link";
import type { Metadata } from "next";
import { content } from "@/data/content";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre desenvolvimento iOS, Swift e design.",
};

export default function BlogIndex() {
  // Ordena por data, mais recente primeiro
  const posts = [...content.posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main>
      <Nav />
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-24">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6">Escrevendo</p>
          <h1 className="font-display font-light text-5xl md:text-7xl leading-[1.05] tracking-tight mb-16">
            Blog
          </h1>
        </Reveal>

        <div className="divide-y divide-line/60 dark:divide-white/10 max-w-3xl">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link href={`/blog/${p.slug}`} className="block py-10 group">
                <div className="text-sm text-muted dark:text-white/50 mb-3">
                  {formatDate(p.date)} · {p.readingTime}
                </div>
                <h2 className="font-display text-2xl md:text-3xl mb-3 transition-transform duration-500 group-hover:translate-x-1">
                  {p.title}
                </h2>
                <p className="text-muted dark:text-white/60 leading-relaxed max-w-xl">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric",
  });
}
