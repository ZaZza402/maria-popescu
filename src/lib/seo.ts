import type { Metadata } from "next";

export const SITE_URL = "https://www.popescumaria.ro";
export const SITE_NAME = "Cabinet Individual de Psihologie Maria Popescu";
const OG_IMAGE = {
  url: "/assets/logo-complete.png",
  width: 400,
  height: 400,
  alt: "Maria Popescu Psiholog - Logo Cabinet",
  type: "image/png",
};

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
}: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "ro_RO",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}
