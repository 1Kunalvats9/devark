/**
 * Central site & SEO configuration for Devark Solutions
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://devarksolutions.com)
 */
export const siteConfig = {
  name: "Devark Solutions",
  tagline: "Creative Agency — Digital Innovation & Expert Development",
  description:
    "Devark Solutions is a creative agency building intelligent digital experiences. We deliver website development, full-stack development, app development, and digital solutions for brands like Infeed Media, Kunafa Mafias, Haridwar Elmas, and Neobrix.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devarksolutions.com",
  email: "devarkworks@gmail.com",
  locale: "en_IN",
  ogImage: "/images/icon.png",
  twitterHandle: "@devarksolutions",
  keywords: [
    "creative agency",
    "digital agency",
    "website development",
    "full-stack development",
    "app development",
    "Next.js",
    "TypeScript",
    "GSAP",
    "digital solutions",
    "UI/UX",
    "branding",
    "marketing",
    "photoshoot agency",
    "e-commerce",
    "real estate",
    "sports",
  ],
  services: [
    "Website Development",
    "Full-Stack Development",
    "App Development",
    "Digital Solutions",
    "Innovation at Scale",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_IN",
  },
} as const

export type SiteConfig = typeof siteConfig
