import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AppDetailContent } from "@/components/pages/app-detail-content";
import { appCatalog, getAppBySlug } from "@/data/site";

type AppDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return appCatalog
    .filter((app) => app.status !== "coming-soon")
    .map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: AppDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || app.status === "coming-soon") {
    return {
      title: "App Not Found",
    };
  }

  return {
    title: `${app.name.en} | ${app.name.zh}`,
    description: app.description.en,
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || app.status === "coming-soon") {
    notFound();
  }

  return <AppDetailContent key={app.slug} app={app} />;
}
