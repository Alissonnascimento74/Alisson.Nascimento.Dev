import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { content } from "@/data/content";
import { markdownToHtml } from "@/lib/markdown";
import { Nav } from "@/components/Nav";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return content.posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = content.posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default function PostPage({ params }: { params: Params }) {
  const post = content.posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);

  return (
    <main>
      <Nav />
      <article className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-24">
        <Link href="/blog" className="text-sm text-muted dark:text-white/50 link-underline">
          ← Voltar pro blog
        </Link>

        <header className="mt-10 mb-16 max-w-3xl">
          <p className="text-sm text-muted dark:text-white/50 mb-6">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="font-display font-light text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-ink/80 dark:text-white/80 font-display">{post.excerpt}</p>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric",
  });
}
