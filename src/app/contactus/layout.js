import { Metadata } from "next";

export const metadata = {
  title: "Contact Moppit Clean Brisbane | Free Cleaning Quote | Call 0404 616 261",
  description:
    "Get a free Brisbane cleaning quote. Healthcare, school, office, and gym cleaning with 24/7 support. Call 0404 616 261.",
  openGraph: {
    title: "Contact Moppit Clean Brisbane | Free Cleaning Quote",
    description:
      "Get a free Brisbane cleaning quote. 24/7 support for healthcare, office, school, and gym cleaning.",
    url: "https://moppitclean.com.au/contactus",
    images: [
      {
        url: "/cleaning-illustration.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Moppit Clean for Professional Cleaning Services Brisbane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Moppit Clean Brisbane | Free Cleaning Quote",
    description:
      "Get a free Brisbane cleaning quote. 24/7 support.",
    images: ["/cleaning-illustration.jpg"],
  },
  alternates: {
    canonical: "https://moppitclean.com.au/contactus",
  },
};

export default function ContactLayout({
  children,
}) {
  return children;
}