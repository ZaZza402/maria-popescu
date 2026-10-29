import type { Metadata } from "next";
import ArticolePage from "../../views/ArticolePage";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Articole de Psihologie: Evaluare Copii, Somn, Alimentație",
  description:
    "Articole scrise de psiholog Maria Popescu despre evaluarea psihologică a copilului, tulburarea de alimentație compulsivă și igiena somnului.",
  path: "/articole",
});

export default function Page() {
  return <ArticolePage />;
}
