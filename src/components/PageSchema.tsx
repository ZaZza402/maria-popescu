import { usePathname } from "next/navigation";

const SITE = "https://www.popescumaria.ro";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaProps {
  breadcrumbs: BreadcrumbItem[];
  type?: "WebPage" | "FAQPage" | "CollectionPage" | "AboutPage";
  title?: string;
  description?: string;
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function PageSchema({
  breadcrumbs,
  type = "WebPage",
  title,
  description,
}: SchemaProps) {
  const pathname = usePathname();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {type !== "FAQPage" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": type,
            name: title || "",
            description: description || "",
            url: `${SITE}${pathname}`,
          }}
        />
      )}
    </>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }}
    />
  );
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: ArticleSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        image,
        datePublished,
        dateModified,
        author: { "@type": "Person", name: author },
        publisher: {
          "@type": "Organization",
          name: "Maria Popescu - Psiholog Clinician",
          logo: {
            "@type": "ImageObject",
            url: `${SITE}/assets/logo-complete.png`,
          },
        },
      }}
    />
  );
}
