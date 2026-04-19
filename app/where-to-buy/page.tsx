import type { Metadata } from "next";
import WhereToBuyContent from "@/components/WhereToBuyContent";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Variable Power Supply Procurement | Global Network & Logistics",
  description:
    "Access verified global procurement channels and logistics support for variable DC power supply orders, from lab units to industrial systems.",
  alternates: { canonical: absoluteUrl("/where-to-buy") },
};

export default function WhereToBuyPage() {
  return <WhereToBuyContent />;
}
