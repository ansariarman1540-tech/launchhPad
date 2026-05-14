/**
 * LaunchhPad — SEO and metadata defaults.
 *
 * Brand spelling rule: the company name is "LaunchhPad" (double h, capital P).
 * Do not change to "Launchpad" anywhere in this file.
 */

export type OpenGraphImage = {
  readonly url: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly type: string;
};

export type OpenGraphDefaults = {
  readonly type: string;
  readonly siteName: string;
  readonly locale: string;
  readonly url: string;
  readonly title: string;
  readonly description: string;
  readonly images: readonly OpenGraphImage[];
};

export type TwitterDefaults = {
  readonly card: "summary" | "summary_large_image" | "app" | "player";
  readonly site: string;
  readonly creator: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
};

export type OrganizationLD = {
  readonly "@context": "https://schema.org";
  readonly "@type": "Organization";
  readonly name: string;
  readonly legalName: string;
  readonly url: string;
  readonly logo: string;
  readonly description: string;
  readonly foundingDate: string;
  readonly sameAs: readonly string[];
  readonly contactPoint: {
    readonly "@type": "ContactPoint";
    readonly email: string;
    readonly contactType: string;
    readonly availableLanguage: readonly string[];
  };
  readonly address: {
    readonly "@type": "PostalAddress";
    readonly addressLocality: string;
    readonly addressRegion: string;
    readonly addressCountry: string;
  };
};

export type SEO = {
  readonly defaultTitle: string;
  readonly titleTemplate: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly siteUrl: string;
  readonly twitterHandle: string;
  readonly openGraph: OpenGraphDefaults;
  readonly twitter: TwitterDefaults;
  readonly jsonLd: {
    readonly organization: OrganizationLD;
  };
};

export const seo = {
  defaultTitle: "LaunchhPad — Elevate Your Digital Presence",
  titleTemplate: "%s — LaunchhPad",
  description:
    "LaunchhPad specializes in web development and innovative marketing strategies that elevate your brand, ensuring it stands out in a competitive landscape.",
  keywords: [
    "LaunchhPad",
    "web development agency",
    "digital marketing",
    "SEO services",
    "brand identity design",
    "social media management",
    "UI UX design",
    "website design",
    "e-commerce development",
    "PPC advertising",
    "content marketing",
    "responsive web design",
  ],
  siteUrl: "https://www.launchhpad.com",
  twitterHandle: "@launchhpad",

  openGraph: {
    type: "website",
    siteName: "LaunchhPad",
    locale: "en_US",
    url: "https://www.launchhpad.com",
    title: "LaunchhPad — Elevate Your Digital Presence",
    description:
      "Web development and digital marketing that elevates your brand. Custom websites, SEO, paid ads, and branding — all under one roof.",
    images: [
      {
        url: "https://www.launchhpad.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LaunchhPad — Where ideas launch. And keep launching.",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@launchhpad",
    creator: "@launchhpad",
    title: "LaunchhPad — Elevate Your Digital Presence",
    description:
      "Web development and digital marketing that elevates your brand.",
    image: "https://www.launchhpad.com/opengraph-image",
  },

  jsonLd: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "LaunchhPad",
      legalName: "LaunchhPad Studio, Inc.",
      url: "https://www.launchhpad.com",
      logo: "https://www.launchhpad.com/opengraph-image",
      description:
        "LaunchhPad is a web development and digital marketing agency that helps businesses elevate their online presence and grow.",
      foundingDate: "2021-04-01",
      sameAs: [
        "https://twitter.com/launchhpad",
        "https://www.linkedin.com/company/launchhpad",
        "https://github.com/launchhpad",
        "https://dribbble.com/launchhpad",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@launchhpad.com",
        contactType: "customer support",
        availableLanguage: ["English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        addressCountry: "US",
      },
    },
  },
} as const satisfies SEO;

export type SEOConfig = typeof seo;
