import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { content } from "@/data/content";
import { paths } from "@/lib/i18n";
import { ogImage } from "@/lib/seo";
import { ProjectView } from "@/components/ProjectView";

type Params = Promise<{ slug: string }>;

// Gera estaticamente uma página HTML pra cada projeto (super rápido)
export function generateStaticParams() {
  return content.pt.projects.map((p) => ({ slug: p.slug }));
}

// Metadata por projeto (cada página tem seu próprio título/preview)
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = content.pt.projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.tagline,
    alternates: { canonical: paths.pt.project(slug), languages: { "pt-BR": paths.pt.project(slug), en: paths.en.project(slug) } },
    openGraph: { title: p.name, description: p.tagline, images: [ogImage], url: paths.pt.project(slug) },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = content.pt.projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectView project={project} lang="pt" altHref={paths.en.project(slug)} />;
}
