import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Variable Power Supply Catalog",
    template: "%s",
  },
  description:
    "SEO-friendly catalog for variable power supply systems including high-voltage, programmable, and benchtop series.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: "Variable Power Supply Catalog",
    description:
      "Explore variable power supply categories, technical guidance, pricing and procurement information.",
    siteName: "Variable Power Supply Catalog",
    images: [
      {
        url: absoluteUrl("/800v-etm-8006.png"),
        width: 1200,
        height: 630,
        alt: "Custom AMPScreens variable power supply catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Variable Power Supply Catalog",
    description:
      "Explore variable power supply categories, technical guidance, pricing and procurement information.",
    images: [absoluteUrl("/800v-etm-8006.png")],
  },
  icons: {
    icon: "/800v-etm-8006.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
