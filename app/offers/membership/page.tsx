import Link from "next/link";
import { packages } from "@/app/data/packages";

export default function MembershipPage() {
  const membershipPlans = packages.filter((p) => p.category === "membership");

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center">
          Membership <span className="text-red-600">Plans</span>
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Unlock exclusive benefits with our long-term membership plans.
        </p>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {membershipPlans.map((plan) => (
            <div
              key={plan.slug}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col"
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold">{plan.title}</h3>

              {/* SHORT DESC */}
              <p className="mt-2 text-gray-600">{plan.shortDesc}</p>

              {/* PRICE */}
              <div className="mt-4">
                {plan.actualPrice && (
                  <p className="text-sm line-through text-gray-400">
                    ₹{plan.actualPrice}
                  </p>
                )}

                {plan.offerPrice && (
                  <p className="text-2xl font-bold text-red-600">
                    ₹{plan.offerPrice}
                  </p>
                )}

                {plan.duration && (
                  <p className="mt-1 text-sm text-gray-500">
                    Duration: {plan.duration}
                  </p>
                )}
              </div>

              {/* CTA */}
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
