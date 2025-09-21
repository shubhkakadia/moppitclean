import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Moppit Clean - Brisbane's Trusted Cleaning Experts",
    "description": "Meet Akshay S., founder of Moppit Clean. Learn about our mission to deliver pristine spaces with specialized cleaning services for healthcare, educational, office, and fitness facilities in Brisbane.",
    "url": "https://moppitclean.com.au/aboutus",
    "mainEntity": {
      "@type": "Organization",
      "name": "Moppit Clean",
      "description": "Premium, eco-friendly cleaning services in Brisbane specializing in healthcare, educational, office, and fitness center cleaning.",
      "url": "https://moppitclean.com.au",
      "logo": "https://moppitclean.com.au/moppit-logo-1.png",
      "founder": {
        "@type": "Person",
        "name": "Akshay S.",
        "jobTitle": "Founder",
        "description": "Founder of Moppit Clean, built on the belief that every space deserves to shine with a strong focus on reliability, attention to detail, and customer satisfaction."
      },
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      },
      "areaServed": "Brisbane",
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
      "mission": "Deliver consistent results that go beyond appearances—helping protect health, improve productivity, and elevate the reputation of your facility.",
      "slogan": "Pristine Spaces, Made Simple"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
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
                <div className="relative rounded-2xl bg-white p-4">
                  <Image
                    src="/akshay.jpg"
                    alt="Akshay S., Founder of Moppit Clean"
                    width={520}
                    height={520}
                    className="w-full h-auto rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="md:col-span-3 order-2 md:order-1 animate-slide-up">
                <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900">About Moppit Clean</h1>
                <p className="mt-5 text-zinc-700 leading-7">
                  I’m Akshay S., the founder of Moppit Clean, built on the belief that every space deserves to shine. With a strong focus on reliability, attention to detail, and customer satisfaction, I provide professional cleaning services that go beyond the surface. Whether it’s an office, school, healthcare facility, or private workspace, my goal is to deliver a spotless environment where people feel comfortable and productive. I take pride in building long-term relationships with clients through consistent results, clear communication, and a commitment to excellence.
                </p>
                <p className="mt-4 text-zinc-700 leading-7 anim-delay-100 animate-fade-in">
                  At Moppit, we are more than just a cleaning service—we are your trusted partner in creating safe, hygienic, and welcoming environments. Specializing in healthcare facilities, educational institutions, offices, and fitness centres, we bring deep industry knowledge and a meticulous approach to every job.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up">
                <h2 className="text-xl font-semibold text-zinc-900">Sector Expertise</h2>
                <p className="mt-3 text-zinc-700 leading-7">
                  We understand that each sector has unique challenges—whether it’s infection control in healthcare, safety and compliance in schools, professionalism in offices, or hygiene and ambiance in fitness centres. Our tailored solutions are designed to meet these demands with precision, reliability, and care.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up anim-delay-100">
                <h2 className="text-xl font-semibold text-zinc-900">Comprehensive Services</h2>
                <p className="mt-3 text-zinc-700 leading-7">
                  From daily maintenance and deep cleaning to specialised services like window cleaning, roof and solar panel care, and driveway pressure washing, we offer a complete suite backed by best practices, modern equipment, and fully vetted staff.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-slide-up anim-delay-200">
                <h2 className="text-xl font-semibold text-zinc-900">Our Mission</h2>
                <p className="mt-3 text-zinc-700 leading-7">
                  Our mission is simple: deliver consistent results that go beyond appearances—helping protect health, improve productivity, and elevate the reputation of your facility. With Moppit, you gain a partner who values accountability, attention to detail, and long‑term relationships.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
