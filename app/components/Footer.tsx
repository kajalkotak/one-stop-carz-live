// app/components/Footer.tsx

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-gray-300 py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
        {/* brand */}
        <div className="col-span-12 md:col-span-4">
          <h3 className="text-3xl font-bold text-white">One Stop Carz</h3>
          <h4 className="text-xl font-semibold text-red-500 mt-3">
            Multi Brand Car Workshop
          </h4>
          <p className="mt-3 text-xl text-gray-400">
            Complete car care solutions – servicing, detailing, insurance claims
            and maintenance packages in one place.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="col-span-12 md:col-span-2">
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <div className="space-y-2 text-l flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/offers">Offer</Link>
            <Link href="/services">Service</Link>
            <Link href="/booking">Booking</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        {/* CONTACT */}
        {/* CONTACT */}
        <div className="col-span-12 md:col-span-3">
          <h4 className="font-semibold text-white mb-3">Contact</h4>

          {/* Address */}
          <p className="flex items-start gap-2 text-l">
            <FaMapMarkerAlt className="text-lg mt-1 min-w-[18px]" />
            Premvati Circle, opp. Welcare Hospital, Atladara, Vadodara, Gujarat
            390010
          </p>

          {/* Booking */}
          <p className="flex items-center gap-2 text-l mt-2">
            <FaPhoneAlt className="text-lg min-w-[18px]" />
            Booking :
            <a href="tel:8460692482" className="hover:text-red-500 ml-1">
              8460692482
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.instagram.com/onestopcarz.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100066669783576"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-2xl hover:text-blue-500" />
            </a>

            <a
              href="https://share.google/KjNmhf7JjOGRTuBQG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="text-2xl hover:text-red-500" />
            </a>

            <a
              href="https://wa.me/918460692482"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl hover:text-green-500" />
            </a>

            <a href="mailto:customercare.onestopcarz@gmail.com">
              <FaEnvelope className="text-2xl hover:text-yellow-400" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="col-span-12 md:col-span-3">
          <h4 className="font-semibold text-white mb-3">Book Now</h4>
          <p className="text-l mb-4">
            Call us or book your service online instantly.
          </p>
          <Link href="/booking">
            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md text-white font-semibold">
              Book Service
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center text-xl text-gray-500 mt-10">
        © {new Date().getFullYear()} One Stop Carz. All rights reserved.
      </div>
    </motion.footer>
  );
}
