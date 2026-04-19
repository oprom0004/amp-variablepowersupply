import type { Metadata } from "next";
import HowToUseContent from "@/components/HowToUseContent";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Variable Power Supply Technical Support | How to Use & Operate",
  description: "Variable power supply operation knowledge base and technical support documentation.",
  alternates: { canonical: absoluteUrl("/how-to-use") },
};

export default function HowToUsePage() {
  return <HowToUseContent />;
}
