/**
 * Central site & SEO configuration for Devark Solutions
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://devarksolutions.com)
 */
export const siteConfig = {
  name: "Devark Solutions",
  tagline: "Creative Agency — Digital Innovation & Expert Development",
  description:
    "Devark Solutions is a premium creative agency delivering high-performance website development, custom web applications, and digital experiences. We partner with ambitious brands to build scalable, stunning, and SEO-optimized digital solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devarksolutions.com",
  email: "devarkworks@gmail.com",
  locale: "en_IN",
  ogImage: "/images/icon.png",
  twitterHandle: "@devarksolutions",
  social: {
    github: "https://github.com/devarksolutions", // Replace with actual if known, or generic
    twitter: "https://twitter.com/devarksolutions",
    linkedin: "https://linkedin.com/company/devarksolutions",
    instagram: "https://instagram.com/devarksolutions",
  },
  keywords: [
    "Web Development",
    "Creative Agency",
    "Next.js Developers",
    "React Agency",
    "UI/UX Design",
    "Full-Stack Development",
    "E-commerce Examples",
    "Digital Transformation",
    "SEO Services",
    "Performance Optimization",
    "Custom Web Applications",
    "Devark Solutions",
    "Infeed Media",
    "Kunafa Mafias",
  ],
  services: [
    "Custom Website Development",
    "Web Application Engineering",
    "Mobile App Development",
    "Digital Strategy & Branding",
    "Performance & SEO Optimization",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "Devark Solutions",
  },
} as const

export type SiteConfig = typeof siteConfig
