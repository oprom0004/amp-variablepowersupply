import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "@/components/CategoryPage";
import { absoluteUrl } from "@/lib/seo";
import { CATEGORIES } from "@/src/data/categories";

const RESERVED_SLUGS = new Set(["how-to-use", "pricing", "where-to-buy", "category"]);

interface RootSlugProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: RootSlugProps): Promise<Metadata> {
  const { slug } = await params;

  if (RESERVED_SLUGS.has(slug)) {
    return {};
  }

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
  };
}

export default async function RootSlugPage({ params }: RootSlugProps) {
  const { slug } = await params;

  if (RESERVED_SLUGS.has(slug)) {
    notFound();
  }

  const category = CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return <CategoryPage slug={slug} />;
}
