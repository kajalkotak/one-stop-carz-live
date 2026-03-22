import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import MechanicalPricing from "@/app/components/MechanicalPricing";
import CeramicPricing from "@/app/components/CeramicServices";
import BodyPaintingPricing from "@/app/components/BodyPaintingPricing";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-12">
        {/* HEADER */}

        <h1 className="text-4xl font-bold">{service.title}</h1>

        <p className="mt-5 text-lg text-gray-700">{service.description}</p>

        {/* SERVICE BUTTONS */}

        {service.slug === "mechanical-service" && (
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/offers"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Package
            </Link>

            <a
              href="#paid-packages"
              className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold"
            >
              Paid Services
            </a>
          </div>
        )}

        {service.slug === "ceramic-coating" && (
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#ceramic-section"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Ceramic Coating
            </a>

            <a
              href="#beautification-section"
              className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold"
            >
              Other Beautification Service
            </a>
          </div>
        )}

        {service.slug === "body-denting-painting" && (
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#cashless-section"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Cashless Insurance Claim
            </a>

            <a
              href="#bodywork-section"
              className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold"
            >
              Paid Body Work
            </a>
          </div>
        )}

        {/* WHAT WE DO */}

        {service.slug !== "insurance-claim" &&
          service.slug !== "mechanical-service" &&
          service.slug !== "ceramic-coating" &&
          service.slug !== "body-denting-painting" && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>

              <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6 text-gray-700">
                <li>Professional inspection by certified technicians</li>
                <li>OEM quality parts & fluids</li>
                <li>Advanced diagnostic equipment</li>
                <li>Transparent pricing & updates</li>
                <li>Quick turnaround time</li>
                <li>Quality assurance checks</li>
              </ul>
            </section>
          )}

        {/* INSURANCE LOGOS */}

        {service.slug === "insurance-claim" && service.companies && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold mb-6">
              Cashless Insurance Available
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.companies.map((logo, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 flex justify-center items-center bg-white hover:shadow transition"
                >
                  <img
                    src={logo}
                    alt="insurance"
                    className="h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PRICING COMPONENTS */}

        {service.slug === "mechanical-service" && <MechanicalPricing />}

        {service.slug === "ceramic-coating" && (
          <section id="ceramic-section">
            <CeramicPricing />
          </section>
        )}

        {/* OTHER BEAUTIFICATION SERVICES */}

        {service.slug === "ceramic-coating" && (
          <section id="beautification-section" className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Other Beautification Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Paint Protection – UV
                </h3>
                <p className="text-gray-600">
                  Protects your car paint from harmful UV rays, fading and
                  oxidation. Helps maintain long-lasting shine and original
                  color of the vehicle.
                </p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Exterior Beautification
                </h3>
                <p className="text-gray-600">
                  Enhances the overall look of your car with deep cleaning and
                  polishing. Restores showroom-like shine and improves exterior
                  appearance.
                </p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Interior Enrichment
                </h3>
                <p className="text-gray-600">
                  Thoroughly cleans and refreshes seats, dashboard and interior
                  panels. Creates a hygienic, fresh and comfortable driving
                  environment.
                </p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Engine Dressing & Cleaning
                </h3>
                <p className="text-gray-600">
                  Removes dirt, grease and dust from the engine bay area.
                  Improves engine appearance and helps protect components from
                  corrosion.
                </p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Headlight Restoration
                </h3>
                <p className="text-gray-600">
                  Removes yellowing, haze and oxidation from headlights.
                  Improves night visibility and enhances the overall look of the
                  car.
                </p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Underbody Coating
                </h3>
                <p className="text-gray-600">
                  Protects the vehicle’s underbody from rust, water, mud and
                  road salt. Increases durability of the chassis and reduces
                  corrosion damage.
                </p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Silencer Coating</h3>
                <p className="text-gray-600">
                  Prevents rust formation on the silencer and exhaust system.
                  Improves durability and extends the life of exhaust
                  components.
                </p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Teflon Coating</h3>
                <p className="text-gray-600">
                  Provides a smooth protective layer over the car paint surface.
                  Enhances gloss, reduces minor scratches and repels dust and
                  water.
                </p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Rodent Coating</h3>
                <p className="text-gray-600">
                  Special coating that protects wiring from rat and rodent
                  damage. Helps prevent costly electrical repairs and wiring
                  issues.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CASHLESS INSURANCE LOGOS */}

        {service.slug === "body-denting-painting" && (
          <section id="cashless-section" className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Cashless Insurance Claim
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 13 }).map((_, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 flex justify-center items-center bg-white hover:shadow transition"
                >
                  <img
                    src={`/insurance/image${i + 1}.png`}
                    alt="insurance"
                    className="h-16 object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm p-5 mt-6">
              Note : All company logos, names, and trademarks mentioned above
              are the respective properties of their owners{" "}
            </p>
          </section>
        )}

        {/* PAID BODY WORK TABLE */}

        {service.slug === "body-denting-painting" && <BodyPaintingPricing />}

        {/* WHY CHOOSE */}

        <section className="mt-14 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose One Stop Carz
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold">Expert Team</h4>
              <p className="mt-2 text-gray-600">
                Skilled technicians with years of hands-on experience.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Genuine Parts</h4>
              <p className="mt-2 text-gray-600">
                Only trusted OEM or equivalent components used.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Customer First</h4>
              <p className="mt-2 text-gray-600">
                Clear communication and honest recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">Our Process</h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">01</span>
              <p className="mt-2 font-medium">Book Appointment</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">02</span>
              <p className="mt-2 font-medium">Denting</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">03</span>
              <p className="mt-2 font-medium">Painting</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">04</span>
              <p className="mt-2 font-medium">Final Delivery</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
