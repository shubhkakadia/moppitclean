"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-secondary text-zinc-800 sticky top-0 z-50 border-b border-zinc-200/70">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-semibold text-lg text-primary flex items-center gap-2"
            >
              <Image
                src="/moppit-logo-1.png"
                alt="MoppitClean"
                width={75}
                height={32}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
          <Link
              href="/"
              className="transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className="transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/contactus"
              className="transition-colors hover:text-primary"
            >
              Contact Us
            </Link>
            <Link
              href="/contactus"
              className="px-4 py-2 rounded-md text-white shadow-sm bg-primary transition-colors hover:bg-primary/90"
            >
              Book Now
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-zinc-300 hover:bg-zinc-100 transition-all duration-200"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 mobile-menu-enter">
            <Link
              href="/"
              className="block px-2 py-2 rounded hover:bg-zinc-100 transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className="block px-2 py-2 rounded hover:bg-zinc-100 transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/contactus"
              className="block px-2 py-2 rounded hover:bg-zinc-100 transition-colors hover:text-primary"
            >
              Contact Us
            </Link>
            <Link
              href="/contactus"
              className="block text-center px-4 py-2 rounded-md text-white bg-primary transition-colors hover:bg-primary/90"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
