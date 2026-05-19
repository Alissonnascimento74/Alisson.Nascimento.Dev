import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { content } from "@/data/content";
import { markdownToHtml } from "@/lib/markdown";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

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

        {/* Header: texto à esquerda, mockup à direita */}
        <div className="mt-10 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Coluna esquerda — info */}
          <header>
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

          {/* Coluna direita — mockup empilhado com animação no scroll */}
          {"screenshots" in project && Array.isArray((project as any).screenshots) && (
            <div className="relative h-[480px] hidden md:block">
              {((project as any).screenshots as string[]).map((src: string, i: number) => {
                const rotations = ["-rotate-3", "rotate-2", "-rotate-1"];
                const tops     = ["top-0",     "top-8",    "top-16"];
                const rights   = ["right-0",   "right-6",  "right-12"];
                const zIndexes = ["z-30",      "z-20",     "z-10"];
                return (
                  <Reveal key={src} delay={i * 150}>
                    <div className={`absolute ${tops[i]} ${rights[i]} ${zIndexes[i]} ${rotations[i]} transition-transform duration-300 hover:scale-105 hover:z-40`}>
                      <Image
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        width={220}
                        height={440}
                        className="rounded-[2rem] shadow-2xl border border-white/10"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
