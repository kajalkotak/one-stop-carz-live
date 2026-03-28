"use client";

import Image from "next/image";
import Link from "next/link";
import { packages } from "@/app/data/packages";
import Counter from "./components/Counter";
import LimitedOfferPopup from "@/app/components/LimitedOfferPopup";
import { services } from "@/app/data/services";
import GoogleReviews from "./components/GoogleReviews";
import BrandSlider, { defaultBrands } from "./components/BrandSlider";

export default function Home() {
  const extraBrands = [
    "/insurance/companylogo_1.png",
    "/insurance/companylogo_2.png",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <LimitedOfferPopup />

      {/* 🔥 HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Accident? Service Due?{" "}
              <span className="text-red-600">Don’t Worry</span>
              <br /> We Handle Everything
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Premium Car Care | Accident Repair | Insurance Claim Assistance |
              Detailing
            </p>

            <p className="mt-4 text-gray-400 max-w-xl">
              We provide end-to-end automotive solutions with a focus on
              quality, transparency, and customer satisfaction. From routine
              servicing to complete accident repairs & detailing services, your
              car is in expert hands.
            </p>

            <p className="mt-3 text-gray-400 max-w-xl">
              At One Stop Carz, we specialize in multi-brand car servicing,
              denting-painting, insurance claim support and detailing. Our goal
              is to deliver dealership-level quality at competitive pricing with
              fast turnaround time.
            </p>

            <div className="mt-8 flex gap-5 flex-wrap">
              <Link href="/booking">
                <button className="bg-red-600 px-8 py-4 rounded-lg text-lg font-semibold">
                  Book Service
                </button>
              </Link>

              <a
                href="https://wa.me/919624702104"
                className="bg-green-600 px-8 py-4 rounded-lg text-lg font-semibold"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          <div className="relative w-full h-[420px]">
            <Image
              src="/banner/main-banner.png"
              alt="Workshop"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 🔥 CORE SERVICES */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Our <span className="text-red-600">Core Services</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complete automotive solutions designed for performance, safety and
            premium care.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              { title: "Car Service & Maintenance", icon: "🔧" },
              { title: "Denting Painting (Accident Repair)", icon: "🎨" },
              { title: "Insurance Claim", icon: "📄" },
              { title: "Engine & Mechanical Repairs", icon: "⚙️" },
              { title: "Car Detailing & Coating", icon: "✨" },
              { title: "Car Electrical & AC Work", icon: "❄️" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md border border-red-200 ring-1 ring-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 group"
              >
                {/* ICON */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TITLE */}
                <p className="font-semibold text-lg">{item.title}</p>

                {/* UNDERLINE EFFECT */}
                <div className="mt-3 w-10 h-1 bg-red-600 mx-auto rounded group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 SERVICES */}
      {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Our <span className="text-red-600">Services</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complete car care solutions designed for performance, safety and
            appearance.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8"> */}
      {/* SERVICE 1 */}
      {/* <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold">Mechanical Service</h3>

              <p className="mt-4 text-gray-600">
                Complete engine diagnostics, maintenance and repair services to
                keep your car running smoothly.
              </p>

              <Link
                href="/services/mechanical-service"
                className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-md"
              >
                View Details
              </Link>
            </div> */}

      {/* SERVICE 2 */}
      {/* <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition border-2 border-red-600">
              <h3 className="text-2xl font-semibold">Denting & Painting</h3>

              <p className="mt-4 text-gray-600">
                Professional accident repair, dent removal and 100% color match
                painting services.
              </p>

              <Link
                href="/services/body-denting-painting"
                className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-md"
              >
                View Details
              </Link>
            </div> */}

      {/* SERVICE 3 */}
      {/* <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold">Car Detailing</h3>

              <p className="mt-4 text-gray-600">
                Premium detailing services including ceramic coating, polishing
                and complete car beautification.
              </p>

              <Link
                href="/services/ceramic-coating"
                className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-md"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* 🔥 WHY CHOOSE */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-red-600">Us</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of car owners for quality service, transparent
            pricing and expert care.
          </p>

          <div className="mt-14 grid md:grid-cols-4 gap-8">
            {[
              {
                text: "Save up to 30% vs Authorized Service Center",
                icon: "💰",
              },
              { text: "Experienced & Well Educated Technicians", icon: "👨‍🔧" },
              { text: "Genuine Spare Parts", icon: "🔩" },
              { text: "Quick Turnaround Time", icon: "⚡" },
              { text: "Insurance Claim Support", icon: "📄" },
              { text: "Customer First Approach", icon: "🤝" },
              { text: "100% Color Match Guarantee", icon: "🎨" },
              { text: "Hassle Free Service", icon: "✅" },
              { text: "Transparent Pricing", icon: "📊" },
              { text: "Accuracy of Overall Work", icon: "🎯" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md border border-red-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                {/* ICON */}
                <div className="text-3xl mb-3">{item.icon}</div>

                {/* TEXT */}
                <p className="font-semibold text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 URGENT CTA */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Need Urgent Repair or Insurance Claim?
        </h2>

        <p className="mt-4">Call Now: 9624702104 / 9624702103 / 9624702102</p>

        <a
          href="https://wa.me/919624702104"
          className="inline-block mt-6 bg-white text-red-600 px-6 py-3 rounded-md font-semibold"
        >
          WhatsApp for Instant Support
        </a>
      </section>

      {/* 🔥 OFFERS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Featured <span className="text-red-600">Offers</span>
          </h2>

          <div className="mt-14 grid md:grid-cols-4 gap-8">
            {packages.slice(0, 4).map((item) => (
              <div
                key={item.slug}
                className="bg-gray-50 p-6 rounded-xl shadow flex flex-col"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-gray-600 flex-grow">{item.shortDesc}</p>

                <Link
                  href={`/offers/${item.slug}`}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 BRAND SLIDER */}
      <BrandSlider customBrands={[...defaultBrands, ...extraBrands]} />

      <GoogleReviews />

      {/* 🔥 STATS */}
      <section className="bg-black py-24 px-6 text-white text-center">
        <h2 className="text-4xl font-bold">
          Trusted by <span className="text-red-600">Thousands</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          <div>
            <Counter value={11} suffix="+" />
            <p>Years Experience</p>
          </div>

          <div>
            <Counter value={20000} suffix="+" />
            <p>Cars Serviced</p>
          </div>
        </div>
      </section>
    </main>
  );
}
