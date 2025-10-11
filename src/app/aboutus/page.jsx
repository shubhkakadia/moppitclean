import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import { Shield, Users, Award, Clock } from 'lucide-react'

export default function AboutPage() {
  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://moppitclean.com.au/aboutus#webpage",
        "name": "About Moppit Clean - Brisbane's Trusted Cleaning Experts",
        "description": "Meet Akshay S., founder of Moppit Clean. Learn about our mission to deliver pristine spaces with specialized cleaning services for healthcare, educational, office, and fitness facilities in Brisbane.",
        "url": "https://moppitclean.com.au/aboutus",
        "isPartOf": {
          "@id": "https://moppitclean.com.au#website"
        },
        "breadcrumb": {
          "@id": "https://moppitclean.com.au/aboutus#breadcrumb"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://moppitclean.com.au#organization",
        "name": "Moppit Clean",
        "description": "Premium, eco-friendly cleaning services in Brisbane specializing in healthcare, educational, office, and fitness center cleaning.",
        "url": "https://moppitclean.com.au",
        "logo": {
          "@type": "ImageObject",
          "url": "https://moppitclean.com.au/moppit-logo-1.png"
        },
        "image": "https://moppitclean.com.au/cleaning-illustration.jpg",
        "telephone": "+61404616261",
        "email": "contact@moppitclean.com.au",
        "founder": {
          "@type": "Person",
          "name": "Akshay S.",
          "jobTitle": "Founder & Director",
          "description": "Founder of Moppit Clean, built on the belief that every space deserves to shine with a strong focus on reliability, attention to detail, and customer satisfaction.",
          "image": "https://moppitclean.com.au/akshay.jpg"
        },
        "foundingDate": "2024",
        "foundingLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Brisbane",
            "addressRegion": "Queensland",
            "addressCountry": "AU"
          }
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1625 Old Cleveland Road",
          "addressLocality": "Chandler",
          "addressRegion": "QLD",
          "postalCode": "4155",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-27.5158",
          "longitude": "153.1478"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Brisbane"
          },
          {
            "@type": "Place",
            "name": "Chandler"
          },
          {
            "@type": "Place",
            "name": "Carindale"
          },
          {
            "@type": "Place",
            "name": "Mount Gravatt"
          },
          {
            "@type": "Place",
            "name": "Springwood"
          }
        ],
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
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "$$",
        "slogan": "Pristine Spaces, Made Simple",
        "knowsAbout": [
          "Healthcare Facility Cleaning",
          "Infection Control Cleaning",
          "Educational Facility Cleaning",
          "Commercial Office Cleaning",
          "Fitness Center Cleaning",
          "Deep Cleaning Services",
          "Window Cleaning",
          "Pressure Washing"
        ],
        "memberOf": {
          "@type": "Organization",
          "name": "Queensland Cleaning Industry"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://moppitclean.com.au/aboutus#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://moppitclean.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://moppitclean.com.au/aboutus"
          }
        ]
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageStructuredData) }}
      />
      <Navbar />
      <main>
        <section className="py-14 sm:py-20 bg-secondary/10 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2 order-1 md:order-2 animate-scale-in anim-delay-100">
                <div className="relative rounded-2xl bg-white p-4 shadow-sm border border-zinc-200">
                  <Image
                    src="/akshay.jpg"
                    alt="Akshay S., Founder of Moppit Clean - Professional Cleaning Services Brisbane"
                    width={520}
                    height={520}
                    className="w-full h-auto rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="md:col-span-3 order-2 md:order-1 animate-slide-up">
                <h1 className="text-3xl sm:text-5xl font-semibold text-zinc-900">
                  About Moppit Clean Brisbane
                </h1>
                <p className="mt-5 text-lg text-zinc-700 leading-8">
                  I'm <strong>Akshay S.</strong>, the founder of Moppit Clean, built on the belief that every space deserves to shine. Based in Chandler, Brisbane, I've dedicated my career to providing professional cleaning services that go beyond the surface. With a strong focus on reliability, attention to detail, and customer satisfaction, Moppit Clean serves healthcare facilities, schools, offices, and fitness centres across Brisbane.
                </p>
                <p className="mt-4 text-zinc-700 leading-7 anim-delay-100 animate-fade-in">
                  Whether it's a medical clinic in Carindale, a school in Mount Gravatt, an office in Brisbane CBD, or a gym in Springwood, my goal is to deliver a spotless environment where people feel comfortable and productive. I take pride in building long-term relationships with clients through consistent results, clear communication, and a commitment to excellence.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contactus"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-md text-white font-medium bg-primary transition-colors hover:bg-primary/90"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href="tel:+61404616261"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-md text-zinc-900 font-medium bg-white border border-zinc-200 transition-colors hover:bg-zinc-50"
                  >
                    Call 0404 616 261
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 text-center">
              Why Brisbane Businesses Trust Moppit Clean
            </h2>
            <p className="mt-3 text-zinc-600 text-center max-w-2xl mx-auto">
              We're more than just a cleaning service—we're your trusted partner in creating safe, hygienic, and welcoming environments across Brisbane.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up hover:shadow-md transition-shadow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">Fully Licensed & Insured</h3>
                <p className="mt-2 text-sm text-zinc-700 leading-6">
                  Public liability insurance and all necessary certifications for your peace of mind and compliance.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up anim-delay-100 hover:shadow-md transition-shadow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">Police-Checked Staff</h3>
                <p className="mt-2 text-sm text-zinc-700 leading-6">
                  All our cleaning professionals undergo thorough police checks and background verification for your security.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up anim-delay-200 hover:shadow-md transition-shadow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">Industry Expertise</h3>
                <p className="mt-2 text-sm text-zinc-700 leading-6">
                  Specialized knowledge in healthcare infection control, educational safety standards, and commercial cleaning.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up anim-delay-300 hover:shadow-md transition-shadow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">Available 24/7</h3>
                <p className="mt-2 text-sm text-zinc-700 leading-6">
                  Emergency cleaning services and support available any time, day or night, across all Brisbane suburbs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12 sm:py-16 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 text-center">
              Our Approach to Cleaning Excellence
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up">
                <h3 className="text-xl font-semibold text-zinc-900">Sector Expertise</h3>
                <p className="mt-3 text-zinc-700 leading-7">
                  We understand that each sector has unique challenges—whether it's infection control in Brisbane healthcare facilities, safety and compliance in schools, professionalism in CBD offices, or hygiene and ambiance in fitness centres. Our tailored solutions are designed to meet these demands with precision, reliability, and care.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up anim-delay-100">
                <h3 className="text-xl font-semibold text-zinc-900">Comprehensive Services</h3>
                <p className="mt-3 text-zinc-700 leading-7">
                  From daily maintenance and deep cleaning to specialised services like window cleaning, roof and solar panel care, and driveway pressure washing across Brisbane, we offer a complete suite backed by best practices, modern equipment, and fully vetted staff.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up anim-delay-200">
                <h3 className="text-xl font-semibold text-zinc-900">Our Mission</h3>
                <p className="mt-3 text-zinc-700 leading-7">
                  Our mission is simple: deliver consistent results that go beyond appearances—helping protect health, improve productivity, and elevate the reputation of your Brisbane facility. With Moppit, you gain a partner who values accountability, attention to detail, and long‑term relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 text-center">
              Proudly Serving Brisbane
            </h2>
            <p className="mt-3 text-zinc-600 text-center max-w-2xl mx-auto">
              Based in Chandler, we provide professional cleaning services to businesses and facilities across all Brisbane suburbs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Brisbane CBD
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Chandler
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Carindale
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Mount Gravatt
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Springwood
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                South Brisbane
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                North Brisbane
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                East Brisbane
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                West Brisbane
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Fortitude Valley
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                South Bank
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Woolloongabba
              </span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Ready to Experience the Moppit Clean Difference?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Join hundreds of satisfied clients across Brisbane who trust us with their cleaning needs. Get your free quote today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contactus"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md text-primary font-medium bg-white transition-colors hover:bg-zinc-100"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+61404616261"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md text-white font-medium bg-white/10 border border-white/20 transition-colors hover:bg-white/20"
              >
                Call 0404 616 261
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}