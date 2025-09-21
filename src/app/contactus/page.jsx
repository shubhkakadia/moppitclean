"use client";

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.target);
    const templateParams = {
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      business_name: formData.get('businessName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      post_code: formData.get('postCode'),
      industry: formData.get('industry'),
      type_of_cleaning: formData.get('type'),
      message: formData.get('message')
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      setIsSubmitting(false);
      setSubmitted(true);
      event.target.reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setError('Failed to send message. Please try again or contact us directly.');
    });
  }

  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Moppit Clean - Get Your Free Quote Today",
    "description": "Contact Moppit Clean for professional cleaning services in Brisbane. Get a free quote for healthcare, educational, office, or fitness center cleaning.",
    "url": "https://moppitclean.com.au/contactus",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Moppit Clean",
      "description": "Premium, eco-friendly cleaning services in Brisbane",
      "url": "https://moppitclean.com.au",
      "telephone": "+61-XXX-XXX-XXX",
      "email": "info@moppitclean.com.au",
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
      "openingHours": "Mo-Fr 08:00-18:00",
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "AUD"
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
          "name": "Contact Us",
          "item": "https://moppitclean.com.au/contactus"
        }
      ]
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageStructuredData) }}
      />
      <Navbar />
      <main>
        <section className="py-14 sm:py-20 bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 animate-slide-up">
              Contact Us
            </h1>
            <p className="mt-3 text-zinc-700 animate-fade-in anim-delay-100">
              Tell us about your space and preferred schedule. We’ll get back to
              you quickly with next steps.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {submitted && (
              <div className="mb-6 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 animate-fade-in">
                Thanks! Your enquiry has been received. We'll be in touch
                shortly.
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-red-900 animate-fade-in">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm animate-scale-in"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postCode"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Post Code
                  </label>
                  <input
                    id="postCode"
                    name="postCode"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select industry</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Office / Corporate</option>
                    <option>Fitness Centre</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Choose Type Of Cleaning
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select type</option>
                    <option>Standard Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Window Cleaning</option>
                    <option>Roof & Solar Panels</option>
                    <option>Pressure Wash Driveway</option>
                    <option>Odour Management</option>
                    <option>Disinfection Services</option>
                    <option>Steam Floor Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Tell us about your cleaning needs, schedule preferences, or any specific requirements..."
                />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Submit Enquiry"}
                </button>
                <p className="text-sm text-zinc-500">
                  We respond within 1 business day.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
