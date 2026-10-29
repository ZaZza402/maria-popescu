"use client";

import { useEffect, useState } from "react";

const TIMEZONE = "Europe/Bucharest";
const OPEN_MIN = 8 * 60;
const CLOSE_MIN = 19 * 60;

// Index = JS weekday (0 = Sunday)
const DAYS = [
  { label: "Duminică", open: false },
  { label: "Luni", open: true },
  { label: "Marți", open: true },
  { label: "Miercuri", open: true },
  { label: "Joi", open: true },
  { label: "Vineri", open: true },
  { label: "Sâmbătă", open: false },
];

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const getClinicTime = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
  return {
    day: WEEKDAY_INDEX[get("weekday")] ?? 0,
    minutes: parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10),
  };
};

const getStatus = (date: Date) => {
  const { day, minutes } = getClinicTime(date);
  if (DAYS[day].open && minutes >= OPEN_MIN && minutes < CLOSE_MIN) {
    return { isOpen: true, text: "Deschis acum · până la 19:00", day };
  }
  // Find next opening day
  let offset = DAYS[day].open && minutes < OPEN_MIN ? 0 : 1;
  while (!DAYS[(day + offset) % 7].open) offset++;
  const nextDay = (day + offset) % 7;
  const when =
    offset === 0
      ? "azi"
      : offset === 1
        ? "mâine"
        : DAYS[nextDay].label.toLowerCase();
  return { isOpen: false, text: `Închis · se deschide ${when} la 08:00`, day };
};

const OpeningHours = () => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Time-dependent output is only rendered after mount to match the pre-rendered HTML
  const status = now ? getStatus(now) : null;

  return (
    <div className="mt-4 pt-3 border-t border-brand-accent/20">
      <h5 className="font-semibold text-brand-primary mb-2 text-xs uppercase tracking-wide">
        Program
      </h5>
      <div
        className="flex items-start gap-2 mb-3 text-xs font-medium"
        role="status"
        aria-live="polite"
        style={status ? undefined : { visibility: "hidden" }}
      >
        <span className="relative flex h-2.5 w-2.5 mt-1 flex-none">
          {status?.isOpen && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60"></span>
          )}
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
              status?.isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </span>
        <span className={status?.isOpen ? "text-green-700" : "text-red-700"}>
          {status?.text ?? "Închis · se deschide mâine la 08:00"}
        </span>
      </div>
      <ul className="space-y-1 text-xs">
        {[1, 2, 3, 4, 5, 6, 0].map((d) => (
          <li
            key={d}
            className={`flex justify-between gap-4 ${
              status && d === status.day
                ? "font-semibold text-brand-primary"
                : "text-brand-text/80"
            }`}
          >
            <span>{DAYS[d].label}</span>
            <span>{DAYS[d].open ? "08:00 – 19:00" : "Închis"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningHours;
