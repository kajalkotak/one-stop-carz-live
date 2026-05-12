import { notFound } from "next/navigation";
import Link from "next/link";
import { packages } from "@/app/data/packages";

/* ----------------------------------
   STATIC PARAMS
----------------------------------- */

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

/* ----------------------------------
   PAGE
----------------------------------- */

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const found = packages.find((p) => p.slug === slug);

  if (!found) {
    notFound();
  }

  const item = found;

  function getPosterPath() {
    if (item.category === "amc") {
      return `/amc/${item.slug.replace("-amc", "").toUpperCase()}.png`;
    }

    if (item.category === "membership") {
      return `/membership/${item.slug}.png`;
    }

    if (item.category === "package") {
      return `/packages/${item.slug}.png`;
    }

    if (item.category === "detailing") {
      return `/${item.category}/${item.slug}.png`;
    }

    return null;
  }

  const poster = getPosterPath();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow ">
        <div className="border rounded-2xl p-5 shadow-sm">
          <h1 className="text-4xl font-bold">{item.title}</h1>

          {item.subtitle && (
            <p className="mt-2 text-gray-500 text-lg">{item.subtitle}</p>
          )}

          {poster && (
            <div className="my-10">
              <img
                src={poster}
                alt={item.title}
                className="w-[85%] sm:w-[70%] md:w-[60%] mx-auto rounded-xl object-contain"
              />
            </div>
          )}

          <p className="mt-4 text-gray-700">{item.shortDesc}</p>

          <div className="mt-8  p-6 bg-gray-50">
            {item.actualPrice && (
              <>
                <p className="text-sm line-through text-gray-400">
                  ₹{item.actualPrice} +GST
                </p>

                {item.offerPrice && (
                  <p className="text-3xl font-bold text-red-600">
                    ₹{item.offerPrice}{" "}
                    <span className="text-sm text-gray-500">+GST</span>
                  </p>
                )}
              </>
            )}

            {item.petrolOfferPrice && (
              <div className="mt-4">
                {item.petrolActualPrice && (
                  <p className="text-sm line-through text-gray-400">
                    Petrol: ₹{item.petrolActualPrice} +GST
                  </p>
                )}

                <p className="text-xl font-semibold text-red-600">
                  Petrol: ₹{item.petrolOfferPrice}
                  <span className="text-sm text-gray-500 ml-2">+GST</span>
                </p>
              </div>
            )}

            {item.dieselOfferPrice && (
              <div className="mt-2">
                {item.dieselActualPrice && (
                  <p className="text-sm line-through text-gray-400">
                    Diesel: ₹{item.dieselActualPrice} +GST
                  </p>
                )}

                <p className="text-xl font-semibold text-red-600">
                  Diesel: ₹{item.dieselOfferPrice}
                  <span className="text-sm text-gray-500 ml-2">+GST</span>
                </p>
              </div>
            )}

            {item.duration && (
              <p className="mt-3 text-sm text-gray-600">
                Duration: {item.duration}
              </p>
            )}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Package Details</h2>

            <p className="mt-3 text-gray-700">{item.description}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">What’s Included</h3>

            <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc pl-6 text-gray-700">
              {item.includes.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                href={`/booking?service=${encodeURIComponent(item.title)}`}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
              >
                Book Now
              </Link>

              <Link
                href="/offers"
                className="border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
              >
                Back to Offers
              </Link>
            </div>
          </div>
        </div>

        {/* DETAILING CARDS INSIDE CERAMIC PAGE */}
        {/* 
        {item.slug === "ceramic-coating-offer" && (
          <div className="mt-14">
            <h2 className="text-3xl font-bold text-center">
              Premium <span className="text-red-600">Detailing Offers</span>
            </h2>

            <p className="mt-3 text-center text-gray-600">
              Choose from our premium ceramic coating solutions.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              {packages
                .filter((pkg) => pkg.slug === "3m" || pkg.slug === "vista")
                .map((pkg) => (
                  <div
                    key={pkg.slug}
                    className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
                  >
                    <img
                      src={`/detailing/${pkg.slug}.png`}
                      alt={pkg.title}
                      className="w-full h-64 object-contain rounded-lg"
                    />

                    <h3 className="mt-5 text-2xl font-bold">{pkg.title}</h3>

                    <p className="mt-3 text-gray-600">{pkg.shortDesc}</p>

                    <div className="mt-5">
                      <p className="text-sm line-through text-gray-400">
                        ₹{pkg.actualPrice} +GST
                      </p>

                      <p className="text-3xl font-bold text-red-600">
                        ₹{pkg.offerPrice}
                        <span className="text-sm text-gray-500 ml-2">+GST</span>
                      </p>
                    </div>

                    <Link
                      href={`/offers/${pkg.slug}`}
                      className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        )} */}

        {/* FULL 3M + VISTA DETAILS */}

        {item.slug === "ceramic-coating-offer" && (
          <div className="mt-16 space-y-24">
            {/* 3M DETAILS */}

            {/* {packages
              .filter((pkg) => pkg.slug === "3m")
              .map((pkg) => (
                <div
                  key={pkg.slug}
                  className="border rounded-2xl p-8 shadow-sm"
                >
                  <img
                    src={`/detailing/${pkg.slug}.png`}
                    alt={pkg.title}
                    className="w-full max-w-2xl mx-auto rounded-xl object-contain"
                  />

                  <h2 className="mt-8 text-4xl font-bold">{pkg.title}</h2>

                  <p className="mt-4 text-gray-600 text-lg">
                    {pkg.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-gray-400 line-through text-xl">
                      ₹{pkg.actualPrice} +GST
                    </p>

                    <p className="text-5xl font-bold text-red-600">
                      ₹{pkg.offerPrice}
                      <span className="text-lg text-gray-500 ml-2">+GST</span>
                    </p>
                  </div>

                  <ul className="mt-8 grid md:grid-cols-2 gap-3 list-disc pl-6 text-gray-700">
                    {pkg.includes.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  <div className="mt-10 flex gap-4 flex-wrap">
                    <Link
                      href={`/booking?service=${encodeURIComponent(pkg.title)}`}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
                    >
                      Book Now
                    </Link>

                    <Link
                      href="/offers"
                      className="border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
                    >
                      Back to Offers
                    </Link>
                  </div>
                </div>
              ))} */}

            {/* VISTA DETAILS */}

            {packages
              .filter((pkg) => pkg.slug === "vista")
              .map((pkg) => (
                <div
                  key={pkg.slug}
                  className="border rounded-2xl p-5 shadow-sm"
                >
                  <h2 className="mt-8 text-4xl font-bold mb-10">{pkg.title}</h2>
                  <img
                    src={`/detailing/${pkg.slug}.png`}
                    alt={pkg.title}
                    className="w-full max-w-2xl mx-auto rounded-xl object-contain"
                  />

                  <p className="mt-4 text-gray-600 text-lg">
                    {pkg.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-gray-400 line-through text-xl">
                      ₹{pkg.actualPrice} +GST
                    </p>

                    <p className="text-3xl font-bold text-red-600">
                      ₹{pkg.offerPrice}
                      <span className="text-lg text-gray-500 ml-2">+GST</span>
                    </p>
                  </div>

                  <ul className="mt-8 grid md:grid-cols-2 gap-3 list-disc pl-6 text-gray-700">
                    {pkg.includes.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  <div className="mt-10 flex gap-4 flex-wrap">
                    <Link
                      href={`/booking?service=${encodeURIComponent(pkg.title)}`}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
                    >
                      Book Now
                    </Link>

                    <Link
                      href="/offers"
                      className="border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
                    >
                      Back to Offers
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </main>
  );
}
