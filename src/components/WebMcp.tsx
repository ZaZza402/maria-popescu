"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { localBusinessSchema } from "../lib/schema";

type Tool = {
  name: string;
  description: string;
  inputSchema: object;
  annotations: { readOnlyHint: boolean };
  execute: (input: { page?: string }) => Promise<string>;
};

type ModelContext = {
  registerTool: (
    tool: Tool,
    options?: { signal: AbortSignal }
  ) => Promise<unknown> | unknown;
};

const PAGES = {
  "/": "Acasă: prezentarea cabinetului, servicii, contact și hartă",
  "/servicii": "Servicii și tarife",
  "/despre": "Despre Maria Popescu",
  "/intrebari-frecvente": "Întrebări frecvente",
  "/articole": "Articole de psihologie",
} as const;

const offers = localBusinessSchema.hasOfferCatalog.itemListElement.map((o) => ({
  service: o.itemOffered.name,
  price_ron: Number(o.price),
  duration: o.itemOffered.description,
}));

// Exposes read-only WebMCP tools so browser agents can read key facts without scraping the page.
const WebMcp = () => {
  const router = useRouter();

  useEffect(() => {
    const ctx = (document as unknown as { modelContext?: ModelContext })
      .modelContext;
    if (!ctx?.registerTool) return;

    const controller = new AbortController();
    const readOnly = { readOnlyHint: true };
    const noInput = { type: "object", properties: {} };

    const tools: Tool[] = [
      {
        name: "get_clinic_info",
        description:
          "Contact details of Cabinet Individual de Psihologie Maria Popescu: address, phone/WhatsApp, languages and booking method. Appointments are made by phone or WhatsApp only; there is no online booking form.",
        inputSchema: noInput,
        annotations: readOnly,
        execute: async () =>
          JSON.stringify({
            name: localBusinessSchema.name,
            address: "Strada Mizil 2C, 032345 București, Sector 3, România",
            phone_and_whatsapp: "+40 772 246 316",
            whatsapp_link: "https://wa.me/40772246316",
            google_maps: localBusinessSchema.hasMap,
            booking: "By phone or WhatsApp only. Sessions are held in person at the office.",
            language: "Romanian",
          }),
      },
      {
        name: "list_services_and_prices",
        description:
          "Lists all psychology services with their price in RON and session duration.",
        inputSchema: noInput,
        annotations: readOnly,
        execute: async () => JSON.stringify(offers),
      },
      {
        name: "get_opening_hours",
        description:
          "Weekly opening hours: Monday to Friday 08:00–19:00 (Europe/Bucharest time), closed Saturday and Sunday.",
        inputSchema: noInput,
        annotations: readOnly,
        execute: async () =>
          JSON.stringify({
            timezone: "Europe/Bucharest",
            open: "Monday–Friday 08:00–19:00",
            closed: "Saturday, Sunday",
          }),
      },
      {
        name: "navigate_to_page",
        description:
          "Navigates the browser to a page of this website. Pages: " +
          Object.entries(PAGES)
            .map(([path, label]) => `${path} (${label})`)
            .join("; "),
        inputSchema: {
          type: "object",
          properties: {
            page: {
              type: "string",
              enum: Object.keys(PAGES),
              description: "Path of the page to open.",
            },
          },
          required: ["page"],
        },
        annotations: readOnly,
        execute: async ({ page }) => {
          if (!page || !(page in PAGES)) return "Unknown page.";
          router.push(page);
          return `Navigated to ${page}`;
        },
      },
    ];

    tools.forEach((tool) => {
      try {
        const result = ctx.registerTool(tool, { signal: controller.signal });
        if (result instanceof Promise) result.catch(() => undefined);
      } catch {
        // Tool already registered or API unavailable.
      }
    });

    return () => controller.abort();
  }, [router]);

  return null;
};

export default WebMcp;
