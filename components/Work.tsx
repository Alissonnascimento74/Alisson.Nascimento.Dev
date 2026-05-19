import Link from "next/link";
import Image from "next/image";
import { content } from "@/data/content";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function Work() {
  return (
    <section id="work" className="border-t border-line/60 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-2">Trabalho selecionado</h2>
          <p className="text-muted dark:text-white/50 mb-16 max-w-md">
            Uma seleção dos projetos que mais gosto de mostrar.
          </p>
        </Reveal>

        <div className="divide-y divide-line/60 dark:divide-white/10">
          {content.projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <TiltCard>
                <Link
                  href={`/projetos/${p.slug}`}
                  className="grid grid-cols-12 gap-6 py-12 md:py-16 group block"
                >
                  <div className="col-span-12 md:col-span-2 text-sm text-muted dark:text-white/50">
                    <span className="block font-display text-3xl md:text-4xl text-ink/30 dark:text-white/20 mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block">{p.year}</span>
                  </div>

                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-display text-2xl md:text-3xl mb-3 transition-transform duration-500 group-hover:translate-x-1">
                      {p.name}
                    </h3>
                    <p className="text-lg mb-3 text-ink/80 dark:text-white/80">{p.tagline}</p>
                    <p className="text-muted dark:text-white/60 leading-relaxed mb-5 max-w-xl">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full border border-line dark:border-white/20 text-muted dark:text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-3 flex flex-col gap-3 items-start md:items-end text-sm text-muted dark:text-white/50 md:self-start">
                    {p.cover && (
                      <Image
                        src={p.cover}
                        alt={`${p.name} icon`}
                        width={56}
                        height={56}
                        className="rounded-[14px] shadow-lg border border-white/10 mb-1"
                      />
                    )}
                    <span className="link-underline">Ver projeto ↗</span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
