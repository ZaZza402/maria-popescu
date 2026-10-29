import type { Metadata } from "next";
import ServiciiPage from "../../views/ServiciiPage";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Servicii și Tarife Psihoterapie București Sector 3",
  description:
    "Psihoterapie individuală, de cuplu și familie, consiliere, terapie ABA și evaluări psihologice. Tarife de la 150 RON, ședințe de 50 min în Sector 3, București.",
  path: "/servicii",
});

export default function Page() {
  return <ServiciiPage />;
}
