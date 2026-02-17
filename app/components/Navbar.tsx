// app/components/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="sticky top-0 z-50 bg-black text-white shadow relative"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="One Stop Carz Logo"
            width={140}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* desktop menu */}

        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/offers"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Offer
          </Link>
          <Link
            href="/services"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Service
          </Link>
          <Link
            href="/booking"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Booking
          </Link>
          <Link
            href="/contact"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Contact Us
          </Link>

          <Link
            href="/gallery"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Gallery
          </Link>

          <Link
            href="/booking"
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md font-semibold"
          >
            Book Now
          </Link>
        </nav>

        {/* mobile button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-700 shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-5 text-lg">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-red-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/offers"
              onClick={() => setOpen(false)}
              className="hover:text-red-500 transition-colors duration-200"
            >
              Offer
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="hover:text-red-500 transition-colors duration-200"
            >
              Service
            </Link>
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="hover:text-red-500 transition-colors duration-200"
            >
              Booking
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-red-500 transition-colors duration-200"
            >
              Contact Us
            </Link>

            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 bg-red-600 text-center py-3 rounded-md font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
