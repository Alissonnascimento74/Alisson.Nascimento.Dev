import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { content } from "@/data/content";
import { markdownToHtml } from "@/lib/markdown";
import { Nav } from "@/components/Nav";

type Params = { slug: string };

// Gera estaticamente uma página HTML pra cada projeto (super rápido)
export function generateStaticParams(): Params[] {
  return content.projects.map((p) => ({ slug: p.slug }));
}

// Metadata por projeto (cada página tem seu próprio título/preview)
export function generateMetadata({ params }: { params: Params }): Metadata {
  const p = content.projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.tagline,
    openGraph: { title: p.name, description: p.tagline },
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = content.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const html = markdownToHtml(project.content);

  return (
    <main>
      <Nav />
      <article className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-24">
        <Link href="/#work" className="text-sm text-muted dark:text-white/50 link-underline">
          ← Voltar
        </Link>

        <header className="mt-10 mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6">
            {project.year} · Projeto
          </p>
          <h1 className="font-display font-light text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            {project.name}
          </h1>
          <p className="text-xl md:text-2xl text-ink/80 dark:text-white/80 font-display">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-line dark:border-white/20 text-muted dark:text-white/60">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            {project.appStore && <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="link-underline">App Store ↗</a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-underline">GitHub ↗</a>}
            {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" className="link-underline">Website ↗</a>}
          </div>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
