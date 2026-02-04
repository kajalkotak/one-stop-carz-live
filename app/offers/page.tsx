// app/offeres/page.tsx

import Link from "next/link";
import { offers } from "@/app/data/offers";

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Our <span className="text-red-600">Offers</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <Link
              key={offer.slug}
              href={`/offers/${offer.slug}`}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
            >
              <h3 className="text-xl font-semibold">{offer.title}</h3>

              <p className="mt-2 text-gray-600">{offer.shortDesc}</p>

              <span className="mt-4 inline-block text-red-600 font-semibold">
                View Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
