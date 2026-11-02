import React from "react";

interface SectionCurveProps {
  // Background colour of the section ABOVE, drawn as a soft curve into the current section
  from?: "base" | "band";
  flip?: boolean;
}

const COLORS = { base: "text-stone-50", band: "text-stone-100" } as const;

/** Place as the first child of a `relative` section. */
const SectionCurve: React.FC<SectionCurveProps> = ({ from = "base", flip = false }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    className={`pointer-events-none absolute inset-x-0 -top-px h-8 md:h-12 lg:h-16 w-full ${COLORS[from]} ${
      flip ? "-scale-x-100" : ""
    }`}
    fill="currentColor"
  >
    <path d="M0 0H1440V26C1210 70 930 80 660 52C400 26 170 28 0 58Z" />
  </svg>
);

export default SectionCurve;
