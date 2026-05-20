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

          {"screenshots" in project && Array.isArray((project as any).screenshots) && (
            <>
              {/* Desktop — empilhado, abre em leque no hover */}
              <Reveal>
                <div className="relative h-[480px] hidden md:block group">
                  {((project as any).screenshots as string[]).map((src: string, i: number) => {
                    // Posição inicial (empilhado no centro com rotação leve)
                    const stacked = [
                      "left-1/2 -translate-x-1/2 rotate-[-4deg] z-10",
                      "left-1/2 -translate-x-1/2 rotate-[0deg]  z-20",
                      "left-1/2 -translate-x-1/2 rotate-[4deg]  z-30",
                    ];
                    // Posição no hover (em leque, sem rotação)
                    const fanned = [
                      "group-hover:!left-0      group-hover:!translate-x-0 group-hover:!rotate-[-6deg]",
                      "group-hover:!left-1/2    group-hover:!-translate-x-1/2 group-hover:!rotate-0",
                      "group-hover:!left-full   group-hover:!-translate-x-full group-hover:!rotate-[6deg]",
                    ];
                    return (
                      <div
                        key={src}
                        className={`absolute top-4 ${stacked[i]} ${fanned[i]} transition-all duration-700 ease-out`}
                      >
                        <Image
                          src={src}
                          alt={`Screenshot ${i + 1}`}
                          width={220}
                          height={440}
                          className="rounded-[2rem] shadow-2xl border border-white/10"
                        />
                      </div>
                    );
                  })}
                </div>
              </Reveal>

              {/* Mobile — coluna centralizada, uma embaixo da outra */}
              <div className="flex flex-col items-center gap-8 md:hidden">
                {((project as any).screenshots as string[]).map((src: string, i: number) => (
                  <Reveal key={src} delay={i * 150}>
                    <Image
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      width={240}
                      height={480}
                      className="rounded-[2rem] shadow-2xl border border-white/10"
                    />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Demo video — autoplay, mute, loop infinito. Aparece só se o projeto tem 'demo'. */}
        {"demo" in project && (project as any).demo && (
          <Reveal>
            <section className="mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6 text-center">
                Em ação
              </p>
              <div className="flex justify-center">
                <video
                  src={(project as any).demo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${project.name} em execução`}
                  className="w-[280px] md:w-[320px] rounded-[2rem] shadow-2xl border border-white/10"
                />
              </div>
            </section>
          </Reveal>
        )}

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
