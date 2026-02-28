"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { packages } from "@/app/data/packages";
import Counter from "./components/Counter";
import LimitedOfferPopup from "@/app/components/LimitedOfferPopup";
import { services } from "@/app/data/services";
import GoogleReviews from "./components/GoogleReviews";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <LimitedOfferPopup />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          One Stop Carz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Your trusted destination for car servicing, detailing, ceramic
          coating, insurance claims and AMC packages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <Link href="/booking">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
              Book Service
            </button>
          </Link>

          <Link href="/offers">
            <button className="border border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition">
              View Offers
            </button>
          </Link>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* SERVICES HEADING */}
          <h2 className="text-4xl font-bold text-center">
            Our <span className="text-red-600 tracking-wide">Services</span>
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Professional car care solutions delivered by expert technicians.
          </p>

          {/* SERVICES GRID */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-2 text-gray-600 flex-grow">
                  {service.shortDesc}
                </p>

                {/* BUTTON */}
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-block text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Why Choose{" "}
            <span className="text-red-600 tracking-wide">One Stop Carz</span>?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We focus on quality workmanship, honest pricing and complete
            customer satisfaction for every vehicle we service.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Technicians",
                desc: "Experienced professionals trained to handle all car models.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden charges. You know what you pay for.",
              },
              {
                title: "Genuine Parts",
                desc: "Only original and high-quality spare parts used.",
              },
              {
                title: "Quick Turnaround",
                desc: "Fast service delivery without compromising quality.",
              },
              {
                title: "Customer Satisfaction",
                desc: "Hundreds of happy customers and growing every day.",
              },
              {
                title: "Easy Booking",
                desc: "Book your service online in just a few clicks.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-4xl font-bold">
            How <span className="text-red-600 tracking-wide">It Works</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Booking your car service with One Stop Carz is quick and
            hassle-free.
          </p>

          {/* STEPS GRID */}
          <div className="mt-14 grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Service",
                desc: "Select the service or package that suits your car.",
              },
              {
                step: "02",
                title: "Pick Date & Time",
                desc: "Choose your preferred slot from our booking system.",
              },
              {
                step: "03",
                title: "Confirm Booking",
                desc: "Submit details and get instant confirmation.",
              },
              {
                step: "04",
                title: "Visit Workshop",
                desc: "Arrive at the workshop or request pickup service.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition relative"
              >
                {/* STEP NUMBER */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>

                <h3 className="mt-10 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED OFFERS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-4xl font-bold">
            Featured <span className="text-red-600">Offers</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our most popular service packages and memberships.
          </p>

          {/* OFFERS GRID */}
          <div className="mt-14 grid md:grid-cols-4 gap-8">
            {packages.slice(0, 4).map((item) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-gray-600 flex-grow">{item.shortDesc}</p>

                <div className="mt-6 flex gap-3 justify-center">
                  <Link
                    href={`/offers/${item.slug}`}
                    className="border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-600 hover:text-white transition"
                  >
                    View Details
                  </Link>

                  <Link
                    href={`/booking?service=${encodeURIComponent(item.title)}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* VIEW ALL CTA */}
          <div className="mt-16">
            <Link
              href="/offers"
              className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition"
            >
              View All Offers
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-black py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-4xl font-bold">
            Trusted by <span className="text-red-600">Thousands</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our experience and dedication speak through the numbers.
          </p>

          {/* STATS GRID */}
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {[
              { label: "Years Experience", number: 9, suffix: "+" },
              { label: "Cars Serviced", number: 20000, suffix: "+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-xl p-8"
              >
                <Counter value={stat.number} suffix={stat.suffix} />

                <p className="mt-3 text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
    </main>
  );
}
