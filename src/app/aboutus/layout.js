
export const metadata = {
  title: "About Moppit Clean Brisbane | Meet Our Founder | Professional Cleaning Services",
  description:
    "Meet Akshay S., founder of Moppit Clean. Brisbane's trusted cleaning experts specializing in healthcare, educational, office, and fitness facility cleaning. Police-checked staff, fully insured, 24/7 service.",
  openGraph: {
    title: "About Moppit Clean Brisbane | Meet Our Founder",
    description:
      "Meet Akshay S., founder of Moppit Clean. Brisbane's trusted cleaning experts delivering pristine spaces with specialized services across all sectors.",
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
    title: "About Moppit Clean Brisbane | Meet Our Founder",
    description:
      "Meet Akshay S., founder of Moppit Clean. Brisbane's trusted cleaning experts delivering pristine spaces.",
    images: ["/akshay.jpg"],
  },
  alternates: {
    canonical: "https://moppitclean.com.au/aboutus",
  },
};

export default function AboutLayout({
  children,

}) {
  return children;
}