// app/offeres/page.tsx

import Link from "next/link";

export default function OffersPage() {
  const categories = [
    {
      title: "AMC Plans",
      slug: "amc",
      desc: "Annual Maintenance Contracts for long-term peace of mind.",
    },
    {
      title: "Service Packages",
      slug: "packages",
      desc: "One-time servicing packages for different needs.",
    },
    {
      title: "Membership Plans",
      slug: "membership",
      desc: "Exclusive care programs with priority benefits.",
    },
    {
      title: "Detailing Offer",
      slug: "detailing",
      desc: "Premium ceramic coating for any make & model with Elite Care membership and protection combo absolutely free.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold">
          Our <span className="text-red-600">Offers</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose from our AMC plans, service packages or membership programs.
        </p>

        {/* CATEGORY GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/offers/${cat.slug}`}
              className="bg-white p-10 rounded-xl shadow hover:shadow-lg transition block text-left"
            >
              <h3 className="text-2xl font-semibold">{cat.title}</h3>

              <p className="mt-3 text-gray-600">{cat.desc}</p>

              <span className="mt-6 inline-block text-red-600 font-semibold">
                View Plans →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
