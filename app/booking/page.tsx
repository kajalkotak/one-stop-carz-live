"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { packages } from "@/app/data/packages";

const VEHICLE_TYPES = ["Hatchback", "Sedan", "SUV", "Luxury", "EV"];

const OWNER_WHATSAPP = "918460692482";

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

    // ✅ Mobile validation
    if (formData.mobile.length !== 10) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    // ✅ Registration validation (GJ01AB1234)
    const regPattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    if (formData.carReg && !regPattern.test(formData.carReg)) {
      alert("Enter valid registration (e.g. GJ01AB1234)");
      return;
    }

    const message = `
📅 New Booking – One Stop Carz

👤 Name: ${formData.name}
📞 Mobile: ${formData.mobile}

🚘 Reg: ${formData.carReg}
🚗 Model: ${formData.carModel}
🛻 Type: ${formData.vehicleType}

🛠 Service: ${formData.service}

📆 Date: ${formData.date}

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
          {/* Branch */}
          <div>
            <label className="block text-sm font-medium mb-1">Branch</label>
            <input
              value={formData.branch}
              disabled
              className="w-full border bg-gray-100 rounded-md px-4 py-2"
            />
          </div>

          {/* Name (REQUIRED) */}
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

          {/* Mobile (10 digit) */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile *</label>
            <input
              required
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData((prev) => ({ ...prev, mobile: value }));
              }}
              maxLength={10}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* Registration (FORMAT) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Registration
            </label>
            <input
              name="carReg"
              value={formData.carReg}
              onChange={(e) => {
                const value = e.target.value.toUpperCase();
                setFormData((prev) => ({ ...prev, carReg: value }));
              }}
              placeholder="GJ01AB1234"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* Car Model */}
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

          {/* Vehicle Type (NOT REQUIRED + EV ADDED) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Vehicle Type
            </label>
            <select
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

          {/* Service (NEW OPTIONS ADDED) */}
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

              <option value="Bodyshop Service">Bodyshop Service</option>
              <option value="Accidental Claim">Accidental Claim</option>
              <option value="Mechanical Service">Mechanical Service</option>
              <option value="Other Service">Other Service</option>

              {packages.map((pkg) => (
                <option key={pkg.slug} value={pkg.title}>
                  {pkg.title}
                </option>
              ))}
            </select>
          </div>

          {/* Date (NO PAST DATE) */}
          <div>
            <label className="block text-sm font-medium mb-1">Date *</label>
            <input
              type="date"
              required
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* Address */}
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

          {/* Submit */}
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

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading…</div>}>
      <BookingForm />
    </Suspense>
  );
}
