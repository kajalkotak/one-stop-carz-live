// app/insurance-claim/InsuranceForm.tsx

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function InsuranceForm() {
  const searchParams = useSearchParams();
  const companyFromURL = searchParams.get("company") || "";

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [carModel, setCarModel] = useState("");
  const [policyType, setPolicyType] = useState("");

  useEffect(() => {
    setCompany(companyFromURL);
  }, [companyFromURL]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const message = `Hello,%0AI want to apply for insurance claim.%0A%0ACompany: ${company}%0AName: ${name}%0AMobile: ${mobile}%0ACar Model: ${carModel}%0APolicy Type: ${policyType}`;

    const whatsappNumber = "919XXXXXXXXX"; // CHANGE

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-4">
          Insurance Claim Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={company}
            readOnly
            className="w-full border p-3 rounded bg-gray-100"
          />

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border p-3 rounded"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Car Model"
            className="w-full border p-3 rounded"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          />

          <select
            className="w-full border p-3 rounded"
            value={policyType}
            onChange={(e) => setPolicyType(e.target.value)}
            required
          >
            <option value="">Select Policy Type</option>
            <option value="Comprehensive">Comprehensive</option>
            <option value="Third Party">Third Party</option>
            <option value="Zero Dep">Zero Dep</option>
          </select>

          <button className="w-full bg-green-600 text-white p-3 rounded">
            Submit on WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}
