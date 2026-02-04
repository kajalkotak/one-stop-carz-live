// app/contact/page.tsx

"use client";

import Link from "next/link";

const PHONE_NUMBER = "+91 9904132222";
const WHATSAPP_NUMBER = "919904132222";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center">
          Contact <span className="text-red-600">Us</span>
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Get in touch with One Stop Carz for bookings, queries, or service
          support.
        </p>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {/* PHONE */}
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className="mt-2 text-gray-600">{PHONE_NUMBER}</p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-block mt-4 bg-red-600 text-white px-5 py-2 rounded-md font-semibold"
            >
              Call Now
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p className="mt-2 text-gray-600">
              Quick chat for booking & support.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-md font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* ADDRESS */}
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p className="mt-2 text-gray-600">
              Opp. Welcare Hospital,
              <br />
              Nr. Premvati Circle,
              <br />
              Atladara, Vadodara
            </p>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-20 rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps?q=One%20Stop%20Carz%20Vadodara&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
