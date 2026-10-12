import { getContent } from "@/data/content";
import { ui, type Lang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Contact({ lang = "pt" }: { lang?: Lang }) {
  const { profile, socials } = getContent(lang);
  const t = ui[lang];
  return (
    <section id="contact" className="border-t border-line/60 dark:border-white/10 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-40">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-paper/50 mb-8">{t.contactKicker}</p>
          <h2 className="font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-12 max-w-3xl">
            {t.contactTitle}
          </h2>
          {/* No celular o e-mail é largo demais pra uma linha: letra menor e quebra permitida depois do "@" */}
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-xl sm:text-2xl md:text-4xl link-underline [overflow-wrap:anywhere]"
          >
            {profile.email.split("@")[0]}@<wbr />
            {profile.email.split("@")[1]}
          </a>
        </Reveal>

        <div className="mt-24 pt-8 border-t border-paper/15 flex flex-wrap justify-between gap-6 text-sm text-paper/60">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
