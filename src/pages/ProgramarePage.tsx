import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SERVICE_LIST } from "../lib/services";
import { Seo } from "../components/Seo";
import { PageSchema } from "../components/PageSchema";

const PHONE_INTL = "40772246316";
const PHONE_DISPLAY = "0772 246 316";
const WORKING_DAYS_SHOWN = 10;

const SERVICES = [
  ...SERVICE_LIST.map((s) => s.label),
  "Nu știu încă – prima ședință",
];

const TIME_SLOTS = [
  { label: "Dimineața", hours: "08–12" },
  { label: "După-amiaza", hours: "12–16" },
  { label: "Seara", hours: "16–19" },
];

const getWorkingDays = (count: number) => {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const weekday = cursor.getDay();
    if (weekday !== 0 && weekday !== 6) days.push(new Date(cursor));
  }
  return days;
};

const toKey = (d: Date) =>
  `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

const buildMessage = (
  name: string,
  service: string,
  day: Date | null,
  slot: string
) => {
  const intro = name.trim()
    ? `Bună ziua! Mă numesc ${name.trim()} și aș dori o programare`
    : "Bună ziua! Aș dori o programare";
  const forService = service
    ? service.startsWith("Nu știu")
      ? " pentru o primă ședință"
      : ` pentru ${service.toLowerCase()}`
    : "";
  const dayText = day
    ? day.toLocaleDateString("ro-RO", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "";
  let when = "";
  if (dayText && slot) when = `, preferabil ${dayText}, ${slot.toLowerCase()}`;
  else if (dayText) when = `, preferabil ${dayText}`;
  else if (slot) when = `, preferabil ${slot.toLowerCase()}`;
  return `${intro}${forService}${when}. Aștept confirmarea dumneavoastră. Mulțumesc!`;
};

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isDesktop;
};

const chipBase =
  "rounded-xl border text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60";
const chipOff =
  "bg-white border-stone-300/70 text-brand-text hover:border-brand-accent/60";
const chipOn = "bg-brand-accent text-white border-brand-accent shadow-md";

const ProgramarePage: React.FC = () => {
  const isDesktop = useIsDesktop();
  const days = useMemo(() => getWorkingDays(WORKING_DAYS_SHOWN), []);
  const [name, setName] = useState("");
  const [searchParams] = useSearchParams();
  const [service, setService] = useState(
    () =>
      SERVICE_LIST.find((s) => s.slug === searchParams.get("serviciu"))
        ?.label ?? ""
  );
  const [dayKey, setDayKey] = useState("");
  const [slot, setSlot] = useState("");
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedDay = days.find((d) => toKey(d) === dayKey) ?? null;
  const message = buildMessage(name, service, selectedDay, slot);
  const encoded = encodeURIComponent(message);
  const mobileUrl = `https://wa.me/${PHONE_INTL}?text=${encoded}`;
  const webUrl = `https://web.whatsapp.com/send?phone=${PHONE_INTL}&text=${encoded}`;

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
    } catch {
      const area = document.createElement("textarea");
      area.value = message;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  const toggle = (current: string, value: string, set: (v: string) => void) =>
    set(current === value ? "" : value);

  const title = "Programare online psiholog București – Maria Popescu";
  const description =
    "Programează-te rapid la psiholog în București: alegi serviciul și ziua preferată, iar mesajul pe WhatsApp este gata scris. Confirmare directă de la Maria Popescu.";

  return (
    <div className="min-h-screen bg-stone-50">
      <PageSchema
        breadcrumbs={[
          { name: "Acasă", url: "https://www.popescumaria.ro/" },
          {
            name: "Programare",
            url: "https://www.popescumaria.ro/programare",
          },
        ]}
        title={title}
        description={description}
      />
      <Seo path="/programare" title={title} description={description} />

      <section className="pt-12 pb-8 lg:pt-20 lg:pb-12 bg-gradient-to-br from-brand-light to-stone-50">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif text-brand-text mb-3 leading-tight">
            Programare rapidă
          </h1>
        </div>
      </section>

      <section className="pb-16 lg:pb-24 bg-stone-50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            <form
              className="lg:col-span-3 bg-white/90 p-5 sm:p-8 rounded-2xl border border-stone-300/50 shadow-soft space-y-7"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <div>
                <label
                  htmlFor="prog-nume"
                  className="block font-serif text-lg text-brand-text mb-2"
                >
                  Numele tău
                </label>
                <input
                  id="prog-nume"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  enterKeyHint="done"
                  placeholder="Nume și prenume"
                  className="w-full h-12 px-4 text-base rounded-xl border border-stone-300/70 bg-white text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                />
              </div>

              <fieldset>
                <legend className="font-serif text-lg text-brand-text mb-2">
                  Ce serviciu te interesează?
                </legend>
                <div className="grid gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={service === s}
                      onClick={() => toggle(service, s, setService)}
                      className={`${chipBase} min-h-12 px-4 py-2 text-left flex items-center justify-between gap-3 ${
                        service === s ? chipOn : chipOff
                      }`}
                    >
                      <span>{s}</span>
                      {service === s && (
                        <i className="fas fa-check text-xs" aria-hidden="true"></i>
                      )}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-serif text-lg text-brand-text mb-1">
                  Ziua preferată
                </legend>
                <p className="text-xs text-brand-text/60 mb-2">
                  Luni – Vineri. Cabinetul este închis în weekend.
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {days.map((d) => {
                    const key = toKey(d);
                    const active = key === dayKey;
                    return (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggle(dayKey, key, setDayKey)}
                        className={`${chipBase} py-2 flex flex-col items-center leading-tight ${
                          active ? chipOn : chipOff
                        }`}
                      >
                        <span className="text-[11px] uppercase tracking-wide opacity-80">
                          {d.toLocaleDateString("ro-RO", { weekday: "short" })}
                        </span>
                        <span className="text-lg font-serif">
                          {d.getDate()}
                        </span>
                        <span className="text-[11px] opacity-80">
                          {d.toLocaleDateString("ro-RO", { month: "short" })}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-serif text-lg text-brand-text mb-2">
                  Intervalul orar
                </legend>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t.label}
                      type="button"
                      aria-pressed={slot === t.label}
                      onClick={() => toggle(slot, t.label, setSlot)}
                      className={`${chipBase} min-h-12 py-2 px-1 flex flex-col items-center leading-tight ${
                        slot === t.label ? chipOn : chipOff
                      }`}
                    >
                      <span>{t.label}</span>
                      <span className="text-[11px] opacity-80">{t.hours}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-3">
                {isDesktop ? (
                  <button
                    type="button"
                    onClick={() => setShowFallback(true)}
                    className="w-full h-14 rounded-xl bg-green-500 text-white font-semibold text-base hover:bg-green-600 transition-colors shadow-md"
                  >
                    <i className="fab fa-whatsapp mr-2 text-xl align-middle"></i>
                    Trimite pe WhatsApp
                  </button>
                ) : (
                  <a
                    href={mobileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-14 rounded-xl bg-green-500 text-white font-semibold text-base hover:bg-green-600 transition-colors shadow-md"
                  >
                    <i className="fab fa-whatsapp mr-2 text-xl"></i>
                    Trimite pe WhatsApp
                  </a>
                )}
                <p className="text-xs text-brand-text/60 text-center leading-relaxed">
                  Solicitarea nu garantează programarea. Data și ora vor fi
                  confirmate telefonic sau pe WhatsApp. Nu stocăm datele
                  introduse aici.
                </p>
                <p className="text-sm text-center text-brand-text/80">
                  Preferi să suni?{" "}
                  <a
                    href="tel:+40772246316"
                    className="text-brand-accent font-medium hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </form>

            <aside className="lg:col-span-2 space-y-4 lg:sticky lg:top-28">
              <div className="bg-white/90 p-5 rounded-2xl border border-stone-300/50">
                <h2 className="font-serif text-lg text-brand-text mb-2">
                  Mesajul tău
                </h2>
                <p
                  className="text-sm text-brand-text/80 leading-relaxed italic"
                  aria-live="polite"
                >
                  „{message}”
                </p>
              </div>

              {isDesktop && showFallback && (
                <div className="bg-brand-light/60 p-5 rounded-2xl border border-brand-accent/30 space-y-3">
                  <h2 className="font-serif text-lg text-brand-text">
                    Cum trimiți mesajul de pe calculator
                  </h2>
                  <a
                    href={webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-12 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Deschide WhatsApp Web
                  </a>
                  <button
                    type="button"
                    onClick={copyMessage}
                    className="w-full h-12 rounded-xl bg-white border border-stone-300/70 text-brand-text font-medium hover:border-brand-accent/60 transition-colors"
                  >
                    <i
                      className={`fas ${copied ? "fa-check" : "fa-copy"} mr-2`}
                    ></i>
                    {copied ? "Copiat" : "Copiază mesajul"}
                  </button>
                  <a
                    href="tel:+40772246316"
                    className="flex items-center justify-center h-12 rounded-xl bg-white border border-stone-300/70 text-brand-text font-medium hover:border-brand-accent/60 transition-colors"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Sună {PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-brand-text/60">
                    Dacă nu ai WhatsApp Web, copiază mesajul și trimite-l la{" "}
                    {PHONE_DISPLAY} din aplicația de pe telefon.
                  </p>
                </div>
              )}

              <div className="bg-white/90 p-5 rounded-2xl border border-stone-300/50">
                <h2 className="font-serif text-lg text-brand-text mb-3">
                  Cum funcționează
                </h2>
                <ol className="space-y-2 text-sm text-brand-text/80">
                  <li>
                    <span className="font-semibold text-brand-accent">1.</span>{" "}
                    Alegi serviciul și ziua preferată.
                  </li>
                  <li>
                    <span className="font-semibold text-brand-accent">2.</span>{" "}
                    Trimiți mesajul pe WhatsApp.
                  </li>
                  <li>
                    <span className="font-semibold text-brand-accent">3.</span>{" "}
                    Primești confirmarea.
                  </li>
                </ol>
                <p className="text-xs text-brand-text/60 mt-3">
                  Mai ai întrebări? Vezi{" "}
                  <Link
                    to="/intrebari-frecvente"
                    className="text-brand-accent hover:underline"
                  >
                    întrebările frecvente
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramarePage;
