//

"use client";

import { useState } from "react";

const services = [
  {
    name: "Bumper",
    hatchback: 2500,
    sedan: 2800,
    suv: 3500,
    luxury: 5000,
  },
  {
    name: "Hood",
    hatchback: 2800,
    sedan: 3000,
    suv: 3800,
    luxury: 5500,
  },
  {
    name: "Fender",
    hatchback: 2300,
    sedan: 2500,
    suv: 2800,
    luxury: 4000,
  },
  {
    name: "Door",
    hatchback: 2800,
    sedan: 3200,
    suv: 3800,
    luxury: 5500,
  },
  {
    name: "Roof",
    hatchback: 3500,
    sedan: 4000,
    suv: 4500,
    luxury: 6500,
  },
  {
    name: "Quarter Panel",
    hatchback: 2700,
    sedan: 3000,
    suv: 3200,
    luxury: 4500,
  },
  {
    name: "Running Border",
    hatchback: 2000,
    sedan: 2500,
    suv: 3000,
    luxury: 4000,
  },
  {
    name: "Dicky",
    hatchback: 2800,
    sedan: 3000,
    suv: 3500,
    luxury: 5500,
  },
];

export default function BodyPaintingPricing() {
  const [carType, setCarType] = useState("hatchback");
  const [search, setSearch] = useState("");

  const filtered = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section id="bodywork-section" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Panel Wise Painting Rate
      </h2>

      {/* CAR TYPE BUTTONS */}

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["hatchback", "sedan", "suv", "luxury"].map((type) => (
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

      {/* SEARCH */}

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search panel..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md w-full max-w-md"
        />
      </div>

      {/* TABLE */}

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">Panel</th>
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
                      href={`https://wa.me/918460692482?text=Hi I want ${item.name} painting service`}
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

      <p className="text-sm text-gray-500 mt-4 text-center">
        Metallic paint charges may increase by ₹250 per panel on every segment.
      </p>
    </section>
  );
}
