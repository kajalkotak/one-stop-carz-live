// app/insurance-claim/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function InsuranceClaimPage() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [carModel, setCarModel] = useState("");
  const [policyType, setPolicyType] = useState("");
  const [error, setError] = useState("");

  // ✅ Get company from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const companyFromURL = params.get("company") || "";
    setCompany(companyFromURL);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // ✅ Mobile validation
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Enter valid 10 digit mobile number (start with 6-9)");
      return;
    }

    setError("");

    const message = `Hello,%0A%0AI want to apply for insurance claim.%0A%0A*Company:* ${company}%0A*Name:* ${name}%0A*Mobile:* ${mobile}%0A*Car Model:* ${carModel}%0A*Policy Type:* ${policyType}`;

    const whatsappNumber = "919XXXXXXXXX"; // 👉 CHANGE THIS

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Insurance Claim Form
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Fill your details and our team will contact you
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company */}
          <div>
            <label className="text-sm text-gray-600">Insurance Company</label>
            <input
              type="text"
              value={company}
              readOnly
              className="w-full mt-1 border p-3 rounded bg-gray-100"
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 border p-3 rounded focus:ring-2 focus:ring-green-200 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="text-sm text-gray-600">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full mt-1 border p-3 rounded focus:ring-2 focus:ring-green-200 outline-none"
              value={mobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setMobile(value);
                }
              }}
              maxLength={10}
              required
            />

            {/* Error */}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Car Model */}
          <div>
            <label className="text-sm text-gray-600">Car Model</label>
            <input
              type="text"
              placeholder="e.g. Swift, Creta"
              className="w-full mt-1 border p-3 rounded focus:ring-2 focus:ring-green-200 outline-none"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              required
            />
          </div>

          {/* Policy Type */}
          <div>
            <label className="text-sm text-gray-600">Policy Type</label>
            <select
              className="w-full mt-1 border p-3 rounded focus:ring-2 focus:ring-green-200 outline-none"
              value={policyType}
              onChange={(e) => setPolicyType(e.target.value)}
              required
            >
              <option value="">Select policy type</option>
              <option value="Comprehensive">Comprehensive</option>
              <option value="Third Party">Third Party</option>
              <option value="Zero Dep">Zero Dep</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white p-3 rounded-md font-semibold shadow-md"
          >
            Submit on WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}
