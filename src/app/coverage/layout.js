export const metadata = {
  title: "Service Areas | Moppit Clean Brisbane",
  description:
    "See Moppit Clean service areas across Brisbane, Redland City, and Logan. Commercial cleaning coverage within 25km of Chandler.",
  openGraph: {
    title: "Service Areas | Moppit Clean Brisbane",
    description:
      "Commercial cleaning coverage across Brisbane, Redland City, and Logan within 25km of Chandler.",
    url: "https://moppitclean.com.au/coverage",
    images: [
      {
        url: "/cleaning-illustration.jpg",
        width: 1200,
        height: 630,
        alt: "Moppit Clean service areas in Brisbane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Moppit Clean Brisbane",
    description:
      "Commercial cleaning coverage across Brisbane, Redland City, and Logan.",
    images: ["/cleaning-illustration.jpg"],
  },
  alternates: {
    canonical: "https://moppitclean.com.au/coverage",
  },
};

export default function CoverageLayout({ children }) {
  return children;
}
