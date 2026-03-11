// app/components/MechanicalPricing.tsx

"use client";

import { useState } from "react";

const services = [
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

export default function MechanicalPricing() {
  const [carType, setCarType] = useState("hatchback");
  const [search, setSearch] = useState("");

  const filtered = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section id="paid-packages" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">Paid Services</h2>

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
