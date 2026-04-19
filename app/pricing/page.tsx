import type { Metadata } from "next";
import PricingContent from "@/components/PricingContent";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Variable Power Supply Pricing | Request a Quote",
  description:
    "Request pricing and quote guidance for variable DC power supply systems, including programmable, high-voltage, and benchtop models.",
  alternates: { canonical: absoluteUrl("/pricing") },
};

export default function PricingPage() {
  return <PricingContent />;
}
