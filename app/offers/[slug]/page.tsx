// app/offers/[slug]/page.tsx

import { packages } from "@/app/data/packages";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = packages.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-10">
        {/* TITLE */}
        <h1 className="text-4xl font-bold">{item.title}</h1>

        {item.duration && <p className="mt-1 text-gray-500">{item.duration}</p>}

        {/* DESCRIPTION */}
        <p className="mt-4 text-lg text-gray-700">{item.description}</p>

        {/* PRICE */}
        <div className="mt-6 text-xl font-semibold text-red-600">
          {item.fixedPrice && <>₹{item.fixedPrice}</>}
          {item.petrolPrice && <>Petrol: ₹{item.petrolPrice}</>}
          {item.dieselPrice && <> | Diesel: ₹{item.dieselPrice}</>}
        </div>

        {/* INCLUDES */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-3">What’s Included</h3>

          <ul className="list-disc pl-6 space-y-2">
            {item.includes.map((inc) => (
              <li key={inc} className="text-gray-700">
                {inc}
              </li>
            ))}
          </ul>
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex gap-4">
          <Link
            href={`/booking?service=${encodeURIComponent(item.title)}`}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            Book Now
          </Link>

          <Link href="/offers" className="border px-6 py-3 rounded-md">
            Back to Offers
          </Link>
        </div>
      </div>
    </main>
  );
}
