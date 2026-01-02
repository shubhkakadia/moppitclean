
export const metadata = {
  title: "About Moppit Clean Brisbane | Meet Our Founder | Professional Cleaning Services",
  description:
    "Meet Akshay S. and Moppit Clean. Brisbane commercial cleaning for healthcare, schools, offices, and gyms. Licensed and insured.",
  openGraph: {
    title: "About Moppit Clean Brisbane | Meet Our Founder",
    description:
      "Meet Akshay S., founder of Moppit Clean. Trusted Brisbane commercial cleaning.",
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
      "Meet Akshay S., founder of Moppit Clean in Brisbane.",
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