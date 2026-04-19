import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { absoluteUrl } from "@/lib/seo";
import { CATEGORIES } from "@/src/data/categories";

interface CategoryRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category is not available.",
    };
  }

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: absoluteUrl(`/${category.slug}`),
    },
    openGraph: {
      title: category.name,
      description: category.description,
      url: absoluteUrl(`/${category.slug}`),
      type: "article",
    },
  };
}

export default async function CategorySlugPage({ params }: CategoryRouteProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }
  redirect(`/${slug}`);
}
