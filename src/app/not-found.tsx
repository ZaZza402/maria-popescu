import type { Metadata } from "next";
import NotFoundPage from "../views/NotFoundPage";
import { buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pagina nu a fost găsită | Maria Popescu Psiholog",
  description:
    "Pagina căutată nu există. Reveniți la pagina principală a cabinetului de psihologie Maria Popescu.",
  path: "/",
  noindex: true,
});

export default function NotFound() {
  return <NotFoundPage />;
}
