import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { contentData } from "@/src/data/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://patrickkitiaka.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F10" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Patrick Kitiaka | Agent Marketeur & Stratège de Croissance à Kinshasa",
    template: "%s | Patrick Kitiaka",
  },
  description:
    "Spécialiste en stratégie d'acquisition et en marketing digital à Kinshasa. Campagnes publicitaires Meta & TikTok Ads, tunnels de conversion mobiles et accompagnement data-driven.",
  keywords: [
    "Patrick Kitiaka",
    "Agent marketeur",
    "Stratège de croissance",
    "Marketing digital Kinshasa",
    "Meta Ads RDC",
    "Acquisition client Afrique",
    "Growth marketing Congo",
    "Kinshasa",
  ],
  authors: [{ name: "Patrick Kitiaka", url: siteUrl }],
  creator: "Patrick Kitiaka",
  publisher: "Nexera",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Patrick Kitiaka | Agent Marketeur & Stratège de Croissance",
    description:
      "Transformer l’attention en acquisition, propulser vos marques au cœur du marché congolais et africain. Portfolio officiel.",
    url: siteUrl,
    siteName: "Patrick Kitiaka Portfolio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: contentData.profile.avatarUrl,
        width: 1200,
        height: 630,
        alt: "Patrick Kitiaka - Agent Marketeur & Stratège de Croissance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Kitiaka | Agent Marketeur & Stratège de Croissance",
    description:
      "Transformer l’attention en acquisition, propulser vos marques au cœur du marché congolais et africain.",
    creator: "@patrick_kitiaka",
    images: [contentData.profile.avatarUrl],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-FR": `${siteUrl}/fr`,
      "en-US": `${siteUrl}/en`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Patrick Kitiaka",
        jobTitle: "Agent Marketeur & Stratège de Croissance",
        description: contentData.profile.heroIntro,
        image: contentData.profile.avatarUrl,
        url: siteUrl,
        email: `mailto:${contentData.profile.email}`,
        telephone: contentData.profile.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenue de l'Oua",
          addressLocality: "Gombe",
          addressRegion: "Kinshasa",
          addressCountry: "CD",
        },
        sameAs: [
          contentData.profile.socials.linkedin,
          contentData.profile.socials.instagram,
          contentData.profile.socials.x,
          contentData.profile.socials.youtube,
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Patrick Kitiaka Consulting",
        image: contentData.profile.avatarUrl,
        url: siteUrl,
        telephone: contentData.profile.phone,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenue de l'Oua",
          addressLocality: "Gombe",
          addressRegion: "Kinshasa",
          addressCountry: "CD",
        },
        founder: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white dark:bg-[#0B0F10] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
