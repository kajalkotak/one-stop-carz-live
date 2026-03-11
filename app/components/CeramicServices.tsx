//

"use client";

import { useState } from "react";

const services = [
  {
    name: "Paint Protection - UV",
    hatchback: 1000,
    sedan: 1200,
    suv: 1500,
  },
  {
    name: "Exterior Beautification",
    hatchback: 1500,
    sedan: 1700,
    suv: 2000,
  },
  {
    name: "Interior Enrichment",
    hatchback: 1200,
    sedan: 1500,
    suv: 1700,
  },
  {
    name: "Engine Dressing & Cleaning",
    hatchback: 500,
    sedan: 600,
    suv: 700,
  },
  {
    name: "Headlight Restoration",
    hatchback: 800,
    sedan: 1000,
    suv: 1200,
  },
  {
    name: "Underbody Coating",
    hatchback: 2200,
    sedan: 2300,
    suv: 2500,
  },
  {
    name: "Silencer Coating",
    hatchback: 1250,
    sedan: 1450,
    suv: 1650,
  },
  {
    name: "Teflon Coating",
    hatchback: 3000,
    sedan: 4000,
    suv: 5000,
  },
  {
    name: "Rodent Coating",
    hatchback: 800,
    sedan: 900,
    suv: 1000,
  },
];

export default function CeramicPricing() {
  const [carType, setCarType] = useState("hatchback");
  const [search, setSearch] = useState("");

  const filtered = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section id="paid-packages" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Ceramic Coating Services
      </h2>

      {/* Car Type Selector */}

      <div className="flex justify-center gap-4 mb-6">
        {["hatchback", "sedan", "suv"].map((type) => (
          <button
            key={type}
            onClick={() => setCarType(type)}
            className={`px-4 py-2 rounded-md border ${
              carType === type ? "bg-red-600 text-white" : "bg-white"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search */}

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md w-full max-w-md"
        />
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-center">Price</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, i) => {
              const price = item[carType as keyof typeof item];

              return (
                <tr key={i} className="border-t">
                  <td className="p-4">{item.name}</td>

                  <td className="p-4 text-center font-bold text-red-600">
                    ₹{price}
                  </td>

                  <td className="p-4 text-center">
                    <a
                      href={`https://wa.me/918460692482?text=Hi I want ${item.name} service`}
                      target="_blank"
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
