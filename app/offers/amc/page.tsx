// app/offers/amc/
//

import Link from "next/link";
import { packages } from "@/app/data/packages";

export default function AmcPage() {
  const amcPlans = packages.filter((p) => p.category === "amc");

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          AMC <span className="text-red-600">Plans</span>
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Choose the best annual maintenance plan for your vehicle.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {amcPlans.map((plan) => (
            <div
              key={plan.slug}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-semibold">{plan.title}</h3>

              <p className="mt-2 text-gray-600">{plan.shortDesc}</p>

              {plan.fixedPrice && (
                <p className="mt-4 text-2xl font-bold text-red-600">
                  ₹{plan.fixedPrice}
                </p>
              )}

              <Link
                href={`/offers/${plan.slug}`}
                className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-center font-semibold"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
