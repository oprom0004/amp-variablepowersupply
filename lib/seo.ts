const DEFAULT_SITE_URL = "https://customampscreens.com";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL;

export function absoluteUrl(pathname: string) {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${cleanPath}`;
}
