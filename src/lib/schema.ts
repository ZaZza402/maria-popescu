const mapsUrl = "https://maps.app.goo.gl/RYYFQdPKQteuzu8B9";

const service = (
  name: string,
  price: string,
  description: string
) => ({
  "@type": "Offer",
  price,
  priceCurrency: "RON",
  itemOffered: { "@type": "Service", name, description },
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": "https://www.popescumaria.ro/#cabinet",
  name: "Cabinet Individual de Psihologie Maria Popescu",
  alternateName: "Maria Popescu - Psiholog Clinician",
  description:
    "Cabinet de psihologie în Sector 3, București: psihoterapie cognitiv-comportamentală, consiliere psihologică, terapie ABA și evaluări psihologice pentru copii și adulți.",
  url: "https://www.popescumaria.ro/",
  logo: "https://www.popescumaria.ro/assets/logo-complete.png",
  image: [
    "https://www.popescumaria.ro/assets/maria-popescu-portrait.jpg",
    "https://www.popescumaria.ro/assets/logo-complete.png",
  ],
  telephone: "+40-772-246-316",
  priceRange: "150-300 RON",
  currenciesAccepted: "RON",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Mizil 2C",
    addressLocality: "București",
    addressRegion: "Sector 3",
    postalCode: "032345",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "44.4087696",
    longitude: "26.1770265",
  },
  hasMap: mapsUrl,
  sameAs: [mapsUrl],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+40-772-246-316",
    contactType: "customer service",
    availableLanguage: ["ro"],
    areaServed: "RO",
  },
  areaServed: { "@type": "City", name: "București" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicii Psihologice",
    itemListElement: [
      service("Psihoterapie individuală", "250", "Ședință de 50 de minute"),
      service(
        "Psihoterapie pentru cerințe educaționale speciale",
        "200",
        "Ședință de 50 de minute"
      ),
      service(
        "Psihoterapie de cuplu și familie",
        "300",
        "Ședință de 50 de minute"
      ),
      service(
        "Evaluarea psihologică pentru încadrarea în grad de handicap",
        "300",
        "Evaluare de 120 de minute"
      ),
      service(
        "Evaluarea psihologică a copilului",
        "200",
        "Evaluare de 50 de minute"
      ),
      service("Consiliere psihologică", "150", "Ședință de 50 de minute"),
      service(
        "Terapie cognitiv comportamentală aplicată (ABA)",
        "150",
        "Ședință de 50 de minute"
      ),
    ],
  },
};
