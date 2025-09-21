export const metadata = {
  title: "About Moppit Clean - Brisbane's Trusted Cleaning Experts",
  description: "Meet Akshay S., founder of Moppit Clean. Learn about our mission to deliver pristine spaces with specialized cleaning services for healthcare, educational, office, and fitness facilities in Brisbane.",
  keywords: "about Moppit Clean, cleaning company Brisbane, Akshay S founder, healthcare cleaning Brisbane, educational facility cleaning, office cleaning Brisbane, fitness center cleaning, professional cleaning services Brisbane, cleaning company founder",
  openGraph: {
    title: "About Moppit Clean - Brisbane's Trusted Cleaning Experts",
    description: "Meet Akshay S., founder of Moppit Clean. Learn about our mission to deliver pristine spaces with specialized cleaning services for healthcare, educational, office, and fitness facilities in Brisbane.",
    url: "https://moppitclean.com.au/aboutus",
    images: [
      {
        url: "/akshay.jpg",
        width: 1200,
        height: 630,
        alt: "Akshay S., Founder of Moppit Clean - Professional Cleaning Services Brisbane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Moppit Clean - Brisbane's Trusted Cleaning Experts",
    description: "Meet Akshay S., founder of Moppit Clean. Learn about our mission to deliver pristine spaces with specialized cleaning services.",
    images: ["/akshay.jpg"],
  },
  alternates: {
    canonical: "https://moppitclean.com.au/aboutus",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
