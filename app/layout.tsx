import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: {
    default: "Carlos Beneyto | CPTO at The Power Plugin | Product Leader & Entrepreneur",
    template: "%s | Carlos Beneyto",
  },
  description:
    "Product Leader with 10+ years building innovative tech products. Former founder of Edify (Acquired). Expert in Product Strategy, Growth, Metrics, AI, and SaaS. Currently CPTO at The Power Plugin.",
  keywords: [
    "Carlos Beneyto",
    "Product Leader",
    "CPTO",
    "Chief Product & Technology Officer",
    "Product Manager",
    "The Power Plugin",
    "Idealista",
    "Edify",
    "Product Strategy",
    "AI Products",
    "Growth",
    "Metrics",
    "Startups",
    "Entrepreneur",
    "Real Estate Tech",
    "Fintech",
    "SaaS",
    "UI/UX",
    "Madrid",
    "Valencia",
    "Spain",
    "Product Management",
    "cbeneyto",
  ],
  authors: [{ name: "Carlos Beneyto", url: "https://carlosbeneyto.com" }],
  creator: "Carlos Beneyto",
  publisher: "Carlos Beneyto",
  metadataBase: new URL("https://carlosbeneyto.com"),
  alternates: {
    canonical: "https://carlosbeneyto.com",
  },
  icons: {
    icon: [
      { url: "/images/avatar-carlos-2023.png", sizes: "32x32", type: "image/png" },
      { url: "/images/avatar-carlos-2023.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/avatar-carlos-2023.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/images/avatar-carlos-2023.png"],
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://carlosbeneyto.com",
    title: "Carlos Beneyto | CPTO at The Power Plugin | Product Leader",
    description:
      "Product Leader with 10+ years building innovative tech products. Former founder of Edify (Acquired). Expert in Product Strategy, Growth, Metrics, and AI.",
    siteName: "Carlos Beneyto - Product Leader",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carlos Beneyto - Product Leader with 10+ years driving tech, design, and business growth",
      },
    ],
    firstName: "Carlos",
    lastName: "Beneyto",
    username: "cbeneyto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Beneyto | CPTO at The Power Plugin",
    description:
      "Product Leader with 10+ years building innovative tech products. Expert in Product Strategy, Growth, Metrics, and AI.",
    creator: "@carlosbeneyto",
    site: "@carlosbeneyto",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Portfolio",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://carlosbeneyto.com#person",
              name: "Carlos Beneyto",
              givenName: "Carlos",
              familyName: "Beneyto",
              url: "https://carlosbeneyto.com",
              image: "https://carlosbeneyto.com/images/avatar-carlos-2023.png",
              email: "info@carlosbeneyto.com",
              sameAs: [
                "https://www.linkedin.com/in/cbeneyto/",
                "https://twitter.com/carlosbeneyto",
                "https://medium.com/@carlosbeneyto",
                "https://carlosbeneyto.com",
              ],
              jobTitle: "Chief Product & Technology Officer",
              worksFor: {
                "@type": "Organization",
                name: "The Power Plugin",
                url: "https://www.thepowerplugin.com",
                description:
                  "Marketing and engagement tool for gaming and betting operators to reward customers through sports memorabilia collection",
              },
              alumniOf: [
                {
                  "@type": "Organization",
                  name: "EDEM Business School",
                },
              ],
              knowsAbout: [
                "Product Management",
                "Product Strategy",
                "Artificial Intelligence",
                "Growth",
                "Metrics",
                "Startups",
                "Real Estate Technology",
                "Fintech",
                "SaaS",
                "UI/UX Design",
                "Product Leadership",
                "Entrepreneurship",
              ],
              hasOccupation: [
                {
                  "@type": "Occupation",
                  name: "Chief Product & Technology Officer",
                  occupationLocation: {
                    "@type": "City",
                    name: "Valencia",
                    containedInPlace: {
                      "@type": "Country",
                      name: "Spain",
                    },
                  },
                  description:
                    "Leading product and technology at The Power Plugin",
                  startDate: "2026-05",
                },
              ],
              description:
                "Product Leader with 10+ years of experience building innovative tech products across real estate, fintech, and SaaS. Former founder of Edify (Acquired). Expert in Product Strategy, Growth, Metrics, AI, and creating user-centered products that drive business results.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Valencia",
                addressCountry: "ES",
              },
              nationality: {
                "@type": "Country",
                name: "Spain",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://carlosbeneyto.com#website",
              url: "https://carlosbeneyto.com",
              name: "Carlos Beneyto - Product Leader",
              description: "Personal portfolio and blog of Carlos Beneyto, CPTO at The Power Plugin",
              author: {
                "@id": "https://carlosbeneyto.com#person",
              },
              inLanguage: "en-US",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "@id": "https://carlosbeneyto.com#profilepage",
              mainEntity: {
                "@id": "https://carlosbeneyto.com#person",
              },
              url: "https://carlosbeneyto.com",
              name: "Carlos Beneyto - Professional Profile",
              description:
                "Professional profile of Carlos Beneyto, CPTO at The Power Plugin and experienced product leader",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function hideV0Button() {
                  const elements = document.querySelectorAll('div[class*="v0-built-with-button"]');
                  elements.forEach(el => {
                    el.style.setProperty('display', 'none', 'important');
                  });
                }
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', hideV0Button);
                } else {
                  hideV0Button();
                }
                
                setTimeout(hideV0Button, 1000);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
