import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Moppit Clean - Professional Cleaning Services Brisbane",
    template: "%s | Moppit Clean"
  },
  description:
    "Premium, eco-friendly cleaning services in Brisbane. Specialized in healthcare, educational, office, and fitness center cleaning. Licensed, insured, and satisfaction guaranteed.",
  keywords: "cleaning services Brisbane, professional cleaners Brisbane, healthcare cleaning, office cleaning, educational facility cleaning, fitness center cleaning, window cleaning, deep cleaning, commercial cleaning Brisbane, medical facility cleaning, school cleaning, gym cleaning, pressure washing, roof cleaning, solar panel cleaning",
  authors: [{ name: "Akshay S.", url: "https://moppitclean.com.au/aboutus" }],
  creator: "Moppit Clean",
  publisher: "Moppit Clean",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://moppitclean.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://moppitclean.com.au',
    siteName: 'Moppit Clean',
    title: 'Moppit Clean - Professional Cleaning Services Brisbane',
    description: 'Premium, eco-friendly cleaning services in Brisbane. Specialized in healthcare, educational, office, and fitness center cleaning.',
    images: [
      {
        url: '/cleaning-illustration.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional cleaning services in Brisbane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moppit Clean - Professional Cleaning Services Brisbane',
    description: 'Premium, eco-friendly cleaning services in Brisbane. Specialized in healthcare, educational, office, and fitness center cleaning.',
    images: ['/cleaning-illustration.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
  category: 'cleaning services',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: '#3b82f6',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Moppit Clean',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Moppit Clean",
    "description": "Premium, eco-friendly cleaning services in Brisbane. Specialized in healthcare, educational, office, and fitness center cleaning.",
    "url": "https://moppitclean.com.au",
    "logo": "https://moppitclean.com.au/moppit-logo-1.png",
    "image": "https://moppitclean.com.au/cleaning-illustration.jpg",
    "telephone": "+61-XXX-XXX-XXX",
    "email": "info@moppitclean.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-27.4698",
      "longitude": "153.0251"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brisbane"
    },
    "serviceType": [
      "Healthcare Cleaning",
      "Educational Facility Cleaning", 
      "Office Cleaning",
      "Fitness Center Cleaning",
      "Window Cleaning",
      "Deep Cleaning",
      "Pressure Washing",
      "Roof and Solar Panel Cleaning"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Cleaning",
            "description": "Infection control and compliance-focused cleaning for healthcare facilities"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Facility Cleaning",
            "description": "Safe learning environment cleaning for schools and universities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Office Cleaning",
            "description": "Professional workspace cleaning for corporate environments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fitness Center Cleaning", 
            "description": "Hygiene-focused cleaning for gyms and fitness facilities"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Akshay S."
    },
    "foundingDate": "2024",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "AUD",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      "https://www.facebook.com/moppitclean",
      "https://www.instagram.com/moppitclean",
      "https://www.linkedin.com/company/moppitclean"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
