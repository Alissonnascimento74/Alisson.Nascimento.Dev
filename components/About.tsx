import { getContent } from "@/data/content";
import { ui, type Lang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

// Seção "Sobre": história (mecânico → dev), o que estou fazendo agora, experiência e stack.
export function About({ lang = "pt" }: { lang?: Lang }) {
  const { profile, experience, skills } = getContent(lang);
  const t = ui[lang];
  return (
    <section id="about" className="border-t border-line/60 dark:border-white/10 bg-white dark:bg-[#0d0d10]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-y-8 md:gap-8">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-display text-3xl md:text-4xl sticky top-24">{t.about}</h2>
        </div>

        <div className="col-span-12 md:col-span-8 space-y-16">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6">{profile.story}</p>
            <p className="font-display text-xl md:text-2xl leading-relaxed text-ink/90 dark:text-white/90">{profile.bio}</p>
            <p className="mt-6 text-lg leading-relaxed text-ink/75 dark:text-white/70">{profile.bio2}</p>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-line/70 dark:border-white/10 p-6 md:p-8">
              <h3 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-4">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {t.now}
              </h3>
              <p className="text-ink/85 dark:text-white/80 leading-relaxed">{profile.now}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-8">{t.experience}</h3>
              <div className="space-y-8">
                {experience.map((e) => (
                  <div key={e.company + e.period} className="grid grid-cols-12 gap-4 pb-8 border-b border-line/60 dark:border-white/10 last:border-0">
                    <div className="col-span-12 sm:col-span-4 text-sm text-muted dark:text-white/50">{e.period}</div>
                    <div className="col-span-12 sm:col-span-8">
                      <div className="font-display text-xl">{e.role}</div>
                      <div className="text-muted dark:text-white/50 mb-2">
                        {e.href ? (
                          <a href={e.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                            {e.company} ↗
                          </a>
                        ) : (
                          e.company
                        )}
                      </div>
                      <p className="text-ink/80 dark:text-white/70 text-sm leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6">{t.stack}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="px-4 py-2 rounded-full border border-line dark:border-white/20 text-sm text-ink/80 dark:text-white/80">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
