export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Los Santos Barbershop",
    image: "https://lossantosbarbers.com/logo.png",
    "@id": "https://lossantosbarbers.com",
    url: "https://lossantosbarbers.com",
    telephone: "+35796008368",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Βασιλίσσης Φρειδερίκης 27A",
      addressLocality: "Nicosia",
      addressRegion: "Pallouriotissa",
      postalCode: "1035",
      addressCountry: "CY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.1500",
      longitude: "33.3667",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "38",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Giorgios Pastou",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "The besttt",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sokratis Kalogeridis",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "The best barbershop in Nicosia",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "βασιλης καλαπαχτιερ",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Greatest barber in town",
      },
    ],
    sameAs: [
      "https://www.instagram.com/lossantosbarberz/",
      "https://lossantosbarberz.setmore.com/",
    ],
    areaServed: {
      "@type": "City",
      name: "Nicosia",
    },
    servesCuisine: false,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lossantosbarbers.com",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Los Santos Barbershop",
    url: "https://lossantosbarbers.com",
    logo: "https://lossantosbarbers.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+357-96008368",
      contactType: "Customer Service",
      areaServed: "CY",
      availableLanguage: ["English", "Greek", "Arabic"],
    },
    sameAs: [
      "https://www.instagram.com/lossantosbarberz/",
      "https://lossantosbarberz.setmore.com/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}

