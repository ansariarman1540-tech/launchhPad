import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { seo } from "@/content/seo";
import { siteUrl } from "@/lib/site-url";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: "LaunchhPad",
  authors: [{ name: "LaunchhPad" }],
  creator: "LaunchhPad",
  publisher: "LaunchhPad",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: seo.openGraph.siteName,
    locale: seo.openGraph.locale,
    url: seo.openGraph.url,
    title: seo.openGraph.title,
    description: seo.openGraph.description,
  },
  twitter: {
    card: seo.twitter.card,
    site: seo.twitter.site,
    creator: seo.twitter.creator,
    title: seo.twitter.title,
    description: seo.twitter.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-[color:var(--color-bg)] text-[color:var(--color-fg)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
