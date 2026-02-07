"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { packages } from "@/app/data/packages";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const VEHICLE_TYPES = ["Hatchback", "Sedan", "SUV", "Luxury"];

// 🔴 BUSINESS NUMBER — NO + NO SPACES
const OWNER_WHATSAPP = "918460692482";

/* ---------------- FORM ---------------- */

function BookingForm() {
  const searchParams = useSearchParams();

  const serviceFromUrl = searchParams.get("service") ?? "";

  const [formData, setFormData] = useState({
    branch: "One Stop Carz – Vadodara",
    name: "",
    mobile: "",
    carReg: "",
    carModel: "",
    vehicleType: "",
    service: serviceFromUrl,
    date: "",
    slot: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
📅 New Booking – One Stop Carz

👤 Name: ${formData.name}
📞 Mobile: ${formData.mobile}

🚘 Reg: ${formData.carReg}
🚗 Model: ${formData.carModel}
🛻 Type: ${formData.vehicleType}

🛠 Service: ${formData.service}

📆 Date: ${formData.date}
⏰ Slot: ${formData.slot}

🏠 Address:
${formData.address}
`;

    const encoded = encodeURIComponent(message);

    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encoded}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-center">
          Book <span className="text-red-600">Your Appointment</span>
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Fill all required details to confirm your booking.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Branch</label>
            <input
              value={formData.branch}
              disabled
              className="w-full border bg-gray-100 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mobile *</label>
            <input
              required
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Registration *
            </label>
            <input
              required
              name="carReg"
              value={formData.carReg}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Car Model *
            </label>
            <input
              required
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Vehicle Type *
            </label>
            <select
              required
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="">Select</option>
              {VEHICLE_TYPES.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Service *</label>
            <select
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="">Select</option>

              {packages.map((pkg) => (
                <option key={pkg.slug} value={pkg.title}>
                  {pkg.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date *</label>
            <input
              type="date"
              required
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Time Slot *
            </label>
            <select
              required
              name="slot"
              value={formData.slot}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="">Select</option>
              {TIME_SLOTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address *</label>
            <textarea
              required
              rows={3}
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

/* ---------------- PAGE ---------------- */

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading…</div>}>
      <BookingForm />
    </Suspense>
  );
}
