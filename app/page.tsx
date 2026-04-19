import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Variable Power Supply | High-Precision Programmable Engineering Sources",
  description:
    "Leading authority in high-precision variable power solutions. Engineering micro-adjustable power systems for aerospace validation and laboratory research.",
  alternates: { canonical: absoluteUrl("/") },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CustomAmpScreens",
    url: absoluteUrl("/"),
    description:
      "Engineering catalog of variable DC power supply systems for lab, industrial, and high-voltage testing applications.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeContent />
    </>
  );
}
