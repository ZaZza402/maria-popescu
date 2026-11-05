// Single source of truth for service anchors (/servicii#slug) and booking presets (/programare?serviciu=slug).
export const SERVICE_LIST = [
  {
    slug: "psihoterapie-individuala",
    title: "Psihoterapie individuală",
    label: "Psihoterapie individuală",
  },
  {
    slug: "psihoterapie-cerinte-educationale-speciale",
    title: "Psihoterapie pentru cerințe educaționale speciale",
    label: "Psihoterapie pentru cerințe educaționale speciale",
  },
  {
    slug: "psihoterapie-cuplu-familie",
    title: "Psihoterapie de cuplu și familie",
    label: "Psihoterapie de cuplu și familie",
  },
  {
    slug: "evaluare-psihologica-grad-handicap",
    title: "Evaluarea psihologică pentru încadrarea în grad de handicap",
    label: "Evaluare pentru încadrarea în grad de handicap",
  },
  {
    slug: "evaluare-psihologica-copil",
    title: "Evaluarea psihologică a copilului",
    label: "Evaluarea psihologică a copilului",
  },
  {
    slug: "consiliere-psihologica",
    title: "Consiliere psihologică",
    label: "Consiliere psihologică",
  },
  {
    slug: "terapie-aba",
    title: "Terapie ABA (Analiza Comportamentală Aplicată)",
    label: "Terapie ABA",
  },
] as const;

export const slugForTitle = (title: string) =>
  SERVICE_LIST.find((s) => s.title === title)?.slug;
