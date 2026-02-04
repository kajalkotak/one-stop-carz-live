// app/components/LimitedOfferPopup.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LimitedOfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("ceramic-popup");

    if (!alreadySeen) {
      setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("ceramic-popup", "true");
      }, 1200);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center px-4">

      <div className="bg-white max-w-lg w-full rounded-xl p-8 relative shadow-xl animate-fadeIn">

        {/* CLOSE */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        {/* CONTENT */}
        <h3 className="text-2xl font-bold text-center">
          🔥 Limited Time{" "}
          <span className="text-red-600">Ceramic Coating Offer</span>
        </h3>

        <p className="mt-4 text-center text-gray-600">
          Premium Ceramic Coating at just{" "}
          <span className="font-semibold text-black">₹9,999 + GST</span>.
          Includes FREE Elite Care Membership and Protection Combo.
        </p>

        {/* CTA */}
        <div className="mt-6 flex gap-4 justify-center">

          <Link
            href="/offers/ceramic-coating-offer"
            onClick={() => setShow(false)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold"
          >
            View Offer
          </Link>

          <Link
            href="/booking?service=Ceramic%20Coating%20Offer"
            onClick={() => setShow(false)}
            className="border px-5 py-2 rounded-md font-semibold"
          >
            Book Now
          </Link>

        </div>
      </div>
    </div>
  );
}
