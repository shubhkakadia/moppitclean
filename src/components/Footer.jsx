"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-zinc-700">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="font-semibold text-lg text-primary items-center gap-2"
                >
                  <Image
                    src="/moppit-logo-1.png"
                    alt="MoppitClean"
                    width={75}
                    height={32}
                  />
                </Link>
              </div>
            </div>
            <p className="text-sm text-zinc-600 leading-6 max-w-xs">
              Premium, eco-friendly cleaning done right. Licensed, insured, and
              satisfaction guaranteed.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 underline font-bold">
              INDUSTRIES WE SERVE
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div className="text-zinc-600 transition-colors hover:text-primary">
                  HealthCare Centre Cleaning
                </div>
              </li>
              <li>
                <div className="text-zinc-600 transition-colors hover:text-primary">
                  Educational Facilities Cleaning
                </div>
              </li>
              <li>
                <div className="text-zinc-600 transition-colors hover:text-primary">
                  Office Cleaning
                </div>
              </li>
              <li>
                <div className="text-zinc-600 transition-colors hover:text-primary">
                  Physical &amp; Mental Fitness Centres Cleaning
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 underline font-bold">
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
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 underline font-bold">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                Phone:{" "}
                <a
                  href="tel:+61404616261"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +61 404 616 261
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@moppitclean.com.au"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  contact@moppitclean.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-zinc-200 bg-white/70 backdrop-blur p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h5 className="text-sm font-medium text-zinc-800">
                Get cleaning tips and exclusive offers
              </h5>
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
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="cursor-pointer h-10 px-4 rounded-md text-white text-sm font-medium shadow-sm bg-primary transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-zinc-200 text-sm text-zinc-600">
          <p>
            © {new Date().getFullYear()} MoppitClean. MOPPIT CLEAN PTY. LTD. ABN
            – 60688480202
          </p>
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
    </footer>
  );
}
