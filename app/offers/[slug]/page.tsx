// app/offers/[slug]/page.tsx

import { offers } from "@/app/data/offers";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // unwrap params Promise
  const { slug } = await params;

  const offer = offers.find((o) => o.slug === slug);

  if (!offer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-10">
        <Image
          src={offer.image}
          alt={offer.title}
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold">{offer.title}</h1>

        <p className="mt-4 text-gray-700 text-lg">{offer.description}</p>

        <div className="mt-8 flex gap-4">
          <Link
            href={`/booking?service=${encodeURIComponent(offer.title)}`}
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
