"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  to: string;
};

// Same API as react-router's Link. Scrolling is handled by ScrollToTop, as before.
export default function Link({ to, ...props }: LinkProps) {
  return <NextLink href={to} scroll={false} {...props} />;
}
