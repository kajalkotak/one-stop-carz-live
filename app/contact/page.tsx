// app/contact/page.tsx

"use client";

import Link from "next/link";

const PHONE_NUMBER = "+91 8460692482";
const WHATSAPP_NUMBER = "8460692482";

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
          {/* CONTACT NUMBERS */}
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">Contact</h3>

            <div className="mt-4 space-y-3 text-gray-600">
              <p>
                <span className="font-semibold">Booking : </span>
                <a href="tel:8460692482" className="text-red-600 font-semibold">
                  8460692482
                </a>
              </p>

              <p>
                <span className="font-semibold">Workshop Manager : </span>
                <a href="tel:9624702102" className="text-red-600 font-semibold">
                  9624702102
                </a>
              </p>

              <p>
                <span className="font-semibold">Bodyshop Manager : </span>
                <a href="tel:9624702104" className="text-red-600 font-semibold">
                  9624702104
                </a>
              </p>
            </div>
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
              Premvati Circle,
              <br />
              opp. Welcare Hospital,
              <br />
              Atladara, Vadodara,Gujarat 390010
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
