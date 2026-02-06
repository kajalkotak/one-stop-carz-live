import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { packages } from "@/app/data/packages";

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default function OfferDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = packages.find((p) => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  const poster =
    item.category === "amc"
      ? `/amc/${item.slug.replace("-amc", "")}.png`
      : item.category === "membership"
        ? `/membership/${item.slug}.png`
        : `/packages/${item.slug}.png`;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow">
        <h1 className="text-4xl font-bold">{item.title}</h1>

        {item.subtitle && (
          <p className="mt-2 text-gray-500 text-lg">{item.subtitle}</p>
        )}

        {/* IMAGE */}
        <div className="my-10">
          <Image
            src={poster}
            alt={item.title}
            width={1200}
            height={1600}
            className="w-full rounded-xl object-contain"
            priority
          />
        </div>

        <p className="mt-4 text-gray-700">{item.shortDesc}</p>

        {/* PRICE */}
        <div className="mt-8 border rounded-lg p-6 bg-gray-50">
          {item.actualPrice && (
            <>
              <p className="text-sm line-through text-gray-400">
                ₹{item.actualPrice}
              </p>
              <p className="text-3xl font-bold text-red-600">
                ₹{item.offerPrice}
              </p>
            </>
          )}

          {item.petrolOfferPrice && (
            <div className="mt-4">
              <p className="text-sm line-through text-gray-400">
                Petrol: ₹{item.petrolActualPrice}
              </p>
              <p className="text-xl font-semibold text-red-600">
                Petrol: ₹{item.petrolOfferPrice}
              </p>
            </div>
          )}

          {item.dieselOfferPrice && (
            <div className="mt-2">
              <p className="text-sm line-through text-gray-400">
                Diesel: ₹{item.dieselActualPrice}
              </p>
              <p className="text-xl font-semibold text-red-600">
                Diesel: ₹{item.dieselOfferPrice}
              </p>
            </div>
          )}

          {item.duration && (
            <p className="mt-3 text-sm text-gray-600">
              Duration: {item.duration}
            </p>
          )}
        </div>

        {/* INCLUDES */}
        <ul className="mt-10 grid md:grid-cols-2 gap-3 list-disc pl-6 text-gray-700">
          {item.includes.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        <div className="mt-10 flex gap-4">
          <Link
            href={`/booking?service=${encodeURIComponent(item.title)}`}
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Book Now
          </Link>

          <Link
            href="/offers"
            className="border px-6 py-3 rounded-md font-semibold"
          >
            Back to Offers
          </Link>
        </div>
      </div>
    </main>
  );
}
