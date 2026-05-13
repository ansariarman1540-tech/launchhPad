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
  defaultTitle: "LaunchhPad — Design, dev, and growth in one platform",
  titleTemplate: "%s — LaunchhPad",
  description:
    "LaunchhPad is the senior team behind ambitious founders and scaling brands. Product design, web engineering, brand, growth, and AI — shipped in weeks, not quarters.",
  keywords: [
    "LaunchhPad",
    "startup design agency",
    "Next.js development",
    "product design studio",
    "brand identity for startups",
    "growth marketing agency",
    "AI integration",
    "launch sprint",
    "founder studio",
    "Series A web design",
    "premium product design",
    "TypeScript engineering",
  ],
  siteUrl: "https://www.launchhpad.com",
  twitterHandle: "@launchhpad",

  openGraph: {
    type: "website",
    siteName: "LaunchhPad",
    locale: "en_US",
    url: "https://www.launchhpad.com",
    title: "LaunchhPad — Design, dev, and growth in one platform",
    description:
      "Senior design, engineering, and growth talent for ambitious founders and scaling brands. Where ideas launch. And keep launching.",
    images: [
      {
        url: "https://www.launchhpad.com/og/default.png",
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
    title: "LaunchhPad — Design, dev, and growth in one platform",
    description:
      "Senior design, engineering, and growth talent for ambitious founders and scaling brands.",
    image: "https://www.launchhpad.com/og/default.png",
  },

  jsonLd: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "LaunchhPad",
      legalName: "LaunchhPad Studio, Inc.",
      url: "https://www.launchhpad.com",
      logo: "https://www.launchhpad.com/brand/launchhpad-mark.png",
      description:
        "LaunchhPad is a senior product studio for ambitious founders and scaling brands. Design, engineering, and growth in one team.",
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
