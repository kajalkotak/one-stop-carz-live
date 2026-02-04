// app/services/page.tsx

import Link from "next/link";
import { services } from "@/app/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center">
          Our <span className="text-red-600">Services</span>
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Professional car care solutions delivered by expert technicians at One
          Stop Carz.
        </p>

        {/* GRID */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-3 text-gray-600">{service.shortDesc}</p>

              <p className="mt-3 text-sm text-gray-500 flex-grow">
                {service.description}
              </p>

              <div className="mt-6">
                <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-md font-semibold">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
