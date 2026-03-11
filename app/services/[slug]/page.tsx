import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import MechanicalPricing from "@/app/components/MechanicalPricing";

const mechanicalPaidPackages = [
  {
    name: "General Service (PMS)",
    hatchback: 1250,
    sedan: 1450,
    suv: 1750,
  },
  {
    name: "Wheel Balancing (4 Wheels)",
    hatchback: 500,
    sedan: 600,
    suv: 900,
  },
  {
    name: "Wheel Alignment",
    hatchback: 300,
    sedan: 300,
    suv: 550,
  },
  {
    name: "Tyre Rotation",
    hatchback: 100,
    sedan: 200,
    suv: 400,
  },
  {
    name: "Electrical Check-Up",
    hatchback: 450,
    sedan: 550,
    suv: 650,
  },
  {
    name: "Injector Service (4)",
    hatchback: 600,
    sedan: 800,
    suv: 1200,
  },
  {
    name: "Car Diagnostic",
    hatchback: 500,
    sedan: 750,
    suv: 1000,
  },
  {
    name: "Full Washing",
    hatchback: 400,
    sedan: 450,
    suv: 500,
  },
];

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

        {/* Mechanical Buttons */}

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

        {/* WHAT WE DO */}

        {service.slug !== "insurance-claim" &&
          service.slug !== "mechanical-service" && (
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

        {/* Mechanical Paid Packages */}

        {service.slug === "mechanical-service" && <MechanicalPricing />}

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
              <p className="mt-2 font-medium">Vehicle Inspection</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">03</span>
              <p className="mt-2 font-medium">Service Execution</p>
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
