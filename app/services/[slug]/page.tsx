//app/service/[slug]/page.tsx

import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

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

        {/* HIGHLIGHTS */}
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

        {/* CTA */}
        <section className="mt-16 bg-black text-white p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold">Ready to Book Your Service?</h2>

          <p className="mt-3 text-gray-400">
            Schedule your appointment today and let our experts take care of
            your car.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/booking"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold"
            >
              Book Now
            </Link>

            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-md font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
