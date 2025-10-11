import { Metadata } from "next";

export const metadata = {
  title: "Contact Moppit Clean Brisbane | Free Cleaning Quote | Call 0404 616 261",
  description:
    "Get a free cleaning quote in Brisbane. Contact Moppit Clean for healthcare, office, school, and gym cleaning services. Available 24/7. Call 0404 616 261 or visit us in Chandler.",
  openGraph: {
    title: "Contact Moppit Clean Brisbane | Free Cleaning Quote",
    description:
      "Get a free cleaning quote in Brisbane. Available 24/7 for healthcare, office, educational, and fitness center cleaning services.",
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
      "Get a free cleaning quote in Brisbane. Available 24/7 for all cleaning services.",
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