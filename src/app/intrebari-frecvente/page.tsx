import type { Metadata } from "next";
import FAQPage from "../../views/FAQPage";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Întrebări Frecvente – Psihoterapie și Consiliere Psihologică",
  description:
    "Răspunsuri despre psihoterapie, consiliere psihologică, tarife și confidențialitate, pentru copii și adulți. Cabinet în Sector 3, București.",
  path: "/intrebari-frecvente",
});

export default function Page() {
  return <FAQPage />;
}
