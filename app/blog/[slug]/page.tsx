import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { content } from "@/data/content";
import { markdownToHtml } from "@/lib/markdown";
import { Nav } from "@/components/Nav";
import { ogImage } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return content.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = content.posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", url: `/blog/${slug}`, images: [ogImage], publishedTime: post.date },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = content.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);

  return (
    <main>
      <Nav lang="pt" altHref="/en" />
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
  // "2026-05-19" é lido como meia-noite UTC: formata em UTC pra não virar "18 de maio" no Brasil
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric", timeZone: "UTC",
  });
}
