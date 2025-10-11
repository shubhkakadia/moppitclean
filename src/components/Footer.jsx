"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);

  function handleNewsletterSubmit(event) {
    event.preventDefault();
    setIsSubscribing(true);
    setError(null);

    const formData = new FormData(event.target);
    const email = formData.get("email");

    const templateParams = {
      email: email,
      subscribed_at: new Date().toISOString(),
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBER_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log(
          "Newsletter subscription sent successfully:",
          response.status,
          response.text
        );
        setIsSubscribing(false);
        setSubscribed(true);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error sending newsletter subscription:", error);
        setIsSubscribing(false);
        setError("Failed to subscribe. Please try again.");
      });
  }

  return (
    <footer className="mt-16 bg-secondary">
      <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/35" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-zinc-700">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-semibold text-lg text-primary">
                <Image
                  src="/moppit-logo-1.png"
                  alt="Moppit Clean - Professional Cleaning Services Brisbane"
                  width={75}
                  height={32}
                />
              </Link>
            </div>
            <p className="text-sm text-zinc-600 leading-6 mb-4">
              Professional, eco-friendly cleaning services in Brisbane.
              Licensed, insured, and satisfaction guaranteed. Serving
              healthcare, educational, office, and fitness facilities.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+61404616261"
                    className="text-zinc-600 hover:text-primary transition-colors"
                  >
                    0404 616 261
                  </a>
                  <span className="text-zinc-500 text-xs block">
                    Available 24/7
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@moppitclean.com.au"
                  className="text-zinc-600 hover:text-primary transition-colors"
                >
                  contact@moppitclean.com.au
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div className="text-zinc-600">
                  1625 Old Cleveland Road
                  <br />
                  Chandler, Brisbane QLD 4155
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 font-bold">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <p className="text-zinc-600 transition-colors hover:text-primary">
                  Healthcare Cleaning
                </p>
              </li>
              <li>
                <p className="text-zinc-600 transition-colors hover:text-primary">
                  Educational Cleaning
                </p>
              </li>
              <li>
                <p className="text-zinc-600 transition-colors hover:text-primary">
                  Office Cleaning
                </p>
              </li>
              <li>
                <p className="text-zinc-600 transition-colors hover:text-primary">
                  Fitness Centre Cleaning
                </p>
              </li>
              <li>
                <p className="text-zinc-600 transition-colors hover:text-primary">
                  Window Cleaning
                </p>
              </li>
              <li>
                <p className="text-zinc-600 transition-colors hover:text-primary">
                  Deep Cleaning
                </p>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 font-bold">
              Areas We Serve
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-zinc-600">Brisbane CBD</li>
              <li className="text-zinc-600">Chandler</li>
              <li className="text-zinc-600">Carindale</li>
              <li className="text-zinc-600">Mount Gravatt</li>
              <li className="text-zinc-600">Springwood</li>
              <li className="text-zinc-600">South Brisbane</li>
              <li className="text-zinc-600">North Brisbane</li>
              <li className="text-zinc-600">
                <span className="text-primary">+ All Brisbane Suburbs</span>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/aboutus"
                  className="text-zinc-600 transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-zinc-600 transition-colors hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-zinc-600 transition-colors hover:text-primary"
                >
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-10 rounded-xl border border-zinc-200 bg-white/70 backdrop-blur p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h5 className="text-sm font-medium text-zinc-800">
                Get cleaning tips and exclusive offers
              </h5>
              <p className="text-xs text-zinc-500 mt-1">
                Join our Brisbane newsletter for industry insights and special
                deals
              </p>
            </div>

            {subscribed && (
              <div className="text-sm text-emerald-600 font-medium animate-fade-in">
                ✓ Thanks for subscribing!
              </div>
            )}

            {error && (
              <div className="text-sm text-red-600 font-medium animate-fade-in">
                {error}
              </div>
            )}

            {!subscribed && (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex gap-2 w-full sm:w-auto"
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full sm:w-72 h-10 rounded-md border border-zinc-300 px-3 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="cursor-pointer h-10 px-4 rounded-md text-white text-sm font-medium shadow-sm bg-primary transition-colors hover:bg-primary/90 disabled:opacity-60 whitespace-nowrap"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-zinc-200 text-sm text-zinc-600 gap-2">
          <p>
            © {new Date().getFullYear()} Moppit Clean. MOPPIT CLEAN PTY. LTD.
            <br className="sm:hidden" />
            <span className="sm:ml-1">ABN 60688480202</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-zinc-500">
              Brisbane's Trusted Cleaning Experts
            </p>
            <p className="hidden sm:block text-zinc-400">•</p>
            <p>
              Developed by{" "}
              <a
                href="https://shubhkakadia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Shubh Kakadia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
