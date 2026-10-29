import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToTopButton from "../components/ScrollToTopButton";
import AppEffects from "../components/AppEffects";
import { buildMetadata, SITE_URL } from "../lib/seo";
import { localBusinessSchema } from "../lib/schema";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap";
const FONT_AWESOME_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

const loadFontAwesome = `
  function loadFontAwesome() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "${FONT_AWESOME_URL}";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadFontAwesome);
  } else {
    loadFontAwesome();
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: "Psiholog București Sector 3 | Psihoterapie CBT – Maria Popescu",
    description:
      "Cabinet Individual de Psihologie Maria Popescu, Strada Mizil 2C, Sector 3. Psihoterapie CBT, consiliere, terapie ABA și evaluări pentru copii și adulți.",
    path: "/",
  }),
  applicationName: "Maria Popescu - Psiholog",
  authors: [{ name: "Maria Popescu" }],
  manifest: "/assets/site.webmanifest",
  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "/",
    types: { "text/plain": "/llms.txt" },
  },
  other: {
    "apple-mobile-web-app-title": "Maria Popescu",
    "msapplication-TileColor": "#C4E0D9",
    "msapplication-config": "/assets/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C4E0D9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={FONTS_URL} rel="stylesheet" />
        <link
          href="https://fonts.cdnfonts.com/css/brittany-signature"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/assets/logo-complete.png"
          as="image"
          type="image/png"
        />
        <script dangerouslySetInnerHTML={{ __html: loadFontAwesome }} />
        <noscript>
          <link rel="stylesheet" href={FONT_AWESOME_URL} />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <AppEffects />
        <ScrollToTop />
        <div className="scroll-progress"></div>
        <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
          <Header />
          <main>
            <div className="page-transition-container">{children}</div>
          </main>
          <WhatsappButton />
          <ScrollToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
