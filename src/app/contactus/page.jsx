"use client";

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
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
      setError('Failed to send message. Please try again or contact us directly at 0404 616 261.');
    });
  }

  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://moppitclean.com.au/contactus#webpage",
        "name": "Contact Moppit Clean Brisbane - Free Cleaning Quote",
        "description": "Contact Moppit Clean for professional cleaning services in Brisbane. Get a free quote for healthcare, educational, office, or fitness center cleaning.",
        "url": "https://moppitclean.com.au/contactus",
        "isPartOf": {
          "@id": "https://moppitclean.com.au#website"
        },
        "breadcrumb": {
          "@id": "https://moppitclean.com.au/contactus#breadcrumb"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://moppitclean.com.au#business",
        "name": "Moppit Clean",
        "description": "Premium, eco-friendly cleaning services in Brisbane",
        "url": "https://moppitclean.com.au",
        "telephone": "+61404616261",
        "email": "contact@moppitclean.com.au",
        "image": "https://moppitclean.com.au/cleaning-illustration.jpg",
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
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "currenciesAccepted": "AUD"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://moppitclean.com.au/contactus#breadcrumb",
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
    ]
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-5xl font-semibold text-zinc-900 animate-slide-up">
                Get Your Free Cleaning Quote in Brisbane
              </h1>
              <p className="mt-4 text-lg text-zinc-700 max-w-2xl mx-auto animate-fade-in anim-delay-100">
                Professional cleaning services for healthcare, educational, office, and fitness facilities across Brisbane. Available 24/7.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="tel:+61404616261"
                className="flex items-center gap-3 rounded-lg border border-primary/20 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-primary animate-slide-up"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide">Call Us 24/7</p>
                  <p className="font-semibold text-zinc-900">0404 616 261</p>
                </div>
              </a>

              <a
                href="mailto:contact@moppitclean.com.au"
                className="flex items-center gap-3 rounded-lg border border-primary/20 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-primary animate-slide-up anim-delay-100"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide">Email Us</p>
                  <p className="font-semibold text-zinc-900 text-sm">contact@moppitclean.com.au</p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-white p-4 shadow-sm animate-slide-up anim-delay-200">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide">Visit Us</p>
                  <p className="font-semibold text-zinc-900 text-sm">Chandler, Brisbane</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-white p-4 shadow-sm animate-slide-up anim-delay-300">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide">Availability</p>
                  <p className="font-semibold text-zinc-900 text-sm">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
                Request Your Free Quote
              </h2>
              <p className="mt-2 text-zinc-600">
                Fill out the form below and we'll respond within 1 business day with a customized quote for your Brisbane facility.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 animate-fade-in">
                <strong>Thanks for contacting Moppit Clean!</strong> Your enquiry has been received. We'll get back to you within 1 business day with your free quote.
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-red-900 animate-fade-in">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm animate-scale-in"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    First Name <span className="text-red-500">*</span>
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
                    Last Name <span className="text-red-500">*</span>
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
                    Business Name <span className="text-red-500">*</span>
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
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    placeholder="0404 616 261"
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postCode"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Brisbane Post Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="postCode"
                    name="postCode"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    placeholder="4000"
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Industry / Facility Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select industry</option>
                    <option>Healthcare / Medical</option>
                    <option>Education / Childcare</option>
                    <option>Office / Corporate</option>
                    <option>Fitness Centre / Gym</option>
                    <option>Residential</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Type Of Cleaning Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select service type</option>
                    <option>Standard Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Window Cleaning</option>
                    <option>Roof & Solar Panels</option>
                    <option>Pressure Washing</option>
                    <option>Odour Management</option>
                    <option>Disinfection Services</option>
                    <option>Steam Floor Cleaning</option>
                    <option>Multiple Services</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-800"
                >
                  Tell Us About Your Cleaning Needs <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Please describe your facility size, cleaning frequency needed (daily, weekly, monthly), specific areas requiring attention, and any special requirements..."
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Your Request..." : "Get Free Quote"}
                </button>
                <p className="text-sm text-zinc-600">
                  <strong>Fast Response:</strong> We respond within 1 business day
                </p>
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                By submitting this form, you agree to be contacted by Moppit Clean regarding your cleaning service enquiry. We respect your privacy and will never share your information.
              </p>
            </form>

            {/* Additional Contact Section */}
            <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-zinc-900">
                Prefer to Contact Us Directly?
              </h3>
              <p className="mt-2 text-zinc-600">
                We're based in Chandler and service all Brisbane suburbs including Carindale, Mount Gravatt, Springwood, and surrounding areas.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900">Call or Text (24/7)</p>
                    <a href="tel:+61404616261" className="text-primary hover:underline">
                      0404 616 261
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900">Email</p>
                    <a href="mailto:contact@moppitclean.com.au" className="text-primary hover:underline">
                      contact@moppitclean.com.au
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900">Address</p>
                    <p className="text-zinc-600">
                      1625 Old Cleveland Road<br />
                      Chandler, Brisbane QLD 4155
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}