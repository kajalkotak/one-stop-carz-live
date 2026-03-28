// app/offers/page.tsx

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

      {/* 🔥 GET IN TOUCH SECTION */}
      <section className="mt-24 bg-red-600 text-white py-16 px-6 rounded-xl max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Not Sure Which Offer is Right for You?
        </h2>

        <p className="mt-4 text-lg">
          Talk to our experts and get the best plan for your car.
        </p>

        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          {/* CALL BUTTON */}
          <a
            href="tel:9624702104"
            className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold"
          >
            📞 Call Now
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/919624702104"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </section>
    </main>
  );
}
