import React, { useCallback, useEffect, useRef, useState } from "react";

interface Review {
  author: string;
  // ISO date (YYYY-MM-DD); the relative label ("acum 2 zile") is computed automatically
  date: string;
  text: string;
}

// Real 5-star Google reviews, newest first. Add new ones at the top.
const REVIEWS: Review[] = [
  {
    author: "Cristian Petrescu",
    date: "2026-10-31",
    text: "Recomand cu mare încredere. M-a ajutat să înțeleg și să gestionez atacurile de panică.",
  },
  {
    author: "Marian Gabriel",
    date: "2026-10-30",
    text: "O recomand cu toată încrederea tuturor părinților care își doresc un specialist implicat, atent și apropiat de copii!",
  },
  {
    author: "Lontis George",
    date: "2026-10-30",
    text: "M-am confruntat cu insomnia timp de mulți ani, iar după ședințele de terapie cu Maria, calitatea somnului meu s-a îmbunătățit semnificativ. Mă bucur că am făcut acest pas și îi mulțumesc pentru sprijin, răbdare și profesionalism.",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://search.google.com/local/reviews?placeid=ChIJ05Zdg6L9sUARnDYr31uOV8k";

const AUTOPLAY_MS = 8000;
const DAY_MS = 24 * 60 * 60 * 1000;

const relativeDate = (iso: string): string => {
  const [y, m, d] = iso.split("-").map(Number);
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.max(0, Math.round((today - Date.UTC(y, m - 1, d)) / DAY_MS));

  if (days === 0) return "astăzi";
  if (days === 1) return "ieri";
  if (days < 7) return `acum ${days} zile`;
  const weeks = Math.floor(days / 7);
  if (days < 30) return weeks === 1 ? "acum o săptămână" : `acum ${weeks} săptămâni`;
  const months = Math.floor(days / 30);
  if (days < 365) return months === 1 ? "acum o lună" : `acum ${months} luni`;
  const years = Math.floor(days / 365);
  return years === 1 ? "acum un an" : `acum ${years} ani`;
};

const Stars: React.FC = () => (
  <span className="inline-flex gap-1 text-brand-primary" role="img" aria-label="5 din 5 stele">
    {[1, 2, 3, 4, 5].map((n) => (
      <svg key={n} viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8L10 1.5z" />
      </svg>
    ))}
  </span>
);

const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = REVIEWS.length;

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  }, []);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => goTo((active + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, count, goTo]);

  if (count === 0) return null;

  return (
    <section
      id="recenzii"
      aria-label="Recenzii Google"
      className="py-12 lg:py-16 bg-stone-50"
    >
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <Stars />

        <div
          className="relative mt-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <ul
            ref={trackRef}
            onScroll={onScroll}
            className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((r, i) => (
              <li
                key={`${r.author}-${r.date}`}
                className="w-full shrink-0 snap-center flex"
                aria-hidden={i !== active}
              >
                <figure className="w-full flex flex-col justify-between px-1 sm:px-10">
                  <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl leading-relaxed text-brand-text">
                    „{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-brand-text/60">
                    <span className="font-medium text-brand-text">{r.author}</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    {relativeDate(r.date)}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        {count > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {REVIEWS.map((r, i) => (
              <button
                key={r.author}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Recenzia ${i + 1} din ${count}`}
                aria-current={i === active}
                className="p-2 group"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-brand-primary"
                      : "w-1.5 bg-brand-secondary/60 group-hover:bg-brand-secondary"
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm uppercase tracking-[0.15em] text-brand-text/60 hover:text-brand-primary transition-colors duration-300"
        >
          Toate recenziile pe Google →
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
