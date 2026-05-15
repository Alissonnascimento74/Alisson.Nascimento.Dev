import Image from "next/image";
import { content } from "@/data/content";
import { Aurora } from "./Aurora";

export function Hero() {
  const { profile } = content;
  const words = profile.headline.split(" ");

  return (
    <section
      id="top"
      className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-40 pb-24 md:pb-32 overflow-hidden"
    >
      <Aurora />

      <p className="text-sm tracking-[0.2em] uppercase text-muted dark:text-white/50 mb-8 animate-fade-in">
        {profile.role} · {profile.location}
      </p>

      <div className="grid grid-cols-12 gap-8 items-center">
        <div className={profile.avatar ? "col-span-12 md:col-span-8" : "col-span-12"}>
          <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block animate-word-reveal opacity-0"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>

          <div
            className="mt-12 flex flex-wrap gap-6 text-sm animate-fade-up"
            style={{ animationDelay: `${words.length * 90 + 100}ms`, animationFillMode: "both" }}
          >
            {content.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {profile.avatar && (
          <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end">
            <div
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-1 ring-line/60 dark:ring-white/10 animate-photo-reveal"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
