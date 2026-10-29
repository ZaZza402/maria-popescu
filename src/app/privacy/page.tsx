import type { Metadata } from "next";
import PrivacyPage from "../../views/PrivacyPage";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politica de Confidențialitate | Maria Popescu Psiholog",
  description:
    "Politica de confidențialitate și protecție a datelor personale conform GDPR la Cabinet Individual de Psihologie Maria Popescu.",
  path: "/privacy",
  noindex: true,
});

export default function Page() {
  return <PrivacyPage />;
}
