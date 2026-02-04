// app/booking/page.tsx

"use client";

import { Suspense, useEffect, useState } from "react";
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

// 🔴 CHANGE TO REAL BUSINESS NUMBER (NO +, NO SPACES)
const OWNER_WHATSAPP = "+918460692482";

/* ---------------- INNER FORM ---------------- */

function BookingForm() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") || "";

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

  useEffect(() => {
    if (serviceFromUrl) {
      setFormData((prev) => ({
        ...prev,
        service: serviceFromUrl,
      }));
    }
  }, [serviceFromUrl]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
📅 New Booking Request – One Stop Carz

👤 Name: ${formData.name}
📞 Mobile: ${formData.mobile}

🚘 Car Reg: ${formData.carReg}
🚗 Car Model: ${formData.carModel}
🛻 Vehicle Type: ${formData.vehicleType}

🛠 Service: ${formData.service}

📆 Date: ${formData.date}
⏰ Slot: ${formData.slot}

🏠 Address:
${formData.address}
`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${OWNER_WHATSAPP}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center">
          Book <span className="text-red-600">Your Appointment</span>
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Fill all required details to confirm your booking.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          {/* BRANCH */}
          <div>
            <label className="block text-sm font-medium mb-1">Branch</label>
            <input
              value={formData.branch}
              disabled
              className="w-full border bg-gray-100 rounded-md px-4 py-2"
            />
          </div>

          {/* NAME */}
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

          {/* MOBILE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number *
            </label>
            <input
              required
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* CAR REG */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Car Registration *
            </label>
            <input
              required
              name="carReg"
              value={formData.carReg}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* CAR MODEL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Car Model *
            </label>
            <input
              required
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              placeholder="Eg: Honda City"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* VEHICLE TYPE */}
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
              <option value="">Select Type</option>
              {VEHICLE_TYPES.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* SERVICE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Service / Package *
            </label>
            <select
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="">Select Service</option>

              {packages.map((pkg) => (
                <option key={pkg.slug} value={pkg.title}>
                  {pkg.title}
                  {pkg.duration ? ` (${pkg.duration})` : ""}
                </option>
              ))}
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Preferred Date *
            </label>
            <input
              required
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* SLOT */}
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
              <option value="">Select Slot</option>
              {TIME_SLOTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* ADDRESS */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address *</label>
            <textarea
              required
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* SUBMIT */}
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

/* ---------------- PAGE WRAPPER ---------------- */

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading…</div>}>
      <BookingForm />
    </Suspense>
  );
}
