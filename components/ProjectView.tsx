import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/content";
import { markdownToHtml } from "@/lib/markdown";
import { paths, ui, type Lang } from "@/lib/i18n";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";

// Página de um projeto (usada em /projetos/[slug] e /en/projects/[slug]).
// `altHref` = a mesma página no outro idioma.
// Proporção dos prints de iPhone (1206 × 2622 px). Altura calculada pra imagem não sair esticada.
const shotHeight = (width: number) => Math.round((width * 2622) / 1206);

export function ProjectView({ project, lang, altHref }: { project: Project; lang: Lang; altHref: string }) {
  const t = ui[lang];
  const html = markdownToHtml(project.content);

  return (
    <main>
      <Nav lang={lang} altHref={altHref} />
      <article className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-24">
        <Link href={`${paths[lang].home}#work`} className="text-sm text-muted dark:text-white/50 link-underline">
          {t.back}
        </Link>

        {/* Header: texto à esquerda, mockup à direita */}
        <div className="mt-10 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Coluna esquerda — info */}
          <header>
            <p className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6">
              {project.year} · {t.projectKicker}
            </p>
            <h1 className="font-display font-light text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-ink/80 dark:text-white/80 font-display">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-line dark:border-white/20 text-muted dark:text-white/60">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              {project.appStore && <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="link-underline">App Store ↗</a>}
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-underline">GitHub ↗</a>}
              {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" className="link-underline">Website ↗</a>}
            </div>
          </header>

          {project.screenshots.length > 0 && (
            <>
              {/* Desktop — empilhado, abre em leque no hover */}
              <Reveal>
                <div className="relative h-[520px] hidden md:block group">
                  {project.screenshots.map((src, i) => {
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
                          alt={`${t.screenshot} ${i + 1} — ${project.name}`}
                          width={220}
                          height={shotHeight(220)}
                          className="rounded-[2rem] shadow-2xl border border-white/10"
                        />
                      </div>
                    );
                  })}
                </div>
              </Reveal>

              {/* Mobile — coluna centralizada, uma embaixo da outra */}
              <div className="flex flex-col items-center gap-8 md:hidden">
                {project.screenshots.map((src, i) => (
                  <Reveal key={src} delay={i * 150}>
                    <Image
                      src={src}
                      alt={`${t.screenshot} ${i + 1} — ${project.name}`}
                      width={240}
                      height={shotHeight(240)}
                      className="rounded-[2rem] shadow-2xl border border-white/10"
                    />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Demo video — autoplay, mute, loop infinito. Aparece só se o projeto tem 'demo'. */}
        {project.demo && (
          <Reveal>
            <section className="mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6 text-center">
                {t.inAction}
              </p>
              <div className="flex justify-center">
                <video
                  src={project.demo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${project.name} ${t.running}`}
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
