import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { Check } from "lucide-react";
import { Metadata } from "next";

export const metadata = {
  title: "Professional Cleaning Services Brisbane | Moppit Clean",
  description:
    "Brisbane's trusted cleaning experts specializing in healthcare, educational, office, and fitness center cleaning. Licensed, insured, and satisfaction guaranteed. Get your free quote today!",
  keywords:
    "cleaning services Brisbane, professional cleaners Brisbane, healthcare cleaning Brisbane, office cleaning Brisbane, school cleaning Brisbane, gym cleaning Brisbane, commercial cleaning Brisbane, window cleaning Brisbane, deep cleaning Brisbane, pressure washing Brisbane",
  openGraph: {
    title: "Professional Cleaning Services Brisbane | Moppit Clean",
    description:
      "Brisbane's trusted cleaning experts specializing in healthcare, educational, office, and fitness center cleaning. Licensed, insured, and satisfaction guaranteed.",
    url: "https://moppitclean.com.au",
    images: [
      {
        url: "/cleaning-illustration.jpg",
        width: 1200,
        height: 630,
        alt: "Professional cleaning services in Brisbane - Moppit Clean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning Services Brisbane | Moppit Clean",
    description:
      "Brisbane's trusted cleaning experts specializing in healthcare, educational, office, and fitness center cleaning.",
    images: ["/cleaning-illustration.jpg"],
  },
  alternates: {
    canonical: "https://moppitclean.com.au",
  },
};

export default function Home() {
  const landingPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Professional Cleaning Services Brisbane | Moppit Clean",
    description:
      "Brisbane's trusted cleaning experts specializing in healthcare, educational, office, and fitness center cleaning. Licensed, insured, and satisfaction guaranteed.",
    url: "https://moppitclean.com.au",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Moppit Clean",
      description: "Premium, eco-friendly cleaning services in Brisbane",
      url: "https://moppitclean.com.au",
      telephone: "+61-XXX-XXX-XXX",
      email: "info@moppitclean.com.au",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brisbane",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
      areaServed: "Brisbane",
      serviceType: [
        "Healthcare Cleaning",
        "Educational Facility Cleaning",
        "Office Cleaning",
        "Fitness Center Cleaning",
        "Window Cleaning",
        "Deep Cleaning",
        "Pressure Washing",
        "Roof and Solar Panel Cleaning",
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://moppitclean.com.au",
        },
      ],
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingPageStructuredData),
        }}
      />
      <Navbar />
      <main>
        <section className="bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div className="animate-slide-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-zinc-900">
                  Pristine Spaces, Made
                  <br />
                  Simple – Brisbane’s
                  <br />
                  Trusted Cleaning Experts
                </h1>
                <p className="mt-5 text-base sm:text-lg text-zinc-600 max-w-xl animate-fade-in anim-delay-100">
                  Effortless, reliable, and always sparkling — that’s Moppit
                  Clean.
                </p>
                <div className="mt-8 flex items-center gap-3 animate-slide-up anim-delay-200">
                  <a
                    href="/contactus"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-md text-white font-medium bg-primary transition-colors hover:bg-primary/90"
                  >
                    Free Quote
                  </a>
                </div>
              </div>

              <div className="relative animate-scale-in anim-delay-200">
                <div className="relative mx-auto md:mx-0 w-full max-w-md">
                  <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
                  <div className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <Image
                      src="/cleaning-illustration.jpg"
                      alt="Professional cleaning illustration"
                      width={500}
                      height={450}
                      className="w-full h-auto rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 animate-slide-up">
              Specialist Cleaning Services
            </h2>
            <p className="mt-2 text-zinc-600 max-w-2xl animate-fade-in anim-delay-100">
              Tailored solutions for regulated, high-traffic and experience-led
              environments across Brisbane.
            </p>

            <div className="mt-10 space-y-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1 animate-slide-up">
                  <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                    HealthCare Centre Cleaning
                  </h3>
                  <p className="mt-3 text-zinc-600 leading-7">
                    The Imperative of Compliance and Infection Control Cleaning
                    in a healthcare environment is not merely an aesthetic
                    consideration; it is a critical component of infection
                    prevention and control. Facilities such as outpatient
                    clinics, hospitals, and medical centers face unique and
                    high-stakes challenges, including the management of
                    multi-resistant organisms (MROs) and the prevention of
                    infectious disease transmission. The primary concerns for
                    clients in this sector are regulatory compliance, patient
                    safety, and operational continuity.
                  </p>
                </div>
                <div className="order-1 md:order-2 animate-scale-in">
                  <div className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <Image
                      src="/IMG_3358.png"
                      alt="Healthcare cleaning"
                      width={520}
                      height={360}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="animate-scale-in">
                  <div className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <Image
                      src="/childcare-cleaning.jpeg"
                      alt="Educational facilities cleaning"
                      width={520}
                      height={360}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="animate-slide-up">
                  <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                    Educational Facilities Cleaning
                  </h3>
                  <p className="mt-3 text-zinc-600 leading-7">
                    Fostering Safe Learning Environments Educational
                    institutions, from primary schools to universities, are
                    complex ecosystems with a unique set of cleaning
                    requirements. The clients in this sector are primarily
                    concerned with the health and safety of students and staff,
                    which directly impacts a safe environment for learning and
                    productivity. A cleaning company for these facilities must
                    demonstrate a comprehensive understanding of the full campus
                    environment, from high-traffic classrooms and food
                    preparation areas to sprawling outdoor spaces and car parks.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1 animate-slide-up">
                  <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                    Office Cleaning
                  </h3>
                  <p className="mt-3 text-zinc-600 leading-7">
                    The Professional & Productive Workspace For clients in the
                    office and corporate sector, cleaning is an investment in
                    their brand, employee well-being, and overall productivity.
                    The primary priorities are to maintain a professional,
                    welcoming, and hygienic environment for both employees and
                    customers. The website copy for this segment must convey a
                    sense of reliability, attention to detail, and a commitment
                    to providing a hassle-free service experience with minimal
                    disruption.
                  </p>
                </div>
                <div className="order-1 md:order-2 animate-scale-in">
                  <div className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <Image
                      src="/office-cleaning.jpeg"
                      alt="Office cleaning"
                      width={520}
                      height={360}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="animate-scale-in">
                  <div className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <Image
                      src="/fitness-cleaning.jpeg"
                      alt="Fitness centres cleaning"
                      width={520}
                      height={360}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="animate-slide-up">
                  <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                    Physical & Mental Fitness Centres Cleaning
                  </h3>
                  <p className="mt-3 text-zinc-600 leading-7">
                    Optimizing Member Experience and Safety Physical and mental
                    fitness centers present a unique set of challenges related
                    to hygiene, safety, and ambiance. The presence of sweat,
                    high-traffic areas, and a wide variety of equipment can lead
                    to unpleasant odors and the rapid spread of germs. For
                    managers and owners of these facilities, the key priorities
                    are not just cleanliness, but tangible business outcomes
                    such as member health, satisfaction, and, most importantly,
                    retention.
                  </p>
                </div>
              </div>
            </div>

            {/* Our USP Section */}
            <div className="mt-14">
              <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 animate-slide-up">
                Our USP
              </h2>
              <p className="mt-2 text-zinc-600 max-w-2xl animate-fade-in anim-delay-100">
                What sets us apart in Brisbane's cleaning industry.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-lg border border-primary/80 bg-primary p-4 shadow-sm animate-slide-up">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 block"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-white">
                      48 Hours complaint resolution
                    </p>
                    <p className="text-sm text-white">
                      Fast, accountable support with minimal disruption.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-primary/80 bg-primary p-4 shadow-sm animate-slide-up anim-delay-100">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 block"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <path d="M9 9h6v6H9z" />
                      <path d="M9 3v6" />
                      <path d="M15 3v6" />
                      <path d="M9 15v6" />
                      <path d="M15 15v6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-white">
                      One stop solution for all your cleaning requirements
                    </p>
                    <p className="text-sm text-white">
                      Comprehensive cleaning services under one roof.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-primary/80 bg-primary p-4 shadow-sm animate-slide-up anim-delay-200">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 block"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-white">
                      Public Liability insurance
                    </p>
                    <p className="text-sm text-white">
                      Fully covered for peace of mind and compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-primary/80 bg-primary p-4 shadow-sm animate-slide-up anim-delay-300">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 block"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="m22 21-3-3m0 0a5 5 0 1 0-7-7 5 5 0 0 0 7 7Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-white">
                      All staff police checked
                    </p>
                    <p className="text-sm text-white">
                      Trusted professionals with verified backgrounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 animate-slide-up">
                Services we provide:
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-slide-up">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 block" />
                    </span>
                    <h4 className="font-semibold text-zinc-900">
                      Standard Cleaning
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Routine upkeep to keep your space consistently fresh, tidy,
                    and guest‑ready.
                  </p>
                </div>

                <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-slide-up anim-delay-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 block" />
                    </span>
                    <h4 className="font-semibold text-zinc-900">
                      Deep Cleaning
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Thorough top‑to‑bottom clean for seasonal refreshes and
                    move‑in/outs.
                  </p>
                </div>

                <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-slide-up anim-delay-200">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 block" />
                    </span>
                    <h4 className="font-semibold text-zinc-900">
                      Window Cleaning
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Crystal‑clear, streak‑free windows for brighter interiors
                    and curb appeal.
                  </p>
                </div>

                <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-slide-up anim-delay-300">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 block" />
                    </span>
                    <h4 className="font-semibold text-zinc-900">
                      Roof and Solar Panels Cleaning
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Protect surfaces and optimise solar output with gentle,
                    effective cleaning.
                  </p>
                </div>

                <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-slide-up anim-delay-400">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 block" />
                    </span>
                    <h4 className="font-semibold text-zinc-900">
                      Pressure Wash Drive Way
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Lift grime and stains from concrete and pavers for a
                    like‑new finish.
                  </p>
                </div>

                <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-slide-up anim-delay-500">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 block" />
                    </span>
                    <h4 className="font-semibold text-zinc-900">
                      Odour Management
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Eliminate persistent odours with advanced deodorising
                    treatments and air purification.
                  </p>
                </div>

                <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-slide-up anim-delay-600">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 block" />
                    </span>
                    <h4 className="font-semibold text-zinc-900">
                      Disinfection Services
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Professional sanitisation and disinfection to eliminate
                    harmful bacteria and viruses.
                  </p>
                </div>

                <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-slide-up anim-delay-700">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 block" />
                    </span>
                    <h4 className="font-semibold text-zinc-900">
                      Steam Floor Cleaning
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Deep steam cleaning for all floor types, removing dirt and
                    sanitising without harsh chemicals.
                  </p>
                </div>
              </div>

              <div className="mt-14">
                <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 animate-slide-up">
                  What Our Clients Say
                </h2>
                <p className="mt-2 text-zinc-600 max-w-2xl animate-fade-in anim-delay-100">
                  Hear from satisfied customers across Brisbane.
                </p>
              </div>
              <TestimonialsCarousel />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
