// Post-build step: writes a copy of dist/index.html per route with that page's own
// title/description/canonical/social tags, so link previews (WhatsApp, Facebook, ...)
// and crawlers see them without running JavaScript.
// Keep the values below in sync with the <Seo> props in src/pages/*.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://www.popescumaria.ro";
const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");

const routes = [
  {
    path: "/despre",
    title: "Despre Maria Popescu – Psiholog Clinician și Psihoterapeut CBT",
    description:
      "Psiholog clinician și psihoterapeut cognitiv-comportamental în București. Află despre abordarea empatică și personalizată de la cabinetul din Sector 3.",
  },
  {
    path: "/servicii",
    title: "Servicii și Tarife Psihoterapie București Sector 3",
    description:
      "Psihoterapie individuală, de cuplu și familie, consiliere, terapie ABA și evaluări psihologice. Tarife de la 150 RON, ședințe de 50 min în Sector 3, București.",
  },
  {
    path: "/articole",
    title: "Articole de Psihologie: Evaluare Copii, Somn, Alimentație",
    description:
      "Articole scrise de psiholog Maria Popescu despre evaluarea psihologică a copilului, tulburarea de alimentație compulsivă și igiena somnului.",
  },
  {
    path: "/intrebari-frecvente",
    title: "Întrebări Frecvente – Psihoterapie și Consiliere Psihologică",
    description:
      "Răspunsuri despre psihoterapie, consiliere psihologică, tarife și confidențialitate, pentru copii și adulți. Cabinet în Sector 3, București.",
  },
  {
    path: "/programare",
    title: "Programare online psiholog București – Maria Popescu",
    description:
      "Programează-te rapid la psiholog în București: alegi serviciul și ziua preferată, iar mesajul pe WhatsApp este gata scris. Confirmare directă de la Maria Popescu.",
  },
  {
    path: "/privacy",
    title: "Politica de Confidențialitate | Maria Popescu Psiholog",
    description:
      "Politica de confidențialitate și protecție a datelor personale conform GDPR la Cabinet Individual de Psihologie Maria Popescu.",
    noindex: true,
  },
];

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const template = readFileSync(join(dist, "index.html"), "utf8");

const setTag = (html, openPattern, value) => {
  const re = new RegExp(`(${openPattern}\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Tag not found: ${openPattern}`);
  return html.replace(re, `$1${esc(value)}$2`);
};

for (const route of routes) {
  const url = `${SITE}${route.path}`;
  const robots = route.noindex ? "noindex, follow" : "index, follow";
  let html = template;

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${esc(route.title)}</title>`
  );
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${url}$2`
  );
  html = setTag(html, '<meta\\s+name="description"', route.description);
  html = setTag(html, '<meta\\s+name="robots"', robots);
  html = setTag(html, '<meta\\s+name="googlebot"', robots);
  html = setTag(html, '<meta\\s+property="og:title"', route.title);
  html = setTag(html, '<meta\\s+property="og:description"', route.description);
  html = setTag(html, '<meta\\s+property="og:url"', url);
  html = setTag(html, '<meta\\s+name="twitter:title"', route.title);
  html = setTag(html, '<meta\\s+name="twitter:description"', route.description);

  const dir = join(dist, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`prerender-meta: ${route.path}`);
}
