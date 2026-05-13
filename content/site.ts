/**
 * LaunchhPad — site copy
 *
 * Single source of truth for nav, hero, services, process, testimonials,
 * FAQs, CTAs, footer, and contact copy. Pure data. No imports.
 *
 * Brand spelling rule: the company name is "LaunchhPad" (double h, capital P).
 * Do not change to "Launchpad" anywhere in this file.
 */

export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export type CTA = {
  readonly label: string;
  readonly href: string;
};

export type Hero = {
  readonly eyebrow: string;
  readonly headline: string;
  readonly subhead: string;
  readonly primaryCta: CTA;
  readonly secondaryCta: CTA;
};

export type Service = {
  readonly slug: string;
  readonly title: string;
  readonly oneLiner: string;
  readonly description: string;
  readonly bullets: readonly string[];
};

export type ProcessStep = {
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly detail: string;
};

export type Testimonial = {
  readonly quote: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
};

export type FAQ = {
  readonly question: string;
  readonly answer: string;
};

export type CTASection = {
  readonly eyebrow: string;
  readonly headline: string;
  readonly subhead: string;
  readonly primaryCta: CTA;
  readonly secondaryCta: CTA;
};

export type FooterColumn = {
  readonly title: string;
  readonly links: readonly NavLink[];
};

export type Footer = {
  readonly tagline: string;
  readonly columns: readonly FooterColumn[];
  readonly social: readonly NavLink[];
  readonly legal: readonly NavLink[];
  readonly copyright: string;
};

export type ContactPage = {
  readonly eyebrow: string;
  readonly headline: string;
  readonly subhead: string;
  readonly emailLabel: string;
  readonly email: string;
  readonly form: {
    readonly nameLabel: string;
    readonly emailLabel: string;
    readonly companyLabel: string;
    readonly budgetLabel: string;
    readonly messageLabel: string;
    readonly submitLabel: string;
    readonly successHeadline: string;
    readonly successBody: string;
    readonly budgetOptions: readonly string[];
  };
  readonly responseTime: string;
};

export type Site = {
  readonly nav: readonly NavLink[];
  readonly hero: Hero;
  readonly socialProof: string;
  readonly services: readonly Service[];
  readonly process: readonly ProcessStep[];
  readonly testimonials: readonly Testimonial[];
  readonly faqs: readonly FAQ[];
  readonly cta: CTASection;
  readonly footer: Footer;
  readonly contact: ContactPage;
};

export const site = {
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Writing", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Design, dev, and growth in one platform",
    headline: "Where ideas launch. And keep launching.",
    subhead:
      "LaunchhPad is the senior team behind ambitious founders and scaling brands. We design the product, ship the code, and drive the growth — in weeks, not quarters.",
    primaryCta: { label: "Start a project", href: "/contact" },
    secondaryCta: { label: "See the work", href: "/work" },
  },

  socialProof:
    "Trusted by founders shipping at Nova, Helio, Meridian, Orbital, Caldera, and Kinfolk.",

  services: [
    {
      slug: "web-engineering",
      title: "Web Engineering",
      oneLiner: "Typed, fast, accessible product surfaces.",
      description:
        "We build production web apps and marketing sites that pass audit on day one. Next.js, TypeScript, Postgres, and a deployment pipeline you can hand to your engineering team without apologizing.",
      bullets: [
        "Next.js 15 with the App Router, React Server Components, and typed routes",
        "Sub-1.5s LCP on real customer hardware, 95+ Lighthouse on every page",
        "WCAG AA accessibility verified with automated and manual audits",
        "CI, preview deploys, error tracking, and uptime monitoring on day one",
      ],
    },
    {
      slug: "product-design",
      title: "Product Design",
      oneLiner: "Senior product designers, not template editors.",
      description:
        "We design interfaces founders are proud to demo. We work in Figma, ship a real component library, and stay close to the engineers who build it. No five-week handoff.",
      bullets: [
        "Discovery interviews with your real customers, not personas",
        "Component-first Figma libraries that map to your codebase",
        "Interaction prototypes for every flow that touches money or data",
        "Weekly design reviews with you, your engineers, and your investors",
      ],
    },
    {
      slug: "brand-identity",
      title: "Brand Identity",
      oneLiner: "A brand that holds up under scrutiny.",
      description:
        "Founders rebrand for one reason: the old identity stopped doing its job. We rebuild brands that survive a Series A diligence call, a TechCrunch screenshot, and a billboard at the airport.",
      bullets: [
        "Naming, wordmark, and logotype in editable vector with full type system",
        "Voice, tone, and a banned-words list so every writer stays on message",
        "Color, motion, and illustration tokens in code-ready format",
        "Brand guidelines as a Notion site, not a 90-page PDF nobody opens",
      ],
    },
    {
      slug: "growth-marketing",
      title: "Growth Marketing",
      oneLiner: "Compounding channels, not one-shot campaigns.",
      description:
        "We pick the two channels that fit your business and make them work. SEO, paid, lifecycle, and content — measured against pipeline, not impressions.",
      bullets: [
        "Channel selection based on your CAC payback, not the latest hot take",
        "Programmatic SEO and content engines that publish weekly without burning out",
        "Paid acquisition with named experiments, hypotheses, and a kill switch",
        "Lifecycle email and onboarding flows that lift activation 20-40 percent",
      ],
    },
    {
      slug: "ai-integration",
      title: "AI Integration",
      oneLiner: "AI that earns its keep.",
      description:
        "We ship AI features customers actually use. RAG, agents, evals, and the unglamorous infrastructure — observability, cost controls, fallbacks — that keeps them up at 3 a.m.",
      bullets: [
        "RAG over your real data with citations, evals, and per-tenant isolation",
        "Agent workflows with tool-use, retries, and human-in-the-loop checkpoints",
        "LLM cost monitoring, prompt versioning, and offline eval suites",
        "Clear answers on what to build with AI, and what not to",
      ],
    },
    {
      slug: "launch-sprints",
      title: "Launch Sprints",
      oneLiner: "Thirty days. Live product. Real customers.",
      description:
        "A fixed-scope, fixed-price sprint to get a real product in front of real users in thirty days. Strategy, design, build, launch — one team, one timeline.",
      bullets: [
        "Day 0-3: scope, success metrics, and a one-page launch plan you sign off on",
        "Day 4-21: design and build, daily Loom updates, weekly live demos",
        "Day 22-27: closed beta with twenty hand-picked users and a feedback loop",
        "Day 28-30: public launch, analytics review, and a thirty-day roadmap",
      ],
    },
  ],

  process: [
    {
      number: "01",
      title: "Discover",
      summary: "We learn your business before we open Figma.",
      detail:
        "Founder interviews, customer calls, competitive teardown, and a hard look at your analytics. We finish discovery with a one-page brief: who we are building for, what they need, and how we will know we won.",
    },
    {
      number: "02",
      title: "Define",
      summary: "Scope locked. Success metrics named.",
      detail:
        "We write down the smallest version of the product that solves the real problem, the success metric that proves it, and the timeline. Anything outside that scope goes on a v2 list, not into this sprint.",
    },
    {
      number: "03",
      title: "Design",
      summary: "Real interfaces, real data, real fast.",
      detail:
        "We design in Figma against production data. Every screen is reviewed by a senior designer and a senior engineer in the same session. No throwaway artifacts, no unbuildable mockups.",
    },
    {
      number: "04",
      title: "Develop",
      summary: "Typed, tested, deployed daily.",
      detail:
        "We ship to a preview environment from day one. Pull requests are small, reviewed, and merged behind feature flags. You see progress every day, not at the end of the month.",
    },
    {
      number: "05",
      title: "Deploy & iterate",
      summary: "Launch is the start, not the finish.",
      detail:
        "We launch with monitoring, error tracking, and an analytics dashboard wired to your success metric. The first thirty days post-launch are tuning, not handoff.",
    },
  ],

  testimonials: [
    {
      quote:
        "We rebuilt our entire web stack in five weeks with LaunchhPad. LCP dropped from 4.1s to 1.2s and our paid funnel got 28 percent cheaper the same month. They moved like an in-house team that already knew our product.",
      name: "Priya Mehta",
      role: "Co-founder & CEO",
      company: "Nova Financial",
    },
    {
      quote:
        "Most agencies hand you a deck. LaunchhPad handed us a deployed product on day thirty with real users on it. Our seed round closed two weeks after launch and the deck literally was the product.",
      name: "Marcus Chen",
      role: "Founder",
      company: "Helio AI",
    },
    {
      quote:
        "Senior people, no juniors hidden in the org chart, no surprise invoices. They rebuilt our storefront, fixed our SEO, and shipped a loyalty program that drove 31 percent of our Q4 revenue. We extended the engagement twice.",
      name: "Sasha Okafor",
      role: "VP Brand & Digital",
      company: "Meridian Goods",
    },
  ],

  faqs: [
    {
      question: "How fast can you start?",
      answer:
        "Most engagements kick off within seven days of a signed agreement. Launch Sprints typically start the Monday after a Friday signature. We will tell you on the first call if our calendar makes that impossible.",
    },
    {
      question: "Who actually does the work?",
      answer:
        "Senior designers, senior engineers, and a senior strategist. Average tenure on the team is nine years. We do not staff junior talent on client work and we do not subcontract overseas without telling you.",
    },
    {
      question: "How do you price projects?",
      answer:
        "Launch Sprints are fixed-price, fixed-scope. Longer engagements are priced as monthly retainers with a defined scope per month. We do not bill hourly. You always know the number before we start.",
    },
    {
      question: "Do you work with non-technical founders?",
      answer:
        "Yes. About a third of our clients are non-technical founders. We translate the technical decisions into trade-offs you can actually weigh, and we never use a product decision as a way to sell more hours.",
    },
    {
      question: "What stack do you build on?",
      answer:
        "Default stack: Next.js 15, TypeScript, Postgres, Drizzle or Prisma, Tailwind, Vercel, Sentry, PostHog. We will use a different stack when there is a real reason. We will not use a different stack because it is fashionable.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. Most clients move to a monthly retainer for iteration, growth, and on-call coverage. You can also walk away with a clean codebase, full documentation, and an offboarding session for your in-house team.",
    },
    {
      question: "Can you sign an NDA before the first call?",
      answer:
        "Yes. Send your standard mutual NDA to nda@launchhpad.com and we will sign and return it within one business day.",
    },
    {
      question: "What kind of companies do you turn down?",
      answer:
        "We do not work on gambling, surveillance, or anything that targets minors with engagement loops. We will also pass if we do not think we are the right fit — we would rather refer you out than take a project we cannot win.",
    },
  ],

  cta: {
    eyebrow: "Ready when you are",
    headline: "Tell us what you're building.",
    subhead:
      "We reply in one business day. If we are not the right fit, we will say so on the first call and point you somewhere better.",
    primaryCta: { label: "Start a project", href: "/contact" },
    secondaryCta: { label: "Read the playbook", href: "/blog/the-30-day-launch-playbook" },
  },

  footer: {
    tagline: "Where ideas launch. And keep launching.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Web Engineering", href: "/services/web-engineering" },
          { label: "Product Design", href: "/services/product-design" },
          { label: "Brand Identity", href: "/services/brand-identity" },
          { label: "Growth Marketing", href: "/services/growth-marketing" },
          { label: "AI Integration", href: "/services/ai-integration" },
          { label: "Launch Sprints", href: "/services/launch-sprints" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Work", href: "/work" },
          { label: "Process", href: "/process" },
          { label: "About", href: "/about" },
          { label: "Writing", href: "/blog" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "The 30-Day Playbook", href: "/blog/the-30-day-launch-playbook" },
          { label: "Case studies", href: "/work" },
          { label: "Brand guide", href: "/brand" },
          { label: "RSS", href: "/rss.xml" },
        ],
      },
    ],
    social: [
      { label: "Twitter", href: "https://twitter.com/launchhpad" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/launchhpad" },
      { label: "GitHub", href: "https://github.com/launchhpad" },
      { label: "Dribbble", href: "https://dribbble.com/launchhpad" },
    ],
    legal: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
    copyright: "(c) LaunchhPad Studio, Inc. All rights reserved.",
  },

  contact: {
    eyebrow: "Contact",
    headline: "Tell us what you're building.",
    subhead:
      "Send a few lines about the project, the timeline, and what success looks like. We reply in one business day. If we cannot help, we will say so on the first call and point you somewhere better.",
    emailLabel: "Or email us directly",
    email: "hello@launchhpad.com",
    form: {
      nameLabel: "Your name",
      emailLabel: "Work email",
      companyLabel: "Company",
      budgetLabel: "Budget range",
      messageLabel: "What are you building?",
      submitLabel: "Send",
      successHeadline: "Got it. Talk soon.",
      successBody:
        "We will reply within one business day from a real person, not a sequence. Check your spam folder if you do not see us.",
      budgetOptions: [
        "Under $25k",
        "$25k - $75k",
        "$75k - $150k",
        "$150k - $400k",
        "$400k+",
        "Not sure yet",
      ],
    },
    responseTime: "Average reply time: 4 hours during business days.",
  },
} as const satisfies Site;

export type SiteCopy = typeof site;
