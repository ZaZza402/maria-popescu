import type { Metadata } from "next";
import DesprePage from "../../views/DesprePage";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Despre Maria Popescu – Psiholog Clinician și Psihoterapeut CBT",
  description:
    "Psiholog clinician și psihoterapeut cognitiv-comportamental în București. Află despre abordarea empatică și personalizată de la cabinetul din Sector 3.",
  path: "/despre",
});

export default function Page() {
  return <DesprePage />;
}
