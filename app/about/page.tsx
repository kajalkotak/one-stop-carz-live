"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold">
          About <span className="text-red-600">One Stop Carz</span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Your trusted multi-brand car workshop delivering premium service,
          transparency, and customer satisfaction.
        </p>
      </section>

      {/* ABOUT STORY */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div>
            <img
              src="/about/workshop.jpg"
              alt="Workshop"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Your Car Deserves Expert Care
            </h2>

            <p className="text-gray-600 mb-4">
              One Stop Carz is a professionally managed multi-brand car workshop
              based in Vadodara, offering complete automotive solutions under
              one roof.
            </p>

            <p className="text-gray-600 mb-4">
              With 11+ years of experience, we specialize in servicing,
              denting-painting, insurance claims and detailing services.
            </p>

            <p className="text-gray-600">
              Our goal is to deliver dealership-level quality at competitive
              pricing with fast turnaround time.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-red-600">11+</h3>
            <p className="mt-2 text-gray-300">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600">20,000+</h3>
            <p className="mt-2 text-gray-300">Cars Serviced</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600">100%</h3>
            <p className="mt-2 text-gray-300">Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Choose <span className="text-red-600">Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Save up to 30% vs Authorized Service Center",
              "Experienced & Skilled Technicians",
              "Genuine Spare Parts",
              "Quick Turnaround Time",
              "Insurance Claim Support",
              "100% Transparent Pricing",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted and preferred multi-brand car service
              center in India by delivering consistent quality and innovation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Provide high-quality services</li>
              <li>Maintain transparent pricing</li>
              <li>Ensure quick turnaround time</li>
              <li>Build long-term customer trust</li>
              <li>Upgrade technology continuously</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-500 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Need Service or Insurance Claim?</h2>

        <p className="mt-4">
          Contact us now for quick support and hassle-free service.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/919624702104"
            className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold"
          >
            WhatsApp Now
          </a>

          <Link
            href="/booking"
            className="border border-white px-6 py-3 rounded-md font-semibold"
          >
            Book Service
          </Link>
        </div>
      </section>
    </main>
  );
}
