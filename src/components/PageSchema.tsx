import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

export function PageSchema({
  breadcrumbs,
  type = "WebPage",
  title,
  description,
}: SchemaProps) {
  const location = useLocation();

  useEffect(() => {
    // Create breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url,
      })),
    };

    // Only add webpage schema if not FAQ page (FAQ schema handled separately)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const schemas: any[] = [breadcrumbSchema];
    
    if (type !== "FAQPage") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": type,
        "name": title || document.title,
        "description": description || "",
        "url": `https://www.popescumaria.ro${location.pathname}`,
      });
    }

    // Add schemas to head
    const scriptIds: string[] = [];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      script.id = `page-schema-${index}`;
      scriptIds.push(script.id);
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      scriptIds.forEach(id => {
        const oldScript = document.getElementById(id);
        if (oldScript) document.head.removeChild(oldScript);
      });
    };
  }, [breadcrumbs, type, title, description, location.pathname]);

  return null;
}

// FAQ Schema Component
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    script.id = "faq-schema";

    document.head.appendChild(script);

    return () => {
      const oldScript = document.getElementById("faq-schema");
      if (oldScript) document.head.removeChild(oldScript);
    };
  }, [faqs]);

  return null;
}

// Article Schema Component
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
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: headline,
      description: description,
      image: image,
      datePublished: datePublished,
      dateModified: dateModified,
      author: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: "Maria Popescu - Psiholog Clinician",
        logo: {
          "@type": "ImageObject",
          url: "https://www.popescumaria.ro/assets/logo-complete.png",
        },
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(articleSchema);
    script.id = "article-schema";

    document.head.appendChild(script);

    return () => {
      const oldScript = document.getElementById("article-schema");
      if (oldScript) document.head.removeChild(oldScript);
    };
  }, [headline, description, image, datePublished, dateModified, author]);

  return null;
}
