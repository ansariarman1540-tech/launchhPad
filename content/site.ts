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
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Web Development & Digital Marketing",
    headline: "Elevate Your Digital Presence.",
    subhead:
      "At LaunchhPad, we specialize in web development and innovative marketing strategies that elevate your brand, ensuring it stands out in a competitive landscape.",
    primaryCta: { label: "Get Started", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
  },

  socialProof:
    "Trusted by businesses across industries to build their digital presence and drive growth.",

  services: [
    {
      slug: "web-development",
      title: "Web Development",
      oneLiner: "Custom websites that convert visitors into customers.",
      description:
        "We build fast, responsive, and SEO-optimized websites tailored to your business goals. From landing pages to full-scale web applications, every project is built with performance and user experience at the core.",
      bullets: [
        "Custom responsive websites built for speed and performance",
        "E-commerce solutions with secure payment integrations",
        "Progressive Web Apps (PWA) for mobile-first experiences",
        "CMS integration — WordPress, Shopify, or headless setups",
      ],
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      oneLiner: "Strategies that drive traffic, leads, and revenue.",
      description:
        "We craft data-driven marketing campaigns that reach your target audience where they spend their time. From SEO to paid ads, we focus on measurable results and real ROI.",
      bullets: [
        "Search Engine Optimization (SEO) — on-page, technical, and off-page",
        "Pay-Per-Click (PPC) advertising — Google Ads, Meta Ads",
        "Content marketing and blog strategy",
        "Email marketing campaigns and automation",
      ],
    },
    {
      slug: "brand-identity",
      title: "Brand Identity",
      oneLiner: "Memorable brands that connect with your audience.",
      description:
        "Your brand is more than a logo. We create cohesive brand identities that communicate your values, resonate with your audience, and set you apart from competitors.",
      bullets: [
        "Logo design and visual identity systems",
        "Brand guidelines and style documentation",
        "Business card, letterhead, and collateral design",
        "Social media branding and templates",
      ],
    },
    {
      slug: "social-media-management",
      title: "Social Media Management",
      oneLiner: "Grow your audience and engagement organically.",
      description:
        "We manage your social media presence with strategic content, consistent posting, and community engagement that builds trust and drives followers to customers.",
      bullets: [
        "Content calendar planning and execution",
        "Graphic design for posts, stories, and reels",
        "Community management and engagement",
        "Analytics, reporting, and growth optimization",
      ],
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      oneLiner: "Intuitive designs that users love to interact with.",
      description:
        "We design interfaces that are beautiful, functional, and focused on the user. Every screen is tested, refined, and built to convert — not just to look good in a portfolio.",
      bullets: [
        "User research and wireframing",
        "High-fidelity prototypes in Figma",
        "Mobile-first responsive design",
        "Usability testing and iteration",
      ],
    },
    {
      slug: "seo-optimization",
      title: "SEO Optimization",
      oneLiner: "Rank higher. Get found. Grow organically.",
      description:
        "We implement proven SEO strategies that improve your search rankings, drive organic traffic, and reduce your dependence on paid ads over time.",
      bullets: [
        "Technical SEO audits and fixes",
        "Keyword research and content optimization",
        "Local SEO for brick-and-mortar businesses",
        "Link building and domain authority growth",
      ],
    },
  ],

  process: [
    {
      number: "01",
      title: "Discovery",
      summary: "We learn your business, goals, and audience.",
      detail:
        "We start with a deep-dive into your business — your goals, your audience, your competitors, and what success looks like. This shapes every decision that follows.",
    },
    {
      number: "02",
      title: "Strategy",
      summary: "A clear plan with timelines and deliverables.",
      detail:
        "Based on discovery, we build a strategy document with clear milestones, deliverables, and timelines. You know exactly what you are getting and when.",
    },
    {
      number: "03",
      title: "Design",
      summary: "Visuals that match your brand and goals.",
      detail:
        "We design mockups and prototypes you can interact with. You give feedback, we iterate, and we do not move to development until you love what you see.",
    },
    {
      number: "04",
      title: "Development",
      summary: "Clean code, fast performance, pixel-perfect.",
      detail:
        "We build with modern technologies — fast load times, mobile-responsive, SEO-friendly from day one. You get regular updates and a staging site to review progress.",
    },
    {
      number: "05",
      title: "Launch & Growth",
      summary: "Go live, then optimize and grow.",
      detail:
        "Launch is the beginning, not the end. We monitor performance, fix issues fast, and work with you on ongoing growth — SEO, content, and campaigns that compound.",
    },
  ],

  testimonials: [
    {
      quote:
        "LaunchhPad completely transformed our online presence. Our new website loads fast, looks professional, and we have seen a 3x increase in inquiries since launch.",
      name: "Rahul Sharma",
      role: "Founder",
      company: "TechVista Solutions",
    },
    {
      quote:
        "Their digital marketing strategy doubled our organic traffic in four months. They are responsive, data-driven, and genuinely invested in our growth.",
      name: "Priya Nair",
      role: "Marketing Director",
      company: "GreenLeaf Organics",
    },
    {
      quote:
        "From branding to website to SEO — LaunchhPad handled everything. We went from zero online presence to ranking on the first page of Google in three months.",
      name: "Arjun Patel",
      role: "Co-founder",
      company: "UrbanCraft Interiors",
    },
  ],

  faqs: [
    {
      question: "How long does a website project take?",
      answer:
        "Most websites take 2 to 4 weeks depending on complexity. A simple landing page can be live in under a week. A full e-commerce site with custom features takes closer to 4-6 weeks.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Absolutely. Most of our clients are small to mid-sized businesses. We offer flexible packages that fit different budgets without compromising on quality.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We build with Next.js, React, Tailwind CSS, WordPress, Shopify, and more depending on your needs. We pick the right tool for the job, not the trendiest one.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. We offer monthly maintenance plans that include updates, security patches, performance monitoring, and content changes. You can also hire us for one-off updates anytime.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "Our projects typically start around $1,500 for a basic site and go up from there depending on features, pages, and integrations. We provide a detailed quote after our discovery call.",
    },
    {
      question: "Can you help with SEO and marketing too?",
      answer:
        "Yes. We offer SEO, paid ads, social media management, and content marketing as standalone services or bundled with a website project. Many clients start with a site and add marketing later.",
    },
    {
      question: "Do you provide designs before development?",
      answer:
        "Yes. We always design first and get your approval before writing any code. You will see Figma mockups of every page and can request revisions until you are satisfied.",
    },
    {
      question: "What if I already have a website that needs fixing?",
      answer:
        "We do redesigns, performance fixes, SEO audits, and partial rebuilds. Send us the URL and we will tell you exactly what we would change and what it would cost.",
    },
  ],

  cta: {
    eyebrow: "Ready to grow?",
    headline: "Let's build something great together.",
    subhead:
      "Tell us about your project. We will get back to you within 24 hours with a clear plan and honest pricing.",
    primaryCta: { label: "Get Started", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/work" },
  },

  footer: {
    tagline: "Elevate Your Digital Presence.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Web Development", href: "/services#web-development" },
          { label: "Digital Marketing", href: "/services#digital-marketing" },
          { label: "Brand Identity", href: "/services#brand-identity" },
          { label: "Social Media", href: "/services#social-media-management" },
          { label: "UI/UX Design", href: "/services#ui-ux-design" },
          { label: "SEO Optimization", href: "/services#seo-optimization" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Work", href: "/work" },
          { label: "Process", href: "/process" },
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Case Studies", href: "/work" },
          { label: "FAQ", href: "/process#faq" },
          { label: "Blog", href: "/blog" },
        ],
      },
    ],
    social: [
      { label: "Twitter", href: "https://twitter.com/launchhpad" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/launchhpad" },
      { label: "GitHub", href: "https://github.com/launchhpad" },
      { label: "Dribbble", href: "https://dribbble.com/launchhpad" },
    ],
    legal: [],
    copyright: "(c) 2025 LaunchhPad. All rights reserved.",
  },

  contact: {
    eyebrow: "Contact",
    headline: "Tell us about your project.",
    subhead:
      "Send us a brief about what you need — a website, marketing, branding, or all three. We reply within 24 hours with a clear next step.",
    emailLabel: "Or email us directly",
    email: "hello@launchhpad.com",
    form: {
      nameLabel: "Your name",
      emailLabel: "Email address",
      companyLabel: "Company / Brand",
      budgetLabel: "Budget range",
      messageLabel: "Tell us about your project",
      submitLabel: "Send Message",
      successHeadline: "Message sent!",
      successBody:
        "We will get back to you within 24 hours. Check your inbox (and spam folder, just in case).",
      budgetOptions: [
        "Under $1,500",
        "$1,500 - $5,000",
        "$5,000 - $15,000",
        "$15,000 - $50,000",
        "$50,000+",
        "Not sure yet",
      ],
    },
    responseTime: "Average reply time: under 24 hours.",
  },
} as const satisfies Site;

export type SiteCopy = typeof site;
