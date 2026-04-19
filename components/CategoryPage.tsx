import { notFound } from "next/navigation";
import { CATEGORIES } from "@/src/data/categories";
import CategoryDetailContent from "@/components/CategoryDetailContent";

interface CategoryPageProps {
  slug: string;
}

export default function CategoryPage({ slug }: CategoryPageProps) {
  const exists = CATEGORIES.some((item) => item.slug === slug);
  if (!exists) notFound();
  return <CategoryDetailContent slug={slug} />;
}
