import { content } from "@/data/content";
import { Reveal } from "./Reveal";

export function About() {
  const { profile, experience, skills } = content;
  return (
    <section id="about" className="border-t border-line/60 dark:border-white/10 bg-white dark:bg-[#0d0d10]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-display text-3xl md:text-4xl sticky top-24">Sobre</h2>
        </div>

        <div className="col-span-12 md:col-span-8 space-y-16">
          <Reveal>
            <p className="font-display text-xl md:text-2xl leading-relaxed text-ink/90 dark:text-white/90">
              {profile.bio}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-8">Experiência</h3>
              <div className="space-y-8">
                {experience.map((e) => (
                  <div key={e.company + e.period} className="grid grid-cols-12 gap-4 pb-8 border-b border-line/60 dark:border-white/10 last:border-0">
                    <div className="col-span-12 sm:col-span-4 text-sm text-muted dark:text-white/50">{e.period}</div>
                    <div className="col-span-12 sm:col-span-8">
                      <div className="font-display text-xl">{e.role}</div>
                      <div className="text-muted dark:text-white/50 mb-2">{e.company}</div>
                      <p className="text-ink/80 dark:text-white/70 text-sm leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-4 py-2 rounded-full border border-line dark:border-white/20 text-sm text-ink/80 dark:text-white/80 hover:bg-ink hover:text-paper hover:border-ink dark:hover:bg-white dark:hover:text-ink transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
