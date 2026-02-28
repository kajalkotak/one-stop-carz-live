// app/components/Footer.tsx

"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-gray-300 py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto  px-6 grid md:grid-cols-4 gap-8 ">
        {/* brand */}
        <div>
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
        <div>
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
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-l">
            📍 Plot no 9, Premvati Circle, opp. Welcare Hospital, Atladara,
            Vadodara, Gujarat 390010
          </p>
          <p className="text-l mt-2">📞 Booking Desk: +91 94298 05368</p>
          <p className="text-l">📞 Manager: +91 94298 05368</p>
        </div>

        {/* CTA */}
        <div>
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
