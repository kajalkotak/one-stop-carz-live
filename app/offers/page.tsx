// app/offeres/page.tsx

import Link from "next/link";
import { packages } from "@/app/data/packages";

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Our <span className="text-red-600">Offers & Packages</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {packages.map((item) => (
            <Link
              key={item.slug}
              href={`/offers/${item.slug}`}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>

              {item.duration && (
                <p className="text-sm text-gray-500">{item.duration}</p>
              )}

              <p className="mt-2 text-gray-600">{item.shortDesc}</p>

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
