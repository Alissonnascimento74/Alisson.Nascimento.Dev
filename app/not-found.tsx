import Link from "next/link";
import { ui } from "@/lib/i18n";

// Página 404 (bilíngue: não dá pra saber o idioma de um endereço que não existe).
export default function NotFound() {
  return (
    <main className="min-h-[80vh] max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-center">
      <p className="text-sm uppercase tracking-[0.2em] text-muted dark:text-white/50 mb-6">404</p>
      <h1 className="font-display font-light text-5xl md:text-7xl leading-[1.05] tracking-tight">{ui.pt.notFoundTitle}</h1>
      <p className="font-display text-2xl md:text-3xl text-muted dark:text-white/50 mt-3" lang="en">{ui.en.notFoundTitle}</p>
      <div className="mt-12 flex gap-8 text-sm">
        <Link href="/" className="link-underline">{ui.pt.notFoundBack} ↗</Link>
        <Link href="/en" className="link-underline" lang="en">{ui.en.notFoundBack} ↗</Link>
      </div>
    </main>
  );
}
