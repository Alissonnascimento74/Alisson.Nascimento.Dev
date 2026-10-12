import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { content } from "@/data/content";
import { paths } from "@/lib/i18n";
import { ProjectView } from "@/components/ProjectView";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return content.en.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = content.en.projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.tagline,
    alternates: { canonical: paths.en.project(slug), languages: { "pt-BR": paths.pt.project(slug), en: paths.en.project(slug) } },
    openGraph: { title: p.name, description: p.tagline, url: paths.en.project(slug), locale: "en_US" },
  };
}

export default async function ProjectPageEn({ params }: { params: Params }) {
  const { slug } = await params;
  const project = content.en.projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectView project={project} lang="en" altHref={paths.pt.project(slug)} />;
}
